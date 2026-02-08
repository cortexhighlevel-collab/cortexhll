import { motion } from 'framer-motion';
import { User, Mail, Phone, Building2, ArrowRight } from 'lucide-react';
import { useQuiz } from '../QuizContext';
import { Input } from '@/components/ui/input';

export function StepUserInfo() {
  const { state, setFormField, nextStep, canGoNext } = useQuiz();

  const handleContinue = () => {
    if (canGoNext) {
      nextStep();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && canGoNext) {
      e.preventDefault();
      handleContinue();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2">
          Vamos começar!
        </h3>
        <p className="text-muted-foreground text-sm md:text-base">
          Primeiro, nos conte um pouco sobre você
        </p>
      </div>

      <div className="space-y-4" onKeyDown={handleKeyDown}>
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
              className="pl-10 h-12"
              autoFocus
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
              className="pl-10 h-12"
            />
          </div>
        </motion.div>

        {/* Phone & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                className="pl-10 h-12"
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
                className="pl-10 h-12"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="pt-4"
      >
        <button
          type="button"
          onClick={handleContinue}
          disabled={!canGoNext}
          className={`w-full h-14 rounded-xl flex items-center justify-center gap-3 font-medium transition-all duration-300 ${
            canGoNext
              ? 'bg-[#f06800] text-white hover:bg-[#d95c00] shadow-[0_10px_40px_-10px_rgba(240,104,0,0.4)]'
              : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}
        >
          <span className="text-base">Continuar</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>

      <p className="text-center text-xs text-muted-foreground">
        Seus dados estão protegidos conforme nossa{' '}
        <a href="#" className="text-[#f06800] hover:underline">Política de Privacidade</a>
      </p>
    </div>
  );
}
