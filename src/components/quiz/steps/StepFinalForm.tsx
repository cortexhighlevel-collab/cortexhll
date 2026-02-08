import { motion } from 'framer-motion';
import { MessageSquare, ExternalLink } from 'lucide-react';
import { useQuiz } from '../QuizContext';
import { QuizSummary } from '../QuizSummary';
import { calculatePrice, generateWhatsAppMessage, getWhatsAppUrl, trackQuizEvent } from '@/lib/quizUtils';
import { Textarea } from '@/components/ui/textarea';

export function StepFinalForm() {
  const { state, setFormField } = useQuiz();
  const price = calculatePrice(state);

  // User info já foi preenchido no primeiro passo
  const isValid = state.name.trim().length >= 2 && state.email.includes('@');

  const handleSubmit = () => {
    if (!isValid) return;
    
    trackQuizEvent('whatsapp_clique', { 
      setup: price.setup, 
      monthly: price.monthly,
      service: state.service
    });
    
    const message = generateWhatsAppMessage(state, price);
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-3">
        <h3 className="text-lg md:text-xl font-medium text-foreground mb-1">
          Tudo pronto! 🎉
        </h3>
        <p className="text-muted-foreground text-sm">
          Confira o resumo e envie seu orçamento
        </p>
      </div>

      {/* Summary - expanded by default */}
      <QuizSummary expanded className="mb-3" />

      {/* User info summary */}
      <div className="bg-muted/30 rounded-lg p-3 border border-border">
        <p className="text-xs text-muted-foreground mb-1">Seus dados:</p>
        <div className="space-y-0.5 text-sm">
          <p className="font-medium text-foreground">{state.name}</p>
          <p className="text-muted-foreground text-xs">{state.email} • {state.phone}</p>
          {state.company && <p className="text-muted-foreground text-xs">{state.company}</p>}
        </div>
      </div>

      {/* Optional message */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <label className="block text-xs font-medium text-foreground mb-1.5">
          Mensagem adicional (opcional)
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
          <Textarea
            value={state.message}
            onChange={(e) => setFormField('message', e.target.value)}
            placeholder="Algo mais que gostaria de compartilhar?"
            className="pl-9 min-h-[60px] resize-none text-sm"
            maxLength={500}
          />
        </div>
      </motion.div>

      {/* Submit button */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isValid}
          className={`w-full h-12 rounded-xl flex items-center justify-center gap-2 text-white font-medium transition-all duration-300 ${
            isValid
              ? 'bg-[#25D366] hover:bg-[#20BD5A] shadow-[0_10px_40px_-10px_rgba(37,211,102,0.4)]'
              : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="text-sm font-semibold uppercase tracking-wider">
            Enviar via WhatsApp
          </span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </motion.div>

      <p className="text-center text-xs text-muted-foreground">
        Ao enviar, você concorda com nossa{' '}
        <a href="#" className="text-[#f06800] hover:underline">Política de Privacidade</a>
      </p>
    </div>
  );
}
