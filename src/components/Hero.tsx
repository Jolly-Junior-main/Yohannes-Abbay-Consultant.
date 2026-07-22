/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowDown, CornerDownRight } from "lucide-react";
import heroBuildingImg from "../assets/images/yacae_hero_building_1784558352200.jpg";

interface HeroProps {
  theme?: "light" | "dark";
  onScrollToExplore: () => void;
  onSubmitRFPClick: () => void;
}

export default function Hero({ theme, onScrollToExplore, onSubmitRFPClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal-950"
    >
      {/* Immersive Background Image with Parallax & Dark Gradients */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={heroBuildingImg}
          alt="CBE Heights Skyscrapers"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 saturate-75 opacity-60 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Multi-layered dark architectural gradients to build deep cinematic contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-charcoal-950/75 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-transparent to-charcoal-950/20 z-10" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center h-full pt-16">
        <div className="max-w-4xl text-left">
          {/* Subtle tag */}
          <div className="flex items-center space-x-3 mb-6 md:mb-8 animate-fade-in">
            <span className="w-8 h-[1px] bg-bronze"></span>
            <span className="text-[11px] md:text-xs font-mono tracking-[0.3em] text-bronze uppercase font-semibold">
              Yohannes Abbay Consulting Architects & Engineers
            </span>
          </div>

          {/* Refined bold serif statement */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.08] text-shadow-md">
            THE FUTURE <br />
            ISN'T HAPPENING <br />
            <span className="text-bronze">TO US;</span> WE ARE <br />
            ITS DESIGNERS.
          </h1>

          {/* Supportive paragraph outlining authority & scale */}
          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <p className="md:col-span-8 text-sm md:text-base font-sans font-light tracking-wide text-charcoal-200 leading-relaxed max-w-xl">
              An architectural legacy built on technical precision, structural permanence, and bold Master Plans in East Africa. We design civic landmarks and resilient cityscapes that define the future of Addis Ababa.
            </p>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-4">
              <button
                onClick={onSubmitRFPClick}
                className="group flex items-center justify-between px-6 py-4 bg-transparent border border-bronze hover:bg-bronze hover:border-bronze text-white transition-all duration-500 rounded-sm w-full cursor-pointer"
              >
                <span className="text-xs font-sans font-bold tracking-[0.2em]">INITIATE RFP</span>
                <CornerDownRight size={16} className="text-bronze group-hover:text-white transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator & Scroll to Explore */}
      <div 
        onClick={onScrollToExplore}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] text-charcoal-400 group-hover:text-bronze transition-colors duration-300 uppercase mb-3">
          Scroll to Explore
        </span>
        <div className="w-6 h-10 border border-charcoal-600 rounded-full flex justify-center p-1 group-hover:border-bronze transition-colors duration-300">
          <div className="w-1.5 h-1.5 bg-bronze rounded-full animate-bounce mt-1"></div>
        </div>
      </div>

      {/* Accent corner lines to emulate blueprints and high-end technical drafting */}
      <div className="absolute top-24 left-12 w-6 h-6 border-t border-l border-white/10 hidden lg:block"></div>
      <div className="absolute top-24 right-12 w-6 h-6 border-t border-r border-white/10 hidden lg:block"></div>
      <div className="absolute bottom-24 left-12 w-6 h-6 border-b border-l border-white/10 hidden lg:block"></div>
      <div className="absolute bottom-24 right-12 w-6 h-6 border-b border-r border-white/10 hidden lg:block"></div>
    </section>
  );
}
