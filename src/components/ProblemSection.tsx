import { Globe, ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.805, ease: [0.25, 0.46, 0.45, 0.94] } }
};
const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.805, ease: [0.25, 0.46, 0.45, 0.94] } }
};
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.667, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const ProblemSection = () => {
  const { t } = useLanguage();

  return <section className="w-full px-5 md:px-12 py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div className="flex flex-col items-center text-center gap-3 mb-16" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
          <span className="text-orange-500 text-xs uppercase tracking-[0.2em] font-medium font-dm">
            {t("problem.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight font-dm">
            {t("problem.title")}
          </h2>
        </motion.div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
          <motion.div className="relative overflow-hidden rounded-3xl bg-zinc-900 min-h-[350px] lg:min-h-[400px] flex flex-col group hover:bg-zinc-800 transition-colors duration-300 border border-[#f06800]" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={fadeInLeft}>
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/95138712-b50d-475a-b415-cf7f31426aa0.webp" />
            <div className="relative z-20 p-6 flex gap-2">
              <span className="px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                {t("problem.tag1")}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium border border-orange-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                {t("problem.tag2")}
              </span>
            </div>
          </motion.div>
          <motion.div className="flex flex-col justify-center" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInRight}>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight mb-4 font-dm">
              {t("problem.card1.title")}
            </h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-dm font-light">
              {t("problem.card1.text")}
            </p>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
          <motion.div className="flex flex-col justify-center order-2 lg:order-1" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInLeft}>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight mb-4 font-dm">
              {t("problem.card2.title")}
            </h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-dm font-light">
              {t("problem.card2.text")}
            </p>
          </motion.div>
          <motion.div className="relative overflow-hidden rounded-3xl min-h-[350px] lg:min-h-[400px] flex flex-col group transition-colors duration-300 order-1 lg:order-2 border border-[#f06800]" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={fadeInRight}>
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/d036f2db-b488-409d-8131-fe3dc8905365.webp" />
            <div className="relative z-10 p-6 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                {t("problem.tag3")}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-red-500/20 text-red-400 text-xs font-medium border border-red-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                Ads
              </span>
            </div>
          </motion.div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div className="relative overflow-hidden rounded-3xl min-h-[350px] lg:min-h-[400px] flex flex-col group transition-all duration-300 cursor-pointer border border-[#f06800]" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={fadeInLeft}>
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/2a577a61-464d-43b2-87f8-0246e269da16.webp" />
          </motion.div>
          <motion.div className="flex flex-col justify-center" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInRight}>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight mb-4 font-dm">
              {t("problem.card3.title")}
            </h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-dm font-light">
              {t("problem.card3.text")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ProblemSection;
