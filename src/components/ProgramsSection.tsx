"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import ProgramCard, { Program } from "./ProgramCard";

const programsData: Program[] = [
  {
    id: "the-becoming",
    title: "The Becoming",
    category: "CAREER STRATEGY",
    description:
      "Find clarity, rebuild confidence and create a career plan that works for you.",
    duration: "4 - 6 Weeks",
    audience: "For women restarting or realigning their careers",
    image: "/images/program-becoming.png",
    fullOverview:
      "A transformative career accelerator tailored for women returning to the workforce or seeking a pivotal career pivot. Includes 1-on-1 strategy sessions, peer cohorts, and dedicated industry mentorship.",
    curriculum: [
      "Week 1-2: Core Strengths Assessment & Career Visioning",
      "Week 3: Strategic Narrative, CV & High-Impact Portfolio",
      "Week 4: The Art of Positioning & Executive Presence",
      "Week 5-6: Negotiation Mastery & Strategic Job Search",
    ],
  },
  {
    id: "her-influence",
    title: "HerInfluence",
    category: "LEADERSHIP DEVELOPMENT",
    description:
      "Strengthen your leadership skills, visibility and impact in the workplace.",
    duration: "4 - 6 Weeks",
    audience: "For mid to senior women professionals",
    image: "/images/program-influence.png",
    fullOverview:
      "Designed specifically for high-potential women stepping into team lead, director, and VP roles. Master stakeholder management, board communications, and authentic influence.",
    curriculum: [
      "Week 1: Authentic Leadership Style & Personal Brand",
      "Week 2: Strategic Influence & Cross-Functional Alignment",
      "Week 3: High-Stakes Decision Making & Conflict Resolution",
      "Week 4-6: Executive Presence, Sponsorship & Board Navigation",
    ],
  },
  {
    id: "the-foundher",
    title: "The FoundHer",
    category: "ENTREPRENEURSHIP & BUSINESS GROWTH",
    description:
      "Turn your ideas into sustainable ventures with the right tools, network and guidance.",
    duration: "4 - 6 Weeks",
    audience: "For aspiring and early-stage women founders",
    image: "/images/program-foundher.png",
    fullOverview:
      "From zero to validated enterprise. We provide women founders with the tactical roadmap, investor network, go-to-market strategies, and capital-raising playbooks.",
    curriculum: [
      "Week 1: Value Proposition & Customer Problem Validation",
      "Week 2: Unit Economics, Business Model & Lean Launch",
      "Week 3: Go-To-Market, Organic & Paid Acquisition",
      "Week 4-6: Pitch Deck Architecture & Investor Outreach",
    ],
  },
];

interface ProgramsSectionProps {
  onSelectProgram: (program: Program) => void;
  onViewAllPrograms: () => void;
}

export default function ProgramsSection({
  onSelectProgram,
  onViewAllPrograms,
}: ProgramsSectionProps) {
  return (
    <section id="programs" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#6E6762] uppercase mb-2">
              OUR PROGRAMS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1E1C1A] tracking-tight">
              Three Pathways. A Stronger You.
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={onViewAllPrograms}
              className="inline-flex items-center text-[13.5px] font-medium text-[#B44A63] hover:text-[#9A3E55] group cursor-pointer transition-colors"
            >
              <span className="underline underline-offset-4 decoration-[#B44A63]">
                View All Programs
              </span>
              <span className="ml-1.5 transform transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
          </div>
        </div>

        {/* 3-Column Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programsData.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onSelect={onSelectProgram}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
export { programsData };
export type { Program };
