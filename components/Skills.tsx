
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const SkillIcon = ({ name }) => {
  switch (name) {
    case 'code':
      return <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
    case 'monitor':
      return <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
    case 'database':
      return <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>;
    case 'cpu':
      return <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>;
    default:
      return null;
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-white dark:bg-zinc-950 transition-colors relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[11px] font-semibold text-orange-600 uppercase tracking-[0.4em] mb-4 inline-block py-1 border-b-2 border-orange-500/20">Technical Arsenal</h2>
            <h3 className="text-4xl md:text-6xl font-semibold text-slate-900 dark:text-white tracking-tighter leading-none">
              Architecting Logic, <br />
              Crafting <span className="text-orange-500">Interfaces</span>.
            </h3>
          </div>
          <p className="text-lg text-slate-500 dark:text-zinc-400 max-w-sm font-medium leading-relaxed">
            I combine modular backend architecture with fluid frontend experiences to build scalable digital products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 bg-slate-50 dark:bg-zinc-900/50 rounded-[2.5rem] border border-slate-100 dark:border-zinc-800 hover:border-orange-500/50 dark:hover:border-orange-500/30 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="mb-8 p-4 bg-white dark:bg-zinc-800 w-fit rounded-2xl text-slate-900 dark:text-white shadow-sm border border-slate-100 dark:border-zinc-700 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                <SkillIcon name={category.icon} />
              </div>

              <h4 className="text-2xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight flex items-center gap-3">
                {category.title}
                <span className="h-1 w-0 bg-orange-500 rounded-full group-hover:w-8 transition-all duration-500"></span>
              </h4>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 text-[10px] font-black rounded-xl border border-slate-200 dark:border-zinc-700 uppercase tracking-tight transition-all duration-300 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-500/50 hover:bg-orange-50 dark:hover:bg-orange-500/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Premium Showcase Banner */}
        <div className="mt-24 relative rounded-[3rem] overflow-hidden group">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-[url('/it.webp')] md:bg-fixed bg-cover bg-center"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/90 via-zinc-900/80 to-orange-950/70" />
          {/* Animated Floating Orbs */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-[60px] animate-pulse pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/15 rounded-full blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-orange-400/10 rounded-full blur-[40px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          {/* Content */}
          <div className="relative z-10 px-6 sm:px-12 md:px-20 py-16 md:py-24 flex flex-col items-center text-center gap-10">
            {/* Glowing Badge */}
            <div className="px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm">
              <span className="text-orange-400 text-[10px] font-black uppercase tracking-[0.35em]">🚀 Always Learning</span>
            </div>

            {/* Main Heading */}
            <h4 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-tight max-w-3xl">
              Continually evolving <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">with the industry.</span>
            </h4>

            {/* Subtext */}
            <p className="text-zinc-400 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
              Technology moves fast. I prioritize lifelong learning and regular adaptation to the latest industry standards and frameworks.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-4">
              {[
                { value: '11+', label: 'Projects Built' },
                { value: '1+', label: 'Years Experience' },
                { value: '10+', label: 'Technologies' },
              ].map((stat) => (
                <div key={stat.label} className="px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/40 hover:bg-white/10 transition-all duration-500 min-w-[130px]">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">{stat.value}</div>
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-950/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
