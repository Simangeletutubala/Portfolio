import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-purple-950/80 bg-[#07050F] text-slate-400 text-xs py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Positioning */}
        <div className="space-y-1 text-center md:text-left">
          <div className="font-bold text-white text-sm font-heading flex items-center justify-center md:justify-start gap-2">
            <span>{PERSONAL_INFO.name}</span>
            <span className="text-rose-400">·</span>
            <span className="text-rose-300 font-normal text-xs flex items-center gap-1">
              <Heart className="w-3 h-3 text-rose-400 fill-rose-400/40" />
              <span>Girl in Tech</span>
            </span>
          </div>
          <p className="text-slate-400">
            {PERSONAL_INFO.title} · Building practical, user-focused web applications
          </p>
        </div>

        {/* Social Links & Back to top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-rose-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-rose-400 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <span className="text-purple-950">|</span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors font-medium text-slate-300"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-purple-950/60 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Vite. Empowering women in tech & STEM education.
      </div>
    </footer>
  );
};
