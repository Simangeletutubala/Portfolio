import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Code2, Server, Database, Wrench, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code2 className="w-5 h-5 text-rose-400" />;
      case 'Backend':
        return <Server className="w-5 h-5 text-purple-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Tools':
        return <Wrench className="w-5 h-5 text-sky-400" />;
      default:
        return <Code2 className="w-5 h-5 text-rose-400" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(cat => cat.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="skills" className="py-20 sm:py-24 border-b border-purple-950/60 bg-[#0B0918]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02 · Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Technical Skills
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Organized by layer of the modern web stack. Practiced through full-stack projects, intensive training programs, and practical problem-solving.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-900/90 border border-purple-950 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Stacks
            </button>
            {SKILLS_DATA.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category.toLowerCase())}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat.category.toLowerCase()
                    ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredCategories.map((catGroup) => (
            <div
              key={catGroup.category}
              className="p-6 bg-[#0E0C1C] border border-purple-950/80 rounded-2xl hover:border-purple-800/60 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-purple-950 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-950/60 border border-purple-900/40 rounded-xl">
                      {getCategoryIcon(catGroup.category)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-heading">{catGroup.category}</h3>
                      <span className="text-xs text-slate-400">{catGroup.skills.length} core technologies</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {catGroup.description}
                </p>

                {/* Skills list with unboxed metadata discipline */}
                <div className="space-y-3">
                  {catGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 bg-slate-950/60 border border-purple-950/60 rounded-xl hover:border-purple-800/60 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-white font-heading">{skill.name}</span>
                        <span className="text-xs text-rose-300 font-mono">{skill.level}</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        {skill.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag text */}
              <div className="mt-5 pt-4 border-t border-purple-950 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Domain: {catGroup.category.toUpperCase()}</span>
                <span className="text-rose-400/80">Production Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
