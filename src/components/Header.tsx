/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, FileText, Sun, Moon } from "lucide-react";

interface HeaderProps {
  theme: "light" | "dark";
  onThemeToggle: () => void;
  onSubmitRFPClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Header({
  theme,
  onThemeToggle,
  onSubmitRFPClick,
  onNavigate,
}: HeaderProps) {
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

  const headerBgClass = isScrolled
    ? theme === "light"
      ? "bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm py-4"
      : "bg-charcoal-950/85 backdrop-blur-md border-b border-white/5 py-4"
    : "bg-transparent py-6";

  const logoTextClass = isScrolled && theme === "light"
    ? "text-charcoal-900 group-hover:text-bronze"
    : "text-white group-hover:text-bronze";

  const logoSubtextClass = isScrolled && theme === "light"
    ? "text-charcoal-500 group-hover:text-charcoal-900"
    : "text-charcoal-400 group-hover:text-white";

  const menuIconColor = isScrolled && theme === "light"
    ? "text-charcoal-900 hover:text-bronze"
    : "text-white hover:text-bronze";

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${headerBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Typographic Logo */}
        <div
          className="flex flex-col cursor-pointer select-none group"
          onClick={() => handleLinkClick("hero")}
        >
          <span className={`font-serif text-2xl md:text-3xl font-semibold tracking-wider transition-colors duration-300 ${logoTextClass}`}>
            YACAE
          </span>
          <span className={`text-[9px] md:text-[10px] font-sans font-light tracking-[0.2em] uppercase mt-0.5 leading-none transition-colors duration-300 ${logoSubtextClass}`}>
            YOHANNES ABBAY Consulting Architects & Engineers
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => {
              const linkColorClass = isScrolled && theme === "light"
                ? "text-charcoal-700 hover:text-bronze"
                : "text-charcoal-200 hover:text-bronze";

              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-xs font-sans font-medium tracking-[0.2em] transition-all duration-300 relative py-1 group cursor-pointer ${linkColorClass}`}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-bronze transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={onThemeToggle}
            className={`p-2.5 rounded-sm border transition-all duration-300 flex items-center justify-center cursor-pointer ${
              isScrolled && theme === "light"
                ? "border-stone-200 hover:border-bronze hover:text-bronze text-charcoal-700 bg-stone-100"
                : "border-white/10 hover:border-bronze hover:text-bronze text-white bg-white/5"
            }`}
            aria-label="Toggle theme"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
          </button>

          <button
            onClick={onSubmitRFPClick}
            className="px-5 py-2.5 border border-bronze text-bronze hover:bg-bronze hover:text-white transition-all duration-500 text-xs font-sans font-semibold tracking-[0.15em] rounded-sm cursor-pointer"
          >
            SUBMIT RFP
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          {/* Mobile Theme Toggle */}
          <button
            onClick={onThemeToggle}
            className={`p-2 rounded-sm border transition-all duration-300 flex items-center justify-center ${
              isScrolled && theme === "light"
                ? "border-stone-200 text-charcoal-700 bg-stone-100"
                : "border-white/10 text-white bg-white/5"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={13} /> : <Sun size={13} />}
          </button>

          <button
            onClick={onSubmitRFPClick}
            className="px-3 py-1.5 border border-bronze text-bronze hover:bg-bronze hover:text-white transition-all duration-300 text-[10px] font-sans font-bold tracking-widest rounded-sm"
          >
            RFP
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`transition-colors duration-300 focus:outline-none ${menuIconColor}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden fixed inset-0 top-[60px] z-40 transition-all duration-500 ${
          theme === "light"
            ? "bg-stone-50/98 backdrop-blur-lg border-t border-stone-200/80 shadow-xl"
            : "bg-charcoal-950/98 backdrop-blur-lg border-t border-white/5"
        }`}>
          <nav className="h-full flex flex-col justify-between px-8 py-12">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-xl font-serif hover:text-bronze transition-all duration-300 block w-full text-left ${
                      theme === "light" ? "text-charcoal-900" : "text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="space-y-6 pb-20">
              <div className={`h-[1px] w-full ${theme === "light" ? "bg-stone-200" : "bg-white/10"}`}></div>
              <p className={`text-xs font-sans tracking-wide leading-relaxed ${
                theme === "light" ? "text-charcoal-500" : "text-charcoal-400"
              }`}>
                A regional standard of technical scholarship & permanent civic scale.
              </p>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onSubmitRFPClick();
                }}
                className="w-full py-4 bg-bronze hover:bg-bronze-dark text-white font-sans font-bold tracking-[0.2em] text-xs flex items-center justify-center space-x-3 transition-all duration-300 rounded-sm cursor-pointer"
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
