import { motion, AnimatePresence } from 'framer-motion';
import { Receipt, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useQuiz } from './QuizContext';
import { calculatePrice, formatCurrency } from '@/lib/quizUtils';
import { TRAFFIC_CONFIG } from './data/quizData';
import { useLanguage } from '@/contexts/LanguageContext';

interface QuizSummaryProps {
  className?: string;
  expanded?: boolean;
}

export function QuizSummary({ className = '', expanded: initialExpanded = false }: QuizSummaryProps) {
  const { state } = useQuiz();
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(initialExpanded);
  const price = calculatePrice(state);

  if (state.currentStep < 1) return null;

  if (state.service === 'trafego') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-muted/50 rounded-xl p-4 border border-border ${className}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Receipt className="w-4 h-4 text-[#f06800]" />
            <span className="text-sm font-medium text-foreground">{t('quiz.summary.title')}</span>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-[#f06800]">
              {formatCurrency(TRAFFIC_CONFIG.managementFee)}{t('quiz.recurring.month')}
            </div>
            <p className="text-xs text-muted-foreground">{t('quiz.summary.mediaInvestment')}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  const hasAddons = price.breakdown.addons.length > 0;
  const hasRecurring = price.breakdown.recurring.length > 0;
  const showDetails = hasAddons || hasRecurring;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-muted/50 rounded-xl border border-border overflow-hidden ${className}`}
    >
      <button
        type="button"
        onClick={() => showDetails && setIsExpanded(!isExpanded)}
        className={`w-full p-4 flex items-center justify-between ${showDetails ? 'cursor-pointer' : 'cursor-default'}`}
      >
        <div className="flex items-center gap-2">
          <Receipt className="w-4 h-4 text-[#f06800]" />
          <span className="text-sm font-medium text-foreground">{t('quiz.summary.title')}</span>
          {showDetails && (
            isExpanded ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            )
          )}
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-[#f06800]">
            {formatCurrency(price.setup)}
          </div>
          {price.monthly > 0 && (
            <p className="text-xs text-muted-foreground">
              + {formatCurrency(price.monthly)}{t('quiz.recurring.month')}
            </p>
          )}
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && showDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3 border-t border-border pt-3">
              {price.breakdown.plan && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{price.breakdown.plan.name}</span>
                  <span className="font-medium">{formatCurrency(price.breakdown.plan.value)}</span>
                </div>
              )}

              {hasAddons && (
                <div className="space-y-1">
                  {price.breakdown.addons.map((addon, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{addon.name}</span>
                      <span className="font-medium">
                        {addon.setup > 0 ? formatCurrency(addon.setup) : ''}
                        {addon.monthly > 0 && (
                          <span className="text-xs text-muted-foreground ml-1">
                            (+{formatCurrency(addon.monthly)}{t('quiz.recurring.month')})
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {hasRecurring && (
                <div className="space-y-1 pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground font-medium">{t('quiz.summary.monthly')}</p>
                  {price.breakdown.recurring.map((rec, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{rec.name}</span>
                      <span className="font-medium">{formatCurrency(rec.monthly)}{t('quiz.recurring.month')}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
