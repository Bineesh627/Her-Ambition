"use client";

import React from "react";
import Image from "next/image";

interface FinalCTAProps {
  onJoin?: () => void;
}

export default function FinalCTA({ onJoin }: FinalCTAProps) {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        border-y
        border-[#ECE5DD]
        bg-[#FAF7F4]
        py-14
        sm:py-16
        md:py-20
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cta-botanical-bg.webp"
          alt="Warm sunlight and botanical eucalyptus leaves"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left md:object-center"
        />

        <div className="absolute inset-0 bg-[#FAF7F4]/20" />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-4
          text-center
          sm:px-6
          md:px-8
          lg:px-10
        "
      >
        <div className="mx-auto w-full max-w-3xl">
          <h2
            className="
              mb-2.5
              font-serif
              text-2xl
              font-normal
              leading-tight
              tracking-tight
              text-[#1E1C1A]
              sm:text-3xl
              md:text-4xl
              lg:text-[40px]
            "
          >
            More Women. Brighter Futures.
          </h2>

          <p
            className="
              mx-auto
              mb-6
              w-full
              max-w-xl
              text-[14px]
              font-normal
              leading-relaxed
              text-[#4A4541]
              sm:text-[15.5px]
            "
          >
            Be part of a movement that believes in progress, possibilities and
            you.
          </p>

          <a
            href="https://chat.whatsapp.com/BfPFwGkAPTNH72j2Bbnx2J?s=cl&p=i&mlu=4&ilr=4"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              max-w-full
              items-center
              justify-center
              rounded-[4px]
              bg-[#B44A63]
              px-6
              py-3
              text-[13.5px]
              font-medium
              tracking-wide
              text-white
              shadow-xs
              transition-all
              duration-200
              hover:bg-[#9E3D54]
              hover:shadow-md
              active:scale-[0.98]
              sm:px-7
              sm:text-sm
            "
          >
            <span>Join the Community</span>
            <span className="ml-2 shrink-0">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}