"use client";

import React from "react";
import orgImg from "../../public/images/membership-meeting.webp";
import { CalendarCheck, Users, RefreshCw, TrendingUp, ArrowRight } from "lucide-react";

interface ForOrganisationsSectionProps {
  onEnquire?: () => void;
}

const offerings = [
  {
    title: "Maternity Transition Planning",
    description:
      "Help employees and managers plan for maternity leave, workload handovers and a smooth return.",
    icon: CalendarCheck,
  },
  {
    title: "Manager Readiness Workshops",
    description:
      "Equip managers with practical tools, conversation guides and confidence to support their teams.",
    icon: Users,
  },
  {
    title: "Return-to-Work Programme Design",
    description:
      "Create a structured return experience with role clarity, check-ins and a first 90 days plan.",
    icon: RefreshCw,
  },
  {
    title: "Women's Career Continuity & Development",
    description:
      "Help women remain engaged, rebuild momentum and progress into leadership roles.",
    icon: TrendingUp,
  },
];

export default function ForOrganisationsSection({ onEnquire }: ForOrganisationsSectionProps) {
  const imgSrc = typeof orgImg === "string" ? orgImg : orgImg.src;

  return (
    <section id="for-organisations" className="relative overflow-hidden bg-[#FAF8F5] border-t border-[#ECE5DC] py-14 sm:py-16 md:py-20 lg:py-24 scroll-mt-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Intro: copy + image */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B44A63] sm:text-xs">
              FOR ORGANISATIONS
            </p>
            <h2 className="mb-5 font-serif text-[30px] font-semibold leading-[1.15] tracking-tight text-[#1E1C1A] sm:text-[38px] lg:text-[44px]">
              Better Maternity Transitions. Stronger Career Continuity.
            </h2>
            <p className="mb-8 max-w-xl text-[15px] leading-[1.7] text-[#554F4B] sm:text-[16px]">
              We partner with organisations to support employees through maternity transitions,
              equip managers to lead with empathy and build structured return-to-work pathways
              that help talented women continue to grow.
            </p>
            <button
              type="button"
              onClick={onEnquire}
              className="inline-flex cursor-pointer items-center gap-2 rounded-[5px] bg-[#4A1F33] px-6 py-3.5 text-[13.5px] font-medium tracking-wide text-white shadow-xs transition-all duration-200 hover:bg-[#381827] hover:shadow-md active:scale-[0.98]"
            >
              Discuss Your Organisation&apos;s Needs
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-[#ECE5DD] bg-[#F4EEE8] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)]">
                <img
                  src={imgSrc}
                  alt="Colleagues in a supportive workplace conversation"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              {/* Overlay tagline card */}
              <div className="relative -mt-8 ml-auto w-[78%] rounded-xl bg-[#F3DDEB]/95 px-5 py-4 shadow-lg backdrop-blur-sm sm:absolute sm:-bottom-6 sm:right-[-14px] sm:mt-0 sm:w-[62%]">
                <p className="font-serif text-[16px] font-semibold leading-snug text-[#1E1C1A] sm:text-[18px]">
                  Retain talent.
                  <br />
                  Build inclusive workplaces.
                  <br />
                  Create lasting impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate offerings */}
        <div className="mt-16 sm:mt-20">
          <h3 className="font-serif text-2xl font-semibold text-[#1E1C1A] sm:text-3xl">
            Our Corporate Offerings
          </h3>
          <p className="mt-1.5 text-[14.5px] text-[#5A5550] sm:text-[15.5px]">
            Practical solutions to support your people and your business.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.title}
                  className="group flex flex-col rounded-2xl border border-[#ECE3D8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B44A63]/40 hover:shadow-[0_14px_30px_-12px_rgba(180,74,99,0.25)]"
                >
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#FCEEEA] text-[#B44A63] transition-colors group-hover:bg-[#B44A63] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <h4 className="mb-2.5 font-serif text-[18px] font-semibold leading-snug text-[#1E1C1A]">
                    {o.title}
                  </h4>
                  <p className="mb-6 flex-1 text-[13.5px] leading-relaxed text-[#6E6762]">{o.description}</p>
                  <button
                    type="button"
                    onClick={onEnquire}
                    className="inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-[5px] bg-[#4A1F33] px-4 py-2 text-[12.5px] font-medium text-white transition-colors hover:bg-[#381827]"
                  >
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
