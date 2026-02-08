import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { QuizProvider, useQuiz } from './QuizContext';
import { QuizProgress } from './QuizProgress';
import { QuizSummary } from './QuizSummary';
import { StepServiceSelect } from './steps/StepServiceSelect';
import { StepPlanSelect } from './steps/StepPlanSelect';
import { StepAddons } from './steps/StepAddons';
import { StepRecurring } from './steps/StepRecurring';
import { StepTrafficPlatform } from './steps/StepTrafficPlatform';
import { StepTrafficInvestment } from './steps/StepTrafficInvestment';
import { StepTrafficObjective } from './steps/StepTrafficObjective';
import { StepTrafficSegment } from './steps/StepTrafficSegment';
import { StepFinalForm } from './steps/StepFinalForm';
import { trackQuizEvent } from '@/lib/quizUtils';
import { useEffect } from 'react';

const stepVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  })
};

function QuizContent() {
  const { state, nextStep, prevStep, canGoNext, canGoBack, totalSteps } = useQuiz();
  const { currentStep, direction, service } = state;

  // Track step changes
  useEffect(() => {
    if (currentStep > 0) {
      trackQuizEvent('orcamento_passo_avancar', { step: currentStep, service });
    }
  }, [currentStep, service]);

  // Determine which step component to render
  const renderStep = () => {
    // Step 0: Service selection
    if (currentStep === 0) {
      return <StepServiceSelect />;
    }

    // Sites path
    if (service === 'sites') {
      switch (currentStep) {
        case 1: return <StepPlanSelect />;
        case 2: return <StepAddons category="conteudo" />;
        case 3: return <StepAddons category="func_basicas" />;
        case 4: return <StepAddons category="func_avancadas" />;
        case 5: return <StepAddons category="seo" />;
        case 6: return <StepAddons category="automacao" />;
        case 7: return <StepAddons category="backend" />;
        case 8: return <StepRecurring />;
        case 9: return <StepFinalForm />;
        default: return <StepFinalForm />;
      }
    }

    // Traffic path
    if (service === 'trafego') {
      switch (currentStep) {
        case 1: return <StepTrafficPlatform />;
        case 2: return <StepTrafficInvestment />;
        case 3: return <StepTrafficObjective />;
        case 4: return <StepTrafficSegment />;
        case 5: return <StepFinalForm />;
        default: return <StepFinalForm />;
      }
    }

    return <StepServiceSelect />;
  };

  const isLastStep = (service === 'sites' && currentStep === 9) || 
                     (service === 'trafego' && currentStep === 5);
  const showNavigation = currentStep > 0 && !isLastStep;
  const showSummary = service === 'sites' && currentStep >= 2 && currentStep < 9;

  return (
    <div className="flex flex-col h-full">
      {/* Progress */}
      <QuizProgress className="mb-6" />

      {/* Summary - floating on larger screens */}
      {showSummary && (
        <div className="mb-4 lg:hidden">
          <QuizSummary />
        </div>
      )}

      {/* Step content */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="h-full"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      {showNavigation && (
        <div className="flex gap-3 mt-6 pt-4 border-t border-border">
          {canGoBack && (
            <button
              type="button"
              onClick={() => {
                trackQuizEvent('orcamento_passo_voltar', { step: currentStep });
                prevStep();
              }}
              className="flex-1 h-12 rounded-xl border border-border text-foreground flex items-center justify-center gap-2 hover:bg-muted transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Voltar</span>
            </button>
          )}
          <button
            type="button"
            onClick={nextStep}
            disabled={!canGoNext}
            className={`flex-1 h-12 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
              canGoNext
                ? 'bg-[#f06800] text-white hover:bg-[#d95c00] shadow-[0_10px_40px_-10px_rgba(240,104,0,0.4)]'
                : 'bg-muted text-muted-foreground cursor-not-allowed'
            }`}
          >
            <span className="text-sm font-medium">
              {currentStep === totalSteps - 1 ? 'Finalizar' : 'Próximo'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export function QuizOrcamento() {
  useEffect(() => {
    trackQuizEvent('orcamento_modal_aberto');
  }, []);

  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
}
