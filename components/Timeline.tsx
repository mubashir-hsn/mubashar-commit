
import React from 'react';
import { WORK_EXPERIENCE, EDUCATION } from '../constants';

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-slate-50 dark:bg-zinc-950 transition-colors border-b border-slate-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24">
          
          {/* Experience */}
          <div>
            <div className="flex items-center gap-6 mb-16">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-orange-100 dark:shadow-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">Experience</h3>
            </div>
            
            <div className="space-y-16 relative before:absolute before:inset-y-0 before:left-[1.95rem] before:w-[2px] before:bg-slate-200 dark:before:bg-zinc-800">
              {WORK_EXPERIENCE.map((job) => (
                <div key={job.id} className="relative pl-24 group">
                  <div className="absolute left-6 top-2 w-[0.85rem] h-[0.85rem] bg-orange-500 rounded-full z-10 border-4 border-slate-50 dark:border-zinc-950 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.2em] mb-2 block">{job.duration}</span>
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white leading-tight mb-2">{job.role}</h4>
                    <p className="text-slate-400 dark:text-zinc-500 font-bold mb-6 text-sm">{job.company}</p>
                    <p className="text-slate-500 dark:text-zinc-400 leading-relaxed text-sm max-w-md">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-6 mb-16">
              <div className="w-16 h-16 bg-slate-900 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-white shadow-2xl dark:shadow-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 14l9-5-9-5-9 5 9 5z"/></svg>
              </div>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">Education</h3>
            </div>

            <div className="space-y-16 relative before:absolute before:inset-y-0 before:left-[1.95rem] before:w-[2px] before:bg-slate-200 dark:before:bg-zinc-800">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="relative pl-24 group">
                  <div className="absolute left-6 top-2 w-[0.85rem] h-[0.85rem] bg-slate-900 dark:bg-zinc-400 rounded-full z-10 border-4 border-slate-50 dark:border-zinc-950 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 block">{edu.duration}</span>
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white leading-tight mb-2">{edu.degree}</h4>
                    <p className="text-slate-500 dark:text-zinc-400 font-bold text-sm">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;
