// ---------------------------------------------------------------------------
// GET /api/events
// Public feed of upcoming sessions, managed in Contentful.
//
// Setup: put these in .env.local (local) and in Vercel > Settings > Environment Variables:
//   CONTENTFUL_SPACE_ID        Contentful Space ID
//   CONTENTFUL_ACCESS_TOKEN    Content Delivery API access token
//   CONTENTFUL_ENVIRONMENT     optional, defaults to "master"
//   CONTENTFUL_EVENT_TYPE      optional content type ID (default: auto-detected)
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

// Never break the page: report "configured, but nothing available right now".
// `status` is Contentful's HTTP status (401 = bad token, 404 = wrong Space ID / environment).
const fail = (status: number, note?: string) =>
  Response.json(
    { configured: true, events: [], error: true, status, ...(note ? { note } : {}) },
    { status: 200, headers: { "Cache-Control": "no-store" } }
  );

export async function GET() {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const token = process.env.CONTENTFUL_ACCESS_TOKEN;
  const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";
  // Not set up yet: tell the page so it can keep showing its built-in events.
  if (!space || !token) {
    return Response.json({ configured: false, events: [] }, { headers: okHeaders });
  }

  try {
    const base = `https://cdn.contentful.com/spaces/${space}/environments/${environment}`;
    const auth = { Authorization: `Bearer ${token}` };

    // Content type ID: use the env var if set, otherwise find the "Events" type automatically.
    let contentType = process.env.CONTENTFUL_EVENT_TYPE;
    if (!contentType) {
      const ctRes = await fetch(`${base}/content_types?limit=100`, { headers: auth, next: { revalidate: 300 } });
      if (!ctRes.ok) return fail(ctRes.status);
      const cts = ((await ctRes.json()).items || []) as {
        sys: { id: string };
        name?: string;
        fields?: { id: string }[];
      }[];
      const hasFields = (c: (typeof cts)[number]) =>
        (c.fields || []).some((f) => f.id === "registrationLink") || (c.fields || []).some((f) => f.id === "date");
      const match =
        cts.find((c) => /event/i.test(c.sys.id) || /event/i.test(c.name || "")) || cts.find(hasFields);
      if (!match) return fail(404, "no content type found");
      contentType = match.sys.id;
    }

    const url = new URL(`${base}/entries`);
    url.searchParams.set("content_type", contentType);
    url.searchParams.set("order", "fields.date");
    url.searchParams.set("limit", "200");
    const res = await fetch(url, { headers: auth, next: { revalidate: 300 } });
    if (!res.ok) return fail(res.status);
    const items = ((await res.json()).items || []) as ContentfulEntry[];

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
    return fail(500);
  }
}
