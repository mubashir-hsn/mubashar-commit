
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import CustomCursor from './components/CustomCursor';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const links = [
    {name:'GITHUB' , url: 'https://github.com/mubashir-hsn'},
    {name:'LINKEDIN' , url: 'https://www.linkedin.com/in/mubashir-hsn'},
    {name:'TWITTER' , url: '#'},
  ]
  return (
    <>
      <CustomCursor/>
      <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors duration-300 font-sans">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onOpenModal={(project) => setSelectedProject(project)} />
        <Timeline />
        <Contact />
      </main>

      <footer className="py-20 bg-white dark:bg-zinc-900 border-t border-slate-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-3xl font-black text-orange-500 mb-8 tracking-tighter">MUBASHAR.</div>
          <div className="flex justify-center gap-10 mb-12">
            {links.map(link => (
              <a key={link.name} href={link.url} target="_blank" className="text-slate-400 dark:text-zinc-500 hover:text-orange-500 transition-all text-xs font-black uppercase tracking-widest">
                {link.name}
              </a>
            ))}
          </div>
          <p className="text-slate-500 dark:text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Mubashar Hassan — Handcrafted with precision.
          </p>
        </div>
      </footer>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
    </>
  );
};

export default App;
