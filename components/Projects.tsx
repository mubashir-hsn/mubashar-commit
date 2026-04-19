
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = ({ onOpenModal }) => {
  const [filter, setFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(3);

  const categories = ['All', 'AI', 'Full Stack', 'PHP', 'Frontend'];

  const filteredProjects = PROJECTS.filter(project =>
    filter === 'All' ? true : project.category === filter
  );

  const handleFilterChange = (cat) => {
    setFilter(cat);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em] mb-4">Curated Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Professional Portfolio</h3>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-100 dark:shadow-none'
                    : 'bg-white dark:bg-zinc-800 text-slate-400 hover:text-orange-500 border border-slate-100 dark:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full h-[550px] flex items-center justify-center overflow-hidden mb-4 group" style={{ perspective: '1200px' }}>
          {filteredProjects.length > 0 ? (
            <AnimatePresence initial={false}>
              {filteredProjects.map((project, idx) => {
                const diff = idx - currentIndex;
                const absDiff = Math.abs(diff);

                // Hide cards that are far away
                if (absDiff > 2) return null;

                const isActive = diff === 0;

                return (
                  <motion.div
                    key={project.id}
                    className={`absolute w-[80%] max-w-[320px] md:max-w-[420px] bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-zinc-700 shadow-xl flex flex-col ${
                      isActive ? 'cursor-pointer shadow-2xl dark:shadow-orange-900/20 z-30' : 'cursor-pointer z-10'
                    }`}
                    onClick={() => {
                      if (isActive) onOpenModal(project);
                      else setCurrentIndex(idx);
                    }}
                    initial={{ opacity: 0, x: diff > 0 ? 200 : -200, scale: 0.8 }}
                    animate={{
                      opacity: isActive ? 1 : 1 - absDiff * 0.3,
                      x: `${diff * 65}%`, // Offset horizontally based on distance from center
                      scale: isActive ? 1 : 1 - absDiff * 0.15,
                      rotateY: diff * -15, // Creates a 3D turning effect (left items turn right, right items turn left)
                      zIndex: 30 - absDiff,
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img
                        src={project.thumbnail}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        draggable={false}
                      />
                      <div className={`absolute inset-0 bg-transparent flex items-center justify-center transition-all duration-300 ${isActive ? 'hover:bg-orange-600/40' : ''}`}>
                        {isActive && (
                          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur text-orange-600 text-[9px] font-black rounded-full uppercase tracking-widest">
                          {project.category}
                        </span>
                      </div>
                      {!isActive && (
                        <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-[2px] transition-all duration-500" />
                      )}
                    </div>
                    <div className="p-8 flex-grow">
                      <h4 className="text-xl font-black text-slate-900 dark:text-white mb-3 hover:text-orange-500 transition-colors">{project.name}</h4>
                      <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    <div className="px-8 pb-8 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="text-[10px] px-2.5 py-1 bg-slate-50 dark:bg-zinc-900 uppercase tracking-tighter font-bold text-slate-400 dark:text-zinc-500 rounded-lg">
                          #{tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          ) : (
            <div className="py-20 text-center w-full">
              <p className="text-slate-400 font-bold uppercase tracking-widest">No projects found in this category.</p>
            </div>
          )}

          {/* Navigation Controls Overlay */}
          {filteredProjects.length > 0 && (
            <>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`absolute left-2 sm:left-4 md:left-8 z-40 p-3 sm:p-4 rounded-full border-2 transition-all duration-300 ${
                  currentIndex === 0
                    ? 'border-slate-100 dark:border-zinc-800/80 text-slate-300 dark:text-zinc-600 cursor-not-allowed bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md'
                    : 'border-slate-200 dark:border-zinc-600 text-slate-600 dark:text-zinc-300 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md hover:bg-orange-500 hover:border-orange-500 hover:text-white dark:hover:bg-orange-500 shadow-lg hover:shadow-orange-500/25 cursor-pointer'
                }`}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex === filteredProjects.length - 1}
                className={`absolute right-2 sm:right-4 md:right-8 z-40 p-3 sm:p-4 rounded-full border-2 transition-all duration-300 ${
                  currentIndex === filteredProjects.length - 1
                    ? 'border-slate-100 dark:border-zinc-800/80 text-slate-300 dark:text-zinc-600 cursor-not-allowed bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md'
                    : 'border-slate-200 dark:border-zinc-600 text-slate-600 dark:text-zinc-300 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md hover:bg-orange-500 hover:border-orange-500 hover:text-white dark:hover:bg-orange-500 shadow-lg hover:shadow-orange-500/25 cursor-pointer'
                }`}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </button>
            </>
          )}
        </div>

        {/* Counter Indicator purely for visual context under the slider */}
        {filteredProjects.length > 0 && (
          <div className="flex justify-center text-[11px] font-black text-slate-400 dark:text-zinc-500 tracking-[0.2em] uppercase">
            {currentIndex + 1} <span className="mx-2 opacity-50">/</span> {filteredProjects.length}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

