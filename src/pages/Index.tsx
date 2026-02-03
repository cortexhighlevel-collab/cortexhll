import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import MetodologiaSection from "@/components/MetodologiaSection";
import DNASection from "@/components/DNASection";
import FormatoSection from "@/components/FormatoSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center pt-3">
      <Header />
      <HeroSection />
      <LogoMarquee />
      <MetodologiaSection />
      <DNASection />
      <FormatoSection />
    </div>
  );
};

export default Index;
