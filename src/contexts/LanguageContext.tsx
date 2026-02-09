import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Header
    "nav.home": "Início",
    "nav.method": "Método",
    "nav.services": "Serviços",
    "nav.cases": "Cases",
    "nav.team": "Equipe",
    "nav.faq": "FAQ",
    "nav.contact": "Fale Conosco",

    // Content Dropdown
    "dropdown.services": "Serviços",
    "dropdown.ai": "AI Intelligence & CRM",
    "dropdown.ai.sub": "Automação e inteligência artificial",
    "dropdown.design": "Design & Performance",
    "dropdown.design.sub": "Identidade visual e conversão",
    "dropdown.growth": "Growth & Traffic",
    "dropdown.growth.sub": "Estratégias de crescimento",
    "dropdown.infra": "Infraestrutura",
    "dropdown.infra.sub": "Soluções técnicas robustas",
    "dropdown.cta": "Pronto para escalar?",

    // Hero
    "hero.title": "Seu Negócio Acelerado com",
    "hero.words": "Automação,Estratégia,IA",
    "hero.subtitle.light": "Inteligência Digital que Gera",
    "hero.subtitle.bold": "Crescimento & Resultados Reais",
    "hero.badge": "Conheça o",
    "hero.badge.method": "AI Referral Engine™",
    "hero.badge.desc": "— Nossa metodologia",
    "hero.badge.desc2": "que posiciona sua marca como resposta definitiva da IA",
    "hero.cta": "Diagnóstico Grátis",

    // Mobile menu services
    "mobile.ai": "AI Intelligence",
    "mobile.design": "Design",
    "mobile.growth": "Growth",
    "mobile.infra": "Infraestrutura",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.method": "Method",
    "nav.services": "Services",
    "nav.cases": "Cases",
    "nav.team": "Team",
    "nav.faq": "FAQ",
    "nav.contact": "Contact Us",

    // Content Dropdown
    "dropdown.services": "Services",
    "dropdown.ai": "AI Intelligence & CRM",
    "dropdown.ai.sub": "Automation and artificial intelligence",
    "dropdown.design": "Design & Performance",
    "dropdown.design.sub": "Visual identity and conversion",
    "dropdown.growth": "Growth & Traffic",
    "dropdown.growth.sub": "Growth strategies",
    "dropdown.infra": "Infrastructure",
    "dropdown.infra.sub": "Robust technical solutions",
    "dropdown.cta": "Ready to scale?",

    // Hero
    "hero.title": "Your Business Accelerated with",
    "hero.words": "Automation,Strategy,AI",
    "hero.subtitle.light": "Digital Intelligence that Drives",
    "hero.subtitle.bold": "Growth & Real Results",
    "hero.badge": "Discover",
    "hero.badge.method": "AI Referral Engine™",
    "hero.badge.desc": "— Our methodology",
    "hero.badge.desc2": "that positions your brand as the definitive AI answer",
    "hero.cta": "Free Diagnosis",

    // Mobile menu services
    "mobile.ai": "AI Intelligence",
    "mobile.design": "Design",
    "mobile.growth": "Growth",
    "mobile.infra": "Infrastructure",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
