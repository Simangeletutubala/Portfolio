import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#0A0816]/90 backdrop-blur-md border-purple-950/80 shadow-lg shadow-black/30'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element brand wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white hover:text-rose-400 transition-colors font-heading whitespace-nowrap flex items-center gap-2"
        >
          <span>{PERSONAL_INFO.name}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 hidden sm:inline-block" />
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-rose-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-rose-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action button(s) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-rose-200 hover:text-white bg-rose-950/40 hover:bg-rose-900/50 border border-rose-800/40 rounded-lg transition-colors whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-rose-400" />
            <span>View CV</span>
          </button>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-400 hover:to-purple-500 rounded-lg transition-colors shadow-sm shadow-rose-950/40 whitespace-nowrap"
          >
            <Send className="w-3 h-3" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 text-xs font-semibold text-rose-300 border border-rose-800/50 rounded-lg"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-purple-950 bg-[#0F0C1E] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-300 hover:text-rose-400 transition-colors py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-purple-950 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 text-xs font-semibold text-rose-200 bg-rose-950/60 border border-rose-800/60 rounded-lg text-center"
            >
              Curriculum Vitae
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-purple-600 text-center rounded-lg"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
