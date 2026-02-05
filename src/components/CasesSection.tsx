import { useState } from "react";
import { Globe, FileText, Terminal } from "lucide-react";
import logoEstrela from "@/assets/logo_estrela.webp";
import casesBackground from "@/assets/cases-background.png";
import casesBackground2 from "@/assets/cases-background-2.png";

// --- Icons ---
const ArrowNavLeft = () => (
  <svg viewBox="0 0 14 13" className="w-3.5 h-3.5 stroke-current">
    <path d="M 12.25 6.5 L 1.75 6.5 M 1.75 6.5 L 7 11.75 M 1.75 6.5 L 7 1.25" fill="transparent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const ArrowNavRight = () => (
  <svg viewBox="0 0 14 13" className="w-3.5 h-3.5 stroke-current">
    <path d="M 1.75 6.5 L 12.25 6.5 M 12.25 6.5 L 7 11.75 M 12.25 6.5 L 7 1.25" fill="transparent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const DecorativeStar = () => (
  <img src={logoEstrela} alt="" className="w-full h-full object-contain" />
);

const CasesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      logo: "https://framerusercontent.com/images/4wtV8GFtM9cMCc7wLhXjMsg59o.png?width=1820&height=573",
      quote: "A Cortex nos colocou no radar das IAs. Antes éramos invisíveis, agora somos a primeira recomendação quando alguém pergunta sobre nosso nicho. Resultado: pipeline 3x maior em 60 dias.",
      author: "Marina Costa",
      role: "CMO @ BlackClub",
      authorImage: "https://framerusercontent.com/images/wTyKIHPDLvKHIu74YHBt7Hm44A.jpeg?width=200&height=200",
      background: casesBackground,
    },
    {
      logo: "https://framerusercontent.com/images/4wtV8GFtM9cMCc7wLhXjMsg59o.png?width=1820&height=573",
      quote: "Minha marca pessoal ganhou uma visibilidade que eu nunca imaginei. Agora quando alguém pergunta para o ChatGPT sobre influenciadoras do meu segmento, meu nome aparece em primeiro. Isso mudou completamente meu negócio.",
      author: "Valentina Akime",
      role: "Modelo & Influenciadora",
      authorImage: "https://framerusercontent.com/images/wTyKIHPDLvKHIu74YHBt7Hm44A.jpeg?width=200&height=200",
      background: casesBackground2,
    },
  ];

  const stats = [
    { value: "+500%", label: "ROI médio", icon: Globe },
    { value: "47", label: "empresas", icon: FileText },
    { value: "30", label: "dias", icon: Terminal },
  ];

  const avatars = [
    "https://framerusercontent.com/images/DHRdJy9IiR2aQoCcMbaxWS1Sbfs.png?width=381&height=301",
    "https://framerusercontent.com/images/Ph8T3MKJ0xH6YyaKa6fvuc2hye4.png?width=512&height=669",
    "https://framerusercontent.com/images/21s66P6Ugns3B0SREgloFdwT84A.png?width=128&height=128",
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="cases" className="w-full bg-[#0D0D0D] text-white py-16 md:py-28 dark-dotted-bg">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-32">
        
        {/* TOP SECTION: Two columns - Left: Title & CTA, Right: Description & Stats */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* LEFT COLUMN: Title & CTA Button */}
          <div className="flex flex-col gap-8 max-w-xl">
            <h2 className="text-5xl md:text-7xl font-normal leading-[1.0] tracking-tight text-[#F2F2F2]">
              Resultados que falam
            </h2>
            
            {/* CTA Button - Below title */}
            <a 
              href="#contato" 
              className="group flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300 w-fit"
            >
              <span className="text-sm font-bold tracking-wide text-[#F2F2F2]">Ver Cases</span>
              <span className="bg-white text-black p-1 rounded-full group-hover:translate-x-1 transition-transform duration-300">
                <svg viewBox="0 0 20 20" className="w-3 h-3 fill-current">
                  <path d="M12.25 6.5L1.75 6.5M1.75 6.5L7 11.75M1.75 6.5L7 1.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>

          {/* RIGHT COLUMN: Description, Avatars & Decorative */}
          <div className="flex flex-col gap-6 items-end w-full md:w-auto">
            {/* Description Text */}
            <p className="text-xl md:text-2xl text-[#C9C9C9] text-right max-w-md leading-relaxed">
              Empresas que confiaram na Cortex para dominar as respostas da IA.
            </p>

            {/* Avatars & Counter */}
            <div className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              {/* Counter */}
              <span className="text-xs font-normal tracking-[0.2em] text-[#C9C9C9]">
                +47 EMPRESAS ATENDIDAS
              </span>

              {/* Avatar Stack */}
              <div className="flex items-center -space-x-3">
                {avatars.map((avatar, index) => (
                  <div key={index} className="w-9 h-9 rounded-full border border-[#F1F1F1] overflow-hidden bg-gray-800">
                    <img src={avatar} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Link/Tagline */}
            <div className="flex items-center gap-4 mt-4">
              <div className="w-14 h-14">
                <DecorativeStar />
              </div>
              <p className="text-right text-lg text-[#C9C9C9] max-w-[150px] leading-tight">
                Resultados comprovados em 30 dias.
              </p>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL SECTION (Large Card with Carousel) */}
        <div className="relative w-full h-[550px] md:h-[520px] rounded-[40px] overflow-hidden group bg-black">
          {/* Full Background Image - covers the right side */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] flex items-center justify-end transition-opacity duration-500">
            <img 
              src={currentTestimonial.background} 
              alt="Background" 
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Glass Card Content - positioned on left side */}
          <div className="absolute left-0 top-0 bottom-0 w-full md:w-[45%] overflow-hidden">
            {/* Blurred background for glass effect */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />
            
            {/* Content */}
            <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between">
              {/* Header: Logo & Nav */}
              <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="w-24 opacity-90">
                  <img src={currentTestimonial.logo} alt="Client Logo" className="w-full h-auto object-contain" />
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-3">
                  <button 
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition text-white"
                  >
                    <ArrowNavLeft />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition text-black"
                  >
                    <ArrowNavRight />
                  </button>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="mt-8 mb-8">
                <p className="text-lg md:text-[18px] leading-relaxed text-white/90 font-light transition-opacity duration-300">
                  "{currentTestimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={currentTestimonial.authorImage} alt={currentTestimonial.author} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium text-sm leading-tight">{currentTestimonial.author}</span>
                  <span className="text-white/60 text-xs leading-tight">{currentTestimonial.role}</span>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-white w-6' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex items-center justify-center gap-4 py-8 px-10 rounded-[20px] border border-white/10 bg-[#141414]">
                <div className="text-white/80">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl md:text-5xl font-bold text-orange-500 leading-none">{stat.value}</span>
                  <span className="text-[#808080] text-xs tracking-[0.15em] uppercase mt-1">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CasesSection;
