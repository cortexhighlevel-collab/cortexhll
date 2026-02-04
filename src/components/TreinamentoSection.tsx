import { ArrowRight, ArrowLeft, Globe, FileText, Command } from "lucide-react";

const DecorativeArrowIcon = () => (
  <svg viewBox="0 0 68 59" className="w-full h-full" preserveAspectRatio="none">
    <path d="M 0 0 L 52 0 C 60.837 0 68 7.163 68 16 L 68 59 L 16 59 C 7.163 59 0 51.837 0 43 Z" fill="transparent"></path>
    <path d="M 3 33.218 L 9.714 30.691 L 9.714 31.76 L 3 34.277 Z" fill="#C6C6C6"></path>
    <path d="M 43.286 23.927 L 50 26.444 L 50 27.512 L 43.286 24.987 Z" fill="#C6C6C6"></path>
    <path d="M 12.675 44.409 L 9.135 40.894 C 9.09 40.849 9.017 40.849 8.973 40.894 L 7.071 42.783 L 6.216 41.935 L 10.949 37.234 L 11.804 38.083 L 9.874 39.999 C 9.829 40.044 9.829 40.115 9.874 40.16 L 13.414 43.675 Z" fill="#C6C6C6"></path>
    <path d="M 40.315 13.813 L 43.854 17.328 C 43.899 17.373 43.971 17.373 44.016 17.328 L 45.946 15.412 L 46.8 16.26 L 42.067 20.961 L 41.212 20.112 L 43.115 18.223 C 43.16 18.178 43.16 18.105 43.115 18.06 L 39.576 14.545 L 40.315 13.811 Z" fill="#C6C6C6"></path>
    <path d="M 5.827 30.218 L 5.827 25.246 C 5.827 25.183 5.776 25.132 5.712 25.132 L 3.022 25.132 L 3.022 23.931 L 9.716 23.931 L 9.716 25.132 L 6.988 25.132 C 6.924 25.132 6.874 25.183 6.874 25.244 L 6.874 30.216 L 5.829 30.216 Z" fill="#C6C6C6"></path>
    <path d="M 41.9 42.823 L 38.36 46.338 L 40.29 48.416 L 39.435 49.264 L 34.702 44.563 L 35.556 43.715 L 37.459 45.605 L 41.162 42.089 L 41.901 42.823 Z" fill="#C6C6C6"></path>
  </svg>
);

const TreinamentoSection = () => {
  return (
    <section className="w-full bg-[#0D0D0D] text-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-28 flex flex-col gap-16 md:gap-24">
        
        {/* TOP SECTION: Header & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Title */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.0] tracking-tight text-[#F2F2F2]">
              Treinamento para empresas
            </h2>
          </div>

          {/* CTA Button */}
          <a 
            href="#" 
            className="group flex items-center gap-3 px-6 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300"
          >
            <span className="text-sm font-bold tracking-wide text-[#F2F2F2]">Saiba Mais</span>
            <span className="bg-white text-black p-1.5 rounded-full group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>
        </div>

        {/* MIDDLE SECTION: Description & Stats */}
        <div className="flex flex-col md:flex-row justify-end items-end gap-12 relative">
          {/* Right Column Layout */}
          <div className="flex flex-col gap-6 items-end w-full md:w-auto">
            {/* Description Text */}
            <p className="text-xl md:text-2xl text-[#C9C9C9] text-right max-w-md leading-relaxed">
              Explore todo o potencial do seu time com treinamentos customizados para líderes e criativos.
            </p>

            {/* Avatars & Counter */}
            <div className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              {/* Counter */}
              <span className="text-xs font-normal tracking-[0.2em] text-[#C9C9C9]">
                +20 TREINAMENTOS
              </span>

              {/* Avatar Stack */}
              <div className="flex items-center -space-x-3">
                <div className="w-9 h-9 rounded-full border border-[#F1F1F1] overflow-hidden bg-gray-800">
                  <img src="https://framerusercontent.com/images/DHRdJy9IiR2aQoCcMbaxWS1Sbfs.png?width=381&height=301" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full border border-[#F1F1F1] overflow-hidden bg-gray-700">
                  <img src="https://framerusercontent.com/images/Ph8T3MKJ0xH6YyaKa6fvuc2hye4.png?width=512&height=669" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full border border-[#F1F1F1] overflow-hidden bg-gray-600">
                  <img src="https://framerusercontent.com/images/21s66P6Ugns3B0SREgloFdwT84A.png?width=128&height=128" alt="User" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Decorative Link/Tagline */}
            <div className="flex items-center gap-4 mt-4">
              <div className="w-16 h-14 opacity-60">
                <DecorativeArrowIcon />
              </div>
              <p className="text-right text-lg text-[#C9C9C9] max-w-[150px] leading-tight">
                Traga sua empresa para a era da IA.
              </p>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL SECTION (Large Card) */}
        <div className="relative w-full h-[550px] md:h-[480px] rounded-[40px] overflow-hidden group">
          {/* Background Image */}
          <img 
            src="https://framerusercontent.com/images/X4R8XtE9BCbg5qcsJWyzE4SQDg.png?width=5376&height=3072" 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          {/* Glass Card Content */}
          <div className="absolute left-0 top-0 bottom-0 w-full md:w-[480px] bg-black/20 backdrop-blur-xl border-r border-white/10 p-8 md:p-12 flex flex-col justify-between">
            {/* Header: Logo & Nav */}
            <div className="flex justify-between items-center">
              {/* Logo Placeholder (Banco Inter) */}
              <div className="w-24 opacity-90">
                <img src="https://framerusercontent.com/images/4wtV8GFtM9cMCc7wLhXjMsg59o.png?width=1820&height=573" alt="Banco Inter" className="w-full h-auto object-contain" />
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
                  <ArrowLeft className="w-4 h-4 text-white" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition">
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="mt-8 mb-8">
              <p className="text-lg md:text-[18px] leading-relaxed text-white/90 font-light">
                "O workshop da Human me fez enxergar a IA com novos olhos. Percebi que ela não é apenas uma ferramenta, mas um parceiro de criação e reflexão. Saí de lá com um novo sentido sobre como a inteligência artificial pode transformar minha vida e meu trabalho de uma forma positiva."
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="https://framerusercontent.com/images/wTyKIHPDLvKHIu74YHBt7Hm44A.jpeg?width=200&height=200" alt="Renato Chabuh" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium text-sm leading-tight">Renato Chabuh</span>
                <span className="text-white/60 text-xs leading-tight">Sócio e Produtor Executivo / Corazon Filmes</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Benefit 1 */}
          <div className="flex items-center justify-center gap-3 p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <Globe className="w-6 h-6 text-white/90" />
            <span className="text-[#C9C9C9] text-sm md:text-base tracking-wide uppercase">AULAS GRAVADAS</span>
          </div>

          {/* Benefit 2 */}
          <div className="flex items-center justify-center gap-3 p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <FileText className="w-6 h-6 text-white/90" />
            <span className="text-[#C9C9C9] text-sm md:text-base tracking-wide uppercase">BIBLIOTECAS DE PROMPTS</span>
          </div>

          {/* Benefit 3 */}
          <div className="flex items-center justify-center gap-3 p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <Command className="w-6 h-6 text-white/90" />
            <span className="text-[#C9C9C9] text-sm md:text-base tracking-wide uppercase">PRATICA AO SEU LADO</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TreinamentoSection;
