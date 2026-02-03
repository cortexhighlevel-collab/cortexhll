const MetodologiaSection = () => {
  return (
    <section id="metodologia" className="w-full px-5 md:px-12 py-10 bg-[#f06800]">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Card Container */}
        <div className="bg-background card-radius p-4 md:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-5 md:mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Uma Escola de <br />IA na Prática
            </h2>
            <p className="text-base md:text-lg text-foreground/80 mt-2">
              Para desafios criativos reais.
            </p>
          </div>

          {/* Video Placeholder - Full Width */}
          <div className="video-radius overflow-hidden aspect-[21/9] mb-5 md:mb-8 flex items-center justify-center bg-secondary-foreground w-full">
            <div className="text-sm text-primary-foreground">Video Placeholder</div>
          </div>

          {/* Cards Grid - New Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(200px,280px)_1fr] gap-4 md:gap-8">
            {/* Left Column - Stacked Cards (narrower) */}
            <div className="flex flex-col gap-3 md:gap-4 max-w-xs">
              {/* Metodologia Card */}
              <div className="card-radius p-4 md:p-5 flex flex-col border border-border bg-background">
                <div className="flex items-start justify-between mb-3">
                  <span className="tag-pill text-xs bg-background border border-border text-foreground">METODOLOGIA</span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Mão na massa. Direto ao ponto. Sem enrolação. Aprenda com os profissionais que estão à frente do mercado.
                </p>
              </div>

              {/* Comunidade Card */}
              <div className="card-radius p-4 md:p-5 flex flex-col bg-[#F06600]">
                <div className="mb-3">
                  <span className="tag-pill text-xs bg-white/20 text-white">COMUNIDADE DE CRIATIVOS</span>
                </div>
                <p className="text-sm leading-relaxed text-white">
                  Muito além de cursos. Junte-se a mais de 10.000 alunos e faça parte da comunidade.
                </p>
              </div>
            </div>

            {/* Right Column - Text Only (no card) */}
            <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
              <div className="flex items-center gap-2 mb-4">
                <span className="tag-pill bg-foreground text-background text-xs">100% PRÁTICO</span>
                <span className="text-xs font-medium text-foreground/70 uppercase tracking-wide">CERTIFICADO</span>
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl leading-tight text-foreground font-light">
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
