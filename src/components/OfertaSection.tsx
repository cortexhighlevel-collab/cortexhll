import { Globe, FileText, Zap, ArrowRight } from "lucide-react";

const OfertaSection = () => {
  return (
    <section className="w-full bg-[#0D0D0D] text-white dark-dotted-bg">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:px-12 md:py-28 flex flex-col gap-16 md:gap-24">
        {/* TOP SECTION: Header & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Title */}
          <div className="max-w-xl">
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
              IDEAL PARA / NÃO É PARA
            </span>
            <h2 className="text-5xl md:text-7xl font-normal leading-[1.0] tracking-tight text-[#F2F2F2]">
              O que você recebe
            </h2>
          </div>

          {/* CTA Button */}
          <a 
            href="#contato" 
            className="group flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300"
          >
            <span className="text-sm font-bold tracking-wide text-[#F2F2F2]">Começar Diagnóstico</span>
            <span className="bg-white text-black p-1 rounded-full group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>
        </div>

        {/* TWO COLUMNS: Ideal vs Not Ideal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* IDEAL PARA */}
          <div className="rounded-[32px] p-8 md:p-10 bg-green-500/10 border border-green-500/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">✅</span>
              <h3 className="text-2xl font-semibold text-white">IDEAL PARA</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Empresas que querem dominar IA",
                "Quem valoriza qualidade sobre quantidade",
                "Negócios prontos para escalar",
                "Líderes que buscam resultados reais",
                "Marcas que querem ser recomendadas pela IA",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/80">
                  <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NÃO É PARA */}
          <div className="rounded-[32px] p-8 md:p-10 bg-red-500/10 border border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">❌</span>
              <h3 className="text-2xl font-semibold text-white">NÃO É PARA</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Quem busca "mais do mesmo"',
                "Quem não quer investir em qualidade",
                "Projetos sem clareza de objetivos",
                "Empresas que querem só o barato",
                "Quem não acredita no poder da IA",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/80">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-center gap-3 p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <Globe className="w-6 h-6 text-white/90" />
            <span className="text-[#C9C9C9] text-sm md:text-base tracking-wide uppercase">METODOLOGIA EXCLUSIVA</span>
          </div>

          <div className="flex items-center justify-center gap-3 p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <FileText className="w-6 h-6 text-white/90" />
            <span className="text-[#C9C9C9] text-sm md:text-base tracking-wide uppercase">RELATÓRIOS DETALHADOS</span>
          </div>

          <div className="flex items-center justify-center gap-3 p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <Zap className="w-6 h-6 text-white/90" />
            <span className="text-[#C9C9C9] text-sm md:text-base tracking-wide uppercase">RESULTADOS EM 30 DIAS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfertaSection;
