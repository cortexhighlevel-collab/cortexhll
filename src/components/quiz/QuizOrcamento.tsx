import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { QuizProvider, useQuiz } from './QuizContext';
import { QuizProgress } from './QuizProgress';
import { StepUserInfo } from './steps/StepUserInfo';
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
    x: direction > 0 ? 40 : -40,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: 'easeOut'
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 40 : -40,
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

  /*
   * FLUXO REORGANIZADO:
   * Passo 0: Dados do usuário
   * Passo 1: Escolha do serviço
   * Sites: 2-10 (Plano, Addons x6, Recorrentes, Final)
   * Tráfego: 2-6 (Plataformas, Investimento, Objetivos, Segmento, Final)
   */
  const renderStep = () => {
    // Passo 0: Dados do usuário (primeiro!)
    if (currentStep === 0) {
      return <StepUserInfo />;
    }

    // Passo 1: Escolha do serviço
    if (currentStep === 1) {
      return <StepServiceSelect />;
    }

    // Sites path (passos 2-10)
    if (service === 'sites') {
      switch (currentStep) {
        case 2: return <StepPlanSelect />;
        case 3: return <StepAddons category="conteudo" />;
        case 4: return <StepAddons category="func_basicas" />;
        case 5: return <StepAddons category="func_avancadas" />;
        case 6: return <StepAddons category="seo" />;
        case 7: return <StepAddons category="automacao" />;
        case 8: return <StepAddons category="backend" />;
        case 9: return <StepRecurring />;
        case 10: return <StepFinalForm />;
        default: return <StepFinalForm />;
      }
    }

    // Traffic path (passos 2-6)
    if (service === 'trafego') {
      switch (currentStep) {
        case 2: return <StepTrafficPlatform />;
        case 3: return <StepTrafficInvestment />;
        case 4: return <StepTrafficObjective />;
        case 5: return <StepTrafficSegment />;
        case 6: return <StepFinalForm />;
        default: return <StepFinalForm />;
      }
    }

    return <StepUserInfo />;
  };

  // Determinar se é o último passo (não mostrar navegação)
  const isLastStep = (service === 'sites' && currentStep === 10) || 
                     (service === 'trafego' && currentStep === 6);
  
  // Não mostrar navegação no step 0 (tem botão próprio) nem no último
  const showNavigation = currentStep > 0 && !isLastStep;

  return (
    <div className="flex flex-col h-full">
      {/* Progress - só mostra depois do step 0 */}
      {currentStep > 0 && <QuizProgress className="mb-4 md:mb-6" />}

      {/* Step content */}
      <div className="flex-1 overflow-y-auto min-h-0 pb-2">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      {showNavigation && (
        <div className="flex gap-3 pt-4 border-t border-border shrink-0">
          {canGoBack && (
            <button
              type="button"
              onClick={() => {
                trackQuizEvent('orcamento_passo_voltar', { step: currentStep });
                prevStep();
              }}
              className="h-11 px-5 rounded-xl border border-border text-foreground flex items-center justify-center gap-2 hover:bg-muted transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">Voltar</span>
            </button>
          )}
          <button
            type="button"
            onClick={nextStep}
            disabled={!canGoNext}
            className={`flex-1 h-11 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
              canGoNext
                ? 'bg-[#f06800] text-white hover:bg-[#d95c00] shadow-[0_8px_30px_-8px_rgba(240,104,0,0.4)]'
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
