/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Landmark, ShieldAlert, Cpu, Settings, Trees, Building2, Wind, Eye } from "lucide-react";

export default function Expertise() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const expertises = [
    {
      icon: Building2,
      title: "Monolithic Structural High-Rises",
      desc: "Engineering towering obelisks and corporate skyscrapers with active-breathing double skin facades, seismically isolated foundations, and optimized building envelopes.",
      tag: "COMPLEX TALL BUILDING DESIGN"
    },
    {
      icon: Wind,
      title: "Micro-Climate Thermal Adaptation",
      desc: "Replacing expensive high-load mechanical HVAC systems with passive thermal mass, parametric louvers, and subterranean geothermal ventilation loops tailored for high altitudes.",
      tag: "SUSTAINABILITY SYSTEM DESIGN"
    },
    {
      icon: Landmark,
      title: "Institutional Civic Landmarks",
      desc: "Designing monumental legislative structures, cultural centers, and municipal assembly spaces that reference traditional stone-carving craftsmanship using local Rift Valley aggregates.",
      tag: "CIVIC & CULTURAL MONUMENTS"
    },
    {
      icon: Trees,
      title: "Resilient Sponge-City Master Plans",
      desc: "Zoning porous pedestrian-first green corridors, urban rain garden assemblies, and infrastructure that adapts gracefully to seasonal subtropical municipal downpours.",
      tag: "URBAN DESIGN & MASTER PLANNING"
    }
  ];

  return (
    <section id="expertise-cards" className="py-24 bg-charcoal-900 border-t border-white/5 relative overflow-hidden">
      {/* Structural horizontal blueprint markings */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="text-xs font-mono tracking-[0.3em] text-bronze uppercase font-semibold mb-3">
            METHODOLOGY DEPTH
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-medium tracking-tight">
            Consulting Disciplines
          </h2>
          <p className="mt-4 text-sm md:text-base font-sans font-light text-charcoal-400 leading-relaxed">
            From seismic soil-structure interaction analysis to parametric daylight optimization, we coordinate architectural art with deep structural engineering scholarship.
          </p>
        </div>

        {/* 2x2 Clean Bento-Style Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertises.map((exp, index) => {
            const Icon = exp.icon;
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-charcoal-950 border border-white/5 rounded-sm p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-bronze/40 min-h-[280px]"
              >
                {/* Subtle blueprint pattern background revealed on hover */}
                <div
                  className={`absolute inset-0 bg-[radial-gradient(#a37c54_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none transition-opacity duration-700 ${
                    isHovered ? "opacity-3" : "opacity-0"
                  }`}
                ></div>

                {/* Top Metas */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-sm bg-charcoal-900 border border-white/10 flex items-center justify-center text-bronze group-hover:text-white group-hover:border-bronze transition-colors duration-500">
                      <Icon size={22} />
                    </div>
                    <span className="text-[9px] font-mono tracking-[0.2em] text-charcoal-400 group-hover:text-bronze transition-colors">
                      {exp.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-white font-medium tracking-tight mt-4 group-hover:text-bronze transition-colors">
                    {exp.title}
                  </h3>
                  
                  <p className="text-sm font-sans font-light text-charcoal-400 leading-relaxed group-hover:text-charcoal-200 transition-colors">
                    {exp.desc}
                  </p>
                </div>

                {/* Bottom interactive border/decor */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-mono text-charcoal-400 uppercase tracking-widest group-hover:text-white transition-colors">
                    Active commissions
                  </span>
                  <div className="w-1.5 h-1.5 bg-bronze rounded-full group-hover:scale-150 transition-transform"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
