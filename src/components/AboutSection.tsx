"use client";

import React from "react";
import Image from "next/image";

interface AboutSectionProps {
  onOpenFounderJourney?: () => void;
  onOpenCorporatePartner?: () => void;
}

/* Custom SVG Icons tailored to reference design */
function ReturnshipIcon({ className = "w-10 h-10 text-[#C5853B]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="20" cy="13" r="5" />
      <path d="M12 26c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <path d="M9 29h22" />
      <path d="M12 26l-3 3 3 3" />
    </svg>
  );
}

function LeadershipShieldIcon({ className = "w-10 h-10 text-[#C5853B]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 7l11 4.5v9.5c0 7.2-4.8 12.8-11 14.5-6.2-1.7-11-7.3-11-14.5V11.5L20 7z" />
      <path d="M20 15l4 4-4 5-4-5 4-4z" />
    </svg>
  );
}

function WellbeingIcon({ className = "w-10 h-10 text-[#C5853B]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="20" cy="12.5" r="4.5" />
      <path d="M14 25c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="11.5" cy="18.5" r="2.5" />
      <circle cx="28.5" cy="18.5" r="2.5" />
      <path d="M8 27.5c0-2.2 1.6-4 3.5-4" />
      <path d="M28.5 23.5c1.9 0 3.5 1.8 3.5 4" />
      <path d="M16 28h8" />
    </svg>
  );
}

function HrAdvisoryIcon({ className = "w-10 h-10 text-[#C5853B]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="20" cy="12.5" r="4.5" />
      <path d="M13 27c0-3.9 3.1-7 7-7s7 3.1 7 7" />
      <path d="M19 20l1 5 1-5" />
      <path d="M11 30h18" />
    </svg>
  );
}

const solutions = [
  {
    id: "returnship",
    title: "Returnship Programs",
    icon: ReturnshipIcon,
    description:
      "Tailored re-entry pathways, confidence rekindling, and onboarding frameworks for women restarting after career breaks.",
  },
  {
    id: "leadership",
    title: "Women Leadership Development",
    icon: LeadershipShieldIcon,
    description:
      "Strategic influence, executive presence, and career trajectory coaching for high-potential women stepping into leadership.",
  },
  {
    id: "wellbeing",
    title: "Workplace Wellbeing & Mental Health",
    icon: WellbeingIcon,
    description:
      "Holistic wellness strategies, psychological safety, and supportive retention cultures that empower female professionals.",
  },
  {
    id: "advisory",
    title: "HR Advisory & Training",
    icon: HrAdvisoryIcon,
    description:
      "CHRO-level advisory, diversity & inclusion architecture, policy benchmarking, and corporate capability workshops.",
  },
];

export default function AboutSection({
  onOpenFounderJourney,
  onOpenCorporatePartner,
}: AboutSectionProps) {
  return (
    <section id="about" className="relative w-full bg-white overflow-hidden scroll-mt-20">
      
      {/* =========================================================================
          PART 1: MEET THE FOUNDER
          ========================================================================= */}
      <div className="w-full bg-white pt-14 sm:pt-18 md:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
            
            {/* Left Column: Founder Bio and Story */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center order-2 lg:order-1">
              
              {/* Eyebrow */}
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#6E6762] uppercase mb-2.5 sm:mb-3">
                MEET THE FOUNDER
              </p>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] font-normal leading-[1.12] text-[#1E1C1A] tracking-tight mb-3 sm:mb-4">
                Hi, I&apos;m Tabassum Sait
              </h2>

              {/* Subheading / Tagline */}
              <p className="text-[15px] sm:text-[16.5px] font-semibold text-[#2D2824] mb-4 sm:mb-5 leading-snug">
                HR Leader. Coach. Mentor. Builder of Communities.
              </p>

              {/* Biography Body */}
              <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#5A5550] font-normal w-full max-w-xl mb-8 sm:mb-9">
                With 15+ years of experience across global organizations like Swiss Re and NHS,
                and as a CHRO in startups, I founded HerAmbition to create a career comeback
                ecosystem for experienced professionals.
              </p>

              {/* CTA Button */}
              <div>
                <button
                  type="button"
                  onClick={onOpenFounderJourney}
                  className="inline-flex items-center justify-center bg-[#BF8237] hover:bg-[#A86F28] text-white text-[13.5px] sm:text-[14px] font-medium tracking-wide px-7 py-3 rounded-[5px] shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  Know My Journey
                </button>
              </div>

            </div>

            {/* Right Column: Founder Portrait */}
            <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-[460px] sm:max-w-[480px] lg:max-w-[500px]">
                {/* Subtle soft backdrop halo */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-[#FAF5EE] via-[#F6ECE0]/50 to-transparent rounded-2xl -z-10 blur-lg"
                />

                <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_35px_-8px_rgba(0,0,0,0.08)] bg-[#FDFBF9] border border-[#EFE8DF]/60">
                  <Image
                    src="/images/founder-tabassum.webp"
                    alt="Tabassum Sait — HR Leader, Coach, Mentor and Founder of HerAmbition"
                    width={594}
                    height={546}
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 480px, 500px"
                    className="w-full h-auto object-cover object-center transform transition-transform duration-500 hover:scale-[1.01]"
                  />

                  {/* Founder Name Tag Badge overlay */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-lg border border-[#EAE3DB] flex items-center justify-between shadow-xs">
                    <div>
                      <p className="text-[13px] font-semibold text-[#1E1C1A] leading-tight">
                        Tabassum Sait
                      </p>
                      <p className="text-[11px] text-[#78716A]">
                        Founder &amp; Chief Mentor, HerAmbition
                      </p>
                    </div>
                    <span className="text-[11px] font-medium text-[#BF8237] bg-[#BF8237]/10 px-2.5 py-1 rounded-full">
                      15+ Yrs Exp
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          PART 2: CORPORATE SOLUTIONS
          ========================================================================= */}
      <div className="w-full bg-[#FAF8F5] border-t border-[#ECE5DC] py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#6E6762] uppercase mb-2.5">
              CORPORATE SOLUTIONS
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal leading-[1.18] text-[#1E1C1A] tracking-tight">
              Build an inclusive &amp; experienced workforce
            </h2>
          </div>

          {/* 4 Feature Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 mb-12 sm:mb-14">
            {solutions.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center text-center p-6 sm:p-5 lg:p-6 rounded-xl bg-white/70 hover:bg-white border border-[#EFE8DF] hover:border-[#DFD6C9] shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-[#FAF5EE] group-hover:bg-[#F6ECE0] flex items-center justify-center mb-4 transition-colors duration-200">
                    <IconComp className="w-9 h-9 text-[#C5853B] transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-[16px] sm:text-[16.5px] font-medium text-[#1E1C1A] leading-snug mb-2.5 group-hover:text-[#A86F28] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-[#6E6762] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Centered CTA Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={onOpenCorporatePartner}
              className="inline-flex items-center justify-center border border-[#C5853B] hover:border-[#A86F28] bg-transparent hover:bg-[#C5853B] text-[#9A6224] hover:text-white text-[13.5px] sm:text-[14px] font-medium tracking-wide px-8 py-3 rounded-[5px] transition-all duration-200 active:scale-[0.98] shadow-xs cursor-pointer"
            >
              Partner With Us
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
