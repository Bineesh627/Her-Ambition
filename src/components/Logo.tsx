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
    <div className={`inline-flex items-center select-none cursor-pointer transition-opacity duration-200 hover:opacity-90 ${className}`}>
      <Image
        src="/images/logo.webp"
        alt="HerAmbition — Lead with Grace & Impact"
        width={dimensions.width}
        height={dimensions.height}
        priority
        className="h-9 sm:h-11 w-auto object-contain"
      />
    </div>
  );
}
