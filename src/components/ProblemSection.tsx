import { Globe, TrendingDown, EyeOff, ArrowUpRight } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="w-full px-5 md:px-12 py-16 md:py-24 bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        {/* Bento Grid Layout - matching blog style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Left Large Card */}
          <div className="lg:col-span-7 lg:row-span-2 relative overflow-hidden rounded-3xl bg-zinc-900 min-h-[500px] lg:min-h-[600px] flex flex-col">
            {/* Background Image/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-zinc-900" />
            
            {/* Icon at top */}
            <div className="relative z-10 p-8">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                <Globe className="w-6 h-6" />
              </div>
            </div>

            {/* Content at bottom */}
            <div className="relative z-10 mt-auto p-8 pt-0">
              <span className="inline-block px-4 py-2 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium uppercase tracking-wider mb-6 border border-zinc-700">
                Você se identifica?
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1]">
                Problemas que<br />
                impedem<br />
                seu crescimento
              </h2>
            </div>
          </div>

          {/* Right Top Card - "Seu site é lindo mas..." */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-3xl bg-zinc-900 min-h-[280px] flex flex-col group hover:bg-zinc-800 transition-colors duration-300">
            {/* Tags at top right */}
            <div className="relative z-10 p-6 flex justify-end gap-2">
              <span className="px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                Site que não vende
              </span>
              <span className="px-3 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium border border-orange-500/30 flex items-center gap-1.5">
                <TrendingDown className="w-3.5 h-3.5" />
                Sem conversão
              </span>
            </div>

            {/* Content at bottom */}
            <div className="relative z-10 mt-auto p-6 pt-0">
              <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight mb-3">
                Seu site é lindo mas...
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed">
                Você investiu em um site bonito, mas ele não converte visitantes em clientes. Falta estratégia de conversão e posicionamento.
              </p>
            </div>
          </div>

          {/* Right Bottom Row - Two cards side by side */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card - "Gastou em ads mas..." */}
            <div className="relative overflow-hidden rounded-3xl bg-zinc-900 min-h-[280px] flex flex-col group hover:bg-zinc-800 transition-colors duration-300">
              {/* Tags at top */}
              <div className="relative z-10 p-5 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700 flex items-center gap-1.5">
                  <TrendingDown className="w-3.5 h-3.5" />
                  Tráfego sem ROI
                </span>
                <span className="px-3 py-1.5 rounded-full bg-red-500/20 text-red-400 text-xs font-medium border border-red-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  Ads
                </span>
              </div>

              {/* Content at bottom */}
              <div className="relative z-10 mt-auto p-5 pt-0">
                <h3 className="text-xl font-medium text-white leading-tight mb-2">
                  Gastou em ads mas...
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Você queima dinheiro em anúncios pagos sem ver retorno real. O problema não é o tráfego, é a estratégia por trás.
                </p>
              </div>
            </div>

            {/* Card - "ChatGPT não recomenda..." - Orange/CTA style */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 min-h-[280px] flex flex-col group hover:from-orange-600 hover:to-orange-700 transition-all duration-300 cursor-pointer">
              {/* Icon at top right */}
              <div className="relative z-10 p-5 flex justify-end">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-orange-500 transition-colors duration-300">
                  <EyeOff className="w-5 h-5" />
                </div>
              </div>

              {/* Content at bottom */}
              <div className="relative z-10 mt-auto p-5 pt-0">
                <h3 className="text-xl font-medium text-white leading-tight mb-2">
                  ChatGPT não recomenda...
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
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
