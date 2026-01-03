
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Projects = ({ onOpenModal }) => {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'AI', 'Full Stack', 'PHP', 'Frontend'];
  
  const filteredProjects = PROJECTS.filter(project => 
    filter === 'All' ? true : project.category === filter
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em] mb-4">Curated Work</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Professional Portfolio</h3>
          
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setShowAll(false); }}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 min-h-[400px]">
          {displayedProjects.length > 0 ? displayedProjects.map((project, idx) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-zinc-700 shadow-sm hover:shadow-2xl dark:hover:shadow-orange-900/10 transition-all duration-500 group flex flex-col cursor-pointer fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => onOpenModal(project)}
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img 
                  src={project.thumbnail} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-orange-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"/></svg>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur text-orange-600 text-[9px] font-black rounded-full uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">{project.name}</h4>
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
            </div>
          )) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-400 font-bold uppercase tracking-widest">No projects found in this category.</p>
            </div>
          )}
        </div>

        {filteredProjects.length > 3 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-3 px-12 py-5 bg-white dark:bg-zinc-800 border-2 border-slate-100 dark:border-zinc-700 text-slate-900 dark:text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-orange-50 dark:hover:bg-orange-950/20 hover:border-orange-500 transition-all shadow-sm"
            >
              {showAll ? 'Collapse' : `Load ${filteredProjects.length - 3} More`}
              <svg className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
