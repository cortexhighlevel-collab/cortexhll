 import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
 import { motion } from "framer-motion";
 
 const FAQSection = () => {
  const faqs = [
    {
      question: "Qual o prazo de entrega para criação de sites?",
      answer: "O prazo varia conforme o tipo de projeto: Landing Pages são entregues em até 7 dias úteis, Sites Institucionais entre 15 a 20 dias úteis, e projetos Enterprise + Intranet têm prazo personalizado conforme a complexidade. Todos os prazos começam a contar após a aprovação do briefing e recebimento dos materiais."
    },
    {
      question: "O que é o AI Referral Engine™ e como funciona o AEO?",
      answer: "O AI Referral Engine™ é nossa metodologia exclusiva de AEO (AI Engine Optimization) que posiciona sua marca como resposta definitiva nas buscas por IA como ChatGPT, Gemini e Claude. Diferente do SEO tradicional, otimizamos seu conteúdo para ser citado e recomendado por inteligências artificiais, gerando leads qualificados de forma orgânica."
    },
    {
      question: "Qual o investimento mínimo em tráfego pago?",
      answer: "Recomendamos um investimento mínimo de R$ 3.000/mês em mídia para campanhas efetivas. A gestão de tráfego inclui estratégia, criação de campanhas, otimização contínua e relatórios detalhados. O valor da gestão é calculado com base no investimento em mídia e objetivos do projeto."
    },
    {
      question: "Como funcionam as automações de marketing?",
      answer: "Implementamos automações inteligentes que conectam seu CRM, WhatsApp, e-mail marketing e redes sociais. Isso inclui sequências de nutrição de leads, chatbots com IA, agendamento automático e integrações personalizadas que eliminam tarefas manuais e aceleram seu funil de vendas."
    },
    {
      question: "Qual a diferença entre Landing Page, Site Institucional e Enterprise?",
      answer: "A Landing Page (R$ 3.500) é ideal para campanhas específicas com foco em conversão. O Site Institucional (R$ 6.399) apresenta sua empresa completa com múltiplas páginas e recursos avançados. O Enterprise + Intranet (a partir de R$ 8.000) atende empresas que precisam de sistemas internos, áreas de clientes e integrações complexas."
    },
    {
      question: "A hospedagem está inclusa no valor do site?",
      answer: "A hospedagem é contratada separadamente em planos mensais: Essencial (R$ 99/mês) para sites menores ou Performance (R$ 199/mês) para projetos que exigem mais velocidade e recursos. Ambos incluem SSL, backups automáticos e suporte técnico."
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer: "Sim! Oferecemos planos de manutenção mensal que incluem atualizações de segurança, pequenas alterações de conteúdo, monitoramento de performance e suporte prioritário. Para projetos de tráfego e automação, o acompanhamento contínuo já está incluso na gestão."
    },
    {
      question: "Como funciona o diagnóstico gratuito?",
      answer: "É uma sessão estratégica de 30 minutos onde analisamos sua presença digital atual, identificamos oportunidades de crescimento e apresentamos um plano de ação personalizado. Você recebe insights valiosos sobre sites, tráfego, automações e AEO — sem compromisso."
    }
  ];
 
   return (
    <section id="faq" className="w-full py-24 md:py-32 bg-[#0D0D0D] font-dm relative">
        {/* Gradient fade to hide dots from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0D0D0D] to-transparent z-0 -translate-y-full" />
        
        <div className="max-w-[900px] mx-auto px-5 md:px-12 relative z-10">
         {/* Header */}
         <motion.div 
           className="text-center mb-16"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
            transition={{ duration: 0.69 }}
         >
            <span className="inline-block text-white/80 text-xs font-medium uppercase tracking-[0.2em] mb-4">
             Dúvidas Frequentes
           </span>
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
             Perguntas Frequentes
           </h2>
         </motion.div>
 
         {/* FAQ Accordion */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
            transition={{ duration: 0.69, delay: 0.23 }}
         >
           <Accordion type="single" collapsible className="space-y-4">
             {faqs.map((faq, index) => (
               <AccordionItem 
                 key={index} 
                 value={`item-${index}`}
                  className="border border-white/20 rounded-2xl px-6 bg-white/10 hover:bg-white/15 transition-colors"
               >
                 <AccordionTrigger className="text-white text-left font-medium py-6 hover:no-underline">
                   {faq.question}
                 </AccordionTrigger>
                  <AccordionContent className="text-white/80 font-light leading-relaxed pb-6">
                   {faq.answer}
                 </AccordionContent>
               </AccordionItem>
             ))}
           </Accordion>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default FAQSection;