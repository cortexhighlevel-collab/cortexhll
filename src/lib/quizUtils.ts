import { PLANS, ADDONS, RECURRING, TRAFFIC_CONFIG, WHATSAPP_NUMBER, type Plan } from '@/components/quiz/data/quizData';
import type { QuizState } from '@/components/quiz/QuizContext';

export interface PriceBreakdownItem {
  name: string;
  setup: number;
  monthly: number;
}

export interface PriceResult {
  setup: number;
  monthly: number;
  breakdown: {
    plan: { name: string; value: number } | null;
    addons: PriceBreakdownItem[];
    recurring: { name: string; monthly: number }[];
  };
}

export function calculatePrice(state: QuizState): PriceResult {
  if (state.service === 'trafego') {
    return {
      setup: 0,
      monthly: TRAFFIC_CONFIG.managementFee,
      breakdown: {
        plan: null,
        addons: [],
        recurring: [{ name: 'Gestão de Tráfego', monthly: TRAFFIC_CONFIG.managementFee }]
      }
    };
  }

  if (!state.plan || !PLANS[state.plan]) {
    return {
      setup: 0,
      monthly: 0,
      breakdown: { plan: null, addons: [], recurring: [] }
    };
  }

  const plan = PLANS[state.plan];
  let setup = plan.base;
  let monthly = 0;
  const addonBreakdown: PriceBreakdownItem[] = [];
  const recurringBreakdown: { name: string; monthly: number }[] = [];

  // Process addons
  Object.entries(state.addons).forEach(([addonId, value]) => {
    const addon = ADDONS[addonId];
    if (!addon) return;

    // Check if included in plan
    if (addon.includedIn?.includes(state.plan!)) return;

    if (addon.type === 'toggle' && value === true) {
      const addonSetup = addon.setup || 0;
      const addonMonthly = addon.monthly || 0;
      setup += addonSetup;
      monthly += addonMonthly;
      addonBreakdown.push({ 
        name: addon.label, 
        setup: addonSetup, 
        monthly: addonMonthly 
      });
    } else if (addon.type === 'counter' && typeof value === 'number' && value > 0) {
      const addonSetup = (addon.unit || 0) * value;
      setup += addonSetup;
      addonBreakdown.push({ 
        name: `${addon.label} (${value}x)`, 
        setup: addonSetup, 
        monthly: 0 
      });
    }
  });

  // Process recurring
  Object.entries(state.recurring).forEach(([recId, active]) => {
    if (!active) return;
    const recurring = RECURRING[recId];
    if (!recurring) return;
    
    monthly += recurring.monthly;
    recurringBreakdown.push({ name: recurring.label, monthly: recurring.monthly });
  });

  return {
    setup,
    monthly,
    breakdown: {
      plan: { name: plan.label, value: plan.base },
      addons: addonBreakdown,
      recurring: recurringBreakdown
    }
  };
}

export function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

export function generateWhatsAppMessage(state: QuizState, price: PriceResult): string {
  const lines: (string | null)[] = [
    `Olá! Gostaria de finalizar meu orçamento 🚀`,
    ``,
    `👤 *Nome:* ${state.name.trim()}`,
    `📧 *Email:* ${state.email.trim()}`,
    state.phone ? `📞 *Telefone:* ${state.phone.trim()}` : null,
    state.company ? `🏢 *Empresa:* ${state.company.trim()}` : null,
    ``,
    `📋 *Serviço:* ${state.service === 'sites' ? 'Criação de Sites' : 'Gestão de Tráfego Pago'}`,
  ];

  if (state.service === 'sites' && state.plan) {
    const plan = PLANS[state.plan];
    lines.push(`🏷️ *Plano:* ${plan.label}`);
    
    // List selected addons
    const selectedAddons = Object.entries(state.addons)
      .filter(([_, value]) => value === true || (typeof value === 'number' && value > 0))
      .map(([addonId, value]) => {
        const addon = ADDONS[addonId];
        if (!addon) return null;
        if (addon.includedIn?.includes(state.plan!)) return null;
        if (typeof value === 'number') return `${addon.label} (${value}x)`;
        return addon.label;
      })
      .filter(Boolean);
    
    if (selectedAddons.length > 0) {
      lines.push(`📦 *Addons:* ${selectedAddons.join(', ')}`);
    }

    // List recurring services
    const selectedRecurring = Object.entries(state.recurring)
      .filter(([_, active]) => active)
      .map(([recId]) => RECURRING[recId]?.label)
      .filter(Boolean);
    
    if (selectedRecurring.length > 0) {
      lines.push(`🔄 *Serviços Mensais:* ${selectedRecurring.join(', ')}`);
    }

    lines.push(`💰 *Setup:* ${formatCurrency(price.setup)}`);
    if (price.monthly > 0) {
      lines.push(`📆 *Mensal:* ${formatCurrency(price.monthly)}/mês`);
    }
  } else if (state.service === 'trafego') {
    lines.push(`💰 *Gestão:* ${formatCurrency(TRAFFIC_CONFIG.managementFee)}/mês`);
    if (state.platforms.length > 0) {
      lines.push(`📊 *Plataformas:* ${state.platforms.join(', ')}`);
    }
    if (state.investment) {
      lines.push(`💵 *Investimento:* ${state.investment}`);
    }
    if (state.objective) {
      lines.push(`🎯 *Objetivo:* ${state.objective}`);
    }
    if (state.segment) {
      lines.push(`🏪 *Segmento:* ${state.segment}`);
    }
  }

  if (state.message) {
    lines.push(``, `💬 *Mensagem:* ${state.message.trim()}`);
  }

  lines.push(``, `Podemos conversar?`);

  return lines.filter(Boolean).join('\n');
}

export function getWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

// GTM Tracking
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackQuizEvent(event: string, payload?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...payload,
      timestamp: new Date().toISOString()
    });
  }
}
