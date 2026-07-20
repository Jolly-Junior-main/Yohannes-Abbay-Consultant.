/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { X, Calendar, MapPin, Layers, Award, FileText, CheckCircle, Info, ArrowRight } from "lucide-react";
import { Project, Insight } from "../types";

interface ProjectDetailModalProps {
  project: Project | null;
  insight: Insight | null;
  onClose: () => void;
  onConsultProject: (category: string) => void;
}

export default function ProjectDetailModal({
  project,
  insight,
  onClose,
  onConsultProject
}: ProjectDetailModalProps) {
  if (!project && !insight) return null;

  const isProject = !!project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
      {/* Immersive backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Main Container */}
      <div className="relative w-full max-w-5xl bg-charcoal-950 border border-white/10 rounded-sm shadow-2xl z-10 flex flex-col max-h-[90vh] overflow-hidden animate-scale-in">
        
        {/* Header bar */}
        <div className="p-5 md:p-6 border-b border-white/5 flex items-center justify-between bg-charcoal-900 sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-bronze animate-pulse"></span>
            <span className="text-[10px] font-mono tracking-[0.25em] text-charcoal-400 uppercase font-semibold">
              {isProject ? "YACAE Flagship Case Study" : "Technical Thought Leadership Paper"}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-charcoal-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-6 md:p-10 space-y-8">
          {isProject && project ? (
            /* PROJECT DISPLAY */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Side: Images & Interactive Vector blueprint schematic */}
              <div className="lg:col-span-6 space-y-6">
                <div className="relative overflow-hidden aspect-[16/10] bg-charcoal-900 border border-white/5 rounded-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Interactive Vector Blueprint Sketch (Stunning UI element!) */}
                <div className="bg-charcoal-900 border border-white/5 rounded-sm p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-[10px] font-mono tracking-widest text-bronze uppercase font-bold flex items-center space-x-2">
                      <Layers size={12} />
                      <span>SCHEMATIC WIREFRAME BLUEPRINT</span>
                    </span>
                    <span className="text-[9px] font-mono text-charcoal-400">SCALE: 1 : 450</span>
                  </div>

                  {/* Beautiful SVG blueprint */}
                  <div className="relative aspect-[16/9] border border-dashed border-bronze/20 rounded-sm bg-charcoal-950 flex items-center justify-center overflow-hidden">
                    <svg
                      viewBox="0 0 320 180"
                      className="w-full h-full text-bronze/30 font-mono text-[6px]"
                    >
                      {/* Grid lines */}
                      <g className="stroke-bronze/10 stroke-[0.25]">
                        <line x1="0" y1="30" x2="320" y2="30" />
                        <line x1="0" y1="60" x2="320" y2="60" />
                        <line x1="0" y1="90" x2="320" y2="90" />
                        <line x1="0" y1="120" x2="320" y2="120" />
                        <line x1="0" y1="150" x2="320" y2="150" />
                        <line x1="40" y1="0" x2="40" y2="180" />
                        <line x1="80" y1="0" x2="80" y2="180" />
                        <line x1="120" y1="0" x2="120" y2="180" />
                        <line x1="160" y1="0" x2="160" y2="180" />
                        <line x1="200" y1="0" x2="200" y2="180" />
                        <line x1="240" y1="0" x2="240" y2="180" />
                        <line x1="280" y1="0" x2="280" y2="180" />
                      </g>

                      {/* Schematic drawings depending on project */}
                      {project.id === "civic-center" ? (
                        <g className="stroke-bronze stroke-[0.75] fill-none">
                          {/* Low assembly curves */}
                          <path d="M 60 140 Q 160 30 260 140" className="stroke-bronze" />
                          <path d="M 80 140 Q 160 50 240 140" className="stroke-bronze/40" />
                          <line x1="60" y1="140" x2="260" y2="140" className="stroke-bronze/50" />
                          
                          {/* Structural columns */}
                          <line x1="100" y1="140" x2="100" y2="92" className="stroke-dashed stroke-[0.4]" />
                          <line x1="130" y1="140" x2="130" y2="70" className="stroke-dashed stroke-[0.4]" />
                          <line x1="160" y1="140" x2="160" y2="62" className="stroke-dashed stroke-[0.4]" />
                          <line x1="190" y1="140" x2="190" y2="70" className="stroke-dashed stroke-[0.4]" />
                          <line x1="220" y1="140" x2="220" y2="92" className="stroke-dashed stroke-[0.4]" />

                          {/* Sun ray arrows */}
                          <path d="M 40 40 L 90 80" className="stroke-bronze-light/50 stroke-[0.5]" />
                          <polygon points="90,80 84,78 88,74" className="fill-bronze-light" />

                          {/* Technical texts */}
                          <text x="165" y="55" className="fill-bronze font-bold">PARAMETRIC ROOF CANOPY</text>
                          <text x="45" y="32" className="fill-bronze-light font-bold">WINTER SOLSTICE ANGLES</text>
                          <text x="110" y="155" className="fill-white/60">RAINWATER RETENTION BIO-POND</text>
                        </g>
                      ) : project.id === "cbe-heights" ? (
                        <g className="stroke-bronze stroke-[0.75] fill-none">
                          {/* Obelisk tall building */}
                          <polygon points="120,160 140,20 180,20 200,160" className="stroke-bronze" />
                          <line x1="140" y1="20" x2="140" y2="160" className="stroke-bronze/30" />
                          <line x1="180" y1="20" x2="180" y2="160" className="stroke-bronze/30" />
                          <line x1="160" y1="20" x2="160" y2="160" className="stroke-dashed stroke-bronze/40" />

                          {/* Floors lines */}
                          {Array.from({ length: 14 }).map((_, idx) => (
                            <line
                              key={idx}
                              x1={120 + idx * 1.4}
                              y1={20 + idx * 10}
                              x2={200 - idx * 1.4}
                              y2={20 + idx * 10}
                              className="stroke-bronze/15"
                            />
                          ))}

                          {/* Aerodynamic top taper */}
                          <ellipse cx="160" cy="20" rx="20" ry="5" className="stroke-bronze" />

                          {/* Wind shear vector curves */}
                          <path d="M 40 50 Q 110 50 145 35" className="stroke-bronze-light/40 stroke-[0.5]" />
                          <path d="M 40 90 Q 110 90 150 82" className="stroke-bronze-light/40 stroke-[0.5]" />
                          <path d="M 280 120 Q 210 120 185 110" className="stroke-bronze-light/40 stroke-[0.5]" />

                          {/* Technical texts */}
                          <text x="210" y="40" className="fill-bronze font-bold">AERODYNAMIC APEX VENT</text>
                          <text x="35" y="110" className="fill-white/60">DOUBLE-SKIN ACTIVE ENVELOPE</text>
                          <text x="210" y="155" className="fill-bronze">SEISMIC SHEAR FOOTINGS</text>
                        </g>
                      ) : (
                        <g className="stroke-bronze stroke-[0.75] fill-none">
                          {/* Museum interlocking structures */}
                          <polygon points="40,140 100,50 160,140" className="stroke-bronze" />
                          <polygon points="120,140 180,40 240,140" className="stroke-bronze/60" />
                          <polygon points="200,140 250,70 280,140" className="stroke-bronze/30" />

                          {/* Skylight ray */}
                          <line x1="100" y1="50" x2="100" y2="140" className="stroke-dashed stroke-bronze/40" />
                          <line x1="180" y1="40" x2="180" y2="140" className="stroke-dashed stroke-bronze/40" />

                          {/* Geological tectonic cracks referencing East Africa */}
                          <path d="M 30 160 L 100 160 L 180 150 L 290 152" className="stroke-bronze" />

                          {/* Technical texts */}
                          <text x="50" y="35" className="fill-bronze font-bold">PARAMETRIC SKYLIGHTS</text>
                          <text x="185" y="32" className="fill-bronze-light">RIFT VALLEY SYNTHESIS FORM</text>
                          <text x="110" y="170" className="fill-white/60">GEOTHERMAL COOLING CHANNELS</text>
                        </g>
                      )}
                    </svg>
                  </div>
                  <p className="text-[11px] font-mono text-charcoal-400 text-center leading-relaxed">
                    Interactive structural algorithm vectors verified by Yohannes Abbay consulting teams.
                  </p>
                </div>
              </div>

              {/* Right Side: Descriptions, Highlights & Specs */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono tracking-widest text-bronze uppercase">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-sans font-semibold tracking-[0.1em] text-charcoal-400 uppercase">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm md:text-base font-sans font-light text-charcoal-200 leading-relaxed">
                  {project.description}
                </p>

                {/* Specs Table */}
                <div className="border-t border-b border-white/5 py-4 space-y-3">
                  <h4 className="text-xs font-mono tracking-wider text-bronze uppercase font-bold">
                    SPECIFICATIONS DETAILS
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                    {project.specs.map((spec, index) => (
                      <div key={index} className="flex justify-between border-b border-white/5 pb-1 pr-4">
                        <span className="text-charcoal-400">{spec.label}:</span>
                        <span className="text-white font-medium">{spec.value}</span>
                      </div>
                    ))}
                    <div className="flex justify-between border-b border-white/5 pb-1 pr-4">
                      <span className="text-charcoal-400">Location:</span>
                      <span className="text-white font-medium">{project.location}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1 pr-4">
                      <span className="text-charcoal-400">Scale Scope:</span>
                      <span className="text-white font-medium">{project.scale}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono tracking-wider text-bronze uppercase font-bold">
                    STRUCTURAL & ENVIRONMENTAL MILESTONES
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-3 text-xs font-sans font-light text-charcoal-300 leading-relaxed">
                        <CheckCircle size={14} className="text-bronze shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Consult Project trigger */}
                <div className="pt-4">
                  <button
                    onClick={() => {
                      onClose();
                      onConsultProject(project.category);
                    }}
                    className="w-full py-4 bg-bronze hover:bg-bronze-dark text-white font-sans font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center space-x-3 transition-colors rounded-sm cursor-pointer"
                  >
                    <span>CONSULT ON {project.category.toUpperCase()}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

              </div>

            </div>
          ) : (
            /* INSIGHT / ESSAY DISPLAY */
            insight && (
              <div className="max-w-3xl mx-auto space-y-8">
                
                {/* Meta details */}
                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center space-x-2 text-xs font-mono text-bronze uppercase tracking-widest">
                    <span>{insight.category} PAPER</span>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-5xl text-white font-medium tracking-tight max-w-2xl mx-auto leading-tight">
                    {insight.title}
                  </h3>
                  <div className="pt-2 flex items-center justify-center space-x-4">
                    <div className="text-xs font-sans text-charcoal-400">
                      Published on <span className="text-white">{insight.date}</span>
                    </div>
                    <span className="text-white/20">•</span>
                    <div className="text-xs font-sans text-charcoal-400">
                      Authored by <span className="text-bronze font-medium">{insight.author}</span>
                    </div>
                  </div>
                </div>

                {/* Article Header Image */}
                <div className="relative aspect-[21/9] bg-charcoal-900 border border-white/5 rounded-sm overflow-hidden select-none">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover grayscale brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 to-transparent"></div>
                </div>

                {/* Article Content / Paragraphs */}
                <div className="space-y-6 text-sm md:text-base font-sans font-light text-charcoal-200 leading-relaxed">
                  <p className="font-serif text-lg md:text-xl italic text-white/90 border-l-2 border-bronze pl-6 py-1 leading-relaxed max-w-2xl mx-auto">
                    "{insight.summary}"
                  </p>
                  
                  {insight.content.map((paragraph, index) => (
                    <p key={index} className="max-w-2xl mx-auto">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Citation Callout Box */}
                <div className="max-w-2xl mx-auto bg-charcoal-900 border border-white/5 rounded-sm p-6 space-y-2 text-xs font-mono">
                  <div className="text-bronze uppercase tracking-wider font-bold">
                    OFFICIAL SCHOLARLY INDEX CITATION:
                  </div>
                  <p className="text-charcoal-400 leading-relaxed">
                    Abbay, Y., Tekle, A., & Kebede, H. (2026). "Subtropical Carbon-Negative Concrete and Wind Shearing Dynamics in Central High-Altitude Basins." <em>East African Journal of Architectural Engineering & Scholarship</em>, Vol 14, pp. 112–134. Addis Ababa, Ethiopia.
                  </p>
                </div>

                {/* Consultation Deep-link */}
                <div className="max-w-2xl mx-auto pt-6 text-center border-t border-white/5">
                  <p className="text-sm font-sans text-charcoal-400 mb-4">
                    Interested in applying these engineering breakthrough blueprints to your commercial commission?
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onConsultProject("High-Rise & Corporate");
                    }}
                    className="px-6 py-3 border border-bronze text-bronze hover:bg-bronze hover:text-white font-sans font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-sm inline-flex items-center space-x-2 cursor-pointer"
                  >
                    <span>INITIATE RESEARCH-GROUNDED COMMISSIONS</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
