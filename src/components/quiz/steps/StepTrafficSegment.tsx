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
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-lg md:text-xl font-medium text-foreground mb-1">
          Qual é o seu segmento?
        </h3>
        <p className="text-muted-foreground text-sm">
          Nos ajuda a entender melhor seu negócio
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {TRAFFIC_CONFIG.segments.map((segment, index) => {
          const isSelected = state.segment === segment;

          return (
            <motion.button
              key={segment}
              type="button"
              onClick={() => handleSelect(segment)}
              className={`p-3 rounded-xl border-2 transition-all duration-300 text-center relative ${
                isSelected
                  ? 'border-[#f06800] bg-[#f06800]/5'
                  : 'border-border bg-card hover:border-muted-foreground/30'
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium text-foreground text-xs md:text-sm">
                {segment}
              </span>

              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#f06800] flex items-center justify-center"
                >
                  <Check className="w-2.5 h-2.5 text-white" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
