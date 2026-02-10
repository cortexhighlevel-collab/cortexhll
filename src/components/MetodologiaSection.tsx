import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import metodologiaVideo from "@/assets/metodologia-video.webm";

const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.69, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.17 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.575, ease: "easeOut" } },
};

const MetodologiaSection = () => {
  const { t } = useLanguage();

  return <section id="metodologia" className="w-full px-5 md:px-12 py-10 rounded-b-[40px] font-dm">
      <div className="max-w-[1200px] mx-auto">
        <motion.div className="card-radius p-4 md:p-6 lg:p-8" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}>
          <motion.div className="mb-5 md:mb-8" variants={fadeUp}>
            <motion.h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight font-medium" variants={fadeUp}>
              {t("metodo.title")}
            </motion.h2>
            <motion.p className="text-base md:text-lg text-foreground/80 mt-2 font-light" variants={fadeUp}>
              {t("metodo.subtitle")}
            </motion.p>
          </motion.div>

          <motion.div className="video-radius overflow-hidden mb-5 md:mb-8 relative w-full" variants={fadeScale}>
            <video
              src={metodologiaVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-8 md:px-12">
              <p className="text-lg md:text-xl lg:text-2xl text-center leading-relaxed max-w-[800px] font-light text-white" dangerouslySetInnerHTML={{ __html: t("metodo.quote") }} />
            </div>
          </motion.div>

          <motion.div className="grid grid-cols-1 lg:grid-cols-[minmax(200px,280px)_1fr] gap-4 md:gap-8" variants={staggerContainer}>
            <motion.div className="flex flex-col gap-3 md:gap-4 max-w-xs" variants={fadeUp}>
              <div className="card-radius p-4 md:p-5 flex flex-col border border-border bg-background">
                <div className="flex items-start justify-between mb-3">
                  <span className="tag-pill text-xs bg-orange-500 text-white border-0">{t("metodo.engine.tag")}</span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">{t("metodo.engine.text")}</p>
              </div>
              <div className="card-radius p-4 md:p-5 flex flex-col bg-[#F06600]">
                <div className="mb-3">
                  <span className="tag-pill text-xs bg-white/20 text-white">{t("metodo.results.tag")}</span>
                </div>
                <p className="text-sm leading-relaxed text-white">{t("metodo.results.text")}</p>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right" variants={fadeUp}>
              <div className="flex items-center gap-2 mb-4">
                <span className="tag-pill bg-foreground text-background text-xs tracking-wider">{t("metodo.exclusive.tag")}</span>
                <span className="text-xs font-medium text-foreground/70 uppercase tracking-[0.2em]">{t("metodo.exclusive.steps")}</span>
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl leading-tight text-foreground font-light tracking-tight" dangerouslySetInnerHTML={{ __html: t("metodo.exclusive.text") }} />
              <a href="#contato" className="mt-6 inline-flex items-center gap-2 text-orange-500 font-medium hover:gap-3 transition-all">
                {t("metodo.exclusive.cta")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default MetodologiaSection;
