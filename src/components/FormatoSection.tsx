import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import aiIntelligenceImage from "@/assets/ai-intelligence-card.webp";
import crmCardImage from "@/assets/crm-card.webp";
import aiReferenceEngineImage from "@/assets/ai-reference-engine-card.webp";
import designPerformanceImage from "@/assets/design-performance-card.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const ArrowIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
  </svg>;

const staggerCards: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.14 } } };
const cardReveal: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.575, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const headerSlide: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.69, ease: "easeOut" } },
};

interface ServiceCardProps {
  tag: string;
  title: string;
  subtitle: string;
  items: string[];
  imageUrl: string;
  link?: string;
  learnMore: string;
}
const ServiceCard = ({ tag, title, subtitle, items, imageUrl, link = "https://fluxo.cortexhl.com/", learnMore }: ServiceCardProps) => <div className="course-card group font-dm h-[420px] lg:h-[450px]">
    <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 lg:group-hover:scale-105" />
    <div className="course-overlay absolute inset-0 transition-opacity duration-300 lg:opacity-60 lg:group-hover:opacity-100" />
    <div className="absolute inset-0 p-6 flex flex-col justify-between">
      <div className="flex">
        <div className="course-tag tracking-wider"><span className="dot" />{tag}</div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-white/80 text-xs lg:text-sm mb-1 font-light">{subtitle}</p>
          <h3 className="text-white text-xl lg:text-2xl font-medium leading-tight lg:group-hover:mb-3 lg:mb-0 mb-3 transition-all duration-300">{title}</h3>
          <ul className="space-y-1.5 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-40 lg:group-hover:opacity-100 max-h-40 opacity-100 overflow-hidden transition-all duration-300 ease-out">
            {items.map((item, index) => <li key={index} className="text-white/70 text-xs lg:text-sm flex items-center gap-2 font-light">
                <span className="w-1 h-1 rounded-full bg-orange-500"></span>{item}
              </li>)}
          </ul>
        </div>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-foreground text-xs lg:text-sm font-medium uppercase tracking-wider w-fit hover:bg-white/90 transition-colors">
            {learnMore}<ArrowIcon />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-foreground text-xs lg:text-sm font-medium uppercase tracking-wider w-fit">
            {learnMore}<ArrowIcon />
          </span>
        )}
      </div>
    </div>
  </div>;

const FormatoSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { t } = useLanguage();

  const services = [{
    tag: "AI INTELLIGENCE",
    title: t("services.ai.title"),
    subtitle: t("services.ai.subtitle"),
    items: ["Automação", "Análise", "AEO & SEO", "Agentes de IA", "Engenharia de Prompt"],
    imageUrl: aiIntelligenceImage,
    link: "https://ops.cortexhl.com/",
    learnMore: t("services.learnMore")
  }, {
    tag: "CRM",
    title: t("services.crm.title"),
    subtitle: t("services.crm.subtitle"),
    items: ["Funis de Venda", "Email Automation", "Gestão de Contatos", "Predictions"],
    imageUrl: crmCardImage,
    learnMore: t("services.learnMore")
  }, {
    tag: "AI REFERRAL",
    title: t("services.referral.title"),
    subtitle: t("services.referral.subtitle"),
    items: ["Referral Engine", "Growth Hacking", "Automação de Indicações", "Rewards System"],
    imageUrl: aiReferenceEngineImage,
    link: "",
    learnMore: t("services.learnMore")
  }, {
    tag: "DESIGN & PERFORMANCE",
    title: t("services.design.title"),
    subtitle: t("services.design.subtitle"),
    items: ["UI/UX & Web Design", "Motion Design", "Landing Pages", "Sites Premium", "Tráfego Pago", "SEO Avançado"],
    imageUrl: designPerformanceImage,
    link: "",
    learnMore: t("services.learnMore")
  }];

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return <section id="servicos" className="w-full px-5 md:px-12 py-16 md:py-24 font-dm scroll-mt-24">
      <div className="max-w-[1400px] mx-auto">
        <motion.div className="mb-10 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={headerSlide}>
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-xs font-medium mb-4 uppercase tracking-[0.2em]">
            {t("services.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight max-w-[600px]">
            {t("services.title")}
          </h2>
        </motion.div>

        <motion.div className="hidden lg:grid lg:grid-cols-4 gap-4" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerCards}>
          {services.map((service, index) => (
            <motion.div key={index} variants={cardReveal}><ServiceCard {...service} /></motion.div>
          ))}
        </motion.div>

        <div className="lg:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, index) => (
                <div key={index} className="flex-[0_0_85%] min-w-0 pr-4"><ServiceCard {...service} /></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={scrollPrev} className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-zinc-100 transition-colors" aria-label="Previous">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button key={index} onClick={() => emblaApi?.scrollTo(index)} className={`w-2 h-2 rounded-full transition-colors ${index === selectedIndex ? "bg-orange-500" : "bg-zinc-300"}`} />
              ))}
            </div>
            <button onClick={scrollNext} className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-zinc-100 transition-colors" aria-label="Next">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default FormatoSection;
