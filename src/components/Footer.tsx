"use client";

import React from "react";
import Logo from "./Logo";

export default function Footer() {
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Career Readiness", href: "#career-readiness" },
    { name: "Membership", href: "#membership" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-white py-12 md:py-16 border-t border-[#F0EBE5]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Layout: 3 Columns matching reference */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          
          {/* Left: Brand Logo */}
          <div className="flex-shrink-0">
            <Logo size="sm" />
          </div>

          {/* Center: Navigation Links with Pipes */}
          <nav className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3.5 gap-y-2 text-[12.5px] text-[#554F4A] font-medium">
            {links.map((link, idx) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#B44A63] transition-colors py-0.5"
                >
                  {link.name}
                </a>
                {idx < links.length - 1 && (
                  <span className="text-[#CCC4BD] select-none text-[11px]">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Right: Social Icons + Copyright */}
          <div className="flex flex-col items-center lg:items-end space-y-2.5 flex-shrink-0">
            <div className="flex items-center space-x-4 text-[#2D2825]">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#B44A63] transition-colors p-1"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#B44A63] transition-colors p-1"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-[#B44A63] transition-colors p-1"
              >
                <svg
                  className="w-4.5 h-4.5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            <p className="text-[11.5px] text-[#7A736D] font-normal tracking-tight">
              &copy; 2026 HerAmbition. All rights reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
