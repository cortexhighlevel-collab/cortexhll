import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useQuiz } from './QuizContext';

interface QuizProgressProps {
  className?: string;
}

export function QuizProgress({ className = '' }: QuizProgressProps) {
  const { state, totalSteps, goToStep } = useQuiz();
  const { currentStep, service } = state;

  // Labels dos passos baseado no serviço
  const getStepLabels = (): string[] => {
    // Passos comuns: 0 = Info, 1 = Serviço
    const common = ['Info', 'Serviço'];
    
    if (service === 'sites') {
      return [
        ...common,
        'Plano',
        'Conteúdo',
        'Básicas',
        'Avançadas',
        'SEO',
        'Automação',
        'Backend',
        'Recorrentes',
        'Enviar'
      ];
    }
    if (service === 'trafego') {
      return [
        ...common,
        'Plataformas',
        'Investimento',
        'Objetivos',
        'Segmento',
        'Enviar'
      ];
    }
    return common;
  };

  const stepLabels = getStepLabels();
  
  // Progresso real baseado no step atual e total
  const progress = ((currentStep) / totalSteps) * 100;

  return (
    <div className={`w-full ${className}`}>
      {/* Progress bar */}
      <div className="relative h-1.5 bg-muted rounded-full overflow-hidden mb-3">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#f06800] to-[#ff8c42] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      {/* Step counter - mobile */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          Passo {currentStep + 1} de {totalSteps + 1}
        </span>
        <span className="font-medium text-foreground">
          {stepLabels[currentStep] || ''}
        </span>
      </div>

      {/* Step dots - desktop only, quando temos serviço definido */}
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
