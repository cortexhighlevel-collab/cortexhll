import { useLanguage } from "@/contexts/LanguageContext";

const LogoMarquee = () => {
  const { t } = useLanguage();
  const painPoints = [
    t("marquee.1"), t("marquee.2"), t("marquee.3"), t("marquee.4"),
    t("marquee.5"), t("marquee.6"), t("marquee.7"), t("marquee.8"),
  ];

  const PainItem = ({ text }: { text: string }) => (
    <div className="flex items-center justify-center px-6 h-12 text-white opacity-90 font-dm">
      <span className="text-sm md:text-base font-medium whitespace-nowrap tracking-wide">→ "{text}"</span>
    </div>
  );

  return (
    <section className="w-full relative">
      <div className="w-full h-0 bg-white"></div>
      <div className="w-full h-px bg-[#f06800]"></div>
      <div className="w-full bg-[#f06800] py-4">
        <div className="marquee-container relative overflow-hidden marquee-mask">
          <div className="marquee-content flex">
            {painPoints.map((text, index) => (
              <PainItem key={`first-${index}`} text={text} />
            ))}
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
