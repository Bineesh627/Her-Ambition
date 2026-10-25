"use client";

import React from "react";
import { FileText, Users, BarChart3, Star } from "lucide-react";

interface CareerReadinessProps {
  onExplore?: () => void;
}

export default function CareerReadiness({
  onExplore,
}: CareerReadinessProps) {
  const features = [
    { title: "Resume & LinkedIn Makeover", icon: FileText },
    { title: "Interview Readiness", icon: Users },
    { title: "Career Clarity", icon: BarChart3 },
    { title: "Ongoing Support", icon: Star },
  ];

  return (
    <section
      id="career-readiness"
      className="relative overflow-hidden bg-[#FDF1EE] scroll-mt-20 py-14 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Main responsive layout */}
        <div className="grid w-full grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* Left Column */}
          <div className="min-w-0 w-full">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B44A63] sm:text-xs">
              CAREER READINESS
            </p>

            <h2 className="mb-4 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-[#1E1C1A] sm:mb-5 sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px]">
              Return to Work with Confidence.
            </h2>

            <p className="mb-8 w-full max-w-xl text-[15px] font-normal leading-relaxed text-[#5A5350] sm:text-[16px]">
              A practical, hands-on program to empower women to return to work
              with the right skills, tools and mindset.
            </p>

            <a
              href="https://chat.whatsapp.com/BfPFwGkAPTNH72j2Bbnx2J?s=cl&p=i&mlu=4&ilr=4"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex max-w-full items-center rounded-[4px] bg-[#B44A63] px-7 py-3 text-[13.5px] font-medium tracking-wide text-white shadow-xs transition-all duration-200 hover:bg-[#9E3D54] hover:shadow-md active:scale-[0.98] sm:text-[14px]"
            >
              <span>Explore Career Readiness</span>

              <span className="ml-2 shrink-0 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Right Column */}
          <div className="min-w-0 w-full">
            <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">

              {/* Features List */}
              <div className="min-w-0 w-full lg:flex-1">
                <div className="space-y-5 sm:space-y-6">
                  {features.map((item, idx) => {
                    const IconComponent = item.icon;

                    return (
                      <div
                        key={idx}
                        className="flex min-w-0 items-center gap-3.5"
                      >
                        <IconComponent
                          size={20}
                          className="shrink-0 text-[#B44A63]"
                          strokeWidth={1.75}
                        />

                        <span className="min-w-0 break-words font-sans text-[15px] font-normal text-[#1E1C1A] sm:text-[16px]">
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Handwritten Note */}
              <div className="w-full shrink-0 lg:w-[150px]">
                <div className="select-none rotate-[-2deg] text-center font-script text-[26px] leading-[1.18] text-[#3E3836] sm:text-[30px] lg:text-left">
                  Clarity
                  <br />
                  Today,
                  <br />
                  Confidence
                  <br />
                  Tomorrow
                  <span className="ml-1 text-[#B44A63]">♡</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}