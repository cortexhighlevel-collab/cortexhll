// Language context provider
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

    // Creative Studio Section
    "creative.badge": "ESTÚDIO CRIATIVO",
    "creative.title": "Design que converte. Movimento que conecta.",
    "creative.subtitle": "Duas disciplinas que elevam sua marca a outro nível.",
    "creative.uiux.tag": "UI/UX & WEB DESIGN",
    "creative.uiux.title": "Design Visual & Web Design",
    "creative.uiux.text": "Criamos interfaces premium com foco em conversão. Landing pages, sites institucionais e sistemas web com design estratégico que transforma visitantes em clientes. +200 peças produzidas por mês sem perder qualidade.",
    "creative.uiux.item1": "Landing Pages de Alta Conversão",
    "creative.uiux.item2": "UI/UX Design Estratégico",
    "creative.uiux.item3": "Web Design Premium",
    "creative.uiux.item4": "Design de Conversão",
    "creative.motion.tag": "MOTION DESIGN",
    "creative.motion.title": "Motion Design & Animação",
    "creative.motion.text": "Transformamos conceitos estáticos em narrativas visuais dinâmicas. Movimento estratégico que dá ritmo à informação, fluidez à estética e impacto a cada frame da sua marca.",
    "creative.motion.item1": "Animações de Marca",
    "creative.motion.item2": "Vídeos Institucionais",
    "creative.motion.item3": "Social Media Motion",
    "creative.motion.item4": "Motion para Ads",
    "creative.cta": "Solicitar Proposta",

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

    // Team Members
    "team.member1.role": "Mente Estratégica - AI Referral Engine™",
    "team.member1.quote": "Líder visionário por trás do AI Referral Engine™, a metodologia que posiciona marcas como resposta definitiva da IA.",
    "team.member1.description": "Criador do AI Referral Engine™ e líder visionário por trás da metodologia que está revolucionando como empresas são recomendadas pela IA.",
    "team.member2.role": "Diretor Criativo",
    "team.member2.quote": "A criatividade é a ponte entre a estratégia e a conexão emocional com o público.",
    "team.member2.description": "Responsável por transformar conceitos em experiências visuais impactantes que conectam marcas ao seu público.",
    "team.member3.role": "Dev Lead",
    "team.member3.quote": "Código limpo e arquitetura sólida são a base de qualquer solução digital escalável.",
    "team.member3.description": "Lidera o desenvolvimento técnico, garantindo que cada projeto seja construído com excelência e performance.",
    "team.member4.role": "Designer Visual | UI/UX & Web Design",
    "team.member4.quote": "Crescimento sustentável é construído com dados, criatividade e execução impecável.",
    "team.member4.description": "Designer com foco em Web Design, UI/UX e Design de Conversão. Produz em alta escala (+200 peças/mês) sem perder qualidade, criando landing pages e criativos de alta performance que geram resultados mensuráveis.",
    "team.member5.role": "Motion Designer",
    "team.member5.quote": "O movimento estratégico transforma conceitos estáticos em narrativas que conectam e convertem.",
    "team.member5.description": "Projeta o comportamento das marcas no tempo e no espaço. Utiliza movimento estratégico para transformar conceitos em narrativas dinâmicas, dando ritmo à informação e fluidez à estética em cada frame.",

    // Case Testimonials
    "cases.testimonial1.quote": "A Cortex nos colocou no radar das IAs. Antes éramos invisíveis, agora somos a primeira recomendação quando alguém pergunta sobre nosso nicho. Resultado: pipeline 3x maior em 60 dias.",
    "cases.testimonial2.quote": "Minha marca pessoal ganhou uma visibilidade que eu nunca imaginei. Agora quando alguém pergunta para o ChatGPT sobre influenciadoras do meu segmento, meu nome aparece em primeiro. Isso mudou completamente meu negócio.",

    // Case Modal Projects
    "cases.project1.desc": "Implementamos uma estratégia completa de otimização para IAs, posicionando a BlackClub como referência absoluta em seu nicho. O resultado foi um aumento de 300% nas menções orgânicas em respostas de IA.",
    "cases.project1.r1": "+300% menções em IA",
    "cases.project1.r2": "Pipeline 3x maior",
    "cases.project1.r3": "ROI de 500%",
    "cases.project2.desc": "Desenvolvemos uma estratégia de marca pessoal focada em posicionamento em IAs. Valentina agora é a primeira recomendação quando alguém pergunta sobre influenciadoras do seu segmento.",
    "cases.project2.r1": "#1 em buscas de IA",
    "cases.project2.r2": "+200% seguidores",
    "cases.project2.r3": "5x mais parcerias",
    "cases.project3.desc": "Criamos uma experiência digital premium com landing page de alta conversão e sistema de CRM integrado para automação de leads qualificados.",
    "cases.project3.r1": "+150% conversão",
    "cases.project3.r2": "40% menos custo por lead",
    "cases.project3.r3": "Automação 24/7",
    "cases.project4.desc": "Branding futurista para uma agência que busca o próximo passo na evolução do marketing. Acabamentos cromados e estratégia de posicionamento em IA.",
    "cases.project4.r1": "+250% visibilidade",
    "cases.project4.r2": "2x clientes",
    "cases.project4.r3": "Autoridade consolidada",
    "cases.project5.desc": "Direção de arte e identidade visual para estúdio criativo. Cores vibrantes e estética cyberpunk que reflete a essência inovadora da marca.",
    "cases.project5.r1": "Identidade única",
    "cases.project5.r2": "+180% engajamento",
    "cases.project5.r3": "Reconhecimento de marca",
    "cases.project6.desc": "A série Arsenal explora a identidade digital na era da IA. Renderizações hiper-realistas e estratégia de posicionamento para colecionáveis digitais.",
    "cases.project6.r1": "+400% alcance",
    "cases.project6.r2": "Comunidade engajada",
    "cases.project6.r3": "Vendas recordes",

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

    // Quiz - User Info
    "quiz.userInfo.title": "Vamos começar!",
    "quiz.userInfo.subtitle": "Primeiro, nos conte um pouco sobre você",
    "quiz.userInfo.name": "Nome completo",
    "quiz.userInfo.namePlaceholder": "Seu nome",
    "quiz.userInfo.email": "E-mail",
    "quiz.userInfo.emailPlaceholder": "seu@email.com",
    "quiz.userInfo.emailError": "Digite um e-mail válido",
    "quiz.userInfo.phone": "Telefone",
    "quiz.userInfo.phonePlaceholder": "(00) 00000-0000",
    "quiz.userInfo.company": "Empresa",
    "quiz.userInfo.companyPlaceholder": "Empresa",
    "quiz.userInfo.continue": "Continuar",
    "quiz.userInfo.privacy": "Seus dados estão protegidos conforme nossa",
    "quiz.userInfo.privacyLink": "Política de Privacidade",

    // Quiz - Service Select
    "quiz.service.greeting": "Olá, {name}! 👋",
    "quiz.service.title": "Qual serviço você precisa?",
    "quiz.service.subtitle": "Selecione para continuar com o orçamento",
    "quiz.service.sites": "Criação de Sites",
    "quiz.service.sites.desc": "Landing pages, sites institucionais e sistemas web",
    "quiz.service.sites.steps": "9 passos",
    "quiz.service.traffic": "Gestão de Tráfego",
    "quiz.service.traffic.desc": "Google Ads, Meta Ads, TikTok e mais",
    "quiz.service.traffic.steps": "5 passos",

    // Quiz - Plan Select
    "quiz.plan.title": "Escolha seu plano base",
    "quiz.plan.subtitle": "O ponto de partida para seu projeto",
    "quiz.plan.popular": "Mais Popular",
    "quiz.plan.startingAt": "a partir ",
    "quiz.plan.pages": "pág.",

    // Quiz - Addons
    "quiz.addons.subtitle": "Selecione os recursos que deseja adicionar (opcional)",
    "quiz.addons.included": "Incluso",

    // Quiz - Recurring
    "quiz.recurring.title": "Serviços Mensais",
    "quiz.recurring.subtitle": "Escolha ao menos uma opção de hospedagem",
    "quiz.recurring.hosting": "Hospedagem",
    "quiz.recurring.required": "(obrigatório)",
    "quiz.recurring.maintenance": "Manutenção (opcional)",
    "quiz.recurring.month": "/mês",

    // Quiz - Traffic Platform
    "quiz.traffic.platform.title": "Quais plataformas você quer anunciar?",
    "quiz.traffic.platform.subtitle": "Selecione uma ou mais plataformas",
    "quiz.traffic.platform.selected1": "plataforma selecionada",
    "quiz.traffic.platform.selectedN": "plataformas selecionadas",

    // Quiz - Traffic Investment
    "quiz.traffic.investment.title": "Qual seu investimento mensal em mídia?",
    "quiz.traffic.investment.subtitle": "Valor investido diretamente nas plataformas",
    "quiz.traffic.investment.note": "Este valor é pago diretamente às plataformas",

    // Quiz - Traffic Objective
    "quiz.traffic.objective.title": "Qual seu principal objetivo?",
    "quiz.traffic.objective.subtitle": "Isso define a melhor estratégia",

    // Quiz - Traffic Segment
    "quiz.traffic.segment.title": "Qual é o seu segmento?",
    "quiz.traffic.segment.subtitle": "Nos ajuda a entender melhor seu negócio",

    // Quiz - Final Form
    "quiz.final.title": "Tudo pronto! 🎉",
    "quiz.final.subtitle": "Confira o resumo e envie seu orçamento",
    "quiz.final.yourData": "Seus dados:",
    "quiz.final.message": "Mensagem adicional (opcional)",
    "quiz.final.messagePlaceholder": "Algo mais que gostaria de compartilhar?",
    "quiz.final.submit": "Enviar via WhatsApp",
    "quiz.final.privacy": "Ao enviar, você concorda com nossa",
    "quiz.final.privacyLink": "Política de Privacidade",

    // Quiz - Summary
    "quiz.summary.title": "Resumo",
    "quiz.summary.mediaInvestment": "+ investimento em mídia",
    "quiz.summary.monthly": "Mensais:",

    // Quiz - Floating Summary
    "quiz.floating.title": "Seu Orçamento",
    "quiz.floating.setup": "Setup",
    "quiz.floating.monthly": "Mensal",
    "quiz.floating.monthlyMgmt": "Gestão Mensal",
    "quiz.floating.platforms1": "plataforma",
    "quiz.floating.platformsN": "plataformas",
    "quiz.floating.investment": "Investimento:",

    // Quiz - Progress
    "quiz.progress.step": "Passo {current} de {total}",
    "quiz.progress.info": "Info",
    "quiz.progress.service": "Serviço",
    "quiz.progress.plan": "Plano",
    "quiz.progress.content": "Conteúdo",
    "quiz.progress.basic": "Básicas",
    "quiz.progress.advanced": "Avançadas",
    "quiz.progress.seo": "SEO",
    "quiz.progress.automation": "Automação",
    "quiz.progress.backend": "Backend",
    "quiz.progress.recurring": "Recorrentes",
    "quiz.progress.submit": "Enviar",
    "quiz.progress.platforms": "Plataformas",
    "quiz.progress.investmentLabel": "Investimento",
    "quiz.progress.objectives": "Objetivos",
    "quiz.progress.segment": "Segmento",

    // Quiz - Navigation
    "quiz.nav.back": "Voltar",
    "quiz.nav.next": "Próximo",
    "quiz.nav.finish": "Finalizar",
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

    // Creative Studio Section
    "creative.badge": "CREATIVE STUDIO",
    "creative.title": "Design that converts. Motion that connects.",
    "creative.subtitle": "Two disciplines that elevate your brand to another level.",
    "creative.uiux.tag": "UI/UX & WEB DESIGN",
    "creative.uiux.title": "Visual Design & Web Design",
    "creative.uiux.text": "We create premium interfaces focused on conversion. Landing pages, institutional websites, and web systems with strategic design that transforms visitors into customers. +200 pieces produced per month without losing quality.",
    "creative.uiux.item1": "High-Conversion Landing Pages",
    "creative.uiux.item2": "Strategic UI/UX Design",
    "creative.uiux.item3": "Premium Web Design",
    "creative.uiux.item4": "Conversion Design",
    "creative.motion.tag": "MOTION DESIGN",
    "creative.motion.title": "Motion Design & Animation",
    "creative.motion.text": "We transform static concepts into dynamic visual narratives. Strategic motion that gives rhythm to information, fluidity to aesthetics, and impact to every frame of your brand.",
    "creative.motion.item1": "Brand Animations",
    "creative.motion.item2": "Institutional Videos",
    "creative.motion.item3": "Social Media Motion",
    "creative.motion.item4": "Motion for Ads",
    "creative.cta": "Request Proposal",

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

    // Team Members
    "team.member1.role": "Strategic Mind - AI Referral Engine™",
    "team.member1.quote": "Visionary leader behind the AI Referral Engine™, the methodology that positions brands as the definitive AI answer.",
    "team.member1.description": "Creator of the AI Referral Engine™ and visionary leader behind the methodology that is revolutionizing how companies are recommended by AI.",
    "team.member2.role": "Creative Director",
    "team.member2.quote": "Creativity is the bridge between strategy and emotional connection with the audience.",
    "team.member2.description": "Responsible for transforming concepts into impactful visual experiences that connect brands to their audience.",
    "team.member3.role": "Dev Lead",
    "team.member3.quote": "Clean code and solid architecture are the foundation of any scalable digital solution.",
    "team.member3.description": "Leads technical development, ensuring every project is built with excellence and performance.",
    "team.member4.role": "Visual Designer | UI/UX & Web Design",
    "team.member4.quote": "Sustainable growth is built with data, creativity, and flawless execution.",
    "team.member4.description": "Designer focused on Web Design, UI/UX and Conversion Design. Produces at high scale (+200 pieces/month) without losing quality, creating high-performance landing pages and creatives that deliver measurable results.",
    "team.member5.role": "Motion Designer",
    "team.member5.quote": "Strategic motion transforms static concepts into narratives that connect and convert.",
    "team.member5.description": "Designs brand behavior in time and space. Uses strategic motion to turn concepts into dynamic narratives, giving rhythm to information and fluidity to aesthetics in every frame.",

    // Case Testimonials
    "cases.testimonial1.quote": "Cortex put us on the AI radar. We used to be invisible, now we're the first recommendation when someone asks about our niche. Result: 3x larger pipeline in 60 days.",
    "cases.testimonial2.quote": "My personal brand gained visibility I never imagined. Now when someone asks ChatGPT about influencers in my segment, my name comes up first. This completely changed my business.",

    // Case Modal Projects
    "cases.project1.desc": "We implemented a complete AI optimization strategy, positioning BlackClub as the absolute reference in their niche. The result was a 300% increase in organic mentions in AI responses.",
    "cases.project1.r1": "+300% AI mentions",
    "cases.project1.r2": "3x larger pipeline",
    "cases.project1.r3": "500% ROI",
    "cases.project2.desc": "We developed a personal branding strategy focused on AI positioning. Valentina is now the first recommendation when someone asks about influencers in her segment.",
    "cases.project2.r1": "#1 in AI searches",
    "cases.project2.r2": "+200% followers",
    "cases.project2.r3": "5x more partnerships",
    "cases.project3.desc": "We created a premium digital experience with a high-conversion landing page and integrated CRM system for qualified lead automation.",
    "cases.project3.r1": "+150% conversion",
    "cases.project3.r2": "40% lower cost per lead",
    "cases.project3.r3": "24/7 Automation",
    "cases.project4.desc": "Futuristic branding for an agency seeking the next step in marketing evolution. Chrome finishes and AI positioning strategy.",
    "cases.project4.r1": "+250% visibility",
    "cases.project4.r2": "2x clients",
    "cases.project4.r3": "Consolidated authority",
    "cases.project5.desc": "Art direction and visual identity for a creative studio. Vibrant colors and cyberpunk aesthetics reflecting the brand's innovative essence.",
    "cases.project5.r1": "Unique identity",
    "cases.project5.r2": "+180% engagement",
    "cases.project5.r3": "Brand recognition",
    "cases.project6.desc": "The Arsenal series explores digital identity in the AI era. Hyper-realistic renders and positioning strategy for digital collectibles.",
    "cases.project6.r1": "+400% reach",
    "cases.project6.r2": "Engaged community",
    "cases.project6.r3": "Record sales",

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

    // Quiz - User Info
    "quiz.userInfo.title": "Let's get started!",
    "quiz.userInfo.subtitle": "First, tell us a little about yourself",
    "quiz.userInfo.name": "Full name",
    "quiz.userInfo.namePlaceholder": "Your name",
    "quiz.userInfo.email": "Email",
    "quiz.userInfo.emailPlaceholder": "your@email.com",
    "quiz.userInfo.emailError": "Enter a valid email",
    "quiz.userInfo.phone": "Phone",
    "quiz.userInfo.phonePlaceholder": "(00) 00000-0000",
    "quiz.userInfo.company": "Company",
    "quiz.userInfo.companyPlaceholder": "Company",
    "quiz.userInfo.continue": "Continue",
    "quiz.userInfo.privacy": "Your data is protected under our",
    "quiz.userInfo.privacyLink": "Privacy Policy",

    // Quiz - Service Select
    "quiz.service.greeting": "Hello, {name}! 👋",
    "quiz.service.title": "What service do you need?",
    "quiz.service.subtitle": "Select to continue with the quote",
    "quiz.service.sites": "Website Creation",
    "quiz.service.sites.desc": "Landing pages, institutional sites, and web systems",
    "quiz.service.sites.steps": "9 steps",
    "quiz.service.traffic": "Traffic Management",
    "quiz.service.traffic.desc": "Google Ads, Meta Ads, TikTok and more",
    "quiz.service.traffic.steps": "5 steps",

    // Quiz - Plan Select
    "quiz.plan.title": "Choose your base plan",
    "quiz.plan.subtitle": "The starting point for your project",
    "quiz.plan.popular": "Most Popular",
    "quiz.plan.startingAt": "from ",
    "quiz.plan.pages": "pg.",

    // Quiz - Addons
    "quiz.addons.subtitle": "Select the features you want to add (optional)",
    "quiz.addons.included": "Included",

    // Quiz - Recurring
    "quiz.recurring.title": "Monthly Services",
    "quiz.recurring.subtitle": "Choose at least one hosting option",
    "quiz.recurring.hosting": "Hosting",
    "quiz.recurring.required": "(required)",
    "quiz.recurring.maintenance": "Maintenance (optional)",
    "quiz.recurring.month": "/mo",

    // Quiz - Traffic Platform
    "quiz.traffic.platform.title": "Which platforms do you want to advertise on?",
    "quiz.traffic.platform.subtitle": "Select one or more platforms",
    "quiz.traffic.platform.selected1": "platform selected",
    "quiz.traffic.platform.selectedN": "platforms selected",

    // Quiz - Traffic Investment
    "quiz.traffic.investment.title": "What is your monthly media investment?",
    "quiz.traffic.investment.subtitle": "Amount invested directly on platforms",
    "quiz.traffic.investment.note": "This amount is paid directly to the platforms",

    // Quiz - Traffic Objective
    "quiz.traffic.objective.title": "What is your main objective?",
    "quiz.traffic.objective.subtitle": "This defines the best strategy",

    // Quiz - Traffic Segment
    "quiz.traffic.segment.title": "What is your industry?",
    "quiz.traffic.segment.subtitle": "Helps us better understand your business",

    // Quiz - Final Form
    "quiz.final.title": "All set! 🎉",
    "quiz.final.subtitle": "Review the summary and send your quote",
    "quiz.final.yourData": "Your details:",
    "quiz.final.message": "Additional message (optional)",
    "quiz.final.messagePlaceholder": "Anything else you'd like to share?",
    "quiz.final.submit": "Send via WhatsApp",
    "quiz.final.privacy": "By submitting, you agree to our",
    "quiz.final.privacyLink": "Privacy Policy",

    // Quiz - Summary
    "quiz.summary.title": "Summary",
    "quiz.summary.mediaInvestment": "+ media investment",
    "quiz.summary.monthly": "Monthly:",

    // Quiz - Floating Summary
    "quiz.floating.title": "Your Quote",
    "quiz.floating.setup": "Setup",
    "quiz.floating.monthly": "Monthly",
    "quiz.floating.monthlyMgmt": "Monthly Management",
    "quiz.floating.platforms1": "platform",
    "quiz.floating.platformsN": "platforms",
    "quiz.floating.investment": "Investment:",

    // Quiz - Progress
    "quiz.progress.step": "Step {current} of {total}",
    "quiz.progress.info": "Info",
    "quiz.progress.service": "Service",
    "quiz.progress.plan": "Plan",
    "quiz.progress.content": "Content",
    "quiz.progress.basic": "Basic",
    "quiz.progress.advanced": "Advanced",
    "quiz.progress.seo": "SEO",
    "quiz.progress.automation": "Automation",
    "quiz.progress.backend": "Backend",
    "quiz.progress.recurring": "Recurring",
    "quiz.progress.submit": "Submit",
    "quiz.progress.platforms": "Platforms",
    "quiz.progress.investmentLabel": "Investment",
    "quiz.progress.objectives": "Objectives",
    "quiz.progress.segment": "Segment",

    // Quiz - Navigation
    "quiz.nav.back": "Back",
    "quiz.nav.next": "Next",
    "quiz.nav.finish": "Finish",
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
