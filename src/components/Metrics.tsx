/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { metricsData } from "../data/projectData";
import { Award, Target, Landmark, LandmarkIcon } from "lucide-react";

interface MetricsProps {
  theme?: "light" | "dark";
}

export default function Metrics({ theme = "dark" }: MetricsProps) {
  const [activeMetricId, setActiveMetricId] = useState<string>("years");

  // Detailed breakdowns for each metric to make this stats ribbon interactive and satisfying
  const metricDetails: {
    [key: string]: {
      title: string;
      subtitle: string;
      highlights: { title: string; desc: string; icon: any }[];
      stats: { label: string; value: string }[];
    };
  } = {
    years: {
      title: "15+ Years of Permanent Legacy",
      subtitle: "Established in Addis Ababa, YACAE has evolved into a standard of corporate architectural scholarship.",
      highlights: [
        { title: "2011 Foundations", desc: "Started as a high-density structural consultancy in Addis Ababa.", icon: Landmark },
        { title: "2018 Urban Scaled", desc: "Expanded into comprehensive master planning and transportation hubs.", icon: Target },
        { title: "2026 Continental Excellence", desc: "Now pioneering sustainable monolithic high-rises and zero-carbon civic centers.", icon: Award }
      ],
      stats: [
        { label: "Design Awards", value: "14" },
        { label: "Technical Papers", value: "28+" },
        { label: "Patented Systems", value: "4" }
      ]
    },
    plans: {
      title: "80+ Resilient Master Plans",
      subtitle: "Shaping smart cities, porous civic systems, and structural guidelines across East Africa.",
      highlights: [
        { title: "Addis Ababa Expansion", desc: "Designed zoning frameworks for central administrative corridors.", icon: LandmarkIcon },
        { title: "Rift Valley Hubs", desc: "Crafted regional industrial and ecological master planning.", icon: Target },
        { title: "Porous Greenways", desc: "Pioneered sustainable sponge-city infrastructure to manage seasonal runoff.", icon: Award }
      ],
      stats: [
        { label: "Zoning Completed", value: "2,400 Ha" },
        { label: "Cities Transformed", value: "9" },
        { label: "Pedestrian-First Plans", value: "100%" }
      ]
    },
    meters: {
      title: "4,000,000+ Sq Meters Designed",
      subtitle: "Constructing corporate spaces, high-density residential hubs, and educational campuses.",
      highlights: [
        { title: "Commercial Skyscrapers", desc: "1.2M m² of high-performance corporate space with integrated double-skin envelopes.", icon: Target },
        { title: "Civic & Legislative", desc: "1.8M m² of public assembly, administrative, and cultural infrastructure.", icon: Landmark },
        { title: "Infrastructure & Transport", desc: "1.0M m² of transit terminals, railway junctions, and high-altitude hubs.", icon: Award }
      ],
      stats: [
        { label: "Corporate HQ", value: "12 Projects" },
        { label: "Embodied Carbon Saved", value: "35,000 t" },
        { label: "Public Enclosures", value: "18 Renders" }
      ]
    }
  };

  const activeDetail = metricDetails[activeMetricId];
  const isLight = theme === "light";

  return (
    <section
      id="expertise"
      className={`transition-colors duration-500 relative overflow-hidden ${
        isLight ? "bg-stone-50 border-t border-b border-stone-200" : "bg-charcoal-950 border-t border-b border-white/5"
      }`}
    >
      {/* Background radial highlight */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px] pointer-events-none ${
        isLight ? "bg-bronze/3" : "bg-bronze/5"
      }`}></div>

      {/* Primary Stats Ribbon (Remains beautifully dark for rich corporate density, matching the screenshot layout!) */}
      <div className="bg-charcoal-900 border-b border-white/5 py-16 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {metricsData.map((metric) => {
              const isActive = activeMetricId === metric.id;
              return (
                <div
                  key={metric.id}
                  onClick={() => setActiveMetricId(metric.id)}
                  className={`flex flex-col items-center text-center px-4 md:px-10 cursor-pointer group transition-all duration-500 pt-8 md:pt-0 ${
                    isActive ? "opacity-100 scale-102" : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <span className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white transition-all duration-500 group-hover:text-bronze">
                    {metric.value}
                  </span>
                  <span className="text-xs font-mono tracking-[0.25em] uppercase text-bronze font-bold mt-3">
                    {metric.label}
                  </span>
                  <p className="mt-3 text-xs md:text-sm font-sans font-light text-charcoal-400 leading-relaxed max-w-xs">
                    {metric.description}
                  </p>
                  
                  {/* Subtle active underline */}
                  <div className={`h-[2px] w-12 bg-bronze mt-6 transition-all duration-500 ${
                    isActive ? "w-24 opacity-100" : "w-0 opacity-0 group-hover:w-12 group-hover:opacity-50"
                  }`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Metric Detail Reveal Panel (Toggles background and text colors based on the active theme) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Summary Left */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono tracking-[0.3em] text-bronze uppercase font-semibold">
              SPECIFICATION DEPTH
            </span>
            <h3 className={`font-serif text-2xl md:text-4xl font-medium tracking-tight transition-colors duration-500 ${
              isLight ? "text-charcoal-900" : "text-white"
            }`}>
              {activeDetail.title}
            </h3>
            <p className={`text-sm md:text-base font-sans font-light leading-relaxed transition-colors duration-500 ${
              isLight ? "text-charcoal-600" : "text-charcoal-400"
            }`}>
              {activeDetail.subtitle}
            </p>

            {/* Scale ratios chart element */}
            <div className="pt-6 grid grid-cols-3 gap-4">
              {activeDetail.stats.map((stat, i) => (
                <div
                  key={i}
                  className={`border-l pl-4 py-2 transition-colors duration-500 ${
                    isLight ? "border-stone-200" : "border-white/10"
                  }`}
                >
                  <div className={`font-serif text-xl md:text-2xl font-medium transition-colors duration-500 ${
                    isLight ? "text-charcoal-900" : "text-white"
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-[10px] font-mono tracking-wider uppercase mt-1 transition-colors duration-500 ${
                    isLight ? "text-charcoal-500" : "text-charcoal-400"
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive features timeline Right */}
          <div className={`lg:col-span-7 border rounded-sm p-6 md:p-10 space-y-6 md:space-y-8 transition-all duration-500 ${
            isLight
              ? "bg-white border-stone-200 shadow-sm"
              : "bg-charcoal-900/50 border-white/5 glass-card"
          }`}>
            {activeDetail.highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="flex items-start space-x-6 group/item">
                  <div className={`w-12 h-12 rounded-sm border flex items-center justify-center text-bronze group-hover/item:text-white transition-all duration-300 shrink-0 ${
                    isLight
                      ? "border-stone-200 bg-stone-50 group-hover/item:border-bronze group-hover/item:bg-bronze"
                      : "border-white/10 bg-charcoal-950 group-hover/item:border-bronze group-hover/item:bg-bronze"
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className={`font-serif text-lg font-medium group-hover/item:text-bronze transition-colors ${
                      isLight ? "text-charcoal-900" : "text-white"
                    }`}>
                      {highlight.title}
                    </h4>
                    <p className={`text-xs md:text-sm font-sans font-light leading-relaxed transition-colors duration-500 ${
                      isLight ? "text-charcoal-600" : "text-charcoal-400"
                    }`}>
                      {highlight.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
