"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  onExplorePrograms: () => void;
  onJoinCommunity?: () => void;
}

export default function Hero({ onExplorePrograms }: HeroProps) {
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
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Editorial Headline, Copy, CTAs, Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center pt-20 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 lg:pb-16"
          >
            {/* Headline */}
            <h1 className="font-serif text-[34px] min-[380px]:text-[38px] sm:text-[46px] md:text-[52px] lg:text-[56px] xl:text-[60px] font-normal leading-[1.1] sm:leading-[1.08] text-[#1E1C1A] tracking-[-0.015em] mb-4 sm:mb-5 break-words">
              Your Next
              <br />
              Chapter Starts Here
              <span className="text-[#B44A63]">.</span>
            </h1>

            {/* Supporting paragraph */}
            <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#554F4B] font-normal w-full max-w-xl lg:max-w-[480px] mb-8 sm:mb-10">
              Practical programs and a supportive community designed to empower
              women to return to work, rebuild confidence, and lead — on your terms.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10 sm:mb-12">
              <button
                onClick={onExplorePrograms}
                className="bg-[#B44A63] hover:bg-[#9E3D54] text-white text-[14px] font-medium tracking-wide px-7 py-3.5 rounded-[4px] shadow-xs transition-all duration-200 active:scale-[0.98] hover:shadow-md cursor-pointer"
              >
                Explore Programs
              </button>

              <a
                href="https://chat.whatsapp.com/BfPFwGkAPTNH72j2Bbnx2J?s=cl&p=i&mlu=4&ilr=4"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#B44A63] hover:bg-[#B44A63]/5 text-[#1E1C1A] hover:text-[#B44A63] text-[14px] font-medium tracking-wide px-6 py-3.5 rounded-[4px] transition-all duration-200 active:scale-[0.98] cursor-pointer inline-flex items-center justify-center"
              >
                Join the Community
              </a>
            </div>

            {/* Statistics Row */}
            <div className="flex flex-wrap sm:flex-nowrap items-start gap-5 sm:gap-7 w-full max-w-xl">
              {/* Stat 1 */}
              <div className="flex flex-col">
                <span className="font-serif text-[28px] sm:text-[32px] lg:text-[34px] font-normal text-[#1E1C1A] leading-none mb-1">
                  {statsCount.women}+
                </span>
                <span className="text-[11.5px] leading-snug text-[#6E6762] font-normal">
                  Women in our community
                </span>
              </div>

              <div className="hidden sm:block w-[1px] h-9 bg-[#E8E2DC] self-center shrink-0" />

              {/* Stat 2 */}
              <div className="flex flex-col">
                <span className="font-serif text-[28px] sm:text-[32px] lg:text-[34px] font-normal text-[#1E1C1A] leading-none mb-1">
                  {statsCount.percent}%
                </span>
                <span className="text-[11.5px] leading-snug text-[#6E6762] font-normal">
                  Women return to work or grow in role
                </span>
              </div>

              <div className="hidden sm:block w-[1px] h-9 bg-[#E8E2DC] self-center shrink-0" />

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span className="font-serif text-[28px] sm:text-[32px] lg:text-[34px] font-normal text-[#1E1C1A] leading-none mb-1">
                  {statsCount.programs}
                </span>
                <span className="text-[11.5px] leading-snug text-[#6E6762] font-normal">
                  Flagship Programs
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual - Stays coupled with content, stacks on zoom / narrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end items-end w-full lg:-mt-20 xl:-mt-24 pb-8 lg:pb-0"
          >
            <div className="relative w-full max-w-[540px] lg:max-w-none aspect-[900/860] lg:min-h-[520px] xl:min-h-[580px]">
              <Image
                src="/images/hero-portrait.webp"
                alt="Ambitious woman reflecting with coffee and inspiring books"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain lg:object-cover object-bottom lg:object-top"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
