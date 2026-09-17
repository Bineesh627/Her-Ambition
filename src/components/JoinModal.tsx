"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Sparkles, Heart } from "lucide-react";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: "community" | "membership" | "career";
}

export default function JoinModal({ isOpen, onClose, initialType = "community" }: JoinModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    stage: "restarting",
    interests: "leadership",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep open for feedback
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={handleReset}
      />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-lg rounded-xl shadow-2xl border border-[#ECE5DD] overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Top blush banner */}
        <div className="bg-[#FDF1EE] px-6 sm:px-8 py-5 border-b border-[#F0DFDC] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B44A63]" />
            <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#8C5D6B]">
              {initialType === "membership"
                ? "Membership Application"
                : initialType === "career"
                ? "Career Readiness Registration"
                : "Join HerAmbition Community"}
            </span>
          </div>
          <button
            onClick={handleReset}
            className="text-[#6B6560] hover:text-[#1E1C1A] p-1 rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="font-serif text-2xl sm:text-[26px] font-normal text-[#1E1C1A] mb-1.5">
                  Welcome to Your Circle of Growth
                </h3>
                <p className="text-[13.5px] text-[#6B6560] leading-relaxed">
                  Connect with mentors, peer circles, masterclasses, and executive opportunities designed for women leaders.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E4844] mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-3.5 py-2.5 text-sm border border-[#DDD6CE] rounded-[4px] focus:outline-none focus:border-[#B44A63] focus:ring-1 focus:ring-[#B44A63] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E4844] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@domain.com"
                  className="w-full px-3.5 py-2.5 text-sm border border-[#DDD6CE] rounded-[4px] focus:outline-none focus:border-[#B44A63] focus:ring-1 focus:ring-[#B44A63] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E4844] mb-1.5">
                    Career Stage
                  </label>
                  <select
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm border border-[#DDD6CE] rounded-[4px] focus:outline-none focus:border-[#B44A63] bg-white text-[#2B2724]"
                  >
                    <option value="restarting">Restarting Career</option>
                    <option value="mid_career">Mid-Career Growth</option>
                    <option value="executive">Senior / Executive</option>
                    <option value="entrepreneur">Founder / Entrepreneur</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E4844] mb-1.5">
                    Primary Interest
                  </label>
                  <select
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm border border-[#DDD6CE] rounded-[4px] focus:outline-none focus:border-[#B44A63] bg-white text-[#2B2724]"
                  >
                    <option value="leadership">Leadership Mastery</option>
                    <option value="coaching">1-on-1 Mentorship</option>
                    <option value="readiness">Career Readiness</option>
                    <option value="community">Networking & Events</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#B44A63] hover:bg-[#9E3D54] text-white py-3 rounded-[4px] font-medium text-sm transition-all duration-200 shadow-xs cursor-pointer"
                >
                  Submit Application
                </button>
              </div>

              <p className="text-[11.5px] text-[#8C847E] text-center">
                We respect your privacy. No spam. Only meaningful opportunities.
              </p>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-[#FBECEB] rounded-full flex items-center justify-center mx-auto text-[#B44A63]">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#1E1C1A]">
                Welcome to HerAmbition!
              </h3>
              <p className="text-sm text-[#5C5550] max-w-sm mx-auto leading-relaxed">
                Thank you for applying, <span className="font-semibold text-[#1E1C1A]">{formData.name}</span>. Our community director will review your submission and email you your orientation package shortly.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-[#B44A63] hover:bg-[#9E3D54] text-white text-xs font-medium uppercase tracking-wider px-6 py-2.5 rounded-[4px]"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
