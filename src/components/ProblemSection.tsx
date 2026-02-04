import { Globe, TrendingDown, EyeOff, ArrowUpRight } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="w-full px-5 md:px-12 py-16 md:py-24 bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header - Above Cards */}
        <div className="flex items-center gap-6 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
              <Globe className="w-6 h-6" />
            </div>
          </div>
          <div>
            <span className="text-zinc-500 text-sm uppercase tracking-wider font-medium">
              Você se identifica?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
              Problemas que impedem seu crescimento
            </h2>
          </div>
        </div>

        {/* Bento Grid - 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Left Large Card - "Seu site é lindo mas..." */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-3xl bg-zinc-900 min-h-[450px] lg:min-h-[500px] flex flex-col group hover:bg-zinc-800 transition-colors duration-300">
            {/* Tags at top left */}
            <div className="relative z-10 p-6 flex gap-2">
              <span className="px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                Site que não vende
              </span>
              <span className="px-3 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium border border-orange-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                Sem conversão
              </span>
            </div>

            {/* Content at bottom */}
            <div className="relative z-10 mt-auto p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight mb-4">
                Seu site é lindo mas...
              </h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
                Você investiu em um site bonito, mas ele não converte visitantes em clientes. Falta estratégia de conversão e posicionamento.
              </p>
            </div>
          </div>

          {/* Right Column - 2 Cards Stacked */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Top Card - "Gastou em ads mas..." */}
            <div className="relative overflow-hidden rounded-3xl bg-zinc-900 min-h-[240px] flex-1 flex flex-col group hover:bg-zinc-800 transition-colors duration-300">
              {/* Tags at top */}
              <div className="relative z-10 p-5 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  Tráfego sem ROI
                </span>
                <span className="px-3 py-1.5 rounded-full bg-red-500/20 text-red-400 text-xs font-medium border border-red-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  Ads
                </span>
              </div>

              {/* Content at bottom */}
              <div className="relative z-10 mt-auto p-5">
                <h3 className="text-xl md:text-2xl font-medium text-white leading-tight mb-2">
                  Gastou em ads mas...
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  Você queima dinheiro em anúncios pagos sem ver retorno real. O problema não é o tráfego, é a estratégia por trás.
                </p>
              </div>
            </div>

            {/* Bottom Card - "ChatGPT não recomenda..." - Blue CTA style */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 min-h-[240px] flex-1 flex flex-col group hover:from-orange-600 hover:to-orange-700 transition-all duration-300 cursor-pointer">
              {/* Icon at top */}
              <div className="relative z-10 p-5">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-orange-500 transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Content at bottom */}
              <div className="relative z-10 mt-auto p-5">
                <h3 className="text-xl md:text-2xl font-medium text-white leading-tight mb-2">
                  ChatGPT não recomenda...
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Quando alguém pergunta ao ChatGPT, Claude ou Gemini sobre seu nicho, sua empresa não aparece. Você é invisível para a nova era.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
