import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Send } from 'lucide-react';
import { DEVELOPER_INFO } from '../data';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', target: 'hero' },
    { label: 'Projetos', target: 'projetos' },
    { label: 'Sobre', target: 'sobre' },
    { label: 'Tecnologias', target: 'skills' },
    { label: 'Experiência', target: 'experiencia' },
    { label: 'Contato', target: 'contato' },
  ];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navbar
      const yOffset = -70; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-white/[0.02] backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Monogram */}
          <button
            type="button"
            onClick={() => handleScrollTo('hero')}
            className="group flex items-center gap-1.5 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(0,229,255,0.35)]">
              {/* Monogram */}
              <span className="text-zinc-200 font-serif font-bold italic text-base group-hover:text-cyan-200">K</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-serif italic text-white tracking-wide font-semibold">{DEVELOPER_INFO.name}</span>
              <span className="text-[8px] font-mono text-zinc-500 tracking-widest">{DEVELOPER_INFO.title}</span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 bg-white/[0.04] border border-white/10 px-5 py-2 rounded-full backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            {navItems.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => handleScrollTo(item.target)}
                className={`cursor-pointer text-[10px] uppercase font-mono tracking-widest px-2.5 py-1.5 rounded-full transition-all duration-300 relative ${
                  activeSection === item.target
                    ? 'text-white font-bold'
                    : 'text-zinc-500 hover:text-zinc-350'
                }`}
              >
                {activeSection === item.target && (
                  <motion.span
                    layoutId="activeBubbleNav"
                    className="absolute inset-0 bg-white/[0.08] border border-white/10 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </div>

          {/* Luxury Action Badge button */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={DEVELOPER_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-pointer text-[9px] font-sans font-semibold uppercase tracking-wider bg-white/[0.04] hover:bg-white/[0.08] text-[#00e5ff] hover:text-white border border-[#00e5ff]/20 px-4 py-2 rounded-full transition-all flex items-center gap-1.5 backdrop-blur-md"
            >
              <span>WhatsApp</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-400 hover:text-white cursor-pointer bg-zinc-950 border border-zinc-900 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-zinc-950/98 border-b border-zinc-900 backdrop-blur-2xl p-6 flex flex-col md:hidden space-y-6"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => handleScrollTo(item.target)}
                  className={`text-left text-xs uppercase font-mono tracking-widest py-2 border-b border-zinc-900/60 ${
                    activeSection === item.target
                      ? 'text-cyan-400 font-bold'
                      : 'text-zinc-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-zinc-900">
              <a
                href={DEVELOPER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl bg-cyan-950/50 border border-cyan-800 text-cyan-200 text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5"
              >
                Conversar no WhatsApp
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <div className="flex justify-center gap-4 py-2">
                <a href={DEVELOPER_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-full hover:text-white">
                  <Github className="w-4 h-4" />
                </a>
                <a href={DEVELOPER_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-full hover:text-white">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
