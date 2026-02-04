import React from 'react';

const CTASection = () => {
  return (
    <div id="contato" className="min-h-screen bg-[#f2f2f2] text-black p-8 flex items-center justify-center font-sans antialiased selection:bg-[#f06800] selection:text-white">
      {/* Container principal horizontal (flex-row em telas grandes) */}
      <div className="w-full max-w-[1280px] bg-[#f2f2f2] relative z-10 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-24 border-y border-black/10 py-12 lg:py-20">
        {/* Seção Esquerda: Texto e Informações */}
        <div className="flex flex-col gap-8 lg:max-w-[60%] flex-shrink-0">
          {/* Header Line */}
          <div className="flex items-center gap-4">
            {/* Ícone Decorativo */}
            <div className="h-[23px] w-[100px] flex items-center gap-1 opacity-80">
              <div className="h-full w-1 bg-[#f06800]"></div>
              <div className="h-full w-1 bg-[#f06800]/50"></div>
              <div className="h-full w-full bg-gradient-to-r from-[#f06800]/20 to-transparent"></div>
            </div>
            <h4 className="text-[28px] lg:text-[38px] font-light tracking-[-0.04em] text-gray-800 leading-[1.1]">
              Diagnóstico
            </h4>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[36px] lg:text-[56px] leading-[1.05] font-normal tracking-[-0.04em] text-gray-900">
              O custo de não agir é maior que o investimento
            </h4>
            <p className="text-[18px] lg:text-[22px] leading-[1.5] text-gray-600 tracking-[-0.02em] max-w-xl">
              Enquanto você espera, seus concorrentes estão sendo recomendados pela IA. A cada dia de inércia, você perde mercado para quem já se posicionou.
            </p>
          </div>
          {/* Tags posicionadas abaixo do texto */}
          <div className="flex flex-wrap gap-3 mt-2">
            <div className="px-5 py-1.5 rounded-full border border-[#f06800]/30 bg-[#f06800]/10 backdrop-blur-md flex items-center gap-2">
              <span className="text-xs">🎯</span>
              <span className="text-xs text-gray-800 uppercase tracking-wider font-medium">Diagnóstico Gratuito</span>
            </div>
            <div className="px-5 py-1.5 rounded-full bg-[#f06800] border border-[#f06800]">
              <span className="text-xs text-white uppercase tracking-wider font-medium">Sua Marca</span>
            </div>
          </div>
        </div>

        {/* Seção Direita: Ação e Visual */}
        <div className="flex flex-col gap-8 w-full lg:w-auto lg:min-w-[420px] flex-grow">
          {/* Box de Ação */}
          <div className="flex flex-col gap-4">
            <form className="w-full relative" onSubmit={(e) => e.preventDefault()}>
              <button 
                type="submit"
                className="group w-full bg-[#f06800] text-white rounded-full h-[72px] pl-8 pr-4 flex items-center justify-between hover:bg-[#d95c00] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 ease-out cursor-pointer shadow-[0_0_30px_rgba(240,104,0,0.25)]"
              >
                <span className="text-lg uppercase tracking-wider font-medium">
                  Agendar Diagnóstico
                </span>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </button>
              <input type="text" name="website" tabIndex={-1} className="hidden" />
            </form>

            {/* Links de contato direto */}
            <div className="flex items-center justify-center lg:justify-end gap-4 text-sm text-gray-500">
              <span>Ou fale direto:</span>
              <a href="#" className="hover:text-[#f06800] transition-colors flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-[#f06800] transition-colors flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Email
              </a>
            </div>
          </div>

          {/* SVG Decorativo (Mantido como elemento de design "tech") */}
          <div className="w-full flex justify-center lg:justify-end opacity-20 pointer-events-none">
            <img 
              src={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 164" fill="%23f06800"><path d="M381.3 163.1V111.8h8.6v11.5c4-6.9 10.7-12.2 19.3-12.2 9.3 0 14.2 6.1 14.2 17.9v34.1h-8.6v-33c0-9-3.6-11.8-9.4-11.8-7.8 0-13.7 7.3-15.4 15.5v29.3h-8.7zM362.6 129c0-6.7-3.8-10.9-11.3-10.9-6.9 0-11.5 3.5-13.6 9.4l-7.9-2c2.6-8 10.4-14.3 22.1-14.3 12.5 0 19.5 6.4 19.5 18v34h-8.7v-9.7c-3.9 6.5-11.1 10.4-18.9 10.4-8.8 0-15.9-4.8-15.9-13.4 0-10.6 8.5-14.5 21-15.5 8-.7 13-1.5 13.7-4.9zm-25.4 20.3c0 5.8 4.9 8.1 10.1 8.1 7.3 0 14.4-5.1 15.4-14.8v-6.2c-2.1 2.4-6.1 3.9-11.4 4.4-8.6.7-14 1.9-14 8.5zM253.1 163.1V111.8h8.7v10.4c3.2-6.1 8.7-11.1 16.7-11.1 7.9 0 11.9 4.4 13 11.6 3.2-6.3 8.8-11.6 17-11.6 9.5 0 13.2 6.3 13.2 16.4v35.6h-8.6v-33.7c0-7.7-2.7-11.6-7.8-11.6-8.2 0-13.4 9.9-13.4 17.4v27.9h-8.7v-33.7c0-7.7-2.7-11.6-7.8-11.6-8.2 0-13.4 9.9-13.4 17.4v27.9h-8.6zM242.1 111.8v51.3h-8.6v-11.7c-4 7.1-10.7 12.4-19.4 12.4-9.3 0-14.2-6.1-14.2-17.9v-34.1h8.6v33c0 9 3.6 11.8 9.4 11.8 8 0 14-7.6 15.6-16v-28.8h8.6zM179.4 163.1v-33h-36v33h-9.1V91.9h9.1v30.9h36V91.9h9.1v71.2h-9.1zM90.9 129c0-6.7-3.8-10.9-11.3-10.9-6.9 0-11.5 3.5-13.6 9.4l-7.9-2c2.6-8 10.4-14.3 22.1-14.3 12.5 0 19.5 6.4 19.5 18v34H90.9v-9.7c-3.9 6.5-11.1 10.4-18.9 10.4-8.8 0-15.9-4.8-15.9-13.4 0-10.6 8.5-14.5 21-15.5 8-.7 13-1.5 13.7-4.9zm-25.4 20.3c0 5.8 4.9 8.1 10.1 8.1 7.3 0 14.4-5.1 15.4-14.8v-6.2c-2.1 2.4-6.1 3.9-11.4 4.4-8.6.7-14 1.9-14 8.5zM40.7 163.1v-11c-3.4 7.1-9.6 11.7-18.2 11.7-12.5 0-21.6-10.2-21.6-26.5 0-16.3 9.8-26.3 21.5-26.3 8.3 0 14.9 4.4 18.3 11.8V91.9h8.7v71.2h-8.7zm-30.7-25.7c0 12 6 19.5 14.9 19.5 9.3 0 15.8-7.9 15.8-19.2 0-11.5-6.9-19.6-15.6-19.6-8.8 0-15.1 7.4-15.1 19.3zM413.8 71.5V20.2h8.7v13.8c3.1-8.5 8.8-14.5 17.2-14.5h.3v9.1c-10.7 0-17.4 6.1-17.4 19.8v23.1h-8.8zM383.8 72.2c-14.7 0-24.9-10.2-24.9-26.4 0-14.6 9.5-26.4 24.6-26.4 13.8 0 22.8 10.2 22.8 23.4 0 1.2-.1 2.6-.3 3.9h-38.2c.4 12.2 7.4 18.6 16.3 18.6 8.3 0 12.2-5.5 14.2-10.8l7.9 1.9c-2.5 8.1-9.9 15.8-22.4 15.8zm-15.5-31.9h29.1c-.7-7.8-5.9-13.9-14.1-13.9-7.9 0-13.4 5.6-15 13.9zM351.6 71.5c-9.1 0-14.5-5.1-14.5-14.1V27.3h-6.4V20.2h6.4V9.9l8.6-3.8v14.1h12.2v7.1h-12.2v29.7c0 4.5 2.4 7.1 6.5 7.1h5.7v7.3h-.3zM323.6 71.5c-9.1 0-14.5-5.1-14.5-14.1V27.3h-6.4V20.2h6.4V9.9l8.6-3.8v14.1h12.2v7.1h-12.2v29.7c0 4.5 2.4 7.1 6.5 7.1h5.7v7.3h-.3zM278 72.2c-14.7 0-24.9-10.2-24.9-26.4 0-14.6 9.5-26.4 24.6-26.4 13.8 0 22.8 10.2 22.8 23.4 0 1.2-.1 2.6-.3 3.9h-38.2c.4 12.2 7.4 18.6 16.3 18.6 8.3 0 12.2-5.5 14.2-10.8l7.9 1.9c-2.5 8.1-9.9 15.8-22.4 15.8zm-15.5-31.9h29.1c-.7-7.8-5.9-13.9-14.1-13.9-7.9 0-13.4 5.6-15 13.9zM237.3 71.5V.3h8.8v71.2h-8.8zM210.9 72.2c-13.2 0-20.4-7-22.7-15.3l8-2c2.1 6.5 6.7 10.7 14.9 10.7 7.1 0 11.2-3.2 11.2-8.3 0-4.7-3.6-6.6-9.5-8.1l-8.2-2c-8.9-2.1-14.6-5.2-14.6-13.1 0-8.8 7.4-14.5 18.5-14.5 11.6 0 18.7 5.6 21.3 13.5l-8.1 1.9c-1.8-5.2-6-8.9-13.3-8.9-6.1 0-10.4 2.7-10.4 7.4 0 4.4 3.6 6.1 8.3 7.2l9.4 2.2c9.4 2.1 14.6 6.1 14.6 13.8 0 9-6.8 15.5-19.4 15.5zM132.8 71.5L118.4 20.2h8.1l11 39.2 12-39.2h7.7l11.5 39 11.2-39h7.9L173.2 71.5h-7.9l-12.2-40.8-12.4 40.8h-7.9zM94.6 72.2c-14.7 0-24.9-10.2-24.9-26.4 0-14.6 9.5-26.4 24.6-26.4 13.8 0 22.8 10.2 22.8 23.4 0 1.2-.1 2.6-.3 3.9H78.6c.4 12.2 7.4 18.6 16.3 18.6 8.3 0 12.2-5.5 14.2-10.8l7.9 1.9c-2.5 8.1-9.9 15.8-22.4 15.8zm-15.5-31.9h29.1c-.7-7.8-5.9-13.9-14.1-13.9-7.9 0-13.4 5.6-15 13.9zM5.5 71.5V.3h10.3l37.5 57.3V.3h8.7v71.2h-9.1L14.2 12.4v59.1H5.5z"/></svg>`} 
              alt="Newsletter Graphic" 
              className="w-auto h-[120px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
