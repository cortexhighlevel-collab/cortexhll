const MetodologiaSection = () => {
  return <section id="metodologia" className="w-full px-5 md:px-12 py-16">
      <div className="max-w-[1800px] mx-auto">
        {/* Main Card Container */}
        <div className="bg-academy-mint card-radius p-6 md:p-10 lg:p-12">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-huge text-foreground">
              Uma Escola de <br />IA na Prática
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mt-4">
              Para desafios criativos reais.
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="video-radius overflow-hidden aspect-video mb-8 md:mb-12 flex items-center justify-center bg-secondary-foreground">
            <div className="text-lg text-primary-foreground">Video Placeholder</div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Metodologia Card */}
            <div className="card-radius p-6 md:p-8 flex flex-col bg-[#f06800]">
              <div className="flex items-start justify-between mb-6">
                <span className="tag-pill text-white bg-secondary-foreground">METODOLOGIA</span>
                <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-primary-foreground">
                Mão na massa. Direto ao ponto. Sem enrolação. Aprenda com os profissionais que estão à frente do mercado.
              </p>
            </div>

            {/* Comunidade Card */}
            <div className="card-radius p-6 md:p-8 flex flex-col bg-[#f06800]">
              <div className="mb-6">
                <span className="tag-pill bg-foreground text-white">COMUNIDADE DE CRIATIVOS</span>
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-primary-foreground">
                Muito além de cursos. Junte-se a mais de 10.000 alunos e faça parte da comunidade.
              </p>
            </div>

            {/* Certificado Card */}
            <div className="card-radius p-6 md:p-8 flex flex-col justify-between bg-[#f06800]">
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl md:text-4xl font-bold text-primary-foreground">100% Prático</span>
                <span className="tag-pill bg-academy-gray text-xs text-primary-foreground">CERTIFICADO</span>
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-primary-foreground">
                Impulsione sua criatividade, do básico ao avançado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MetodologiaSection;