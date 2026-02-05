import { Globe, ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import problemCardBg from "@/assets/problem-card-bg.jpg";
import googleAdsBurning from "@/assets/google-ads-burning.jpg";
import brainFunnel from "@/assets/brain-funnel.jpg";
const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.805,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};
const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.805,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};
const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.667,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};
const ProblemSection = () => {
  return <section className="w-full px-5 md:px-12 py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header */}
        <motion.div className="flex flex-col items-center text-center gap-3 mb-16" initial="hidden" whileInView="visible" viewport={{
        once: false,
        amount: 0.5
      }} variants={fadeInUp}>
          <span className="text-orange-500 text-xs uppercase tracking-[0.2em] font-medium font-dm">
            Você se identifica?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight font-dm">
            Problemas que impedem seu crescimento
          </h2>
        </motion.div>

        {/* Row 1: Card Left + Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
          {/* Card - "Seu site é lindo mas..." */}
          <motion.div className="relative overflow-hidden rounded-3xl bg-zinc-900 min-h-[350px] lg:min-h-[400px] flex flex-col group hover:bg-zinc-800 transition-colors duration-300" initial="hidden" whileInView="visible" viewport={{
          once: false,
          amount: 0.3
        }} variants={fadeInLeft}>
            {/* Background Image */}
            <img src={brainFunnel} alt="" className="absolute inset-0 w-full h-full object-cover" />
            {/* Tags at top */}
            <div className="relative z-20 p-6 flex gap-2">
              <span className="px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                Site que não vende
              </span>
              <span className="px-3 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium border border-orange-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                Sem conversão
              </span>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div className="flex flex-col justify-center" initial="hidden" whileInView="visible" viewport={{
          once: false,
          amount: 0.5
        }} variants={fadeInRight}>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight mb-4 font-dm">
              Seu site é lindo mas...
            </h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-dm font-light">
              Você investiu em um site bonito, mas ele não converte visitantes em clientes. Falta estratégia de conversão e posicionamento. O design impressiona, mas sem a estrutura certa, ele é apenas uma vitrine vazia.
            </p>
          </motion.div>
        </div>

        {/* Row 2: Text Left + Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
          {/* Text Content - Order changes on mobile */}
          <motion.div className="flex flex-col justify-center order-2 lg:order-1" initial="hidden" whileInView="visible" viewport={{
          once: false,
          amount: 0.5
        }} variants={fadeInLeft}>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight mb-4 font-dm">
              Gastou em ads mas...
            </h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-dm font-light">
              Você queima dinheiro em anúncios pagos sem ver retorno real. O problema não é o tráfego, é a estratégia por trás. Sem uma fundação sólida, cada clique é dinheiro jogado fora.
            </p>
          </motion.div>

          {/* Card */}
          <motion.div className="relative overflow-hidden rounded-3xl bg-zinc-900 min-h-[350px] lg:min-h-[400px] flex flex-col group hover:bg-zinc-800 transition-colors duration-300 order-1 lg:order-2 border border-zinc-600" initial="hidden" whileInView="visible" viewport={{
          once: false,
          amount: 0.3
        }} variants={fadeInRight}>
            {/* Background Image */}
            <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-100" src="/lovable-uploads/ee04cb1a-f1a2-4c44-88ae-7112d2d9a445.jpg" />
            {/* Tags at top */}
            <div className="relative z-10 p-6 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                Tráfego sem ROI
              </span>
              <span className="px-3 py-1.5 rounded-full bg-red-500/20 text-red-400 text-xs font-medium border border-red-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                Ads
              </span>
            </div>
          </motion.div>
        </div>

        {/* Row 3: Card Left + Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Card - Orange gradient */}
          <motion.div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 min-h-[350px] lg:min-h-[400px] flex flex-col group hover:from-orange-600 hover:to-orange-700 transition-all duration-300 cursor-pointer" initial="hidden" whileInView="visible" viewport={{
          once: false,
          amount: 0.3
        }} variants={fadeInLeft}>
            {/* Icon at top */}
            <div className="relative z-10 p-6">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-orange-500 transition-colors duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div className="flex flex-col justify-center" initial="hidden" whileInView="visible" viewport={{
          once: false,
          amount: 0.5
        }} variants={fadeInRight}>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight mb-4 font-dm">
              ChatGPT não recomenda...
            </h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-dm font-light">
              Quando alguém pergunta ao ChatGPT, Claude ou Gemini sobre seu nicho, sua empresa não aparece. Você é invisível para a nova era da busca. É hora de se posicionar onde o futuro já está acontecendo.
            </p>
          </motion.div>
        </div>

      </div>
    </section>;
};
export default ProblemSection;