import { motion } from 'framer-motion';
import { Check, Plus, Minus, Info, Sparkles } from 'lucide-react';
import { useQuiz } from '../QuizContext';
import { ADDONS, getAddonsByCategory, ADDON_CATEGORIES, type Addon } from '../data/quizData';
import { formatCurrency, trackQuizEvent } from '@/lib/quizUtils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Switch } from '@/components/ui/switch';

interface StepAddonsProps {
  category: 'conteudo' | 'func_basicas' | 'func_avancadas' | 'seo' | 'automacao' | 'backend';
}

export function StepAddons({ category }: StepAddonsProps) {
  const { state, setAddon } = useQuiz();
  const categoryInfo = ADDON_CATEGORIES[category];
  const addons = getAddonsByCategory(category);

  const handleToggle = (addon: Addon, checked: boolean) => {
    trackQuizEvent('orcamento_addon_alterado', { addon: addon.id, value: checked });
    setAddon(addon.id, checked);
  };

  const handleCounter = (addon: Addon, delta: number) => {
    const current = (state.addons[addon.id] as number) || 0;
    const newValue = Math.max(addon.min || 0, Math.min(addon.max || 10, current + delta));
    trackQuizEvent('orcamento_addon_alterado', { addon: addon.id, value: newValue });
    setAddon(addon.id, newValue);
  };

  const isIncluded = (addon: Addon) => addon.includedIn?.includes(state.plan || '');

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f06800]/10 text-[#f06800] rounded-full text-sm font-medium mb-3">
          <Sparkles className="w-4 h-4" />
          {categoryInfo.label}
        </div>
        <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2">
          {categoryInfo.description}
        </h3>
        <p className="text-muted-foreground text-sm">
          Selecione os recursos que deseja adicionar (opcional)
        </p>
      </div>

      <div className="space-y-3">
        {addons.map((addon, index) => {
          const isToggle = addon.type === 'toggle';
          const isCounter = addon.type === 'counter';
          const isActive = isToggle 
            ? state.addons[addon.id] === true 
            : (state.addons[addon.id] as number) > 0;
          const included = isIncluded(addon);
          const counterValue = (state.addons[addon.id] as number) || 0;

          return (
            <motion.div
              key={addon.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                included
                  ? 'border-green-200 bg-green-50/50'
                  : isActive
                  ? 'border-[#f06800] bg-[#f06800]/5'
                  : 'border-border bg-card hover:border-muted-foreground/30'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-foreground text-sm md:text-base">
                      {addon.label}
                    </h4>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button type="button" className="text-muted-foreground hover:text-foreground">
                            <Info className="w-3.5 h-3.5" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p>{addon.help}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    {included && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        <Check className="w-3 h-3" />
                        Incluso
                      </span>
                    )}
                  </div>
                  
                  {/* Pricing info */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {isToggle && addon.setup && !included && (
                      <span>{formatCurrency(addon.setup)}</span>
                    )}
                    {isToggle && addon.monthly && !included && (
                      <span className="text-xs">+{formatCurrency(addon.monthly)}/mês</span>
                    )}
                    {isCounter && addon.unit && !included && (
                      <span>{formatCurrency(addon.unit)} /unidade</span>
                    )}
                  </div>
                </div>

                {/* Toggle or Counter control */}
                {!included && (
                  <div className="shrink-0">
                    {isToggle && (
                      <Switch
                        checked={state.addons[addon.id] === true}
                        onCheckedChange={(checked) => handleToggle(addon, checked)}
                        className="data-[state=checked]:bg-[#f06800]"
                      />
                    )}
                    {isCounter && (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleCounter(addon, -1)}
                          disabled={counterValue <= (addon.min || 0)}
                          className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-muted-foreground/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium text-foreground">
                          {counterValue}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCounter(addon, 1)}
                          disabled={counterValue >= (addon.max || 10)}
                          className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-muted-foreground/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
