import { motion, type Variants } from "framer-motion";

const fadeScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
        duration: 0.69,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.17,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.575, ease: "easeOut" },
  },
};

const MetodologiaSection = () => {
  return <section id="metodologia" className="w-full px-5 md:px-12 py-10 rounded-b-[40px] font-dm">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Card Container */}
        <motion.div 
          className="card-radius p-4 md:p-6 lg:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div className="mb-5 md:mb-8" variants={fadeUp}>
            <motion.h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight font-medium" variants={fadeUp}>
              A Resposta Está na IA
            </motion.h2>
            <motion.p className="text-base md:text-lg text-foreground/80 mt-2 font-light" variants={fadeUp}>
              Mas não qualquer IA — a nossa metodologia proprietária.
            </motion.p>
          </motion.div>

          {/* Quote Block */}
          <motion.div 
            className="video-radius overflow-hidden px-8 md:px-12 mb-5 md:mb-8 flex flex-col items-center justify-center bg-secondary-foreground text-primary-foreground w-full py-[150px]"
            variants={fadeScale}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-center leading-relaxed max-w-[800px] font-light">
              "O SEO tradicional morreu. As decisões de compra começam em conversas com ChatGPT, Claude e Gemini. 
              <strong> Se a IA não confia em você, você é invisível.</strong>"
            </p>
          </motion.div>

          {/* Cards Grid - New Layout */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-[minmax(200px,280px)_1fr] gap-4 md:gap-8"
            variants={staggerContainer}
          >
            {/* Left Column - Stacked Cards (narrower) */}
            <motion.div className="flex flex-col gap-3 md:gap-4 max-w-xs" variants={fadeUp}>
              {/* AI Referral Engine Card */}
              <div className="card-radius p-4 md:p-5 flex flex-col border border-border bg-background">
                <div className="flex items-start justify-between mb-3">
                  <span className="tag-pill text-xs bg-orange-500 text-white border-0">AI REFERRAL ENGINE™</span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Metodologia proprietária que posiciona sua marca como a resposta definitiva nas conversas com IA.
                </p>
              </div>

              {/* Resultados Card */}
              <div className="card-radius p-4 md:p-5 flex flex-col bg-[#F06600]">
                <div className="mb-3">
                  <span className="tag-pill text-xs bg-white/20 text-white">RESULTADOS COMPROVADOS</span>
                </div>
                <p className="text-sm leading-relaxed text-white">
                  +500% ROI médio. 47 empresas transformadas. Resultados em até 30 dias.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Text Only (no card) */}
            <motion.div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right" variants={fadeUp}>
              <div className="flex items-center gap-2 mb-4">
                <span className="tag-pill bg-foreground text-background text-xs tracking-wider">METODOLOGIA EXCLUSIVA</span>
                <span className="text-xs font-medium text-foreground/70 uppercase tracking-[0.2em]">6 ETAPAS</span>
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl leading-tight text-foreground font-light tracking-tight">
                Domine as respostas<br />da IA e conquiste<br />novos clientes.
              </p>
              <a href="#contato" className="mt-6 inline-flex items-center gap-2 text-orange-500 font-medium hover:gap-3 transition-all">
                Dominar as Respostas
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default MetodologiaSection;