
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-zinc-950 transition-colors relative overflow-hidden border-y border-slate-100 dark:border-zinc-900">
       
     <div className="absolute right-2 top-1 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Element */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800">
              <img 
                src="/about.png" 
                alt="Profile" 
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative boxes */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-500 rounded-[2rem] -z-10 opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500 rounded-[3rem] -z-10 opacity-10"></div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7">
            <h2 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.4em] mb-6 inline-block py-1 border-b-2 border-orange-500/20">About Discovery</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-tight">
              Driven by logic, <br/>Defined by <span className="text-orange-500">Design</span>.
            </h3>
            
            <div className="space-y-6 text-lg text-slate-500 dark:text-zinc-400 leading-relaxed max-w-2xl font-medium">
              <p>
                My journey as a Software Engineer at <span className="text-slate-900 dark:text-white font-black">PMAS - Arid University</span> has been fueled by a relentless curiosity for how things work under the hood. I don't just write code; I architect solutions that scale.
              </p>
              <p>
                I specialize in the <span className="text-slate-900 dark:text-white font-bold underline decoration-orange-500 decoration-2">MERN Ecosystem</span> and <span className="text-slate-900 dark:text-white font-bold underline decoration-blue-500 decoration-2">AI Integrations</span>, focusing on bridge the gap between complex backend systems and human-centric interfaces.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              {[
                { label: 'Experience', val: '02+', sub: 'Years Pro' },
                { label: 'Projects', val: '10+', sub: 'Completed' },
                { label: 'Commitment', val: '100%', sub: 'Focused' },
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all group">
                  <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter group-hover:text-orange-500 transition-colors">{stat.val}</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">{stat.label}</div>
                  <div className="text-[9px] font-bold text-orange-500/60 uppercase tracking-widest">{stat.sub}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-6">
               <a href="/CV_Mubashar.pdf" download className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-orange-500 dark:hover:bg-orange-500 dark:hover:text-white transition-all shadow-xl">
                 Download CV
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
