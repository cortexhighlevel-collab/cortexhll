 import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
 import { motion } from "framer-motion";
 
 const FAQSection = () => {
   const faqs = [
     {
       question: "Quanto tempo leva para ver resultados?",
       answer: "Os primeiros resultados começam a aparecer entre 30 a 60 dias após a implementação da estratégia. Resultados mais expressivos são percebidos a partir do terceiro mês, quando as otimizações de IA e automação estão plenamente operacionais."
     },
     {
       question: "Qual é o investimento mínimo para começar?",
       answer: "Oferecemos diferentes pacotes adaptados ao porte e necessidades de cada empresa. Durante o diagnóstico gratuito, apresentamos as opções mais adequadas ao seu momento de negócio e objetivos de crescimento."
     },
     {
       question: "Vocês trabalham com empresas de qualquer segmento?",
       answer: "Sim, nossa metodologia é adaptável a diversos segmentos. Temos especialidade em empresas B2B, SaaS, consultorias, escritórios de advocacia, clínicas e negócios de serviços profissionais que buscam escalar com inteligência."
     },
     {
       question: "Preciso ter equipe de marketing interna?",
       answer: "Não é necessário. Atuamos como uma extensão do seu time, cuidando de toda a estratégia e execução. Se você já tem equipe, trabalhamos em parceria para potencializar os resultados."
     },
     {
       question: "O que diferencia a Cortex de outras agências?",
       answer: "Nossa abordagem combina inteligência artificial aplicada, automação de processos e estratégia de growth de forma integrada. Não vendemos apenas serviços isolados — entregamos um sistema completo de geração de demanda qualificada."
     },
     {
       question: "Como funciona o diagnóstico gratuito?",
       answer: "É uma sessão estratégica de 30 minutos onde analisamos seu funil atual, identificamos gargalos e apresentamos um plano de ação personalizado. Sem compromisso, você já sai com insights valiosos para aplicar no seu negócio."
     }
   ];
 
   return (
      <section id="faq" className="w-full py-24 md:py-32 bg-[#0D0D0D] dark-dotted-bg font-dm relative">
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