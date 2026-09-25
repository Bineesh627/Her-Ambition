"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Building2, Send } from "lucide-react";

interface CorporatePartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const solutionsList = [
  "Returnship Programs",
  "Women Leadership Development",
  "Workplace Wellbeing & Mental Health",
  "HR Advisory & Training",
  "Maternity Coach and Training",
  "All the above",
];

export default function CorporatePartnerModal({
  isOpen,
  onClose,
}: CorporatePartnerModalProps) {
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([
    "Returnship Programs",
  ]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSolution = (sol: string) => {
    if (sol === "All the above") {
      if (selectedSolutions.includes("All the above")) {
        setSelectedSolutions(["Returnship Programs"]);
      } else {
        setSelectedSolutions(["All the above"]);
      }
      return;
    }

    let updated = selectedSolutions.filter((s) => s !== "All the above");
    if (updated.includes(sol)) {
      if (updated.length > 1) {
        updated = updated.filter((s) => s !== sol);
      }
    } else {
      updated.push(sol);
      const individual = solutionsList.filter((s) => s !== "All the above");
      if (updated.length === individual.length) {
        updated = ["All the above"];
      }
    }
    setSelectedSolutions(updated);
  };

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "32c31f3f-96fb-4ef1-960f-eab81c8ff23f";
    data.append("access_key", accessKey);
    data.append("from_name", "HerAmbition Corporate Partnerships");
    data.append(
      "subject",
      `Corporate Partnership Inquiry from ${formData.company || formData.name}`
    );
    data.append("selected_solutions", selectedSolutions.join(", "));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const res = await response.json();

      if (res.success) {
        setSubmitted(true);
      } else {
        console.error("Web3Forms error:", res);
        setErrorMessage(
          res.message || "Something went wrong. Please try again or contact us directly."
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Network error. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
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
            Partner with HerAmbition to launch returnship cohorts, support women returning to work, or elevate your women leaders.
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
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[12.5px] font-semibold text-[#1E1C1A] uppercase tracking-wider">
                    Select Corporate Solution
                  </label>
                  <span className="text-[11px] text-[#8C847E]">
                    (Select one or more)
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {solutionsList.map((sol) => {
                    const isSelected =
                      selectedSolutions.includes(sol) ||
                      (selectedSolutions.includes("All the above") && sol === "All the above");

                    return (
                      <button
                        key={sol}
                        type="button"
                        onClick={() => toggleSolution(sol)}
                        className={`flex items-center justify-between text-left text-[12.5px] px-3.5 py-2.5 rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#FAF5EE] border-[#BF8237] text-[#BF8237] font-semibold shadow-xs"
                            : "bg-white border-[#E8E2DC] text-[#4A4541] hover:border-[#BF8237]/50"
                        }`}
                      >
                        <span className="truncate pr-2">{sol}</span>
                        {isSelected && (
                          <span className="w-4 h-4 rounded-full bg-[#BF8237] text-white flex items-center justify-center text-[10px] shrink-0">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
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
                    name="name"
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
                    name="email"
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
                    name="company"
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
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g., We are looking to design a 12-week Returnship program for 20 returning software and product leaders..."
                  className="w-full px-3.5 py-2.5 text-[13.5px] rounded-lg border border-[#DDD6CE] focus:border-[#BF8237] focus:outline-none transition-colors resize-none"
                />
              </div>

              {errorMessage && (
                <div className="p-3 rounded-md bg-[#FDF3F3] border border-[#F5C2C7] text-[#842029] text-[13px] leading-relaxed">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#BF8237] hover:bg-[#A86F28] disabled:opacity-75 text-white px-7 py-2.5 rounded-[4px] text-[13.5px] font-medium shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
