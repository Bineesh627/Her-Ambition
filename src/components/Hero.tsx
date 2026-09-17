"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  onExplorePrograms: () => void;
  onJoinCommunity: () => void;
}

export default function Hero({ onExplorePrograms, onJoinCommunity }: HeroProps) {
  // Animated statistics counter
  const [statsCount, setStatsCount] = useState({ women: 0, percent: 0, programs: 0 });

  useEffect(() => {
    let currentStep = 0;
    const steps = 40;
    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.min(1, currentStep / steps);
      const ease = 1 - (1 - progress) * (1 - progress);
      setStatsCount({
        women: Math.round(500 * ease),
        percent: Math.round(70 * ease),
        programs: Math.round(3 * ease),
      });
      if (currentStep >= steps) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-6 sm:pt-8 md:pt-10 pb-10 md:pb-14 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="flex items-center space-x-2 text-[11px] sm:text-[11.5px] font-semibold tracking-[0.22em] text-[#554F4B] uppercase mb-4 sm:mb-5">
              <span>WOMEN</span>
              <span className="text-[#C4BCB4]">|</span>
              <span>WORK</span>
              <span className="text-[#C4BCB4]">|</span>
              <span>BRIGHTER FUTURES</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-[42px] sm:text-[50px] lg:text-[56px] xl:text-[60px] font-normal leading-[1.08] text-[#1E1C1A] tracking-[-0.015em] mb-4 sm:mb-5">
              Your Next
              <br />
              Chapter Starts Here
              <span className="text-[#B44A63]">.</span>
            </h1>

            {/* Supporting paragraph */}
            <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#554F4B] font-normal max-w-[460px] mb-8 sm:mb-10">
              Practical programs, a supportive community and real opportunities
              to help you restart, grow and lead — on your terms.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10 sm:mb-12">
              <button
                onClick={onExplorePrograms}
                className="bg-[#B44A63] hover:bg-[#9E3D54] text-white text-[14px] font-medium tracking-wide px-7 py-3.5 rounded-[4px] shadow-xs transition-all duration-200 active:scale-[0.98] hover:shadow-md cursor-pointer"
              >
                Explore Programs
              </button>

              <button
                onClick={onJoinCommunity}
                className="border border-[#B44A63] hover:bg-[#B44A63]/5 text-[#1E1C1A] hover:text-[#B44A63] text-[14px] font-medium tracking-wide px-6 py-3.5 rounded-[4px] transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                Join the Community
              </button>
            </div>

            {/* Statistics Row (no top horizontal border, matching reference) */}
            <div className="flex items-start gap-5 sm:gap-7 max-w-[460px]">
              {/* Stat 1 */}
              <div className="flex flex-col">
                <span className="font-serif text-[30px] sm:text-[34px] font-normal text-[#1E1C1A] leading-none mb-1">
                  {statsCount.women}+
                </span>
                <span className="text-[11.5px] leading-snug text-[#6E6762] font-normal">
                  Women in our community
                </span>
              </div>

              <div className="w-[1px] h-9 bg-[#E8E2DC] self-center shrink-0" />

              {/* Stat 2 */}
              <div className="flex flex-col">
                <span className="font-serif text-[30px] sm:text-[34px] font-normal text-[#1E1C1A] leading-none mb-1">
                  {statsCount.percent}%
                </span>
                <span className="text-[11.5px] leading-snug text-[#6E6762] font-normal">
                  Members return to work or grow in role
                </span>
              </div>

              <div className="w-[1px] h-9 bg-[#E8E2DC] self-center shrink-0" />

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span className="font-serif text-[30px] sm:text-[34px] font-normal text-[#1E1C1A] leading-none mb-1">
                  {statsCount.programs}
                </span>
                <span className="text-[11.5px] leading-snug text-[#6E6762] font-normal">
                  Signature Programs
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with Lifestyle Image matching reference */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end items-end"
          >
            <div className="relative w-full max-w-[500px] xl:max-w-[520px] aspect-[415/366]">
              <Image
                src="/images/hero-portrait.png"
                alt="Professional woman reflecting with coffee and book stack"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 520px"
                className="object-contain lg:object-cover object-bottom"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
