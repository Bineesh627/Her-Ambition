"use client";

import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, CalendarDays } from "lucide-react";
import { events, CalendarEvent } from "@/data/events";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const typeStyles: Record<CalendarEvent["type"], string> = {
  Community: "bg-[#FCEEEA] text-[#B44A63]",
  Workshop: "bg-[#FAF1E2] text-[#9A6A25]",
  Webinar: "bg-[#EEF2F8] text-[#43608C]",
  Programme: "bg-[#EFF5EE] text-[#4C7A4A]",
};

const pad = (n: number) => String(n).padStart(2, "0");
const toKey = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`;

export default function EventsSection() {
  const today = new Date();
  const todayIso = toKey(today.getFullYear(), today.getMonth(), today.getDate());
  // Open on the month of the next upcoming event (falls back to the current month)
  const [view, setView] = useState(() => {
    const next = [...events].sort((a, b) => a.date.localeCompare(b.date)).find((e) => e.date >= todayIso);
    const [y, m] = (next ? next.date : todayIso).split("-").map(Number);
    return { year: y, month: m - 1 };
  });
  const [selected, setSelected] = useState<string | null>(null);

  const monthLabel = new Date(view.year, view.month, 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const eventsByDate = useMemo(() => {
    const map: Record<string, CalendarEvent[]> = {};
    events.forEach((e) => {
      (map[e.date] ||= []).push(e);
    });
    return map;
  }, []);

  // Build calendar cells (leading blanks + days of month)
  const firstWeekday = new Date(view.year, view.month, 1).getDay();
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const monthPrefix = `${view.year}-${pad(view.month + 1)}-`;
  const monthEvents = events
    .filter((e) => e.date.startsWith(monthPrefix))
    .sort((a, b) => a.date.localeCompare(b.date));
  const listEvents = selected ? eventsByDate[selected] || [] : monthEvents;

  const todayKey = toKey(today.getFullYear(), today.getMonth(), today.getDate());

  const changeMonth = (delta: number) => {
    const d = new Date(view.year, view.month + delta, 1);
    setView({ year: d.getFullYear(), month: d.getMonth() });
    setSelected(null);
  };

  return (
    <section id="events" className="bg-white py-14 sm:py-16 md:py-20 lg:py-24 scroll-mt-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6E6762] sm:text-xs">
            EVENTS
          </p>
          <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#1E1C1A] sm:text-4xl lg:text-[42px]">
            Join Us Live<span className="text-[#B44A63]">.</span>
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#5A5550] sm:text-[16px]">
            Workshops, webinars and community meetups. Pick a date to see what&apos;s on.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Calendar */}
          <div className="rounded-2xl border border-[#ECE5DD] bg-[#FDFBF9] p-4 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)] sm:p-6 lg:col-span-7">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-serif text-xl text-[#1E1C1A] sm:text-2xl">{monthLabel}</h3>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => changeMonth(-1)}
                  aria-label="Previous month"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E2DC] bg-white text-[#4A4541] transition-colors hover:border-[#B44A63] hover:text-[#B44A63]"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => changeMonth(1)}
                  aria-label="Next month"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E2DC] bg-white text-[#4A4541] transition-colors hover:border-[#B44A63] hover:text-[#B44A63]"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
              {WEEKDAYS.map((d) => (
                <div
                  key={d}
                  className="py-1.5 text-center text-[10.5px] font-semibold uppercase tracking-wider text-[#8A847F] sm:text-[11.5px]"
                >
                  {d}
                </div>
              ))}

              {cells.map((day, idx) => {
                if (day === null) return <div key={`b${idx}`} />;
                const key = toKey(view.year, view.month, day);
                const has = !!eventsByDate[key];
                const isToday = key === todayKey;
                const isSelected = key === selected;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelected(isSelected ? null : key)}
                    aria-label={`${day} ${monthLabel}${has ? ", has events" : ""}`}
                    className={`relative flex h-11 flex-col items-center justify-center sm:h-14 rounded-lg text-[13px] transition-all sm:text-[14.5px] ${
                      isSelected
                        ? "bg-[#B44A63] font-semibold text-white shadow-sm"
                        : has
                        ? "bg-[#FCEEEA] font-semibold text-[#8E3349] hover:bg-[#F8DFD9]"
                        : "text-[#3D3735] hover:bg-[#F5EFEB]"
                    } ${isToday && !isSelected ? "ring-1 ring-[#B44A63]" : ""}`}
                  >
                    {day}
                    {has && (
                      <span
                        className={`absolute bottom-1.5 h-1 w-1 rounded-full ${
                          isSelected ? "bg-white" : "bg-[#B44A63]"
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Event list */}
          <div className="lg:col-span-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#B44A63]">
                {selected ? "Selected date" : "This month"}
              </h3>
              {selected && (
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="text-[12.5px] font-medium text-[#6E6762] underline underline-offset-4 hover:text-[#B44A63]"
                >
                  Show whole month
                </button>
              )}
            </div>

            {listEvents.length === 0 ? (
              <div className="rounded-xl border border-dashed border-[#E3D9CE] bg-[#FAF8F5] p-8 text-center">
                <CalendarDays className="mx-auto mb-2 text-[#B8AFA6]" size={26} />
                <p className="text-[14px] text-[#6E6762]">No events here yet. Check another date or month.</p>
              </div>
            ) : (
              <ul className="space-y-3.5">
                {listEvents.map((e) => {
                  const d = new Date(e.date + "T00:00:00");
                  return (
                    <li
                      key={e.id}
                      className="flex gap-4 rounded-xl border border-[#EFE8DF] bg-white p-4 shadow-[0_4px_16px_-8px_rgba(0,0,0,0.06)]"
                    >
                      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-[#FCEEEA] text-[#B44A63]">
                        <span className="text-[10px] font-semibold uppercase tracking-wider">
                          {d.toLocaleString("en-US", { month: "short" })}
                        </span>
                        <span className="font-serif text-xl leading-none">{d.getDate()}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <span
                          className={`mb-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${typeStyles[e.type]}`}
                        >
                          {e.type}
                        </span>
                        <h4 className="text-[15px] font-semibold leading-snug text-[#1E1C1A]">{e.title}</h4>
                        <p className="mt-0.5 flex items-center gap-1.5 text-[12px] text-[#6E6762]">
                          <Clock size={12} /> {e.time}
                        </p>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-[#5A5550]">{e.description}</p>
                        <a
                          href={e.link || "#contact"}
                          {...(e.link ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="mt-2 inline-flex items-center text-[12.5px] font-medium text-[#B44A63] hover:text-[#9E3D54]"
                        >
                          {e.link ? "Register" : "Enquire to join"} &rarr;
                        </a>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
