
# Quiz Interativo de Orçamento - Plano de Implementação

## Visao Geral

Transformar o formulario atual de contato em um Quiz Interativo inteligente com dois caminhos de servico: **Criacao de Sites** (9 passos) e **Gestao de Trafego Pago** (5 passos).

---

## Arquitetura do Fluxo

```text
┌─────────────────────────────────────────────────────────────────┐
│                     PASSO 0: ESCOLHA DO SERVICO                 │
│  ┌─────────────────────┐         ┌─────────────────────────┐   │
│  │   Criacao de Sites  │         │   Gestao de Trafego     │   │
│  │        [9 passos]   │         │        [5 passos]       │   │
│  └──────────┬──────────┘         └────────────┬────────────┘   │
└─────────────┼─────────────────────────────────┼────────────────┘
              │                                 │
              ▼                                 ▼
┌─────────────────────────┐       ┌─────────────────────────────┐
│  CAMINHO SITES          │       │  CAMINHO TRAFEGO            │
│  1. Plano Base          │       │  1. Plataformas             │
│  2. Conteudo            │       │  2. Investimento Mensal     │
│  3. Funcionalidades     │       │  3. Objetivos               │
│  4. Func. Avancadas     │       │  4. Segmento/Nicho          │
│  5. SEO & Marketing     │       │  5. Resumo + Formulario     │
│  6. Automacao & IA      │       └─────────────────────────────┘
│  7. Backend             │
│  8. Recorrentes         │
│  9. Resumo + Formulario │
└─────────────────────────┘
```

---

## Estrutura de Dados

### 1. PLANOS BASE (Sites)

```typescript
const PLANS = {
  landing: {
    id: 'landing',
    label: 'Landing Page',
    base: 1000,
    pagesIncluded: 1,
    icon: 'Zap',
    help: 'Uma pagina unica com proposta clara, prova social e CTA.',
    details: 'Hero + Beneficios + CTA + Rodape',
    popular: false
  },
  institucional: {
    id: 'institucional',
    label: 'Site Institucional',
    base: 3500,
    pagesIncluded: 6,
    icon: 'TrendingUp',
    help: 'Site completo para gerar confianca e autoridade.',
    details: 'Home, Sobre, Servicos, Blog, Contato, Politicas',
    popular: true
  },
  premium: {
    id: 'premium',
    label: 'Site Enterprise + Intranet',
    base: 6000,
    pagesIncluded: 6,
    includes: ['tracking_avancado', 'crm'],
    icon: 'Rocket',
    help: 'Solucao completa para escalar operacoes.',
    details: 'Dashboards, CRM, integracoes avancadas',
    popular: false
  }
}
```

### 2. ADDONS (Complementos por Categoria)

```typescript
const ADDONS = {
  // CONTEUDO
  paginas_extras: {
    id: 'paginas_extras',
    category: 'conteudo',
    label: 'Paginas Extras',
    type: 'counter',
    unit: 300,
    min: 0,
    max: 10,
    help: 'Paginas adicionais alem do plano base'
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
    label: 'Formularios Avancados',
    type: 'toggle',
    setup: 300,
    help: 'Multi-step, validacao, upload de arquivos'
  },
  chat_whatsapp: {
    id: 'chat_whatsapp',
    category: 'func_basicas',
    label: 'Chat WhatsApp Integrado',
    type: 'toggle',
    setup: 150,
    help: 'Botao flutuante com rastreamento'
  },
  blog: {
    id: 'blog',
    category: 'func_basicas',
    label: 'Blog/Noticias',
    type: 'toggle',
    setup: 600,
    help: 'Sistema de posts com categorias e busca'
  },
  galeria: {
    id: 'galeria',
    category: 'func_basicas',
    label: 'Galeria de Imagens/Portfolio',
    type: 'toggle',
    setup: 400,
    help: 'Grid responsivo com lightbox'
  },
  
  // FUNCIONALIDADES AVANCADAS
  ecommerce_basico: {
    id: 'ecommerce_basico',
    category: 'func_avancadas',
    label: 'E-commerce Basico',
    type: 'toggle',
    setup: 2500,
    monthly: 200,
    help: 'Loja virtual com ate 50 produtos'
  },
  area_membros: {
    id: 'area_membros',
    category: 'func_avancadas',
    label: 'Area de Membros',
    type: 'toggle',
    setup: 1800,
    monthly: 150,
    help: 'Login, dashboard, conteudo exclusivo'
  },
  agendamento: {
    id: 'agendamento',
    category: 'func_avancadas',
    label: 'Sistema de Agendamento',
    type: 'toggle',
    setup: 1200,
    help: 'Calendario com confirmacao automatica'
  },
  multiidioma: {
    id: 'multiidioma',
    category: 'func_avancadas',
    label: 'Multi-idioma',
    type: 'counter',
    unit: 800,
    min: 0,
    max: 5,
    help: 'Traducao completa do site por idioma'
  },
  
  // SEO & MARKETING
  seo_tecnico: {
    id: 'seo_tecnico',
    category: 'seo',
    label: 'SEO Tecnico Completo',
    type: 'toggle',
    setup: 1500,
    help: 'Otimizacao on-page, schema, sitemap, velocidade'
  },
  google_analytics: {
    id: 'google_analytics',
    category: 'seo',
    label: 'Google Analytics 4 + GTM',
    type: 'toggle',
    setup: 500,
    help: 'Configuracao completa com eventos e conversoes'
  },
  pixels_ads: {
    id: 'pixels_ads',
    category: 'seo',
    label: 'Pixels de Ads (Meta/Google/TikTok)',
    type: 'toggle',
    setup: 400,
    help: 'Instalacao e configuracao de conversoes'
  },
  aeo: {
    id: 'aeo',
    category: 'seo',
    label: 'AEO (Answer Engine Optimization)',
    type: 'toggle',
    setup: 1200,
    help: 'Otimizacao para IA (ChatGPT, Perplexity, Google AI)'
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
    label: 'Automacao de E-mail',
    type: 'toggle',
    setup: 800,
    monthly: 100,
    help: 'Sequencias, newsletters, segmentacao'
  },
  crm_integracao: {
    id: 'crm_integracao',
    category: 'automacao',
    label: 'Integracao CRM',
    type: 'toggle',
    setup: 600,
    includedIn: ['premium'],
    help: 'Conexao com HubSpot, Pipedrive, RD Station'
  },
  
  // BACKEND & INFRAESTRUTURA
  api_custom: {
    id: 'api_custom',
    category: 'backend',
    label: 'API Customizada',
    type: 'toggle',
    setup: 3000,
    help: 'Endpoints personalizados para integracao'
  },
  dashboard_admin: {
    id: 'dashboard_admin',
    category: 'backend',
    label: 'Dashboard Administrativo',
    type: 'toggle',
    setup: 2500,
    help: 'Painel de gestao com metricas e relatorios'
  },
  tracking_avancado: {
    id: 'tracking_avancado',
    category: 'backend',
    label: 'Tracking Avancado',
    type: 'toggle',
    setup: 800,
    includedIn: ['premium'],
    help: 'Eventos server-side, CAPI, data layer'
  }
}
```

### 3. SERVICOS RECORRENTES (Mensalidade)

```typescript
const RECURRING = {
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
    features: ['SSL', 'CDN Premium', 'Backup diario', 'Suporte prioritario', 'Cache avancado'],
    help: 'Para sites com alto trafego ou e-commerce'
  },
  manutencao_2h: {
    id: 'manutencao_2h',
    label: 'Manutencao Mensal (2h)',
    monthly: 400,
    features: ['Atualizacoes', 'Pequenos ajustes', 'Monitoramento', 'Relatorio mensal'],
    help: 'Mantenha seu site sempre atualizado'
  }
}
```

### 4. TRAFEGO PAGO

```typescript
const TRAFFIC_CONFIG = {
  managementFee: 2500, // Valor fixo mensal
  platforms: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'LinkedIn Ads'],
  investmentRanges: [
    { min: 1000, max: 3000, label: 'R$ 1.000 - R$ 3.000' },
    { min: 3000, max: 7000, label: 'R$ 3.000 - R$ 7.000' },
    { min: 7000, max: 15000, label: 'R$ 7.000 - R$ 15.000' },
    { min: 15000, max: 30000, label: 'R$ 15.000 - R$ 30.000' },
    { min: 30000, max: null, label: 'Acima de R$ 30.000' }
  ],
  objectives: [
    'Geracao de Leads',
    'Vendas E-commerce',
    'Reconhecimento de Marca',
    'Trafego para Site',
    'Instalacao de App'
  ],
  segments: [
    'B2B / Empresarial',
    'E-commerce / Varejo',
    'Servicos Locais',
    'Infoprodutos / Educacao',
    'SaaS / Tecnologia',
    'Saude / Bem-estar',
    'Imoveis',
    'Outro'
  ]
}
```

---

## Componentes a Criar

### Estrutura de Arquivos

```text
src/
├── components/
│   └── quiz/
│       ├── QuizOrçamento.tsx         # Componente principal
│       ├── QuizContext.tsx           # Context para estado global
│       ├── QuizProgress.tsx          # Barra de progresso
│       ├── QuizSummary.tsx           # Resumo flutuante
│       ├── steps/
│       │   ├── StepServiceSelect.tsx # Passo 0: Escolha do servico
│       │   ├── StepPlanSelect.tsx    # Sites: Escolha do plano
│       │   ├── StepAddons.tsx        # Sites: Addons genericos
│       │   ├── StepRecurring.tsx     # Sites: Servicos recorrentes
│       │   ├── StepTrafficPlatform.tsx   # Trafego: Plataformas
│       │   ├── StepTrafficInvestment.tsx # Trafego: Investimento
│       │   ├── StepTrafficObjective.tsx  # Trafego: Objetivos
│       │   ├── StepTrafficSegment.tsx    # Trafego: Segmento
│       │   └── StepFinalForm.tsx     # Formulario final + resumo
│       └── data/
│           └── quizData.ts           # PLANS, ADDONS, RECURRING
└── lib/
    └── quizUtils.ts                  # calculatePrice, generateWhatsAppMessage
```

---

## Logica de Calculo de Preco

```typescript
interface PriceResult {
  setup: number;
  monthly: number;
  breakdown: {
    plan: number;
    addons: { name: string; setup: number; monthly: number }[];
    recurring: { name: string; monthly: number }[];
  };
}

function calculatePrice(selection: QuizSelection): PriceResult {
  const plan = PLANS[selection.plan];
  let setup = plan.base;
  let monthly = 0;
  const breakdown = { plan: plan.base, addons: [], recurring: [] };
  
  // Processar addons
  Object.entries(selection.addons).forEach(([addonId, value]) => {
    const addon = ADDONS[addonId];
    
    // Verificar se esta incluido no plano
    if (addon.includedIn?.includes(selection.plan)) return;
    
    if (addon.type === 'toggle' && value) {
      setup += addon.setup || 0;
      monthly += addon.monthly || 0;
    } else if (addon.type === 'counter' && value > 0) {
      setup += addon.unit * value;
    }
  });
  
  // Processar recorrentes
  Object.entries(selection.recurring).forEach(([recId, active]) => {
    if (active) {
      monthly += RECURRING[recId].monthly;
    }
  });
  
  return { setup, monthly, breakdown };
}
```

---

## Integracao WhatsApp

```typescript
function generateWhatsAppMessage(data: QuizData, price: PriceResult): string {
  const lines = [
    `Ola! Gostaria de finalizar meu orcamento 🚀`,
    ``,
    `👤 *Nome:* ${data.name}`,
    `📧 *Email:* ${data.email}`,
    data.phone ? `📞 *Telefone:* ${data.phone}` : null,
    ``,
    `📋 *Servico:* ${data.service === 'sites' ? 'Criacao de Sites' : 'Gestao de Trafego'}`,
  ];
  
  if (data.service === 'sites') {
    lines.push(`🏷️ *Plano:* ${PLANS[data.plan].label}`);
    lines.push(`💰 *Setup:* R$ ${price.setup.toLocaleString('pt-BR')}`);
    lines.push(`📆 *Mensal:* R$ ${price.monthly.toLocaleString('pt-BR')}/mes`);
  } else {
    lines.push(`💰 *Gestao:* R$ 2.500/mes`);
    lines.push(`📊 *Investimento:* ${data.investment}`);
  }
  
  if (data.message) {
    lines.push(``, `💬 *Mensagem:* ${data.message}`);
  }
  
  lines.push(``, `Podemos conversar?`);
  
  return lines.filter(Boolean).join('\n');
}

// Numero WhatsApp
const WHATSAPP_NUMBER = '5547996067992';
```

---

## Tracking GTM

```typescript
function trackQuizEvent(event: string, payload?: object) {
  window.dataLayer?.push({
    event,
    ...payload,
    timestamp: new Date().toISOString()
  });
}

// Eventos a implementar:
// - orcamento_modal_aberto
// - orcamento_servico_selecionado { service: 'sites' | 'trafego' }
// - orcamento_plano_selecionado { plan: string, value: number }
// - orcamento_addon_alterado { addon: string, value: any }
// - orcamento_recorrente_alterado { recurring: string, active: boolean }
// - orcamento_passo_avancar { step: number, service: string }
// - orcamento_passo_voltar { step: number }
// - whatsapp_clique { setup: number, monthly: number }
```

---

## UX e Interface

### Componentes Visuais

1. **Barra de Progresso**: Animada, mostra passo atual / total
2. **Resumo Flutuante**: Aparece a partir do passo 2, mostra setup + mensal em tempo real
3. **Cards de Selecao**: Para planos e addons, com icones e descricoes
4. **Toggles Estilizados**: Para opcoes on/off
5. **Contadores**: Com botoes +/- para quantidades
6. **Sliders**: Para ranges de investimento (trafego)

### Responsividade

- **Mobile**: Quiz em tela cheia, 1 pergunta por vez, resumo colapsavel
- **Desktop**: Layout atual mantido, formulario com scroll interno

---

## Passos de Implementacao

### Fase 1: Estrutura Base
1. Criar pasta `src/components/quiz/` com arquivos base
2. Criar `quizData.ts` com PLANS, ADDONS, RECURRING, TRAFFIC_CONFIG
3. Criar `QuizContext.tsx` com estado global do quiz
4. Criar `quizUtils.ts` com calculatePrice e generateWhatsAppMessage

### Fase 2: Componentes de Step
5. Criar `StepServiceSelect.tsx` - Escolha entre Sites e Trafego
6. Criar `StepPlanSelect.tsx` - Cards de planos base
7. Criar `StepAddons.tsx` - Componente reutilizavel por categoria
8. Criar `StepRecurring.tsx` - Selecao de servicos mensais
9. Criar steps de Trafego (Platform, Investment, Objective, Segment)
10. Criar `StepFinalForm.tsx` - Formulario + resumo + botao WhatsApp

### Fase 3: UI/UX
11. Criar `QuizProgress.tsx` - Barra de progresso animada
12. Criar `QuizSummary.tsx` - Resumo flutuante com precos
13. Implementar animacoes de transicao entre passos

### Fase 4: Integracao
14. Criar `QuizOrcamento.tsx` - Componente principal que orquestra tudo
15. Substituir formulario atual no `CTASection.tsx`
16. Implementar tracking GTM
17. Testar fluxo completo mobile e desktop

---

## Secao Tecnica

### Dependencias Existentes Utilizadas
- `framer-motion`: Animacoes de transicao entre passos
- `lucide-react`: Icones (Zap, TrendingUp, Rocket, etc.)
- `zod`: Validacao do formulario final
- `react-hook-form`: Gerenciamento do formulario

### Estado Global (Context)

```typescript
interface QuizState {
  service: 'sites' | 'trafego' | null;
  currentStep: number;
  direction: number;
  
  // Sites
  plan: string | null;
  addons: Record<string, boolean | number>;
  recurring: Record<string, boolean>;
  
  // Trafego
  platforms: string[];
  investment: string | null;
  objective: string | null;
  segment: string | null;
  
  // Form
  name: string;
  email: string;
  phone: string;
  message: string;
}
```

### Validacao do Formulario Final

```typescript
const formSchema = z.object({
  name: z.string().min(2, 'Nome muito curto').max(100),
  email: z.string().email('Email invalido'),
  phone: z.string().optional(),
  message: z.string().max(500).optional()
});
```
