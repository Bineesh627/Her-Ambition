"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProgramsSection, { Program, programsData } from "@/components/ProgramsSection";
import CareerReadiness from "@/components/CareerReadiness";
import ForOrganisationsSection from "@/components/ForOrganisationsSection";
import EventsSection from "@/components/EventsSection";
import MembershipSection from "@/components/MembershipSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ProgramModal from "@/components/ProgramModal";
import StoriesModal from "@/components/StoriesModal";
import FounderModal from "@/components/FounderModal";

export default function Home() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [storiesModalOpen, setStoriesModalOpen] = useState(false);
  const [founderModalOpen, setFounderModalOpen] = useState(false);

  // No extra forms on the site: any "enquire / discuss" action takes people to the Contact section
  const goToContact = () => {
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#1E1C1A]">
      {/* Header & Navigation: Home / About the Founder / For Individuals / For Organisations / Community / Events / Contact */}
      <Header />

      {/* Home: Hero */}
      <Hero />

      {/* About the Founder */}
      <AboutSection onOpenFounderJourney={() => setFounderModalOpen(true)} />

      {/* For Individuals (programmes) */}
      <ProgramsSection
        onSelectProgram={(program) => setSelectedProgram(program)}
        onViewAllPrograms={() => setSelectedProgram(programsData[0])}
      />

      {/* Career Readiness: kept on the page (not in navbar), sits under For Individuals */}
      <CareerReadiness />

      {/* For Organisations */}
      <ForOrganisationsSection onEnquire={goToContact} />

      {/* Community: join us */}
      <MembershipSection />

      {/* Alumnae stories */}
      <Testimonials onSeeMoreStories={() => setStoriesModalOpen(true)} />

      {/* Events: calendar */}
      <EventsSection />

      {/* Contact: form, scheduling and social media */}
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
    </main>
  );
}
