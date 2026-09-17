"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";

interface MembershipSectionProps {
  onJoinMembership: () => void;
}

export default function MembershipSection({ onJoinMembership }: MembershipSectionProps) {
  return (
    <section id="membership" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Meeting Photography */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-[#EAE3DC] bg-[#FAF8F5] shadow-xs">
              <Image
                src="/images/membership-meeting.png"
                alt="Women professionals collaborating and networking in HerAmbition community"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center transform transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right Column: Copy + Circular Badge */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 lg:gap-10">
            
            <div className="flex-1 max-w-lg">
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#6E6762] uppercase mb-3">
                HERAMBITION MEMBERSHIP
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.15] text-[#1E1C1A] tracking-tight mb-4">
                Belong. Learn. Grow Together.
              </h2>

              <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#5A5550] font-normal mb-8">
                Join a vibrant community of ambitious women at every stage of
                their journey. Access curated conversations, resources,
                mentorship and real opportunities.
              </p>

              <div>
                <button
                  onClick={onJoinMembership}
                  className="inline-flex items-center border border-[#B44A63] hover:bg-[#B44A63] text-[#B44A63] hover:text-white text-[13.5px] sm:text-[14px] font-medium tracking-wide px-7 py-3 rounded-[4px] transition-all duration-200 active:scale-[0.98] cursor-pointer group"
                >
                  <span>Become a Member</span>
                  <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </button>
              </div>
            </div>

            {/* Circular Decorative Badge matching reference */}
            <div className="flex-shrink-0 flex items-center justify-center self-center md:self-auto">
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
