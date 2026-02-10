import { useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { Palette, Play, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import CTAButton from "@/components/CTAButton";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.69, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

type Category = "all" | "uiux" | "motion";

interface Project {
  id: number;
  category: Category;
  title: string;
  tagKey: string;
  descKey: string;
  gradient: string;
  span?: string;
}

const projects: Project[] = [
  { id: 1, category: "uiux", title: "Landing Page Premium", tagKey: "creative.portfolio.tag.uiux", descKey: "creative.portfolio.p1.desc", gradient: "from-orange-500/20 via-orange-900/30 to-foreground/80", span: "lg:col-span-2 lg:row-span-2" },
  { id: 2, category: "motion", title: "Brand Animation", tagKey: "creative.portfolio.tag.motion", descKey: "creative.portfolio.p2.desc", gradient: "from-purple-500/20 via-indigo-900/30 to-foreground/80" },
  { id: 3, category: "uiux", title: "Dashboard UI", tagKey: "creative.portfolio.tag.uiux", descKey: "creative.portfolio.p3.desc", gradient: "from-emerald-500/20 via-teal-900/30 to-foreground/80" },
  { id: 4, category: "motion", title: "Social Media Motion", tagKey: "creative.portfolio.tag.motion", descKey: "creative.portfolio.p4.desc", gradient: "from-rose-500/20 via-pink-900/30 to-foreground/80" },
  { id: 5, category: "uiux", title: "E-commerce Redesign", tagKey: "creative.portfolio.tag.uiux", descKey: "creative.portfolio.p5.desc", gradient: "from-amber-500/20 via-yellow-900/30 to-foreground/80" },
  { id: 6, category: "motion", title: "Institucional Video", tagKey: "creative.portfolio.tag.motion", descKey: "creative.portfolio.p6.desc", gradient: "from-cyan-500/20 via-blue-900/30 to-foreground/80", span: "lg:col-span-2" },
];

const CreativeStudioSection = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filters: { key: Category; labelKey: string }[] = [
    { key: "all", labelKey: "creative.filter.all" },
    { key: "uiux", labelKey: "creative.filter.uiux" },
    { key: "motion", labelKey: "creative.filter.motion" },
  ];

  const filtered = activeFilter === "all" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section className="w-full px-5 md:px-12 py-16 md:py-24 font-dm">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div className="mb-6 md:mb-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeUp}>
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

        {/* Filters */}
        <motion.div className="flex justify-center gap-2 mb-10" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeUp}>
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 border ${
                activeFilter === f.key
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground/60 border-foreground/15 hover:border-foreground/30"
              }`}
            >
              {t(f.labelKey)}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px] md:auto-rows-[260px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={stagger}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={cardReveal}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.span || ""}`}
              >
                {/* Gradient placeholder background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.05),transparent_60%)]" />

                {/* Placeholder icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-[0.06] transition-opacity duration-500">
                  {project.category === "uiux" ? (
                    <Palette className="w-20 h-20 text-foreground" />
                  ) : (
                    <Play className="w-20 h-20 text-foreground" />
                  )}
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="flex">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-[10px] font-medium uppercase tracking-[0.12em]">
                      {project.category === "uiux" ? <Palette className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                      {t(project.tagKey)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white text-lg md:text-xl font-medium mb-1">{project.title}</h3>
                    <p className="text-white/60 text-xs md:text-sm font-light line-clamp-2">{t(project.descKey)}</p>
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div className="mt-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeUp}>
          <CTAButton href="#contato">{t("creative.cta")}</CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeStudioSection;
