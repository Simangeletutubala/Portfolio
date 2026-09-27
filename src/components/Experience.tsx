import React from 'react';
import { TRANSFERABLE_EXPERIENCE } from '../data/portfolioData';
import { Binary, MessageSquareText, Cpu, CalendarCheck, Lightbulb, Users, CheckCircle2, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Binary':
        return <Binary className="w-5 h-5 text-rose-400" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-5 h-5 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-sky-400" />;
      default:
        return <Lightbulb className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 sm:py-24 border-b border-purple-950/60 bg-[#0A0816]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 · Transferable Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Experience & Engineering Competencies
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            My foundation as a Mathematics and Technology Educator is an engineering multiplier. Below is how pedagogical discipline translates into high-performing software development.
          </p>
        </div>

        {/* Overview Banner: Mathematics Educator role */}
        <div className="p-6 bg-[#0E0C1C] border border-purple-950 rounded-2xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white font-heading">Mathematics & Technology Educator</span>
              <span className="text-xs text-rose-300 font-mono px-2 py-0.5 rounded bg-rose-950/60 border border-rose-800/40">
                Senior Phase
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Led instruction in advanced quantitative concepts and introduced digital educational platforms to improve learner problem-solving and engagement.
            </p>
          </div>
          <div className="text-xs text-rose-300 font-mono flex items-center gap-2 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Direct Software Translation</span>
          </div>
        </div>

        {/* 4 Core Competency Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {TRANSFERABLE_EXPERIENCE.map((comp, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#0E0C1C] border border-purple-950/80 rounded-2xl hover:border-purple-800/60 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-purple-950/60 border border-purple-900/40 rounded-xl">
                    {getIcon(comp.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading">{comp.title}</h3>
                    <span className="text-xs text-rose-300 font-medium">{comp.subtitle}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {comp.description}
                </p>
              </div>

              {/* Developer Application Box */}
              <div className="p-3.5 bg-slate-950/70 border border-purple-950/80 rounded-xl">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                  How This Shows Up in My Code:
                </span>
                <p className="text-xs text-slate-300">
                  {comp.developerApplication}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Transferable Strengths Bullet Row */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-[#0E0C1C] border border-purple-950/80 rounded-xl space-y-1">
            <span className="font-bold text-white block">User-Centred Thinking</span>
            <p className="text-slate-400">
              Anticipating learner confusion translates into anticipating user friction points, clear validation cues, and thoughtful UI edge cases.
            </p>
          </div>

          <div className="p-4 bg-[#0E0C1C] border border-purple-950/80 rounded-xl space-y-1">
            <span className="font-bold text-white block">Creating Digital Resources</span>
            <p className="text-slate-400">
              Transforming curriculum into interactive digital media and responsive applications that reinforce conceptual understanding.
            </p>
          </div>

          <div className="p-4 bg-[#0E0C1C] border border-purple-950/80 rounded-xl space-y-1">
            <span className="font-bold text-white block">Clear Technical Communication</span>
            <p className="text-slate-400">
              Proven ability to explain complex technical logic simply and collaborate effectively with diverse teams and stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
