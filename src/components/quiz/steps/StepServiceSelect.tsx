import { motion } from 'framer-motion';
import { Globe, Target } from 'lucide-react';
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
  const { setService } = useQuiz();

  const handleSelect = (service: ServiceType) => {
    trackQuizEvent('orcamento_servico_selecionado', { service });
    setService(service);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2">
          Qual serviço você precisa?
        </h3>
        <p className="text-muted-foreground text-sm md:text-base">
          Selecione o tipo de projeto para começar seu orçamento
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <motion.button
            key={service.id}
            type="button"
            onClick={() => handleSelect(service.id)}
            className="group relative p-6 rounded-2xl border-2 border-border bg-card hover:border-[#f06800] transition-all duration-300 text-left overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-[#f06800] transition-colors">
                {service.label}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {service.description}
              </p>

              {/* Steps badge */}
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                {service.steps}
              </span>
            </div>

            {/* Arrow indicator */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-[#f06800] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
