import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const dimensions =
    size === "sm"
      ? { width: 90, height: 58 }
      : size === "lg"
      ? { width: 130, height: 84 }
      : { width: 108, height: 70 };

  return (
    <div className={`inline-flex items-center select-none cursor-pointer transition-opacity duration-200 hover:opacity-90 shrink-0 ${className}`}>
      <Image
        src="/images/logo-herambition.webp"
        alt="HerAmbition — Lead with Grace & Impact"
        width={dimensions.width}
        height={dimensions.height}
        priority
        className="h-9 sm:h-10 lg:h-12 w-auto object-contain shrink-0 max-h-9 sm:max-h-10 lg:max-h-12"
        style={{ width: "auto" }}
      />
    </div>
  );
}
