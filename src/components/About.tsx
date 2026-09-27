import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BrainCircuit, Compass, Sparkles, HeartHandshake, ShieldCheck, Laptop, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 border-b border-purple-950/60 bg-[#0A0816]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 · Background & Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={index === 0 ? 'text-lg text-slate-100 font-medium' : ''}
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-purple-950">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-rose-300 font-mono mb-3 flex items-center gap-2">
                <span>Why My Background Differentiates My Code</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-900/60 border border-purple-900/40 rounded-xl space-y-1.5">
                  <div className="flex items-center gap-2 font-semibold text-rose-300 font-heading">
                    <BrainCircuit className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Mathematical Precision</span>
                  </div>
                  <p className="text-slate-400">
                    Strong foundation in mathematical proofs, algorithmic steps, and logical rigor applied to state machines and clean data flows.
                  </p>
                </div>

                <div className="p-4 bg-slate-900/60 border border-purple-900/40 rounded-xl space-y-1.5">
                  <div className="flex items-center gap-2 font-semibold text-sky-300 font-heading">
                    <Compass className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>User-Centric Empathy</span>
                  </div>
                  <p className="text-slate-400">
                    Diagnosing learning hurdles translates directly into intuitive UX, compassionate error states, and clear interface affordances.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights & Snapshot Box */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-[#0E0C1C] border border-purple-900/50 rounded-2xl space-y-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-purple-950">
                <h3 className="text-sm font-bold text-white font-heading uppercase tracking-wide">
                  Developer Profile Snapshot
                </h3>
                <span className="text-[11px] font-mono text-rose-400 font-semibold">
                  Woman in STEM
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-purple-950/60">
                  <span className="text-slate-400">Current Role</span>
                  <span className="font-semibold text-white">Junior Software Developer</span>
                </div>
                <div className="flex justify-between py-2 border-b border-purple-950/60">
                  <span className="text-slate-400">Primary Tech</span>
                  <span className="font-semibold text-rose-300 font-mono">React · JS · Python · Node.js</span>
                </div>
                <div className="flex justify-between py-2 border-b border-purple-950/60">
                  <span className="text-slate-400">Community</span>
                  <span className="font-semibold text-purple-300">Women Techsters Alumna</span>
                </div>
                <div className="flex justify-between py-2 border-b border-purple-950/60">
                  <span className="text-slate-400">Education</span>
                  <span className="font-semibold text-white">B.Ed (Math & Tech)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Availability</span>
                  <span className="font-semibold text-emerald-400">Remote / Hybrid Available</span>
                </div>
              </div>

              {/* Girl in Tech Mission Callout */}
              <div className="p-4 bg-gradient-to-r from-rose-950/40 via-purple-950/40 to-slate-900 border border-rose-500/30 rounded-xl text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-rose-300 font-heading">
                  <HeartHandshake className="w-4 h-4 text-rose-400" />
                  <span>Advocating for Women in Tech</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  "Technology shapes how the world learns and connects. As a woman in engineering, I build with inclusivity, clarity, and intentionality—inspiring young girls to claim their space in code."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
