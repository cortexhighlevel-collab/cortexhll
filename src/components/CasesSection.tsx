import { useState } from "react";
import { Globe, FileText, Terminal } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import logoEstrela from "@/assets/logo_estrela.webp";
import casesBackground from "@/assets/cases-background-blackclub.webp";
import casesBackground2 from "@/assets/cases-background-valentina.webp";
import CasesModal from "./CasesModal";
import { useLanguage } from "@/contexts/LanguageContext";
import luizMilionImage from "@/assets/luiz-milion.png";

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.805, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.805, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.92, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const staggerStats: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.115 } } };
const statItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.575, ease: "easeOut" } },
};

const ArrowNavLeft = () => (
  <svg viewBox="0 0 14 13" className="w-3.5 h-3.5 stroke-current">
    <path d="M 12.25 6.5 L 1.75 6.5 M 1.75 6.5 L 7 11.75 M 1.75 6.5 L 7 1.25" fill="transparent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);
const ArrowNavRight = () => (
  <svg viewBox="0 0 14 13" className="w-3.5 h-3.5 stroke-current">
    <path d="M 1.75 6.5 L 12.25 6.5 M 12.25 6.5 L 7 11.75 M 12.25 6.5 L 7 1.25" fill="transparent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);
const DecorativeStar = () => (
  <img src={logoEstrela} alt="" className="w-full h-full object-contain" />
);

const CasesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const testimonials = [
    {
      logo: null,
      logoText: "BLACKCLUB",
      quote: t("cases.testimonial1.quote"),
      author: "Luiz Milion",
      role: "BlackClub",
      authorImage: luizMilionImage,
      background: casesBackground,
    },
    {
      logo: null,
      logoText: "VALENTINA",
      quote: t("cases.testimonial2.quote"),
      author: "Valentina Akime",
      role: "Modelo & Influenciadora",
      authorImage: "https://framerusercontent.com/images/wTyKIHPDLvKHIu74YHBt7Hm44A.jpeg?width=200&height=200",
      background: casesBackground2,
    },
  ];

  const stats = [
    { value: "+500%", label: t("cases.stat1.label"), icon: Globe },
    { value: "47", label: t("cases.stat2.label"), icon: FileText },
    { value: "30", label: t("cases.stat3.label"), icon: Terminal },
  ];

  const avatars = [
    "https://framerusercontent.com/images/DHRdJy9IiR2aQoCcMbaxWS1Sbfs.png?width=381&height=301",
    "https://framerusercontent.com/images/Ph8T3MKJ0xH6YyaKa6fvuc2hye4.png?width=512&height=669",
    "https://framerusercontent.com/images/21s66P6Ugns3B0SREgloFdwT84A.png?width=128&height=128",
  ];

  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="cases" className="w-full bg-[#0D0D0D] text-white py-16 md:py-28 dark-dotted-fade-in font-dm">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-32 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <motion.div className="flex flex-col gap-8 max-w-xl" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={slideFromLeft}>
            <h2 className="text-5xl md:text-7xl font-medium leading-[1.0] tracking-tight text-[#F2F2F2]">
              {t("cases.title")}
            </h2>
            <button onClick={() => setIsModalOpen(true)} className="btn-cta-wrapper">
              <span className="btn-cta"><span className="btn-cta-text">{t("cases.cta")}</span></span>
            </button>
          </motion.div>

          <motion.div className="flex flex-col gap-6 items-end w-full md:w-auto" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={slideFromRight}>
            <p className="text-xl md:text-2xl text-[#C9C9C9] text-right max-w-md leading-relaxed font-light">
              {t("cases.description")}
            </p>
            <div className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="text-xs font-medium tracking-[0.2em] text-[#C9C9C9] uppercase">{t("cases.counter")}</span>
              <div className="flex items-center -space-x-3">
                {avatars.map((avatar, index) => (
                  <div key={index} className="w-9 h-9 rounded-full border border-[#F1F1F1] overflow-hidden bg-gray-800">
                    <img src={avatar} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="w-14 h-14"><DecorativeStar /></div>
              <p className="text-right text-lg text-[#C9C9C9] max-w-[150px] leading-tight font-light">{t("cases.tagline")}</p>
            </div>
          </motion.div>
        </div>

        {/* Testimonial Card */}
        <motion.div className="relative w-full h-[550px] md:h-[520px] rounded-[40px] overflow-hidden group bg-black border border-white/40" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={scaleUp}>
          {testimonials.map((testi, i) => (
            <link key={i} rel="preload" as="image" href={testi.background} />
          ))}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] flex items-center justify-end">
            {testimonials.map((testi, i) => (
              <img key={i} src={testi.background} alt="Background" className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 group-hover:scale-105 ${i === currentIndex ? 'opacity-100' : 'opacity-0'}`} />
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-full md:w-[45%] overflow-hidden">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />
            <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="opacity-90">
                  {currentTestimonial.logo ? (
                    <img src={currentTestimonial.logo} alt="Client Logo" className="w-24 h-auto object-contain" />
                  ) : (
                    <span className="text-white font-bold text-xl tracking-wider">{currentTestimonial.logoText}</span>
                  )}
                </div>
                <div className="flex gap-3">
                  <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition text-white"><ArrowNavLeft /></button>
                  <button onClick={handleNext} className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition text-black"><ArrowNavRight /></button>
                </div>
              </div>
              <div className="mt-8 mb-8">
                <p className="text-lg md:text-[18px] leading-relaxed text-white/90 font-light transition-opacity duration-300 tracking-wide">"{currentTestimonial.quote}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={currentTestimonial.authorImage} alt={currentTestimonial.author} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium text-sm leading-tight">{currentTestimonial.author}</span>
                  <span className="text-white/60 text-xs leading-tight font-light">{currentTestimonial.role}</span>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-6' : 'bg-white/30'}`} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-3" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerStats}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={index} className="flex items-center justify-center gap-4 py-8 px-10 rounded-[20px] border border-white/10 bg-[#141414]" variants={statItem}>
                <div className="text-white/80"><Icon className="w-7 h-7" strokeWidth={1.5} /></div>
                <div className="flex flex-col">
                  <span className="text-4xl md:text-5xl font-bold text-orange-500 leading-none">{stat.value}</span>
                  <span className="text-[#808080] text-xs tracking-[0.2em] uppercase mt-1 font-medium">{stat.label}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <CasesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default CasesSection;
