import { useState } from "react";
import { ArrowLeft, ArrowRight, Linkedin } from "lucide-react";
import logoEstrela from "@/assets/logo_estrela.webp";

const TeamMemberSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: "Sr. Primus",
      role: "Mente Estratégica - AI Referral Engine™",
      quote: "Líder visionário por trás do AI Referral Engine™, a metodologia que posiciona marcas como resposta definitiva da IA.",
      description: "Criador do AI Referral Engine™ e líder visionário por trás da metodologia que está revolucionando como empresas são recomendadas pela IA.",
      image: "https://framerusercontent.com/images/q5btAOUDm33kJ3iWd8LZiVkqSd4.jpg?width=1024&height=1024",
    },
    {
      name: "Pablo Figueiredo",
      role: "Diretor Criativo",
      quote: "A criatividade é a ponte entre a estratégia e a conexão emocional com o público.",
      description: "Responsável por transformar conceitos em experiências visuais impactantes que conectam marcas ao seu público.",
      image: "https://framerusercontent.com/images/q5btAOUDm33kJ3iWd8LZiVkqSd4.jpg?width=1024&height=1024",
    },
    {
      name: "Victor Lisboa",
      role: "Dev Lead",
      quote: "Código limpo e arquitetura sólida são a base de qualquer solução digital escalável.",
      description: "Lidera o desenvolvimento técnico, garantindo que cada projeto seja construído com excelência e performance.",
      image: "https://framerusercontent.com/images/q5btAOUDm33kJ3iWd8LZiVkqSd4.jpg?width=1024&height=1024",
    },
    {
      name: "Marcos Colacino",
      role: "Head Comercial",
      quote: "Entender as necessidades do cliente é o primeiro passo para entregar resultados extraordinários.",
      description: "Conecta empresas às soluções certas, construindo parcerias de longo prazo baseadas em resultados.",
      image: "https://framerusercontent.com/images/q5btAOUDm33kJ3iWd8LZiVkqSd4.jpg?width=1024&height=1024",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const currentMember = teamMembers[currentIndex];

  return (
    <section id="equipe" className="w-full py-16 md:py-24 px-5 md:px-12 font-dm">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-xs font-medium mb-4 uppercase tracking-[0.2em]">
            QUEM SOMOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Conheça nossa equipe
          </h2>
          <p className="text-foreground/60 mt-4 text-lg font-light">
            "Mentes brilhantes apaixonadas por tecnologia"
          </p>
        </div>

        {/* Featured Member - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[500px]">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-between py-4">
            {/* Star Icon */}
            <div className="mb-8">
              <img src={logoEstrela} alt="Estrela decorativa" className="w-14 h-14 object-contain" />
            </div>

            {/* Main Quote */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-[1.15] tracking-tight text-foreground mb-8 font-dm">
                {currentMember.quote}
              </p>
              
              {/* Attribution */}
              <div className="flex flex-col gap-1">
                <span className="text-foreground font-medium text-lg">{currentMember.name}</span>
                <span className="text-foreground/60 text-sm font-light">{currentMember.role}</span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3 mt-8">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/90 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5 text-background" />
              </button>
            </div>
          </div>

          {/* Right Column: Image & Overlay */}
          <div className="relative h-[450px] lg:h-auto rounded-3xl overflow-hidden">
            {/* Background Image */}
            <img 
              src={currentMember.image} 
              alt={currentMember.name} 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Floating Glass Card */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
              <div className="flex flex-col gap-3">
                {/* Name in Card */}
                <h3 className="text-white font-medium text-lg tracking-wide">
                  {currentMember.name}
                </h3>
                
                {/* Description in Card */}
                <p className="text-white/80 text-sm leading-relaxed font-light">
                  {currentMember.description}
                </p>

                {/* Social Links */}
                <div className="flex gap-2 mt-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute top-6 right-6 flex gap-2">
              {teamMembers.map((_, index) => (
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
    </section>
  );
};

export default TeamMemberSection;
