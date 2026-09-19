"use client";

import React from "react";
import { X, Quote, Sparkles } from "lucide-react";
import { testimonialsData } from "./Testimonials";

interface StoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJoin?: () => void;
}

export default function StoriesModal({
  isOpen,
  onClose,
  onJoin,
}: StoriesModalProps) {
  if (!isOpen) return null;

  const extendedStories = [
    ...testimonialsData,
    {
      quote:
        "Switching from engineering to executive product leadership felt daunting until I found HerAmbition. The mentor pairing was directly relevant to my aspirations.",
      author: "Sneha V.",
      role: "VP of Engineering & Alumna",
      extendedStory:
        "Sneha negotiated a 35% salary increase and joined the advisory board of two high-growth tech ventures within six months of completing HerInfluence.",
    },
    {
      quote:
        "Building a startup as a solo female founder can be lonely. The FoundHer gave me the strategic grit, founder network, and initial angel pitch coaching I needed.",
      author: "Radhika M.",
      role: "Founder, BloomWellness",
      extendedStory:
        "Radhika closed her pre-seed round of $450k and launched her pilot with 12 enterprise clients through introductions within the community.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-[#ECE5DD] overflow-hidden z-10 animate-in zoom-in-95 duration-200 max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#FAF8F5] px-6 sm:px-8 py-5 border-b border-[#ECE5DD] flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B44A63]">
              Voices of Transformation
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#1E1C1A]">
              Alumnae & Community Stories
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#6B6560] hover:text-[#1E1C1A] p-1 rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* List of stories */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {extendedStories.map((story, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg border border-[#EDE7E0] bg-[#FCFAF8] hover:border-[#DACFC5] transition-colors"
            >
              <div className="flex items-start space-x-3 mb-2.5">
                <Quote size={20} className="text-[#B44A63] flex-shrink-0 mt-0.5" />
                <p className="text-[14.5px] text-[#2C2725] italic leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              {story.extendedStory && (
                <p className="text-[13px] text-[#6A635E] pl-8 mb-3 leading-normal">
                  {story.extendedStory}
                </p>
              )}

              <div className="pl-8 pt-2 border-t border-[#F0EBE4] flex items-center justify-between">
                <div>
                  <span className="font-sans text-[13.5px] font-semibold text-[#1E1C1A]">
                    {story.author}
                  </span>
                  <span className="text-xs text-[#827B75] ml-2">
                    — {story.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-5 bg-[#FAF8F5] border-t border-[#ECE5DD] flex items-center justify-between">
          <span className="text-xs text-[#7A736E]">
            Ready to write your next chapter?
          </span>
          <a
            href="https://chat.whatsapp.com/BfPFwGkAPTNH72j2Bbnx2J?s=cl&p=i&mlu=4&ilr=4"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="bg-[#B44A63] hover:bg-[#9E3D54] text-white text-xs font-medium uppercase tracking-wider px-5 py-2.5 rounded-[4px] inline-flex items-center"
          >
            Join HerAmbition
          </a>
        </div>

      </div>
    </div>
  );
}
