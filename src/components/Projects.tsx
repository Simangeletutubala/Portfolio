import React from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { Play, Github, Sparkles, ArrowUpRight, Heart } from 'lucide-react';

interface ProjectsProps {
  onSelectProjectForDemo: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProjectForDemo }) => {
  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-purple-950/60 bg-[#0A0816]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 · Proof of Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Featured Projects
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Concrete applications demonstrating component-driven React architecture, responsive design, state management, and user-centered engineering.
            </p>
          </div>
          <div className="text-xs text-rose-300 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span>Interactive Live Demos Built-In</span>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12">
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={project.id}
              className="bg-[#0E0C1C] border border-purple-950/80 rounded-2xl overflow-hidden hover:border-purple-800/60 transition-all shadow-xl shadow-black/30 grid lg:grid-cols-12"
            >
              {/* Left Column: Visual Mockup & Interactive Demo Launcher */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-[#090714] border-b lg:border-b-0 lg:border-r border-purple-950 flex flex-col justify-between">
                <div>
                  {/* Category & Project Index */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4 font-mono">
                    <span className="text-rose-400 font-bold uppercase">{project.category} Application</span>
                    <span>0{idx + 1} / 03</span>
                  </div>

                  {/* Project Title & Tagline */}
                  <h3 className="text-2xl font-extrabold text-white font-heading mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-purple-300 font-medium mb-4">
                    {project.tagline}
                  </p>

                  {/* Interactive Visual Graphic Banner */}
                  <div className="relative group my-4 rounded-xl overflow-hidden border border-purple-950/80 bg-slate-950 p-5 text-center">
                    <div className="py-6 flex flex-col items-center justify-center space-y-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-950/80 to-purple-950/80 border border-rose-500/30 flex items-center justify-center text-rose-300 shadow-inner group-hover:scale-105 transition-transform">
                        <Sparkles className="w-7 h-7" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-slate-200 block">
                          Test {project.title} in Browser
                        </span>
                        <span className="text-[11px] text-slate-400">
                          Runs live interactive sandbox simulation
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectProjectForDemo(project)}
                      className="w-full py-2.5 px-4 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-950/40"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Launch Interactive Demo</span>
                    </button>
                  </div>
                </div>

                {/* Technologies List with Zero-Pill Unboxed Text */}
                <div className="pt-4 border-t border-purple-950 text-xs">
                  <span className="text-slate-500 block mb-1.5 font-mono uppercase tracking-wider text-[10px]">
                    Technologies Used
                  </span>
                  <div className="text-slate-300 font-medium flex flex-wrap gap-x-2 gap-y-1">
                    {project.technologies.map((tech, ti) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {ti < project.technologies.length - 1 && <span className="text-slate-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Deep Architectural Breakdown */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Problem Solved & Application Purpose
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-rose-300 mb-2">
                      Key Technical Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {project.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 bg-slate-950/50 p-2.5 rounded-lg border border-purple-950/60">
                          <span className="text-rose-400 shrink-0 font-bold mt-0.5">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                      Transferable Engineering Competencies Demonstrated
                    </h4>
                    <div className="p-3 bg-emerald-950/20 border border-emerald-900/40 rounded-xl space-y-1.5 text-xs text-emerald-200">
                      {project.transferableStrengths.map((str, sidx) => (
                        <div key={sidx} className="flex items-start gap-2">
                          <span className="text-emerald-400 shrink-0">✓</span>
                          <span>{str}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions: Live Demo + GitHub Links */}
                <div className="pt-5 border-t border-purple-950 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onSelectProjectForDemo(project)}
                      className="px-4 py-2 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Live Demo</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-medium rounded-lg transition-colors border border-purple-950 flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>

                  <span className="text-xs text-slate-400 italic">
                    {project.metricsOrOutcome}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
