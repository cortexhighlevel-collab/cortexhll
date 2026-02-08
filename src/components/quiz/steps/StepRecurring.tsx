import { motion } from 'framer-motion';
import { Check, Server, Wrench, Info } from 'lucide-react';
import { useQuiz } from '../QuizContext';
import { RECURRING, type RecurringService } from '../data/quizData';
import { formatCurrency, trackQuizEvent } from '@/lib/quizUtils';


const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  host_essencial: Server,
  host_performance: Server,
  manutencao_2h: Wrench
};

export function StepRecurring() {
  const { state, setRecurring } = useQuiz();
  const services = Object.values(RECURRING);

  const handleToggle = (service: RecurringService) => {
    const newValue = !state.recurring[service.id];
    trackQuizEvent('orcamento_recorrente_alterado', { recurring: service.id, active: newValue });
    setRecurring(service.id, newValue);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2">
          Serviços Mensais
        </h3>
        <p className="text-muted-foreground text-sm md:text-base">
          Adicione serviços contínuos para manter seu site sempre atualizado
        </p>
      </div>

      <div className="space-y-4">
        {services.map((service, index) => {
          const isActive = state.recurring[service.id] === true;
          const Icon = iconMap[service.id] || Server;

          return (
            <motion.button
              key={service.id}
              type="button"
              onClick={() => handleToggle(service)}
              className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
                isActive
                  ? 'border-[#f06800] bg-[#f06800]/5'
                  : 'border-border bg-card hover:border-muted-foreground/30'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  isActive ? 'bg-[#f06800] text-white' : 'bg-muted text-muted-foreground'
                } transition-colors`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-foreground">
                      {service.label}
                    </h4>
                    <span className="text-muted-foreground" title={service.help}>
                      <Info className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        <Check className="w-3 h-3" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Selection */}
                <div className="text-right shrink-0">
                  <div className="text-xl font-bold text-[#f06800]">
                    {formatCurrency(service.monthly)}
                  </div>
                  <p className="text-xs text-muted-foreground">/mês</p>
                  
                  {isActive && (
                    <motion.div
                      className="mt-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-[#f06800] flex items-center justify-center ml-auto">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Estes serviços são opcionais e podem ser adicionados a qualquer momento
      </p>
    </div>
  );
}
