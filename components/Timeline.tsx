import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { WORK_EXPERIENCE, EDUCATION } from '../constants';

const timelineEvents = [
  ...WORK_EXPERIENCE.map((job) => ({
    role: job.role,
    company: job.company,
    period: job.duration,
    description: job.description,
    type: 'work',
  })),
  ...EDUCATION.map((edu) => ({
    role: edu.degree,
    company: edu.institution,
    period: edu.duration,
    description: '',
    type: 'edu',
  })),
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24 bg-slate-50/50 dark:bg-zinc-950 relative overflow-hidden transition-colors">
      {/* Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-orange-200/20 dark:bg-orange-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[5%] right-[-10%] w-[600px] h-[600px] bg-orange-100/30 dark:bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-50/40 dark:bg-orange-300/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20 z-10 relative">
          <h2 className="text-sm font-bold text-primary-500 tracking-[0.2em] uppercase mb-4">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-zinc-100">
            Experience & Education<span className="text-primary-500">.</span>
          </h3>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {timelineEvents.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 md:gap-0 relative ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Desktop Center Icon */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex w-12 h-12 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md items-center justify-center z-10 border border-white dark:border-white/20 shadow-sm dark:shadow-lg">
                  {exp.type === 'work' ? (
                    <Briefcase className="w-5 h-5 text-primary-500" />
                  ) : (
                    <GraduationCap className="w-5 h-5 text-primary-500" />
                  )}
                </div>

                {/* Content Side */}
                <div className="md:w-1/2 md:px-12">
                  <div
                    className={`relative p-8 rounded-[2rem] border border-white/80 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-2xl hover:bg-white/80 dark:hover:bg-white/10 hover:border-white dark:hover:border-primary-500/50 transition-all duration-300 group shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden text-left`}
                  >
                    {/* Inner glowing highlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-white/90 dark:from-white/10 dark:to-white/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <span className="relative text-primary-500 text-[10px] font-bold tracking-widest uppercase mb-2 block">
                      {exp.period}
                    </span>
                    <h4 className="relative text-2xl font-bold mb-1 text-slate-800 dark:text-zinc-100">{exp.role}</h4>
                    <div className="relative text-slate-500 dark:text-zinc-400 font-medium mb-4">{exp.company}</div>
                    {exp.description && (
                      <p className="relative text-slate-600 dark:text-zinc-300 text-sm leading-relaxed">{exp.description}</p>
                    )}
                  </div>
                </div>

                {/* Empty Side for Spacing */}
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
