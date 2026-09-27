import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, FileText, Send, Check, Copy, ExternalLink, Sparkles, MapPin, Heart } from 'lucide-react';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Junior Software Developer Opportunity',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0A0816] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-rose-950/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 · Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Have a project or opportunity in mind? Let's connect.
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            I'm actively looking for Junior Software Developer and Frontend Engineering roles where I can contribute to user-focused web applications and continue learning alongside experienced engineers.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact & Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="p-6 bg-[#0E0C1C] border border-purple-950 rounded-2xl space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <span>Direct Channels</span>
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/40" />
              </h3>

              {/* Email item */}
              <div className="p-4 bg-slate-950/70 border border-purple-950 rounded-xl space-y-2">
                <span className="text-xs text-slate-400 font-mono block">Primary Email</span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-rose-400 transition-colors font-mono truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && <span className="text-[11px] text-emerald-400 block">Email copied to clipboard!</span>}
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 px-3 py-2 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {/* Professional Links */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-900 border border-purple-950 hover:border-rose-500/60 rounded-xl flex items-center justify-between text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-rose-400" />
                    <span>LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-900 border border-purple-950 hover:border-purple-600 rounded-xl flex items-center justify-between text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>

              {/* CV Action */}
              <button
                onClick={onOpenResume}
                className="w-full py-3 px-4 bg-purple-950/50 hover:bg-purple-900/60 border border-purple-800/50 text-purple-200 hover:text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-rose-400" />
                <span>Open Full CV / Resume Viewer</span>
              </button>
            </div>

            {/* Recruiter Availability badge */}
            <div className="p-4 bg-gradient-to-r from-rose-950/30 to-purple-950/30 border border-rose-500/30 rounded-xl text-xs text-rose-200 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
              <span>Available for technical assessments, take-home exercises, and interviews.</span>
            </div>
          </div>

          {/* Right Column: Send a Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#0E0C1C] border border-purple-950 rounded-2xl shadow-xl">
              <h3 className="text-base font-bold text-white mb-2 font-heading">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Recruiters, hiring managers, and collaborators: feel free to reach out directly.
              </p>

              {formSubmitted ? (
                <div className="p-6 bg-slate-900 border border-emerald-800/50 rounded-xl text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-heading">Message Ready to Send</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Your email client has been opened to send your inquiry to <span className="font-mono text-rose-300">{PERSONAL_INFO.email}</span>. Thank you for reaching out!
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-purple-950 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Your Work Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="s.jenkins@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-purple-950 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Subject</label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-purple-950 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500"
                    >
                      <option value="Junior Software Developer Role">Junior Software Developer Role</option>
                      <option value="Frontend Developer Opportunity">Frontend Developer Opportunity</option>
                      <option value="Technical Interview Request">Technical Interview Request</option>
                      <option value="Project Collaboration / Inquiries">Project Collaboration / Inquiries</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Simangele, we came across your projects (MathSpark, FreshBite) and would like to discuss an opportunity on our engineering team..."
                      className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-purple-950 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-950/50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Simangele</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
