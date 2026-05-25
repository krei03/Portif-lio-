import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, Moon, Sun, Search, User, Sparkles, 
  ChevronRight, Calendar, Clock, Phone, Check, 
  ArrowRight, ShieldCheck, Scale, Landmark, FileText,
  MapPin, Scissors, X, Mail
} from 'lucide-react';

import vertexImage from '../assets/images/vertex_sneaker_1779730903524.png';
import barberImage from '../assets/images/barber_shop_1779730922026.png';
import lawImage from '../assets/images/law_firm_1779730944265.png';

// ==========================================
// 1. VERTEX SNEAKER STORE (ApexAnalyticsMock)
// ==========================================
export const ApexAnalyticsMock: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(41);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className={`w-full h-full relative overflow-hidden transition-colors duration-500 font-sans ${isDarkMode ? 'bg-black text-zinc-100' : 'bg-zinc-100 text-zinc-900'} select-none flex flex-col text-[10px]`}>
      
      {/* 1. Header (Navegação) */}
      <div className={`flex items-center justify-between px-3 py-1.5 border-b z-20 backdrop-blur-md sticky top-0 ${isDarkMode ? 'bg-black/80 border-white/5' : 'bg-white/80 border-black/5'}`}>
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center font-bold text-[8.5px]">
            V
          </div>
          <span className="font-sans font-black tracking-widest text-[9.5px]">VERTEX</span>
        </div>

        {/* Menu Links */}
        <div className="hidden min-[380px]:flex items-center gap-2.5 font-sans font-medium text-[8.5px]">
          <span className="text-[#00e5ff] cursor-pointer">Marcas</span>
          <span className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity">Feed</span>
        </div>

        {/* Search Bar */}
        <div className={`relative flex items-center max-w-[120px] rounded-full px-2 py-0.5 ${isDarkMode ? 'bg-zinc-900/60' : 'bg-zinc-200/60'}`}>
          <Search className="w-2.5 h-2.5 opacity-40 mr-1" />
          <span className="opacity-40 text-[7.5px] truncate max-w-[80px]">Drops, produtos...</span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2">
          {/* Light/Dark Toggle */}
          <button 
            type="button"
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            {isDarkMode ? <Sun className="w-3 h-3 text-yellow-400" /> : <Moon className="w-3 h-3 text-zinc-800" />}
          </button>
          
          {/* Cart with badge */}
          <div className="relative cursor-pointer">
            <ShoppingBag className="w-3 h-3" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1.5 w-2.5 h-2.5 rounded-full bg-lime-400 text-black text-[6px] font-bold flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <User className="w-3 h-3 opacity-80 cursor-pointer" />
        </div>
      </div>

      {/* 2. Main Hero Section */}
      <div className="flex-1 w-full relative flex items-center p-4">
        {/* Aspect Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={vertexImage} 
            alt="Vertex Sneakers Showcase"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient mapping to pop typography */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content Canvas */}
        <div className="relative z-10 max-w-[220px] text-left space-y-2 mt-4 text-white">
          {/* Sparkles / Tag */}
          <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-lime-500/20 border border-lime-500/30 text-[7.5px] font-mono font-bold text-lime-400 animate-pulse">
            <Sparkles className="w-2 h-2" />
            <span>PREMIUM SNEAKER MARKET</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-sans font-black tracking-tight leading-none drop-shadow-md">
            VERTEX
          </h1>

          {/* Description */}
          <p className="text-[8.5px] text-zinc-300 leading-normal font-sans max-w-[200px]">
            Drops selecionados, experiência cinematográfica e curadoria para quem compra tênis como peça central do look.
          </p>

          {/* Size picker */}
          <div className="space-y-1">
            <span className="text-[7.5px] font-mono text-zinc-400 block tracking-wider font-bold">SELECIONAR TAMANHO (BR)</span>
            <div className="flex gap-1">
              {[39, 40, 41, 42].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`cursor-pointer w-5 h-5 rounded border text-[8.5px] font-bold flex items-center justify-center transition-all ${
                    selectedSize === size 
                      ? 'bg-lime-400 text-black border-lime-400' 
                      : 'bg-black/60 text-white border-white/10 hover:border-white/30'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleAddToCart}
              className="cursor-pointer bg-lime-400 hover:bg-lime-300 text-black px-3 py-1.5 rounded-lg text-[8.5px] font-bold transition-all flex items-center gap-1 shadow-lg shadow-lime-500/15 group"
            >
              <span>Ver drops</span>
              <ChevronRight className="w-2.5 h-2.5 transition-transform group-hover:translate-x-0.5" />
            </button>
            <span className="text-[7.5px] text-zinc-400 font-mono tracking-wider font-semibold">
              FW26 / CURADORIA
            </span>
          </div>
        </div>

        {/* Watermark Branding overlay */}
        <div className="absolute bottom-1 left-3 font-sans font-black italic text-[9vw] leading-none text-white/5 pointer-events-none select-none uppercase tracking-widest z-0">
          JORDAN
        </div>
      </div>

      {/* Floating alert notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 px-3 py-1.5 bg-lime-400 text-black rounded-lg shadow-xl font-bold flex items-center gap-1.5 text-[8.5px]"
          >
            <Check className="w-3 h-3 text-black" />
            <span>Adicionado Tamanho {selectedSize} à sua Sacola Vertex!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// 2. VIEIRA BARBEARIA (VortexCommerceMock)
// ==========================================
export const VortexCommerceMock: React.FC = () => {
  const [selectedService, setSelectedService] = useState<'degrade' | 'barba' | 'completo' | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [appointmentFinished, setAppointmentFinished] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    { id: 'degrade', name: 'Degradê Navalhado', price: 'R$ 45,00', duration: '40 min' },
    { id: 'barba', name: 'Barba de Respeito', price: 'R$ 35,00', duration: '30 min' },
    { id: 'completo', name: 'Combo (Corte & Barba)', price: 'R$ 70,00', duration: '1h 10m' }
  ] as const;

  const times = ['09:30', '11:00', '14:30', '16:00', '17:30'];

  const handleBookNow = () => {
    if (!selectedService || !selectedTime) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAppointmentFinished(true);
    }, 1800);
  };

  const handleReset = () => {
    setSelectedService(null);
    setSelectedTime(null);
    setAppointmentFinished(false);
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-zinc-950 text-white font-sans flex flex-col text-[10px] select-none">
      
      {/* Background Frame Showcase */}
      <div className="absolute inset-0 z-0">
        <img 
          src={barberImage} 
          alt="Vieira Barbearia Ambiance"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.05]"
        />
        {/* Radial inner drop lighting */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/50 to-black/90"></div>
      </div>

      {/* 1. Header Branded Bar */}
      <div className="relative z-10 flex items-center justify-between px-4 py-2 border-b border-white/5 backdrop-blur-md bg-black/40">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center border border-white/10 shadow-lg">
            <Scissors className="w-2.5 h-2.5 text-black" />
          </div>
          <div className="text-left leading-none">
            <span className="font-serif font-black tracking-widest text-[9.5px] text-amber-400 block">VIEIRA</span>
            <span className="text-[6.5px] uppercase font-mono tracking-widest text-zinc-400">Barbearia Estúdio</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-[7.5px] uppercase font-mono tracking-wider text-zinc-300 font-bold">ESTÚDIO ABERTO</span>
        </div>
      </div>

      {/* 2. Main Content Board */}
      <div className="relative z-10 flex-1 p-4 flex flex-col justify-between">
        
        <AnimatePresence mode="wait">
          {!appointmentFinished ? (
            <motion.div 
              key="booking-card"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex-1 flex flex-col justify-between"
            >
              {/* Introduction Title */}
              <div className="text-left space-y-1 max-w-[240px]">
                <div className="text-amber-500 font-mono font-black uppercase text-[7px] tracking-widest">
                  ESTILO, BARBA E CABELO NO HORÁRIO CERTO
                </div>
                <h2 className="text-xl md:text-2xl font-serif font-black tracking-tight leading-none text-white drop-shadow-md">
                  AGENDE SEU CORTE
                </h2>
                <p className="text-[8px] text-zinc-400 leading-normal font-sans max-w-[200px]">
                  Escolha o serviço, selecione um horário disponível e reserve sua experiência na Vieira Barbearia.
                </p>
              </div>

              {/* Interactive Multi-step Grid Interface */}
              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-3 mt-3">
                {/* 1. Services selection */}
                <div className="space-y-1 text-left">
                  <span className="text-[7px] font-mono text-zinc-400 uppercase tracking-widest block font-bold">1. SELECIONE O SERVIÇO:</span>
                  <div className="space-y-1.5/2 flex flex-col gap-1.5">
                    {services.map((srv) => (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setSelectedService(srv.id)}
                        className={`cursor-pointer w-full p-1.5 text-left rounded-lg border transition-all flex justify-between items-center ${
                          selectedService === srv.id 
                            ? 'bg-amber-500/15 border-amber-400 text-amber-200' 
                            : 'bg-black/60 border-white/5 text-zinc-300 hover:border-white/15'
                        }`}
                      >
                        <div>
                          <p className="font-bold text-[8.5px] leading-tight">{srv.name}</p>
                          <p className="text-[7px] text-zinc-400 font-mono mt-0.5">{srv.duration}</p>
                        </div>
                        <span className="font-mono text-[8px] font-bold text-amber-400">{srv.price}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Time selector & action buttons */}
                <div className="space-y-1.5 text-left flex flex-col justify-between">
                  <div>
                    <span className="text-[7px] font-mono text-zinc-400 uppercase tracking-widest block font-bold mb-1">2. HORÁRIOS DISPONÍVEIS:</span>
                    <div className="flex flex-wrap gap-1">
                      {times.map((tm) => (
                        <button
                          key={tm}
                          type="button"
                          onClick={() => setSelectedTime(tm)}
                          className={`cursor-pointer px-2 py-1 rounded text-[8px] font-bold transition-all ${
                            selectedTime === tm 
                              ? 'bg-amber-400 text-black border border-amber-400 shadow'
                              : 'bg-black/60 text-zinc-300 border border-white/5 hover:border-white/15'
                          }`}
                        >
                          {tm}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* CTA Reserve Trigger */}
                  <div className="pt-2">
                    <button
                      type="button"
                      disabled={!selectedService || !selectedTime || loading}
                      onClick={handleBookNow}
                      className={`cursor-pointer w-full py-2 rounded-lg font-bold tracking-wide transition-all border flex items-center justify-center gap-1.5 text-[8.5px] ${
                        selectedService && selectedTime
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black border-amber-400 font-black shadow-lg shadow-amber-500/10'
                          : 'bg-zinc-900/80 text-zinc-500 border-zinc-800 cursor-not-allowed'
                      }`}
                    >
                      {loading ? (
                        <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent animate-spin rounded-full"></div>
                      ) : (
                        <>
                          <Calendar className="w-3 h-3" />
                          <span>Agendar agora</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center text-center max-w-sm mx-auto space-y-3.5"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center border-4 border-amber-400/20 shadow-xl shadow-amber-500/10 animate-bounce">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>

              <div className="space-y-1">
                <span className="text-[7.5px] font-mono tracking-widest text-amber-400 uppercase font-black">CUPOM DE CORTE CONFIRMADO</span>
                <h3 className="text-lg font-serif font-black text-white leading-tight">Sua cadeira está reservada!</h3>
                <p className="text-[8.5px] text-zinc-300 max-w-[240px] leading-relaxed">
                  Agendamento feito para as <strong>{selectedTime} h</strong> no Estúdio Vieira. Um lembrete no WhatsApp foi gerado.
                </p>
              </div>

              <div className="bg-black/70 border border-white/5 rounded-xl p-2.5 w-full max-w-[200px] text-left font-mono text-[7.5px] space-y-1 text-zinc-400">
                <div className="flex justify-between">
                  <span>serviço:</span>
                  <span className="text-amber-400 font-bold">{services.find(s => s.id === selectedService)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>horário:</span>
                  <span className="text-white font-bold">{selectedTime} (Hoje)</span>
                </div>
                <div className="flex justify-between">
                  <span>barbeiro:</span>
                  <span className="text-zinc-200">K. Rei (Mestre)</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="cursor-pointer font-sans font-bold text-[8px] text-amber-400 hover:text-amber-300 underline"
              >
                Agendar outro serviço / Voltar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// ==========================================
// 3. SILVA & ADVOGADOS (QuantumLedgerMock)
// ==========================================
export const QuantumLedgerMock: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', caseType: 'civil' });
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConsultSubmitted(true);
    }, 1500);
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#0d1017] text-slate-100 font-sans flex flex-col text-[10px] select-none">
      
      {/* Background Frame Showcase */}
      <div className="absolute inset-0 z-0">
        <img 
          src={lawImage} 
          alt="Silva e Advogados Law Office"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.1]"
        />
        {/* Elegant structural gradient protection layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-955/60 to-slate-950/95"></div>
      </div>

      {/* 1. Elegant Header Nav */}
      <div className="relative z-10 flex items-center justify-between px-3 py-2 bg-[#090b0e]/95 border-b border-yellow-500/10 backdrop-blur">
        <div className="flex items-center gap-1.5">
          <div className="p-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500">
            <Scale className="w-3 h-3 text-[#d4af37]" />
          </div>
          <div className="text-left leading-none font-serif">
            <span className="text-[9.5px] font-bold text-white block">Silva & <span className="text-[#c5a85c]">Advogados</span></span>
            <span className="text-[5.5px] uppercase tracking-widest text-slate-400 block mt-0.5">Advocacia Especializada</span>
          </div>
        </div>

        {/* Header visual listings */}
        <div className="hidden min-[480px]:flex items-center gap-2.5 font-sans font-medium text-[7.5px] text-slate-300">
          <span className="text-[#c5a85c] cursor-pointer font-bold">Home</span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer">Serviços</span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer">Equipe</span>
        </div>

        <button 
          type="button"
          onClick={() => setConsultSubmitted(false)}
          className="cursor-pointer bg-gradient-to-r from-[#c5a85c] to-[#e5c97c] hover:from-[#b09446] hover:to-[#c5a85c] text-slate-950 px-2.5 py-1 rounded text-[7.5px] font-bold shadow-lg shadow-amber-500/5 font-sans leading-none"
        >
          Agende uma Consulta
        </button>
      </div>

      {/* 2. Main content and form overlay */}
      <div className="relative z-10 flex-1 p-4 grid grid-cols-1 min-[440px]:grid-cols-12 gap-3 items-center">
        
        {/* Left Side: Law office introduction */}
        <div className="min-[440px]:col-span-7 text-left space-y-2">
          {/* Tag */}
          <div className="inline-flex items-center gap-1 pb-0.5 border-b border-amber-500/40 text-[7px] font-mono uppercase tracking-widest text-[#c5a85c] font-black">
            EXCELÊNCIA JURÍDICA DESDE 2004
          </div>

          {/* Main Title text with italicized gold serif key */}
          <h2 className="text-base min-[480px]:text-lg font-serif font-bold text-white tracking-tight leading-tight">
            Assessoria Jurídica <span className="font-serif italic text-[#c5a85c] font-extrabold font-serif">Especializada</span> para Proteger Seus Direitos e Negócios
          </h2>

          <p className="text-[8px] text-slate-400 leading-relaxed font-sans max-w-[200px]">
            Mais de 20 anos de experiência em direito civil, empresarial, trabalhista e família. Oferecemos soluções jurídicas personalizadas com foco em resultados.
          </p>

          {/* Miniature horizontal stats grids */}
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <div className="p-1 px-1.5 rounded bg-slate-900/80 border border-slate-800">
              <p className="font-serif font-bold text-[9px] text-[#c5a85c] leading-none">20+</p>
              <p className="text-[5.5px] text-slate-500 uppercase mt-0.5 font-mono">Expertise Anos</p>
            </div>
            <div className="p-1 px-1.5 rounded bg-slate-900/80 border border-slate-800">
              <p className="font-serif font-bold text-[9px] text-white leading-none">500+</p>
              <p className="text-[5.5px] text-slate-500 uppercase mt-0.5 font-mono">Clientes</p>
            </div>
            <div className="p-1 px-1.5 rounded bg-slate-900/80 border border-slate-800">
              <p className="font-serif font-bold text-[9px] text-emerald-400 leading-none">98%</p>
              <p className="text-[5.5px] text-slate-500 uppercase mt-0.5 font-mono">Sucesso</p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive consult ticket panel */}
        <div className="min-[440px]:col-span-12 min-[440px]:col-start-8 min-[440px]:col-end-13 w-full bg-slate-950/90 rounded-xl border border-white/5 p-2.5 shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            {!consultSubmitted ? (
              <motion.form 
                key="law-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-1.5"
              >
                <div className="text-left border-b border-white/5 pb-1">
                  <span className="text-[7.5px] font-mono tracking-wider uppercase text-[#c5a85c] block font-black">SOLICITAR AVALIAÇÃO</span>
                  <span className="text-[6.5px] text-slate-400 font-sans block">Consulta estrategica prioritária.</span>
                </div>

                {/* Input Fields */}
                <div className="space-y-1">
                  <input
                    type="text"
                    required
                    placeholder="Seu Nome Completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0d1017] border border-white/5 hover:border-slate-800 focus:border-amber-500/50 outline-none rounded p-1 px-1.5 text-[8px] text-white placeholder-slate-500 transition-colors"
                  />
                  
                  <input
                    type="email"
                    required
                    placeholder="Seu E-mail Profissional"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0d1017] border border-white/5 hover:border-slate-800 focus:border-amber-500/50 outline-none rounded p-1 px-1.5 text-[8px] text-white placeholder-slate-500 transition-colors"
                  />

                  <select
                    value={formData.caseType}
                    onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
                    className="w-full bg-[#0d1017] border border-white/5 hover:border-slate-800 focus:border-amber-500/50 outline-none rounded p-1 px-1.5 text-[8px] text-slate-300 transition-colors"
                  >
                    <option value="civil">Advocacia Civil & Contratos</option>
                    <option value="corporate">Direito Corporativo / Tributário</option>
                    <option value="labor">Direito de Família & Sucessões</option>
                  </select>
                </div>

                {/* Action button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer w-full py-1.5 rounded bg-slate-900 border border-[#c5a85c]/40 text-[#c5a85c] hover:bg-[#c5a85c] hover:text-slate-950 transition-all font-bold text-[8px]"
                >
                  {loading ? (
                    <div className="w-3 h-3 border-2 border-[#c5a85c] border-t-transparent animate-spin rounded-full mx-auto"></div>
                  ) : (
                    <span>Enviar solicitação e iniciar</span>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="law-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-4 space-y-2.5"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 font-semibold text-center text-[#c5a85c] flex items-center justify-center mx-auto shadow-inner">
                  <ShieldCheck className="w-5 h-5 text-[#c5a85c] animate-pulse" />
                </div>

                <div className="space-y-0.5">
                  <h4 className="text-[10px] font-serif font-black text-[#c5a80c]">Solicitação Autenticada</h4>
                  <p className="text-[7.5px] text-slate-400 font-sans max-w-[130px] mx-auto leading-relaxed">
                    Sua convocação de análise civil foi registrada.
                  </p>
                </div>

                <div className="text-[7px] text-amber-500/80 font-mono py-1 rounded bg-[#090b0e] border border-white/5 inline-block px-2">
                  RESPOSTA: ATÉ 24H ÚTEIS
                </div>

                <button
                  type="button"
                  onClick={() => setConsultSubmitted(false)}
                  className="cursor-pointer text-[7.5px] text-slate-500 hover:text-slate-300 underline font-sans block mx-auto"
                >
                  Nova Consultoria
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. HIGH-FIDELITY NOTEBOOK / LAPTOP CONTAINER
// ==========================================
interface NotebookMockupProps {
  children: React.ReactNode;
}

export const NotebookMockup: React.FC<NotebookMockupProps> = ({ children }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* 1. Laptop Lid / Screen */}
      <div className="relative mx-auto bg-zinc-950 border-[6px] md:border-[10px] border-[#1a1a1c] rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden aspect-[16/10] flex flex-col">
        {/* Camera dot reflection & sensor bezel bar */}
        <div className="absolute top-0 inset-x-0 h-4 bg-zinc-950 flex items-center justify-center z-20 pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-zinc-900 flex items-center justify-center">
            <div className="w-[3px] h-[3px] bg-cyan-900/50 rounded-full"></div>
          </div>
        </div>
        
        {/* Inner Screen Content - Simulator fits perfectly here */}
        <div className="flex-1 w-full bg-[#09090b] relative overflow-hidden pt-4 px-1 md:px-2 pb-1 md:pb-2 flex flex-col justify-center">
          {children}
        </div>
        
        {/* Soft screen gloss light overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.015] to-white/[0.04] mix-blend-overlay z-10"></div>
      </div>
      
      {/* 2. Laptop Base Hinge */}
      <div className="h-[3px] md:h-[5px] bg-[#1a1a1c] w-[95%] mx-auto relative z-20 shadow-md"></div>
      
      {/* 3. Laptop Body Base */}
      <div className="relative w-[104%] -ml-[2%] h-2 md:h-3.5 bg-gradient-to-b from-[#2a2a2d] via-[#1a1a1c] to-[#0f0f10] rounded-b-xl border-t border-[#3a3a3d] shadow-[0_15px_35px_rgba(0,0,0,0.6)] z-20">
        {/* Apple-style display notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 md:w-16 h-[3px] md:h-[5px] bg-zinc-950 rounded-b-md"></div>
        {/* Subtle metallic bevel highlight */}
        <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-white/10 rounded-b-xl"></div>
      </div>
      
      {/* 4. Floor/Contact shadow */}
      <div className="w-[102%] -ml-[1%] h-6 bg-cyan-500/5 blur-xl rounded-full absolute -bottom-5 pointer-events-none opacity-40"></div>
    </div>
  );
};
