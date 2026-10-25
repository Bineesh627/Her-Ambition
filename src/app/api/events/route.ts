// ---------------------------------------------------------------------------
// GET /api/events
// Public, privacy-safe feed of upcoming sessions taken from Cal.com bookings.
//
// Setup (Vercel > Project > Settings > Environment Variables, then redeploy):
//   CAL_API_KEY          Cal.com API key (starts with "cal_")  — stays on the server
//   CAL_EVENT_TYPE_IDS   comma-separated Cal.com event-type IDs that should appear
//                        on the website, e.g. "123456,123457"
//                        (use ONLY public workshops/webinars/meetups — never 1:1 calls)
//   CAL_USERNAME         optional, defaults to the site's Cal.com username
//   CAL_API_VERSION      optional, defaults to 2026-05-01
//
// Privacy: only title, date, time and a booking link leave this file.
// Attendee names / emails / meeting links are never sent to the browser.
// ---------------------------------------------------------------------------

const CAL_BASE = process.env.CAL_API_BASE || "https://api.cal.com";
const CAL_VERSION = process.env.CAL_API_VERSION || "2026-05-01";
const DEFAULT_USERNAME = "her-ambition-lzbpgs";

interface CalAttendee {
  name?: string;
}
interface CalBooking {
  uid: string;
  title?: string;
  status?: string;
  start: string;
  duration?: number;
  eventType?: { id: number; slug?: string };
  attendees?: CalAttendee[];
}

type EventType = "Community" | "Workshop" | "Webinar" | "Programme";

const headers = {
  "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
};

const prettifySlug = (slug = "") =>
  slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const guessType = (text: string): EventType => {
  const t = text.toLowerCase();
  if (t.includes("webinar")) return "Webinar";
  if (t.includes("workshop") || t.includes("clinic") || t.includes("training")) return "Workshop";
  if (t.includes("programme") || t.includes("program") || t.includes("info session") || t.includes("cohort"))
    return "Programme";
  return "Community";
};

// Title that is safe to show publicly: drops Cal's default " between X and Y"
// suffix, and falls back to the event-type slug if an attendee name slipped in.
const safeTitle = (b: CalBooking) => {
  const cleaned = (b.title || "").replace(/\s+between\s+.*$/i, "").trim();
  const names = (b.attendees || []).map((a) => (a.name || "").trim().toLowerCase()).filter((n) => n.length > 1);
  const leaks = names.some((n) => cleaned.toLowerCase().includes(n)) || cleaned.includes("@");
  return !cleaned || leaks ? prettifySlug(b.eventType?.slug) || "HerAmbition Session" : cleaned;
};

const istParts = (iso: string) => {
  const d = new Date(iso);
  const date = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d); // YYYY-MM-DD
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(d);
  return { date, time: `${time} IST` };
};

export async function GET() {
  const key = process.env.CAL_API_KEY;
  const allowed = (process.env.CAL_EVENT_TYPE_IDS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const username = process.env.CAL_USERNAME || DEFAULT_USERNAME;

  // Not set up yet: tell the page so it can keep showing its manual events.
  if (!key || allowed.length === 0) {
    return Response.json({ configured: false, events: [] }, { headers });
  }

  try {
    const bookings: CalBooking[] = [];
    let cursor: string | null = null;

    for (let page = 0; page < 3; page++) {
      const url = new URL("/v2/bookings", CAL_BASE);
      url.searchParams.set("status", "upcoming");
      url.searchParams.set("eventTypeIds", allowed.join(","));
      url.searchParams.set("afterStart", new Date().toISOString());
      url.searchParams.set("sortStart", "asc");
      url.searchParams.set("limit", "100");
      if (cursor) url.searchParams.set("cursor", cursor);

      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${key}`, "cal-api-version": CAL_VERSION },
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`Cal.com responded ${res.status}`);

      const json = await res.json();
      bookings.push(...((json.data || []) as CalBooking[]));
      cursor = json.pagination?.hasMore ? json.pagination.nextCursor : null;
      if (!cursor) break;
    }

    const seen = new Set<string>();
    const events = bookings
      .filter((b) => b.status === "accepted" && b.eventType && allowed.includes(String(b.eventType.id)))
      .filter((b) => {
        // One entry per session (a seated session can have many bookings)
        const k = `${b.eventType!.id}-${b.start}`;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .map((b) => {
        const title = safeTitle(b);
        const { date, time } = istParts(b.start);
        return {
          id: b.uid,
          title,
          date,
          time,
          type: guessType(`${title} ${b.eventType?.slug || ""}`),
          description: `${b.duration ? `${b.duration}-minute live` : "Live"} session. Register to reserve your seat.`,
          link: b.eventType?.slug ? `https://cal.com/${username}/${b.eventType.slug}?date=${date}` : undefined,
        };
      })
      .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));

    return Response.json({ configured: true, events }, { headers });
  } catch {
    // Never break the page: report "configured, but nothing available right now"
    return Response.json({ configured: true, events: [], error: true }, { status: 200, headers: { "Cache-Control": "no-store" } });
  }
}
