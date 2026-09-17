"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Users, ArrowRight } from "lucide-react";

export interface Program {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  audience: string;
  image: string;
  fullOverview?: string;
  curriculum?: string[];
}

interface ProgramCardProps {
  program: Program;
  onSelect: (program: Program) => void;
}

export default function ProgramCard({ program, onSelect }: ProgramCardProps) {
  return (
    <div
      onClick={() => onSelect(program)}
      className="group flex flex-col bg-white border border-[#ECE5DD] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] hover:border-[#D5C9BD] cursor-pointer"
    >
      {/* Card Image */}
      <div className="relative w-full aspect-[2.1/1] overflow-hidden bg-[#FAF8F5]">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
          className="object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          {/* Title */}
          <h3 className="font-serif text-[23px] sm:text-[25px] font-normal text-[#1E1C1A] mb-1 group-hover:text-[#B44A63] transition-colors duration-200">
            {program.title}
          </h3>

          {/* Category Eyebrow */}
          <p className="text-[10.5px] font-semibold tracking-[0.14em] text-[#B44A63] uppercase mb-3">
            {program.category}
          </p>

          {/* Description */}
          <p className="text-[13.5px] leading-relaxed text-[#5A5550] font-normal mb-5">
            {program.description}
          </p>
        </div>

        {/* Metadata & CTA */}
        <div>
          {/* Metadata on a single horizontal row */}
          <div className="pt-3.5 border-t border-[#F2ECE6] flex items-center justify-between gap-2 text-[11.5px] text-[#6E6762] mb-5">
            <div className="flex items-center space-x-1.5 flex-shrink-0">
              <Calendar size={14} className="text-[#B44A63]" />
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center space-x-1.5 truncate">
              <Users size={14} className="text-[#B44A63] flex-shrink-0" />
              <span className="truncate">{program.audience}</span>
            </div>
          </div>

          {/* Learn More link */}
          <div className="inline-flex items-center text-[13px] font-medium text-[#B44A63] group-hover:text-[#9A3E55] transition-colors duration-200">
            <span>Learn More</span>
            <span className="ml-1 transform transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
