const DNASection = () => {
  return (
    <section className="w-full min-h-screen bg-black">
      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 space-y-6">
          {/* Title */}
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white tracking-wider" style={{ fontFamily: 'Outfit, sans-serif' }}>
              DNA Verus
            </h2>
          </div>

          {/* Tagline */}
          <div className="w-full">
            <p className="text-xl md:text-2xl text-white/70 font-extralight tracking-wide" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Excelência sem concessões.
            </p>
          </div>

          {/* Description */}
          <div className="w-full max-w-3xl">
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Na Verus, não entregamos o comum. Nossos projetos são guiados por autenticidade, 
              sofisticação e inovação. Isso significa criar experiências digitais que vão além 
              da estética: entregam confiança, credibilidade e resultados reais.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Card 1 - Exclusividade (top corners) */}
          <div className="relative border border-white/10 p-8 md:p-10 min-h-[200px] md:min-h-[240px] flex flex-col justify-end">
            {/* Top Left Corner */}
            <div className="absolute top-0 left-0 w-12 h-12">
              <div className="absolute top-0 left-0 w-full h-px bg-amber-400"></div>
              <div className="absolute top-0 left-0 w-px h-full bg-amber-400"></div>
            </div>
            {/* Top Right Corner */}
            <div className="absolute top-0 right-0 w-12 h-12">
              <div className="absolute top-0 right-0 w-full h-px bg-amber-400"></div>
              <div className="absolute top-0 right-0 w-px h-full bg-amber-400"></div>
            </div>
            
            {/* Content */}
            <div className="mt-auto">
              <h3 className="text-2xl md:text-3xl text-white font-extralight mb-3 tracking-wide" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Exclusividade
              </h3>
              <p className="text-sm text-white/40 font-light" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Cada projeto é único, fiel à essência do cliente.
              </p>
            </div>
          </div>

          {/* Card 2 - Sofisticação (no corners) */}
          <div className="relative border border-white/10 p-8 md:p-10 min-h-[200px] md:min-h-[240px] flex flex-col justify-end">
            {/* Content */}
            <div className="mt-auto">
              <h3 className="text-2xl md:text-3xl text-white font-extralight mb-3 tracking-wide" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Sofisticação
              </h3>
              <p className="text-sm text-white/40 font-light" style={{ fontFamily: 'Outfit, sans-serif' }}>
                UI/UX premium, minimalista e impactante.
              </p>
            </div>
          </div>

          {/* Card 3 - Autoridade (no corners) */}
          <div className="relative border border-white/10 p-8 md:p-10 min-h-[200px] md:min-h-[240px] flex flex-col justify-end">
            {/* Content */}
            <div className="mt-auto">
              <h3 className="text-2xl md:text-3xl text-white font-extralight mb-3 tracking-wide" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Autoridade
              </h3>
              <p className="text-sm text-white/40 font-light" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Foco em posicionamento e relevância digital.
              </p>
            </div>
          </div>

          {/* Card 4 - Exclusividade (bottom corners) */}
          <div className="relative border border-white/10 p-8 md:p-10 min-h-[200px] md:min-h-[240px] flex flex-col justify-end">
            {/* Bottom Left Corner */}
            <div className="absolute bottom-0 left-0 w-12 h-12">
              <div className="absolute bottom-0 left-0 w-full h-px bg-amber-400"></div>
              <div className="absolute bottom-0 left-0 w-px h-full bg-amber-400"></div>
            </div>
            {/* Bottom Right Corner */}
            <div className="absolute bottom-0 right-0 w-12 h-12">
              <div className="absolute bottom-0 right-0 w-full h-px bg-amber-400"></div>
              <div className="absolute bottom-0 right-0 w-px h-full bg-amber-400"></div>
            </div>
            
            {/* Content */}
            <div className="mt-auto">
              <h3 className="text-2xl md:text-3xl text-white font-extralight mb-3 tracking-wide" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Exclusividade
              </h3>
              <p className="text-sm text-white/40 font-light" style={{ fontFamily: 'Outfit, sans-serif' }}>
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
