"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  MessageSquare,
  Mail,
  Sparkles,
  ArrowRight,
  Calendar,
  Clock,
  ExternalLink,
} from "lucide-react";

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<"message" | "schedule">("message");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Schedule a Meeting / 1:1 Call",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const interestOptions = [
    "Schedule a Meeting / 1:1 Call",
    "Programs & Cohorts",
    "Career Readiness Track",
    "1-on-1 Mentorship",
    "Corporate Partnership",
    "Join the Community",
    "General Inquiry",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "32c31f3f-96fb-4ef1-960f-eab81c8ff23f";
    data.append("access_key", accessKey);
    data.append("from_name", "HerAmbition Contact Form");
    data.append(
      "subject",
      `New Contact Inquiry from ${formData.name || "Website Visitor"} — ${formData.interest}`
    );

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
          res.message || "Something went wrong. Please try again or reach out on WhatsApp."
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Network error. Please try again or reach out on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#FAF8F5] py-16 sm:py-20 md:py-24 border-t border-[#ECE5DC] scroll-mt-20">
      <div id="schedule" className="sr-only" aria-hidden="true" />
      <div id="events" className="sr-only" aria-hidden="true" />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#B44A63] uppercase mb-2.5">
            GET IN TOUCH
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-normal leading-[1.15] text-[#1E1C1A] tracking-tight mb-4">
            Let&apos;s Start a Conversation<span className="text-[#B44A63]">.</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#5A5350]">
            Whether you are planning your career comeback, looking to schedule a 1:1 discovery call,
            or interested in corporate solutions, we would love to hear from you.
          </p>
        </div>

        {/* Content Layout: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start max-w-5xl mx-auto">

          {/* Left Column: Context & Quick Channels */}
          <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8">
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#EFE8DF] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#B44A63] font-semibold mb-3">
                <Sparkles size={14} className="text-[#B44A63]" />
                Direct Support
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#1E1C1A] mb-2.5">
                We are here to help you rise
              </h3>
              <p className="text-[14px] leading-relaxed text-[#5A5350] mb-6">
                Have questions regarding which cohort is right for you or want to book a 1:1 discussion?
                Choose an option below to connect with us.
              </p>

              <div className="space-y-3.5 pt-4 border-t border-[#F2ECE6]">
                {/* Schedule a Meeting / 1:1 Discovery Call on Cal.com */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("schedule");
                    document.getElementById("contact-interactive")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full text-left flex items-center gap-3.5 p-3.5 rounded-lg bg-[#FAF5EE] hover:bg-[#F5EFEB] border border-[#E8DEC7] hover:border-[#B44A63]/50 transition-all duration-200 group cursor-pointer shadow-xs hover:shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-[#B44A63]/10 text-[#B44A63] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Calendar size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-[13.5px] font-semibold text-[#1E1C1A] group-hover:text-[#B44A63] transition-colors truncate">
                        Schedule a Meeting
                      </p>
                      <span className="text-[9.5px] font-bold uppercase tracking-wider bg-[#B44A63] text-white px-1.5 py-0.5 rounded-xs shrink-0">
                        1:1 Call
                      </span>
                    </div>
                    <p className="text-[11.5px] text-[#6E6762] truncate">
                      Book 10–15 mins via Cal.com
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-[#A59D96] group-hover:text-[#B44A63] group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>

                {/* WhatsApp Community */}
                <a
                  href="https://chat.whatsapp.com/BfPFwGkAPTNH72j2Bbnx2J?s=cl&p=i&mlu=4&ilr=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-lg bg-[#FAF8F5] hover:bg-[#F5EFEB] border border-[#EAE3DB] transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-semibold text-[#1E1C1A] group-hover:text-[#B44A63] transition-colors truncate">
                      WhatsApp Community
                    </p>
                    <p className="text-[11.5px] text-[#6E6762] truncate">
                      Join 500+ ambitious women
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-[#A59D96] group-hover:text-[#B44A63] group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                {/* Email Support */}
                <a
                  href="mailto:someone@herambition.co.in"
                  className="flex items-center gap-3.5 p-3 rounded-lg bg-[#FAF8F5] hover:bg-[#F5EFEB] border border-[#EAE3DB] transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-[#B44A63]/10 flex items-center justify-center text-[#B44A63] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-semibold text-[#1E1C1A] group-hover:text-[#B44A63] transition-colors truncate">
                      Email Us
                    </p>
                    <p className="text-[11.5px] text-[#6E6762] truncate">
                      someone@herambition.co.in
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-[#A59D96] group-hover:text-[#B44A63] group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              </div>
            </div>

            {/* Note badge */}
            <div className="bg-[#FAF5EE] rounded-xl p-4 sm:p-5 border border-[#ECE2D5] text-[12.5px] text-[#6B6056] leading-relaxed">
              <strong className="text-[#2B2725] font-semibold">Response Time:</strong> We review all messages thoughtfully and typically reply within 24 hours.
            </div>
          </div>

          {/* Right Column: Interactive Card (Tabs for Send Message vs Schedule 1:1 Meeting) */}
          <div
            id="contact-interactive"
            className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 md:p-9 border border-[#EFE8DF] shadow-[0_8px_30px_-6px_rgba(0,0,0,0.04)] scroll-mt-28"
          >
            {/* Tab Switcher */}
            <div className="flex items-center gap-2 p-1.5 bg-[#FAF5EE] rounded-lg border border-[#EAE3DB] mb-6">
              <button
                type="button"
                onClick={() => setActiveTab("message")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-md text-[13px] font-semibold transition-all cursor-pointer ${
                  activeTab === "message"
                    ? "bg-white text-[#1E1C1A] shadow-xs"
                    : "text-[#6E6762] hover:text-[#1E1C1A]"
                }`}
              >
                <Mail size={15} className={activeTab === "message" ? "text-[#B44A63]" : ""} />
                <span>Send a Message</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("schedule")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-md text-[13px] font-semibold transition-all cursor-pointer ${
                  activeTab === "schedule"
                    ? "bg-white text-[#1E1C1A] shadow-xs"
                    : "text-[#6E6762] hover:text-[#1E1C1A]"
                }`}
              >
                <Calendar size={15} className={activeTab === "schedule" ? "text-[#B44A63]" : ""} />
                <span>Schedule 1:1 Call</span>
                <span className="text-[9.5px] uppercase font-bold tracking-wider bg-[#B44A63] text-white px-1.5 py-0.5 rounded-xs shrink-0">
                  Cal.com
                </span>
              </button>
            </div>

            {activeTab === "schedule" ? (
              /* Embedded Cal.com view */
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0EBE5] pb-3.5">
                  <div>
                    <h3 className="font-serif text-2xl font-normal text-[#1E1C1A]">
                      Book a 1:1 Discovery Call
                    </h3>
                    <p className="text-[13px] text-[#6E6762] mt-0.5">
                      Select a convenient slot on our calendar below.
                    </p>
                  </div>
                  <a
                    href="https://cal.com/her-ambition-lzbpgs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#B44A63] hover:text-[#9E3D54] font-medium shrink-0 group py-1"
                  >
                    <span>Open in new window</span>
                    <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

                {/* Embedded Cal.com Frame */}
                <div className="w-full h-[620px] sm:h-[680px] rounded-xl overflow-hidden border border-[#E8DEC7] bg-white relative shadow-xs">
                  <iframe
                    src="https://cal.com/her-ambition-lzbpgs?embed=true"
                    title="Schedule a 1:1 Discovery Call with HerAmbition on Cal.com"
                    className="w-full h-full border-0"
                    allow="camera; microphone; autoplay; fullscreen"
                  />
                </div>

                <p className="text-[12px] text-[#7A736E] text-center pt-1">
                  Powered by Cal.com · Real-time availability &amp; instant calendar invite
                </p>
              </div>
            ) : submitted ? (
              <div className="py-12 px-4 text-center">
                <div className="w-14 h-14 bg-[#FAF5EE] text-[#B44A63] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1C1A] font-normal mb-2">
                  Message Received!
                </h3>
                <p className="text-[14.5px] text-[#5A5350] max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you for reaching out, <span className="font-semibold text-[#1E1C1A]">{formData.name}</span>.
                  A member of our team will be in touch with you shortly.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ name: "", email: "", phone: "", interest: "Programs & Cohorts", message: "" });
                      setSubmitted(false);
                    }}
                    className="inline-flex items-center justify-center border border-[#B44A63] text-[#B44A63] hover:bg-[#B44A63] hover:text-white px-6 py-2.5 rounded-[4px] text-[13.5px] font-medium transition-all duration-200 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("schedule")}
                    className="inline-flex items-center justify-center gap-2 bg-[#B44A63] hover:bg-[#9E3D54] text-white px-6 py-2.5 rounded-[4px] text-[13.5px] font-medium transition-all duration-200 cursor-pointer"
                  >
                    <Calendar size={15} />
                    <span>Or Schedule a 1:1 Call</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#1E1C1A] mb-1">
                    Send Us a Message
                  </h3>
                  <p className="text-[13px] text-[#6E6762]">
                    Fill in your details below and we will connect with you.
                  </p>
                </div>

                {/* Name & Email (2 columns on tablet/desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[12.5px] font-medium text-[#2E2B28] mb-1.5">
                      Your Full Name <span className="text-[#B44A63]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-3.5 py-2.5 rounded-[5px] border border-[#DDD5CC] focus:border-[#B44A63] focus:ring-1 focus:ring-[#B44A63] text-[14px] text-[#1E1C1A] placeholder-[#9E9790] outline-none transition-all bg-[#FCFBF9]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[12.5px] font-medium text-[#2E2B28] mb-1.5">
                      Email Address <span className="text-[#B44A63]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. priya@example.com"
                      className="w-full px-3.5 py-2.5 rounded-[5px] border border-[#DDD5CC] focus:border-[#B44A63] focus:ring-1 focus:ring-[#B44A63] text-[14px] text-[#1E1C1A] placeholder-[#9E9790] outline-none transition-all bg-[#FCFBF9]"
                    />
                  </div>
                </div>

                {/* Phone & Topic of Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-[12.5px] font-medium text-[#2E2B28] mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-[5px] border border-[#DDD5CC] focus:border-[#B44A63] focus:ring-1 focus:ring-[#B44A63] text-[14px] text-[#1E1C1A] placeholder-[#9E9790] outline-none transition-all bg-[#FCFBF9]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-interest" className="block text-[12.5px] font-medium text-[#2E2B28] mb-1.5">
                      I Am Interested In
                    </label>
                    <select
                      id="contact-interest"
                      name="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[5px] border border-[#DDD5CC] focus:border-[#B44A63] focus:ring-1 focus:ring-[#B44A63] text-[14px] text-[#1E1C1A] outline-none transition-all bg-[#FCFBF9] cursor-pointer"
                    >
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-[12.5px] font-medium text-[#2E2B28] mb-1.5">
                    Your Message <span className="text-[#B44A63]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us a little about your background, career goals, or specific questions..."
                    className="w-full px-3.5 py-2.5 rounded-[5px] border border-[#DDD5CC] focus:border-[#B44A63] focus:ring-1 focus:ring-[#B44A63] text-[14px] text-[#1E1C1A] placeholder-[#9E9790] outline-none transition-all bg-[#FCFBF9] resize-y"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-md bg-[#FDF3F3] border border-[#F5C2C7] text-[#842029] text-[13px] leading-relaxed">
                    {errorMessage}
                  </div>
                )}

                {/* Submit button & Cal.com link */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B44A63] hover:bg-[#9E3D54] disabled:opacity-75 text-white text-[14px] font-medium tracking-wide px-8 py-3.5 rounded-[4px] shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("schedule")}
                    className="inline-flex items-center justify-center gap-1.5 text-[13px] font-medium text-[#B44A63] hover:text-[#9E3D54] transition-colors py-2 px-1 text-center group cursor-pointer"
                  >
                    <Calendar size={15} />
                    <span>Or schedule 1:1 call on Cal.com</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
