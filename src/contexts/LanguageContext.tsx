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
    "creative.cta": "Solicitar Proposta",
    "creative.showMore": "Ver mais",
    "creative.filter.all": "Todos",
    "creative.filter.uiux": "UI/UX & Web Design",
    "creative.filter.motion": "Motion Design",
    "creative.portfolio.tag.uiux": "UI/UX Design",
    "creative.portfolio.tag.motion": "Motion",
    "creative.portfolio.p1.title": "Landing Page Premium",
    "creative.portfolio.p1.desc": "Landing page de alta conversão com design estratégico e micro-interações.",
    "creative.portfolio.p2.title": "Brand Animation",
    "creative.portfolio.p2.desc": "Animação de marca com storytelling visual para redes sociais.",
    "creative.portfolio.p3.title": "Dashboard UI",
    "creative.portfolio.p3.desc": "Interface de dashboard com UX focado em produtividade e dados.",
    "creative.portfolio.p4.title": "Social Media Motion",
    "creative.portfolio.p4.desc": "Peças animadas para campanhas de social media e ads.",
    "creative.portfolio.p5.title": "E-commerce Redesign",
    "creative.portfolio.p5.desc": "Redesign completo de e-commerce com foco em conversão.",
    "creative.portfolio.p6.title": "Vídeo Institucional",
    "creative.portfolio.p6.desc": "Vídeo institucional com motion graphics e narrativa de marca.",

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
    "cases.testimonial1.quote": "A Cortex criou um site que traduziu perfeitamente a essência da BlackClub. Design impecável, performance absurda e uma experiência que nossos clientes elogiam todos os dias. Resultado: conversão 3x maior em 60 dias.",
    "cases.testimonial2.quote": "Meu site ficou exatamente como eu imaginava — sofisticado, rápido e com a minha cara. A Cortex entendeu minha marca e entregou algo que impressiona qualquer um que acessa. Mudou completamente meu posicionamento digital.",
    "cases.testimonial3.quote": "A Cortex, junto à agência Biomo, criou um site que representa a alma do Tupã FC — garra, tradição e união desde 1936. O design transmite a força do nosso tricolor e fez a torcida se sentir em casa no digital. Um verdadeiro gol de placa.",
    "cases.testimonial4.quote": "A Credits Hub precisava de um site que passasse confiança e profissionalismo. A Cortex entregou uma plataforma dark premium que converteu desde o primeiro dia. Nossos clientes adoram a experiência.",
    "cases.testimonial5.quote": "A Cortex criou um site que mostra a inovação da Kube em impressão 3D. O visual tecnológico e a navegação impecável nos posicionaram como líderes no segmento industrial.",
    "cases.testimonial6.quote": "A Cortex traduziu perfeitamente a união entre arquitetura e engenharia do Eliore Studio. O site é elegante, funcional e transmite exatamente a credibilidade que precisávamos.",
    "cases.testimonial7.quote": "A Cortex desenvolveu um site que reflete a segurança e a sofisticação que a Lite TI entrega. Design escuro, moderno e com uma presença digital que inspira confiança nos nossos clientes.",
    "cases.testimonial8.quote": "O site da Jovem Hub ficou impactante. Desenvolvido pela Cortex em parceria com a All In Club, o design poderoso captura a essência da comunidade e conecta jovens empreendedores.",
    "cases.testimonial9.quote": "A Scolty Vision precisava de um site à altura dos nossos vídeos de elite. A Cortex, contratada pela All In Club para o desenvolvimento, entregou algo cinematográfico — cada scroll é uma experiência visual que converte.",
    "cases.testimonial10.quote": "A Cortex criou o site do Sr. Primus com a identidade premium que a marca exige. O design quente e impactante comunica autoridade e posiciona a mentoria como referência no mercado.",
    "cases.testimonial11.quote": "O site da XScale AI transmite inovação desde o primeiro pixel. Desenvolvido pela Cortex em parceria com a All In Club, o design futurista comunica perfeitamente nossa proposta de consultoria estratégica em IA.",
    "cases.testimonial12.quote": "A RentFy precisava de um site que transmitisse simplicidade e confiança. Desenvolvido pela Cortex em parceria com a All In Club, a landing page clean e profissional converte visitantes em usuários.",

    // Case Modal Projects
    "cases.project1.desc": "Desenvolvemos um site premium que traduz a essência da BlackClub. Design impecável, performance absurda e uma experiência que os clientes elogiam todos os dias.",
    "cases.project1.r1": "Conversão 3x maior",
    "cases.project1.r2": "Design premium",
    "cases.project1.r3": "Performance otimizada",
    "cases.project2.desc": "Site sofisticado e personalizado para a marca pessoal da Valentina Akime. Design que reflete sua identidade e posiciona sua presença digital.",
    "cases.project2.r1": "Posicionamento digital",
    "cases.project2.r2": "+200% engajamento",
    "cases.project2.r3": "Marca pessoal consolidada",
    "cases.project3.desc": "Junto à agência Biomo, criamos o site oficial do Tupã FC que representa garra, tradição e união desde 1936. Design esportivo que conecta a torcida.",
    "cases.project3.r1": "Identidade esportiva forte",
    "cases.project3.r2": "Engajamento da torcida",
    "cases.project3.r3": "Presença digital completa",
    "cases.project4.desc": "Plataforma SaaS dark premium para a Credits Hub. Design moderno com interface intuitiva que transmite confiança e profissionalismo desde o primeiro acesso.",
    "cases.project4.r1": "Conversão desde o dia 1",
    "cases.project4.r2": "UI dark premium",
    "cases.project4.r3": "Experiência fluida",
    "cases.project5.desc": "Site tecnológico para a Kube Projetos que posiciona a empresa como líder em impressão 3D industrial. Visual inovador com navegação impecável.",
    "cases.project5.r1": "Liderança no segmento",
    "cases.project5.r2": "Visual tecnológico",
    "cases.project5.r3": "Navegação premium",
    "cases.project6.desc": "Site elegante e funcional para o Eliore Studio que une arquitetura e engenharia. Design sofisticado que transmite credibilidade e profissionalismo.",
    "cases.project6.r1": "Design sofisticado",
    "cases.project6.r2": "Portfólio interativo",
    "cases.project6.r3": "Credibilidade visual",
    "cases.project7.desc": "Site moderno e escuro para a Lite TI que reflete segurança e sofisticação em consultoria de TI. Presença digital que inspira confiança.",
    "cases.project7.r1": "Presença digital forte",
    "cases.project7.r2": "Design seguro",
    "cases.project7.r3": "Confiança dos clientes",
    "cases.project8.desc": "Landing page impactante para a Jovem Hub, desenvolvida pela Cortex em parceria com a All In Club — responsável pela prospecção do projeto. Design poderoso que captura a essência da comunidade e conecta jovens empreendedores.",
    "cases.project8.r1": "Design impactante",
    "cases.project8.r2": "Conexão com o público",
    "cases.project8.r3": "Comunidade engajada",
    "cases.project9.desc": "Site cinematográfico para a Scolty Vision, desenvolvido pela Cortex em parceria com a All In Club — que prospectou o cliente e contratou a equipe Cortex para a execução. Cada scroll é uma experiência visual que converte visitantes em clientes.",
    "cases.project9.r1": "Experiência cinematográfica",
    "cases.project9.r2": "Conversão otimizada",
    "cases.project9.r3": "Portfolio visual",
    "cases.project10.desc": "Site premium para o Sr. Primus com identidade quente e impactante. Comunica autoridade e posiciona a mentoria em IA como referência no mercado.",
    "cases.project10.r1": "Autoridade digital",
    "cases.project10.r2": "Branding premium",
    "cases.project10.r3": "Posicionamento forte",
    "cases.project11.desc": "Site futurista e funcional para a XScale AI, desenvolvido pela Cortex em parceria com a All In Club — responsável pela prospecção e que contratou membros da Cortex para o desenvolvimento. Transmite inovação e comunica consultoria estratégica em IA com clareza.",
    "cases.project11.r1": "Design futurista",
    "cases.project11.r2": "UX estratégico",
    "cases.project11.r3": "Inovação visual",
    "cases.project12.desc": "Landing page clean e profissional para a RentFy, desenvolvida pela Cortex em parceria com a All In Club — que prospectou o projeto e delegou a criação à equipe Cortex. Transmite simplicidade e confiança para hosts da Turo com alta taxa de conversão.",
    "cases.project12.r1": "Landing page otimizada",
    "cases.project12.r2": "Conversão de usuários",
    "cases.project12.r3": "Design clean e confiável",

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
    "footer.service3": "AI Referral Engine™",
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
    "creative.cta": "Request Proposal",
    "creative.showMore": "Show more",
    "creative.filter.all": "All",
    "creative.filter.uiux": "UI/UX & Web Design",
    "creative.filter.motion": "Motion Design",
    "creative.portfolio.tag.uiux": "UI/UX Design",
    "creative.portfolio.tag.motion": "Motion",
    "creative.portfolio.p1.title": "Premium Landing Page",
    "creative.portfolio.p1.desc": "High-conversion landing page with strategic design and micro-interactions.",
    "creative.portfolio.p2.title": "Brand Animation",
    "creative.portfolio.p2.desc": "Brand animation with visual storytelling for social media.",
    "creative.portfolio.p3.title": "Dashboard UI",
    "creative.portfolio.p3.desc": "Dashboard interface with UX focused on productivity and data.",
    "creative.portfolio.p4.title": "Social Media Motion",
    "creative.portfolio.p4.desc": "Animated pieces for social media campaigns and ads.",
    "creative.portfolio.p5.title": "E-commerce Redesign",
    "creative.portfolio.p5.desc": "Complete e-commerce redesign focused on conversion.",
    "creative.portfolio.p6.title": "Institutional Video",
    "creative.portfolio.p6.desc": "Institutional video with motion graphics and brand narrative.",

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
    "cases.testimonial1.quote": "Cortex created a website that perfectly translated BlackClub's essence. Flawless design, insane performance, and an experience our clients praise every day. Result: 3x higher conversion in 60 days.",
    "cases.testimonial2.quote": "My website turned out exactly as I imagined — sophisticated, fast, and totally me. Cortex understood my brand and delivered something that impresses everyone who visits. It completely changed my digital positioning.",
    "cases.testimonial3.quote": "Cortex, together with Biomo agency, built a website that represents the soul of Tupã FC — grit, tradition, and unity since 1936. The design conveys the strength of our tricolor and made fans feel at home in the digital world. A true masterpiece.",
    "cases.testimonial4.quote": "Credits Hub needed a website that conveyed trust and professionalism. Cortex delivered a dark premium platform that converted from day one. Our clients love the experience.",
    "cases.testimonial5.quote": "Cortex created a website that showcases Kube's innovation in 3D printing. The tech-forward visuals and flawless navigation positioned us as leaders in the industrial segment.",
    "cases.testimonial6.quote": "Cortex perfectly translated the union of architecture and engineering at Eliore Studio. The site is elegant, functional, and conveys exactly the credibility we needed.",
    "cases.testimonial7.quote": "Cortex built a website that reflects the security and sophistication Lite TI delivers. Dark, modern design with a digital presence that inspires trust in our clients.",
    "cases.testimonial8.quote": "Jovem Hub's website turned out impactful. Developed by Cortex in partnership with All In Club, the powerful design captures the community's essence and connects young entrepreneurs.",
    "cases.testimonial9.quote": "Scolty Vision needed a website worthy of our elite videos. Cortex, hired by All In Club for development, delivered something cinematic — every scroll is a visual experience that converts.",
    "cases.testimonial10.quote": "Cortex built the Sr. Primus website with the premium identity the brand demands. The warm, impactful design communicates authority and positions the mentorship as a market reference.",
    "cases.testimonial11.quote": "XScale AI's website conveys innovation from the very first pixel. Developed by Cortex in partnership with All In Club, the futuristic design perfectly communicates our strategic AI consulting proposition.",
    "cases.testimonial12.quote": "RentFy needed a website that conveyed simplicity and trust. Developed by Cortex in partnership with All In Club, the clean, professional landing page converts visitors into users.",

    // Case Modal Projects
    "cases.project1.desc": "We developed a premium website that translates BlackClub's essence. Flawless design, insane performance, and an experience clients praise every day.",
    "cases.project1.r1": "3x higher conversion",
    "cases.project1.r2": "Premium design",
    "cases.project1.r3": "Optimized performance",
    "cases.project2.desc": "Sophisticated, personalized website for Valentina Akime's personal brand. Design that reflects her identity and positions her digital presence.",
    "cases.project2.r1": "Digital positioning",
    "cases.project2.r2": "+200% engagement",
    "cases.project2.r3": "Consolidated personal brand",
    "cases.project3.desc": "Together with Biomo agency, we created the official Tupã FC website representing grit, tradition, and unity since 1936. Sports design that connects fans.",
    "cases.project3.r1": "Strong sports identity",
    "cases.project3.r2": "Fan engagement",
    "cases.project3.r3": "Complete digital presence",
    "cases.project4.desc": "Dark premium SaaS platform for Credits Hub. Modern design with intuitive interface that conveys trust and professionalism from the first visit.",
    "cases.project4.r1": "Conversion from day 1",
    "cases.project4.r2": "Dark premium UI",
    "cases.project4.r3": "Seamless experience",
    "cases.project5.desc": "Tech-forward website for Kube Projetos positioning the company as a 3D printing industry leader. Innovative visuals with flawless navigation.",
    "cases.project5.r1": "Segment leadership",
    "cases.project5.r2": "Tech-forward visuals",
    "cases.project5.r3": "Premium navigation",
    "cases.project6.desc": "Elegant, functional website for Eliore Studio uniting architecture and engineering. Sophisticated design that conveys credibility and professionalism.",
    "cases.project6.r1": "Sophisticated design",
    "cases.project6.r2": "Interactive portfolio",
    "cases.project6.r3": "Visual credibility",
    "cases.project7.desc": "Modern dark website for Lite TI reflecting security and sophistication in IT consulting. Digital presence that inspires client trust.",
    "cases.project7.r1": "Strong digital presence",
    "cases.project7.r2": "Secure design",
    "cases.project7.r3": "Client trust",
    "cases.project8.desc": "Impactful landing page for Jovem Hub, developed by Cortex in partnership with All In Club — who prospected the project. Powerful design that captures the community's essence and connects young entrepreneurs.",
    "cases.project8.r1": "Impactful design",
    "cases.project8.r2": "Audience connection",
    "cases.project8.r3": "Engaged community",
    "cases.project9.desc": "Cinematic website for Scolty Vision, developed by Cortex in partnership with All In Club — who prospected the client and hired the Cortex team for execution. Every scroll is a visual experience that converts visitors into clients.",
    "cases.project9.r1": "Cinematic experience",
    "cases.project9.r2": "Optimized conversion",
    "cases.project9.r3": "Visual portfolio",
    "cases.project10.desc": "Premium website for Sr. Primus with warm, impactful identity. Communicates authority and positions AI mentorship as a market reference.",
    "cases.project10.r1": "Digital authority",
    "cases.project10.r2": "Premium branding",
    "cases.project10.r3": "Strong positioning",
    "cases.project11.desc": "Futuristic, functional website for XScale AI, developed by Cortex in partnership with All In Club — who prospected and hired Cortex members for development. Conveys innovation and communicates strategic AI consulting with clarity.",
    "cases.project11.r1": "Futuristic design",
    "cases.project11.r2": "Strategic UX",
    "cases.project11.r3": "Visual innovation",
    "cases.project12.desc": "Clean, professional landing page for RentFy, developed by Cortex in partnership with All In Club — who prospected the project and delegated creation to the Cortex team. Conveys simplicity and trust for Turo hosts with high conversion rate.",
    "cases.project12.r1": "Optimized landing page",
    "cases.project12.r2": "User conversion",
    "cases.project12.r3": "Clean, trustworthy design",

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
    "footer.service3": "AI Referral Engine™",
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
