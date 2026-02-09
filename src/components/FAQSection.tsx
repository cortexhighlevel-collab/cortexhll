import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQSection = () => {
  const { t } = useLanguage();

  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
    { question: t("faq.q6"), answer: t("faq.a6") },
    { question: t("faq.q7"), answer: t("faq.a7") },
    { question: t("faq.q8"), answer: t("faq.a8") },
  ];

  return (
    <section id="faq" className="w-full py-24 md:py-32 bg-[#0D0D0D] dark-dotted-bg font-dm relative">
      <div className="max-w-[900px] mx-auto px-5 md:px-12 relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.69 }}>
          <span className="inline-block text-white/80 text-xs font-medium uppercase tracking-[0.2em] mb-4">{t("faq.badge")}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">{t("faq.title")}</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.69, delay: 0.23 }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-white/20 rounded-2xl px-6 bg-white/10 hover:bg-white/15 transition-colors">
                <AccordionTrigger className="text-white text-left font-medium py-6 hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
