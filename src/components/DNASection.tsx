const DNASection = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      {/* Main Container */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center" style={{ gap: '48px' }}>
        
        {/* Title Section */}
        <div className="flex flex-col items-center justify-center w-full" style={{ gap: '24px' }}>
          
          {/* Badge Pill */}
          <div className="px-5 py-2 rounded-full flex items-center justify-center" style={{
            background: 'rgba(31, 31, 31, 0.04)',
            border: '1px solid rgba(31, 31, 31, 0.2)',
            boxShadow: 'rgba(31, 31, 31, 0.12) 0px 4px 8px 0px inset'
          }}>
            <span className="text-lg tracking-wide" style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 300,
              color: '#1f1f1f'
            }}>
              Por que a Cortex?
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center" style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 500,
            color: '#1f1f1f',
            lineHeight: '120%'
          }}>
            Diferenciais que importam.
          </h2>

          {/* Description */}
          <p className="text-center max-w-[700px] text-base md:text-lg" style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 300,
            color: 'rgba(31, 31, 31, 0.7)',
            lineHeight: '160%'
          }}>
            Na Cortex, não entregamos o comum. Nossos projetos são guiados por metodologia proprietária,
            IA como DNA e resultados mensuráveis. Isso significa criar experiências digitais que vão além 
            da estética: entregam autoridade, visibilidade e crescimento real.
          </p>
        </div>

        {/* Cards Grid - Bento Layout 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          
          {/* Card 1 - Metodologia Proprietária */}
          <div className="relative rounded-2xl overflow-hidden min-h-[200px] flex flex-col justify-end p-6 md:p-8" style={{
            background: 'linear-gradient(180deg, rgba(20, 80, 100, 0.8) 0%, rgba(10, 40, 60, 0.9) 50%, rgba(15, 35, 50, 1) 100%)',
            border: '1px solid rgba(209, 244, 255, 0.1)'
          }}>
            <div className="absolute inset-0 opacity-60" style={{
              background: 'radial-gradient(ellipse at 30% 20%, rgba(80, 180, 220, 0.4) 0%, transparent 50%)'
            }} />
            <div className="relative z-10">
              <span className="text-3xl mb-3 block">🧠</span>
              <h3 className="text-xl md:text-2xl mb-2" style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                color: 'rgb(209, 244, 255)'
              }}>
                Metodologia Proprietária
              </h3>
              <p className="text-sm" style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 300,
                color: 'rgba(209, 244, 255, 0.6)'
              }}>
                AI Referral Engine™ exclusivo para dominar as respostas da IA.
              </p>
            </div>
          </div>

          {/* Card 2 - IA como DNA */}
          <div className="relative rounded-2xl overflow-hidden min-h-[200px] flex flex-col justify-end p-6 md:p-8" style={{
            background: 'rgba(25, 50, 60, 0.8)',
            border: '1px solid rgba(209, 244, 255, 0.1)'
          }}>
            <div className="relative z-10">
              <span className="text-3xl mb-3 block">🤖</span>
              <h3 className="text-xl md:text-2xl mb-2" style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                color: 'rgb(209, 244, 255)'
              }}>
                IA como DNA
              </h3>
              <p className="text-sm" style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 300,
                color: 'rgba(209, 244, 255, 0.6)'
              }}>
                Inteligência artificial integrada em cada etapa do processo.
              </p>
            </div>
          </div>

          {/* Card 3 - Dados que Provam */}
          <div className="relative rounded-2xl overflow-hidden min-h-[200px] flex flex-col justify-end p-6 md:p-8" style={{
            background: 'rgba(25, 50, 60, 0.8)',
            border: '1px solid rgba(209, 244, 255, 0.1)'
          }}>
            <div className="relative z-10">
              <span className="text-3xl mb-3 block">📊</span>
              <h3 className="text-xl md:text-2xl mb-2" style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                color: 'rgb(209, 244, 255)'
              }}>
                Dados que Provam
              </h3>
              <p className="text-sm" style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 300,
                color: 'rgba(209, 244, 255, 0.6)'
              }}>
                Métricas claras e resultados mensuráveis em cada projeto.
              </p>
            </div>
          </div>

          {/* Card 4 - Equipe Sênior */}
          <div className="relative rounded-2xl overflow-hidden min-h-[200px] flex flex-col justify-end p-6 md:p-8" style={{
            background: 'rgba(25, 50, 60, 0.8)',
            border: '1px solid rgba(209, 244, 255, 0.1)'
          }}>
            <div className="relative z-10">
              <span className="text-3xl mb-3 block">👥</span>
              <h3 className="text-xl md:text-2xl mb-2" style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                color: 'rgb(209, 244, 255)'
              }}>
                Equipe Sênior
              </h3>
              <p className="text-sm" style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 300,
                color: 'rgba(209, 244, 255, 0.6)'
              }}>
                Profissionais experientes em marketing, tech e IA.
              </p>
            </div>
          </div>

          {/* Card 5 - Entrega Rápida */}
          <div className="relative rounded-2xl overflow-hidden min-h-[200px] flex flex-col justify-end p-6 md:p-8" style={{
            background: 'rgba(25, 50, 60, 0.8)',
            border: '1px solid rgba(209, 244, 255, 0.1)'
          }}>
            <div className="relative z-10">
              <span className="text-3xl mb-3 block">⚡</span>
              <h3 className="text-xl md:text-2xl mb-2" style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                color: 'rgb(209, 244, 255)'
              }}>
                Entrega Rápida
              </h3>
              <p className="text-sm" style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 300,
                color: 'rgba(209, 244, 255, 0.6)'
              }}>
                Resultados visíveis em até 30 dias de projeto.
              </p>
            </div>
          </div>

          {/* Card 6 - Full Compliance */}
          <div className="relative rounded-2xl overflow-hidden min-h-[200px] flex flex-col justify-end p-6 md:p-8" style={{
            background: 'rgba(25, 50, 60, 0.8)',
            border: '1px solid rgba(209, 244, 255, 0.1)'
          }}>
            <div className="relative z-10">
              <span className="text-3xl mb-3 block">🔒</span>
              <h3 className="text-xl md:text-2xl mb-2" style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                color: 'rgb(209, 244, 255)'
              }}>
                Full Compliance
              </h3>
              <p className="text-sm" style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 300,
                color: 'rgba(209, 244, 255, 0.6)'
              }}>
                Segurança e conformidade em todos os processos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DNASection;
