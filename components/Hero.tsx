
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center py-32 lg:py-52 overflow-hidden bg-white dark:bg-zinc-950 bg-grid-pattern dark:bg-grid-pattern-dark">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-200/20 dark:bg-orange-500/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-200/20 dark:bg-blue-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-[11px] font-black tracking-[0.2em] text-orange-600 uppercase bg-orange-100/50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/50 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Digital Architect & Engineer
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 leading-[0.9]">
              Crafting <span className="text-orange-500">Future</span> Web Experiences.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 dark:text-zinc-400 leading-relaxed mb-10 max-w-lg font-medium">
              I'm <span className="text-slate-900 dark:text-white font-bold">Mubashar Hassan</span>. I build resilient, high-performance applications through intuitive design and rigorous engineering.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12">
              <a 
                href="#projects" 
                className="group relative px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black transition-all shadow-xl shadow-orange-200 dark:shadow-none uppercase tracking-widest text-[11px] flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">See My Work</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </a>
              
              <div className="flex items-center gap-5">
                {[
                  { name: 'GitHub', url: 'https://github.com/mubashir-hsn', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path> },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mubashir-hsn', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path> },
                ].map((social) => (
                  <a key={social.name} href={social.url} target="_blank" className="p-3 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-400 hover:text-orange-500 hover:border-orange-500 rounded-xl transition-all shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block fade-in-up" style={{ animationDelay: '0.3s' }}>
            {/* Big Card (Main Image) */}
            <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-zinc-900 float">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000" 
                alt="Workspace" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[3s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent"></div>
            </div>
            
            {/* Short Cards (Badges) positioned on top of the big card */}
            <div className="absolute top-8 -right-8 p-6 bg-white dark:bg-zinc-900 shadow-2xl rounded-3xl border border-slate-100 dark:border-zinc-800 rotate-6 float z-20" style={{ animationDelay: '1s' }}>
              <div className="text-3xl font-black text-orange-500">12+</div>
              <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Projects Live</div>
            </div>
            
            <div className="absolute bottom-12 -left-8 p-6 bg-white dark:bg-zinc-900 shadow-2xl rounded-3xl border border-slate-100 dark:border-zinc-800 -rotate-3 float z-20" style={{ animationDelay: '2.5s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div>
                  <div className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">MERN Stack</div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Mastery Level</div>
                </div>
              </div>
            </div>

            {/* Background decorative element */}
            <div className="absolute -inset-4 bg-orange-500/10 rounded-[4rem] -z-10 blur-2xl"></div>
          </div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 bg-gradient-to-b from-orange-500/50 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
