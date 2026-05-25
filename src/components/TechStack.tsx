import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Terminal, Cloud, Sparkles } from 'lucide-react';
import { SKILLS } from '../data';

export const TechStack: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Group skills by category
  const categories = [
    {
      id: 'frontend',
      title: 'FRONTEND ENGINEERING',
      description: 'Interfaces de alto refinamento, micro-interações fluidas e web performance impecável.',
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      items: SKILLS.filter(s => s.category === 'frontend')
    },
    {
      id: 'backend',
      title: 'BACKEND ARCHITECTURE',
      description: 'Aplicações seguras em tempo real, APIs de baixa latência e orquestração de microsserviços.',
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
      items: SKILLS.filter(s => s.category === 'backend')
    },
    {
      id: 'devops',
      title: 'DEVOPS, CLOUD & OS',
      description: 'Arquiteturas robustas distribuídas na borda, conteinerização e deploy automatizado resiliente.',
      icon: <Cloud className="w-4 h-4 text-cyan-400" />,
      items: SKILLS.filter(s => s.category === 'devops')
    }
  ];

  return (
    <div className="space-y-12">
      {/* Category Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: catIdx * 0.15 }}
            className="p-6 glass shadow-[0_8px_32px_rgba(0,0,0,0.4)] glass-hover rounded-2xl flex flex-col justify-between transition-all duration-300"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-zinc-950 border border-zinc-800">
                  {cat.icon}
                </div>
                <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">{cat.title}</h4>
              </div>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-6">
                {cat.description}
              </p>

              {/* Skills list inside category */}
              <div className="space-y-4">
                {cat.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="space-y-1.5 group cursor-default"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-sans font-medium text-zinc-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono text-zinc-500 group-hover:text-cyan-300 transition-colors">
                          {skill.duration}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400 font-semibold group-hover:text-cyan-400 transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                    </div>

                    {/* Premium Progress Bar */}
                    <div className="h-1 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900/40 relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r from-zinc-700 via-cyan-400/80 to-cyan-300 transition-all duration-500 ${
                          hoveredSkill === skill.name ? 'shadow-[0_0_8px_rgba(34,211,238,0.8)]' : ''
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats note */}
            <div className="mt-8 pt-4 border-t border-zinc-900/60 flex items-center gap-1.5 text-[9px] text-zinc-500 font-mono">
              <Sparkles className="w-3 h-3 text-cyan-400/50" />
              <span>Nível medido em auditorias técnicas internas</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
