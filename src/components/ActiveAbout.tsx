import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Briefcase, Award, Clock, Heart, ArrowUpRight, CheckCircle } from 'lucide-react';
import { DEVELOPER_INFO } from '../data';
import profileImage from '../assets/images/profile_avatar_current.jpeg';

export const ActiveAbout: React.FC = () => {
  const [time, setTime] = useState<string>('');

  // Sâo Paulo (UTC-3) Clock Simulation
  useEffect(() => {
    const updateSPTime = () => {
      const now = new Date();
      // Adjust to UTC-3 (São Paulo is generally UTC-3)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const spOffset = -3;
      const spDate = new Date(utc + 3600000 * spOffset);
      
      const hours = String(spDate.getHours()).padStart(2, '0');
      const minutes = String(spDate.getMinutes()).padStart(2, '0');
      const seconds = String(spDate.getSeconds()).padStart(2, '0');
      
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateSPTime();
    const interval = setInterval(updateSPTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* Bio Bento Panel (8 cols desktop) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-8 p-6 md:p-8 glass shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-2xl flex flex-col justify-between relative overflow-hidden group"
      >
        {/* Neon corner flare */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">ENGENHARIA COM PROPÓSITO</span>
          </div>
          
          <h3 className="text-2xl font-serif text-white tracking-tight mb-4">
            Transformando visões ambiciosas em sistemas indestrutíveis.
          </h3>
          
          <p className="text-sm text-zinc-400 leading-relaxed space-y-4 font-sans">
            Olá, eu sou o <strong className="text-white font-medium">{DEVELOPER_INFO.name}</strong>. Nos últimos anos, dediquei minha carreira a arquitetar e programar produtos digitais de alta confiabilidade. Sou apaixonado por otimizar loops até chegarmos na latência máxima de milissegundos e criar interfaces sensoriais que tornam o uso do software um prazer indescritível.
          </p>
          
          <p className="text-sm text-zinc-400 leading-relaxed mt-3 font-sans">
            Com expertise integral de ponta a ponta — do refinamento de animações no navegador ao design estrutural de bancos de dados relacional e governança cloud clusters — eu atuo como a ponte definitiva entre o design audacioso e a viabilidade tecnológica de startups globais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 pt-6 border-t border-zinc-800/60">
          <div className="flex items-center gap-2.5 text-xs text-zinc-400">
            <MapPin className="w-4 h-4 text-cyan-400/80" />
            <span>São Paulo, SP - Brasil (Global Remote)</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-zinc-400">
            <Briefcase className="w-4 h-4 text-cyan-400/80" />
            <span>Engenheiro Full Stack Freelancer</span>
          </div>
        </div>
      </motion.div>

      {/* Premium Profile Photo Card (4 cols desktop) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="lg:col-span-4 glass shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-2xl relative overflow-hidden group flex flex-col justify-between"
      >
        {/* Profile Image Frame */}
        <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden bg-zinc-950">
          <img 
            src={profileImage} 
            alt={DEVELOPER_INFO.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale opacity-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
          {/* Subtle warm shadow vignette on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-black/30 to-transparent"></div>
          
          {/* Telemetry labels */}
          <div className="absolute bottom-3 left-4 font-mono text-[8px] tracking-widest text-[#00e5ff] font-bold">
            &gt;_ PROFILE.PORTRAIT.ACTIVE
          </div>
        </div>

        {/* Info panel */}
        <div className="p-4 border-t border-zinc-800/60 bg-zinc-950/40 flex items-center justify-between">
          <div>
            <p className="text-xs font-serif italic text-white font-semibold">{DEVELOPER_INFO.name}</p>
            <p className="text-[9px] font-mono text-zinc-500 tracking-wider">MEMBER ID #0829</p>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[8px] font-semibold text-emerald-300 font-mono">CONFIRMED</span>
          </div>
        </div>
      </motion.div>

      {/* Real Time Clock Card (6 cols desktop) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:col-span-6 p-6 glass shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-2xl flex flex-col justify-between relative overflow-hidden group"
      >
        {/* Subtle line background */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">HORÁRIO SÃO PAULO</span>
          </div>
          <span className="text-[9px] text-zinc-500 font-mono font-bold uppercase tracking-wider bg-zinc-950 px-2 py-0.5 border border-zinc-850 rounded">GMT -3</span>
        </div>

        <div className="my-3 text-center">
          <div className="text-4xl md:text-5xl font-mono text-white tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400 select-none">
            {time || '16:08:29'}
          </div>
          <span className="text-[9px] font-mono text-zinc-500 block mt-1 tracking-widest uppercase">&gt;_ SYNCED WITH CLOUD ATOMIC CLOCK</span>
        </div>

        <div className="text-[11px] text-zinc-400 leading-normal text-center italic mt-2">
          "Sempre disponível para interações em tempo oportuno com fusos horários internacionais (EST, CET, GMT)."
        </div>
      </motion.div>

      {/* Live Status Card (6 cols desktop) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="lg:col-span-6 p-6 glass shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-2xl flex flex-col justify-between relative overflow-hidden group"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">DISPONIBILIDADE</span>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[9px] font-semibold text-emerald-300 font-mono uppercase">ONLINE NOW</span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-lg font-serif text-white tracking-snug">
            {DEVELOPER_INFO.status}
          </h4>
          <div className="space-y-1.5 text-zinc-400 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span>Contratos pontuais & freelance de escopo premium</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span>Consultoria para arquiteturas cloud/serverless</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span>UX de Alto Impacto para VPs & Founders</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
