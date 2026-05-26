import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  MessageSquare, 
  Calendar, 
  Award, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Download, 
  ChevronDown, 
  User, 
  Mail, 
  Layers, 
  Cpu, 
  Terminal, 
  Database,
  ArrowUpRight
} from 'lucide-react';

import { DEVELOPER_INFO, PROJECTS } from './data';
import { ParticleBackground } from './components/ParticleBackground';
import { ActiveAbout } from './components/ActiveAbout';
import { TechStack } from './components/TechStack';
import { Navbar } from './components/Navbar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { 
  ApexAnalyticsMock, 
  VortexCommerceMock, 
  QuantumLedgerMock,
  NotebookMockup
} from './components/ProjectMockups';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  
  // Contact Form state variables
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formBudget, setFormBudget] = useState('Não especificado');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Parallax background movement coordinates based on mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Scale mouse position between -20 and 20 pixels
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['hero', 'sobre', 'projetos', 'skills', 'contato'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // sticky navbar compensation
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setIsSubmitting(true);
    // Simulate real database receipt simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      console.log('Premium Claim Ticket dispatched safely:', {
        name: formName,
        email: formEmail,
        budget: formBudget,
        message: formMessage,
        date: new Date().toISOString()
      });
    }, 1500);
  };

  const resetContactForm = () => {
    setFormName('');
    setFormEmail('');
    setFormMessage('');
    setFormSubmitted(false);
  };

  return (
    <div className="relative min-h-screen bg-[#020203] text-zinc-100 overflow-x-hidden font-sans selection:bg-cyan-500/35 selection:text-white">
      {/* Mesh glow dynamic gradients */}
      <div className="mesh-gradient opacity-90" />

      {/* Dynamic star particles background */}
      <ParticleBackground />

      {/* Floating subtle ambient glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-900/10 blur-[150px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-zinc-900/10 blur-[150px] pointer-events-none z-0"></div>

      {/* Transparent Sticky Navbar */}
      <Navbar activeSection={activeSection} />

      {/* 1. HERO MAIN SECTION */}
      <section
        id="hero"
        className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 pt-32 pb-12 overflow-hidden z-10"
      >
        {/* Aesthetic vertical rails inspired by Linear website */}
        <div className="absolute inset-y-0 left-10 md:left-20 w-[1px] bg-zinc-900/40 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-10 md:right-20 w-[1px] bg-zinc-900/40 pointer-events-none"></div>

        <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center items-center text-center relative">
          
          {/* Subtle Ambient Mouse-Light Flare */}
          <div 
            className="absolute hidden md:block w-[400px] h-[400px] bg-cyan-700/5 rounded-full blur-[100px] pointer-events-none transition-transform duration-300 ease-out z-0"
            style={{
              transform: `translate(${mousePosition.x * 2.5}px, ${mousePosition.y * 2.5}px)`,
            }}
          />

          {/* Cinematic top chip detailing availability */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 glass shadow-[0_4px_24px_rgba(0,229,255,0.06)] rounded-full mb-8 z-10 relative group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-zinc-300 uppercase">
              {DEVELOPER_INFO.status}
            </span>
          </motion.div>

          {/* Large display Monogram background layer (Subtle) */}
          <div className="absolute -top-10 text-[18vw] leading-none font-serif font-black italic text-zinc-900/10 pointer-events-none select-none z-0">
            Rei
          </div>

          {/* Developer Name text with subtle neon glow */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-white font-serif font-bold italic tracking-wide text-2xl md:text-3xl mb-1 relative z-10"
          >
            {DEVELOPER_INFO.name}
          </motion.h2>

          {/* High-end cinematic title: "FULL STACK DEVELOPER" */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl font-black font-sans tracking-[0.18em] text-white my-3 leading-none drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] select-none z-10 uppercase text-center"
          >
            {DEVELOPER_INFO.title}
          </motion.h1>

          {/* Sleek subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-[10px] md:text-xs font-mono tracking-[0.35em] text-cyan-300 font-bold mb-4 z-10 relative uppercase"
          >
            {DEVELOPER_INFO.subtitle}
          </motion.p>

          {/* High-quality introduction paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed font-sans mb-10 z-10 relative"
          >
            {DEVELOPER_INFO.tagline}
          </motion.p>

          {/* Hero Action Trigger Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center z-10 relative"
          >
            <button
              type="button"
              onClick={() => handleScrollToSection('projetos')}
              className="cursor-pointer px-6 py-3.5 rounded-full bg-white text-black font-semibold tracking-wide text-xs hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center gap-2 group"
            >
              Conhecer Projetos
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href={DEVELOPER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3.5 rounded-full glass hover:bg-white/[0.08] text-zinc-100 hover:text-white font-semibold tracking-wide text-xs transition-all flex items-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
            >
              Contato
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </motion.div>
        </div>

        {/* Parallax-like floating numerical key performance indicator metrics */}
        <div className="w-full max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 px-6 relative z-10">
          {DEVELOPER_INFO.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 + idx * 0.1 }}
              className="p-4 rounded-xl glass shadow-[0_4px_16px_rgba(0,0,0,0.15)] glass-hover text-left group transition-all"
            >
              <div className="text-2xl font-mono font-bold text-white mb-0.5 tracking-tight group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] font-sans text-zinc-500 tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Elegant downwards mouse scroll chevron beacon */}
        <motion.button
          type="button"
          onClick={() => handleScrollToSection('sobre')}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-12 text-zinc-650 hover:text-white cursor-pointer z-10 flex flex-col items-center gap-1 opacity-70"
        >
          <span className="text-[9px] font-mono tracking-widest uppercase">Explore Universo</span>
          <ChevronDown className="w-4 h-4 text-cyan-400/85" />
        </motion.button>
      </section>


      {/* 2. ABOUT ME BENTO SECTION */}
      <section
        id="sobre"
        className="py-24 px-6 bg-zinc-950/20 backdrop-blur-sm relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mb-16 text-center space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-cyan-300 font-bold uppercase">&gt;_ COMPROMISSO INTEGRAL_</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white italic tracking-tight">
              Por Trás do Código
            </h2>
          </div>

          {/* Bento Grid Module */}
          <ActiveAbout />
        </div>
      </section>


      {/* 3. PROJECTS SHOWCASE SECTION */}
      <section
        id="projetos"
        className="py-24 px-6 max-w-7xl mx-auto relative z-10"
      >
        {/* Section Title Header */}
        <div className="mb-16 text-center space-y-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-950/20 border border-cyan-900/30 text-cyan-300 rounded-full text-[10px] font-mono tracking-wider uppercase mb-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>SISTEMAS INTERATIVOS VIVOS</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif text-white italic tracking-tight">
            Engenharia de Alto Padrão
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Interaja diretamente com os protótipos de sistemas reais rodando nos cards abaixo. Clique nos botões para simular picos de carga ou registrar logs instantâneos.
          </p>
        </div>

        {/* Dynamic Showcase of 3 Interactive Notebooks */}
        <div className="space-y-24 md:space-y-32">
          {PROJECTS.map((project) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-4xl mx-auto flex flex-col items-center group"
              >
                {/* Notebook Enclosure Column */}
                <div className="w-full">
                  <div className="transition-transform duration-500 group-hover:scale-[1.01]">
                    <NotebookMockup>
                      {project.mockType === 'analytics' && <ApexAnalyticsMock />}
                      {project.mockType === 'commerce' && <VortexCommerceMock />}
                      {project.mockType === 'database' && <QuantumLedgerMock />}
                    </NotebookMockup>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>


      {/* 4. SKILLS / TECH STACK SECTION */}
      <section
        id="skills"
        className="py-24 px-6 max-w-7xl mx-auto relative z-10"
      >
        {/* Section Heading */}
        <div className="mb-16 text-center space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-cyan-300 font-bold uppercase bg-cyan-950/40 px-3 py-1 border border-cyan-900/30 rounded-full">ARSÊNAL DE ENGENHARIA</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white italic tracking-tight mt-3">
            Ferramentas & Competências
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            Estrutura técnica refinada para assegurar máxima portabilidade, segurança sistêmica de ponta e execução visual inesquecível.
          </p>
        </div>

        {/* Modular Tech visual columns block */}
        <TechStack />
      </section>


      {/* 5. CONTACT SECTION */}
      <section
        id="contato"
        className="py-24 px-6 max-w-5xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel instructions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-widest">&gt;_ CANAIS DE SUPORTE</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white italic tracking-tight">
                Vamos Criar Juntos?
              </h2>
            </div>
            
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans">
              Ideias arrojadas merecem execução audaciosa. Se você precisa de um especialista técnico para orquestrar sua arquitetura, revitalizar uma infraestrutura legada ou codar um portal premium do absoluto zero, sinta-se em casa para deixar uma mensagem ou agendar um ticket prioritário.
            </p>

            <div className="space-y-4 pt-4 border-t border-zinc-900 text-xs">
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-900 tracking-wide flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 block font-mono">E-MAIL COMPORTAMENTAL</span>
                  <a href={`mailto:${DEVELOPER_INFO.email}`} className="text-zinc-200 hover:text-white transition-colors">{DEVELOPER_INFO.email}</a>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-900 tracking-wide flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-emerald-950 border border-emerald-900 text-emerald-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 block font-mono">WHATSAPP PRIORITÁRIO CRIPTOGRAFADO</span>
                  <a href={DEVELOPER_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200 transition-colors">Brasil (+55 13)</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass shadow-[0_12px_40px_rgba(0,0,0,0.45)] p-6 md:p-8 rounded-2xl relative overflow-hidden"
          >
            {/* Elegant glass accent line */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-cyan-400/0"></div>
            
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleContactSubmit} 
                  className="space-y-4 text-xs font-sans"
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block">Seu Nome / Empresa</label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-zinc-600 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-lg pl-9 pr-3 py-2.5 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all text-xs"
                          placeholder="Ex: Lucas Silveira"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block">E-mail para Retorno</label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-zinc-600 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-lg pl-9 pr-3 py-2.5 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all text-xs"
                          placeholder="Ex: lucas@empresa.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Brief description */}
                  <div className="space-y-1">
                    <label className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block">Detalhes da Demanda</label>
                    <textarea
                      required
                      value={formMessage}
                      rows={4}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-lg px-3 py-2.5 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all text-xs resize-none"
                      placeholder="Descreva o escopo básico, dores ou o fuso do faturamento..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`cursor-pointer w-full py-3.5 rounded-lg font-semibold tracking-wide text-xs transition-all flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'bg-zinc-900 text-zinc-500 border border-zinc-850 cursor-not-allowed'
                        : 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-zinc-500 border-t-white animate-spin rounded-full"></div>
                        <span>Registrando Requisição Garantida...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Dispara Ticket Consultoria com Kauã</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-950/40 border border-emerald-900/60 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  
                  <div className="space-y-2 max-w-sm mx-auto">
                    <h3 className="text-lg font-serif font-semibold text-white">Ticket Recebido com Sucesso!</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      Olá, <strong>{formName}</strong>! Sua requisição foi cimentada no log prioritário do desenvolvedor. Um assessor técnico ou o próprio Kauã retornará contato nas próximas <strong>2 horas úteis</strong>.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-900 font-mono text-[9px] max-w-xs mx-auto space-y-0.5 text-zinc-500 text-left select-none">
                    <p>&gt; IP_STATUS: SECURE_SOCKET_VERIFIED</p>
                    <p>&gt; ENCRYPT: AES-256-GCM</p>
                    <p>&gt; RESPOND_TARGET: {formEmail}</p>
                  </div>

                  <button
                    type="button"
                    onClick={resetContactForm}
                    className="cursor-pointer px-4 py-2 rounded-lg bg-zinc-905 border border-zinc-800 text-zinc-400 hover:text-white transition-all text-[11px]"
                  >
                    Enviar Outro Ticket
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900/60 bg-zinc-950/40 py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <span className="font-serif italic font-bold text-zinc-200 text-sm">K</span>
            </div>
            <span className="text-xs font-mono text-zinc-400 font-bold">&copy; 2026 {DEVELOPER_INFO.name}. Todos os direitos reservados.</span>
          </div>

          <div className="flex gap-4">
            <a href={DEVELOPER_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 border border-zinc-850 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-full transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={DEVELOPER_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 border border-zinc-850 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-full transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <div className="text-[10px] font-mono text-zinc-600 flex items-center gap-1.5 uppercase tracking-wide">
            <span>PREMIUM DIGITAL IDENTITY</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          </div>
        </div>
      </footer>

      {/* Floating high-fidelity WhatsApp Beacon */}
      <FloatingWhatsApp />
    </div>
  );
}
