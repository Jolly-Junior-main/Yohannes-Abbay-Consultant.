/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ArrowUpRight, MapPin, Layers, Sparkles } from "lucide-react";
import { projectsData } from "../data/projectData";
import { Project } from "../types";

interface FeaturedProjectsProps {
  onProjectClick: (project: Project) => void;
}

export default function FeaturedProjects({ onProjectClick }: FeaturedProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Civic & Cultural", "High-Rise & Corporate", "Landmark & Cultural"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-charcoal-950 border-t border-white/5 relative">
      {/* Background Decorative Grid Lines (Architecture drafting board aesthetic) */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 grid grid-cols-4 gap-6">
          <div className="border-l border-white h-full"></div>
          <div className="border-l border-white h-full"></div>
          <div className="border-l border-white h-full"></div>
          <div className="border-l border-white h-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div className="max-w-xl">
            <p className="text-xs font-mono tracking-[0.3em] text-bronze uppercase font-semibold mb-3">
              CURATED PORTFOLIO
            </p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight">
              Flagship Chronicles
            </h2>
            <p className="mt-4 text-sm md:text-base font-sans font-light tracking-wide text-charcoal-400 leading-relaxed">
              We reject standard thumbnail grids in favor of rigorous, editorial storytelling. Each commission represents a permanent contribution to the public sphere.
            </p>
          </div>

          {/* Interactive Category Selector */}
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-[10px] md:text-xs font-mono tracking-[0.15em] uppercase rounded-sm border transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-bronze border-bronze text-white font-semibold"
                    : "border-white/10 text-charcoal-400 hover:text-white hover:border-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12 items-stretch">
          {filteredProjects.map((project, index) => {
            // Let's create an editorial, asymmetrical column layout
            // Project 1 (0): cols 1 to 7 (Left large card)
            // Project 2 (1): cols 8 to 12 (Right taller card, shifted down slightly on desktop)
            // Project 3 (2): cols 1 to 12 (Full landscape card for magnificent scale)
            const isFirst = index === 0;
            const isSecond = index === 1;
            const isThird = index === 2;

            let colClass = "lg:col-span-12";
            let containerPadding = "";
            let imageRatioClass = "aspect-[16/10]";

            if (isFirst) {
              colClass = "lg:col-span-7";
              imageRatioClass = "aspect-[4/3] lg:aspect-[16/11]";
            } else if (isSecond) {
              colClass = "lg:col-span-5 lg:mt-12"; // offset downward on desktop
              imageRatioClass = "aspect-[4/3] lg:aspect-[16/13]";
            } else if (isThird) {
              colClass = "lg:col-span-12 lg:mt-16";
              imageRatioClass = "aspect-[16/9]";
            }

            return (
              <div
                key={project.id}
                className={`${colClass} flex flex-col group cursor-pointer`}
                onClick={() => onProjectClick(project)}
              >
                {/* Image Wrap */}
                <div className={`relative overflow-hidden w-full ${imageRatioClass} bg-charcoal-900 border border-white/5`}>
                  {/* Subtle architectural grid guidelines on hover */}
                  <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/15">
                    <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/10"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5"></div>
                    <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5"></div>
                  </div>

                  <img
                    src={project.image}
                    alt={project.subtitle}
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top category pill */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-3 py-1.5 bg-charcoal-950/80 backdrop-blur-md text-white border border-white/10 text-[9px] font-mono tracking-[0.2em] uppercase rounded-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Location label */}
                  <div className="absolute bottom-6 left-6 z-20 flex items-center space-x-1.5 bg-charcoal-950/80 backdrop-blur-md border border-white/5 px-3 py-1 rounded-sm">
                    <MapPin size={10} className="text-bronze" />
                    <span className="text-[10px] font-sans font-light tracking-wide text-charcoal-200">
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
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                    <span className="text-xs font-mono tracking-widest text-charcoal-400">
                      {project.architects}
                    </span>
                  </div>

                  {/* Refined headline */}
                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-medium tracking-tight mt-1 group-hover:text-bronze transition-colors duration-300">
                    {project.title}: <span className="text-charcoal-200 group-hover:text-white transition-colors duration-300">{project.subtitle}</span>
                  </h3>

                  {/* Abstract description */}
                  <p className="mt-3 text-sm font-sans font-light text-charcoal-400 leading-relaxed line-clamp-2 md:line-clamp-3">
                    {project.description}
                  </p>

                  {/* Learn More link requested */}
                  <div className="mt-4 flex items-center space-x-2 text-bronze font-sans font-semibold tracking-wider text-xs uppercase group-hover:text-white transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist interactive design element in the bottom margin */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-charcoal-400">
            <Sparkles size={14} className="text-bronze" />
            <span className="text-[11px] font-mono tracking-widest uppercase">
              All renders fully compiled under YACAE structural guidelines.
            </span>
          </div>
          <button
            onClick={() => setSelectedCategory("All")}
            className="text-[10px] font-mono tracking-widest uppercase text-bronze hover:text-white transition-colors duration-300 cursor-pointer"
          >
            RESET GRID / SEE ALL WORKS
          </button>
        </div>
      </div>
    </section>
  );
}
