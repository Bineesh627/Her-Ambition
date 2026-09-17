"use client";

import React from "react";
import { FileText, Users, BarChart3, Star, ArrowRight } from "lucide-react";

interface CareerReadinessProps {
  onExplore: () => void;
}

export default function CareerReadiness({ onExplore }: CareerReadinessProps) {
  const features = [
    { title: "Resume & LinkedIn Makeover", icon: FileText },
    { title: "Interview Readiness", icon: Users },
    { title: "Career Clarity", icon: BarChart3 },
    { title: "Ongoing Support", icon: Star },
  ];

  return (
    <section id="career-readiness" className="py-20 md:py-28 bg-[#FDF1EE] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Information */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#8C5D6B] uppercase mb-3">
              CAREER READINESS
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.15] text-[#1E1C1A] tracking-tight mb-5">
              Get Job-Ready with Confidence.
            </h2>

            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#5A5350] font-normal mb-8 max-w-lg">
              A practical, hands-on program to help you return to work with the
              right skills, tools and mindset.
            </p>

            <div>
              <button
                onClick={onExplore}
                className="inline-flex items-center bg-[#B44A63] hover:bg-[#9E3D54] text-white text-[13.5px] sm:text-[14px] font-medium tracking-wide px-7 py-3 rounded-[4px] shadow-xs transition-all duration-200 active:scale-[0.98] hover:shadow-md cursor-pointer group"
              >
                <span>Explore Career Readiness</span>
                <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Features List + Handwritten Note matching reference */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-10">
            
            {/* Features List */}
            <div className="space-y-6 sm:space-y-7 flex-1">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-center space-x-3.5 group">
                    <IconComponent
                      size={20}
                      className="text-[#8C5D6B] group-hover:text-[#B44A63] transition-colors flex-shrink-0"
                      strokeWidth={1.75}
                    />
                    <span className="font-sans text-[15px] sm:text-[16px] text-[#1E1C1A] font-normal">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Handwritten script note */}
            <div className="sm:w-44 flex-shrink-0 pt-2 sm:pt-0">
              <div className="font-script text-[26px] sm:text-[30px] leading-[1.18] text-[#3E3836] rotate-[-2deg] select-none">
                Skills
                <br />
                Today,
                <br />
                Opportunities
                <br />
                Tomorrow
                <span className="inline-block ml-1 text-[#B44A63]">♡</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
