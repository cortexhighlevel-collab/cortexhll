import { FileText, Send, Target, LineChart, Bot, BarChart3, Headphones } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// Images
import ofertaHero from "@/assets/oferta-hero.webp";
import ofertaSegmentacao from "@/assets/oferta-segmentacao.jpg";
import ofertaPricing from "@/assets/oferta-pricing.jpg";
import ofertaTurnaround from "@/assets/oferta-turnaround.jpg";
import ofertaLaunch1 from "@/assets/oferta-launch-1.jpg";
import ofertaLaunch2 from "@/assets/oferta-launch-2.jpg";
import logoEstrela from "@/assets/logo_estrela.webp";

// Animation variants
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
};
const OfertaSection = () => {
  const features = [{
    id: "segmentacao",
    title: "Segmentação avançada",
    description: "Públicos ultra-qualificados com base em dados comportamentais, demográficos e de intenção de compra para maximizar seu ROAS.",
    image: ofertaSegmentacao,
    icon: Target,
    isNew: true
  }, {
    id: "pricing",
    title: "Investimento transparente",
    description: "Sem taxas ocultas. Você sabe exatamente quanto investe em mídia e quanto paga pela gestão. Relatórios claros e objetivos.",
    image: ofertaPricing,
    icon: LineChart,
    isNew: true
  }, {
    id: "agent-monitoramento",
    title: "Agent de análise ativo",
    description: "A partir da primeira impressão, o agent é ativado para monitorar e acompanhar suas campanhas, sendo atualizado no seu painel de gestão em tempo real.",
    image: ofertaTurnaround,
    icon: Bot,
    isNew: true
  }, {
    id: "otimizacao",
    title: "Otimização contínua",
    description: "Monitoramento diário, testes A/B e ajustes em tempo real para melhorar performance constantemente.",
    image: ofertaLaunch1,
    icon: BarChart3
  }, {
    id: "relatorios",
    title: "Suporte dedicado",
    description: "Acompanhamento próximo com especialistas para otimização contínua das suas campanhas.",
    image: ofertaLaunch2,
    icon: Headphones
  }];
  return <section className="w-full bg-[#0D0D0D] text-white dark-dotted-fade-in font-dm">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24" initial="hidden" whileInView="visible" viewport={{
      once: false,
      amount: 0.15
    }} variants={staggerContainer}>
        {/* Header */}
        <motion.div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12" variants={fadeUp}>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoEstrela} alt="" className="w-5 h-5" />
              <p className="text-sm font-medium text-orange-400 uppercase tracking-widest">Gestão de Tráfego Pago</p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              Escale suas vendas com anúncios que convertem
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">
              Google Ads, Meta Ads e TikTok Ads gerenciados por especialistas. Estratégias data-driven para maximizar seu retorno sobre investimento.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {/* Big feature - spans 2 cols and 2 rows */}
          <motion.div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#141414] md:col-span-2 md:row-span-2 hover:border-white/20 transition-all duration-500" variants={fadeUp}>
            <div className="relative p-5 sm:p-6">
              <img src={ofertaHero} alt="Gestão de Tráfego Pago" className="w-full h-auto rounded-2xl object-contain" />
              
              {/* Floating badge */}
              <div className="absolute top-8 left-8 sm:top-9 sm:left-9 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-white/90">Campanhas ativas</span>
              </div>
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/10 border border-orange-500/30 px-3 py-1 text-[11px] font-semibold text-orange-400 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  Resultados
                </span>
                <span className="text-sm text-white/50">+145,68% ROAS médio</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight leading-tight">
                Campanhas que geram vendas reais
              </h3>
              <p className="mt-3 text-sm sm:text-base text-white/60 leading-relaxed max-w-xl">
                Gestão completa das suas campanhas de tráfego pago. Criamos estratégias personalizadas, desenvolvemos criativos de alta conversão e otimizamos diariamente.
              </p>
              
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#cases" className="group/btn inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <FileText className="h-4 w-4 text-white/60 group-hover/btn:text-white transition-colors" />
                  Ver resultados
                </a>
                <a href="#contato" className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-black bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl px-5 py-2.5 hover:from-orange-400 hover:to-orange-300 transition-all duration-300 shadow-lg shadow-orange-500/20">
                  <Send className="h-4 w-4" />
                  Solicitar proposta
                </a>
              </div>
              
              {/* 3D Glass ROI Chart */}
              <motion.div 
                className="mt-6 relative overflow-hidden rounded-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 rounded-3xl blur-xl" />
                
                {/* Main glass container with 3D perspective */}
                <div 
                  className="relative p-5 sm:p-6 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl"
                  style={{ 
                    transform: 'perspective(1000px) rotateX(2deg)',
                    boxShadow: '0 25px 50px -12px rgba(240, 104, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.1)'
                  }}
                >
                  {/* Inner glass reflection */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl pointer-events-none" />
                  
                  <div className="relative flex items-end justify-between gap-6">
                    {/* 3D Rising Chart */}
                    <div className="flex-1 relative h-24 sm:h-28">
                      {/* Grid lines background */}
                      <div className="absolute inset-0 flex flex-col justify-between opacity-20">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="border-t border-white/30 border-dashed" />
                        ))}
                      </div>
                      
                      {/* Chart area with gradient fill */}
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 100">
                        <defs>
                          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#f06800" stopOpacity="0.6" />
                            <stop offset="50%" stopColor="#f06800" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#f06800" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f06800" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#fb923c" stopOpacity="1" />
                          </linearGradient>
                          <filter id="glow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        
                        {/* Filled area under the line */}
                        <path
                          d="M0 85 Q20 80, 30 75 T60 65 T90 55 T120 40 T150 25 T180 15 T200 5 L200 100 L0 100 Z"
                          fill="url(#chartGradient)"
                        />
                        
                        {/* Main rising line with glow */}
                        <path
                          d="M0 85 Q20 80, 30 75 T60 65 T90 55 T120 40 T150 25 T180 15 T200 5"
                          fill="none"
                          stroke="url(#lineGradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          filter="url(#glow)"
                        />
                        
                        {/* Glowing endpoint */}
                        <circle cx="200" cy="5" r="5" fill="#fb923c" filter="url(#glow)" />
                        <circle cx="200" cy="5" r="3" fill="#fff" />
                      </svg>
                      
                      {/* Data points */}
                      <div className="absolute inset-0 flex items-end justify-between px-2">
                        {[15, 20, 25, 35, 45, 60, 75, 85, 95].map((h, i) => (
                          <motion.div 
                            key={i}
                            className="w-1.5 sm:w-2 rounded-full bg-gradient-to-t from-orange-500/0 via-orange-500/50 to-orange-400"
                            style={{ height: `${h}%` }}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ delay: 0.1 * i, duration: 0.5, ease: "easeOut" }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* ROI Badge - 3D Glass */}
                    <div 
                      className="relative flex-shrink-0 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent backdrop-blur-xl border border-white/30"
                      style={{
                        boxShadow: '0 8px 32px rgba(240, 104, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)'
                      }}
                    >
                      {/* Glass shine */}
                      <div className="absolute top-0 left-2 right-2 h-1/3 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl" />
                      
                      <div className="relative text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <motion.svg 
                            className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            initial={{ y: 5, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                          </motion.svg>
                          <span className="text-[10px] sm:text-xs text-green-400 font-medium uppercase tracking-wider">ROI</span>
                        </div>
                        <motion.div 
                          className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                        >
                          +145,68%
                        </motion.div>
                        <span className="text-[10px] text-white/50">média mensal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature cards - right column */}
          {features.slice(0, 2).map(feature => {
          const Icon = feature.icon;
          return <motion.div key={feature.id} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#141414] hover:border-white/20 hover:bg-[#1a1a1a] transition-all duration-500" variants={fadeUp}>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/5 border border-orange-500/20">
                      <Icon className="h-5 w-5 text-orange-400" />
                    </div>
                    {feature.isNew && <span className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/10 border border-orange-500/30 px-2.5 py-0.5 text-[10px] font-semibold text-orange-400 uppercase tracking-wider">
                        Novo
                      </span>}
                  </div>
                  
                  <h3 className="text-lg font-medium tracking-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
                  
                  <div className="mt-4 rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                    <img src={feature.image} alt={feature.title} className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              </motion.div>;
        })}

          {/* Bottom row - small cards */}
          {features.slice(2).map(feature => {
          const Icon = feature.icon;
          return <motion.div key={feature.id} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#141414] hover:border-white/20 hover:bg-[#1a1a1a] transition-all duration-500" variants={fadeUp}>
                <div className="p-5 sm:p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/5 border border-orange-500/20">
                      <Icon className="h-4 w-4 text-orange-400" />
                    </div>
                    <h3 className="text-base font-medium tracking-tight">
                      {feature.title}
                    </h3>
                    {feature.isNew && <span className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/10 border border-orange-500/30 px-2 py-0.5 text-[9px] font-semibold text-orange-400 uppercase tracking-wider">
                        Novo
                      </span>}
                  </div>
                  
                  <p className="text-sm text-white/50 leading-relaxed min-h-[40px] mb-4">{feature.description}</p>
                  
                  <div className="mt-auto rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                    <img src={feature.image} alt={feature.title} className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              </motion.div>;
        })}
        </div>
      </motion.div>
    </section>;
};
export default OfertaSection;