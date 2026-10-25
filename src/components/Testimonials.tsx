"use client";

import React from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  extendedStory?: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote:
      "HerAmbition gave me the clarity and confidence to restart my career after a 5-year break. The support made all the difference.",
    author: "Priya S.",
    role: "Program Alumna",
    extendedStory:
      "After taking time off to raise my two children, returning to tech felt overwhelming. Through The Becoming program, I revamped my portfolio, learned how to articulate my break with pride, and secured a Lead Product Manager role within 3 months.",
  },
  {
    quote:
      "The community is so warm, and the sessions are incredibly practical. I now feel more confident about my next career move.",
    author: "Aisha K.",
    role: "Community Member",
    extendedStory:
      "I was stuck in middle management for 4 years without clear visibility. HerAmbition connected me with executive mentors who reviewed my work, helped me negotiate my title promotion, and taught me executive presence.",
  },
  {
    quote:
      "HerInfluence helped me find my voice as a leader. I now take up opportunities that I once hesitated to pursue.",
    author: "Madhavi R.",
    role: "Program Participant",
    extendedStory:
      "Speaking up in executive steering meetings used to give me immense imposter anxiety. HerInfluence provided simulated practice sessions and strategic frameworks that completely transformed how I lead my team.",
  },
];

interface TestimonialsProps {
  onSeeMoreStories: () => void;
}

export default function Testimonials({ onSeeMoreStories }: TestimonialsProps) {
  return (
    <section id="stories" className="py-20 md:py-28 bg-[#FAF8F5]/60 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#6E6762] uppercase mb-2">
              REAL STORIES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1E1C1A] tracking-tight">
              Progress Looks Different for Every Woman.
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={onSeeMoreStories}
              className="inline-flex items-center text-[13.5px] font-medium text-[#B44A63] hover:text-[#9E3D54] group cursor-pointer transition-colors"
            >
              <span className="underline underline-offset-4 decoration-[#B44A63]">
                See More Stories
              </span>
              <span className="ml-1.5 transform transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
          </div>
        </div>

        {/* 3 Testimonial Cards matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#ECE5DE] rounded-lg p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xs hover:border-[#DACFC5]"
            >
              {/* Quote */}
              <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#3B3633] font-normal mb-8">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author & Role (No divider line, matching reference) */}
              <div>
                <h4 className="font-sans text-[15px] font-semibold text-[#1E1C1A] leading-tight">
                  {item.author}
                </h4>
                <p className="text-[12px] text-[#7A736D] mt-0.5 font-normal">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export { testimonialsData };
