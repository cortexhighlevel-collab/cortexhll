import { ArrowUpRight } from "lucide-react";

interface TagProps {
  icon: React.ReactNode;
  label: string;
}

const Tag = ({ icon, label }: TagProps) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-foreground/20 text-xs font-medium uppercase">
    {icon}
    {label}
  </span>
);

const StrategyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const LeadershipIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const VideoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const AnimationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v3" />
    <path d="M18.5 5.5l-2.1 2.1" />
    <path d="M21 12h-3" />
    <path d="M18.5 18.5l-2.1-2.1" />
    <path d="M12 21v-3" />
    <path d="M5.5 18.5l2.1-2.1" />
    <path d="M3 12h3" />
    <path d="M5.5 5.5l2.1 2.1" />
  </svg>
);

const BlogSection = () => {
  return (
    <section className="w-full px-5 md:px-12 py-16 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Featured Article - Left Side */}
          <div className="bg-secondary rounded-3xl p-8 flex flex-col justify-between min-h-[500px]">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground text-sm uppercase tracking-wide">
                  aprenda sobre
                </span>
                <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
                  O MUNDO DA IA
                </h2>
              </div>
              
              {/* Decorative Element */}
              <div className="w-16 h-16 rounded-full border-2 border-foreground/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-foreground" />
              </div>
            </div>

            {/* Tags and Title */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <Tag icon={<StrategyIcon />} label="estratégia" />
                <Tag icon={<LeadershipIcon />} label="liderança" />
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background hover:opacity-80 transition-opacity"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              
              <h3 className="text-xl md:text-2xl font-medium text-foreground leading-tight max-w-[500px]">
                Como líderes de sucesso usam IA: estratégia, fluxos de trabalho e rotina executiva
              </h3>
            </div>
          </div>

          {/* Right Side - Two Cards */}
          <div className="grid grid-rows-2 gap-5">
            {/* Article Card */}
            <div 
              className="relative rounded-3xl overflow-hidden min-h-[240px]"
              style={{
                backgroundImage: "url('https://framerusercontent.com/images/LLEdm7hWVMfprlCCIi2LHXlJKE.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/40 text-white text-xs font-medium uppercase backdrop-blur-sm">
                    <VideoIcon />
                    vídeo com ia
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/40 text-white text-xs font-medium uppercase backdrop-blur-sm">
                    <AnimationIcon />
                    animação
                  </span>
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-foreground hover:opacity-80 transition-opacity"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                
                {/* Title */}
                <h3 className="text-lg md:text-xl font-medium text-white leading-tight max-w-[400px]">
                  Da ideia ao frame final: como a Human recriou a abertura de Dragon Ball com IA
                </h3>
              </div>
            </div>

            {/* See All Articles Card */}
            <a 
              href="#" 
              className="bg-accent rounded-3xl p-6 flex items-center justify-between group hover:opacity-90 transition-opacity min-h-[240px]"
            >
              {/* Decorative Circles */}
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-2 border-accent-foreground/30" />
                <div className="absolute top-4 left-4 w-20 h-20 rounded-full border-2 border-accent-foreground/30" />
                <div className="absolute top-8 left-8 w-20 h-20 rounded-full border-2 border-accent-foreground/30" />
              </div>
              
              {/* Text */}
              <div className="text-right">
                <span className="text-2xl md:text-3xl font-medium text-accent-foreground leading-tight block">
                  Ver Todos
                </span>
                <span className="text-2xl md:text-3xl font-medium text-accent-foreground leading-tight block">
                  os Artigos
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
