import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { WORK_EXPERIENCE, EDUCATION } from '../constants';

const timelineEvents = [
  ...WORK_EXPERIENCE.map((job) => ({
    role: job.role,
    company: job.company,
    period: job.duration,
    location: job.location || '',
    description: job.description,
    highlights: job.highlights || [],
    type: 'work' as const,
  })),
  ...EDUCATION.map((edu) => ({
    role: edu.degree,
    company: edu.institution,
    period: edu.duration,
    location: '',
    description: '',
    highlights: [] as string[],
    type: 'edu' as const,
  })),
];

const floatingBoxes = [
  { size: 'w-48 h-48 md:w-64 md:h-64', left: '10%', top: '15%', z: -200, dur: 20 },
  { size: 'w-32 h-32 md:w-48 md:h-48', left: '75%', top: '65%', z: -100, dur: 25 },
  { size: 'w-40 h-40 md:w-56 md:h-56', left: '60%', top: '10%', z: -300, dur: 22 },
  { size: 'w-24 h-24 md:w-40 md:h-40', left: '20%', top: '70%', z: -150, dur: 18 },
  { size: 'w-64 h-64 md:w-80 md:h-80', left: '40%', top: '35%', z: -400, dur: 30 },
];

export default function Timeline() {
  return (
    <section id="experience" className="relative bg-orange-50 dark:bg-zinc-950 transition-colors">

      {/* Sticky 3D Background Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden" style={{ perspective: '1200px' }}>
        <div className="absolute inset-0 bg-white dark:bg-zinc-950 transition-colors" />

        {/* Animated 3D Orange Boxes */}
        {floatingBoxes.map((box, i) => (
          <motion.div
            key={i}
            className={`absolute ${box.size} rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 dark:from-orange-600 dark:to-orange-800 shadow-[0_0_40px_rgba(249,115,22,0.4)] opacity-70`}
            style={{
              left: box.left,
              top: box.top,
              rotateX: 45 + (i * 15),
              rotateY: 20 - (i * 10),
            }}
            animate={{
              rotateX: [45 + (i * 15), 45 + (i * 15) + 360],
              rotateY: [20 - (i * 10), 20 - (i * 10) + 360],
              y: [0, -40, 0],
              z: [box.z, box.z + 100, box.z]
            }}
            transition={{
              duration: box.dur,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/40 dark:bg-black/20 pointer-events-none" />
      </div>

      {/* Cards Layer */}
      <div className="relative z-10 w-full pb-32 -mt-[100vh] pt-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20 relative">
            <h2 className="text-[10px] font-black text-orange-600 dark:text-orange-500 tracking-[0.4em] uppercase mb-4 drop-shadow-sm">Journey</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white drop-shadow-md">
              Experience & Education<span className="text-orange-500">.</span>
            </h3>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-orange-200 dark:bg-white/10 md:-translate-x-1/2 drop-shadow-sm" />

            <div className="space-y-16">
              {timelineEvents.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 80, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, type: "spring", stiffness: 80, damping: 20 }}
                  className={`flex flex-col md:flex-row gap-8 md:gap-0 relative group perspective-1000 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Desktop Center Icon */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 hidden md:flex w-14 h-14 rounded-full bg-white/60 dark:bg-zinc-800/80 backdrop-blur-xl items-center justify-center z-20 border-2 border-orange-200 dark:border-orange-500/30 shadow-[0_4px_20px_rgba(249,115,22,0.3)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.6)] group-hover:scale-125 group-hover:border-orange-500 transition-all duration-500">
                    {exp.type === 'work' ? (
                      <Briefcase className="w-6 h-6 text-orange-600 dark:text-orange-500 drop-shadow-sm" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-orange-600 dark:text-orange-500 drop-shadow-sm" />
                    )}
                  </div>

                  {/* Content Side */}
                  <div className={`md:w-1/2 ml-6 md:ml-0 group-hover:-translate-y-2 transition-transform duration-700 ${exp.type === 'work' && exp.highlights.length > 0 ? 'md:px-8' : 'md:px-12'}`}>
                    <div
                      className="relative p-8 rounded-[2.5rem] border border-white/60 dark:border-white/10 bg-white/40 dark:bg-black/30 backdrop-blur-3xl hover:bg-white/60 dark:hover:bg-black/50 hover:border-orange-500/50 transition-all duration-500 shadow-[0_8px_32px_rgba(249,115,22,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden text-left"
                    >
                      {/* Inner glowing highlight */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/70 dark:from-white/0 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500" />

                      {/* Glass Sheen Reflection */}
                      <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

                      {/* Period & Location Badges */}
                      <div className="relative flex flex-wrap items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[11px] font-bold tracking-wide">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/80 dark:bg-white/5 text-slate-600 dark:text-zinc-400 text-[11px] font-bold tracking-wide">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        )}
                      </div>

                      {/* Role & Company */}
                      <h4 className="relative text-2xl font-black mb-1 text-slate-800 dark:text-white drop-shadow-sm">{exp.role}</h4>
                      <div className="relative text-slate-600 dark:text-zinc-300 font-bold mb-4 drop-shadow-sm">{exp.company}</div>

                      {/* Description */}
                      {exp.description && (
                        <p className="relative text-slate-500 dark:text-zinc-400 text-sm leading-relaxed font-medium mb-4">{exp.description}</p>
                      )}

                      {/* Highlights / Bullet Points */}
                      {exp.highlights.length > 0 && (
                        <ul className="relative space-y-3 mt-4">
                          {exp.highlights.map((highlight, hIdx) => (
                            <motion.li
                              key={hIdx}
                              initial={{ opacity: 0, x: -16 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.15 * hIdx }}
                              className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-zinc-400 leading-relaxed group/item"
                            >
                              <ChevronRight className="w-4 h-4 mt-0.5 text-orange-500 dark:text-orange-400 flex-shrink-0 group-hover/item:translate-x-0.5 transition-transform duration-300" />
                              <span className="font-medium">{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Empty Side for Spacing */}
                  <div className="md:w-1/2 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
