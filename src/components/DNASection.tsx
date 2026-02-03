const DNASection = () => {
  return (
    <section className="w-full px-5 md:px-12 py-16 md:py-24 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide">
              DNA Verus
            </h2>
          </div>

          {/* Tagline */}
          <div className="mb-6">
            <p className="text-lg md:text-xl text-white/80 font-light">
              Excelência sem concessões.
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl">
            <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
              Na Verus, não entregamos o comum. Nossos projetos são guiados por autenticidade, 
              sofisticação e inovação. Isso significa criar experiências digitais que vão além 
              da estética: entregam confiança, credibilidade e resultados reais.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Card 1 - Exclusividade */}
          <div className="relative border border-white/10 p-6 md:p-8 min-h-[180px] flex flex-col justify-end">
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-8 h-8">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-amber-400"></div>
              <div className="absolute top-0 left-0 w-[1px] h-full bg-amber-400"></div>
            </div>
            <div className="absolute top-0 right-0 w-8 h-8">
              <div className="absolute top-0 right-0 w-full h-[1px] bg-amber-400"></div>
              <div className="absolute top-0 right-0 w-[1px] h-full bg-amber-400"></div>
            </div>
            
            {/* Content */}
            <div>
              <h3 className="text-xl md:text-2xl text-white font-light mb-2">Exclusividade</h3>
              <p className="text-sm text-white/50 font-light">
                Cada projeto é único, fiel à essência do cliente.
              </p>
            </div>
          </div>

          {/* Card 2 - Sofisticação */}
          <div className="relative border border-white/10 p-6 md:p-8 min-h-[180px] flex flex-col justify-end">
            {/* Content */}
            <div>
              <h3 className="text-xl md:text-2xl text-white font-light mb-2">Sofisticação</h3>
              <p className="text-sm text-white/50 font-light">
                UI/UX premium, minimalista e impactante.
              </p>
            </div>
          </div>

          {/* Card 3 - Autoridade */}
          <div className="relative border border-white/10 p-6 md:p-8 min-h-[180px] flex flex-col justify-end">
            {/* Content */}
            <div>
              <h3 className="text-xl md:text-2xl text-white font-light mb-2">Autoridade</h3>
              <p className="text-sm text-white/50 font-light">
                Foco em posicionamento e relevância digital.
              </p>
            </div>
          </div>

          {/* Card 4 - Exclusividade (repeated) */}
          <div className="relative border border-white/10 p-6 md:p-8 min-h-[180px] flex flex-col justify-end">
            {/* Corner Decorations */}
            <div className="absolute bottom-0 left-0 w-8 h-8">
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-400"></div>
              <div className="absolute bottom-0 left-0 w-[1px] h-full bg-amber-400"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8">
              <div className="absolute bottom-0 right-0 w-full h-[1px] bg-amber-400"></div>
              <div className="absolute bottom-0 right-0 w-[1px] h-full bg-amber-400"></div>
            </div>
            
            {/* Content */}
            <div>
              <h3 className="text-xl md:text-2xl text-white font-light mb-2">Exclusividade</h3>
              <p className="text-sm text-white/50 font-light">
                Cada projeto é único, fiel à essência do cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DNASection;
