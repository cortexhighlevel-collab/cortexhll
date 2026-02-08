import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useQuiz } from '../QuizContext';
import { TRAFFIC_CONFIG } from '../data/quizData';
import { trackQuizEvent } from '@/lib/quizUtils';

export function StepTrafficSegment() {
  const { state, setSegment, nextStep } = useQuiz();

  const handleSelect = (segment: string) => {
    trackQuizEvent('orcamento_addon_alterado', { addon: 'segment', value: segment });
    setSegment(segment);
    nextStep();
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2">
          Qual é o seu segmento?
        </h3>
        <p className="text-muted-foreground text-sm md:text-base">
          Nos ajuda a entender melhor seu negócio
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {TRAFFIC_CONFIG.segments.map((segment, index) => {
          const isSelected = state.segment === segment;

          return (
            <motion.button
              key={segment}
              type="button"
              onClick={() => handleSelect(segment)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left flex items-center justify-between ${
                isSelected
                  ? 'border-[#f06800] bg-[#f06800]/5'
                  : 'border-border bg-card hover:border-muted-foreground/30'
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium text-foreground">
                {segment}
              </span>

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
