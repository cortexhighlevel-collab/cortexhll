import { motion } from 'framer-motion';
import { User, Mail, Phone, Building2, MessageSquare, Send, ExternalLink } from 'lucide-react';
import { useQuiz } from '../QuizContext';
import { QuizSummary } from '../QuizSummary';
import { calculatePrice, generateWhatsAppMessage, getWhatsAppUrl, trackQuizEvent } from '@/lib/quizUtils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().trim().min(2, 'Nome muito curto').max(100),
  email: z.string().trim().email('Email inválido').max(255),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().max(500).optional()
});

export function StepFinalForm() {
  const { state, setFormField } = useQuiz();
  const price = calculatePrice(state);

  const isValid = (() => {
    try {
      formSchema.parse({
        name: state.name,
        email: state.email,
        phone: state.phone,
        company: state.company,
        message: state.message
      });
      return true;
    } catch {
      return false;
    }
  })();

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
    <div className="space-y-6">
      <div className="text-center mb-4">
        <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2">
          Finalize seu orçamento
        </h3>
        <p className="text-muted-foreground text-sm md:text-base">
          Preencha seus dados para enviar via WhatsApp
        </p>
      </div>

      {/* Summary */}
      <QuizSummary expanded className="mb-6" />

      {/* Form fields */}
      <div className="space-y-4">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block text-sm font-medium text-foreground mb-2">
            Nome completo <span className="text-[#f06800]">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              value={state.name}
              onChange={(e) => setFormField('name', e.target.value)}
              placeholder="Seu nome"
              className="pl-10"
              required
            />
          </div>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <label className="block text-sm font-medium text-foreground mb-2">
            E-mail <span className="text-[#f06800]">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="email"
              value={state.email}
              onChange={(e) => setFormField('email', e.target.value)}
              placeholder="seu@email.com"
              className="pl-10"
              required
            />
          </div>
        </motion.div>

        {/* Phone & Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-foreground mb-2">
              Telefone
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="tel"
                value={state.phone}
                onChange={(e) => setFormField('phone', e.target.value)}
                placeholder="(00) 00000-0000"
                className="pl-10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="block text-sm font-medium text-foreground mb-2">
              Empresa
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                value={state.company}
                onChange={(e) => setFormField('company', e.target.value)}
                placeholder="Nome da empresa"
                className="pl-10"
              />
            </div>
          </motion.div>
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-sm font-medium text-foreground mb-2">
            Mensagem adicional
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Textarea
              value={state.message}
              onChange={(e) => setFormField('message', e.target.value)}
              placeholder="Algo mais que gostaria de compartilhar?"
              className="pl-10 min-h-[100px] resize-none"
              maxLength={500}
            />
          </div>
        </motion.div>

        {/* Submit button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="pt-2"
        >
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isValid}
            className={`w-full h-14 rounded-xl flex items-center justify-center gap-3 text-white font-medium transition-all duration-300 ${
              isValid
                ? 'bg-[#25D366] hover:bg-[#20BD5A] shadow-[0_10px_40px_-10px_rgba(37,211,102,0.4)]'
                : 'bg-muted text-muted-foreground cursor-not-allowed'
            }`}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="text-lg uppercase tracking-wider">
              Enviar via WhatsApp
            </span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Privacy note */}
        <p className="text-center text-xs text-muted-foreground pt-2">
          Ao enviar, você concorda com nossa{' '}
          <a href="#" className="text-[#f06800] hover:underline">Política de Privacidade</a>
        </p>
      </div>
    </div>
  );
}
