import { useState, useEffect } from "react";
import heroVideo from "@/assets/hero-background-desktop.webm";
import heroVideoMobile from "@/assets/hero-background-mobile.webm";
import CTAButton from "./CTAButton";
import { useLanguage } from "@/contexts/LanguageContext";

const ProfileStack = () => {
  const profiles = ["https://framerusercontent.com/images/W25OSdXNijQzs6HFOy5Tnx7SI.jpg", "https://framerusercontent.com/images/XkZDFV2RkODhiEIHZaZGoYIBdY.jpg", "https://framerusercontent.com/images/rOuv1z818S3i8SIQTmjJqH3ghKE.jpg"];
  return <div className="flex items-center relative h-12 mr-6 translate-y-[6.5rem] md:translate-y-16">
      {profiles.map((src, index) => <div key={index} className="profile-bubble">
          <img src={src} alt="Cliente" className="w-full h-full object-cover" />
        </div>)}
      <div className="profile-bubble bg-muted flex items-center justify-center text-sm font-normal text-muted-foreground tracking-wide">
        47+
      </div>
    </div>;
};

const CTAArrowIcon = () => <svg width="20" height="20" viewBox="0 0 40 41">
    <path d="M 20 40.549 C 8.954 40.549 0 31.594 0 20.549 L 0 20.549 C 0 9.503 8.954 0.549 20 0.549 L 20 0.549 C 31.046 0.549 40 9.503 40 20.549 L 40 20.549 C 40 31.594 31.046 40.549 20 40.549 Z" fill="rgb(255,255,255)"></path>
    <path d="M 25.833 20.549 L 14.167 20.549" fill="transparent" strokeWidth="1.5" stroke="rgb(50,50,50)" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M 21.667 24.715 L 25.833 20.549" fill="transparent" strokeWidth="1.5" stroke="rgb(50,50,50)" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M 21.667 16.382 L 25.833 20.549" fill="transparent" strokeWidth="1.5" stroke="rgb(50,50,50)" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>;

const AnimatedWord = () => {
  const { t } = useLanguage();
  const words = t("hero.words").split(",");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);
  return <span className="text-orange-500 inline-block min-w-[200px] transition-opacity duration-500 font-medium">
      {words[currentIndex]}
    </span>;
};

export const HeroSection = () => {
  const { t } = useLanguage();
  
  return <section className="relative w-full h-[95vh] flex items-center overflow-hidden pb-16">
      <video autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover object-[center_55%] z-0 hidden md:block" style={{ backgroundColor: '#f5f5f5' }}>
        <source src={heroVideo} type="video/webm" />
      </video>
      
      <video autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover z-0 md:hidden" style={{ backgroundColor: '#f5f5f5' }}>
        <source src={heroVideoMobile} type="video/webm" />
      </video>
      
      <div className="absolute inset-0 bg-white/20 z-10" />

      <main className="relative z-20 w-full max-w-[1800px] mx-auto px-5 md:px-12 flex flex-col gap-12 pt-24 pb-8">
        <h1 className="hero-title max-w-[900px] mt-12 -translate-y-[40%] md:translate-y-40">
          {t("hero.title")}<br /><AnimatedWord />
        </h1>

        <div className="flex flex-col gap-6 mt-16">
          <ProfileStack />

          <p className="text-[clamp(18px,2vw,25px)] leading-[1.2] text-foreground/90 translate-y-28 md:translate-y-16">
            <span className="font-light">{t("hero.subtitle.light")}</span><br />
            <strong className="font-bold">{t("hero.subtitle.bold")}</strong>
          </p>

          <div className="hidden md:flex translate-y-16 items-center gap-2 text-sm text-foreground/70">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span>{t("hero.badge")} <strong className="text-foreground">{t("hero.badge.method")}</strong> {t("hero.badge.desc")}<br />{t("hero.badge.desc2")}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-16 md:mt-16">
            <CTAButton href="#contato" icon={<CTAArrowIcon />} className="mt-8 md:mt-0">
              {t("hero.cta")}
            </CTAButton>
          </div>
        </div>
      </main>
    </section>;
};
export default HeroSection;
