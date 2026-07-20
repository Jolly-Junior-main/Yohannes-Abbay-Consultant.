/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
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
  const [isRFPModalOpen, setIsRFPModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);

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
    <div className="bg-charcoal-950 min-h-screen text-white font-sans antialiased selection:bg-bronze selection:text-white overflow-hidden">
      {/* Sticky Glass Header */}
      <Header
        onSubmitRFPClick={() => handleOpenRFP()}
        onNavigate={handleNavigate}
      />

      {/* Cinematic Full-Screen Hero */}
      <Hero
        onScrollToExplore={() => handleNavigate("projects")}
        onSubmitRFPClick={() => handleOpenRFP()}
      />

      {/* Flagship Projects Section */}
      <FeaturedProjects onProjectClick={handleProjectClick} />

      {/* Institutional Metrics Section */}
      <Metrics />

      {/* Specialty Consulting Disciplines */}
      <Expertise />

      {/* Insights & Innovation thought leadership columns */}
      <Insights onInsightClick={handleInsightClick} />

      {/* Professional Permanence Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSubmitRFPClick={() => handleOpenRFP()}
      />

      {/* Request For Proposal (RFP) slide-over */}
      <RFPModal
        isOpen={isRFPModalOpen}
        onClose={() => setIsRFPModalOpen(false)}
      />

      {/* Immersive Case Study and Scientific Paper detail reader */}
      <ProjectDetailModal
        project={selectedProject}
        insight={selectedInsight}
        onClose={handleCloseDetail}
        onConsultProject={(category) => handleOpenRFP(category)}
      />
    </div>
  );
}
