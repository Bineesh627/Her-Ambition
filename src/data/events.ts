// ---------------------------------------------------------------------------
// EVENTS CALENDAR DATA
// Manual events. Events from Cal.com are added automatically (see /api/events).
// The entries marked `sample: true` are placeholders: they are hidden
// automatically once Cal.com is connected, and you can delete them any time.
// Add your own manual events here too (without `sample`) if you want.
// date format: "YYYY-MM-DD"
// ---------------------------------------------------------------------------
export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: "Community" | "Workshop" | "Webinar" | "Programme";
  description: string;
  link?: string; // optional registration / WhatsApp link
  sample?: boolean; // placeholder, hidden once Cal.com is connected
}

export const events: CalendarEvent[] = [
  {
    id: "e1",
    title: "Career Comeback Circle",
    date: "2026-11-07",
    time: "11:00 AM IST",
    type: "Community",
    description: "An open community conversation for women restarting their careers.",
    sample: true,
  },
  {
    id: "e2",
    title: "Resume & LinkedIn Clinic",
    date: "2026-11-14",
    time: "4:00 PM IST",
    type: "Workshop",
    description: "Hands-on session to refresh your resume and LinkedIn profile.",
    sample: true,
  },
  {
    id: "e3",
    title: "HerInfluence Info Session",
    date: "2026-11-21",
    time: "6:00 PM IST",
    type: "Programme",
    description: "Learn how the 6-week leadership programme works and who it is for.",
    sample: true,
  },
  {
    id: "e4",
    title: "Managers & Maternity Transitions",
    date: "2026-11-28",
    time: "3:00 PM IST",
    type: "Webinar",
    description: "A webinar for people managers and HR teams supporting returning mothers.",
    sample: true,
  },
  {
    id: "e5",
    title: "Community Monthly Meetup",
    date: "2026-12-05",
    time: "11:00 AM IST",
    type: "Community",
    description: "Monthly meetup to connect, share wins and set intentions.",
    sample: true,
  },
];
