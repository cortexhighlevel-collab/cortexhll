import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import ProblemSection from "@/components/ProblemSection";
import MetodologiaSection from "@/components/MetodologiaSection";
import DNASection from "@/components/DNASection";
import FormatoSection from "@/components/FormatoSection";
import CasesSection from "@/components/CasesSection";
import OfertaSection from "@/components/OfertaSection";
import TeamMemberSection from "@/components/TeamMemberSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen flex flex-col items-center pt-3">
      {/* Seção 1: Header/Navbar */}
      <Header />
      
      {/* Seção 2: Hero Principal */}
      <HeroSection />
      
      {/* Seção 3: Gatilhos de Identificação (Marquee) */}
      <LogoMarquee />
      
      {/* Seção 4: Problema/Dor */}
      <ProblemSection />
      
      {/* Seção 5: Solução ("Nossa Abordagem") */}
      <MetodologiaSection />
      
      {/* Seção 7: Serviços */}
      <FormatoSection />
      
      {/* Seção 8: Cases/Resultados */}
      <CasesSection />
      
      {/* Seção 9: Diferenciais */}
      <DNASection />
      
      {/* Seção 10: Equipe */}
      <TeamMemberSection />
      
      {/* Seção 11: Oferta/Pacotes */}
      <OfertaSection />
      
      {/* Seção 12: CTA Final */}
      <CTASection />
      
      {/* Seção 13: Footer */}
      <Footer />
    </div>;
};
export default Index;