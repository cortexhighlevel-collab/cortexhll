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
      id: "segmentacao",
      title: "Segmentação avançada",
      description: "Públicos ultra-qualificados com base em dados comportamentais, demográficos e de intenção de compra para maximizar seu ROAS.",
      image: ofertaRequests,
      isNew: true,
    },
    {
      id: "pricing",
      title: "Investimento transparente",
      description: "Sem taxas ocultas. Você sabe exatamente quanto investe em mídia e quanto paga pela gestão. Relatórios claros e objetivos.",
      image: ofertaPricing,
      isNew: true,
    },
    {
      id: "turnaround",
      title: "Campanhas em 48h",
      description: "Da aprovação do briefing ao ar em até 48 horas. Agilidade sem comprometer qualidade dos criativos.",
      image: ofertaTurnaround,
      isNew: true,
    },
    {
      id: "otimizacao",
      title: "Otimização contínua",
      description: "Monitoramento diário, testes A/B e ajustes em tempo real para melhorar performance constantemente.",
      image: ofertaLaunch1,
    },
    {
      id: "relatorios",
      title: "Relatórios semanais",
      description: "Dashboards completos com métricas de ROI, CPL, CPA e insights acionáveis para tomada de decisão.",
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
            <p className="text-sm font-medium text-white/50">Gestão de Tráfego Pago</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mt-1">
              Escale suas vendas com anúncios que convertem
            </h2>
            <p className="mt-3 text-base text-white/70">
              Google Ads, Meta Ads e TikTok Ads gerenciados por especialistas. Estratégias data-driven para maximizar seu retorno sobre investimento.
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
                alt="Gestão de Tráfego Pago" 
                className="aspect-video w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-orange-500/30 bg-orange-500/15 px-2 py-0.5 text-[11px] font-medium text-orange-400">
                  RESULTADOS
                </span>
                <span className="text-xs text-white/60">+320% ROAS médio</span>
              </div>
              <h3 className="mt-3 text-2xl sm:text-3xl font-medium tracking-tight">
                Campanhas que geram vendas reais
              </h3>
              <p className="mt-2 text-sm sm:text-base text-white/70">
                Gestão completa das suas campanhas de tráfego pago. Criamos estratégias personalizadas, desenvolvemos criativos de alta conversão e otimizamos diariamente para entregar o máximo de resultado com seu investimento.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a 
                  href="#cases" 
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  Ver resultados
                </a>
                <a 
                  href="#contato" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-black bg-orange-500 rounded-lg px-4 py-2 hover:bg-orange-400 transition-colors"
                >
                  <Send className="h-4 w-4" />
                  Solicitar proposta
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
