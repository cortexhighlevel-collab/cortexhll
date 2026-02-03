const DNASection = () => {
  return <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-primary-foreground">
      {/* Main Container */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center" style={{
      gap: '48px'
    }}>
        
        {/* Title Section */}
        <div className="flex flex-col items-center justify-center w-full" style={{
        gap: '24px'
      }}>
          
          {/* DNA Verus Pill */}
          <div className="px-5 py-2 rounded-full flex items-center justify-center bg-[#f06800]" style={{
          background: 'rgba(209, 244, 255, 0.04)',
          border: '1px solid rgba(209, 244, 255, 0.2)',
          boxShadow: 'rgba(209, 244, 255, 0.12) 0px 4px 8px 0px inset'
        }}>
            <span className="text-lg tracking-wide text-secondary" style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 300,
            color: 'rgba(209, 244, 255, 0.8)'
          }}>
              DNA Cortex 
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center text-secondary-foreground" style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 500,
          color: 'rgb(209, 244, 255)',
          lineHeight: '120%'
        }}>
            Excelência sem concessões.
          </h2>

          {/* Description */}
          <p className="text-center max-w-[700px] text-base md:text-lg text-secondary-foreground" style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 300,
          color: 'rgba(209, 244, 255, 0.7)',
          lineHeight: '160%'
        }}>
            Na Verus, não entregamos o comum. Nossos projetos são guiados por autenticidade, 
            sofisticação e inovação. Isso significa criar experiências digitais que vão além 
            da estética: entregam confiança, credibilidade e resultados reais.
          </p>
        </div>

        {/* Cards Grid - Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          
          {/* Card 1 - Exclusividade (Left, tall - spans 2 rows) */}
          <div className="relative rounded-2xl overflow-hidden md:row-span-2 min-h-[400px] md:min-h-[500px] flex flex-col justify-end p-6 md:p-8" style={{
          background: 'linear-gradient(180deg, rgba(20, 80, 100, 0.8) 0%, rgba(10, 40, 60, 0.9) 50%, rgba(15, 35, 50, 1) 100%)',
          border: '1px solid rgba(209, 244, 255, 0.1)'
        }}>
            {/* Abstract gradient overlay */}
            <div className="absolute inset-0 opacity-60" style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(80, 180, 220, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(40, 120, 160, 0.3) 0%, transparent 40%)'
          }} />
            
            {/* Content */}
            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl md:text-3xl mb-2" style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              color: 'rgb(209, 244, 255)'
            }}>
                Exclusividade
              </h3>
              <p className="text-sm md:text-base" style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 300,
              color: 'rgba(209, 244, 255, 0.6)'
            }}>
                Cada projeto é único, fiel à essência do cliente.
              </p>
            </div>
          </div>

          {/* Card 2 - Sofisticação (Top middle) */}
          <div className="relative rounded-2xl overflow-hidden min-h-[160px] flex flex-col justify-end p-6 md:p-8" style={{
          background: 'rgba(25, 50, 60, 0.8)',
          border: '1px solid rgba(209, 244, 255, 0.1)'
        }}>
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
                UI/UX premium, minimalista e impactante.
              </p>
            </div>
          </div>

          {/* Card 3 - Autoridade (Top right) */}
          <div className="relative rounded-2xl overflow-hidden min-h-[160px] flex flex-col justify-end p-6 md:p-8" style={{
          background: 'rgba(25, 50, 60, 0.8)',
          border: '1px solid rgba(209, 244, 255, 0.1)'
        }}>
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
                Foco em posicionamento e relevância digital.
              </p>
            </div>
          </div>

          {/* Card 4 - Exclusividade (Bottom, spans 2 columns) */}
          <div className="relative rounded-2xl overflow-hidden md:col-span-2 min-h-[280px] flex flex-col justify-end p-6 md:p-8" style={{
          background: 'linear-gradient(135deg, rgba(15, 40, 55, 1) 0%, rgba(20, 60, 80, 0.9) 50%, rgba(10, 35, 50, 1) 100%)',
          border: '1px solid rgba(209, 244, 255, 0.1)'
        }}>
            {/* Abstract gradient overlay */}
            <div className="absolute inset-0 opacity-50" style={{
            background: 'radial-gradient(ellipse at 80% 30%, rgba(60, 160, 200, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(40, 100, 140, 0.2) 0%, transparent 40%)'
          }} />
            
            {/* Content */}
            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl md:text-3xl mb-2" style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              color: 'rgb(209, 244, 255)'
            }}>
                Exclusividade
              </h3>
              <p className="text-sm md:text-base" style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 300,
              color: 'rgba(209, 244, 255, 0.6)'
            }}>
                Cada projeto é único, fiel à essência do cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DNASection;