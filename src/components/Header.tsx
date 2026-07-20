/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, FileText } from "lucide-react";

interface HeaderProps {
  onSubmitRFPClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ onSubmitRFPClick, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "PROJECTS", id: "projects" },
    { label: "EXPERTISE", id: "expertise" },
    { label: "INSIGHTS", id: "insights" },
    { label: "FIRM", id: "firm" },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-header py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Typographic Logo */}
        <div
          className="flex flex-col cursor-pointer select-none group"
          onClick={() => handleLinkClick("hero")}
        >
          <span className="font-serif text-2xl md:text-3xl font-semibold tracking-wider text-white group-hover:text-bronze transition-colors duration-300">
            YACAE
          </span>
          <span className="text-[9px] md:text-[10px] font-sans font-light tracking-[0.2em] text-charcoal-400 uppercase mt-0.5 leading-none group-hover:text-white transition-colors duration-300">
            YOHANNES ABBAY Consulting Architects & Engineers
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className="text-xs font-sans font-medium tracking-[0.2em] text-charcoal-200 hover:text-bronze transition-all duration-300 relative py-1 group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-bronze transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={onSubmitRFPClick}
            className="px-5 py-2.5 border border-bronze text-bronze hover:bg-bronze hover:text-white transition-all duration-500 text-xs font-sans font-semibold tracking-[0.15em] rounded-sm cursor-pointer"
          >
            SUBMIT RFP
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={onSubmitRFPClick}
            className="px-3 py-1.5 border border-bronze text-bronze hover:bg-bronze hover:text-white transition-all duration-300 text-[10px] font-sans font-bold tracking-widest rounded-sm"
          >
            RFP
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-bronze transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-charcoal-950/95 backdrop-blur-lg z-40 transition-all duration-500 border-t border-white/5">
          <nav className="h-full flex flex-col justify-between px-8 py-12">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-xl font-serif text-white hover:text-bronze transition-all duration-300 block w-full text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="space-y-6 pb-20">
              <div className="h-[1px] bg-white/10 w-full"></div>
              <p className="text-xs text-charcoal-400 font-sans tracking-wide leading-relaxed">
                A regional standard of technical scholarship & permanent civic scale.
              </p>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onSubmitRFPClick();
                }}
                className="w-full py-4 bg-bronze hover:bg-bronze-dark text-white font-sans font-bold tracking-[0.2em] text-xs flex items-center justify-center space-x-3 transition-all duration-300 rounded-sm"
              >
                <FileText size={16} />
                <span>SUBMIT RFP APPLICATION</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
