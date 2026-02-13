// Quiz Data - Plans, Addons, Recurring Services, and Traffic Config

export interface Plan {
  id: string;
  label: string;
  base: number;
  pagesIncluded: number;
  icon: string;
  help: string;
  details: string;
  popular: boolean;
  includes?: string[];
  isStartingPrice?: boolean;
}

export interface Addon {
  id: string;
  category: 'conteudo' | 'func_basicas' | 'func_avancadas' | 'seo' | 'automacao' | 'backend';
  label: string;
  type: 'toggle' | 'counter';
  setup?: number;
  monthly?: number;
  unit?: number;
  min?: number;
  max?: number;
  help: string;
  includedIn?: string[];
}

export interface RecurringService {
  id: string;
  label: string;
  monthly: number;
  features: string[];
  help: string;
}

export interface InvestmentRange {
  min: number;
  max: number | null;
  label: string;
}

export interface TrafficConfig {
  managementFee: number;
  platforms: string[];
  investmentRanges: InvestmentRange[];
  objectives: string[];
  segments: string[];
}

// PLANS
export const PLANS: Record<string, Plan> = {
  landing: {
    id: 'landing',
    label: 'Landing Page',
    base: 3500,
    pagesIncluded: 1,
    icon: 'Zap',
    help: 'Uma página única com proposta clara, prova social e CTA.',
    details: 'Hero + Benefícios + CTA + Rodapé',
    popular: false
  },
  institucional: {
    id: 'institucional',
    label: 'Site Institucional',
    base: 6399,
    pagesIncluded: 6,
    icon: 'TrendingUp',
    help: 'Site completo para gerar confiança e autoridade.',
    details: 'Home, Sobre, Serviços, Blog, Contato, Políticas',
    popular: true
  },
  premium: {
    id: 'premium',
    label: 'Site Enterprise + Intranet',
    base: 8000,
    pagesIncluded: 6,
    includes: ['tracking_avancado', 'crm_integracao'],
    icon: 'Rocket',
    help: 'Solução completa para escalar operações.',
    details: 'A partir de R$ 8.000 - Dashboards, CRM, integrações avançadas',
    popular: false,
    isStartingPrice: true
  }
};

// ADDONS
export const ADDONS: Record<string, Addon> = {
  // CONTEUDO
  paginas_extras: {
    id: 'paginas_extras',
    category: 'conteudo',
    label: 'Páginas Extras',
    type: 'counter',
    unit: 300,
    min: 0,
    max: 10,
    help: 'Páginas adicionais além do plano base'
  },
  copywriting: {
    id: 'copywriting',
    category: 'conteudo',
    label: 'Copywriting Profissional',
    type: 'toggle',
    setup: 800,
    help: 'Textos persuasivos escritos por especialista'
  },
  banco_imagens: {
    id: 'banco_imagens',
    category: 'conteudo',
    label: 'Banco de Imagens Premium',
    type: 'toggle',
    setup: 400,
    help: 'Acesso a imagens profissionais licenciadas'
  },
  
  // FUNCIONALIDADES BASICAS
  formulario_avancado: {
    id: 'formulario_avancado',
    category: 'func_basicas',
    label: 'Formulários Avançados',
    type: 'toggle',
    setup: 300,
    help: 'Multi-step, validação, upload de arquivos'
  },
  chat_whatsapp: {
    id: 'chat_whatsapp',
    category: 'func_basicas',
    label: 'Chat WhatsApp Integrado',
    type: 'toggle',
    setup: 150,
    help: 'Botão flutuante com rastreamento'
  },
  blog: {
    id: 'blog',
    category: 'func_basicas',
    label: 'Blog/Notícias',
    type: 'toggle',
    setup: 600,
    help: 'Sistema de posts com categorias e busca'
  },
  galeria: {
    id: 'galeria',
    category: 'func_basicas',
    label: 'Galeria de Imagens/Portfólio',
    type: 'toggle',
    setup: 400,
    help: 'Grid responsivo com lightbox'
  },
  
  // FUNCIONALIDADES AVANCADAS
  ecommerce_basico: {
    id: 'ecommerce_basico',
    category: 'func_avancadas',
    label: 'E-commerce Básico',
    type: 'toggle',
    setup: 2500,
    monthly: 200,
    help: 'Loja virtual com até 50 produtos'
  },
  area_membros: {
    id: 'area_membros',
    category: 'func_avancadas',
    label: 'Área de Membros',
    type: 'toggle',
    setup: 1800,
    monthly: 150,
    help: 'Login, dashboard, conteúdo exclusivo'
  },
  agendamento: {
    id: 'agendamento',
    category: 'func_avancadas',
    label: 'Sistema de Agendamento',
    type: 'toggle',
    setup: 1200,
    help: 'Calendário com confirmação automática'
  },
  multiidioma: {
    id: 'multiidioma',
    category: 'func_avancadas',
    label: 'Multi-idioma',
    type: 'counter',
    unit: 800,
    min: 0,
    max: 5,
    help: 'Tradução completa do site por idioma'
  },
  
  // SEO & MARKETING
  seo_tecnico: {
    id: 'seo_tecnico',
    category: 'seo',
    label: 'SEO Técnico Completo',
    type: 'toggle',
    setup: 1500,
    help: 'Otimização on-page, schema, sitemap, velocidade'
  },
  google_analytics: {
    id: 'google_analytics',
    category: 'seo',
    label: 'Google Analytics 4 + GTM',
    type: 'toggle',
    setup: 500,
    help: 'Configuração completa com eventos e conversões'
  },
  pixels_ads: {
    id: 'pixels_ads',
    category: 'seo',
    label: 'Pixels de Ads (Meta/Google/TikTok)',
    type: 'toggle',
    setup: 400,
    help: 'Instalação e configuração de conversões'
  },
  aeo: {
    id: 'aeo',
    category: 'seo',
    label: 'AEO (Answer Engine Optimization)',
    type: 'toggle',
    setup: 1200,
    help: 'Otimização para IA (ChatGPT, Perplexity, Google AI)'
  },
  
  // AUTOMACAO & IA
  chatbot_ia: {
    id: 'chatbot_ia',
    category: 'automacao',
    label: 'Chatbot com IA',
    type: 'toggle',
    setup: 2000,
    monthly: 300,
    help: 'Atendimento automatizado 24/7 com GPT'
  },
  automacao_email: {
    id: 'automacao_email',
    category: 'automacao',
    label: 'Automação de E-mail',
    type: 'toggle',
    setup: 800,
    monthly: 100,
    help: 'Sequências, newsletters, segmentação'
  },
  crm_integracao: {
    id: 'crm_integracao',
    category: 'automacao',
    label: 'Integração CRM',
    type: 'toggle',
    setup: 600,
    includedIn: ['premium'],
    help: 'Conexão com HubSpot, Pipedrive, RD Station'
  },
  
  // BACKEND & INFRAESTRUTURA
  api_custom: {
    id: 'api_custom',
    category: 'backend',
    label: 'API Customizada',
    type: 'toggle',
    setup: 3000,
    help: 'Endpoints personalizados para integração'
  },
  dashboard_admin: {
    id: 'dashboard_admin',
    category: 'backend',
    label: 'Dashboard Administrativo',
    type: 'toggle',
    setup: 2500,
    help: 'Painel de gestão com métricas e relatórios'
  },
  tracking_avancado: {
    id: 'tracking_avancado',
    category: 'backend',
    label: 'Tracking Avançado',
    type: 'toggle',
    setup: 800,
    includedIn: ['premium'],
    help: 'Eventos server-side, CAPI, data layer'
  }
};

// RECURRING SERVICES
export const RECURRING: Record<string, RecurringService> = {
  host_essencial: {
    id: 'host_essencial',
    label: 'Hospedagem Essencial',
    monthly: 150,
    features: ['SSL', 'CDN', 'Backup semanal', 'Suporte email'],
    help: 'Ideal para sites institucionais'
  },
  host_performance: {
    id: 'host_performance',
    label: 'Hospedagem Performance',
    monthly: 350,
    features: ['SSL', 'CDN Premium', 'Backup diário', 'Suporte prioritário', 'Cache avançado'],
    help: 'Para sites com alto tráfego ou e-commerce'
  },
  manutencao_2h: {
    id: 'manutencao_2h',
    label: 'Manutenção Mensal (2h)',
    monthly: 400,
    features: ['Atualizações', 'Pequenos ajustes', 'Monitoramento', 'Relatório mensal'],
    help: 'Mantenha seu site sempre atualizado'
  }
};

// TRAFFIC CONFIG
export const TRAFFIC_CONFIG: TrafficConfig = {
  managementFee: 2500,
  platforms: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'LinkedIn Ads'],
  investmentRanges: [
    { min: 1000, max: 3000, label: 'R$ 1.000 - R$ 3.000' },
    { min: 3000, max: 7000, label: 'R$ 3.000 - R$ 7.000' },
    { min: 7000, max: 15000, label: 'R$ 7.000 - R$ 15.000' },
    { min: 15000, max: 30000, label: 'R$ 15.000 - R$ 30.000' },
    { min: 30000, max: null, label: 'Acima de R$ 30.000' }
  ],
  objectives: [
    'Geração de Leads',
    'Vendas E-commerce',
    'Reconhecimento de Marca',
    'Tráfego para Site',
    'Instalação de App'
  ],
  segments: [
    'B2B / Empresarial',
    'E-commerce / Varejo',
    'Serviços Locais',
    'Infoprodutos / Educação',
    'SaaS / Tecnologia',
    'Saúde / Bem-estar',
    'Imóveis',
    'Outro'
  ]
};

// Category labels for display
export const ADDON_CATEGORIES: Record<string, { label: string; description: string }> = {
  conteudo: { label: 'Conteúdo', description: 'Páginas e textos profissionais' },
  func_basicas: { label: 'Funcionalidades Básicas', description: 'Recursos essenciais para seu site' },
  func_avancadas: { label: 'Funcionalidades Avançadas', description: 'Recursos de alta performance' },
  seo: { label: 'SEO & Marketing', description: 'Visibilidade e conversão' },
  automacao: { label: 'Automação & IA', description: 'Inteligência artificial e automações' },
  backend: { label: 'Backend & Infraestrutura', description: 'Tecnologia robusta e escalável' }
};

// Helper to get addons by category
export const getAddonsByCategory = (category: string) => 
  Object.values(ADDONS).filter(addon => addon.category === category);

// WhatsApp number
export const WHATSAPP_NUMBER = '5547974220069';
