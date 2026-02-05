import { Target, TrendingUp, BarChart3, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// Animation variants - Spring/Bounce effect
const springUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 87,
      damping: 13,
      duration: 0.92,
    },
  },
};

const staggerCards: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.17 },
  },
};

const cardBounce: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 104,
      damping: 10,
    },
  },
};

const fadeSlide: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.575, ease: "easeOut" },
  },
};

const OfertaSection = () => {
  const metrics = [
    { value: "+320%", label: "ROAS Médio", icon: TrendingUp },
    { value: "-47%", label: "Custo por Lead", icon: Target },
    { value: "3.2x", label: "Taxa de Conversão", icon: BarChart3 },
  ];

  const methodology = [
    {
      step: "01",
      title: "Auditoria Completa",
      description: "Análise profunda das suas campanhas atuais, identificando gaps e oportunidades de otimização.",
    },
    {
      step: "02",
      title: "Estratégia de Segmentação",
      description: "Criação de públicos qualificados com base em dados e comportamento do seu cliente ideal.",
    },
    {
      step: "03",
      title: "Criativos de Alta Performance",
      description: "Desenvolvimento de anúncios que convertem, com copy persuasiva e design premium.",
    },
    {
      step: "04",
      title: "Otimização Contínua",
      description: "Monitoramento em tempo real e ajustes semanais para maximizar resultados.",
    },
  ];

  const benefits = [
    "Google Ads, Meta Ads e TikTok Ads",
    "Gestão completa de campanhas",
    "Relatórios semanais detalhados",
    "Acompanhamento de métricas em tempo real",
    "Criativos desenvolvidos por especialistas",
    "Otimização de funil de vendas",
  ];

  return (
    <section className="w-full bg-[#0D0D0D] text-white dark-dotted-fade-in font-dm">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:px-12 md:py-28 flex flex-col gap-16 md:gap-24 relative z-10">
        {/* TOP SECTION: Header & CTA */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={springUp}
        >
          {/* Title */}
          <div className="max-w-xl">
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-xs font-medium mb-4 uppercase tracking-[0.2em]">
              TRÁFEGO PAGO
            </span>
            <h2 className="text-5xl md:text-7xl font-medium leading-[1.0] tracking-tight text-[#F2F2F2]">
              Escale suas vendas com anúncios
            </h2>
          </div>

          {/* CTA Button */}
          <a 
            href="#contato" 
            className="group flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300"
          >
            <span className="text-sm font-medium tracking-wider uppercase text-[#F2F2F2]">Solicitar Proposta</span>
            <span className="bg-white text-black p-1 rounded-full group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>
        </motion.div>

        {/* METRICS SECTION */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerCards}
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div 
                key={index} 
                className="flex items-center justify-center gap-4 py-10 px-8 rounded-[24px] border border-white/10 bg-[#141414]" 
                variants={cardBounce}
              >
                <div className="text-orange-500">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl md:text-5xl font-bold text-orange-500 leading-none">{metric.value}</span>
                  <span className="text-[#808080] text-xs tracking-[0.2em] uppercase mt-1 font-medium">{metric.label}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* TWO COLUMNS: Methodology + Benefits */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerCards}
        >
          {/* METHODOLOGY */}
          <motion.div className="rounded-[32px] p-8 md:p-10 bg-white/[0.03] border border-white/10" variants={cardBounce}>
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-6 h-6 text-orange-500" />
              <h3 className="text-2xl font-medium text-white tracking-wide">Nossa Metodologia</h3>
            </div>
            <div className="space-y-6">
              {methodology.map((item, index) => (
                <motion.div key={index} className="flex gap-4" variants={fadeSlide}>
                  <span className="text-orange-500 font-bold text-lg">{item.step}</span>
                  <div>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-white/60 text-sm font-light leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BENEFITS */}
          <motion.div className="rounded-[32px] p-8 md:p-10 bg-orange-500/10 border border-orange-500/20" variants={cardBounce}>
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="w-6 h-6 text-orange-500" />
              <h3 className="text-2xl font-medium text-white tracking-wide">O Que Está Incluso</h3>
            </div>
            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <motion.li key={index} className="flex items-center gap-3 text-white/80 font-light" variants={fadeSlide}>
                  <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></span>
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Platforms */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-4">Plataformas</p>
              <div className="flex flex-wrap gap-2">
                {["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads"].map((platform, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-medium"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfertaSection;
