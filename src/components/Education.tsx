import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, Sparkles, Heart } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-24 border-b border-purple-950/60 bg-[#0B0918]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 · Academic & Technical Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Education & Certifications
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Formal university degree in quantitative disciplines coupled with competitive software engineering bootcamps and certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Degree Card */}
          <div className="lg:col-span-6 p-6 sm:p-7 bg-[#0E0C1C] border border-purple-950 rounded-2xl space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-rose-950/80 rounded-xl text-rose-400 border border-rose-800/50">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-rose-400 font-semibold">University Degree</span>
                <h3 className="text-xl font-bold text-white font-heading">
                  {EDUCATION_DATA.degree.degree}
                </h3>
              </div>
            </div>

            <div>
              <div className="text-base font-semibold text-slate-200">
                Senior Phase — {EDUCATION_DATA.degree.field}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Rigorous grounding in advanced mathematics, logical systems, and technological instruction.
              </p>
            </div>

            <div className="pt-4 border-t border-purple-950 space-y-2 text-xs text-slate-300">
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                Academic & Analytical Highlights:
              </span>
              {EDUCATION_DATA.degree.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Software Development Certifications */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-rose-400" />
              <span className="text-xs uppercase font-mono tracking-wider text-slate-300 font-semibold">
                Software Engineering Credentials
              </span>
            </div>

            <div className="space-y-3">
              {EDUCATION_DATA.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 bg-[#0E0C1C] border border-purple-950/80 rounded-xl hover:border-purple-800/60 transition-colors shadow-md"
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <h4 className="text-sm font-bold text-white font-heading">{cert.name}</h4>
                    <span className="text-xs font-mono text-rose-300 font-semibold">
                      {cert.year}
                    </span>
                  </div>

                  <div className="text-xs text-purple-300 font-medium mb-3">
                    {cert.issuer} · <span className="text-slate-400">{cert.badge}</span>
                  </div>

                  <div className="text-xs text-slate-400">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                      Skills & Topics Validated:
                    </span>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-slate-300 font-mono text-[11px]">
                      {cert.skillsVerified.map((sk, si) => (
                        <React.Fragment key={sk}>
                          <span>{sk}</span>
                          {si < cert.skillsVerified.length - 1 && <span className="text-slate-600">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
