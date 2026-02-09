import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useQuiz } from '../QuizContext';
import { TRAFFIC_CONFIG } from '../data/quizData';
import { trackQuizEvent } from '@/lib/quizUtils';
import { useLanguage } from '@/contexts/LanguageContext';

const platformInfo: Record<string, { color: string; bgColor: string }> = {
  'Google Ads': { color: 'text-blue-600', bgColor: 'bg-blue-100' },
  'Meta Ads': { color: 'text-blue-500', bgColor: 'bg-blue-50' },
  'TikTok Ads': { color: 'text-pink-600', bgColor: 'bg-pink-100' },
  'LinkedIn Ads': { color: 'text-sky-700', bgColor: 'bg-sky-100' }
};

export function StepTrafficPlatform() {
  const { state, togglePlatform } = useQuiz();
  const { t } = useLanguage();

  const handleToggle = (platform: string) => {
    trackQuizEvent('orcamento_addon_alterado', { addon: platform, value: !state.platforms.includes(platform) });
    togglePlatform(platform);
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-lg md:text-xl font-medium text-foreground mb-1">
          {t('quiz.traffic.platform.title')}
        </h3>
        <p className="text-muted-foreground text-sm">
          {t('quiz.traffic.platform.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-3">
        {TRAFFIC_CONFIG.platforms.map((platform, index) => {
          const isSelected = state.platforms.includes(platform);
          const info = platformInfo[platform] || { color: 'text-gray-600', bgColor: 'bg-gray-100' };

          return (
            <motion.button
              key={platform}
              type="button"
              onClick={() => handleToggle(platform)}
              className={`relative p-3 md:p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                isSelected
                  ? 'border-[#f06800] bg-[#f06800]/5'
                  : 'border-border bg-card hover:border-muted-foreground/30'
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${info.bgColor} ${info.color} flex items-center justify-center font-bold text-base md:text-lg`}>
                  {platform.charAt(0)}
                </div>
                <span className="font-medium text-foreground text-xs md:text-sm">
                  {platform}
                </span>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#f06800] flex items-center justify-center"
                  >
                    <Check className="w-3 h-3 text-white" />
                  </motion.div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {state.platforms.length > 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-xs text-muted-foreground"
        >
          {state.platforms.length} {state.platforms.length === 1 ? t('quiz.traffic.platform.selected1') : t('quiz.traffic.platform.selectedN')}
        </motion.p>
      )}
    </div>
  );
}
