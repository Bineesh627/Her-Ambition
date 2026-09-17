import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const scale = size === "sm" ? "scale-90" : size === "lg" ? "scale-110" : "scale-100";

  return (
    <div className={`inline-flex flex-col items-center select-none cursor-pointer transition-transform duration-200 hover:opacity-95 ${scale} ${className}`}>
      {/* Monogram HA with Rose Bar */}
      <div className="relative flex items-center justify-center h-10 w-24">
        {/* Intertwined Serif HA */}
        <div className="flex items-baseline justify-center font-serif text-[38px] font-semibold text-[#181615] tracking-tight leading-none">
          <span className="translate-x-[2px]">H</span>
          <span className="-translate-x-[2px]">A</span>
        </div>

        {/* Rose banner strip */}
        <div className="absolute inset-x-[-4px] top-[18px] bg-[#B44A63] py-[1.5px] px-2 text-center shadow-xs">
          <span className="block text-[8px] font-bold text-white tracking-[0.22em] uppercase font-sans leading-none">
            HER AMBITION
          </span>
        </div>
      </div>

      {/* Subtitle / Tagline */}
      <span className="text-[9.5px] text-[#5A5550] font-normal tracking-[0.02em] font-sans -mt-0.5 whitespace-nowrap">
        Lead with Grace & Impact
      </span>
    </div>
  );
}
