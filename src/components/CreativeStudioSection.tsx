import { useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { Palette, Play, ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import CTAButton from "@/components/CTAButton";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.69, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardReveal: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

type Category = "all" | "uiux" | "motion";

interface Project {
  id: number;
  category: Category;
  titleKey: string;
  tagKey: string;
  descKey: string;
  accentFrom: string;
  accentTo: string;
  span?: string;
}

const projects: Project[] = [
  { id: 1, category: "uiux", titleKey: "creative.portfolio.p1.title", tagKey: "creative.portfolio.tag.uiux", descKey: "creative.portfolio.p1.desc", accentFrom: "#f06800", accentTo: "#ff9a44", span: "md:col-span-2 md:row-span-2" },
  { id: 2, category: "motion", titleKey: "creative.portfolio.p2.title", tagKey: "creative.portfolio.tag.motion", descKey: "creative.portfolio.p2.desc", accentFrom: "#6366f1", accentTo: "#a78bfa" },
  { id: 3, category: "uiux", titleKey: "creative.portfolio.p3.title", tagKey: "creative.portfolio.tag.uiux", descKey: "creative.portfolio.p3.desc", accentFrom: "#10b981", accentTo: "#34d399" },
  { id: 4, category: "motion", titleKey: "creative.portfolio.p4.title", tagKey: "creative.portfolio.tag.motion", descKey: "creative.portfolio.p4.desc", accentFrom: "#ec4899", accentTo: "#f472b6" },
  { id: 5, category: "uiux", titleKey: "creative.portfolio.p5.title", tagKey: "creative.portfolio.tag.uiux", descKey: "creative.portfolio.p5.desc", accentFrom: "#f59e0b", accentTo: "#fbbf24" },
  { id: 6, category: "motion", titleKey: "creative.portfolio.p6.title", tagKey: "creative.portfolio.tag.motion", descKey: "creative.portfolio.p6.desc", accentFrom: "#06b6d4", accentTo: "#22d3ee", span: "md:col-span-2" },
];

const ProjectCard = ({ project, t }: { project: Project; t: (k: string) => string }) => (
  <motion.div
    variants={cardReveal}
    layout
    initial={{ opacity: 0, scale: 0.93 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.93 }}
    transition={{ duration: 0.45 }}
    className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.span || ""}`}
    style={{ minHeight: project.span?.includes("row-span-2") ? 540 : 260 }}
  >
    {/* Dark base */}
    <div className="absolute inset-0 bg-[#111111]" />

    {/* Accent glow */}
    <div
      className="absolute inset-0 opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-700"
      style={{ background: `radial-gradient(ellipse at 30% 50%, ${project.accentFrom}, transparent 70%)` }}
    />

    {/* Subtle grid pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
      backgroundSize: "40px 40px"
    }} />

    {/* Glassmorphic border */}
    <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-500" />

    {/* Top-left accent line */}
    <div className="absolute top-0 left-6 w-12 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-20" style={{ background: `linear-gradient(90deg, ${project.accentFrom}, transparent)` }} />

    {/* Center placeholder icon */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/[0.06] transition-all duration-500">
          {project.category === "uiux" ? (
            <Palette className="w-6 h-6 text-white/20 group-hover:text-white/40 transition-colors duration-500" />
          ) : (
            <Play className="w-6 h-6 text-white/20 group-hover:text-white/40 transition-colors duration-500" />
          )}
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white/20 uppercase tracking-[0.2em] whitespace-nowrap font-medium">
          placeholder
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-between z-10">
      {/* Top: Tag */}
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.15em] backdrop-blur-md border transition-all duration-500"
          style={{
            background: `${project.accentFrom}10`,
            borderColor: `${project.accentFrom}25`,
            color: project.accentFrom,
          }}
        >
          {project.category === "uiux" ? <Palette className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          {t(project.tagKey)}
        </span>
        <div className="w-8 h-8 rounded-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0">
          <ArrowUpRight className="w-3.5 h-3.5 text-white/60" />
        </div>
      </div>

      {/* Bottom: Info */}
      <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-white text-lg md:text-xl font-medium mb-1.5 leading-tight">{t(project.titleKey)}</h3>
        <p className="text-white/40 text-xs md:text-sm font-light leading-relaxed line-clamp-2 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-20 lg:group-hover:opacity-100 transition-all duration-500 overflow-hidden">
          {t(project.descKey)}
        </p>
      </div>
    </div>
  </motion.div>
);

const CreativeStudioSection = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filters: { key: Category; labelKey: string; icon?: React.ReactNode }[] = [
    { key: "all", labelKey: "creative.filter.all", icon: <Sparkles className="w-3 h-3" /> },
    { key: "uiux", labelKey: "creative.filter.uiux", icon: <Palette className="w-3 h-3" /> },
    { key: "motion", labelKey: "creative.filter.motion", icon: <Play className="w-3 h-3" /> },
  ];

  const filtered = activeFilter === "all" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section className="w-full px-5 md:px-12 py-20 md:py-28 font-dm relative overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03]" style={{ background: "radial-gradient(circle, #f06800, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.02]" style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }} />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <motion.div className="mb-12 md:mb-16 text-center" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeUp}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f06800]/10 border border-[#f06800]/20 text-[#f06800] text-xs font-semibold mb-5 uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            {t("creative.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight max-w-[700px] mx-auto">
            {t("creative.title")}
          </h2>
          <p className="text-white/40 mt-5 text-base md:text-lg font-light max-w-[500px] mx-auto leading-relaxed">
            {t("creative.subtitle")}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div className="flex justify-center gap-2 mb-10" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeUp}>
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-medium uppercase tracking-[0.15em] transition-all duration-400 border backdrop-blur-sm ${
                activeFilter === f.key
                  ? "bg-white text-[#0A0A0A] border-white/80 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  : "bg-white/[0.04] text-white/50 border-white/[0.08] hover:bg-white/[0.08] hover:text-white/70 hover:border-white/[0.15]"
              }`}
            >
              {f.icon}
              {t(f.labelKey)}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={stagger}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} t={t} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div className="mt-14 text-center" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeUp}>
          <CTAButton href="#contato">{t("creative.cta")}</CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeStudioSection;
