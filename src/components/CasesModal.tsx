import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

// --- DATA & ASSETS ---
const projects = [
  {
    id: '1',
    title: 'Savage Nation',
    category: 'Digital Collectible',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    colSpan: 'col-span-12',
    description: "Uma exploração profunda em formas orgânicas e texturas sintéticas. Savage Nation redefine o conceito de colecionáveis digitais através de renderização volumétrica e iluminação dinâmica."
  },
  {
    id: '2',
    title: 'Gooey Crunch',
    category: 'Ecommerce',
    img: 'https://images.unsplash.com/photo-1614727187346-79ef54f5904b?q=80&w=2574&auto=format&fit=crop',
    colSpan: 'col-span-12 md:col-span-5',
    description: "Interface de e-commerce imersiva criada para uma marca de doces experimentais. O foco foi na tactilidade visual e em interações viscosas."
  },
  {
    id: '3',
    title: 'Kaizen Talent',
    category: 'Marketing Agency',
    img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop',
    colSpan: 'col-span-12 md:col-span-7',
    description: "Branding futurista para uma agência que busca o próximo passo na evolução do marketing. Acabamentos cromados e metáforas espaciais."
  },
  {
    id: '4',
    title: 'Valeria Games',
    category: 'Mobile Game',
    img: 'https://images.unsplash.com/photo-1614726365723-49aeaa4f3a45?q=80&w=2574&auto=format&fit=crop',
    colSpan: 'col-span-12',
    description: "Um jogo mobile que desafia a gravidade. A direção de arte foca em horizontes infinitos e geometria sagrada."
  },
  {
    id: '5',
    title: 'Neon Vision',
    category: 'Comic Book',
    img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop',
    colSpan: 'col-span-12 md:col-span-6',
    description: "Adaptação narrativa visual. Cores pastéis saturadas encontram o horror cósmico em uma novela gráfica interativa."
  },
  {
    id: '6',
    title: 'Arsenal',
    category: 'Collectible',
    img: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=2574&auto=format&fit=crop',
    colSpan: 'col-span-12 md:col-span-6',
    description: "A série Arsenal explora a identidade humana na era da reprodução cibernética. Renderizações hiper-realistas de ciborgues."
  }
];

// --- TYPES ---
interface CasesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Project {
  id: string;
  title: string;
  category: string;
  img: string;
  colSpan: string;
  description: string;
}

interface CardProps {
  project: Project;
  onClick: () => void;
}

interface ModalProps {
  id: string;
  close: () => void;
}

// --- MAIN COMPONENT ---
const CasesModal = ({ isOpen, onClose }: CasesModalProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Fecha o modal com ESC e bloqueia scroll do body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSelectedId(null);
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedId) {
          setSelectedId(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, selectedId, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] overflow-y-auto font-sans-body"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 z-[110] w-12 h-12 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-white/10 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <header className="sticky top-0 z-50 py-6 md:py-8 px-6 md:px-12 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-3xl md:text-5xl font-serif-display font-bold tracking-wider text-white"
            >
              OUR WORKS
            </motion.h1>
          </header>

          {/* Grid Container */}
          <main className="px-4 md:px-12 py-8 md:py-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              className="grid grid-cols-12 gap-4 md:gap-6"
            >
              {projects.map((project) => (
                <Card 
                  key={project.id} 
                  project={project} 
                  onClick={() => setSelectedId(project.id)} 
                />
              ))}
            </motion.div>

            {/* Footer Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 md:mt-20 text-center"
            >
              <button 
                onClick={onClose}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <span className="relative">
                  <span className="tracking-wider">More Projects</span>
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </main>

          {/* Modal Overlay */}
          <AnimatePresence>
            {selectedId && (
              <Modal 
                id={selectedId} 
                close={() => setSelectedId(null)} 
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- SUB-COMPONENTS ---

function Card({ project, onClick }: CardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
      }}
      layoutId={`card-container-${project.id}`}
      onClick={onClick}
      className={`${project.colSpan} relative h-[280px] md:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group`}
    >
      {/* Background Image */}
      <motion.img
        layoutId={`card-image-${project.id}`}
        src={project.img}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Glassmorphism Label */}
      <motion.div 
        layoutId={`card-label-${project.id}`}
        className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex items-end justify-between"
      >
        <div className="flex flex-col gap-1">
          <motion.h3
            layoutId={`card-title-${project.id}`}
            className="text-xl md:text-2xl font-serif-display font-bold text-white tracking-wide"
          >
            {project.title}
          </motion.h3>
          <span className="text-xs md:text-sm text-white/60 font-light tracking-wider uppercase">
            {project.category}
          </span>
        </div>

        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white -rotate-45" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function Modal({ id, close }: ModalProps) {
  const project = projects.find((p) => p.id === id);

  if (!project) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={close}
        className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[200]"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed inset-4 md:inset-10 lg:inset-16 z-[210] flex flex-col md:flex-row bg-[#111] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
      >
        <motion.div
          layoutId={`card-container-${id}`}
          className="relative w-full md:w-1/2 lg:w-3/5 h-[35vh] md:h-full"
        >
          <motion.img
            layoutId={`card-image-${id}`}
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Dark gradient for text readability on mobile if image is light */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />

          {/* Close Button Mobile (absolute on image) */}
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="md:hidden absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 z-50 active:scale-90 transition-transform"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Right: Content Section */}
        <div className="relative w-full md:w-1/2 lg:w-2/5 p-6 md:p-10 lg:p-12 flex flex-col justify-between bg-[#111] overflow-y-auto">
          
          {/* Close Button Desktop */}
          <button
            onClick={close}
            className="hidden md:flex absolute top-6 right-6 w-10 h-10 bg-white/5 rounded-full items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all z-50"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex-1 flex flex-col justify-center"
          >
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-xs text-white/70 tracking-wider uppercase">Featured Project</span>
              </div>

              <motion.h2
                layoutId={`card-title-${id}`}
                className="text-3xl md:text-4xl lg:text-5xl font-serif-display font-bold text-white tracking-wide"
              >
                {project.title}
              </motion.h2>

              <p className="text-sm md:text-base text-white/50 font-light tracking-wider uppercase">
                {project.category}
              </p>
            </div>

            <p className="mt-6 md:mt-10 text-base md:text-lg text-white/70 leading-relaxed font-light">
              {project.description}
            </p>

            {/* Stats / Details */}
            <div className="mt-6 md:mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 md:pt-8">
              <div>
                <span className="text-xs text-white/40 uppercase tracking-wider">Client</span>
                <p className="mt-1 text-white font-medium">Global Studio</p>
              </div>
              <div>
                <span className="text-xs text-white/40 uppercase tracking-wider">Year</span>
                <p className="mt-1 text-white font-medium">2024</p>
              </div>
            </div>

            <a 
              href="#" 
              className="mt-8 md:mt-10 inline-flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors group"
            >
              View Case Study
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default CasesModal;
