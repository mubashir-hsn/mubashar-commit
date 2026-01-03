
import React, { useState } from 'react';

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const images = project.images || [project.thumbnail];

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-slate-900/30 dark:bg-black/95 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white dark:bg-zinc-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[1rem] shadow-2xl fade-in-up border border-slate-200 dark:border-zinc-800">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-30 p-3 bg-white/90 dark:bg-zinc-800/90 backdrop-blur rounded-full hover:bg-orange-500 hover:text-white transition-all shadow-xl text-slate-900 dark:text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        {/* Top Image Slider */}
        <div className="relative w-full aspect-video md:aspect-[21/9] bg-slate-100 dark:bg-zinc-950 overflow-hidden group">
          <img 
            src={images[currentImageIndex]} 
            alt={project.name}
            className="w-full h-full object-contain transition-all duration-700"
          />
          
          {images.length > 1 && (
            <>
              <button onClick={prevImage} className="absolute left-6 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-black/20 hover:bg-white backdrop-blur rounded-2xl text-white hover:text-orange-600 transition-all opacity-0 group-hover:opacity-100 shadow-2xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={nextImage} className="absolute right-6 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-black/20 hover:bg-white backdrop-blur rounded-2xl text-white hover:text-orange-600 transition-all opacity-0 group-hover:opacity-100 shadow-2xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
              </button>
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                {images.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); }}
                    className={`h-1.5 transition-all rounded-full ${i === currentImageIndex ? 'w-8 bg-orange-500' : 'w-2 bg-orange-600/40 hover:bg-orange-600/60'}`} 
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1.5 bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-black rounded-full uppercase tracking-widest border border-orange-200 dark:border-orange-500/20">
                  {project.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-zinc-700"></span>
                <span className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">Project ID: {project.id}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">{project.name}</h2>
            </div>
            <div className="flex items-center gap-4">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" className="p-4 bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-white rounded-2xl hover:bg-orange-500 hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              )}
              {project.livePreview && (
                <a href={project.livePreview} target="_blank" className="px-8 py-4 bg-orange-500 text-white font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 dark:shadow-none flex items-center gap-3">
                  Live View
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 border-t border-slate-100 dark:border-zinc-800 pt-12">
            
            {/* Overview Column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 dark:bg-blue-500/10 text-blue-600 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Brief Overview</h3>
              </div>
              <p className="text-xl text-slate-600 dark:text-zinc-400 leading-relaxed font-medium mb-10">
                {project.description}
              </p>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-50 dark:bg-orange-500/10 text-orange-600 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z"/></svg>
                </div>
                <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Key Features</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {project.features?.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl border border-slate-100 dark:border-zinc-800">
                    <svg className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    <span className="text-sm font-bold text-slate-700 dark:text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-50 dark:bg-purple-500/10 text-purple-600 rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                  </div>
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-200 text-[10px] font-black rounded-xl border border-slate-200 dark:border-zinc-700 uppercase tracking-tight hover:border-orange-500 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-slate-900 dark:bg-orange-500 rounded-[2rem] text-white overflow-hidden relative group">
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                <h4 className="text-lg font-black tracking-tight mb-2">Want a similar solution?</h4>
                <p className="text-white/60 text-xs font-bold leading-relaxed mb-6">Let's discuss how we can adapt this architecture for your specific needs.</p>
                <a href="#contact" onClick={onClose} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:gap-4 transition-all">
                  Let's Talk <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
