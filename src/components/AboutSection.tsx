"use client";

import React from "react";
import Image from "next/image";

interface AboutSectionProps {
  onOpenFounderJourney?: () => void;
  onOpenCorporatePartner?: () => void;
}

/* Custom SVG Icons tailored to reference design (WhatsApp Image 14.18.04) */
function MaternityIcon({ className = "w-8 h-8 text-[#C5853B]" }: { className?: string }) {
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
      <circle cx="21" cy="9.5" r="3.5" />
      <path d="M16 15c-2 2-3 5-3 8.5 0 5 3 9 7 11" />
      <path d="M24 15c1.8 1.8 2.8 3.8 2.8 6 0 2.2-2 3.8-3.5 4.8 4 1 6.5 4.5 6.5 8 0 1-.2 2-.5 2.5" />
      <path d="M19.5 24c2.5 1 4.5.5 5.5-1.5" />
    </svg>
  );
}

function ReturnshipDoorIcon({ className = "w-8 h-8 text-[#C5853B]" }: { className?: string }) {
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
      {/* Door frame */}
      <path d="M11 34V7h18v27" />
      {/* Open door panel */}
      <path d="M11 32l13-4V10L11 6v26z" />
      {/* Door knob */}
      <circle cx="21.5" cy="20.5" r="1" fill="currentColor" />
      {/* Gateway arrow */}
      <path d="M26 23.5h6m0 0l-2-2m2 2l-2 2" />
    </svg>
  );
}

function LeadershipGrowthIcon({ className = "w-8 h-8 text-[#C5853B]" }: { className?: string }) {
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
      {/* Bar 1 */}
      <rect x="8" y="24" width="5.5" height="10" rx="1" />
      {/* Bar 2 */}
      <rect x="17.25" y="17" width="5.5" height="17" rx="1" />
      {/* Bar 3 */}
      <rect x="26.5" y="11" width="5.5" height="23" rx="1" />
      {/* Star above bar 3 */}
      <path
        d="M29.25 3.5l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4 1.2-2.5z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function RemoteWorkIcon({ className = "w-8 h-8 text-[#C5853B]" }: { className?: string }) {
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
      {/* Laptop screen */}
      <rect x="8" y="9" width="24" height="16" rx="2" />
      {/* House contour inside */}
      <path d="M16 19l4-3.5 4 3.5" />
      <path d="M17 19v4.5h6V19" />
      {/* Laptop base */}
      <path d="M5 29h30a2 2 0 01-2 2H7a2 2 0 01-2-2z" />
    </svg>
  );
}

function WellbeingMindIcon({ className = "w-8 h-8 text-[#C5853B]" }: { className?: string }) {
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
      {/* Head silhouette */}
      <path d="M14 32v-4c0-2.5 1.2-4.5 3-5.5.5-1.5.5-3.5 0-5-.5-1.8-1.8-3-1.8-5 0-4.4 3.6-8 8-8s8 3.6 8 8c0 3-1.2 5.5-2.5 7 0 2.5 1.5 4.5 2.5 6.5.5 1 .8 2.2 0 3.5" />
      {/* Heart in mind */}
      <path
        d="M23.2 14.8c-.8-1-2-.7-2.4.2-.4-.9-1.6-1.2-2.4-.2-1 1.2.2 2.6 2.4 4 2.2-1.4 3.4-2.8 2.4-4z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function InclusiveTalentIcon({ className = "w-8 h-8 text-[#C5853B]" }: { className?: string }) {
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
      {/* Center person */}
      <circle cx="20" cy="11" r="3.2" />
      <path d="M14.5 22.5c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      {/* Left person */}
      <circle cx="12" cy="14" r="2.8" />
      <path d="M7.5 24.5c0-2.5 2-4.5 4.5-4.5" />
      {/* Right person */}
      <circle cx="28" cy="14" r="2.8" />
      <path d="M23.5 20c2.5 0 4.5 2 4.5 4.5" />
      {/* Unified heart */}
      <path
        d="M22.5 26.5c-.8-.8-1.9-.5-2.5.3-.6-.8-1.7-1.1-2.5-.3-1 1 .2 2.4 2.5 3.8 2.3-1.4 3.5-2.8 2.5-3.8z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

const solutions = [
  {
    id: "maternity",
    title: "Maternity Coach and Training",
    icon: MaternityIcon,
    description:
      "Support women through maternity transitions, coaching, and a confident return to work.",
  },
  {
    id: "returnship",
    title: "Career Break & Returnship Programs",
    icon: ReturnshipDoorIcon,
    description:
      "Create structured pathways for experienced professionals returning after a career break.",
  },
  {
    id: "leadership",
    title: "Women's Career & Leadership Development",
    icon: LeadershipGrowthIcon,
    description:
      "Build confidence, leadership capability and accelerate career growth.",
  },
  {
    id: "flexible",
    title: "Flexible & Remote Work Pathways",
    icon: RemoteWorkIcon,
    description:
      "Enable sustainable careers through flexible, remote and life-stage-friendly models.",
  },
  {
    id: "wellbeing",
    title: "Women's Wellbeing at Work",
    icon: WellbeingMindIcon,
    description:
      "Create conversations and support around wellbeing, burnout, menopause and mental health.",
  },
  {
    id: "inclusive",
    title: "Inclusive Hiring & Talent Partnerships",
    icon: InclusiveTalentIcon,
    description:
      "Connect with experienced talent and build more inclusive hiring practices.",
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
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center order-2 lg:order-1">
              
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
                HR Practitioner · CIPD Certified · Mentor · Builder of Communities
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
            <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
                {/* Subtle soft backdrop halo */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-[#FAF5EE] via-[#F6ECE0]/50 to-transparent rounded-2xl -z-10 blur-lg"
                />

                <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_35px_-8px_rgba(0,0,0,0.08)] bg-[#FDFBF9] border border-[#EFE8DF]/60">
                  <Image
                    src="/images/founder-tabassum.webp"
                    alt="Tabassum Sait — HR Practitioner, CIPD Certified, Mentor and Founder of HerAmbition"
                    width={768}
                    height={1024}
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                    className="w-full h-auto object-cover object-top transform transition-transform duration-500 hover:scale-[1.01]"
                  />

                  {/* Founder Name Tag Badge overlay */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#EAE3DB] flex items-center justify-between shadow-xs">
                    <div>
                      <p className="text-[12.5px] font-semibold text-[#1E1C1A] leading-tight">
                        Tabassum Sait
                      </p>
                      <p className="text-[10.5px] text-[#78716A]">
                        Founder &amp; Chief Mentor
                      </p>
                    </div>
                    <span className="text-[10.5px] font-medium text-[#BF8237] bg-[#BF8237]/10 px-2 py-0.5 rounded-full">
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
          PART 2: CORPORATE SOLUTIONS / HERAMBITION PARTNERSHIPS
          ========================================================================= */}
      <div className="relative w-full bg-[#FAF8F5] border-t border-[#ECE5DC] py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        
        {/* Subtle decorative botanical leaves top right */}
        <div
          aria-hidden="true"
          className="absolute -top-10 -right-10 w-44 h-44 sm:w-60 sm:h-60 pointer-events-none opacity-40 select-none"
        >
          <svg viewBox="0 0 120 120" fill="none" className="w-full h-full text-[#B44A63]/30">
            <path d="M120 0C90 20 60 55 50 90c15-10 40-20 70-30" stroke="currentColor" strokeWidth="1.5" />
            <path d="M90 20c15-12 25-10 30-8-5 12-15 18-30 8z" fill="currentColor" opacity="0.4" />
            <path d="M75 40c14-10 22-7 27-4-6 10-14 16-27 4z" fill="currentColor" opacity="0.4" />
            <path d="M60 65c12-8 20-5 24-2-5 9-12 14-24 2z" fill="currentColor" opacity="0.4" />
          </svg>
        </div>

        {/* Subtle decorative botanical leaves bottom left */}
        <div
          aria-hidden="true"
          className="absolute -bottom-10 -left-10 w-44 h-44 sm:w-60 sm:h-60 pointer-events-none opacity-40 select-none"
        >
          <svg viewBox="0 0 120 120" fill="none" className="w-full h-full text-[#B44A63]/30">
            <path d="M0 120C30 100 60 65 70 30c-15 10-40 20-70 30" stroke="currentColor" strokeWidth="1.5" />
            <path d="M30 100c-15 12-25 10-30 8 5-12 15-18 30-8z" fill="currentColor" opacity="0.4" />
            <path d="M45 80c-14 10-22 7-27 4 6-10 14-16 27-4z" fill="currentColor" opacity="0.4" />
            <path d="M60 55c-12 8-20 5-24 2 5-9 12-14 24-2z" fill="currentColor" opacity="0.4" />
          </svg>
        </div>

        <div className="relative w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#786F68] uppercase mb-2">
              HERAMBITION PARTNERSHIPS
            </p>
            {/* Heart Divider line */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-[#D8CEC4]" />
              <span className="text-[#A58265] text-xs select-none">🤎</span>
              <span className="w-12 h-[1px] bg-[#D8CEC4]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal leading-[1.15] text-[#1E1C1A] tracking-tight mb-3 sm:mb-4">
              Build an inclusive &amp; experienced workforce
            </h2>
            <p className="text-[14.5px] sm:text-[16px] leading-relaxed text-[#5A5350]">
              Partner with HerAmbition to create workplaces where women can return, grow, lead and thrive.
            </p>
          </div>

          {/* 6 Feature Columns matching WhatsApp reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 rounded-xl sm:rounded-2xl bg-white/70 border border-[#ECE3D8] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] overflow-hidden">
            {solutions.map((item, idx) => {
              const IconComp = item.icon;
              const isLast = idx === solutions.length - 1;
              const hasBorderBottomMobile = !isLast;
              const hasBorderRightDesktop = idx < 5;
              const hasBorderRightMd = (idx + 1) % 3 !== 0;
              const hasBorderBottomMd = idx < 3;
              const hasBorderRightSm = idx % 2 === 0;
              const hasBorderBottomSm = idx < 4;

              return (
                <div
                  key={item.id}
                  className={`flex flex-col items-center text-center px-4 py-8 sm:px-3 sm:py-7 lg:px-3.5 lg:py-8 hover:bg-white transition-all duration-300 group border-[#ECE3D8] ${
                    hasBorderBottomMobile ? "border-b" : ""
                  } ${
                    hasBorderRightDesktop ? "lg:border-r" : "lg:border-r-0"
                  } ${
                    hasBorderBottomMd ? "md:border-b" : "md:border-b-0"
                  } ${
                    hasBorderRightMd ? "md:border-r lg:border-r" : "md:border-r-0 lg:border-r"
                  } ${
                    hasBorderBottomSm ? "sm:border-b md:border-b" : ""
                  } ${
                    hasBorderRightSm ? "sm:border-r md:border-r" : ""
                  } lg:border-b-0`}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FAF5EE] group-hover:bg-[#F6ECE0] border border-[#EFE8DF] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:scale-105 shrink-0">
                    <IconComp className="w-8 h-8 text-[#C5853B] transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-[14px] sm:text-[14.5px] font-semibold text-[#1E1C1A] leading-snug mb-2.5 group-hover:text-[#B44A63] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[12px] sm:text-[12.5px] text-[#6E6762] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Centered CTA Button */}
          <div className="flex justify-center mt-12 sm:mt-14">
            <button
              type="button"
              onClick={onOpenCorporatePartner}
              className="inline-flex items-center justify-center gap-2 bg-[#702F44] hover:bg-[#5C2335] text-white text-[12.5px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase px-8 py-3.5 rounded-[5px] shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <span>PARTNER WITH HERAMBITION</span>
              <span className="text-[#FAF5EE]">🤎</span>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
