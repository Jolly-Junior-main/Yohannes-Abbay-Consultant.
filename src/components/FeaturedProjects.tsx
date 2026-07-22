/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { projectsData } from "../data/projectData";
import { Project } from "../types";

// Helper function to resolve asset paths relative to Vite BASE_URL for robust GitHub / Subdirectory deployments
export const getAssetPath = (path: string): string => {
  if (!path) return "";
  if (
    path.startsWith("http") ||
    path.startsWith("data:") ||
    path.startsWith("blob:") ||
    path.startsWith("/src/") ||
    path.startsWith("/assets/") ||
    path.startsWith("./assets/")
  ) {
    return path;
  }
  if (path.startsWith("/")) {
    const base = (import.meta as any).env?.BASE_URL || "/";
    const cleanBase = base.endsWith("/") ? base : `${base}/`;
    return `${cleanBase}${path.substring(1)}`;
  }
  return path;
};

interface FeaturedProjectsProps {
  theme?: "light" | "dark";
  onProjectClick: (project: Project) => void;
}

export default function FeaturedProjects({ theme = "dark", onProjectClick }: FeaturedProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Dynamically extract categories to ensure newly added projects' categories are filterable
  const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const isLight = theme === "light";

  return (
    <section
      id="projects"
      className={`py-24 transition-colors duration-500 relative ${
        isLight ? "bg-white border-t border-stone-200" : "bg-charcoal-950 border-t border-white/5"
      }`}
    >
      {/* Background Decorative Grid Lines (Architecture drafting board aesthetic) */}
      <div className={`absolute inset-0 pointer-events-none opacity-5 ${isLight ? "opacity-15" : "opacity-5"}`}>
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 grid grid-cols-4 gap-6">
          <div className={`border-l h-full ${isLight ? "border-stone-400" : "border-white"}`}></div>
          <div className={`border-l h-full ${isLight ? "border-stone-400" : "border-white"}`}></div>
          <div className={`border-l h-full ${isLight ? "border-stone-400" : "border-white"}`}></div>
          <div className={`border-l h-full ${isLight ? "border-stone-400" : "border-white"}`}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div className="max-w-xl">
            <p className="text-xs font-mono tracking-[0.3em] text-bronze uppercase font-semibold mb-3">
              CURATED PORTFOLIO
            </p>
            <h2 className={`font-serif text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight transition-colors duration-500 ${
              isLight ? "text-charcoal-900" : "text-white"
            }`}>
              Flagship Chronicles
            </h2>
            <p className={`mt-4 text-sm md:text-base font-sans font-light tracking-wide leading-relaxed transition-colors duration-500 ${
              isLight ? "text-charcoal-600" : "text-charcoal-400"
            }`}>
              We reject standard thumbnail grids in favor of rigorous, editorial storytelling. Each commission represents a permanent contribution to the public sphere.
            </p>
          </div>

          {/* Interactive Category Selector */}
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => {
              const activeClass = "bg-bronze border-bronze text-white font-semibold";
              const inactiveClass = isLight
                ? "border-stone-200 text-charcoal-600 hover:text-charcoal-900 hover:border-stone-400"
                : "border-white/10 text-charcoal-400 hover:text-white hover:border-white/20";

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-[10px] md:text-xs font-mono tracking-[0.15em] uppercase rounded-sm border transition-all duration-300 cursor-pointer ${
                    selectedCategory === category ? activeClass : inactiveClass
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean, ordered 2 projects per row grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-stretch">
          {filteredProjects.map((project) => {
            const imageRatioClass = "aspect-[16/10]";

            return (
              <div
                key={project.id}
                className="flex flex-col group cursor-pointer"
                onClick={() => onProjectClick(project)}
              >
                {/* Image Wrap */}
                <div className={`relative overflow-hidden w-full ${imageRatioClass} transition-colors duration-500 ${
                  isLight ? "bg-stone-100 border border-stone-200" : "bg-charcoal-900 border border-white/5"
                }`}>
                  {/* Subtle architectural grid guidelines on hover */}
                  <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/15">
                    <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/10"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5"></div>
                    <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5"></div>
                  </div>

                  <img
                    src={getAssetPath(project.image)}
                    alt={project.subtitle}
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = "true";
                        const src = project.image || "";
                        const fileNameWithHash = src.split('/').pop() || "";
                        const baseName = fileNameWithHash.split('-')[0];
                        if (baseName && baseName.startsWith("yacae_")) {
                          target.src = getAssetPath(`/images/${baseName}.jpg`);
                        }
                      }
                    }}
                  />

                  {/* Top category pill */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className={`px-3 py-1.5 backdrop-blur-md text-[9px] font-mono tracking-[0.2em] uppercase rounded-sm border transition-colors duration-500 ${
                      isLight
                        ? "bg-white/90 text-charcoal-900 border-stone-200 shadow-sm"
                        : "bg-charcoal-950/80 text-white border-white/10"
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Location label */}
                  <div className={`absolute bottom-6 left-6 z-20 flex items-center space-x-1.5 backdrop-blur-md px-3 py-1 rounded-sm border transition-colors duration-500 ${
                    isLight
                      ? "bg-white/90 text-charcoal-800 border-stone-200 shadow-sm"
                      : "bg-charcoal-950/80 text-charcoal-200 border-white/5"
                  }`}>
                    <MapPin size={10} className="text-bronze" />
                    <span className="text-[10px] font-sans font-light tracking-wide">
                      {project.location}
                    </span>
                  </div>
                </div>

                {/* Editorial Metadata & Copy */}
                <div className="mt-6 flex flex-col">
                  {/* Top indicators */}
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-xs font-mono tracking-widest text-bronze uppercase">
                      {project.year} / {project.scale}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isLight ? "bg-stone-300" : "bg-white/20"}`}></span>
                    <span className={`text-xs font-mono tracking-widest transition-colors duration-500 ${
                      isLight ? "text-charcoal-500" : "text-charcoal-400"
                    }`}>
                      {project.architects}
                    </span>
                  </div>

                  {/* Refined headline */}
                  <h3 className={`font-serif text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mt-1 transition-colors duration-300 group-hover:text-bronze`}>
                    <span className={isLight ? "text-charcoal-900" : "text-white"}>{project.title}</span>:{" "}
                    <span className={`transition-colors duration-300 ${
                      isLight
                        ? "text-charcoal-500 group-hover:text-charcoal-800"
                        : "text-charcoal-200 group-hover:text-white"
                    }`}>
                      {project.subtitle}
                    </span>
                  </h3>

                  {/* Abstract description */}
                  <p className={`mt-3 text-sm font-sans font-light leading-relaxed line-clamp-2 md:line-clamp-3 transition-colors duration-500 ${
                    isLight ? "text-charcoal-600" : "text-charcoal-400"
                  }`}>
                    {project.description}
                  </p>

                  {/* Learn More link requested */}
                  <div className="mt-4 flex items-center space-x-2 text-bronze font-sans font-semibold tracking-wider text-xs uppercase group-hover:text-bronze-dark transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist interactive design element in the bottom margin */}
        <div className={`mt-20 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors duration-500 ${
          isLight ? "border-stone-200" : "border-white/5"
        }`}>
          <div className={`flex items-center space-x-3 transition-colors duration-500 ${isLight ? "text-charcoal-600" : "text-charcoal-400"}`}>
            <Sparkles size={14} className="text-bronze" />
            <span className="text-[11px] font-mono tracking-widest uppercase">
              All renders fully compiled under YACAE structural guidelines.
            </span>
          </div>
          <button
            onClick={() => setSelectedCategory("All")}
            className="text-[10px] font-mono tracking-widest uppercase text-bronze hover:text-bronze-dark transition-colors duration-300 cursor-pointer"
          >
            RESET GRID / SEE ALL WORKS
          </button>
        </div>
      </div>
    </section>
  );
}
