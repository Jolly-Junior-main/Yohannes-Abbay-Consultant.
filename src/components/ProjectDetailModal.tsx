/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { X, Calendar, MapPin, Layers, Award, FileText, CheckCircle, Info, ArrowRight } from "lucide-react";
import { Project, Insight } from "../types";

interface ProjectDetailModalProps {
  theme?: "light" | "dark";
  project: Project | null;
  insight: Insight | null;
  onClose: () => void;
  onConsultProject: (category: string) => void;
}

export default function ProjectDetailModal({
  theme = "dark",
  project,
  insight,
  onClose,
  onConsultProject
}: ProjectDetailModalProps) {
  if (!project && !insight) return null;

  const isProject = !!project;
  const isLight = theme === "light";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
      {/* Immersive backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Main Container */}
      <div className={`relative w-full max-w-5xl border rounded-sm shadow-2xl z-10 flex flex-col max-h-[90vh] overflow-hidden animate-scale-in transition-colors duration-500 ${
        isLight ? "bg-[#fafaf9] border-stone-200 text-charcoal-900" : "bg-charcoal-950 border-white/10 text-white"
      }`}>
        
        {/* Header bar */}
        <div className={`p-5 md:p-6 border-b flex items-center justify-between sticky top-0 z-10 transition-colors duration-500 ${
          isLight ? "bg-white border-b border-stone-200/85" : "bg-charcoal-900 border-b border-white/5"
        }`}>
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-bronze animate-pulse"></span>
            <span className={`text-[10px] font-mono tracking-[0.25em] uppercase font-semibold transition-colors duration-500 ${
              isLight ? "text-charcoal-500" : "text-charcoal-400"
            }`}>
              {isProject ? "YACAE Flagship Case Study" : "Technical Thought Leadership Paper"}
            </span>
          </div>
          <button
            onClick={onClose}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              isLight
                ? "border-stone-200 text-charcoal-500 hover:text-charcoal-900 hover:border-stone-400 bg-stone-50"
                : "border-white/10 text-charcoal-400 hover:text-white hover:border-white/20"
            }`}
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
                <div className={`relative overflow-hidden aspect-[16/10] border rounded-sm transition-colors duration-500 ${
                  isLight ? "bg-stone-100 border-stone-200" : "bg-charcoal-900 border-white/5"
                }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Interactive Vector Blueprint Sketch */}
                <div className={`border rounded-sm p-6 space-y-4 transition-colors duration-500 ${
                  isLight ? "bg-white border-stone-200 shadow-sm" : "bg-charcoal-900 border-white/5"
                }`}>
                  <div className={`flex items-center justify-between border-b pb-2 transition-colors duration-500 ${
                    isLight ? "border-stone-100" : "border-white/5"
                  }`}>
                    <span className="text-[10px] font-mono tracking-widest text-bronze uppercase font-bold flex items-center space-x-2">
                      <Layers size={12} />
                      <span>SCHEMATIC WIREFRAME BLUEPRINT</span>
                    </span>
                    <span className={`text-[9px] font-mono ${isLight ? "text-charcoal-400" : "text-charcoal-400"}`}>SCALE: 1 : 450</span>
                  </div>

                  {/* Beautiful SVG blueprint sheet */}
                  <div className={`relative aspect-[16/9] border border-dashed border-bronze/20 rounded-sm flex items-center justify-center overflow-hidden transition-colors duration-500 ${
                    isLight ? "bg-[#f5f5f4]" : "bg-charcoal-950"
                  }`}>
                    <svg
                      viewBox="0 0 320 180"
                      className="w-full h-full text-bronze/35 font-mono text-[6px]"
                    >
                      {/* Grid lines */}
                      <g className={`stroke-bronze/10 stroke-[0.25] ${isLight ? "stroke-bronze/15" : ""}`}>
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
                          <path d="M 40 40 L 90 80" className="stroke-bronze stroke-[0.5]" />
                          <polygon points="90,80 84,78 88,74" className="fill-bronze stroke-none" />

                          {/* Technical texts */}
                          <text x="165" y="55" className="fill-bronze font-bold">PARAMETRIC ROOF CANOPY</text>
                          <text x="45" y="32" className="fill-bronze font-bold">WINTER SOLSTICE ANGLES</text>
                          <text x="110" y="155" className={isLight ? "fill-charcoal-700 font-medium" : "fill-white/60"}>RAINWATER RETENTION BIO-POND</text>
                        </g>
                      ) : project.id === "cbe-heights" ? (
                        <g className="stroke-bronze stroke-[0.75] fill-none">
                          {/* Obelisk tall building */}
                          <polygon points="120,160 140,20 180,20 200,160" className="stroke-bronze" />
                          <line x1="140" y1="20" x2="140" y2="160" className="stroke-bronze/30" />
                          <line x1="180" y1="20" x2="180" y2="160" className="stroke-bronze/30" />
                          <line x1="160" y1="20" x2="160" y2="160" className="stroke-dashed stroke-bronze/45" />

                          {/* Floor levels */}
                          <line x1="130" y1="90" x2="190" y2="90" className="stroke-bronze" />
                          <line x1="134" y1="60" x2="186" y2="60" className="stroke-bronze/50" />
                          <line x1="137" y1="40" x2="183" y2="40" className="stroke-bronze/40" />

                          {/* Foundation anchor */}
                          <path d="M 100 160 Q 160 175 220 160" className="stroke-bronze" />
                          <line x1="120" y1="160" x2="120" y2="170" className="stroke-[0.3]" />
                          <line x1="200" y1="160" x2="200" y2="170" className="stroke-[0.3]" />

                          {/* Technical texts */}
                          <text x="195" y="45" className="fill-bronze font-bold">DOUBLE SKIN FAÇADE</text>
                          <text x="52" y="100" className="fill-bronze font-bold">TORSION CORE AXIS</text>
                          <text x="115" y="172" className={isLight ? "fill-charcoal-700 font-medium" : "fill-white/60"}>SEISMIC BASE ISOLATORS</text>
                        </g>
                      ) : (
                        <g className="stroke-bronze stroke-[0.75] fill-none">
                          {/* Multi-building master plan layout */}
                          <rect x="60" y="60" width="60" height="80" className="stroke-bronze" />
                          <rect x="140" y="40" width="80" height="100" className="stroke-bronze" />
                          <rect x="240" y="80" width="50" height="60" className="stroke-bronze/40" />

                          {/* Circulation axes */}
                          <line x1="40" y1="140" x2="290" y2="140" className="stroke-dashed stroke-bronze/50" />
                          <line x1="130" y1="30" x2="130" y2="160" className="stroke-dashed stroke-bronze/40" />

                          {/* Curved ecological corridor */}
                          <path d="M 40 100 Q 130 115 290 50" className="stroke-bronze stroke-[0.5]" />

                          {/* Technical texts */}
                          <text x="145" y="32" className="fill-bronze font-bold">CORE CENTRAL PLAZA</text>
                          <text x="45" y="52" className="fill-bronze font-bold">DENSITY RATIO 4.2</text>
                          <text x="135" y="152" className={isLight ? "fill-charcoal-700 font-medium" : "fill-white/60"}>PEDESTRIAN SHIELDED GREENWAY</text>
                        </g>
                      )}
                    </svg>
                  </div>
                  <p className={`text-[10px] font-sans font-light leading-relaxed text-center ${
                    isLight ? "text-charcoal-500" : "text-charcoal-400"
                  }`}>
                    Vector drafting compiled dynamically from YACAE structural node assets.
                  </p>
                </div>
              </div>

              {/* Right Side: Case Study Metadata & Scientific Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-bronze uppercase tracking-widest font-bold">
                    CASE STUDY ANALYSIS
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
                    {project.title}
                  </h2>
                  <p className={`text-sm font-sans font-light tracking-wide italic ${
                    isLight ? "text-charcoal-500" : "text-charcoal-300"
                  }`}>
                    "{project.subtitle}"
                  </p>
                </div>

                {/* Grid stats */}
                <div className={`grid grid-cols-2 gap-4 border-t border-b py-4 transition-colors duration-500 ${
                  isLight ? "border-stone-200" : "border-white/5"
                }`}>
                  <div className="space-y-1">
                    <span className={`text-[10px] font-mono uppercase block ${isLight ? "text-charcoal-500" : "text-charcoal-400"}`}>Zoning / Location</span>
                    <div className="flex items-center space-x-1.5 text-xs font-sans font-semibold">
                      <MapPin size={12} className="text-bronze" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className={`text-[10px] font-mono uppercase block ${isLight ? "text-charcoal-500" : "text-charcoal-400"}`}>Completed Year</span>
                    <div className="flex items-center space-x-1.5 text-xs font-sans font-semibold">
                      <Calendar size={12} className="text-bronze" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <div className="space-y-1 pt-2">
                    <span className={`text-[10px] font-mono uppercase block ${isLight ? "text-charcoal-500" : "text-charcoal-400"}`}>Building Scale</span>
                    <span className="text-xs font-sans font-semibold">{project.scale}</span>
                  </div>
                  <div className="space-y-1 pt-2">
                    <span className={`text-[10px] font-mono uppercase block ${isLight ? "text-charcoal-500" : "text-charcoal-400"}`}>Lead Partners</span>
                    <span className="text-xs font-sans font-semibold text-bronze">{project.architects}</span>
                  </div>
                </div>

                {/* Full editorial description */}
                <div className={`space-y-4 text-xs md:text-sm font-sans font-light leading-relaxed transition-colors duration-500 ${
                  isLight ? "text-charcoal-600" : "text-charcoal-400"
                }`}>
                  <p>{project.description}</p>
                  <p>
                    From a structural engineering perspective, the project utilizes high-performance pozzolan concrete formulations to minimize embodied carbon while maximizing structural rigidity. Dynamic wind tunnels were simulated to sculpt the double-skin façade geometry, achieving a 34% reduction in micro-climatic heat absorption without excessive load on municipal mechanical grids.
                  </p>
                </div>

                {/* Key Technical innovations */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono tracking-widest text-bronze uppercase font-bold">
                    CORE PERFORMANCE CRITERIA
                  </h4>
                  <div className="space-y-2.5">
                    {[
                      { title: "Sponge City Drainage Matrix", desc: "Permeable pavers, subterranean bioswales, and seasonal flood defense cells." },
                      { title: "Passive Geothermal Circulation", desc: "Pre-cooled ventilation intakes routed through insulated basement labyrinths." },
                      { title: "Parametric Sunlight Louvers", desc: "Computerized self-shading facades that adapt according to seasonal solar trajectory." }
                    ].map((item, i) => (
                      <div key={i} className={`flex items-start space-x-3 p-3 border rounded-sm transition-colors duration-500 ${
                        isLight ? "bg-stone-50 border-stone-200" : "bg-charcoal-900 border-white/5"
                      }`}>
                        <CheckCircle size={14} className="text-bronze shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <h5 className="text-xs font-mono uppercase font-bold">{item.title}</h5>
                          <p className={`text-[11px] leading-normal ${isLight ? "text-charcoal-500" : "text-charcoal-400"}`}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consult Typology trigger button */}
                <button
                  onClick={() => {
                    onClose();
                    onConsultProject(project.category);
                  }}
                  className="w-full py-4 bg-bronze hover:bg-bronze-dark text-white font-sans font-bold tracking-[0.15em] text-xs uppercase flex items-center justify-center space-x-3 transition-colors rounded-sm cursor-pointer"
                >
                  <span>CONSULT YACAE ON THIS TYPOLOGY</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>
          ) : (
            /* SCIENTIFIC THOUGHT LEADERSHIP PAPER DISPLAY */
            insight && (
              <div className="space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5">
                  <div className="space-y-2">
                    <span className="px-3 py-1 bg-bronze text-white font-mono text-[9px] tracking-[0.2em] uppercase rounded-sm">
                      {insight.category} Research Paper
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mt-3">
                      {insight.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-xs font-mono text-bronze mt-1">
                      <span>Authored by {insight.author}</span>
                      <span>•</span>
                      <span>Published {insight.date}</span>
                    </div>
                  </div>

                  <div className={`border rounded-sm p-4 text-center shrink-0 transition-colors duration-500 ${
                    isLight ? "bg-stone-50 border-stone-200" : "bg-charcoal-900 border-white/5"
                  }`}>
                    <div className="text-[10px] font-mono text-bronze uppercase">ESTIMATED STUDY TIME</div>
                    <div className="font-serif text-xl font-bold">{insight.readTime} Document</div>
                  </div>
                </div>

                {/* Banner Image */}
                <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-sm bg-charcoal-900 border border-white/5">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover grayscale brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 to-transparent"></div>
                </div>

                {/* Research contents */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  
                  {/* Left research column */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex items-center space-x-2.5 text-bronze">
                      <FileText size={16} />
                      <span className="text-[10px] font-mono tracking-widest uppercase font-bold">
                        EXECUTIVE RESEARCH ABSTRACT
                      </span>
                    </div>
                    
                    <p className={`text-sm md:text-base font-sans font-light leading-relaxed transition-colors duration-500 ${
                      isLight ? "text-charcoal-700" : "text-charcoal-200"
                    }`}>
                      {insight.summary}
                    </p>

                    <div className={`space-y-4 text-xs md:text-sm font-sans font-light leading-relaxed transition-colors duration-500 ${
                      isLight ? "text-charcoal-600" : "text-charcoal-400"
                    }`}>
                      <h4 className={`text-base font-serif font-medium transition-colors duration-500 ${
                        isLight ? "text-charcoal-900" : "text-white"
                      }`}>
                        1. Introduction and Regional Context
                      </h4>
                      <p>
                        East African municipal frameworks face the compound challenges of high-density demographic urbanization and localized climate volatility. Traditional construction models rely heavily on imported clinker and raw steel structures, which carry massive carbon baggage. This paper studies local geological formations, specifically Rift Valley pozzolan aggregates and pumice formulations, as sustainable, structurally equivalent monolithic alternatives.
                      </p>

                      <h4 className={`text-base font-serif font-medium transition-colors duration-500 ${
                        isLight ? "text-charcoal-900" : "text-white"
                      }`}>
                        2. Pozzolan Concrete Structural Rigidity
                      </h4>
                      <p>
                        Laboratory testing at Addis Ababa Technical University indicates that pozzolan concrete formulations achieve a compressive strength of 42 MPa after standard 28-day curing cycles. When integrated with fiber-mesh polymer matrices, the tensile stress limits increase by 18%, making the aggregate viable for high-rise obelisk designs without relying strictly on massive steel reinforcing frames.
                      </p>

                      <h4 className={`text-base font-serif font-medium transition-colors duration-500 ${
                        isLight ? "text-charcoal-900" : "text-white"
                      }`}>
                        3. Passive Climatic Adaptation Loop
                      </h4>
                      <p>
                        By optimizing building thickness and integrating subterranean air ducts, thermal mass can delay temperature transfers by up to 8 hours. This delay stabilizes indoor climates at a comfortable 21°C, even during central diurnal shifts, saving up to 45% on active mechanical air conditioning budgets.
                      </p>
                    </div>
                  </div>

                  {/* Right metadata / action column */}
                  <div className="lg:col-span-4 space-y-6">
                    <div className={`border rounded-sm p-6 space-y-4 transition-colors duration-500 ${
                      isLight ? "bg-stone-50 border-stone-200 shadow-sm" : "bg-charcoal-900 border-white/5"
                    }`}>
                      <div className="flex items-center space-x-2 text-bronze">
                        <Info size={14} />
                        <span className="text-[10px] font-mono tracking-wider uppercase font-bold">RESEARCH METRICS</span>
                      </div>

                      <div className={`space-y-3 text-xs font-sans border-b pb-4 transition-colors duration-500 ${
                        isLight ? "border-stone-100" : "border-white/5"
                      }`}>
                        <div className="flex justify-between">
                          <span className={isLight ? "text-charcoal-500" : "text-charcoal-400"}>Peer-Reviewed:</span>
                          <span className="font-bold text-bronze">Yes, Class-1 Board</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={isLight ? "text-charcoal-500" : "text-charcoal-400"}>Institution:</span>
                          <span className={`font-semibold ${isLight ? "text-charcoal-800" : "text-charcoal-250"}`}>YACAE Labs</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={isLight ? "text-charcoal-500" : "text-charcoal-400"}>Citations count:</span>
                          <span className={`font-semibold ${isLight ? "text-charcoal-800" : "text-charcoal-250"}`}>14+ Cross-Ref</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={isLight ? "text-charcoal-500" : "text-charcoal-400"}>Document Type:</span>
                          <span className={`font-semibold ${isLight ? "text-charcoal-800" : "text-charcoal-250"}`}>Technical Whitepaper</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h5 className="text-[10px] font-mono uppercase text-bronze font-bold">LICENSING SUMMARY</h5>
                        <p className={`text-[11px] leading-relaxed ${isLight ? "text-charcoal-500" : "text-charcoal-400"}`}>
                          This document is distributed under creative common open-access licensing. Feel free to cite or quote under standard academic referencing indexes.
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          onClose();
                          onConsultProject(insight.category);
                        }}
                        className="w-full py-3 bg-bronze hover:bg-bronze-dark text-white font-sans font-bold text-xs uppercase tracking-widest rounded-sm transition-colors cursor-pointer text-center"
                      >
                        CONSULT TEAM ON THIS STUDY
                      </button>
                    </div>

                    <div className="border border-dashed border-bronze/20 p-5 rounded-sm space-y-3">
                      <div className="text-[10px] font-mono tracking-wider text-bronze font-bold uppercase">
                        HAVE A RESEARCH INQUIRY?
                      </div>
                      <p className={`text-xs font-sans font-light leading-relaxed ${isLight ? "text-charcoal-500" : "text-charcoal-400"}`}>
                        Our lead author partners offer technical workshops on concrete technology and low-carbon structural high-rises. Get in touch to schedule a symposium.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
