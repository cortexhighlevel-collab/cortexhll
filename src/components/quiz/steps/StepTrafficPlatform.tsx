import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useQuiz } from '../QuizContext';
import { TRAFFIC_CONFIG } from '../data/quizData';
import { trackQuizEvent } from '@/lib/quizUtils';

// Platform colors and icons
const platformInfo: Record<string, { color: string; bgColor: string }> = {
  'Google Ads': { color: 'text-blue-600', bgColor: 'bg-blue-100' },
  'Meta Ads': { color: 'text-blue-500', bgColor: 'bg-blue-50' },
  'TikTok Ads': { color: 'text-pink-600', bgColor: 'bg-pink-100' },
  'LinkedIn Ads': { color: 'text-sky-700', bgColor: 'bg-sky-100' }
};

export function StepTrafficPlatform() {
  const { state, togglePlatform } = useQuiz();

  const handleToggle = (platform: string) => {
    trackQuizEvent('orcamento_addon_alterado', { addon: platform, value: !state.platforms.includes(platform) });
    togglePlatform(platform);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2">
          Quais plataformas você quer anunciar?
        </h3>
        <p className="text-muted-foreground text-sm md:text-base">
          Selecione uma ou mais plataformas
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {TRAFFIC_CONFIG.platforms.map((platform, index) => {
          const isSelected = state.platforms.includes(platform);
          const info = platformInfo[platform] || { color: 'text-gray-600', bgColor: 'bg-gray-100' };

          return (
            <motion.button
              key={platform}
              type="button"
              onClick={() => handleToggle(platform)}
              className={`relative p-5 rounded-xl border-2 transition-all duration-300 text-left ${
                isSelected
                  ? 'border-[#f06800] bg-[#f06800]/5'
                  : 'border-border bg-card hover:border-muted-foreground/30'
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4">
                {/* Platform icon/badge */}
                <div className={`w-12 h-12 rounded-xl ${info.bgColor} ${info.color} flex items-center justify-center font-bold text-lg`}>
                  {platform.charAt(0)}
                </div>

                {/* Platform name */}
                <span className="font-medium text-foreground flex-1">
                  {platform}
                </span>

                {/* Selection indicator */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-6 h-6 rounded-full bg-[#f06800] flex items-center justify-center"
                  >
                    <Check className="w-4 h-4 text-white" />
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
          className="text-center text-sm text-muted-foreground"
        >
          {state.platforms.length} {state.platforms.length === 1 ? 'plataforma selecionada' : 'plataformas selecionadas'}
        </motion.p>
      )}
    </div>
  );
}
