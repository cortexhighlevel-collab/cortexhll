import { motion } from 'framer-motion';
import { Globe, Target, ArrowRight } from 'lucide-react';
import { useQuiz, type ServiceType } from '../QuizContext';
import { trackQuizEvent } from '@/lib/quizUtils';
import { useLanguage } from '@/contexts/LanguageContext';

export function StepServiceSelect() {
  const { state, setService, nextStep } = useQuiz();
  const { t } = useLanguage();

  const services = [
    {
      id: 'sites' as ServiceType,
      label: t('quiz.service.sites'),
      description: t('quiz.service.sites.desc'),
      icon: Globe,
      steps: t('quiz.service.sites.steps'),
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'trafego' as ServiceType,
      label: t('quiz.service.traffic'),
      description: t('quiz.service.traffic.desc'),
      icon: Target,
      steps: t('quiz.service.traffic.steps'),
      color: 'from-orange-500 to-red-600'
    }
  ];

  const handleSelect = (service: ServiceType) => {
    trackQuizEvent('orcamento_servico_selecionado', { service });
    setService(service);
    nextStep();
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <p className="text-sm text-[#f06800] font-medium mb-1">
          {t('quiz.service.greeting').replace('{name}', state.name.split(' ')[0])}
        </p>
        <h3 className="text-lg md:text-xl font-medium text-foreground mb-1">
          {t('quiz.service.title')}
        </h3>
        <p className="text-muted-foreground text-sm">
          {t('quiz.service.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {services.map((service, index) => (
          <motion.button
            key={service.id}
            type="button"
            onClick={() => handleSelect(service.id)}
            className="group relative p-4 md:p-5 rounded-xl border-2 border-border bg-card hover:border-[#f06800] transition-all duration-300 text-left overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            <div className="relative z-10 flex items-center gap-3">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg shrink-0`}>
                <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm md:text-base font-semibold text-foreground group-hover:text-[#f06800] transition-colors">
                  {service.label}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {service.description}
                </p>
                <span className="inline-flex items-center px-1.5 py-0.5 mt-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                  {service.steps}
                </span>
              </div>

              <div className="w-8 h-8 rounded-full bg-muted group-hover:bg-[#f06800] flex items-center justify-center transition-colors shrink-0">
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
