import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import MetodologiaSection from "@/components/MetodologiaSection";
import DNASection from "@/components/DNASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center pt-3">
      <Header />
      <HeroSection />
      <LogoMarquee />
      <MetodologiaSection />
      <DNASection />
    </div>
  );
};

export default Index;
