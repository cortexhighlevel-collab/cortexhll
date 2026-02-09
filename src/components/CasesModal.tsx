import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ExternalLink } from 'lucide-react';
import casesBackgroundBlackclub from "@/assets/cases-background-blackclub.webp";
import casesBackgroundValentina from "@/assets/cases-background-valentina.webp";
import logoEstrela from "@/assets/logo_estrela.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    id: '1', title: 'BlackClub', category: 'AI Optimization',
    img: casesBackgroundBlackclub,
    clientLogo: 'https://framerusercontent.com/images/4wtV8GFtM9cMCc7wLhXjMsg59o.png?width=400',
    colSpan: 'col-span-12',
    description: "Implementamos uma estratégia completa de otimização para IAs, posicionando a BlackClub como referência absoluta em seu nicho. O resultado foi um aumento de 300% nas menções orgânicas em respostas de IA.",
    services: ["AI Reference Engine", "Content Strategy", "Brand Positioning"],
    results: ["+300% menções em IA", "Pipeline 3x maior", "ROI de 500%"],
    client: "BlackClub", year: "2025"
  },
  {
    id: '2', title: 'Valentina Akime', category: 'Personal Branding',
    img: casesBackgroundValentina,
    clientLogo: 'https://framerusercontent.com/images/21s66P6Ugns3B0SREgloFdwT84A.png?width=400',
    colSpan: 'col-span-12 md:col-span-6',
    description: "Desenvolvemos uma estratégia de marca pessoal focada em posicionamento em IAs. Valentina agora é a primeira recomendação quando alguém pergunta sobre influenciadoras do seu segmento.",
    services: ["Personal Branding", "AI Optimization", "Content Creation"],
    results: ["#1 em buscas de IA", "+200% seguidores", "5x mais parcerias"],
    client: "Valentina Akime", year: "2025"
  },
  {
    id: '3', title: 'TechVision', category: 'Web Design & Automation',
    img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop',
    clientLogo: 'https://framerusercontent.com/images/DHRdJy9IiR2aQoCcMbaxWS1Sbfs.png?width=400',
    colSpan: 'col-span-12 md:col-span-6',
    description: "Criamos uma experiência digital premium com landing page de alta conversão e sistema de CRM integrado para automação de leads qualificados.",
    services: ["Web Design", "CRM Integration", "Lead Automation"],
    results: ["+150% conversão", "40% menos custo por lead", "Automação 24/7"],
    client: "TechVision", year: "2024"
  },
  {
    id: '4', title: 'Kaizen Marketing', category: 'Marketing Agency',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    colSpan: 'col-span-12',
    description: "Branding futurista para uma agência que busca o próximo passo na evolução do marketing. Acabamentos cromados e estratégia de posicionamento em IA.",
    services: ["Branding", "AI Strategy", "Digital Presence"],
    results: ["+250% visibilidade", "2x clientes", "Autoridade consolidada"],
    client: "Kaizen Agency", year: "2024"
  },
  {
    id: '5', title: 'Neon Studio', category: 'Creative Studio',
    img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop',
    colSpan: 'col-span-12 md:col-span-5',
    description: "Direção de arte e identidade visual para estúdio criativo. Cores vibrantes e estética cyberpunk que reflete a essência inovadora da marca.",
    services: ["Art Direction", "Visual Identity", "Brand Strategy"],
    results: ["Identidade única", "+180% engajamento", "Reconhecimento de marca"],
    client: "Neon Studio", year: "2024"
  },
  {
    id: '6', title: 'Arsenal Digital', category: 'Digital Collectibles',
    img: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=2574&auto=format&fit=crop',
    colSpan: 'col-span-12 md:col-span-7',
    description: "A série Arsenal explora a identidade digital na era da IA. Renderizações hiper-realistas e estratégia de posicionamento para colecionáveis digitais.",
    services: ["Digital Strategy", "AI Positioning", "Content Creation"],
    results: ["+400% alcance", "Comunidade engajada", "Vendas recordes"],
    client: "Arsenal NFT", year: "2024"
  }
];

interface CasesModalProps { isOpen: boolean; onClose: () => void; }
interface Project { id: string; title: string; category: string; img: string; clientLogo?: string; colSpan: string; description: string; services: string[]; results: string[]; client: string; year: string; }
interface CardProps { project: Project; onClick: () => void; }
interface ModalProps { id: string; close: () => void; }

const CasesModal = ({ isOpen, onClose }: CasesModalProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) { document.body.style.overflow = 'hidden'; } else { document.body.style.overflow = 'unset'; setSelectedId(null); }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { if (selectedId) { setSelectedId(null); } else { onClose(); } }
    };
    window.addEventListener('keydown', handleEsc);
    return () => { window.removeEventListener('keydown', handleEsc); document.body.style.overflow = 'unset'; };
  }, [isOpen, selectedId, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#0D0D0D] overflow-y-auto font-dm">
          <button onClick={onClose} className="fixed top-6 right-6 z-[110] w-12 h-12 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-white/10 hover:border-[#f06800]/50 transition-all">
            <X className="w-5 h-5" />
          </button>

          <header className="sticky top-0 z-50 py-6 md:py-8 px-6 md:px-12 bg-[#0D0D0D]/80 backdrop-blur-xl border-b border-white/5">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="flex items-center gap-4">
              <img src={logoEstrela} alt="Cortex" className="w-8 h-8" />
              <h1 className="text-3xl md:text-5xl font-medium tracking-wide text-white">{t("casesModal.title")}</h1>
            </motion.div>
            <p className="text-[#808080] text-lg mt-2 ml-12">{t("casesModal.subtitle")}</p>
          </header>

          <main className="px-4 md:px-12 py-8 md:py-16">
            <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-12 gap-4 md:gap-6">
              {projects.map((project) => (<Card key={project.id} project={project} onClick={() => setSelectedId(project.id)} />))}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-12 md:mt-20 text-center">
              <button onClick={onClose} className="group inline-flex items-center gap-3 px-8 py-4 bg-[#f06800] border border-[#f06800] rounded-full text-white font-medium hover:bg-[#f06800]/90 transition-all duration-300">
                <span className="tracking-wider">{t("casesModal.close")}</span>
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              </button>
            </motion.div>
          </main>

          <AnimatePresence>
            {selectedId && (<DetailModal id={selectedId} close={() => setSelectedId(null)} t={t} />)}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function Card({ project, onClick }: CardProps) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} layoutId={`card-container-${project.id}`} onClick={onClick} className={`${project.colSpan} relative h-[280px] md:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group border border-white/10 hover:border-[#f06800]/50 transition-all duration-300`}>
      <motion.img layoutId={`card-image-${project.id}`} src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      <div className="absolute top-4 left-4 md:top-6 md:left-6">
        <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs text-white/80 border border-white/20 tracking-wider uppercase">{project.category}</span>
      </div>
      <motion.div layoutId={`card-label-${project.id}`} className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex items-end justify-between">
        <div className="flex flex-col gap-1">
          {project.clientLogo && (<img src={project.clientLogo} alt={project.title} className="w-10 h-10 rounded-full object-cover bg-white/10 mb-2" />)}
          <motion.h3 layoutId={`card-title-${project.id}`} className="text-xl md:text-2xl font-medium text-white tracking-wide">{project.title}</motion.h3>
          <span className="text-xs md:text-sm text-white/60 font-light tracking-wider">{project.year}</span>
        </div>
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#f06800]/20 backdrop-blur-md rounded-full flex items-center justify-center border border-[#f06800]/40 group-hover:bg-[#f06800] group-hover:scale-110 transition-all duration-300">
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white -rotate-45" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function DetailModal({ id, close, t }: ModalProps & { t: (key: string) => string }) {
  const project = projects.find((p) => p.id === id);
  if (!project) return null;

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[200]" />
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ type: 'spring', damping: 30, stiffness: 300 }} className="fixed inset-4 md:inset-10 lg:inset-16 z-[210] flex flex-col md:flex-row bg-[#0D0D0D] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <motion.div layoutId={`card-container-${id}`} className="relative w-full md:w-1/2 lg:w-3/5 h-[35vh] md:h-full">
          <motion.img layoutId={`card-image-${id}`} src={project.img} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
          <button onClick={(e) => { e.stopPropagation(); close(); }} className="md:hidden absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 z-50 active:scale-90 transition-transform">
            <X className="w-5 h-5" />
          </button>
        </motion.div>
        <div className="relative w-full md:w-1/2 lg:w-2/5 p-6 md:p-10 lg:p-12 flex flex-col justify-between bg-[#0D0D0D] overflow-y-auto">
          <button onClick={close} className="hidden md:flex absolute top-6 right-6 w-10 h-10 bg-white/5 rounded-full items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all z-50">
            <X className="w-5 h-5" />
          </button>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="flex-1 flex flex-col justify-center">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f06800]/10 rounded-full border border-[#f06800]/30">
                <img src={logoEstrela} alt="Cortex" className="w-4 h-4" />
                <span className="text-xs text-[#f06800] tracking-wider uppercase">{t("casesModal.featured")}</span>
              </div>
              <motion.h2 layoutId={`card-title-${id}`} className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-wide">{project.title}</motion.h2>
              <p className="text-sm md:text-base text-white/50 font-light tracking-wider uppercase">{project.category}</p>
            </div>
            <p className="mt-6 md:mt-10 text-base md:text-lg text-white/70 leading-relaxed font-light">{project.description}</p>
            <div className="mt-6 md:mt-8">
              <h5 className="text-white/40 text-xs uppercase tracking-wider mb-3">{t("casesModal.services")}</h5>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, idx) => (<span key={idx} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">{service}</span>))}
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <h5 className="text-white/40 text-xs uppercase tracking-wider mb-3">{t("casesModal.results")}</h5>
              <div className="grid grid-cols-1 gap-3">
                {project.results.map((result, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#141414] border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-[#f06800]" /><span className="text-white font-medium">{result}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 md:mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div><span className="text-xs text-white/40 uppercase tracking-wider">{t("casesModal.client")}</span><p className="mt-1 text-white font-medium">{project.client}</p></div>
              <div><span className="text-xs text-white/40 uppercase tracking-wider">{t("casesModal.year")}</span><p className="mt-1 text-white font-medium">{project.year}</p></div>
            </div>
            <a href="#contato" onClick={close} className="mt-8 md:mt-10 inline-flex items-center justify-center gap-3 w-full py-4 bg-[#f06800] text-white font-semibold rounded-full hover:bg-[#f06800]/90 transition-colors group">
              {t("casesModal.wantResults")}
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default CasesModal;
