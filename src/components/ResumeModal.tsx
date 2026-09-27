import React, { useState } from 'react';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA, JOURNEY_DATA, EDUCATION_DATA, TRANSFERABLE_EXPERIENCE } from '../data/portfolioData';
import { X, Download, Printer, Check, Copy, Mail, ExternalLink, MapPin, Briefcase, GraduationCap, Award, Heart } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0E0C1C] border border-purple-950 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-purple-950 bg-[#090714]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <h3 className="text-sm font-semibold text-white font-heading">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </h3>
            <span className="text-xs text-rose-300 hidden sm:inline">· Girl in Tech · {PERSONAL_INFO.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1 px-3 py-1.5 text-xs text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors border border-purple-900/50"
              title="Print CV or save to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1 px-3 py-1.5 text-xs text-rose-200 hover:text-white bg-rose-950/60 hover:bg-rose-900/60 rounded-lg transition-colors border border-rose-800/50"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-2"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Printable Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#0B0918] text-slate-200 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-purple-950 pb-6 print:border-black flex flex-col sm:flex-row items-start justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading print:text-black">
                  {PERSONAL_INFO.name}
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-rose-950/60 border border-rose-500/40 text-[11px] font-semibold text-rose-300 flex items-center gap-1 print:hidden">
                  <Heart className="w-3 h-3 text-rose-400 fill-rose-400/40" />
                  <span>Girl in Tech</span>
                </span>
              </div>
              <p className="text-base text-rose-400 font-medium font-heading print:text-purple-700">
                {PERSONAL_INFO.title} · Women Techsters Fellow
              </p>
              <p className="text-xs text-slate-400 max-w-2xl print:text-gray-700">
                {PERSONAL_INFO.heroHeadline}
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-2 text-xs text-slate-400 print:text-gray-700">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-rose-400" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span>·</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-rose-400 hover:underline">
                  GitHub: /simangeletutubala
                </a>
                <span>·</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-rose-400 hover:underline">
                  LinkedIn: /in/simangele-tutubala
                </a>
              </div>
            </div>

            {/* Portrait Thumbnail */}
            <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden border border-rose-500/40 shadow-md hidden sm:block print:hidden">
              <img
                src={PERSONAL_INFO.portraitImage}
                alt="Simangele Tutubala"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-rose-400 font-bold mb-2 print:text-purple-700">
              Professional Summary
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed print:text-gray-800">
              {PERSONAL_INFO.aboutParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Technical Proficiencies */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-rose-400 font-bold mb-3 print:text-purple-700">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {SKILLS_DATA.map((cat, i) => (
                <div key={i} className="p-3 bg-[#0E0C1C] border border-purple-950 rounded-lg print:border-gray-300 print:bg-white">
                  <span className="font-semibold text-white block mb-1 print:text-black">{cat.category}</span>
                  <div className="text-slate-400 print:text-gray-700">
                    {cat.skills.map(s => s.name).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-rose-400 font-bold mb-3 print:text-purple-700">
              Featured Software Development Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="p-4 bg-[#0E0C1C] border border-purple-950 rounded-lg print:border-gray-300 print:bg-white">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold text-white print:text-black">{proj.title}</h3>
                    <span className="text-xs text-rose-300 font-mono print:text-purple-700">
                      {proj.technologies.join(' · ')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2 print:text-gray-800">{proj.description}</p>
                  <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside print:text-gray-700">
                    {proj.features.slice(0, 3).map((f, fi) => (
                      <li key={fi}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Software Development Journey */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-rose-400 font-bold mb-3 print:text-purple-700">
              Software Development Journey & Experience
            </h2>
            <div className="space-y-3">
              {JOURNEY_DATA.map((milestone, idx) => (
                <div key={idx} className="flex gap-3 text-xs">
                  <span className="font-mono text-rose-400 shrink-0 w-24 font-medium print:text-purple-700">
                    {milestone.year}
                  </span>
                  <div>
                    <h4 className="font-semibold text-white print:text-black">
                      {milestone.role} <span className="text-slate-400 font-normal">· {milestone.organization}</span>
                    </h4>
                    <p className="text-slate-400 mt-0.5 print:text-gray-700">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h2 className="text-xs uppercase tracking-wider text-rose-400 font-bold mb-3 print:text-purple-700">
              Education & Certifications
            </h2>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-[#0E0C1C] border border-purple-950 rounded-lg print:border-gray-300">
                <div className="flex justify-between font-semibold text-white print:text-black">
                  <span>{EDUCATION_DATA.degree.degree}</span>
                  <span className="text-slate-400">{EDUCATION_DATA.degree.institution}</span>
                </div>
                <div className="text-rose-400 mt-0.5 print:text-purple-700">{EDUCATION_DATA.degree.field}</div>
              </div>

              <div className="grid sm:grid-cols-3 gap-2">
                {EDUCATION_DATA.certifications.map((cert, ci) => (
                  <div key={ci} className="p-2.5 bg-[#0E0C1C] border border-purple-950 rounded-lg print:border-gray-300">
                    <span className="font-semibold text-white block truncate print:text-black">{cert.name}</span>
                    <span className="text-slate-400 block text-[11px] print:text-gray-700">{cert.issuer} ({cert.year})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-purple-950 bg-[#090714] text-xs">
          <span className="text-rose-300 font-medium">✨ Ready to contribute to forward-thinking engineering teams</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors border border-purple-900/40"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
