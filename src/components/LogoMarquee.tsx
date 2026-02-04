const LogoMarquee = () => {
  const painPoints = [
    "Meu site não aparece na IA",
    "Investi em tráfego e não vendeu",
    "Dependemos só de indicação",
    "Site bonito mas zero conversão",
    "ChatGPT não recomenda minha empresa",
    "Concorrentes dominam o Google",
    "Não sei como escalar com IA",
    "Meu marketing não gera ROI",
  ];

  const PainItem = ({ text }: { text: string }) => (
    <div className="flex items-center justify-center px-6 h-12 text-white opacity-90">
      <span className="text-sm md:text-base font-medium whitespace-nowrap">→ "{text}"</span>
    </div>
  );

  return (
    <section className="w-full relative">
      {/* Área branca acima da linha */}
      <div className="w-full h-8 bg-white"></div>
      {/* Linha divisória */}
      <div className="w-full h-px bg-[#f06800]"></div>
      {/* Área laranja com as dores */}
      <div className="w-full bg-[#f06800] py-4">
        {/* Marquee Container */}
        <div className="marquee-container relative overflow-hidden marquee-mask">
          <div className="marquee-content flex">
            {/* First set */}
            {painPoints.map((text, index) => (
              <PainItem key={`first-${index}`} text={text} />
            ))}
            {/* Duplicate set for seamless loop */}
            {painPoints.map((text, index) => (
              <PainItem key={`second-${index}`} text={text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
