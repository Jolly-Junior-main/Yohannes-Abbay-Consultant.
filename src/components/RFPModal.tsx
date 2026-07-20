/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { X, Check, Building2, Send, ShieldAlert, Sparkles, HelpCircle, FileCheck2, Calculator } from "lucide-react";

interface RFPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RFPModal({ isOpen, onClose }: RFPModalProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    projectType: "Civic & Cultural",
    scaleSqm: 5000,
    budgetRange: "$5M - $10M",
    location: "Addis Ababa, Ethiopia",
    sustainabilityGoal: "LEED Gold",
    scopeDescription: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [estimate, setEstimate] = useState({
    timelineMonths: 12,
    engineerCount: 8,
    offsetCreditSqm: "210 tCO2e/yr",
    aggregateTone: "1,200 Tons"
  });

  // Calculate simulated parameters whenever size or type change to make the RFP interactive
  useEffect(() => {
    const size = Number(formData.scaleSqm);
    let factor = 1;
    if (formData.projectType === "High-Rise & Corporate") factor = 1.4;
    if (formData.projectType === "Landmark & Cultural") factor = 1.2;

    const timeline = Math.max(6, Math.round((size / 1500) * factor + 4));
    const engineers = Math.max(3, Math.round((size / 2000) * factor + 2));
    const offset = `${Math.round((size * 0.05) * factor)} tCO2e/yr`;
    const carbonRatio = formData.sustainabilityGoal === "LEED Platinum" ? 0.35 : 0.22;
    const aggregate = `${Math.round(size * carbonRatio * 0.8)} Tons`;

    setEstimate({
      timelineMonths: timeline,
      engineerCount: engineers,
      offsetCreditSqm: offset,
      aggregateTone: aggregate
    });
  }, [formData.scaleSqm, formData.projectType, formData.sustainabilityGoal]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.email || !formData.contactName) {
      alert("Please provide required contact credentials.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const projectTypes = [
    "Civic & Cultural",
    "High-Rise & Corporate",
    "Landmark & Cultural",
    "Master Planning & Urban Design",
    "Specialized Infrastructure"
  ];

  const sustainabilityGoals = [
    "LEED Certified",
    "LEED Silver",
    "LEED Gold",
    "LEED Platinum",
    "Net-Zero Carbon Flagship"
  ];

  const budgetRanges = [
    "Under $5M",
    "$5M - $15M",
    "$15M - $50M",
    "$50M - $100M",
    "Over $100M"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
      {/* Dark Overlay with Blur */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Slide-over Panel */}
      <div className="relative w-full max-w-2xl bg-charcoal-950 border-l border-white/10 h-full flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
        
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between bg-charcoal-900 sticky top-0 z-20">
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-[0.3em] text-bronze uppercase font-semibold">
              YACAE MASTER ADVISORY
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-medium tracking-tight">
              Submit RFP Commission
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-charcoal-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-8 space-y-8 flex-1">
          {isSubmitted ? (
            /* Success Panel */
            <div className="py-12 flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-bronze/10 border border-bronze rounded-full flex items-center justify-center text-bronze animate-pulse">
                <FileCheck2 size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl md:text-3xl text-white font-medium">
                  RFP Document Received Successfully
                </h3>
                <p className="text-xs font-mono text-bronze uppercase tracking-[0.15em] font-semibold">
                  PROPOSAL REFERENCE ID: YACAE-2026-{(Math.floor(Math.random() * 9000) + 1000)}
                </p>
                <p className="text-sm text-charcoal-400 max-w-md mx-auto leading-relaxed pt-3">
                  Thank you for submitting your Request For Proposal. Our senior partner board led by Dr. Yohannes Abbay is auditing the parameters below. A technical liaison will contact you within 48 business hours with custom blueprint sketches.
                </p>
              </div>

              {/* Submitted Parameters Summary */}
              <div className="w-full bg-charcoal-900 border border-white/5 rounded-sm p-6 space-y-4 text-left glass-card">
                <h4 className="text-xs font-mono tracking-wider text-bronze uppercase font-bold border-b border-white/5 pb-2">
                  COMPILED DESIGN METRICS
                </h4>
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs font-sans">
                  <div>
                    <span className="text-charcoal-400 block">Commission Type:</span>
                    <span className="text-white font-medium">{formData.projectType}</span>
                  </div>
                  <div>
                    <span className="text-charcoal-400 block">Scale Requested:</span>
                    <span className="text-white font-medium">{Number(formData.scaleSqm).toLocaleString()} m²</span>
                  </div>
                  <div>
                    <span className="text-charcoal-400 block">Proposed Budget:</span>
                    <span className="text-white font-medium">{formData.budgetRange}</span>
                  </div>
                  <div>
                    <span className="text-charcoal-400 block">Target Standard:</span>
                    <span className="text-white font-medium text-bronze">{formData.sustainabilityGoal}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-4 bg-charcoal-950/50 p-3 rounded-sm">
                  <div>
                    <span className="text-charcoal-400 text-[10px] block">Est. Core Engineering:</span>
                    <span className="text-white text-sm font-serif">{estimate.timelineMonths} Months</span>
                  </div>
                  <div>
                    <span className="text-charcoal-400 text-[10px] block">Dedicated Architects:</span>
                    <span className="text-white text-sm font-serif">{estimate.engineerCount} Professionals</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setFormData({
                      companyName: "",
                      contactName: "",
                      email: "",
                      projectType: "Civic & Cultural",
                      scaleSqm: 5000,
                      budgetRange: "$5M - $10M",
                      location: "Addis Ababa, Ethiopia",
                      sustainabilityGoal: "LEED Gold",
                      scopeDescription: ""
                    });
                    setIsSubmitted(false);
                  }}
                  className="flex-1 py-3 bg-charcoal-900 border border-white/10 text-xs font-sans text-white uppercase tracking-widest hover:border-bronze transition-colors cursor-pointer rounded-sm"
                >
                  SUBMIT ANOTHER
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 bg-bronze text-white text-xs font-sans font-bold uppercase tracking-widest hover:bg-bronze-dark transition-colors cursor-pointer rounded-sm"
                >
                  RETURN TO HOME
                </button>
              </div>
            </div>
          ) : (
            /* Proposal Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Section 1: Contact Credentials */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono tracking-wider text-bronze uppercase font-bold border-b border-white/5 pb-2">
                  01 / CONTACT CREDENTIALS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-charcoal-400">
                      Company / Organization <span className="text-bronze">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Federal Ministry of Energy"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-charcoal-900 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-bronze rounded-sm transition-colors font-sans"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-charcoal-400">
                      Contact Name <span className="text-bronze">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Director Abraham"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full bg-charcoal-900 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-bronze rounded-sm transition-colors font-sans"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-charcoal-400">
                      Email Address <span className="text-bronze">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. contact@ministry.gov.et"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-charcoal-900 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-bronze rounded-sm transition-colors font-sans"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-charcoal-400">
                      Proposed Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bole District, Addis Ababa"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-charcoal-900 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-bronze rounded-sm transition-colors font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Form Section 2: Commission Scope */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xs font-mono tracking-wider text-bronze uppercase font-bold border-b border-white/5 pb-2">
                  02 / COMMISSION METRICS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-charcoal-400">
                      Project Typology
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-charcoal-900 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-bronze rounded-sm transition-colors font-sans"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-charcoal-900 text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-charcoal-400 flex justify-between">
                      <span>Project Scale (m² Area)</span>
                      <span className="text-bronze font-bold">{Number(formData.scaleSqm).toLocaleString()} m²</span>
                    </label>
                    <input
                      type="range"
                      min="1000"
                      max="100000"
                      step="1000"
                      value={formData.scaleSqm}
                      onChange={(e) => setFormData({ ...formData, scaleSqm: Number(e.target.value) })}
                      className="w-full accent-bronze bg-charcoal-900 border-none h-2 rounded-lg cursor-pointer my-2.5"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-charcoal-400">
                      Sustainability Goal
                    </label>
                    <select
                      value={formData.sustainabilityGoal}
                      onChange={(e) => setFormData({ ...formData, sustainabilityGoal: e.target.value })}
                      className="w-full bg-charcoal-900 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-bronze rounded-sm transition-colors font-sans"
                    >
                      {sustainabilityGoals.map((goal) => (
                        <option key={goal} value={goal} className="bg-charcoal-900 text-white">
                          {goal}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase text-charcoal-400">
                      Aesthetic Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-charcoal-900 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-bronze rounded-sm transition-colors font-sans"
                    >
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-charcoal-900 text-white">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-charcoal-400">
                    Brief Architectural & Material Brief (Scope of Work)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe specific structural targets, civic goals, preferred materials, or zoning constraints..."
                    value={formData.scopeDescription}
                    onChange={(e) => setFormData({ ...formData, scopeDescription: e.target.value })}
                    className="w-full bg-charcoal-900 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-bronze rounded-sm transition-colors font-sans resize-none"
                  />
                </div>
              </div>

              {/* Interactive Scope Calculator Overlay */}
              <div className="bg-charcoal-900/80 border border-white/5 rounded-sm p-4 md:p-6 space-y-4 glass-card">
                <div className="flex items-center space-x-2 text-bronze">
                  <Calculator size={16} />
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold">
                    Interactive Scope Estimator
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-white/5">
                  <div className="px-2">
                    <span className="text-[10px] font-mono text-charcoal-400 block uppercase">Timeline</span>
                    <span className="text-lg font-serif text-white font-medium">{estimate.timelineMonths} mos</span>
                  </div>
                  <div className="px-2">
                    <span className="text-[10px] font-mono text-charcoal-400 block uppercase">Team Size</span>
                    <span className="text-lg font-serif text-white font-medium">{estimate.engineerCount} FTE</span>
                  </div>
                  <div className="px-2">
                    <span className="text-[10px] font-mono text-charcoal-400 block uppercase">Carbon Saved</span>
                    <span className="text-lg font-serif text-bronze font-medium">{estimate.offsetCreditSqm}</span>
                  </div>
                  <div className="px-2">
                    <span className="text-[10px] font-mono text-charcoal-400 block uppercase">Pozzolan concrete</span>
                    <span className="text-lg font-serif text-white font-medium">{estimate.aggregateTone}</span>
                  </div>
                </div>
                <p className="text-[10px] font-mono text-charcoal-400 text-center leading-relaxed">
                  Estimates dynamically aggregated according to YACAE's historical project databases.
                </p>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-charcoal-400 text-xs font-mono max-w-xs leading-tight">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze animate-pulse shrink-0"></span>
                  <span>SSL encrypted master plan transmission channel.</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3.5 bg-bronze hover:bg-bronze-dark disabled:bg-bronze/40 text-white font-sans font-bold text-xs uppercase tracking-widest flex items-center space-x-3 transition-colors cursor-pointer rounded-sm shrink-0"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>VALIDATING METRICS...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>SUBMIT PROPOSAL REQ</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
