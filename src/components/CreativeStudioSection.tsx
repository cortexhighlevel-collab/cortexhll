import { motion, type Variants } from "framer-motion";
import { Palette, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import CTAButton from "@/components/CTAButton";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.69, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const cardSlide: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

interface StudioCardProps {
  tag: string;
  title: string;
  text: string;
  items: string[];
  icon: React.ReactNode;
  cta: string;
}

const StudioCard = ({ tag, title, text, items, icon, cta }: StudioCardProps) => (
  <motion.div variants={cardSlide} className="group relative rounded-3xl overflow-hidden border border-foreground/10 bg-foreground/[0.02] hover:border-foreground/20 transition-all duration-500 p-8 md:p-10">
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-xs font-medium uppercase tracking-[0.15em]">
          {icon}
          {tag}
        </span>
      </div>
      <h3 className="text-2xl md:text-3xl font-medium text-foreground leading-tight">{title}</h3>
      <p className="text-foreground/60 text-sm md:text-base leading-relaxed font-light max-w-[600px]">{text}</p>
      <ul className="grid grid-cols-2 gap-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-foreground/70 text-sm font-light">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-2">
        <CTAButton href="#contato">{cta}</CTAButton>
      </div>
    </div>
  </motion.div>
);

const CreativeStudioSection = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full px-5 md:px-12 py-16 md:py-24 font-dm">
      <div className="max-w-[1400px] mx-auto">
        <motion.div className="mb-10 md:mb-16 text-center" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeUp}>
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-xs font-medium mb-4 uppercase tracking-[0.2em]">
            {t("creative.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight max-w-[700px] mx-auto">
            {t("creative.title")}
          </h2>
          <p className="text-foreground/60 mt-4 text-lg font-light max-w-[500px] mx-auto">
            {t("creative.subtitle")}
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} variants={stagger}>
          <StudioCard
            tag={t("creative.uiux.tag")}
            title={t("creative.uiux.title")}
            text={t("creative.uiux.text")}
            items={[t("creative.uiux.item1"), t("creative.uiux.item2"), t("creative.uiux.item3"), t("creative.uiux.item4")]}
            icon={<Palette className="w-3.5 h-3.5" />}
            cta={t("creative.cta")}
          />
          <StudioCard
            tag={t("creative.motion.tag")}
            title={t("creative.motion.title")}
            text={t("creative.motion.text")}
            items={[t("creative.motion.item1"), t("creative.motion.item2"), t("creative.motion.item3"), t("creative.motion.item4")]}
            icon={<Play className="w-3.5 h-3.5" />}
            cta={t("creative.cta")}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeStudioSection;
