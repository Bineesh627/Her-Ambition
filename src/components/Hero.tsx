"use client";

import React, { useState, useEffect } from "react";
import heroPortraitImg from "../../public/images/hero-portrait.webp";
import { motion } from "framer-motion";
import { User, Building2, ChevronRight } from "lucide-react";

const pathways = [
  {
    title: "For Individuals",
    text: "Build your career, confidence and leadership.",
    href: "#for-individuals",
    icon: User,
  },
  {
    title: "For Organisations",
    text: "Inclusive workplaces. Supported women. Stronger talent retention.",
    href: "#for-organisations",
    icon: Building2,
  },
];

export default function Hero() {
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

            {/* Pathway Cards: For Individuals / For Organisations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full max-w-xl mb-10 sm:mb-12">
              {pathways.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group flex items-center gap-3.5 rounded-xl border border-[#EBE2DA] bg-gradient-to-br from-[#FDF5F3] to-white px-4 py-4 shadow-[0_6px_20px_-10px_rgba(180,74,99,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B44A63]/50 hover:shadow-[0_10px_26px_-10px_rgba(180,74,99,0.35)]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B44A63]/10 text-[#B44A63] transition-colors group-hover:bg-[#B44A63] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-serif text-[17px] font-semibold leading-tight text-[#1E1C1A] group-hover:text-[#B44A63] transition-colors">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-[12.5px] leading-snug text-[#6E6762]">
                        {item.text}
                      </span>
                    </span>
                    <ChevronRight
                      size={18}
                      className="shrink-0 text-[#A59D96] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#B44A63]"
                    />
                  </a>
                );
              })}
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-3 items-start w-full max-w-xl">
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center px-2 sm:px-4">
                <span className="font-serif tabular-nums text-[26px] sm:text-[32px] lg:text-[34px] font-normal text-[#1E1C1A] leading-none mb-1.5">
                  {statsCount.women}+
                </span>
                <span className="text-[11px] sm:text-[11.5px] leading-snug text-[#6E6762] font-normal">
                  Women in our community
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center px-2 sm:px-4 border-l border-[#E8E2DC]">
                <span className="font-serif tabular-nums text-[26px] sm:text-[32px] lg:text-[34px] font-normal text-[#1E1C1A] leading-none mb-1.5">
                  {statsCount.percent}%
                </span>
                <span className="text-[11px] sm:text-[11.5px] leading-snug text-[#6E6762] font-normal">
                  Women return to work or grow in role
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center px-2 sm:px-4 border-l border-[#E8E2DC]">
                <span className="font-serif tabular-nums text-[26px] sm:text-[32px] lg:text-[34px] font-normal text-[#1E1C1A] leading-none mb-1.5">
                  {statsCount.programs}
                </span>
                <span className="text-[11px] sm:text-[11.5px] leading-snug text-[#6E6762] font-normal">
                  Flagship Programs
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end items-center w-full pt-2 pb-10 sm:pb-12 lg:pt-28 lg:pb-16"
          >
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[520px] aspect-square rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] border border-[#EFE8DF]/80 bg-[#FAF8F5]">
              <img
                src={typeof heroPortraitImg === "string" ? heroPortraitImg : heroPortraitImg.src}
                alt="Ambitious woman reflecting with coffee and inspiring books"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
