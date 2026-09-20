"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProgramsSection, { Program, programsData } from "@/components/ProgramsSection";
import CareerReadiness from "@/components/CareerReadiness";
import MembershipSection from "@/components/MembershipSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ProgramModal from "@/components/ProgramModal";
import StoriesModal from "@/components/StoriesModal";
import FounderModal from "@/components/FounderModal";
import CorporatePartnerModal from "@/components/CorporatePartnerModal";

export default function Home() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [storiesModalOpen, setStoriesModalOpen] = useState(false);
  const [founderModalOpen, setFounderModalOpen] = useState(false);
  const [corporateModalOpen, setCorporateModalOpen] = useState(false);

  const handleExplorePrograms = () => {
    const el = document.getElementById("programs");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#1E1C1A]">
      {/* 1. Header & Navigation */}
      <Header />

      {/* 2. Hero Section */}
      <Hero onExplorePrograms={handleExplorePrograms} />

      {/* 2.5. About Section (Meet the Founder & Corporate Solutions) */}
      <AboutSection
        onOpenFounderJourney={() => setFounderModalOpen(true)}
        onOpenCorporatePartner={() => setCorporateModalOpen(true)}
      />

      {/* 3. Programs Section */}
      <ProgramsSection
        onSelectProgram={(program) => setSelectedProgram(program)}
        onViewAllPrograms={() => setSelectedProgram(programsData[0])}
      />

      {/* 4. Career Readiness Section */}
      <CareerReadiness />

      {/* 5. Membership Section */}
      <MembershipSection />

      {/* 6. Testimonials Section */}
      <Testimonials
        onSeeMoreStories={() => setStoriesModalOpen(true)}
      />

      {/* 6.5. Contact Section */}
      <ContactSection />

      {/* 7. Final Call to Action */}
      <FinalCTA />

      {/* 8. Footer */}
      <Footer />

      {/* Program Details Modal */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />

      {/* Alumnae Stories Modal */}
      <StoriesModal
        isOpen={storiesModalOpen}
        onClose={() => setStoriesModalOpen(false)}
      />

      {/* Founder Journey Modal */}
      <FounderModal
        isOpen={founderModalOpen}
        onClose={() => setFounderModalOpen(false)}
      />

      {/* Corporate Partner Modal */}
      <CorporatePartnerModal
        isOpen={corporateModalOpen}
        onClose={() => setCorporateModalOpen(false)}
      />
    </main>
  );
}
