import { motion } from 'framer-motion';
import { Check, Plus, Minus, Info, Sparkles } from 'lucide-react';
import { useQuiz } from '../QuizContext';
import { ADDONS, getAddonsByCategory, ADDON_CATEGORIES, type Addon } from '../data/quizData';
import { formatCurrency, trackQuizEvent } from '@/lib/quizUtils';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/contexts/LanguageContext';

interface StepAddonsProps {
  category: 'conteudo' | 'func_basicas' | 'func_avancadas' | 'seo' | 'automacao' | 'backend';
}

export function StepAddons({ category }: StepAddonsProps) {
  const { state, setAddon } = useQuiz();
  const { t } = useLanguage();
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
    <div className="space-y-3">
      <div className="text-center mb-3">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#f06800]/10 text-[#f06800] rounded-full text-xs font-medium mb-2">
          <Sparkles className="w-3 h-3" />
          {categoryInfo.label}
        </div>
        <h3 className="text-lg md:text-xl font-medium text-foreground mb-1">
          {categoryInfo.description}
        </h3>
        <p className="text-muted-foreground text-xs">
          {t('quiz.addons.subtitle')}
        </p>
      </div>

      <div className="space-y-2">
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
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                included
                  ? 'border-green-200 bg-green-50/50'
                  : isActive
                  ? 'border-[#f06800] bg-[#f06800]/5'
                  : 'border-border bg-card hover:border-muted-foreground/30'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-medium text-foreground text-xs md:text-sm">
                      {addon.label}
                    </h4>
                    <span 
                      className="text-muted-foreground cursor-help" 
                      title={addon.help}
                    >
                      <Info className="w-3 h-3" />
                    </span>
                    {included && (
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        <Check className="w-2.5 h-2.5" />
                        {t('quiz.addons.included')}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    {isToggle && addon.setup && !included && (
                      <span>{formatCurrency(addon.setup)}</span>
                    )}
                    {isToggle && addon.monthly && !included && (
                      <span>+{formatCurrency(addon.monthly)}{t('quiz.recurring.month')}</span>
                    )}
                    {isCounter && addon.unit && !included && (
                      <span>{formatCurrency(addon.unit)} /un</span>
                    )}
                  </div>
                </div>

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
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleCounter(addon, -1)}
                          disabled={counterValue <= (addon.min || 0)}
                          className="w-7 h-7 rounded-md bg-muted flex items-center justify-center hover:bg-muted-foreground/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center font-medium text-foreground text-sm">
                          {counterValue}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCounter(addon, 1)}
                          disabled={counterValue >= (addon.max || 10)}
                          className="w-7 h-7 rounded-md bg-muted flex items-center justify-center hover:bg-muted-foreground/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <Plus className="w-3 h-3" />
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
