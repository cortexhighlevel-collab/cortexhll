import React from 'react';
import { motion, type Variants } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import ctaBackground from "@/assets/cta-background.jpg";
import { QuizOrcamento } from "./quiz/QuizOrcamento";

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

const CTASection = () => {
  const isMobile = useIsMobile();

  return (
    <div id="contato" className="w-full min-h-screen text-black flex items-center justify-center font-dm antialiased selection:bg-[#f06800] selection:text-white light-dotted-fade-in py-16 md:py-24">
      <motion.div 
        className="w-full max-w-[1280px] relative z-20 flex flex-col lg:flex-row items-stretch px-6 md:px-8" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: 0.2 }} 
        variants={scaleCenter}
      >
        {/* Left Section: Quiz Form */}
        <motion.div 
          className="relative lg:w-[55%] lg:-mr-12 mt-[-40px] lg:mt-0 z-10 order-2 lg:order-1"
          variants={slideUp}
        >
          <div 
            className="relative rounded-3xl p-6 md:p-8 overflow-hidden h-full min-h-[600px]" 
            style={{
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.99) 0%, rgba(252, 252, 252, 0.98) 100%)',
              border: '1px solid rgba(240, 104, 0, 0.15)',
              boxShadow: '0 25px 80px -20px rgba(0, 0, 0, 0.18), 0 15px 40px -15px rgba(240, 104, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
            }}
          >
            {/* Glowing accents */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#f06800]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#f06800]/5 rounded-full blur-2xl pointer-events-none"></div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-6 right-6 w-16 h-16 overflow-hidden rounded-tr-lg">
              <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#f06800] to-transparent rounded-r-full" />
              <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#f06800] to-transparent rounded-t-full" />
            </div>
            <div className="absolute bottom-6 left-6 w-16 h-16 overflow-hidden rounded-bl-lg">
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gray-300 to-transparent rounded-l-full" />
              <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-gray-300 to-transparent rounded-b-full" />
            </div>

            {/* Premium badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-gradient-to-r from-[#f06800] to-[#ff8c42] text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg z-10">
              <span>Orçamento Interativo</span>
            </div>

            {/* Quiz content */}
            <div className="mt-10 h-[calc(100%-40px)]">
              <QuizOrcamento />
            </div>
          </div>
        </motion.div>

        {/* Right Section: Image Card with Text Overlay */}
        <motion.div 
          className="relative flex flex-col justify-center lg:w-[50%] min-h-[400px] rounded-3xl overflow-hidden order-1 lg:order-2" 
          variants={slideUp} 
          style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)'
          }}
        >
          {/* Background image */}
          <img 
            src={ctaBackground} 
            alt="CTA Background" 
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 backdrop-blur-[2px]"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-6 right-6 w-20 h-20 overflow-hidden rounded-tr-lg">
            <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-white/30 to-transparent rounded-r-full" />
            <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-white/30 to-transparent rounded-t-full" />
          </div>
          <div className="absolute bottom-6 left-6 w-20 h-20 overflow-hidden rounded-bl-lg">
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#f06800]/50 to-transparent rounded-l-full" />
            <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-[#f06800]/50 to-transparent rounded-b-full" />
          </div>

          {/* Text content */}
          <div className="relative z-10 p-8 md:p-12 text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[#f06800] bg-[#f06800]/10 backdrop-blur-sm rounded-full border border-[#f06800]/20">
              Monte seu projeto
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 leading-tight">
              Calcule seu
              <br />
              <span className="text-[#f06800]">orçamento</span>
            </h2>
            
            <p className="text-lg text-white/70 max-w-md mx-auto mb-8">
              Responda algumas perguntas rápidas e receba uma estimativa personalizada para o seu projeto.
            </p>

            {/* Features list */}
            <div className="flex flex-col gap-3 max-w-xs mx-auto text-left">
              {[
                'Orçamento em tempo real',
                'Personalização completa',
                'Envio direto via WhatsApp'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-white/80">
                  <div className="w-5 h-5 rounded-full bg-[#f06800]/20 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-[#f06800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CTASection;
