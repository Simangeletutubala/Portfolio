/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDemoModal } from './components/ProjectDemoModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080D1A] text-slate-100 selection:bg-sky-500 selection:text-slate-950 font-sans">
      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* 2. About Me */}
        <About />

        {/* 3. Technical Skills */}
        <Skills />

        {/* 4. Featured Projects */}
        <Projects onSelectProjectForDemo={(proj) => setSelectedProject(proj)} />

        {/* 5. Software Development Journey */}
        <Journey />

        {/* 6. Experience (Transferable strengths from Educator background) */}
        <Experience />

        {/* 7. Education & Certifications */}
        <Education />

        {/* 8. Contact */}
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Simulator Modal */}
      <ProjectDemoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive CV / Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
