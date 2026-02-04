const MetodologiaSection = () => {
  return <section id="metodologia" className="w-full px-5 md:px-12 py-10 rounded-b-[40px] bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Card Container */}
        <div className="bg-background card-radius p-4 md:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-5 md:mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight font-medium">
              A Resposta Está na IA
            </h2>
            <p className="text-base md:text-lg text-foreground/80 mt-2">
              Mas não qualquer IA — a nossa metodologia proprietária.
            </p>
          </div>

          {/* Quote Block */}
          <div className="video-radius overflow-hidden p-8 md:p-12 mb-5 md:mb-8 flex flex-col items-center justify-center bg-secondary-foreground text-primary-foreground w-full">
            <p className="text-lg md:text-xl lg:text-2xl text-center leading-relaxed max-w-[800px]">
              "O SEO tradicional morreu. As decisões de compra começam em conversas com ChatGPT, Claude e Gemini. 
              <strong> Se a IA não confia em você, você é invisível.</strong>"
            </p>
          </div>

          {/* Cards Grid - New Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(200px,280px)_1fr] gap-4 md:gap-8">
            {/* Left Column - Stacked Cards (narrower) */}
            <div className="flex flex-col gap-3 md:gap-4 max-w-xs">
              {/* AI Referral Engine Card */}
              <div className="card-radius p-4 md:p-5 flex flex-col border border-border bg-background">
                <div className="flex items-start justify-between mb-3">
                  <span className="tag-pill text-xs bg-orange-500 text-white border-0">AI REFERRAL ENGINE™</span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Metodologia proprietária que posiciona sua marca como a resposta definitiva nas conversas com IA.
                </p>
              </div>

              {/* Resultados Card */}
              <div className="card-radius p-4 md:p-5 flex flex-col bg-[#F06600]">
                <div className="mb-3">
                  <span className="tag-pill text-xs bg-white/20 text-white">RESULTADOS COMPROVADOS</span>
                </div>
                <p className="text-sm leading-relaxed text-white">
                  +500% ROI médio. 47 empresas transformadas. Resultados em até 30 dias.
                </p>
              </div>
            </div>

            {/* Right Column - Text Only (no card) */}
            <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
              <div className="flex items-center gap-2 mb-4">
                <span className="tag-pill bg-foreground text-background text-xs">METODOLOGIA EXCLUSIVA</span>
                <span className="text-xs font-medium text-foreground/70 uppercase tracking-wide">6 ETAPAS</span>
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl leading-tight text-foreground font-light">
                Domine as respostas<br />da IA e conquiste<br />novos clientes.
              </p>
              <a href="#contato" className="mt-6 inline-flex items-center gap-2 text-orange-500 font-medium hover:gap-3 transition-all">
                Dominar as Respostas
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MetodologiaSection;