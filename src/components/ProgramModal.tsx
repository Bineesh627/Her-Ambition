"use client";

import React, { useState } from "react";
import { X, Calendar, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Program } from "./ProgramCard";

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onRegister?: () => void;
}

export default function ProgramModal({
  program,
  onClose,
}: ProgramModalProps) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/45 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-[#ECE5DD] overflow-hidden z-10 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Modal Header Image */}
        <div className="relative w-full h-44 sm:h-52 flex-shrink-0 bg-[#FAF8F5]">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#1E1C1A] flex items-center justify-center shadow-md transition-all cursor-pointer"
            aria-label="Close details"
          >
            <X size={18} />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[10.5px] uppercase font-bold tracking-[0.2em] text-[#F9C3D1] bg-black/40 px-2 py-0.5 rounded-xs backdrop-blur-xs">
              {program.category}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium mt-1 drop-shadow-sm">
              {program.title}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#5E5752] border-b border-[#F0EBE5] pb-4">
            <div className="flex items-center space-x-2 bg-[#FAF8F5] px-3 py-1.5 rounded-sm border border-[#EAE3DB]">
              <Calendar size={14} className="text-[#B44A63]" />
              <span>Duration: {program.duration}</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#FAF8F5] px-3 py-1.5 rounded-sm border border-[#EAE3DB]">
              <Users size={14} className="text-[#B44A63]" />
              <span>Cohort: {program.audience}</span>
            </div>
          </div>

          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B44A63] mb-2">
              Program Overview
            </h4>
            <p className="text-[14.5px] text-[#4A4541] leading-relaxed">
              {program.fullOverview || program.description}
            </p>
          </div>

          {/* Curriculum breakdown */}
          {program.curriculum && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#B44A63] mb-3">
                Curriculum & Milestones
              </h4>
              <ul className="space-y-2.5">
                {program.curriculum.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2.5 text-[13.5px] text-[#45403C]">
                    <CheckCircle size={16} className="text-[#B44A63] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Application CTA */}
          <div className="pt-4 border-t border-[#F0EBE5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#7A746E]">
              Next cohort begins next month. Limited to 25 seats per track.
            </div>
            <a
              href="https://chat.whatsapp.com/BfPFwGkAPTNH72j2Bbnx2J?s=cl&p=i&mlu=4&ilr=4"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#B44A63] hover:bg-[#9E3D54] text-white text-[13.5px] font-medium tracking-wide px-7 py-2.5 rounded-[4px] shadow-xs transition-colors cursor-pointer"
            >
              <span>Apply via WhatsApp</span>
              <ArrowRight size={15} className="ml-1.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
