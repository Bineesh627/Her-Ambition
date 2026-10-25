"use client";

import React from "react";
import membershipMeetingImg from "../../public/images/membership-meeting.webp";
import { ArrowRight, Users } from "lucide-react";

interface MembershipSectionProps {
  onJoinMembership?: () => void;
}

export default function MembershipSection({ onJoinMembership }: MembershipSectionProps) {
  return (
    <section id="community" className="py-14 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden scroll-mt-20">
      <div id="membership" className="sr-only" aria-hidden="true" />
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Meeting Photography */}
          <div className="w-full lg:col-span-5 xl:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[540px] lg:max-w-none aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-[#ECE5DD] bg-[#FAF8F5]">
              <img
                src={typeof membershipMeetingImg === "string" ? membershipMeetingImg : membershipMeetingImg.src}
                alt="Diverse group of ambitious professional women networking and discussing in HerAmbition community"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Copy + Circular Badge */}
          <div className="w-full lg:col-span-7 xl:col-span-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 lg:gap-10">
            
            <div className="flex-1 w-full max-w-xl">
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#6E6762] uppercase mb-3">
                HERAMBITION COMMUNITY
              </p>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-normal leading-[1.15] text-[#1E1C1A] tracking-tight mb-4">
                Belong. Learn. Grow Together.
              </h2>

              <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#5A5550] font-normal mb-8">
                Join a vibrant community of ambitious women at every stage of
                their journey. Access curated conversations, resources,
                mentorship and peer support.
              </p>

              <div>
                <a
                  href="https://chat.whatsapp.com/BfPFwGkAPTNH72j2Bbnx2J?s=cl&p=i&mlu=4&ilr=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-[#B44A63] hover:bg-[#B44A63] text-[#B44A63] hover:text-white text-[13.5px] sm:text-[14px] font-medium tracking-wide px-7 py-3 rounded-[4px] transition-all duration-200 active:scale-[0.98] cursor-pointer group"
                >
                  <span>Join the Community</span>
                  <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>

            {/* Circular Decorative Badge matching reference */}
            <div className="flex-shrink-0 self-center sm:self-auto">
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#FCEEEA] p-4 flex flex-col items-center justify-center text-center shadow-2xs transition-transform duration-300 hover:scale-105">
                <Users size={24} className="text-[#B44A63] mb-1.5" strokeWidth={1.5} />
                <p className="font-script text-[19px] sm:text-[21px] leading-[1.15] text-[#3D3735] select-none">
                  A community
                  <br />
                  that grows
                  <br />
                  with you
                  <span className="inline-block ml-0.5 text-[#B44A63]">♡</span>
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
