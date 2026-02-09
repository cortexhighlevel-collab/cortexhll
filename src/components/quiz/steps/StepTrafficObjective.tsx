import { motion } from 'framer-motion';
import { Check, Target, ShoppingCart, Eye, MousePointer, Smartphone } from 'lucide-react';
import { useQuiz } from '../QuizContext';
import { TRAFFIC_CONFIG } from '../data/quizData';
import { trackQuizEvent } from '@/lib/quizUtils';
import { useLanguage } from '@/contexts/LanguageContext';

const objectiveIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Geração de Leads': Target,
  'Vendas E-commerce': ShoppingCart,
  'Reconhecimento de Marca': Eye,
  'Tráfego para Site': MousePointer,
  'Instalação de App': Smartphone
};

export function StepTrafficObjective() {
  const { state, setObjective, nextStep } = useQuiz();
  const { t } = useLanguage();

  const handleSelect = (objective: string) => {
    trackQuizEvent('orcamento_addon_alterado', { addon: 'objective', value: objective });
    setObjective(objective);
    nextStep();
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-lg md:text-xl font-medium text-foreground mb-1">
          {t('quiz.traffic.objective.title')}
        </h3>
        <p className="text-muted-foreground text-sm">
          {t('quiz.traffic.objective.subtitle')}
        </p>
      </div>

      <div className="space-y-2">
        {TRAFFIC_CONFIG.objectives.map((objective, index) => {
          const isSelected = state.objective === objective;
          const Icon = objectiveIcons[objective] || Target;

          return (
            <motion.button
              key={objective}
              type="button"
              onClick={() => handleSelect(objective)}
              className={`w-full p-3 md:p-4 rounded-xl border-2 transition-all duration-300 text-left flex items-center justify-between ${
                isSelected
                  ? 'border-[#f06800] bg-[#f06800]/5'
                  : 'border-border bg-card hover:border-muted-foreground/30'
              }`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${
                  isSelected ? 'bg-[#f06800] text-white' : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="font-medium text-foreground text-sm md:text-base">
                  {objective}
                </span>
              </div>

              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-5 h-5 rounded-full bg-[#f06800] flex items-center justify-center"
                >
                  <Check className="w-3 h-3 text-white" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
