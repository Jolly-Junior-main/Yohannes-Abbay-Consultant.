/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BookOpen, ArrowRight, ShieldCheck, Cpu, Leaf } from "lucide-react";
import { insightsData } from "../data/projectData";
import { Insight } from "../types";
import { getAssetPath } from "./FeaturedProjects";

interface InsightsProps {
  theme?: "light" | "dark";
  onInsightClick: (insight: Insight) => void;
}

export default function Insights({ theme = "dark", onInsightClick }: InsightsProps) {
  // We'll set the first insight (Research Paper) as the massive feature on the left,
  // and the remaining insights as stacked editorial cards on the right.
  const featuredInsight = insightsData[0];
  const stackedInsights = insightsData.slice(1);

  // Map categories to beautiful technical icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Research":
        return <BookOpen size={16} className="text-bronze" />;
      case "Engineering":
        return <Cpu size={16} className="text-bronze" />;
      case "Sustainability":
        return <Leaf size={16} className="text-bronze" />;
      default:
        return <ShieldCheck size={16} className="text-bronze" />;
    }
  };

  const isLight = theme === "light";

  return (
    <section
      id="insights"
      className={`py-24 transition-colors duration-500 relative ${
        isLight ? "bg-white border-b border-stone-200" : "bg-charcoal-950 border-b border-white/5"
      }`}
    >
      {/* Decorative Blueprint Corner Grid Lines */}
      <div className={`absolute top-0 right-0 w-32 h-32 border-b border-l pointer-events-none transition-colors duration-500 ${
        isLight ? "border-stone-200" : "border-white/5"
      }`}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-xs font-mono tracking-[0.3em] text-bronze uppercase font-semibold mb-3">
            SCHOLARLY AUTHORITY
          </p>
          <h2 className={`font-serif text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight transition-colors duration-500 ${
            isLight ? "text-charcoal-900" : "text-white"
          }`}>
            Insights & Innovation
          </h2>
          <p className={`mt-4 text-sm md:text-base font-sans font-light tracking-wide leading-relaxed transition-colors duration-500 ${
            isLight ? "text-charcoal-600" : "text-charcoal-400"
          }`}>
            Architectural practice is a form of scientific and cultural research. Review our latest peer-reviewed publications, structural engineering breakthroughs, and sustainable material audits.
          </p>
        </div>

        {/* Two-Column Editorial Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: Large Image Feature (Research Paper) */}
          <div
            className="lg:col-span-6 group cursor-pointer flex flex-col justify-between bg-charcoal-900 border border-white/5 relative overflow-hidden h-full rounded-sm min-h-[460px] lg:min-h-0"
            onClick={() => onInsightClick(featuredInsight)}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={getAssetPath(featuredInsight.image)}
                alt={featuredInsight.title}
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = "true";
                    const src = featuredInsight.image || "";
                    const fileNameWithHash = src.split('/').pop() || "";
                    const baseName = fileNameWithHash.split('-')[0];
                    if (baseName && baseName.startsWith("yacae_")) {
                      target.src = getAssetPath(`/images/${baseName}.jpg`);
                    }
                  }
                }}
              />
              {/* Premium dark gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-charcoal-950/25 z-10"></div>
            </div>

            {/* Top metadata */}
            <div className="relative z-20 p-8 flex items-center justify-between">
              <span className="px-3 py-1.5 bg-bronze text-white font-mono text-[9px] tracking-[0.2em] uppercase rounded-sm flex items-center space-x-2">
                {getCategoryIcon(featuredInsight.category)}
                <span className="pl-1.5">{featuredInsight.category} Paper</span>
              </span>
              <span className="text-xs font-mono text-white/60 tracking-wider">
                {featuredInsight.readTime}
              </span>
            </div>

            {/* Bottom Content Card - glassmorphic overlay */}
            <div className="relative z-20 p-6 md:p-8 m-6 bg-charcoal-950/85 backdrop-blur-md border border-white/10 rounded-sm">
              <span className="text-[10px] font-mono tracking-widest text-bronze uppercase">
                FEATURED THOUGHT LEADERSHIP
              </span>
              <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-medium text-white tracking-tight mt-2 leading-snug">
                {featuredInsight.title}
              </h3>
              <p className="mt-3 text-xs md:text-sm font-sans font-light text-charcoal-400 leading-relaxed">
                {featuredInsight.summary}
              </p>
              <div className="mt-5 flex items-center space-x-2 text-xs font-sans font-bold text-bronze uppercase tracking-widest group-hover:text-bronze-light transition-colors duration-300">
                <span>OPEN TECHNICAL DOCUMENT</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial style cards / stacked links */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {stackedInsights.map((insight) => (
                <div
                  key={insight.id}
                  onClick={() => onInsightClick(insight)}
                  className={`group border rounded-sm p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300 cursor-pointer ${
                    isLight
                      ? "bg-stone-50 border-stone-200 hover:bg-stone-100 hover:border-bronze/30 shadow-sm"
                      : "bg-charcoal-900 border-white/5 hover:bg-charcoal-900/80 hover:border-bronze/30"
                  }`}
                >
                  <div className="space-y-3 max-w-xl">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1.5 text-[9px] font-mono tracking-widest text-bronze uppercase">
                        {getCategoryIcon(insight.category)}
                        <span>{insight.category}</span>
                      </span>
                      <span className={`text-xs ${isLight ? "text-stone-300" : "text-white/20"}`}>•</span>
                      <span className={`text-[10px] font-mono transition-colors duration-500 ${
                        isLight ? "text-charcoal-500" : "text-charcoal-400"
                      }`}>
                        {insight.date}
                      </span>
                    </div>

                    <h3 className={`font-serif text-xl font-medium tracking-tight group-hover:text-bronze transition-colors duration-300 ${
                      isLight ? "text-charcoal-900" : "text-white"
                    }`}>
                      {insight.title}
                    </h3>

                    <p className={`text-xs md:text-sm font-sans font-light leading-relaxed line-clamp-2 transition-colors duration-500 ${
                      isLight ? "text-charcoal-600" : "text-charcoal-400"
                    }`}>
                      {insight.summary}
                    </p>

                    <div className={`text-[10px] font-mono transition-colors duration-500 ${
                      isLight ? "text-charcoal-500" : "text-charcoal-400"
                    }`}>
                      Authored by <span className={isLight ? "text-charcoal-800" : "text-charcoal-200"}>{insight.author}</span>
                    </div>
                  </div>

                  {/* Icon indicator */}
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center group-hover:text-bronze group-hover:border-bronze transition-all duration-300 shrink-0 ${
                    isLight
                      ? "bg-white border-stone-200 text-charcoal-500 shadow-sm"
                      : "bg-charcoal-950 border-white/5 text-charcoal-400"
                  }`}>
                    <ArrowRight size={16} />
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary Publication Link Bar */}
            <div className={`border border-dashed rounded-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors duration-500 ${
              isLight ? "border-stone-300 bg-stone-50" : "border-white/10"
            }`}>
              <div className="space-y-1">
                <div className="text-xs font-mono text-bronze uppercase font-semibold tracking-wider">
                  YACAE STRUCTURAL JOURNAL v14
                </div>
                <p className={`text-xs font-sans font-light transition-colors duration-500 ${
                  isLight ? "text-charcoal-600" : "text-charcoal-400"
                }`}>
                  Access the full archived index of 14+ architectural scholarship issues.
                </p>
              </div>
              <a
                href="#journal-archive"
                onClick={(e) => {
                  e.preventDefault();
                  onInsightClick(featuredInsight);
                }}
                className={`px-4 py-2 border text-xs font-sans uppercase tracking-widest hover:border-bronze hover:text-bronze transition-all duration-300 shrink-0 rounded-sm text-center ${
                  isLight
                    ? "bg-white border-stone-200 text-charcoal-800 shadow-sm"
                    : "bg-charcoal-950 border-white/10 text-white"
                }`}
              >
                BROWSE ARCHIVES
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
