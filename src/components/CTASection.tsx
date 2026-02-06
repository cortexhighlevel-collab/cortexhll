import React, { useState } from 'react';
import { motion, type Variants } from "framer-motion";
import { User, Mail, Building2, Phone, MessageSquare, Send, Shield, Clock, CheckCircle2 } from "lucide-react";
import ctaBackground from "@/assets/cta-background.jpg";

// Animation variants
const scaleCenter: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.805,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};
const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.69,
      ease: "easeOut"
    }
  }
};
const staggerForm: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
const inputReveal: Variants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};
const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };
  return <div id="contato" className="w-full min-h-screen text-black flex items-center justify-center font-dm antialiased selection:bg-[#f06800] selection:text-white light-dotted-fade-in py-16 md:py-24">
      <motion.div className="w-full max-w-[1280px] relative z-20 flex flex-col lg:flex-row items-stretch px-6 md:px-8" initial="hidden" whileInView="visible" viewport={{
      once: false,
      amount: 0.2
    }} variants={scaleCenter}>
        {/* Left Section: Form */}
        <motion.div className="relative lg:w-[55%] lg:-mr-12 mt-[-40px] lg:mt-0 z-10 order-2 lg:order-1" variants={staggerForm}>
          <form onSubmit={handleSubmit} className="relative rounded-3xl p-8 md:p-10 overflow-hidden h-full" style={{
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.99) 0%, rgba(252, 252, 252, 0.98) 100%)',
          border: '1px solid rgba(240, 104, 0, 0.15)',
          boxShadow: '0 25px 80px -20px rgba(0, 0, 0, 0.18), 0 15px 40px -15px rgba(240, 104, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
        }}>
            {/* Glowing accent */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#f06800]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#f06800]/5 rounded-full blur-2xl pointer-events-none"></div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-6 right-6 w-16 h-16">
              <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#f06800] to-transparent"></div>
              <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#f06800] to-transparent"></div>
            </div>
            <div className="absolute bottom-6 left-6 w-16 h-16">
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gray-300 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-gray-300 to-transparent"></div>
            </div>

            {/* Premium badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-gradient-to-r from-[#f06800] to-[#ff8c42] text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
              
              <span>Exclusivo</span>
            </div>

            {/* Form header */}
            <div className="mb-8 mt-8">
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">
                Agende seu Diagnóstico
              </h3>
              <p className="text-gray-500 font-light">
                Descubra o potencial oculto do seu negócio digital
              </p>
            </div>

            {/* Form fields */}
            <div className="space-y-5">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <motion.div className="relative" variants={inputReveal}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome" className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white/80 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#f06800] focus:ring-2 focus:ring-[#f06800]/10 transition-all duration-300" required />
                  </div>
                </motion.div>

                <motion.div className="relative" variants={inputReveal}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white/80 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#f06800] focus:ring-2 focus:ring-[#f06800]/10 transition-all duration-300" required />
                  </div>
                </motion.div>
              </div>

              {/* Row 2: Company and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <motion.div className="relative" variants={inputReveal}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Nome da empresa" className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white/80 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#f06800] focus:ring-2 focus:ring-[#f06800]/10 transition-all duration-300" />
                  </div>
                </motion.div>

                <motion.div className="relative" variants={inputReveal}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(00) 00000-0000" className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white/80 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#f06800] focus:ring-2 focus:ring-[#f06800]/10 transition-all duration-300" />
                  </div>
                </motion.div>
              </div>

              {/* Row 3: Message */}
              <motion.div className="relative" variants={inputReveal}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Conte um pouco sobre seu projeto ou desafio atual..." rows={4} className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white/80 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#f06800] focus:ring-2 focus:ring-[#f06800]/10 transition-all duration-300 resize-none" />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div className="pt-4" variants={inputReveal}>
                <button type="submit" className="group w-full bg-[#f06800] text-white rounded-xl h-[60px] px-8 flex items-center justify-center gap-3 hover:bg-[#d95c00] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 ease-out cursor-pointer shadow-[0_10px_40px_-10px_rgba(240,104,0,0.4)]">
                  <span className="text-lg uppercase tracking-[0.12em] font-medium">
                    Enviar Solicitação
                  </span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>

              {/* Privacy note */}
              <p className="text-center text-xs text-gray-400 mt-4">
                Ao enviar, você concorda com nossa{' '}
                <a href="#" className="text-[#f06800] hover:underline">Política de Privacidade</a>
              </p>
            </div>
          </form>
        </motion.div>

        {/* Right Section: Image Card with Text Overlay */}
        <motion.div className="relative flex flex-col justify-center lg:w-[50%] min-h-[400px] rounded-3xl overflow-hidden order-1 lg:order-2" variants={slideUp} style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)'
      }}>
        {/* Background image */}
          <img 
            src={ctaBackground} 
            alt="CTA Background" 
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 backdrop-blur-[2px]"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#f06800]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#f06800]/5 rounded-full blur-2xl"></div>
          </div>
          
          {/* Content - with padding-left to account for form overlap */}
          <div className="relative z-10 p-8 lg:p-12 lg:pl-20 flex flex-col justify-center h-full">
            {/* Header Line */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[23px] w-[80px] flex items-center gap-1">
                <div className="h-full w-1 bg-[#f06800]"></div>
                <div className="h-full w-1 bg-[#f06800]/50"></div>
                <div className="h-full w-full bg-gradient-to-r from-[#f06800]/20 to-transparent"></div>
              </div>
              <span className="text-sm text-white/60 uppercase tracking-[0.2em] font-medium">Diagnóstico</span>
            </div>

            <h4 className="text-[32px] lg:text-[48px] leading-[1.05] font-medium tracking-tight text-white mb-4">
              Transforme sua presença digital
            </h4>
            <p className="text-[16px] lg:text-[18px] leading-[1.6] text-white/70 font-light max-w-md mb-8">
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas para agendar seu diagnóstico gratuito.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="px-4 py-2 rounded-full border border-[#f06800]/40 bg-[#f06800]/10 backdrop-blur-md">
                <span className="text-xs text-white uppercase tracking-[0.15em] font-medium">100% Gratuito</span>
              </div>
              <div className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
                <span className="text-xs text-white/80 uppercase tracking-[0.15em] font-medium">Sem Compromisso</span>
              </div>
            </div>

            {/* Stats/Social Proof */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#f06800]">+150</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Clientes</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-[#f06800]">98%</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#f06800]">24h</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Resposta</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>;
};
export default CTASection;