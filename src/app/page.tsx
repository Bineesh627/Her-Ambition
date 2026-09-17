"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProgramsSection, { Program, programsData } from "@/components/ProgramsSection";
import CareerReadiness from "@/components/CareerReadiness";
import MembershipSection from "@/components/MembershipSection";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import JoinModal from "@/components/JoinModal";
import ProgramModal from "@/components/ProgramModal";
import StoriesModal from "@/components/StoriesModal";

export default function Home() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [joinModalType, setJoinModalType] = useState<"community" | "membership" | "career">("community");
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [storiesModalOpen, setStoriesModalOpen] = useState(false);

  const handleOpenJoin = (type: "community" | "membership" | "career" = "community") => {
    setJoinModalType(type);
    setJoinModalOpen(true);
  };

  const handleExplorePrograms = () => {
    const el = document.getElementById("programs");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#1E1C1A]">
      {/* 1. Header & Navigation */}
      <Header onOpenJoinModal={() => handleOpenJoin("community")} />

      {/* 2. Hero Section */}
      <Hero
        onExplorePrograms={handleExplorePrograms}
        onJoinCommunity={() => handleOpenJoin("community")}
      />

      {/* 3. Programs Section */}
      <ProgramsSection
        onSelectProgram={(program) => setSelectedProgram(program)}
        onViewAllPrograms={() => setSelectedProgram(programsData[0])}
      />

      {/* 4. Career Readiness Section */}
      <CareerReadiness
        onExplore={() => handleOpenJoin("career")}
      />

      {/* 5. Membership Section */}
      <MembershipSection
        onJoinMembership={() => handleOpenJoin("membership")}
      />

      {/* 6. Testimonials Section */}
      <Testimonials
        onSeeMoreStories={() => setStoriesModalOpen(true)}
      />

      {/* 7. Final Call to Action */}
      <FinalCTA
        onJoin={() => handleOpenJoin("community")}
      />

      {/* 8. Footer */}
      <Footer />

      {/* Interactive Overlays */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
        initialType={joinModalType}
      />

      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onRegister={() => handleOpenJoin("career")}
      />

      <StoriesModal
        isOpen={storiesModalOpen}
        onClose={() => setStoriesModalOpen(false)}
        onJoin={() => handleOpenJoin("community")}
      />
    </main>
  );
}
