"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenJoinModal: () => void;
}

export default function Header({ onOpenJoinModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Career Readiness", href: "#career-readiness" },
    { name: "Membership", href: "#membership" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#EBE4DC] py-2.5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]"
            : "bg-white border-b border-[#F0EBE5] py-3.5"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <a href="#" className="flex-shrink-0" aria-label="HerAmbition Home">
              <Logo />
            </a>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[13px] font-medium tracking-wide">
              {navItems.map((item) => {
                const isActive = activeNav === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveNav(item.name)}
                    className={`relative py-1 text-[#221F1D] transition-colors duration-200 hover:text-[#B44A63] ${
                      isActive ? "font-semibold text-[#181615]" : "text-[#4A4541]"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#181615] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: Join CTA button */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={onOpenJoinModal}
                className="bg-[#B44A63] hover:bg-[#9E3D54] text-white text-[13px] font-medium tracking-wide px-5 py-2.5 rounded-[4px] shadow-xs transition-all duration-200 active:scale-[0.98] hover:shadow-md cursor-pointer"
              >
                Join the Community
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center space-x-3">
              <button
                onClick={onOpenJoinModal}
                className="bg-[#B44A63] text-white text-[12px] font-medium px-3.5 py-1.5 rounded-[4px] sm:inline-block"
              >
                Join
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#221F1D] hover:text-[#B44A63] focus:outline-none"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Drawer */}
          <div className="fixed top-16 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
            <div className="space-y-6">
              <div className="border-b border-[#EAE4DC] pb-4">
                <p className="text-xs uppercase tracking-widest text-[#B44A63] font-semibold">
                  Navigation
                </p>
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setActiveNav(item.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-base font-medium transition-colors py-1 ${
                      activeNav === item.name
                        ? "text-[#B44A63] font-semibold"
                        : "text-[#2B2725] hover:text-[#B44A63]"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#EAE4DC] space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full bg-[#B44A63] hover:bg-[#9E3D54] text-white py-3 rounded-[4px] font-medium text-sm text-center shadow-xs"
              >
                Join the Community
              </button>
              <p className="text-center text-xs text-[#7A746E]">
                Lead with Grace & Impact
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
