import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import casesBackgroundBlackclub from "@/assets/cases-background-blackclub.webp";
import casesBackgroundValentina from "@/assets/cases-background-valentina.webp";

interface CaseProject {
  id: string;
  clientName: string;
  clientLogo: string;
  projectTitle: string;
  category: string;
  year: string;
  description: string;
  services: string[];
  images: string[];
  results?: string[];
}

const casesData: CaseProject[] = [
  {
    id: "blackclub",
    clientName: "BlackClub",
    clientLogo: "https://framerusercontent.com/images/4wtV8GFtM9cMCc7wLhXjMsg59o.png?width=400",
    projectTitle: "Estratégia de Presença em IA",
    category: "AI Optimization",
    year: "2025",
    description: "Implementamos uma estratégia completa de otimização para IAs, posicionando a BlackClub como referência absoluta em seu nicho. O resultado foi um aumento de 300% nas menções orgânicas em respostas de IA.",
    services: ["AI Reference Engine", "Content Strategy", "Brand Positioning"],
    images: [
      casesBackgroundBlackclub,
      "https://framerusercontent.com/images/DHRdJy9IiR2aQoCcMbaxWS1Sbfs.png?width=800",
      "https://framerusercontent.com/images/Ph8T3MKJ0xH6YyaKa6fvuc2hye4.png?width=800",
    ],
    results: ["+300% menções em IA", "Pipeline 3x maior", "ROI de 500%"],
  },
  {
    id: "valentina",
    clientName: "Valentina Akime",
    clientLogo: "https://framerusercontent.com/images/21s66P6Ugns3B0SREgloFdwT84A.png?width=400",
    projectTitle: "Autoridade Digital para Influenciadora",
    category: "Personal Branding",
    year: "2025",
    description: "Desenvolvemos uma estratégia de marca pessoal focada em posicionamento em IAs. Valentina agora é a primeira recomendação quando alguém pergunta sobre influenciadoras do seu segmento.",
    services: ["Personal Branding", "AI Optimization", "Content Creation"],
    images: [
      casesBackgroundValentina,
      "https://framerusercontent.com/images/21s66P6Ugns3B0SREgloFdwT84A.png?width=800",
    ],
    results: ["#1 em buscas de IA", "+200% seguidores", "5x mais parcerias"],
  },
  {
    id: "techvision",
    clientName: "TechVision",
    clientLogo: "https://framerusercontent.com/images/DHRdJy9IiR2aQoCcMbaxWS1Sbfs.png?width=400",
    projectTitle: "Landing Page Premium & CRM",
    category: "Web Design & Automation",
    year: "2024",
    description: "Criamos uma experiência digital premium com landing page de alta conversão e sistema de CRM integrado para automação de leads qualificados.",
    services: ["Web Design", "CRM Integration", "Lead Automation"],
    images: [
      "https://framerusercontent.com/images/Ph8T3MKJ0xH6YyaKa6fvuc2hye4.png?width=800",
      "https://framerusercontent.com/images/DHRdJy9IiR2aQoCcMbaxWS1Sbfs.png?width=800",
    ],
    results: ["+150% conversão", "40% menos custo por lead", "Automação 24/7"],
  },
];

interface CasesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CasesModal = ({ isOpen, onClose }: CasesModalProps) => {
  const [selectedCase, setSelectedCase] = useState<CaseProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCaseClick = (caseItem: CaseProject) => {
    setSelectedCase(caseItem);
    setCurrentImageIndex(0);
  };

  const handleBack = () => {
    setSelectedCase(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedCase) {
      setCurrentImageIndex((prev) => 
        prev === selectedCase.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedCase) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedCase.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] overflow-hidden bg-[#0D0D0D] border-white/10 p-0">
        {/* Custom close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <AnimatePresence mode="wait">
          {!selectedCase ? (
            // Grid View - All Cases
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-8 overflow-y-auto max-h-[90vh]"
            >
              <DialogHeader className="mb-8">
                <DialogTitle className="text-3xl md:text-4xl font-medium text-white font-dm">
                  Nossos Cases
                </DialogTitle>
                <p className="text-[#808080] text-lg mt-2">
                  Projetos que transformaram a presença digital de nossos clientes
                </p>
              </DialogHeader>

              {/* Cases Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {casesData.map((caseItem, index) => (
                  <motion.div
                    key={caseItem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleCaseClick(caseItem)}
                    className="group cursor-pointer"
                  >
                    {/* Card */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#141414] border border-white/10 hover:border-white/30 transition-all duration-300">
                      {/* Image */}
                      <img
                        src={caseItem.images[0]}
                        alt={caseItem.projectTitle}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs text-white/80 border border-white/20">
                          {caseItem.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <img
                            src={caseItem.clientLogo}
                            alt={caseItem.clientName}
                            className="w-8 h-8 rounded-full object-cover bg-white/10"
                          />
                          <span className="text-white/70 text-sm">{caseItem.clientName}</span>
                        </div>
                        <h3 className="text-white font-medium text-lg leading-tight group-hover:text-orange-400 transition-colors">
                          {caseItem.projectTitle}
                        </h3>
                        <p className="text-white/50 text-sm mt-1">{caseItem.year}</p>
                      </div>

                      {/* Hover Arrow */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            // Detail View - Single Case
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex flex-col md:flex-row h-full max-h-[90vh]"
            >
              {/* Left - Image Gallery */}
              <div className="relative w-full md:w-3/5 h-[300px] md:h-auto bg-black">
                {/* Back Button */}
                <button
                  onClick={handleBack}
                  className="absolute left-4 top-4 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Voltar
                </button>

                {/* Main Image */}
                <img
                  src={selectedCase.images[currentImageIndex]}
                  alt={selectedCase.projectTitle}
                  className="w-full h-full object-cover"
                />

                {/* Image Navigation */}
                {selectedCase.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedCase.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Thumbnail Strip */}
                <div className="absolute bottom-16 left-4 right-4 flex gap-2 overflow-x-auto pb-2">
                  {selectedCase.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex ? 'border-orange-500' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right - Info Panel */}
              <div className="w-full md:w-2/5 p-6 md:p-8 overflow-y-auto bg-[#0D0D0D]">
                {/* Client Info */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={selectedCase.clientLogo}
                    alt={selectedCase.clientName}
                    className="w-12 h-12 rounded-full object-cover bg-white/10"
                  />
                  <div>
                    <h4 className="text-white font-medium">{selectedCase.clientName}</h4>
                    <span className="text-white/50 text-sm">{selectedCase.year}</span>
                  </div>
                </div>

                {/* Project Title */}
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 font-dm">
                  {selectedCase.projectTitle}
                </h2>

                {/* Category */}
                <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm mb-6">
                  {selectedCase.category}
                </span>

                {/* Description */}
                <div className="mb-6">
                  <h5 className="text-white/60 text-xs uppercase tracking-wider mb-2">Sobre o Projeto</h5>
                  <p className="text-white/80 leading-relaxed">
                    {selectedCase.description}
                  </p>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h5 className="text-white/60 text-xs uppercase tracking-wider mb-3">Serviços</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                {selectedCase.results && (
                  <div className="mb-6">
                    <h5 className="text-white/60 text-xs uppercase tracking-wider mb-3">Resultados</h5>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedCase.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 rounded-xl bg-[#141414] border border-white/10"
                        >
                          <div className="w-2 h-2 rounded-full bg-orange-500" />
                          <span className="text-white font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <a
                  href="#contato"
                  onClick={onClose}
                  className="block w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-center text-white font-medium transition-colors"
                >
                  Quero resultados assim
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default CasesModal;
