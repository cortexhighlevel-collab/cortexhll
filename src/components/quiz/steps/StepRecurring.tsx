import { motion } from 'framer-motion';
import { Check, Server, Wrench } from 'lucide-react';
import { useQuiz } from '../QuizContext';
import { RECURRING, type RecurringService } from '../data/quizData';
import { formatCurrency, trackQuizEvent } from '@/lib/quizUtils';
import { useLanguage } from '@/contexts/LanguageContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  host_essencial: Server,
  host_performance: Server,
  manutencao_2h: Wrench
};

export function StepRecurring() {
  const { state, setRecurring } = useQuiz();
  const { t } = useLanguage();
  const services = Object.values(RECURRING);

  const handleToggle = (service: RecurringService) => {
    const newValue = !state.recurring[service.id];
    trackQuizEvent('orcamento_recorrente_alterado', { recurring: service.id, active: newValue });
    setRecurring(service.id, newValue);
  };

  const hostingServices = services.filter(s => s.id.startsWith('host_'));
  const otherServices = services.filter(s => !s.id.startsWith('host_'));

  return (
    <div className="space-y-4">
      <div className="text-center mb-3">
        <h3 className="text-lg md:text-xl font-medium text-foreground mb-1">
          {t('quiz.recurring.title')}
        </h3>
        <p className="text-muted-foreground text-sm">
          {t('quiz.recurring.subtitle')}
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-semibold text-foreground">{t('quiz.recurring.hosting')}</span>
          <span className="text-xs text-[#f06800] font-medium">{t('quiz.recurring.required')}</span>
        </div>
        {hostingServices.map((service, index) => {
          const isActive = state.recurring[service.id] === true;
          const Icon = iconMap[service.id] || Server;

          return (
            <motion.button
              key={service.id}
              type="button"
              onClick={() => handleToggle(service)}
              className={`w-full p-3 md:p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                isActive
                  ? 'border-[#f06800] bg-[#f06800]/5'
                  : 'border-border bg-card hover:border-muted-foreground/30'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  isActive ? 'bg-[#f06800] text-white' : 'bg-muted text-muted-foreground'
                } transition-colors`}>
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground text-sm">
                    {service.label}
                  </h4>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="text-xs text-muted-foreground">
                        {feature}{i < 2 ? ' •' : ''}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-base md:text-lg font-bold text-[#f06800]">
                    {formatCurrency(service.monthly)}
                  </div>
                  <p className="text-xs text-muted-foreground">{t('quiz.recurring.month')}</p>
                </div>
                {isActive && (
                  <div className="w-5 h-5 rounded-full bg-[#f06800] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="space-y-2 pt-1">
        <span className="text-sm font-semibold text-foreground">{t('quiz.recurring.maintenance')}</span>
        {otherServices.map((service, index) => {
          const isActive = state.recurring[service.id] === true;
          const Icon = iconMap[service.id] || Wrench;

          return (
            <motion.button
              key={service.id}
              type="button"
              onClick={() => handleToggle(service)}
              className={`w-full p-3 md:p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                isActive
                  ? 'border-[#f06800] bg-[#f06800]/5'
                  : 'border-border bg-card hover:border-muted-foreground/30'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (hostingServices.length + index) * 0.05 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  isActive ? 'bg-[#f06800] text-white' : 'bg-muted text-muted-foreground'
                } transition-colors`}>
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground text-sm">
                    {service.label}
                  </h4>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="text-xs text-muted-foreground">
                        {feature}{i < 2 ? ' •' : ''}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-base md:text-lg font-bold text-[#f06800]">
                    {formatCurrency(service.monthly)}
                  </div>
                  <p className="text-xs text-muted-foreground">{t('quiz.recurring.month')}</p>
                </div>
                {isActive && (
                  <div className="w-5 h-5 rounded-full bg-[#f06800] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
