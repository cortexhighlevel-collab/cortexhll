import { Globe, FileText, Zap, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// Animation variants - Spring/Bounce effect
const springUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
};

const staggerCards: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
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
      stiffness: 120,
      damping: 12,
    },
  },
};

const fadeSlide: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const OfertaSection = () => {
  return (
    <section className="w-full bg-[#0D0D0D] text-white dark-dotted-bg font-dm">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:px-12 md:py-28 flex flex-col gap-16 md:gap-24">
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
              IDEAL PARA / NÃO É PARA
            </span>
            <h2 className="text-5xl md:text-7xl font-medium leading-[1.0] tracking-tight text-[#F2F2F2]">
              O que você recebe
            </h2>
          </div>

          {/* CTA Button */}
          <a 
            href="#contato" 
            className="group flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300"
          >
            <span className="text-sm font-medium tracking-wider uppercase text-[#F2F2F2]">Começar Diagnóstico</span>
            <span className="bg-white text-black p-1 rounded-full group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>
        </motion.div>

        {/* TWO COLUMNS: Ideal vs Not Ideal */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerCards}
        >
          {/* IDEAL PARA */}
          <motion.div className="rounded-[32px] p-8 md:p-10 bg-green-500/10 border border-green-500/20" variants={cardBounce}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">✅</span>
              <h3 className="text-2xl font-medium text-white tracking-wide">IDEAL PARA</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Empresas que querem dominar IA",
                "Quem valoriza qualidade sobre quantidade",
                "Negócios prontos para escalar",
                "Líderes que buscam resultados reais",
                "Marcas que querem ser recomendadas pela IA",
              ].map((item, index) => (
                <motion.li key={index} className="flex items-start gap-3 text-white/80 font-light" variants={fadeSlide}>
                  <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* NÃO É PARA */}
          <motion.div className="rounded-[32px] p-8 md:p-10 bg-red-500/10 border border-red-500/20" variants={cardBounce}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">❌</span>
              <h3 className="text-2xl font-medium text-white tracking-wide">NÃO É PARA</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Quem busca "mais do mesmo"',
                "Quem não quer investir em qualidade",
                "Projetos sem clareza de objetivos",
                "Empresas que querem só o barato",
                "Quem não acredita no poder da IA",
              ].map((item, index) => (
                <motion.li key={index} className="flex items-start gap-3 text-white/80 font-light" variants={fadeSlide}>
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* BOTTOM SECTION: Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerCards}
        >
          <motion.div className="flex items-center justify-center gap-3 p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm" variants={cardBounce}>
            <Globe className="w-6 h-6 text-white/90" />
            <span className="text-[#C9C9C9] text-sm md:text-base tracking-[0.15em] uppercase font-medium">METODOLOGIA EXCLUSIVA</span>
          </motion.div>

          <motion.div className="flex items-center justify-center gap-3 p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm" variants={cardBounce}>
            <FileText className="w-6 h-6 text-white/90" />
            <span className="text-[#C9C9C9] text-sm md:text-base tracking-[0.15em] uppercase font-medium">RELATÓRIOS DETALHADOS</span>
          </motion.div>

          <motion.div className="flex items-center justify-center gap-3 p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm" variants={cardBounce}>
            <Zap className="w-6 h-6 text-white/90" />
            <span className="text-[#C9C9C9] text-sm md:text-base tracking-[0.15em] uppercase font-medium">RESULTADOS EM 30 DIAS</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfertaSection;
