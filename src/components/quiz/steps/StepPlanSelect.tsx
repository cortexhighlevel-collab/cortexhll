import { motion } from 'framer-motion';
import { Zap, TrendingUp, Rocket, Check, Info } from 'lucide-react';
import { useQuiz } from '../QuizContext';
import { PLANS, type Plan } from '../data/quizData';
import { formatCurrency, trackQuizEvent } from '@/lib/quizUtils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  TrendingUp,
  Rocket
};

export function StepPlanSelect() {
  const { state, setPlan, nextStep } = useQuiz();

  const handleSelect = (planId: string) => {
    const plan = PLANS[planId];
    trackQuizEvent('orcamento_plano_selecionado', { plan: planId, value: plan.base });
    setPlan(planId);
    nextStep();
  };

  const plans = Object.values(PLANS);

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2">
          Escolha seu plano base
        </h3>
        <p className="text-muted-foreground text-sm md:text-base">
          O ponto de partida para seu projeto
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {plans.map((plan, index) => {
          const Icon = iconMap[plan.icon] || Zap;
          const isSelected = state.plan === plan.id;

          return (
            <motion.button
              key={plan.id}
              type="button"
              onClick={() => handleSelect(plan.id)}
              className={`group relative p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                isSelected
                  ? 'border-[#f06800] bg-[#f06800]/5'
                  : 'border-border bg-card hover:border-[#f06800]/50'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-[#f06800] text-white text-xs font-medium rounded-full shadow-lg">
                  Mais Popular
                </div>
              )}

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-[#f06800] text-white' : 'bg-muted text-muted-foreground group-hover:bg-[#f06800]/10 group-hover:text-[#f06800]'
                } transition-colors`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-lg font-semibold text-foreground">
                      {plan.label}
                    </h4>
                    <span 
                      className="text-muted-foreground cursor-help" 
                      title={`${plan.help} - ${plan.details}`}
                    >
                      <Info className="w-4 h-4" />
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    {plan.help}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
                      <Check className="w-3 h-3" />
                      {plan.pagesIncluded} {plan.pagesIncluded === 1 ? 'página' : 'páginas'}
                    </span>
                    {plan.includes && plan.includes.map(inc => (
                      <span key={inc} className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md">
                        <Check className="w-3 h-3" />
                        {inc === 'tracking_avancado' ? 'Tracking' : 'CRM'}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="text-right shrink-0">
                  <div className="text-2xl font-bold text-[#f06800]">
                    {formatCurrency(plan.base)}
                  </div>
                  <p className="text-xs text-muted-foreground">setup único</p>
                </div>
              </div>

              {/* Selection indicator */}
              {isSelected && (
                <motion.div
                  className="absolute right-4 top-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#f06800] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
