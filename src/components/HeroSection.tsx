import { useState, useEffect } from "react";
import heroVideo from "@/assets/hero-background.mp4";

const ProfileStack = () => {
  const profiles = [
    "https://framerusercontent.com/images/W25OSdXNijQzs6HFOy5Tnx7SI.jpg",
    "https://framerusercontent.com/images/XkZDFV2RkODhiEIHZaZGoYIBdY.jpg",
    "https://framerusercontent.com/images/rOuv1z818S3i8SIQTmjJqH3ghKE.jpg",
  ];

  return (
    <div className="flex items-center relative h-12 mr-6 translate-y-16">
      {profiles.map((src, index) => (
        <div key={index} className="profile-bubble">
          <img src={src} alt="Cliente" className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="profile-bubble bg-muted flex items-center justify-center text-sm font-normal text-muted-foreground tracking-wide">
        47+
      </div>
    </div>
  );
};

const CTAArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 40 41">
    <path d="M 20 40.549 C 8.954 40.549 0 31.594 0 20.549 L 0 20.549 C 0 9.503 8.954 0.549 20 0.549 L 20 0.549 C 31.046 0.549 40 9.503 40 20.549 L 40 20.549 C 40 31.594 31.046 40.549 20 40.549 Z" fill="rgb(255,255,255)"></path>
    <path d="M 25.833 20.549 L 14.167 20.549" fill="transparent" strokeWidth="1.5" stroke="rgb(50,50,50)" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M 21.667 24.715 L 25.833 20.549" fill="transparent" strokeWidth="1.5" stroke="rgb(50,50,50)" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M 21.667 16.382 L 25.833 20.549" fill="transparent" strokeWidth="1.5" stroke="rgb(50,50,50)" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const AnimatedWord = () => {
  const words = ["Automação", "Estratégia", "IA"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-orange-500 inline-block min-w-[200px] transition-opacity duration-500">
      {words[currentIndex]}
    </span>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/20 z-10" />

      {/* Content */}
      <main className="relative z-20 w-full max-w-[1800px] mx-auto px-5 md:px-12 flex flex-col gap-12 mt-10 md:mt-20 pb-16">
        {/* H1 Headline */}
        <h1 className="hero-title max-w-[900px] mt-12 translate-y-40">
          Seu Negócio Acelerado com<br /><AnimatedWord />
        </h1>

        {/* Content Column */}
        <div className="flex flex-col gap-6 mt-16">
          {/* Profile Stack */}
          <ProfileStack />

          {/* Subtext */}
          <p className="text-[clamp(18px,2vw,25px)] leading-[1.2] text-foreground/90 translate-y-16">
            <span className="font-light">Inteligência Digital que Gera</span><br />
            <strong className="font-bold">Crescimento & Resultados Reais</strong>
          </p>

          {/* AI Referral Engine Badge */}
          <div className="translate-y-16 flex items-center gap-2 text-sm text-foreground/70">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span>Conheça o <strong className="text-foreground">AI Referral Engine™</strong> — Nossa metodologia que posiciona sua marca como resposta definitiva da IA</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-16">
            <a href="#contato" className="btn-cta">
              Diagnóstico Grátis
              <CTAArrowIcon />
            </a>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-foreground/20 text-foreground font-medium hover:bg-foreground/5 transition-colors"
            >
              <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
