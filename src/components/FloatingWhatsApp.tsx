import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MessageSquareCode, ArrowUpRight, Check } from 'lucide-react';
import { DEVELOPER_INFO } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans pointer-events-auto">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="mb-3 w-72 p-4 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden"
          >
            {/* Ambient indicator */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-emerald-500/0 via-emerald-400 to-emerald-500/0"></div>
            
            <div className="flex gap-2.5 items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">{DEVELOPER_INFO.name}</span>
                </div>
                <p className="text-[10px] text-emerald-400 font-mono tracking-wider font-semibold uppercase">ONLINE AGORA</p>
                <p className="text-xs text-zinc-400 leading-normal pt-1">
                  Estou online para conversar sobre seus  projetos e sua ideas, Como posso ajudar?
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-900 flex justify-end gap-2 text-[10px]">
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="px-2.5 py-1.5 text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                Fechar
              </button>
              <a
                href={DEVELOPER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-300 font-semibold tracking-wide transition-all flex items-center gap-1"
              >
                <span>Enviar Mensagem</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating trigger button */}
      <motion.button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer w-12 h-12 rounded-full bg-black border border-zinc-800/80 shadow-[0_8px_24px_rgba(0,0,0,0.6)] flex items-center justify-center relative overflow-hidden group hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] duration-300"
      >
        <span className="absolute inset-0 bg-gradient-to-tr from-zinc-950 to-zinc-900 z-0"></span>
        <div className="absolute inset-0 bg-radial-gradient from-emerald-500/10 to-transparent pointer-events-none"></div>

        {/* Online dot indicator inside icon */}
        <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-emerald-400 z-10 border border-black animate-pulse"></span>
        
        <MessageSquareCode className="w-5 h-5 text-zinc-300 group-hover:text-emerald-400 z-10 transition-colors duration-300" />
      </motion.button>
    </div>
  );
};
