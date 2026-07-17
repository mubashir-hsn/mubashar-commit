import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, ChevronRight, BookOpen } from 'lucide-react';
import { WORK_EXPERIENCE, EDUCATION } from '../constants';

export default function Timeline() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50/40 to-slate-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-300/40 dark:via-orange-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-300/40 dark:via-orange-500/20 to-transparent" />
      <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-orange-200/30 dark:bg-orange-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 -right-32 w-80 h-80 rounded-full bg-orange-100/40 dark:bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-[10px] font-black text-orange-600 dark:text-orange-500 tracking-[0.4em] uppercase mb-4">
            Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Experience & Education<span className="text-orange-500">.</span>
          </h3>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">

          {/* ─── LEFT: Work Experience ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 70 }}
          >
            {/* Column Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 dark:bg-orange-500/15 flex items-center justify-center border border-orange-500/20">
                <Briefcase className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h4 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">
                Work Experience
              </h4>
            </div>

            {/* Experience Cards */}
            <div className="space-y-6">
              {WORK_EXPERIENCE.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="relative p-7 md:p-8 rounded-3xl border border-slate-200/80 dark:border-white/8 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl hover:border-orange-400/50 dark:hover:border-orange-500/30 transition-all duration-500 shadow-sm hover:shadow-[0_8px_40px_rgba(249,115,22,0.1)] dark:hover:shadow-[0_8px_40px_rgba(249,115,22,0.05)]">
                    {/* Accent bar */}
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[11px] font-bold tracking-wide border border-orange-200/50 dark:border-orange-500/15">
                        <Calendar className="w-3 h-3" />
                        {job.duration}
                      </span>
                      {job.location && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/80 dark:bg-white/5 text-slate-500 dark:text-zinc-400 text-[11px] font-bold tracking-wide border border-slate-200/50 dark:border-white/8">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                      )}
                    </div>

                    {/* Role & Company */}
                    <h5 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white mb-1 tracking-tight">
                      {job.role}
                    </h5>
                    <p className="text-slate-500 dark:text-zinc-400 font-bold text-sm mb-4">
                      {job.company}
                    </p>

                    {/* Description */}
                    {job.description && (
                      <p className="text-slate-500 dark:text-zinc-500 text-sm leading-relaxed font-medium mb-5">
                        {job.description}
                      </p>
                    )}

                    {/* Highlights */}
                    {job.highlights && job.highlights.length > 0 && (
                      <ul className="space-y-3">
                        {job.highlights.map((point, hIdx) => (
                          <motion.li
                            key={hIdx}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: 0.1 * hIdx }}
                            className="flex items-start gap-2.5 group/item"
                          >
                            <ChevronRight className="w-4 h-4 mt-0.5 text-orange-500 dark:text-orange-400 flex-shrink-0 group-hover/item:translate-x-0.5 transition-transform duration-300" />
                            <span className="text-[13px] text-slate-600 dark:text-zinc-400 leading-relaxed font-medium">
                              {point}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─── RIGHT: Education ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 70 }}
          >
            {/* Column Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 dark:bg-orange-500/15 flex items-center justify-center border border-orange-500/20">
                <GraduationCap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h4 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">
                Education
              </h4>
            </div>

            {/* Education Cards */}
            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="relative p-7 md:p-8 rounded-3xl border border-slate-200/80 dark:border-white/8 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl hover:border-orange-400/50 dark:hover:border-orange-500/30 transition-all duration-500 shadow-sm hover:shadow-[0_8px_40px_rgba(249,115,22,0.1)] dark:hover:shadow-[0_8px_40px_rgba(249,115,22,0.05)]">
                    {/* Accent bar */}
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Duration Badge */}
                    <div className="mb-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[11px] font-bold tracking-wide border border-orange-200/50 dark:border-orange-500/15">
                        <Calendar className="w-3 h-3" />
                        {edu.duration}
                      </span>
                    </div>

                    {/* Degree & Institution */}
                    <h5 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white mb-1 tracking-tight">
                      {edu.degree}
                    </h5>
                    <p className="text-slate-500 dark:text-zinc-400 font-bold text-sm mb-6">
                      {edu.institution}
                    </p>

                    {/* Relevant Courses */}
                    {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <BookOpen className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                          <span className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-[0.2em]">
                            Relevant Courses
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.relevantCourses.map((course, cIdx) => (
                            <motion.span
                              key={cIdx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.06 * cIdx }}
                              className="px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/8 text-[12px] font-bold text-slate-600 dark:text-zinc-400 hover:border-orange-400/50 dark:hover:border-orange-500/30 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 cursor-default"
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
