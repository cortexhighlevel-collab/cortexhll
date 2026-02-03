const DNASection = () => {
  return (
    <section className="w-full min-h-screen bg-black">
      {/* Main Container - 1200px max width, 48px gap */}
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col items-center" style={{ gap: '48px' }}>
        
        {/* Title Section - 24px gap */}
        <div className="flex flex-col items-center justify-center w-full" style={{ gap: '24px' }}>
          
          {/* DNA Verus Pill */}
          <div 
            className="px-5 py-2 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(209, 244, 255, 0.04)',
              border: '1px solid rgba(209, 244, 255, 0.2)',
              boxShadow: 'rgba(209, 244, 255, 0.12) 0px 4px 8px 0px inset'
            }}
          >
            <h5 
              className="text-xl tracking-wide"
              style={{ 
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 300,
                color: 'rgba(209, 244, 255, 0.8)',
                lineHeight: '150%'
              }}
            >
              DNA Verus
            </h5>
          </div>

          {/* Text Container - 16px gap */}
          <div className="flex flex-col items-center justify-center w-full" style={{ gap: '16px' }}>
            
            {/* Main Title */}
            <h2 
              className="text-4xl md:text-5xl text-center"
              style={{ 
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                color: 'rgb(209, 244, 255)',
                lineHeight: '130%'
              }}
            >
              Excelência sem concessões.
            </h2>

            {/* Description */}
            <p 
              className="text-center max-w-[663px] text-lg md:text-xl"
              style={{ 
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 300,
                color: 'rgba(209, 244, 255, 0.8)',
                lineHeight: '150%'
              }}
            >
              Na Verus, não entregamos o comum. Nossos projetos são guiados por autenticidade, 
              sofisticação e inovação. Isso significa criar experiências digitais que vão além 
              da estética: entregam confiança, credibilidade e resultados reais.
            </p>
          </div>
        </div>

        {/* Cards Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          
          {/* Card 1 - Exclusividade (top corners) */}
          <div 
            className="relative p-8 md:p-10 min-h-[200px] md:min-h-[240px] flex flex-col justify-end"
            style={{ border: '1px solid rgba(209, 244, 255, 0.1)' }}
          >
            {/* Top Left Corner */}
            <div className="absolute top-0 left-0 w-12 h-12">
              <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'rgb(209, 244, 255)' }}></div>
              <div className="absolute top-0 left-0 w-px h-full" style={{ background: 'rgb(209, 244, 255)' }}></div>
            </div>
            {/* Top Right Corner */}
            <div className="absolute top-0 right-0 w-12 h-12">
              <div className="absolute top-0 right-0 w-full h-px" style={{ background: 'rgb(209, 244, 255)' }}></div>
              <div className="absolute top-0 right-0 w-px h-full" style={{ background: 'rgb(209, 244, 255)' }}></div>
            </div>
            
            {/* Content */}
            <div className="mt-auto">
              <h3 
                className="text-2xl md:text-3xl mb-3 tracking-wide"
                style={{ 
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 300,
                  color: 'rgb(209, 244, 255)'
                }}
              >
                Exclusividade
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 300,
                  color: 'rgba(209, 244, 255, 0.5)'
                }}
              >
                Cada projeto é único, fiel à essência do cliente.
              </p>
            </div>
          </div>

          {/* Card 2 - Sofisticação (no corners) */}
          <div 
            className="relative p-8 md:p-10 min-h-[200px] md:min-h-[240px] flex flex-col justify-end"
            style={{ border: '1px solid rgba(209, 244, 255, 0.1)' }}
          >
            {/* Content */}
            <div className="mt-auto">
              <h3 
                className="text-2xl md:text-3xl mb-3 tracking-wide"
                style={{ 
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 300,
                  color: 'rgb(209, 244, 255)'
                }}
              >
                Sofisticação
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 300,
                  color: 'rgba(209, 244, 255, 0.5)'
                }}
              >
                UI/UX premium, minimalista e impactante.
              </p>
            </div>
          </div>

          {/* Card 3 - Autoridade (no corners) */}
          <div 
            className="relative p-8 md:p-10 min-h-[200px] md:min-h-[240px] flex flex-col justify-end"
            style={{ border: '1px solid rgba(209, 244, 255, 0.1)' }}
          >
            {/* Content */}
            <div className="mt-auto">
              <h3 
                className="text-2xl md:text-3xl mb-3 tracking-wide"
                style={{ 
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 300,
                  color: 'rgb(209, 244, 255)'
                }}
              >
                Autoridade
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 300,
                  color: 'rgba(209, 244, 255, 0.5)'
                }}
              >
                Foco em posicionamento e relevância digital.
              </p>
            </div>
          </div>

          {/* Card 4 - Exclusividade (bottom corners) */}
          <div 
            className="relative p-8 md:p-10 min-h-[200px] md:min-h-[240px] flex flex-col justify-end"
            style={{ border: '1px solid rgba(209, 244, 255, 0.1)' }}
          >
            {/* Bottom Left Corner */}
            <div className="absolute bottom-0 left-0 w-12 h-12">
              <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'rgb(209, 244, 255)' }}></div>
              <div className="absolute bottom-0 left-0 w-px h-full" style={{ background: 'rgb(209, 244, 255)' }}></div>
            </div>
            {/* Bottom Right Corner */}
            <div className="absolute bottom-0 right-0 w-12 h-12">
              <div className="absolute bottom-0 right-0 w-full h-px" style={{ background: 'rgb(209, 244, 255)' }}></div>
              <div className="absolute bottom-0 right-0 w-px h-full" style={{ background: 'rgb(209, 244, 255)' }}></div>
            </div>
            
            {/* Content */}
            <div className="mt-auto">
              <h3 
                className="text-2xl md:text-3xl mb-3 tracking-wide"
                style={{ 
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 300,
                  color: 'rgb(209, 244, 255)'
                }}
              >
                Exclusividade
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 300,
                  color: 'rgba(209, 244, 255, 0.5)'
                }}
              >
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
