import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const dimensions =
    size === "sm"
      ? { width: 90, height: 60 }
      : size === "lg"
      ? { width: 130, height: 87 }
      : { width: 108, height: 72 };

  return (
    <div className={`inline-flex items-center select-none cursor-pointer transition-opacity duration-200 hover:opacity-90 shrink-0 ${className}`}>
      <Image
        src="/images/logo.webp"
        alt="HerAmbition — Lead with Grace & Impact"
        width={dimensions.width}
        height={dimensions.height}
        priority
        className="h-8 sm:h-9 lg:h-10 w-auto object-contain shrink-0 max-h-8 sm:max-h-9 lg:max-h-10"
        style={{ width: "auto" }}
      />
    </div>
  );
}
