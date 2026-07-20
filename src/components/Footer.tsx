/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Landmark, Phone, Mail, Award, ArrowUp, CornerRightDown } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSubmitRFPClick: () => void;
}

export default function Footer({ onNavigate, onSubmitRFPClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="firm" className="bg-charcoal-950 border-t border-white/5 pt-20 pb-12 relative overflow-hidden">
      {/* Decorative vertical blueprint lines */}
      <div className="absolute top-0 left-12 w-[1px] h-32 bg-white/5"></div>
      <div className="absolute top-0 right-12 w-[1px] h-32 bg-white/5"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo Column */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex flex-col cursor-pointer" onClick={() => onNavigate("hero")}>
              <span className="font-serif text-3xl font-semibold tracking-wider text-white">
                YACAE
              </span>
              <span className="text-[10px] font-sans font-light tracking-[0.2em] text-charcoal-400 uppercase mt-1 leading-none">
                YOHANNES ABBAY Consulting Architects & Engineers
              </span>
            </div>
            <p className="text-sm font-sans font-light text-charcoal-400 leading-relaxed max-w-sm">
              Class 1 Registered Consulting Architects & Engineers. Delivering peerless technical excellence, urban-scale resilient master planning, and monumental civic architecture in Ethiopia since 2011.
            </p>
            <div className="flex items-center space-x-3 text-xs font-mono text-bronze uppercase">
              <Award size={14} />
              <span>MINISTRY LICENSE REG: #CAE-C1-00824</span>
            </div>
          </div>

          {/* Directory Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-white uppercase font-bold">
              Directory
            </h4>
            <ul className="space-y-3 text-sm font-sans font-light text-charcoal-400">
              <li>
                <button onClick={() => onNavigate("projects")} className="hover:text-bronze transition-colors cursor-pointer">
                  Projects Archive
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("expertise")} className="hover:text-bronze transition-colors cursor-pointer">
                  Our Expertise
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("insights")} className="hover:text-bronze transition-colors cursor-pointer">
                  Technical Insights
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("firm")} className="hover:text-bronze transition-colors cursor-pointer">
                  The Consulting Firm
                </button>
              </li>
            </ul>
          </div>

          {/* Core Offices Column */}
          <div className="md:col-span-3 space-y-4 text-sm font-sans font-light text-charcoal-400">
            <h4 className="text-xs font-mono tracking-widest text-white uppercase font-bold">
              Addis Ababa Offices
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2.5">
                <Landmark size={14} className="text-bronze shrink-0 mt-1" />
                <span>
                  YACAE Building, 4th Floor<br />
                  Bole Road, Central Business District<br />
                  Addis Ababa, Ethiopia
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone size={14} className="text-bronze shrink-0" />
                <span>+251 11 662 8090</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail size={14} className="text-bronze shrink-0" />
                <span>consultancy@yacae.et</span>
              </div>
            </div>
          </div>

          {/* Instant RFP Solicitation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-white uppercase font-bold">
              RFP SOLICITATION
            </h4>
            <p className="text-xs font-sans font-light text-charcoal-400 leading-relaxed">
              Have an urban development or civic monument commission in East Africa? Initiate our peer-reviewed proposal channel.
            </p>
            <button
              onClick={onSubmitRFPClick}
              className="w-full py-3 border border-bronze hover:bg-bronze hover:text-white transition-all duration-500 text-xs font-mono font-bold tracking-widest uppercase rounded-sm flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>SUBMIT RFP</span>
              <CornerRightDown size={12} />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-charcoal-400">
          <div>
            © {currentYear} Yohannes Abbay Consulting Architects & Engineers (YACAE). All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-white transition-colors cursor-pointer">Security Audited</span>
            <span className="text-white/10">|</span>
            <span className="hover:text-white transition-colors cursor-pointer">Research Index</span>
            <span className="text-white/10">|</span>
            <button
              onClick={handleScrollTop}
              className="flex items-center space-x-2 text-bronze hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
