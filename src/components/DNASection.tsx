import { motion, type Variants } from "framer-motion";
import dnaSofisticacao from "@/assets/dna-sofisticacao.jpg";
import dnaAutoridade from "@/assets/dna-autoridade.jpg";
import resultadosComprovados from "@/assets/resultados-comprovados.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const blurFade: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.805, ease: "easeOut" } }
};
const staggerGrid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.115, delayChildren: 0.23 } }
};
const cardFloat: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.69, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const DNASection = () => {
  const { t } = useLanguage();

  return <section className="w-full py-16 md:py-24 px-4 md:px-8 font-dm light-dotted-fade-in">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center relative z-10" style={{ gap: '48px' }}>
        
        <motion.div className="flex flex-col items-center justify-center w-full" style={{ gap: '24px' }} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={blurFade}>
          <div className="px-5 py-2 rounded-full flex items-center justify-center" style={{
            background: 'rgba(200, 200, 200, 0.3)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(150, 150, 150, 0.3)', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 8px 0px inset'
          }}>
            <span className="text-lg tracking-wide font-light" style={{ fontWeight: 300, color: '#1f1f1f' }}>
              {t("dna.badge")}
            </span>
          </div>
          <p className="text-sm uppercase tracking-[0.2em] font-normal text-[#1f1f1f]">{t("dna.tagline")}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-medium text-[#1f1f1f] leading-tight">{t("dna.title")}</h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full" style={{ gridTemplateRows: 'auto auto' }} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerGrid}>
          
          {/* Card 1 - Exclusividade */}
          <motion.div className="group relative md:row-span-2 rounded-2xl overflow-hidden min-h-[280px] md:min-h-[420px] flex flex-col justify-end p-6 md:p-8" style={{
            background: 'linear-gradient(180deg, rgba(13, 13, 13, 0.7) 0%, rgba(13, 13, 13, 0.85) 100%)',
            backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid #f06800', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }} variants={cardFloat}>
            <div className="absolute top-4 left-4 w-8 h-8 z-20">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-white opacity-40"></div>
              <div className="absolute top-0 left-0 w-[2px] h-full bg-white opacity-40"></div>
            </div>
            <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" style={{ objectPosition: 'center 35%' }} src="/lovable-uploads/47939c19-85cb-4393-80f4-edfeb862a20c.webp" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/30 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="relative z-20">
              <h3 className="text-2xl md:text-3xl font-medium text-white">{t("dna.exclusivity")}</h3>
              <p className="text-sm md:text-base font-light text-white/90 leading-relaxed mt-3 max-h-0 md:group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-out opacity-0 md:group-hover:opacity-100">
                {t("dna.exclusivity.text")}
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Sofisticação */}
          <motion.div className="group relative rounded-2xl overflow-hidden min-h-[200px] flex flex-col justify-end p-6" style={{
            background: 'rgba(13, 13, 13, 0.65)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid #f06800', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
          }} variants={cardFloat}>
            <div className="absolute top-4 right-4 w-6 h-6 z-20">
              <div className="absolute top-0 right-0 w-full h-[2px] bg-white opacity-30"></div>
              <div className="absolute top-0 right-0 w-[2px] h-full bg-white opacity-30"></div>
            </div>
            <img src={dnaSofisticacao} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/30 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="relative z-20">
              <h3 className="text-xl md:text-2xl font-medium text-white">{t("dna.sophistication")}</h3>
              <p className="text-sm font-light text-white/90 mt-2 max-h-0 md:group-hover:max-h-32 overflow-hidden transition-all duration-500 ease-out opacity-0 md:group-hover:opacity-100">
                {t("dna.sophistication.text")}
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Autoridade */}
          <motion.div className="group relative rounded-2xl overflow-hidden min-h-[200px] flex flex-col justify-end p-6" style={{
            background: 'rgba(13, 13, 13, 0.65)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid #f06800', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
          }} variants={cardFloat}>
            <div className="absolute top-4 right-4 w-6 h-6 z-20">
              <div className="absolute top-0 right-0 w-full h-[2px] bg-white opacity-30"></div>
              <div className="absolute top-0 right-0 w-[2px] h-full bg-white opacity-30"></div>
            </div>
            <img src={dnaAutoridade} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/30 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="relative z-20">
              <h3 className="text-xl md:text-2xl font-medium text-white">{t("dna.authority")}</h3>
              <p className="text-sm font-light text-white/90 mt-2 max-h-0 md:group-hover:max-h-32 overflow-hidden transition-all duration-500 ease-out opacity-0 md:group-hover:opacity-100">
                {t("dna.authority.text")}
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Resultados */}
          <motion.div className="group relative md:col-span-2 rounded-2xl overflow-hidden min-h-[180px] flex flex-col justify-end p-6 md:p-8" style={{
            background: 'linear-gradient(135deg, rgba(13, 13, 13, 0.75) 0%, rgba(13, 13, 13, 0.65) 100%)',
            backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid #f06800', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }} variants={cardFloat}>
            <div className="absolute bottom-4 right-4 w-8 h-8 z-20">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-white opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-full bg-white opacity-40"></div>
            </div>
            <img src={resultadosComprovados} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" style={{ objectPosition: 'center 10%' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/30 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="relative z-20">
              <h3 className="text-xl md:text-2xl font-medium text-white">{t("dna.results")}</h3>
              <p className="text-sm md:text-base font-light text-white/90 mt-2 max-h-0 md:group-hover:max-h-32 overflow-hidden transition-all duration-500 ease-out opacity-0 md:group-hover:opacity-100">
                {t("dna.results.text")}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default DNASection;
