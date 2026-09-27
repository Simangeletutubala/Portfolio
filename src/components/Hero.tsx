import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Github, FileText, Sparkles, Terminal, Copy, Check, ExternalLink, Heart, Code2 } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'react' | 'backend'>('react');

  const reactCodeSnippet = `// MathSpark: Interactive Fraction Decomposer
export const FractionVisualizer = ({ numerator, denominator }) => {
  const percentage = (numerator / denominator) * 100;
  
  return (
    <div className="math-visual-container">
      <ProgressRing value={percentage} color="var(--accent-glow)" />
      <span>{numerator} of {denominator} equal parts</span>
    </div>
  );
};`;

  const backendCodeSnippet = `// RESTful Node.js / Express challenge route
router.post('/challenges/log-activity', authenticateUser, async (req, res) => {
  const { challengeId, activityUnits } = req.body;
  
  const updatedChallenge = await calculateCumulativeProgress({
    userId: req.user.id,
    challengeId,
    units: activityUnits
  });

  return res.status(200).json({
    success: true,
    leaderboardRank: updatedChallenge.newRank,
    streakDays: updatedChallenge.streak
  });
});`;

  const handleCopyCode = () => {
    const code = activeCodeTab === 'react' ? reactCodeSnippet : backendCodeSnippet;
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-purple-950/60">
      {/* Background ambient glow with soft rose & violet tones */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-rose-900/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-1/4 w-[600px] h-[400px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Core Positioning & Identity */}
          <div className="lg:col-span-7 space-y-6">
            {/* Girl in Tech & Status Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-rose-950/80 via-purple-950/80 to-slate-900 border border-rose-500/40 text-xs font-semibold text-rose-200 shadow-sm">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/40" />
                <span>Girl in Tech · Women Techsters Fellow</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/70 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Junior Roles</span>
              </div>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading">
                {PERSONAL_INFO.name}
              </h1>
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-rose-400 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent font-heading">
                {PERSONAL_INFO.title}
              </div>
            </div>

            {/* Positioning statement from brief */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              {PERSONAL_INFO.heroHeadline}
            </p>

            {/* Sub-positioning */}
            <p className="text-sm font-medium text-purple-200/80 italic flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{PERSONAL_INFO.subHeadline}</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-rose-950/50 flex items-center gap-2"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm rounded-xl transition-colors border border-purple-900/50 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 bg-purple-950/50 hover:bg-purple-900/60 text-purple-200 hover:text-white font-medium text-sm rounded-xl transition-colors border border-purple-700/50 flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Quick Badges Strip */}
            <div className="pt-4 border-t border-purple-950/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <span className="block font-bold text-white font-mono text-sm">React & JS</span>
                <span className="text-slate-400 text-[11px]">Component UX</span>
              </div>
              <div>
                <span className="block font-bold text-white font-mono text-sm">Node & Python</span>
                <span className="text-slate-400 text-[11px]">Full-Stack Logic</span>
              </div>
              <div>
                <span className="block font-bold text-rose-300 font-mono text-sm">Women Techsters</span>
                <span className="text-slate-400 text-[11px]">Fellowship Alumna</span>
              </div>
              <div>
                <span className="block font-bold text-white font-mono text-sm">B.Ed Math</span>
                <span className="text-slate-400 text-[11px]">Analytical Rigor</span>
              </div>
            </div>
          </div>

          {/* Right Column: Girl in Tech Portrait + Code Terminal */}
          <div className="lg:col-span-5 space-y-4">
            {/* Visual Portrait Card */}
            <div className="relative p-1.5 rounded-2xl bg-gradient-to-br from-rose-500/40 via-fuchsia-500/30 to-sky-500/30 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-square max-h-80 sm:max-h-96 mx-auto flex items-center justify-center">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Simangele Tutubala - Junior Software Developer & Woman in Tech"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Floating Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-950/80 backdrop-blur-md rounded-xl border border-rose-500/30 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block font-heading">Simangele Tutubala</span>
                    <span className="text-[11px] text-rose-300 font-medium">Junior Software Developer · Girl in Tech</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-rose-500/20 text-rose-300">
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sleek Terminal snippet underneath */}
            <div className="bg-[#0E0C1C] border border-purple-900/40 rounded-xl overflow-hidden shadow-lg text-xs">
              <div className="flex items-center justify-between px-3 py-2 bg-[#090714] border-b border-purple-950">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-rose-400" />
                    mathspark.tsx
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                  title="Copy code"
                >
                  {copiedSnippet ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <div className="p-3 font-mono text-[11px] leading-relaxed text-slate-300 overflow-x-auto bg-[#0A0816]">
                <pre>
                  <code>{reactCodeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

