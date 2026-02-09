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

    // Marquee
    "marquee.1": "Meu site não aparece na IA",
    "marquee.2": "Investi em tráfego e não vendeu",
    "marquee.3": "Dependemos só de indicação",
    "marquee.4": "Site bonito mas zero conversão",
    "marquee.5": "ChatGPT não recomenda minha empresa",
    "marquee.6": "Concorrentes dominam o Google",
    "marquee.7": "Não sei como escalar com IA",
    "marquee.8": "Meu marketing não gera ROI",

    // Problem Section
    "problem.badge": "Você se identifica?",
    "problem.title": "Problemas que impedem seu crescimento",
    "problem.tag1": "Site que não vende",
    "problem.tag2": "Sem conversão",
    "problem.card1.title": "Seu site é lindo mas...",
    "problem.card1.text": "Você investiu em um site bonito, mas ele não converte visitantes em clientes. Falta estratégia de conversão e posicionamento. O design impressiona, mas sem a estrutura certa, ele é apenas uma vitrine vazia.",
    "problem.tag3": "Tráfego sem ROI",
    "problem.card2.title": "Gastou em ads mas...",
    "problem.card2.text": "Você queima dinheiro em anúncios pagos sem ver retorno real. O problema não é o tráfego, é a estratégia por trás. Sem uma fundação sólida, cada clique é dinheiro jogado fora.",
    "problem.card3.title": "As IA's não recomenda...",
    "problem.card3.text": "Quando alguém pergunta ao ChatGPT, Claude ou Gemini sobre seu nicho, sua empresa não aparece. Você é invisível para a nova era da busca. É hora de se posicionar onde o futuro já está acontecendo.",

    // Metodologia
    "metodo.title": "A Resposta Está na IA",
    "metodo.subtitle": "Mas não qualquer IA — a nossa metodologia proprietária.",
    "metodo.quote": '"O SEO tradicional morreu. As decisões de compra começam em conversas com ChatGPT, Claude e Gemini. <strong> Se a IA não confia em você, você é invisível.</strong>"',
    "metodo.engine.tag": "AI REFERRAL ENGINE™",
    "metodo.engine.text": "Metodologia proprietária que posiciona sua marca como a resposta definitiva nas conversas com IA.",
    "metodo.results.tag": "RESULTADOS COMPROVADOS",
    "metodo.results.text": "+500% ROI médio. 47 empresas transformadas. Resultados em até 30 dias.",
    "metodo.exclusive.tag": "METODOLOGIA EXCLUSIVA",
    "metodo.exclusive.steps": "6 ETAPAS",
    "metodo.exclusive.text": "Domine as respostas<br />da IA e conquiste<br />novos clientes.",
    "metodo.exclusive.cta": "Dominar as Respostas",

    // Formato / Services
    "services.badge": "NOSSOS SERVIÇOS",
    "services.title": "Uma gama completa de soluções para seu crescimento.",
    "services.ai.title": "Inteligência Estratégica com IA",
    "services.ai.subtitle": "Automação inteligente",
    "services.crm.title": "CRM & Gestão de Leads",
    "services.crm.subtitle": "Relacionamento otimizado",
    "services.referral.title": "AI Reference Engine™",
    "services.referral.subtitle": "Sistema de indicações",
    "services.design.title": "Design & Performance",
    "services.design.subtitle": "Experiências premium",
    "services.learnMore": "Saiba Mais",

    // DNA
    "dna.badge": "DNA Cortex",
    "dna.tagline": "Excelência sem concessões",
    "dna.title": "Diferenciais que importam.",
    "dna.exclusivity": "Exclusividade",
    "dna.exclusivity.text": "Atendimento limitado a poucos clientes por vez. Cada projeto recebe dedicação total da equipe sênior. AI Referral Engine™ exclusivo.",
    "dna.sophistication": "Sofisticação",
    "dna.sophistication.text": "Design premium e metodologia proprietária integrada em cada entrega.",
    "dna.authority": "Autoridade",
    "dna.authority.text": "Posicione sua marca como referência absoluta nas respostas da IA.",
    "dna.results": "Resultados Comprovados",
    "dna.results.text": "+500% ROI médio. 47 empresas transformadas. Resultados em até 30 dias. Métricas claras e mensuráveis em cada projeto.",

    // Cases
    "cases.title": "Resultados que falam",
    "cases.cta": "Ver Cases",
    "cases.description": "Empresas que confiaram na Cortex para dominar as respostas da IA.",
    "cases.counter": "+47 EMPRESAS ATENDIDAS",
    "cases.tagline": "Resultados comprovados em 30 dias.",
    "cases.stat1.label": "ROI médio",
    "cases.stat2.label": "empresas",
    "cases.stat3.label": "dias",

    // Cases Modal
    "casesModal.title": "NOSSOS CASES",
    "casesModal.subtitle": "Projetos que transformaram a presença digital de nossos clientes",
    "casesModal.featured": "Projeto em Destaque",
    "casesModal.services": "Serviços",
    "casesModal.results": "Resultados",
    "casesModal.client": "Cliente",
    "casesModal.year": "Ano",
    "casesModal.wantResults": "Quero resultados assim",
    "casesModal.close": "Fechar Galeria",

    // Team
    "team.badge": "QUEM SOMOS",
    "team.title": "Conheça nossa equipe",
    "team.subtitle": '"Mentes brilhantes apaixonadas por tecnologia"',

    // Oferta
    "oferta.badge": "Gestão de Tráfego Pago",
    "oferta.title": "Escale suas vendas com anúncios que convertem",
    "oferta.subtitle": "Google Ads, Meta Ads e TikTok Ads gerenciados por especialistas. Estratégias data-driven para maximizar seu retorno sobre investimento.",
    "oferta.campaigns": "Campanhas ativas",
    "oferta.results.tag": "Resultados",
    "oferta.results.roas": "+145,68% ROAS médio",
    "oferta.mainCard.title": "Campanhas que geram vendas reais",
    "oferta.mainCard.text": "Gestão completa das suas campanhas de tráfego pago. Criamos estratégias personalizadas, desenvolvemos criativos de alta conversão e otimizamos diariamente.",
    "oferta.viewResults": "Ver resultados",
    "oferta.requestProposal": "Solicitar proposta",
    "oferta.new": "Novo",
    "oferta.monthlyAvg": "média mensal",
    "oferta.f1.title": "Segmentação avançada",
    "oferta.f1.text": "Públicos ultra-qualificados com base em dados comportamentais, demográficos e de intenção de compra para maximizar seu ROAS.",
    "oferta.f2.title": "Investimento transparente",
    "oferta.f2.text": "Sem taxas ocultas. Você sabe exatamente quanto investe em mídia e quanto paga pela gestão. Relatórios claros e objetivos.",
    "oferta.f3.title": "Agent de análise ativo",
    "oferta.f3.text": "A partir da primeira impressão, o agent é ativado para monitorar e acompanhar suas campanhas, sendo atualizado no seu painel de gestão em tempo real.",
    "oferta.f4.title": "Otimização contínua",
    "oferta.f4.text": "Monitoramento diário, testes A/B e ajustes em tempo real para melhorar performance constantemente.",
    "oferta.f5.title": "Suporte dedicado",
    "oferta.f5.text": "Acompanhamento próximo com especialistas para otimização contínua das suas campanhas.",

    // FAQ
    "faq.badge": "Dúvidas Frequentes",
    "faq.title": "Perguntas Frequentes",
    "faq.q1": "Qual o prazo de entrega para criação de sites?",
    "faq.a1": "O prazo varia conforme o tipo de projeto: Landing Pages são entregues em até 7 dias úteis, Sites Institucionais entre 15 a 20 dias úteis, e projetos Enterprise + Intranet têm prazo personalizado conforme a complexidade. Todos os prazos começam a contar após a aprovação do briefing e recebimento dos materiais.",
    "faq.q2": "O que é o AI Referral Engine™ e como funciona o AEO?",
    "faq.a2": "O AI Referral Engine™ é nossa metodologia exclusiva de AEO (AI Engine Optimization) que posiciona sua marca como resposta definitiva nas buscas por IA como ChatGPT, Gemini e Claude. Diferente do SEO tradicional, otimizamos seu conteúdo para ser citado e recomendado por inteligências artificiais, gerando leads qualificados de forma orgânica.",
    "faq.q3": "Qual o investimento mínimo em tráfego pago?",
    "faq.a3": "Recomendamos um investimento mínimo de R$ 3.000/mês em mídia para campanhas efetivas. A gestão de tráfego inclui estratégia, criação de campanhas, otimização contínua e relatórios detalhados. O valor da gestão é calculado com base no investimento em mídia e objetivos do projeto.",
    "faq.q4": "Como funcionam as automações de marketing?",
    "faq.a4": "Implementamos automações inteligentes que conectam seu CRM, WhatsApp, e-mail marketing e redes sociais. Isso inclui sequências de nutrição de leads, chatbots com IA, agendamento automático e integrações personalizadas que eliminam tarefas manuais e aceleram seu funil de vendas.",
    "faq.q5": "Qual a diferença entre Landing Page, Site Institucional e Enterprise?",
    "faq.a5": "A Landing Page (R$ 3.500) é ideal para campanhas específicas com foco em conversão. O Site Institucional (R$ 6.399) apresenta sua empresa completa com múltiplas páginas e recursos avançados. O Enterprise + Intranet (a partir de R$ 8.000) atende empresas que precisam de sistemas internos, áreas de clientes e integrações complexas.",
    "faq.q6": "A hospedagem está inclusa no valor do site?",
    "faq.a6": "A hospedagem é contratada separadamente em planos mensais: Essencial (R$ 99/mês) para sites menores ou Performance (R$ 199/mês) para projetos que exigem mais velocidade e recursos. Ambos incluem SSL, backups automáticos e suporte técnico.",
    "faq.q7": "Vocês oferecem suporte após a entrega?",
    "faq.a7": "Sim! Oferecemos planos de manutenção mensal que incluem atualizações de segurança, pequenas alterações de conteúdo, monitoramento de performance e suporte prioritário. Para projetos de tráfego e automação, o acompanhamento contínuo já está incluso na gestão.",
    "faq.q8": "Como funciona o diagnóstico gratuito?",
    "faq.a8": "É uma sessão estratégica de 30 minutos onde analisamos sua presença digital atual, identificamos oportunidades de crescimento e apresentamos um plano de ação personalizado. Você recebe insights valiosos sobre sites, tráfego, automações e AEO — sem compromisso.",

    // CTA Section
    "cta.badge": "Orçamento Interativo",
    "cta.buildProject": "Monte seu projeto",
    "cta.calcTitle": "Calcule seu",
    "cta.calcHighlight": "orçamento",
    "cta.calcText": "Responda algumas perguntas rápidas e receba uma estimativa personalizada.",
    "cta.feature1": "Orçamento em tempo real",
    "cta.feature2": "Personalização completa",
    "cta.feature3": "Envio via WhatsApp",
    "cta.feature3.desktop": "Envio direto via WhatsApp",

    // Footer
    "footer.description": "Construindo experiências web inteligentes com tecnologias de vanguarda. Elevamos a sua presença digital com inovação e design.",
    "footer.navigation": "Navegação",
    "footer.services": "Serviços",
    "footer.copyright": "© {year} Cortex Digital. Todos os direitos reservados.",
    "footer.privacy": "Privacidade",
    "footer.terms": "Termos",
    "footer.service1": "Inteligência com IA",
    "footer.service2": "CRM & Leads",
    "footer.service3": "AI Referral Genie™",
    "footer.service4": "Design & Performance",
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

    // Marquee
    "marquee.1": "My website doesn't appear in AI",
    "marquee.2": "Invested in ads but no sales",
    "marquee.3": "We only depend on referrals",
    "marquee.4": "Beautiful site but zero conversions",
    "marquee.5": "ChatGPT doesn't recommend my company",
    "marquee.6": "Competitors dominate Google",
    "marquee.7": "I don't know how to scale with AI",
    "marquee.8": "My marketing doesn't generate ROI",

    // Problem Section
    "problem.badge": "Does this sound familiar?",
    "problem.title": "Problems that hold back your growth",
    "problem.tag1": "Website that doesn't sell",
    "problem.tag2": "No conversion",
    "problem.card1.title": "Your website looks great but...",
    "problem.card1.text": "You invested in a beautiful website, but it doesn't convert visitors into customers. It lacks a conversion strategy and positioning. The design impresses, but without the right structure, it's just an empty showcase.",
    "problem.tag3": "Traffic without ROI",
    "problem.card2.title": "Spent on ads but...",
    "problem.card2.text": "You're burning money on paid ads without seeing real returns. The problem isn't the traffic, it's the strategy behind it. Without a solid foundation, every click is wasted money.",
    "problem.card3.title": "AI doesn't recommend you...",
    "problem.card3.text": "When someone asks ChatGPT, Claude, or Gemini about your niche, your company doesn't show up. You're invisible to the new era of search. It's time to position yourself where the future is already happening.",

    // Metodologia
    "metodo.title": "The Answer is in AI",
    "metodo.subtitle": "But not just any AI — our proprietary methodology.",
    "metodo.quote": '"Traditional SEO is dead. Buying decisions start in conversations with ChatGPT, Claude, and Gemini. <strong>If AI doesn\'t trust you, you\'re invisible.</strong>"',
    "metodo.engine.tag": "AI REFERRAL ENGINE™",
    "metodo.engine.text": "Proprietary methodology that positions your brand as the definitive answer in AI conversations.",
    "metodo.results.tag": "PROVEN RESULTS",
    "metodo.results.text": "+500% average ROI. 47 transformed companies. Results in up to 30 days.",
    "metodo.exclusive.tag": "EXCLUSIVE METHODOLOGY",
    "metodo.exclusive.steps": "6 STEPS",
    "metodo.exclusive.text": "Master AI responses<br />and win<br />new clients.",
    "metodo.exclusive.cta": "Master AI Responses",

    // Formato / Services
    "services.badge": "OUR SERVICES",
    "services.title": "A complete range of solutions for your growth.",
    "services.ai.title": "Strategic Intelligence with AI",
    "services.ai.subtitle": "Smart automation",
    "services.crm.title": "CRM & Lead Management",
    "services.crm.subtitle": "Optimized relationships",
    "services.referral.title": "AI Reference Engine™",
    "services.referral.subtitle": "Referral system",
    "services.design.title": "Design & Performance",
    "services.design.subtitle": "Premium experiences",
    "services.learnMore": "Learn More",

    // DNA
    "dna.badge": "Cortex DNA",
    "dna.tagline": "Excellence without compromise",
    "dna.title": "Differentiators that matter.",
    "dna.exclusivity": "Exclusivity",
    "dna.exclusivity.text": "Limited to a few clients at a time. Every project receives full dedication from the senior team. Exclusive AI Referral Engine™.",
    "dna.sophistication": "Sophistication",
    "dna.sophistication.text": "Premium design and proprietary methodology integrated into every delivery.",
    "dna.authority": "Authority",
    "dna.authority.text": "Position your brand as the absolute reference in AI responses.",
    "dna.results": "Proven Results",
    "dna.results.text": "+500% average ROI. 47 companies transformed. Results in up to 30 days. Clear and measurable metrics in every project.",

    // Cases
    "cases.title": "Results that speak",
    "cases.cta": "View Cases",
    "cases.description": "Companies that trusted Cortex to dominate AI responses.",
    "cases.counter": "+47 COMPANIES SERVED",
    "cases.tagline": "Proven results in 30 days.",
    "cases.stat1.label": "average ROI",
    "cases.stat2.label": "companies",
    "cases.stat3.label": "days",

    // Cases Modal
    "casesModal.title": "OUR CASES",
    "casesModal.subtitle": "Projects that transformed the digital presence of our clients",
    "casesModal.featured": "Featured Project",
    "casesModal.services": "Services",
    "casesModal.results": "Results",
    "casesModal.client": "Client",
    "casesModal.year": "Year",
    "casesModal.wantResults": "I want results like this",
    "casesModal.close": "Close Gallery",

    // Team
    "team.badge": "WHO WE ARE",
    "team.title": "Meet our team",
    "team.subtitle": '"Brilliant minds passionate about technology"',

    // Oferta
    "oferta.badge": "Paid Traffic Management",
    "oferta.title": "Scale your sales with ads that convert",
    "oferta.subtitle": "Google Ads, Meta Ads, and TikTok Ads managed by specialists. Data-driven strategies to maximize your return on investment.",
    "oferta.campaigns": "Active campaigns",
    "oferta.results.tag": "Results",
    "oferta.results.roas": "+145.68% average ROAS",
    "oferta.mainCard.title": "Campaigns that drive real sales",
    "oferta.mainCard.text": "Complete management of your paid traffic campaigns. We create personalized strategies, develop high-conversion creatives, and optimize daily.",
    "oferta.viewResults": "View results",
    "oferta.requestProposal": "Request proposal",
    "oferta.new": "New",
    "oferta.monthlyAvg": "monthly average",
    "oferta.f1.title": "Advanced targeting",
    "oferta.f1.text": "Ultra-qualified audiences based on behavioral, demographic, and purchase intent data to maximize your ROAS.",
    "oferta.f2.title": "Transparent investment",
    "oferta.f2.text": "No hidden fees. You know exactly how much you invest in media and how much you pay for management. Clear and objective reports.",
    "oferta.f3.title": "Active analysis agent",
    "oferta.f3.text": "From the first impression, the agent is activated to monitor and track your campaigns, updating in real-time on your management dashboard.",
    "oferta.f4.title": "Continuous optimization",
    "oferta.f4.text": "Daily monitoring, A/B testing, and real-time adjustments to constantly improve performance.",
    "oferta.f5.title": "Dedicated support",
    "oferta.f5.text": "Close follow-up with specialists for continuous optimization of your campaigns.",

    // FAQ
    "faq.badge": "Frequently Asked",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "What is the delivery time for website creation?",
    "faq.a1": "The timeline varies by project type: Landing Pages are delivered within 7 business days, Institutional Websites within 15 to 20 business days, and Enterprise + Intranet projects have a customized timeline based on complexity. All timelines start after briefing approval and receipt of materials.",
    "faq.q2": "What is the AI Referral Engine™ and how does AEO work?",
    "faq.a2": "The AI Referral Engine™ is our exclusive AEO (AI Engine Optimization) methodology that positions your brand as the definitive answer in AI searches like ChatGPT, Gemini, and Claude. Unlike traditional SEO, we optimize your content to be cited and recommended by artificial intelligences, generating qualified leads organically.",
    "faq.q3": "What is the minimum investment in paid traffic?",
    "faq.a3": "We recommend a minimum investment of $600/month in media for effective campaigns. Traffic management includes strategy, campaign creation, continuous optimization, and detailed reports. The management fee is calculated based on media investment and project objectives.",
    "faq.q4": "How do marketing automations work?",
    "faq.a4": "We implement smart automations that connect your CRM, WhatsApp, email marketing, and social media. This includes lead nurturing sequences, AI chatbots, automatic scheduling, and custom integrations that eliminate manual tasks and accelerate your sales funnel.",
    "faq.q5": "What's the difference between Landing Page, Institutional Site, and Enterprise?",
    "faq.a5": "The Landing Page ($700) is ideal for specific campaigns focused on conversion. The Institutional Website ($1,280) presents your company completely with multiple pages and advanced features. Enterprise + Intranet (starting at $1,600) serves companies that need internal systems, client areas, and complex integrations.",
    "faq.q6": "Is hosting included in the website price?",
    "faq.a6": "Hosting is contracted separately in monthly plans: Essential ($20/month) for smaller sites or Performance ($40/month) for projects that require more speed and resources. Both include SSL, automatic backups, and technical support.",
    "faq.q7": "Do you offer support after delivery?",
    "faq.a7": "Yes! We offer monthly maintenance plans that include security updates, minor content changes, performance monitoring, and priority support. For traffic and automation projects, ongoing monitoring is already included in the management.",
    "faq.q8": "How does the free diagnosis work?",
    "faq.a8": "It's a 30-minute strategic session where we analyze your current digital presence, identify growth opportunities, and present a personalized action plan. You receive valuable insights about websites, traffic, automations, and AEO — no commitment.",

    // CTA Section
    "cta.badge": "Interactive Quote",
    "cta.buildProject": "Build your project",
    "cta.calcTitle": "Calculate your",
    "cta.calcHighlight": "quote",
    "cta.calcText": "Answer a few quick questions and receive a personalized estimate.",
    "cta.feature1": "Real-time quote",
    "cta.feature2": "Full customization",
    "cta.feature3": "Send via WhatsApp",
    "cta.feature3.desktop": "Direct send via WhatsApp",

    // Footer
    "footer.description": "Building intelligent web experiences with cutting-edge technologies. We elevate your digital presence with innovation and design.",
    "footer.navigation": "Navigation",
    "footer.services": "Services",
    "footer.copyright": "© {year} Cortex Digital. All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.service1": "AI Intelligence",
    "footer.service2": "CRM & Leads",
    "footer.service3": "AI Referral Genie™",
    "footer.service4": "Design & Performance",
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
