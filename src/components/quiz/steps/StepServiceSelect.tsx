import { motion } from 'framer-motion';
import { Globe, Target, ArrowRight } from 'lucide-react';
import { useQuiz, type ServiceType } from '../QuizContext';
import { trackQuizEvent } from '@/lib/quizUtils';

const services = [
  {
    id: 'sites' as ServiceType,
    label: 'Criação de Sites',
    description: 'Landing pages, sites institucionais e sistemas web',
    icon: Globe,
    steps: '9 passos',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'trafego' as ServiceType,
    label: 'Gestão de Tráfego',
    description: 'Google Ads, Meta Ads, TikTok e mais',
    icon: Target,
    steps: '5 passos',
    color: 'from-orange-500 to-red-600'
  }
];

export function StepServiceSelect() {
  const { state, setService, nextStep } = useQuiz();

  const handleSelect = (service: ServiceType) => {
    trackQuizEvent('orcamento_servico_selecionado', { service });
    setService(service);
    nextStep();
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <p className="text-sm text-[#f06800] font-medium mb-2">
          Olá, {state.name.split(' ')[0]}! 👋
        </p>
        <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2">
          Qual serviço você precisa?
        </h3>
        <p className="text-muted-foreground text-sm">
          Selecione para continuar com o orçamento
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {services.map((service, index) => (
          <motion.button
            key={service.id}
            type="button"
            onClick={() => handleSelect(service.id)}
            className="group relative p-5 md:p-6 rounded-2xl border-2 border-border bg-card hover:border-[#f06800] transition-all duration-300 text-left overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            <div className="relative z-10 flex items-center gap-4">
              {/* Icon */}
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg shrink-0`}>
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="text-base md:text-lg font-semibold text-foreground mb-1 group-hover:text-[#f06800] transition-colors">
                  {service.label}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
                <span className="inline-flex items-center px-2 py-0.5 mt-2 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                  {service.steps}
                </span>
              </div>

              {/* Arrow */}
              <div className="w-10 h-10 rounded-full bg-muted group-hover:bg-[#f06800] flex items-center justify-center transition-colors shrink-0">
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
