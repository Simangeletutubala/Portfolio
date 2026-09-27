import React from 'react';
import { JOURNEY_DATA } from '../data/portfolioData';
import { CheckCircle2, Milestone, ArrowDown, GraduationCap, Briefcase, Code, Sparkles, Heart } from 'lucide-react';

export const Journey: React.FC = () => {
  const getMilestoneIcon = (type: string) => {
    switch (type) {
      case 'training':
        return <GraduationCap className="w-4 h-4 text-rose-400" />;
      case 'internship':
        return <Briefcase className="w-4 h-4 text-purple-400" />;
      case 'development':
        return <Code className="w-4 h-4 text-amber-400" />;
      case 'milestone':
        return <Sparkles className="w-4 h-4 text-rose-300" />;
      default:
        return <Milestone className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <section id="journey" className="py-20 sm:py-24 border-b border-purple-950/60 bg-[#0B0918]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 · Deliberate Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Software Development Journey
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            A structured, intentional trajectory toward professional software engineering—built through competitive training programs, hands-on internships, and independent application architecture.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-purple-950/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {JOURNEY_DATA.map((milestone, index) => {
            const isCurrent = milestone.type === 'milestone';
            return (
              <div key={index} className="relative group">
                {/* Node icon on line */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    isCurrent
                      ? 'bg-gradient-to-r from-rose-500 to-purple-600 border-rose-300 text-white shadow-lg shadow-rose-500/30'
                      : 'bg-[#090714] border-purple-900/80 text-slate-300 group-hover:border-rose-400'
                  }`}
                >
                  {getMilestoneIcon(milestone.type)}
                </div>

                {/* Content Card */}
                <div
                  className={`p-6 rounded-2xl border transition-all ${
                    isCurrent
                      ? 'bg-gradient-to-r from-rose-950/40 via-purple-950/40 to-slate-900 border-rose-500/40 shadow-xl'
                      : 'bg-[#0E0C1C] border-purple-950/80 hover:border-purple-800/60'
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white font-heading">
                        {milestone.role}
                      </h3>
                      <span className="text-sm text-rose-300 font-medium">
                        · {milestone.organization}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-purple-200 font-semibold px-2 py-0.5 rounded bg-purple-950/80 border border-purple-800/40">
                      {milestone.year}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  {/* Skills Gained Strip (Unboxed zero-pill text) */}
                  <div className="pt-3 border-t border-purple-950 text-xs">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                      Key Capabilities Acquired:
                    </span>
                    <div className="text-slate-300 font-mono text-xs flex flex-wrap gap-x-2 gap-y-1">
                      {milestone.skillsGained.map((sk, sidx) => (
                        <React.Fragment key={sk}>
                          <span>{sk}</span>
                          {sidx < milestone.skillsGained.length - 1 && <span className="text-slate-600">/</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow connector indicator */}
                {index < JOURNEY_DATA.length - 1 && (
                  <div className="flex justify-center -mb-4 mt-2 sm:hidden text-purple-800">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Narrative Takeaway Box */}
        <div className="mt-12 p-5 bg-[#0E0C1C] border border-rose-500/30 rounded-2xl flex items-start gap-4">
          <div className="p-2.5 bg-rose-950/60 rounded-xl text-rose-400 shrink-0">
            <Heart className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-xs">
            <h4 className="font-bold text-white text-sm font-heading">
              Evidence-Based Professional Positioning & Women in Tech Advocacy
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Every milestone represents structured peer collaboration, mentor code reviews, project deadlines, and test-driven application development. From the Women Techsters initiative to real production code, this pathway represents dedication to technical excellence and community representation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
