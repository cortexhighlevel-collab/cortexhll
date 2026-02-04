const DNASection = () => {
  return <section className="w-full py-16 md:py-24 px-4 md:px-8" style={{
    background: '#f2f2f2'
  }}>
      {/* Main Container */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center" style={{
      gap: '48px'
    }}>
        
        {/* Title Section */}
        <div className="flex flex-col items-center justify-center w-full" style={{
        gap: '24px'
      }}>
          
          {/* Badge Pill with Glassmorphic Styling */}
          <div className="px-5 py-2 rounded-full flex items-center justify-center" style={{
          background: 'rgba(200, 200, 200, 0.3)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(150, 150, 150, 0.3)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 8px 0px inset'
        }}>
            <span className="text-lg tracking-wide" style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 300,
            color: '#1f1f1f'
          }}>
              DNA Cortex
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm uppercase tracking-widest" style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 400,
          color: '#1f1f1f'
        }}>
            Excelência sem concessões
          </p>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center" style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 500,
          color: '#1f1f1f',
          lineHeight: '120%'
        }}>
            Diferenciais que importam.
          </h2>
        </div>

        {/* Bento Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full" style={{
        gridTemplateRows: 'auto auto'
      }}>
          
          {/* Card 1 - Tall card on left (spans 2 rows) */}
          <div className="relative md:row-span-2 rounded-2xl overflow-hidden min-h-[280px] md:min-h-[420px] flex flex-col justify-end p-6 md:p-8" style={{
          background: 'linear-gradient(180deg, rgba(20, 80, 100, 0.8) 0%, rgba(10, 40, 60, 0.9) 50%, rgba(15, 35, 50, 1) 100%)',
          border: '1px solid rgba(209, 244, 255, 0.1)'
        }}>
            {/* Decorative L-shaped corner */}
            <div className="absolute top-4 left-4 w-8 h-8">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[rgb(209,244,255)] opacity-40"></div>
              <div className="absolute top-0 left-0 w-[2px] h-full bg-[rgb(209,244,255)] opacity-40"></div>
            </div>
            <div className="absolute inset-0 opacity-60" style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(80, 180, 220, 0.4) 0%, transparent 50%)'
          }} />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl mb-3" style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              color: 'rgb(209, 244, 255)'
            }}>
                Exclusividade
              </h3>
              <p className="text-sm md:text-base" style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 300,
              color: 'rgba(209, 244, 255, 0.6)',
              lineHeight: '160%'
            }}>
                Atendimento limitado a poucos clientes por vez. Cada projeto recebe dedicação total da equipe sênior. AI Referral Engine™ exclusivo.
              </p>
            </div>
          </div>

          {/* Card 2 - Top right (Sofisticação) */}
          <div className="relative rounded-2xl overflow-hidden min-h-[200px] flex flex-col justify-end p-6" style={{
          background: 'rgba(25, 50, 60, 0.8)',
          border: '1px solid rgba(209, 244, 255, 0.1)'
        }}>
            {/* Decorative L-shaped corner */}
            <div className="absolute top-4 right-4 w-6 h-6">
              <div className="absolute top-0 right-0 w-full h-[2px] bg-[rgb(209,244,255)] opacity-30"></div>
              <div className="absolute top-0 right-0 w-[2px] h-full bg-[rgb(209,244,255)] opacity-30"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl mb-2" style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              color: 'rgb(209, 244, 255)'
            }}>
                Sofisticação
              </h3>
              <p className="text-sm" style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 300,
              color: 'rgba(209, 244, 255, 0.6)'
            }}>
                Design premium e metodologia proprietária integrada em cada entrega.
              </p>
            </div>
          </div>

          {/* Card 3 - Top right beside (Autoridade) */}
          <div className="relative rounded-2xl overflow-hidden min-h-[200px] flex flex-col justify-end p-6" style={{
          background: 'rgba(25, 50, 60, 0.8)',
          border: '1px solid rgba(209, 244, 255, 0.1)'
        }}>
            {/* Decorative L-shaped corner */}
            <div className="absolute top-4 right-4 w-6 h-6">
              <div className="absolute top-0 right-0 w-full h-[2px] bg-[rgb(209,244,255)] opacity-30"></div>
              <div className="absolute top-0 right-0 w-[2px] h-full bg-[rgb(209,244,255)] opacity-30"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl mb-2" style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              color: 'rgb(209, 244, 255)'
            }}>
                Autoridade
              </h3>
              <p className="text-sm" style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 300,
              color: 'rgba(209, 244, 255, 0.6)'
            }}>
                Posicione sua marca como referência absoluta nas respostas da IA.
              </p>
            </div>
          </div>

          {/* Card 4 - Wide card bottom right (spans 2 columns) */}
          <div className="relative md:col-span-2 rounded-2xl overflow-hidden min-h-[180px] flex flex-col justify-end p-6 md:p-8" style={{
          background: 'linear-gradient(135deg, rgba(30, 60, 80, 0.9) 0%, rgba(20, 45, 65, 0.95) 100%)',
          border: '1px solid rgba(209, 244, 255, 0.1)'
        }}>
            {/* Decorative L-shaped corner */}
            <div className="absolute bottom-4 right-4 w-8 h-8">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-[rgb(209,244,255)] opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-full bg-[rgb(209,244,255)] opacity-40"></div>
            </div>
            <div className="absolute inset-0 opacity-40" style={{
            background: 'radial-gradient(ellipse at 70% 80%, rgba(80, 180, 220, 0.3) 0%, transparent 60%)'
          }} />
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl mb-2" style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              color: 'rgb(209, 244, 255)'
            }}>
                Resultados Comprovados
              </h3>
              <p className="text-sm md:text-base" style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 300,
              color: 'rgba(209, 244, 255, 0.6)'
            }}>
                +500% ROI médio. 47 empresas transformadas. Resultados em até 30 dias. Métricas claras e mensuráveis em cada projeto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DNASection;