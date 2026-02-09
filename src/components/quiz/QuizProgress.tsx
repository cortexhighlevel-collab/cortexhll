import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useQuiz } from './QuizContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface QuizProgressProps {
  className?: string;
}

export function QuizProgress({ className = '' }: QuizProgressProps) {
  const { state, totalSteps, goToStep } = useQuiz();
  const { t } = useLanguage();
  const { currentStep, service } = state;

  const getStepLabels = (): string[] => {
    const common = [t('quiz.progress.info'), t('quiz.progress.service')];
    
    if (service === 'sites') {
      return [
        ...common,
        t('quiz.progress.plan'),
        t('quiz.progress.content'),
        t('quiz.progress.basic'),
        t('quiz.progress.advanced'),
        t('quiz.progress.seo'),
        t('quiz.progress.automation'),
        t('quiz.progress.backend'),
        t('quiz.progress.recurring'),
        t('quiz.progress.submit')
      ];
    }
    if (service === 'trafego') {
      return [
        ...common,
        t('quiz.progress.platforms'),
        t('quiz.progress.investmentLabel'),
        t('quiz.progress.objectives'),
        t('quiz.progress.segment'),
        t('quiz.progress.submit')
      ];
    }
    return common;
  };

  const stepLabels = getStepLabels();
  const progress = ((currentStep) / totalSteps) * 100;

  return (
    <div className={`w-full ${className}`}>
      <div className="relative h-1.5 bg-muted rounded-full overflow-hidden mb-3">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#f06800] to-[#ff8c42] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          {t('quiz.progress.step').replace('{current}', String(currentStep + 1)).replace('{total}', String(totalSteps + 1))}
        </span>
        <span className="font-medium text-foreground">
          {stepLabels[currentStep] || ''}
        </span>
      </div>

      {service && currentStep > 1 && (
        <div className="hidden md:flex items-center justify-center gap-1.5 mt-3">
          {stepLabels.slice(2).map((label, index) => {
            const stepIndex = index + 2;
            const isActive = stepIndex === currentStep;
            const isCompleted = stepIndex < currentStep;
            const isClickable = stepIndex < currentStep;

            return (
              <button
                key={stepIndex}
                type="button"
                onClick={() => isClickable && goToStep(stepIndex)}
                disabled={!isClickable}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isCompleted
                    ? 'bg-green-500 w-2.5 h-2.5'
                    : isActive
                    ? 'bg-[#f06800] w-3 h-3 ring-2 ring-[#f06800]/30 ring-offset-1 ring-offset-background'
                    : 'bg-muted'
                } ${isClickable ? 'cursor-pointer hover:scale-125' : 'cursor-default'}`}
                title={label}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
