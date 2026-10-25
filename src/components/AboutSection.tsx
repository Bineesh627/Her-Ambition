"use client";

import React from "react";
import Image from "next/image";

interface AboutSectionProps {
  onOpenFounderJourney?: () => void;
}

export default function AboutSection({ onOpenFounderJourney }: AboutSectionProps) {
  return (
    <section id="about" className="relative w-full bg-white overflow-hidden scroll-mt-20">
      
      {/* =========================================================================
          PART 1: MEET THE FOUNDER
          ========================================================================= */}
      <div className="w-full bg-white pt-10 sm:pt-18 md:pt-20 lg:pt-24 pb-10 sm:pb-16 lg:pb-20">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-3 sm:gap-6 lg:gap-8 xl:gap-12 items-center">
            
            {/* Left Column: Founder Bio and Story */}
            <div className="col-span-7 flex flex-col justify-center order-1">
              
              {/* Eyebrow */}
              <p className="text-[9.5px] sm:text-xs font-semibold tracking-[0.14em] sm:tracking-[0.2em] text-[#6E6762] uppercase mb-1.5 sm:mb-3">
                MEET THE FOUNDER
              </p>

              {/* Headline */}
              <h2 className="font-serif text-[20px] min-[360px]:text-[22px] min-[400px]:text-[26px] sm:text-3xl md:text-[40px] lg:text-[44px] font-normal leading-[1.12] text-[#1E1C1A] tracking-tight mb-1.5 sm:mb-4">
                Hi, I&apos;m Tabassum Sait
              </h2>

              {/* Subheading / Tagline */}
              <p className="text-[11px] min-[400px]:text-[12.5px] sm:text-[15px] lg:text-[16.5px] font-semibold text-[#2D2824] mb-2 sm:mb-5 leading-snug">
                HR Practitioner · CIPD Certified · Mentor · Builder of Communities
              </p>

              {/* Biography Body */}
              <p className="text-[11px] min-[400px]:text-[12.5px] sm:text-[15px] lg:text-[16px] leading-[1.5] sm:leading-[1.7] text-[#5A5550] font-normal w-full max-w-xl mb-3 sm:mb-9">
                With 15+ years of experience across global organizations like Swiss Re and NHS,
                and as a CHRO in startups, I founded HerAmbition to create a career comeback
                ecosystem for experienced professionals.
              </p>

              {/* CTA Button */}
              <div>
                <button
                  type="button"
                  onClick={onOpenFounderJourney}
                  className="inline-flex items-center justify-center bg-[#BF8237] hover:bg-[#A86F28] text-white text-[11px] sm:text-[13.5px] lg:text-[14px] font-medium tracking-wide px-3.5 sm:px-7 py-2 sm:py-3 rounded-[4px] sm:rounded-[5px] shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer whitespace-nowrap"
                >
                  Know My Journey
                </button>
              </div>

            </div>

            {/* Right Column: Founder Portrait */}
            <div className="col-span-5 flex justify-center lg:justify-end order-2">
              <div className="relative w-full max-w-[160px] min-[400px]:max-w-[190px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]">
                {/* Subtle soft backdrop halo */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-1 sm:-inset-4 bg-gradient-to-tr from-[#FAF5EE] via-[#F6ECE0]/50 to-transparent rounded-xl sm:rounded-2xl -z-10 blur-sm sm:blur-lg"
                />

                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_6px_25px_-6px_rgba(0,0,0,0.08)] bg-[#FDFBF9] border border-[#EFE8DF]/60">
                  <Image
                    src="/images/founder-tabassum.webp"
                    alt="Tabassum Sait — HR Practitioner, CIPD Certified, Mentor and Founder of HerAmbition"
                    width={768}
                    height={1024}
                    priority
                    sizes="(max-width: 640px) 190px, (max-width: 1024px) 320px, 360px"
                    className="w-full h-auto object-cover object-top transform transition-transform duration-500 hover:scale-[1.01]"
                  />

                  {/* Founder Name Tag Badge overlay */}
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-3 sm:left-3 sm:right-3 bg-white/95 backdrop-blur-md px-2 py-1 sm:px-3.5 sm:py-2 rounded-md sm:rounded-lg border border-[#EAE3DB] flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between gap-0.5 sm:gap-1 shadow-xs">
                    <div>
                      <p className="text-[10px] sm:text-[12.5px] font-semibold text-[#1E1C1A] leading-tight">
                        Tabassum Sait
                      </p>
                      <p className="text-[8px] sm:text-[10.5px] text-[#78716A] leading-tight">
                        Founder &amp; Chief Mentor
                      </p>
                    </div>
                    <span className="text-[7.5px] sm:text-[10.5px] font-medium text-[#BF8237] bg-[#BF8237]/10 px-1 sm:px-2 py-0.5 rounded-full self-start min-[420px]:self-auto whitespace-nowrap">
                      15+ Yrs Exp
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
