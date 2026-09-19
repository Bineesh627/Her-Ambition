"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Building2, MessageSquare, Send } from "lucide-react";

interface CorporatePartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const solutionsList = [
  "Returnship Programs",
  "Women Leadership Development",
  "Workplace Wellbeing & Mental Health",
  "HR Advisory & Training",
];

export default function CorporatePartnerModal({
  isOpen,
  onClose,
}: CorporatePartnerModalProps) {
  const [selectedSolution, setSelectedSolution] = useState(solutionsList[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="corporate-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/55 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-[#ECE5DD] overflow-hidden z-10 animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="relative bg-[#FAF5EE] border-b border-[#ECE3D8] p-6 sm:p-7 flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#1E1C1A] flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer"
            aria-label="Close corporate partnership modal"
          >
            <X size={18} />
          </button>

          <span className="inline-block text-[10.5px] uppercase font-bold tracking-[0.2em] text-[#8A5A2B] bg-[#BF8237]/10 px-2.5 py-1 rounded-full mb-2">
            CORPORATE PARTNERSHIP
          </span>
          <h2
            id="corporate-modal-title"
            className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1C1A] leading-tight mb-1"
          >
            Build an Inclusive Workforce
          </h2>
          <p className="text-[13.5px] text-[#6E6762]">
            Partner with HerAmbition to access experienced female talent, launch returnship cohorts, or elevate your women leaders.
          </p>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#EBF8EE] text-[#1EBE5D] flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#1E1C1A]">
                Thank You for Reaching Out!
              </h3>
              <p className="text-[14px] text-[#554F4B] max-w-md mx-auto">
                Tabassum Sait and our corporate partnerships team will contact you within 24 hours to schedule an initial consultation.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="bg-[#BF8237] hover:bg-[#A86F28] text-white px-6 py-2.5 rounded-[4px] text-[13.5px] font-medium transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Solution Selection */}
              <div>
                <label className="block text-[12.5px] font-semibold text-[#1E1C1A] uppercase tracking-wider mb-2">
                  Select Corporate Solution
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {solutionsList.map((sol) => (
                    <button
                      key={sol}
                      type="button"
                      onClick={() => setSelectedSolution(sol)}
                      className={`text-left text-[12.5px] px-3.5 py-2.5 rounded-lg border transition-all ${
                        selectedSolution === sol
                          ? "bg-[#FAF5EE] border-[#BF8237] text-[#BF8237] font-semibold shadow-xs"
                          : "bg-white border-[#E8E2DC] text-[#4A4541] hover:border-[#BF8237]/50"
                      }`}
                    >
                      {sol}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12.5px] font-medium text-[#3E3836] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3.5 py-2.5 text-[13.5px] rounded-lg border border-[#DDD6CE] focus:border-[#BF8237] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[12.5px] font-medium text-[#3E3836] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 text-[13.5px] rounded-lg border border-[#DDD6CE] focus:border-[#BF8237] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-[12.5px] font-medium text-[#3E3836] mb-1">
                  Company / Organization *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-[#8A847F] absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company or Enterprise Name"
                    className="w-full pl-10 pr-3.5 py-2.5 text-[13.5px] rounded-lg border border-[#DDD6CE] focus:border-[#BF8237] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[12.5px] font-medium text-[#3E3836] mb-1">
                  Briefly describe your objectives or cohort size
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g., We are looking to design a 12-week Returnship program for 20 returning software and product leaders..."
                  className="w-full px-3.5 py-2.5 text-[13.5px] rounded-lg border border-[#DDD6CE] focus:border-[#BF8237] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit & WhatsApp */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href="https://chat.whatsapp.com/BfPFwGkAPTNH72j2Bbnx2J?s=cl&p=i&mlu=4&ilr=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[13px] font-medium text-[#25D366] hover:text-[#1EBE5D] px-3 py-2 rounded-lg hover:bg-[#25D366]/10 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Direct WhatsApp Inquiry
                </a>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#BF8237] hover:bg-[#A86F28] text-white px-6 py-2.5 rounded-[4px] text-[13.5px] font-medium shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
