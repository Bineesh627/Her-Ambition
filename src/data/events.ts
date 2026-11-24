// ---------------------------------------------------------------------------
// EVENTS CALENDAR
// All events now come from Contentful (see /api/events). No mock data here.
// date format: "YYYY-MM-DD"
// ---------------------------------------------------------------------------
export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: "Community" | "Workshop" | "Webinar" | "Programme";
  description: string;
  link?: string; // "Enquire to join" link (defaults to the #contact section)
}

export const events: CalendarEvent[] = [];
