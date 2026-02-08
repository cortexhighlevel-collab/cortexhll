import { motion, AnimatePresence } from 'framer-motion';
import { Receipt } from 'lucide-react';
import { useQuiz } from './QuizContext';
import { calculatePrice, formatCurrency } from '@/lib/quizUtils';
import { TRAFFIC_CONFIG } from './data/quizData';

interface FloatingSummaryProps {
  className?: string;
}

export function FloatingSummary({ className = '' }: FloatingSummaryProps) {
  const { state } = useQuiz();
  const price = calculatePrice(state);

  // Mostrar apenas quando temos um serviço selecionado e estamos após o step 2
  const shouldShow = state.service !== null && state.currentStep >= 2;

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className={`bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-2xl ${className}`}
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-[#f06800]/10 flex items-center justify-center">
            <Receipt className="w-4 h-4 text-[#f06800]" />
          </div>
          <span className="font-medium text-gray-900">Seu Orçamento</span>
        </div>

        {/* Values */}
        {state.service === 'sites' ? (
          <div className="space-y-3">
            {/* Setup */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Setup</p>
              <motion.p 
                key={price.setup}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="text-3xl font-bold text-gray-900"
              >
                {formatCurrency(price.setup)}
              </motion.p>
            </div>
            
            {/* Monthly */}
            {price.monthly > 0 && (
              <div className="pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Mensal</p>
                <motion.p 
                  key={price.monthly}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-xl font-semibold text-[#f06800]"
                >
                  {formatCurrency(price.monthly)}/mês
                </motion.p>
              </div>
            )}

            {/* Plan info */}
            {price.breakdown.plan && (
              <div className="pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-500">{price.breakdown.plan.name}</p>
                {price.breakdown.addons.length > 0 && (
                  <p className="text-xs text-gray-400 mt-1">
                    +{price.breakdown.addons.length} addon{price.breakdown.addons.length > 1 ? 's' : ''}
                  </p>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {/* Gestão */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Gestão Mensal</p>
              <p className="text-3xl font-bold text-gray-900">
                {formatCurrency(TRAFFIC_CONFIG.managementFee)}
              </p>
              <p className="text-xs text-gray-400">/mês</p>
            </div>
            
            {/* Platforms */}
            {state.platforms.length > 0 && (
              <div className="pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  {state.platforms.length} plataforma{state.platforms.length > 1 ? 's' : ''}
                </p>
              </div>
            )}
            
            {/* Investment */}
            {state.investment && (
              <div className="pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-500">Investimento:</p>
                <p className="text-sm font-medium text-[#f06800]">{state.investment}</p>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
