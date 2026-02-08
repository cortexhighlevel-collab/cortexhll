import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useQuiz } from './QuizContext';

interface QuizProgressProps {
  className?: string;
}

export function QuizProgress({ className = '' }: QuizProgressProps) {
  const { state, totalSteps, goToStep } = useQuiz();
  const { currentStep, service } = state;

  // Get step labels based on service
  const getStepLabels = () => {
    if (service === 'sites') {
      return [
        'Serviço',
        'Plano',
        'Conteúdo',
        'Básicas',
        'Avançadas',
        'SEO',
        'Automação',
        'Backend',
        'Recorrentes',
        'Finalizar'
      ];
    }
    if (service === 'trafego') {
      return [
        'Serviço',
        'Plataformas',
        'Investimento',
        'Objetivos',
        'Segmento',
        'Finalizar'
      ];
    }
    return ['Serviço'];
  };

  const stepLabels = getStepLabels();
  const displayedSteps = stepLabels.slice(0, totalSteps + 1);

  return (
    <div className={`w-full ${className}`}>
      {/* Progress bar */}
      <div className="relative h-1 bg-muted rounded-full overflow-hidden mb-4">
        <motion.div
          className="absolute inset-y-0 left-0 bg-[#f06800] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep) / totalSteps) * 100}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      {/* Step indicators - only show on desktop or if few steps */}
      <div className="hidden md:flex items-center justify-between gap-1">
        {displayedSteps.map((label, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isClickable = index < currentStep;

          return (
            <button
              key={index}
              type="button"
              onClick={() => isClickable && goToStep(index)}
              disabled={!isClickable}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                isClickable ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                  isCompleted
                    ? 'bg-green-500 text-white'
                    : isActive
                    ? 'bg-[#f06800] text-white ring-2 ring-[#f06800]/30 ring-offset-2'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {isCompleted ? <Check className="w-3.5 h-3.5" /> : index + 1}
              </div>
              <span
                className={`text-[10px] font-medium transition-colors duration-300 ${
                  isActive ? 'text-[#f06800]' : isCompleted ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile: Simple step counter */}
      <div className="flex md:hidden items-center justify-between text-sm">
        <span className="text-muted-foreground">
          Passo {currentStep + 1} de {totalSteps + 1}
        </span>
        <span className="font-medium text-foreground">
          {displayedSteps[currentStep] || 'Serviço'}
        </span>
      </div>
    </div>
  );
}
