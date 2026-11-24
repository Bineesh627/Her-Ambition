// ---------------------------------------------------------------------------
// GET /api/events
// Public feed of upcoming sessions, managed in Contentful.
//
// Setup: put these in .env.local (local) and in Vercel > Settings > Environment Variables:
//   CONTENTFUL_SPACE_ID        Contentful Space ID
//   CONTENTFUL_ACCESS_TOKEN    Content Delivery API access token
//   CONTENTFUL_ENVIRONMENT     optional, defaults to "master"
//   CONTENTFUL_EVENT_TYPE      optional content type ID (default: tries "events", then "event")
//
// Content type fields: date (Date & time), title, category, description, registrationLink
//
// Only published entries are returned (Content Delivery API). The token stays
// on the server and is never sent to the browser.
// ---------------------------------------------------------------------------

type EventType = "Community" | "Workshop" | "Webinar" | "Programme";
const TYPES: EventType[] = ["Community", "Workshop", "Webinar", "Programme"];

interface ContentfulEntry {
  sys: { id: string };
  fields: {
    title?: string;
    date?: string;
    category?: string;
    description?: string;
    registrationLink?: string;
    time?: string;
  };
}

const okHeaders = { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" };

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

const normaliseType = (t = ""): EventType =>
  TYPES.find((x) => x.toLowerCase() === t.trim().toLowerCase()) ?? "Community";

export async function GET() {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const token = process.env.CONTENTFUL_ACCESS_TOKEN;
  const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";
  const contentTypes = process.env.CONTENTFUL_EVENT_TYPE
    ? [process.env.CONTENTFUL_EVENT_TYPE]
    : ["events", "event"];

  // Not set up yet: tell the page so it can keep showing its built-in events.
  if (!space || !token) {
    return Response.json({ configured: false, events: [] }, { headers: okHeaders });
  }

  try {
    let items: ContentfulEntry[] = [];
    for (const contentType of contentTypes) {
      const url = new URL(`https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries`);
      url.searchParams.set("content_type", contentType);
      url.searchParams.set("order", "fields.date");
      url.searchParams.set("limit", "200");

      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 300 },
      });
      if (res.status === 400 && contentTypes.length > 1) continue; // unknown content type ID, try next
      if (!res.ok) throw new Error(`Contentful responded ${res.status}`);
      items = ((await res.json()).items || []) as ContentfulEntry[];
      break;
    }

    const events = items
      .filter((e) => e.fields?.title && e.fields?.date)
      .map((e) => {
        const f = e.fields;
        // A date-only value (YYYY-MM-DD) has no time zone shift; a full timestamp is shown in IST.
        const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(f.date!);
        const parts = dateOnly ? { date: f.date!, time: "" } : istParts(f.date!);
        return {
          id: e.sys.id,
          title: f.title!.trim(),
          date: parts.date,
          time: (f.time || "").trim() || parts.time,
          type: normaliseType(f.category),
          description: (f.description || "").trim(),
          link: f.registrationLink?.trim() || undefined,
        };
      })
      .sort((a, b) => a.date.localeCompare(b.date));

    return Response.json({ configured: true, events }, { headers: okHeaders });
  } catch {
    // Never break the page: report "configured, but nothing available right now"
    return Response.json(
      { configured: true, events: [], error: true },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  }
}
