import React from 'react';
import { motion, type Variants } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import ctaBackground from "@/assets/cta-background.jpg";
import { QuizOrcamento } from "./quiz/QuizOrcamento";
import { useLanguage } from "@/contexts/LanguageContext";

const scaleCenter: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};
const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const CTASection = () => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  return (
    <div id="contato" className="w-full min-h-screen text-black flex items-center justify-center font-dm antialiased selection:bg-[#f06800] selection:text-white light-dotted-fade-in py-12 md:py-20 px-4 md:px-6">
      <motion.div className="w-full max-w-[1200px] relative z-20 flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={scaleCenter}>
        {/* Left: Quiz */}
        <motion.div className="relative lg:w-[58%] lg:-mr-8 z-10 order-2 lg:order-1" variants={slideUp}>
          <div className="relative rounded-2xl md:rounded-3xl p-5 md:p-8 overflow-hidden" style={{
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.99) 0%, rgba(252, 252, 252, 0.98) 100%)',
            border: '1px solid rgba(240, 104, 0, 0.15)',
            boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.15), 0 10px 30px -10px rgba(240, 104, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            minHeight: isMobile ? 'auto' : '560px'
          }}>
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#f06800]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#f06800]/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute top-4 right-4 md:top-5 md:right-5 w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-tr-lg">
              <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#f06800] to-transparent rounded-r-full" />
              <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#f06800] to-transparent rounded-t-full" />
            </div>
            <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-bl-lg">
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gray-300 to-transparent rounded-l-full" />
              <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-gray-300 to-transparent rounded-b-full" />
            </div>
            <div className="absolute top-4 left-4 md:top-5 md:left-5 flex items-center gap-2 bg-gradient-to-r from-[#f06800] to-[#ff8c42] text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg z-10">
              <span>{t("cta.badge")}</span>
            </div>
            <div className="mt-10 md:mt-12">
              <QuizOrcamento />
            </div>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div className="relative flex flex-col justify-between lg:w-[48%] min-h-[300px] md:min-h-[400px] rounded-2xl md:rounded-3xl overflow-hidden order-1 lg:order-2" variants={slideUp} style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)' }}>
          <img src={ctaBackground} alt="CTA Background" className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40 backdrop-blur-[1px]"></div>
          <div className="absolute top-4 right-4 md:top-5 md:right-5 w-16 h-16 overflow-hidden rounded-tr-lg">
            <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-white/30 to-transparent rounded-r-full" />
            <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-white/30 to-transparent rounded-t-full" />
          </div>
          <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 w-16 h-16 overflow-hidden rounded-bl-lg">
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#f06800]/50 to-transparent rounded-l-full" />
            <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-[#f06800]/50 to-transparent rounded-b-full" />
          </div>

          <div className="relative z-10 p-6 md:p-10 text-center lg:text-left">
            <span className="inline-block px-3 py-1 mb-4 text-xs md:text-sm font-medium text-[#f06800] bg-[#f06800]/10 backdrop-blur-sm rounded-full border border-[#f06800]/20">
              {t("cta.buildProject")}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-3 leading-tight">
              {t("cta.calcTitle")}{' '}<span className="text-[#f06800]">{t("cta.calcHighlight")}</span>
            </h2>
            <p className="text-sm md:text-base text-white/70 max-w-md mb-6 lg:mb-0">{t("cta.calcText")}</p>
          </div>

          <div className="relative z-10 p-6 md:p-10 pt-0 lg:hidden">
            <div className="flex flex-wrap gap-3 justify-center">
              {[t("cta.feature1"), t("cta.feature2"), t("cta.feature3")].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <svg className="w-3 h-3 text-[#f06800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 p-10 pt-0 hidden lg:block">
            <div className="flex flex-col gap-2">
              {[t("cta.feature1"), t("cta.feature2"), t("cta.feature3.desktop")].map((feature, index) => (
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
