const MetodologiaSection = () => {
  return (
    <section id="metodologia" className="w-full px-5 md:px-12 py-16 bg-[#f06800]">
      <div className="max-w-[1800px] mx-auto">
        {/* Main Card Container */}
        <div className="bg-background card-radius p-6 md:p-10 lg:p-12">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-huge text-foreground">
              Uma Escola de <br />IA na Prática
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mt-4">
              Para desafios criativos reais.
            </p>
          </div>

          {/* Video Placeholder - Full Width */}
          <div className="video-radius overflow-hidden aspect-[21/9] mb-8 md:mb-12 flex items-center justify-center bg-secondary-foreground w-full">
            <div className="text-lg text-primary-foreground">Video Placeholder</div>
          </div>

          {/* Cards Grid - New Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,400px)_1fr] gap-6 md:gap-12">
            {/* Left Column - Stacked Cards (narrower) */}
            <div className="flex flex-col gap-4 md:gap-5 max-w-md">
              {/* Metodologia Card */}
              <div className="card-radius p-6 md:p-8 flex flex-col border border-border bg-background">
                <div className="flex items-start justify-between mb-4">
                  <span className="tag-pill bg-background border border-border text-foreground">METODOLOGIA</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/80">
                  Mão na massa. Direto ao ponto. Sem enrolação. Aprenda com os profissionais que estão à frente do mercado.
                </p>
              </div>

              {/* Comunidade Card */}
              <div className="card-radius p-6 md:p-8 flex flex-col bg-[#F06600]">
                <div className="mb-4">
                  <span className="tag-pill bg-white/20 text-white">COMUNIDADE DE CRIATIVOS</span>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-white">
                  Muito além de cursos. Junte-se a mais de 10.000 alunos e faça parte da comunidade.
                </p>
              </div>
            </div>

            {/* Right Column - Text Only (no card) */}
            <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
              <div className="flex items-center gap-3 mb-6">
                <span className="tag-pill bg-foreground text-background text-sm">100% PRÁTICO</span>
                <span className="text-sm font-medium text-foreground/70 uppercase tracking-wide">CERTIFICADO</span>
              </div>
              <p className="text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground font-light">
                Impulsione sua<br />criatividade,<br />do básico<br />ao avançado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetodologiaSection;
