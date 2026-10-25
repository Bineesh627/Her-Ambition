"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Award, Briefcase, Heart, Sparkles, MessageSquare } from "lucide-react";

interface FounderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FounderModal({ isOpen, onClose }: FounderModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="founder-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/55 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#ECE5DD] overflow-hidden z-10 animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        
        {/* Header with Photo & Cover */}
        <div className="relative bg-[#FAF5EE] border-b border-[#ECE3D8] px-6 pt-7 pb-6 flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#1E1C1A] flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer z-10"
            aria-label="Close founder profile"
          >
            <X size={18} />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            {/* Avatar */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-white shadow-md flex-shrink-0 bg-white">
              <Image
                src="/images/founder-about.webp"
                alt="Tabassum Sait"
                fill
                sizes="112px"
                className="object-cover object-top"
              />
            </div>

            {/* Header Text */}
            <div className="text-center sm:text-left">
              <span className="inline-block text-[10.5px] uppercase font-bold tracking-[0.2em] text-[#8A5A2B] bg-[#BF8237]/10 px-2.5 py-1 rounded-full mb-2">
                MEET THE FOUNDER
              </span>
              <h2
                id="founder-modal-title"
                className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1C1A] leading-tight mb-1"
              >
                Tabassum Sait
              </h2>
              <p className="text-[14px] font-semibold text-[#BF8237]">
                HR Practitioner · CIPD Certified · Mentor · Builder of Communities
              </p>
              <p className="text-[12.5px] text-[#6E6762] mt-0.5">
                15+ years experience · Ex-Swiss Re &amp; NHS · Startup CHRO
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Story Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-[#2D2825]">
          
          {/* Executive Summary */}
          <div>
            <h3 className="font-serif text-lg text-[#1E1C1A] font-semibold mb-2.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#BF8237]" />
              The Journey
            </h3>
            <p className="text-[14.5px] leading-relaxed text-[#554F4B]">
              Tabassum Sait is an accomplished Senior HR Practitioner, CIPD Certified professional, and Founder of
              HerAmbition. With over 15 years of multifaceted leadership experience across global
              institutions like <strong>Swiss Re</strong> and the <strong>NHS (UK)</strong>, as well as serving
              as Chief Human Resources Officer (CHRO) in high-growth startup ecosystems, Tabassum has
              dedicated her life to unlocking human potential and redefining executive diversity.
            </p>
          </div>

          {/* Why HerAmbition */}
          <div className="bg-[#FCFAF7] border border-[#EFE8DF] rounded-xl p-5">
            <h4 className="font-serif text-[16px] text-[#1E1C1A] font-medium mb-2 flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#B44A63]" />
              Why HerAmbition Was Born
            </h4>
            <p className="text-[13.5px] leading-relaxed text-[#5A534E]">
              &ldquo;Throughout my corporate career, I witnessed exceptionally talented women pause their careers
              for caregiving or maternity, only to face insurmountable bias when trying to return. I founded
              HerAmbition to demolish those barriers — building a warm, rigorous ecosystem where experienced
              women regain clarity, rebuild their professional voice, and re-enter high-impact roles.&rdquo;
            </p>
          </div>

          {/* Core Focus Pillars */}
          <div>
            <h3 className="font-serif text-lg text-[#1E1C1A] font-semibold mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#BF8237]" />
              Strategic Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13.5px]">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAF8F5] border border-[#EAE3DB]">
                <Award className="w-4 h-4 text-[#BF8237] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1E1C1A] font-medium">Returnship Architecture</strong>
                  <span className="text-[#6E6762] text-[12.5px]">Designing corporate re-entry programs that retain seasoned female talent.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAF8F5] border border-[#EAE3DB]">
                <Award className="w-4 h-4 text-[#BF8237] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1E1C1A] font-medium">Executive Leadership &amp; Advisory</strong>
                  <span className="text-[#6E6762] text-[12.5px]">Mastering workplace influence, executive presence, and strategic positioning.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="border-t border-[#ECE5DD] bg-[#FAF8F5] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[13px] font-medium text-[#0A66C2] hover:text-[#004182] px-4 py-2 rounded-[4px] hover:bg-[#0A66C2]/10 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36m1.39 9.74v-8.37H5.07v8.37h2.78z" />
            </svg>
            Connect on LinkedIn
          </a>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none text-[13px] font-medium text-[#6E6762] hover:text-[#1E1C1A] px-4 py-2.5 rounded-[4px] transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href="https://chat.whatsapp.com/BfPFwGkAPTNH72j2Bbnx2J?s=cl&p=i&mlu=4&ilr=4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[13px] font-medium px-5 py-2.5 rounded-[4px] shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
