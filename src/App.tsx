/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import Metrics from "./components/Metrics";
import Expertise from "./components/Expertise";
import Insights from "./components/Insights";
import RFPModal from "./components/RFPModal";
import ProjectDetailModal from "./components/ProjectDetailModal";
import Footer from "./components/Footer";
import { Project, Insight } from "./types";

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isRFPModalOpen, setIsRFPModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);

  // Sync theme with document element for global CSS transitions
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // RFP form data override so when user clicks "Consult on..." we can pre-select that value
  const [preselectedRfpType, setPreselectedRfpType] = useState<string>("Civic & Cultural");

  const handleOpenRFP = (type: string = "Civic & Cultural") => {
    setPreselectedRfpType(type);
    setIsRFPModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setSelectedInsight(null);
  };

  const handleInsightClick = (insight: Insight) => {
    setSelectedInsight(insight);
    setSelectedProject(null);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
    setSelectedInsight(null);
  };

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-bronze selection:text-white overflow-hidden transition-colors duration-500 ${
      theme === 'light' ? 'bg-[#fafaf9] text-charcoal-900' : 'bg-charcoal-950 text-white'
    }`}>
      {/* Sticky Glass Header */}
      <Header
        theme={theme}
        onThemeToggle={handleThemeToggle}
        onSubmitRFPClick={() => handleOpenRFP()}
        onNavigate={handleNavigate}
      />

      {/* Cinematic Full-Screen Hero */}
      <Hero
        theme={theme}
        onScrollToExplore={() => handleNavigate("projects")}
        onSubmitRFPClick={() => handleOpenRFP()}
      />

      {/* Flagship Projects Section */}
      <FeaturedProjects theme={theme} onProjectClick={handleProjectClick} />

      {/* Institutional Metrics Section */}
      <Metrics theme={theme} />

      {/* Specialty Consulting Disciplines */}
      <Expertise theme={theme} />

      {/* Insights & Innovation thought leadership columns */}
      <Insights theme={theme} onInsightClick={handleInsightClick} />

      {/* Professional Permanence Footer */}
      <Footer
        theme={theme}
        onNavigate={handleNavigate}
        onSubmitRFPClick={() => handleOpenRFP()}
      />

      {/* Request For Proposal (RFP) slide-over */}
      <RFPModal
        theme={theme}
        isOpen={isRFPModalOpen}
        onClose={() => setIsRFPModalOpen(false)}
      />

      {/* Immersive Case Study and Scientific Paper detail reader */}
      <ProjectDetailModal
        theme={theme}
        project={selectedProject}
        insight={selectedInsight}
        onClose={handleCloseDetail}
        onConsultProject={(category) => handleOpenRFP(category)}
      />
    </div>
  );
}
