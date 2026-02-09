import { motion } from 'framer-motion';
import { User, Mail, Phone, Building2, ArrowRight } from 'lucide-react';
import { useQuiz } from '../QuizContext';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

// Formatar telefone brasileiro: (00) 00000-0000
const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, '').slice(0, 11);
  if (numbers.length <= 2) return numbers;
  if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
};

// Validar email
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export function StepUserInfo() {
  const { state, setFormField, nextStep, canGoNext } = useQuiz();
  const [emailError, setEmailError] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormField('phone', formatted);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormField('email', value);
    if (value && !isValidEmail(value)) {
      setEmailError('Digite um e-mail válido');
    } else {
      setEmailError('');
    }
  };

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
    <div className="space-y-4 px-1">
      <div className="text-center mb-4">
        <h3 className="text-lg md:text-xl font-medium text-foreground mb-1">
          Vamos começar!
        </h3>
        <p className="text-muted-foreground text-sm">
          Primeiro, nos conte um pouco sobre você
        </p>
      </div>

      <div className="space-y-4 -mx-1 px-1" onKeyDown={handleKeyDown}>
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
              className="pl-10 h-11"
              
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
              onChange={handleEmailChange}
              placeholder="seu@email.com"
              className={`pl-10 h-11 ${emailError ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
          </div>
          {emailError && (
            <p className="text-xs text-red-500 mt-1">{emailError}</p>
          )}
        </motion.div>

        {/* Phone & Company */}
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-foreground mb-2">
              Telefone <span className="text-[#f06800]">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
              <Input
                type="tel"
                value={state.phone}
                onChange={handlePhoneChange}
                placeholder="(00) 00000-0000"
                className="pl-9 md:pl-10 h-11 text-sm"
                maxLength={16}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="block text-sm font-medium text-foreground mb-2">
              Empresa <span className="text-[#f06800]">*</span>
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
              <Input
                type="text"
                value={state.company}
                onChange={(e) => setFormField('company', e.target.value)}
                placeholder="Empresa"
                className="pl-9 md:pl-10 h-11 text-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Continue button - estilo CTA premium */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: canGoNext ? 1 : 0.5, 
          y: 0,
          scale: canGoNext ? 1 : 0.98
        }}
        transition={{ delay: 0.3, duration: 0.2 }}
        className="pt-2"
      >
        <div 
          className={`btn-cta-wrapper w-full ${!canGoNext ? 'pointer-events-none opacity-50' : ''}`}
          onClick={handleContinue}
        >
          <span className="btn-cta w-full justify-center">
            <span className="btn-cta-text">Continuar</span>
            <span className="btn-cta-icon">
              <svg width="20" height="20" viewBox="0 0 40 41">
                <path d="M 20 40.549 C 8.954 40.549 0 31.594 0 20.549 L 0 20.549 C 0 9.503 8.954 0.549 20 0.549 L 20 0.549 C 31.046 0.549 40 9.503 40 20.549 L 40 20.549 C 40 31.594 31.046 40.549 20 40.549 Z" fill="rgb(255,255,255)"></path>
                <path d="M 25.833 20.549 L 14.167 20.549" fill="transparent" strokeWidth="1.5" stroke="rgb(50,50,50)" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M 21.667 24.715 L 25.833 20.549" fill="transparent" strokeWidth="1.5" stroke="rgb(50,50,50)" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M 21.667 16.382 L 25.833 20.549" fill="transparent" strokeWidth="1.5" stroke="rgb(50,50,50)" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
          </span>
        </div>
      </motion.div>

      <p className="text-center text-xs text-muted-foreground">
        Seus dados estão protegidos conforme nossa{' '}
        <a href="#" className="text-[#f06800] hover:underline">Política de Privacidade</a>
      </p>
    </div>
  );
}
