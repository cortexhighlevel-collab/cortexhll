import { FileText, Send } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// Images
import ofertaHero from "@/assets/oferta-hero.jpg";
import ofertaRequests from "@/assets/oferta-requests.jpg";
import ofertaPricing from "@/assets/oferta-pricing.jpg";
import ofertaTurnaround from "@/assets/oferta-turnaround.jpg";
import ofertaLaunch1 from "@/assets/oferta-launch-1.jpg";
import ofertaLaunch2 from "@/assets/oferta-launch-2.jpg";

// Animation variants
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const OfertaSection = () => {
  const features = [
    {
      id: "requests",
      title: "Requests & revisões",
      description: "Itere rapidamente com solicitações assíncronas e feedback estruturado. Cada rodada termina com raciocínio claro e próximos passos.",
      image: ofertaRequests,
      isNew: true,
    },
    {
      id: "pricing",
      title: "Preço sem surpresas",
      description: "Planos simples, sem pegadinhas. Pause quando quiser. Escale quando estiver pronto.",
      image: ofertaPricing,
      isNew: true,
    },
    {
      id: "turnaround",
      title: "Entrega rápida",
      description: "A maioria das tarefas é entregue em 48–72 horas sem sacrificar qualidade.",
      image: ofertaTurnaround,
      isNew: true,
    },
    {
      id: "launch1",
      title: "Vá ao ar em dias",
      description: "Do primeiro briefing às campanhas ao vivo em uma semana, com tracking e QA inclusos.",
      image: ofertaLaunch1,
    },
    {
      id: "launch2",
      title: "Suporte dedicado",
      description: "Acompanhamento próximo com especialistas para otimização contínua das suas campanhas.",
      image: ofertaLaunch2,
    },
  ];

  return (
    <section className="w-full bg-[#0D0D0D] text-white dark-dotted-fade-in font-dm">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"
          variants={fadeUp}
        >
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-white/50">O que você recebe</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mt-1">
              Features construídas para crescimento eficiente
            </h2>
            <p className="mt-3 text-base text-white/70">
              De solicitações criativas ilimitadas a preços transparentes, nosso sistema operacional ajuda você a escalar aquisição com confiança.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Big feature - spans 2 cols and 2 rows */}
          <motion.div 
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-2 md:row-span-2"
            variants={fadeUp}
          >
            <div className="relative">
              <img 
                src={ofertaHero} 
                alt="Launch experiments" 
                className="aspect-video w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-orange-500/30 bg-orange-500/15 px-2 py-0.5 text-[11px] font-medium text-orange-400">
                  NOVO
                </span>
                <span className="text-xs text-white/60">Pipeline ilimitado</span>
              </div>
              <h3 className="mt-3 text-2xl sm:text-3xl font-medium tracking-tight">
                Lance experimentos, não suposições
              </h3>
              <p className="mt-2 text-sm sm:text-base text-white/70">
                Envie ideias de teste e solicitações criativas ilimitadas. Priorizamos por impacto, entregamos rápido e reportamos claramente para que aprendizados se acumulem toda semana.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a 
                  href="#cases" 
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  Ver case studies
                </a>
                <a 
                  href="#contato" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-black bg-orange-500 rounded-lg px-4 py-2 hover:bg-orange-400 transition-colors"
                >
                  <Send className="h-4 w-4" />
                  Iniciar solicitação
                </a>
              </div>
            </div>
          </motion.div>

          {/* Feature cards - right column */}
          {features.slice(0, 2).map((feature) => (
            <motion.div 
              key={feature.id}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              variants={fadeUp}
            >
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium tracking-tight flex items-center gap-2">
                    {feature.title}
                  </h3>
                  {feature.isNew && (
                    <span className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/15 px-2 py-0.5 text-[11px] font-medium text-orange-400">
                      NOVO
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-white/70">{feature.description}</p>
                <div className="mt-4 rounded-lg overflow-hidden border border-white/10">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="aspect-video w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom row - small cards */}
          {features.slice(2).map((feature) => (
            <motion.div 
              key={feature.id}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              variants={fadeUp}
            >
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-medium tracking-tight flex items-center gap-2">
                  {feature.title}
                  {feature.isNew && (
                    <span className="ml-2 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/15 px-2 py-0.5 text-[11px] font-medium text-orange-400">
                      NOVO
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm text-white/70">{feature.description}</p>
                <div className="mt-4 rounded-lg overflow-hidden border border-white/10">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="aspect-video w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OfertaSection;
