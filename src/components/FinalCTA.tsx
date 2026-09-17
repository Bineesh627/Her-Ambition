"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onJoin: () => void;
}

export default function FinalCTA({ onJoin }: FinalCTAProps) {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-[#FAF7F4] border-t border-b border-[#ECE5DD]">
      {/* Pristine Botanical Background without ghost text */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-botanical-bg.png"
          alt="Warm sunlight and botanical background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left md:object-center opacity-90"
        />
        {/* Very subtle soft wash ensuring crisp contrast */}
        <div className="absolute inset-0 bg-[#FAF7F4]/30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#1E1C1A] tracking-tight mb-3">
          More Women. Brighter Futures.
        </h2>

        <p className="text-[15px] sm:text-[16px] text-[#554F4B] max-w-xl mx-auto mb-7 font-normal leading-relaxed">
          Be part of a movement that believes in progress, possibilities and you.
        </p>

        <div>
          <button
            onClick={onJoin}
            className="inline-flex items-center bg-[#B44A63] hover:bg-[#9E3D54] text-white text-[13.5px] sm:text-[14px] font-medium tracking-wide px-7 py-3.5 rounded-[4px] shadow-xs transition-all duration-200 active:scale-[0.98] hover:shadow-md cursor-pointer group"
          >
            <span>Join HerAmbition</span>
            <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
