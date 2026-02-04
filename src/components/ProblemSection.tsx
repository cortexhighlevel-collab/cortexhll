import { Globe, TrendingDown, EyeOff, ArrowRight } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="w-full px-5 md:px-12 py-16 md:py-24 bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
          {/* Card 1 - Large Card (Left) */}
          <div className="md:col-span-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 md:p-10 min-h-[400px] md:min-h-[500px] flex flex-col justify-between group">
            {/* Decorative gradient orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/30 to-red-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            {/* Icon */}
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 mb-6">
                <Globe className="w-6 h-6" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 mt-auto">
              <span className="inline-block px-3 py-1.5 rounded-full bg-red-500/10 text-red-400 text-xs font-medium mb-4 border border-red-500/20">
                VOCÊ SE IDENTIFICA?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
                Problemas que impedem<br />seu crescimento
              </h2>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            {/* Card 2 - Top Right */}
            <div className="md:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 md:p-8 min-h-[200px] md:min-h-[240px] flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300">
              {/* Decorative element */}
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-medium border border-white/10 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  Site que não vende
                </span>
                <span className="px-3 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium border border-orange-500/20 flex items-center gap-1.5">
                  <TrendingDown className="w-3.5 h-3.5" />
                  Sem conversão
                </span>
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-medium text-white leading-snug">
                  Seu site é lindo mas...<br />
                  <span className="text-white/60">Você investiu em um site bonito, mas ele não converte visitantes em clientes. Falta estratégia de conversão e posicionamento.</span>
                </h3>
              </div>
            </div>

            {/* Card 3 - Bottom Left */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 md:p-8 min-h-[200px] md:min-h-[240px] flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-medium border border-white/10 flex items-center gap-1.5">
                  <TrendingDown className="w-3.5 h-3.5" />
                  Tráfego sem ROI
                </span>
                <span className="px-3 py-1.5 rounded-full bg-red-500/20 text-red-400 text-xs font-medium border border-red-500/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  Ads
                </span>
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="text-lg md:text-xl font-medium text-white leading-snug">
                  Gastou em ads mas...<br />
                  <span className="text-white/60 text-base">Você queima dinheiro em anúncios pagos sem ver retorno real. O problema não é o tráfego, é a estratégia por trás.</span>
                </h3>
              </div>
            </div>

            {/* Card 4 - Bottom Right (CTA style) */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 p-6 md:p-8 min-h-[200px] md:min-h-[240px] flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
              {/* Icon */}
              <div className="flex justify-end">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-orange-500 transition-colors duration-300">
                  <EyeOff className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="text-lg md:text-xl font-medium text-white leading-snug">
                  ChatGPT não recomenda...<br />
                  <span className="text-white/80 text-base">Quando alguém pergunta ao ChatGPT, Claude ou Gemini sobre seu nicho, sua empresa não aparece. Você é invisível para a nova era.</span>
                </h3>
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
