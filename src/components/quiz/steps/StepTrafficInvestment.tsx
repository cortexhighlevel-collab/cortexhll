import { motion } from 'framer-motion';
import { Check, DollarSign } from 'lucide-react';
import { useQuiz } from '../QuizContext';
import { TRAFFIC_CONFIG } from '../data/quizData';
import { trackQuizEvent } from '@/lib/quizUtils';

export function StepTrafficInvestment() {
  const { state, setInvestment, nextStep } = useQuiz();

  const handleSelect = (range: string) => {
    trackQuizEvent('orcamento_addon_alterado', { addon: 'investment', value: range });
    setInvestment(range);
    nextStep();
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2">
          Qual seu investimento mensal em mídia?
        </h3>
        <p className="text-muted-foreground text-sm md:text-base">
          Valor a ser investido diretamente nas plataformas de anúncios
        </p>
      </div>

      <div className="space-y-3">
        {TRAFFIC_CONFIG.investmentRanges.map((range, index) => {
          const isSelected = state.investment === range.label;

          return (
            <motion.button
              key={range.label}
              type="button"
              onClick={() => handleSelect(range.label)}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left flex items-center justify-between ${
                isSelected
                  ? 'border-[#f06800] bg-[#f06800]/5'
                  : 'border-border bg-card hover:border-muted-foreground/30'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isSelected ? 'bg-[#f06800] text-white' : 'bg-muted text-muted-foreground'
                }`}>
                  <DollarSign className="w-5 h-5" />
                </div>
                <span className="font-medium text-foreground">
                  {range.label}
                </span>
              </div>

              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-6 h-6 rounded-full bg-[#f06800] flex items-center justify-center"
                >
                  <Check className="w-4 h-4 text-white" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Este valor é pago diretamente às plataformas (Google, Meta, etc.)
      </p>
    </div>
  );
}
