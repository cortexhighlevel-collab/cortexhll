import { useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import CTAButton from "@/components/CTAButton";
import { useIsMobile } from "@/hooks/use-mobile";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.69, ease: "easeOut" } },
};

type Category = "all" | "uiux" | "motion";

interface MediaItemData {
  type: "image" | "video";
  src: string;
  category: Category;
}

const allMedia: MediaItemData[] = [
  { type: "image", src: "https://framerusercontent.com/images/MYA3NSlJ1OHKHWRfG7JD8KZQqM.jpg?width=1200&height=1200", category: "uiux" },
  { type: "video", src: "https://framerusercontent.com/assets/DzVq1DOIhaPOvrEffNwhytOlZo.mp4", category: "motion" },
  { type: "video", src: "https://framerusercontent.com/assets/PLBLmxyZt7f4zxfhneunbFq13AQ.mp4", category: "motion" },
  { type: "image", src: "https://framerusercontent.com/images/wFWbCdGaeADzLFVqtkI4OruEZwY.jpg?width=736&height=976", category: "uiux" },
  { type: "image", src: "https://framerusercontent.com/images/SOn8NLbtWMVUYycYwmdHWaspbo.jpg?width=736&height=981", category: "uiux" },
  { type: "video", src: "https://framerusercontent.com/assets/ULUP3WoAdRgBzSNR8jCf8sZL0Lk.mp4", category: "motion" },
  { type: "image", src: "https://framerusercontent.com/images/644Vl1YBiMs9zHomUwKPTJH4w.jpg?width=736&height=894", category: "uiux" },
  { type: "image", src: "https://framerusercontent.com/images/Q3N0rdGxebbQfpELTbYO9qVbzA.jpg?width=1080&height=1350", category: "uiux" },
  { type: "image", src: "https://framerusercontent.com/images/RiP7wUAIv97LXPq9l3AtDnzI.jpg?width=1200&height=1799", category: "uiux" },
  { type: "image", src: "https://framerusercontent.com/images/yMVImAhtIOTHkwoL94xH1sCbskE.jpg?width=709&height=829", category: "motion" },
  { type: "image", src: "https://framerusercontent.com/images/FJAZ9aQdGTJrYSypOQJTCCc3eA.jpg?width=593&height=758", category: "uiux" },
  { type: "image", src: "https://framerusercontent.com/images/wwrQeEg2zOC7BRjcGKCLmwIATww.jpg?width=960&height=1200", category: "motion" },
  { type: "image", src: "https://framerusercontent.com/images/D4jLtTlQV72gcoOmmPs4GNuOZo.jpg?width=736&height=1104", category: "uiux" },
  { type: "image", src: "https://framerusercontent.com/images/Zaw0BeVZq8vPmwMG4ds4HKU3xYM.jpg?width=1000&height=1333", category: "uiux" },
];

function toColumns(items: MediaItemData[], cols: number): MediaItemData[][] {
  const columns: MediaItemData[][] = Array.from({ length: cols }, () => []);
  items.forEach((item, i) => columns[i % cols].push(item));
  return columns;
}

const MOBILE_INITIAL_ITEMS = 4;

const MediaItem = ({ item, index }: { item: MediaItemData; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.92 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.15 }}
    exit={{ opacity: 0, scale: 0.92 }}
    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="group relative w-full overflow-hidden rounded-lg sm:rounded-2xl cursor-pointer transform-gpu"
  >
    {item.type === "video" ? (
      <video
        src={item.src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover block transform transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 will-change-transform"
      />
    ) : (
      <img
        src={item.src}
        alt=""
        loading="lazy"
        className="w-full h-auto object-cover block transform transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 will-change-transform"
      />
    )}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/45 opacity-0 transition-opacity duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100 pointer-events-none" />
  </motion.div>
);

const CreativeStudioSection = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [filterOpen, setFilterOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const filters: { key: Category; labelKey: string }[] = [
    { key: "all", labelKey: "creative.filter.all" },
    { key: "uiux", labelKey: "creative.filter.uiux" },
    { key: "motion", labelKey: "creative.filter.motion" },
  ];

  const filtered = activeFilter === "all" ? allMedia : allMedia.filter(m => m.category === activeFilter);

  // On mobile: 4-column grid with limited items initially, show more on click
  const mobileItems = showAll ? filtered : filtered.slice(0, MOBILE_INITIAL_ITEMS);
  const hasMore = filtered.length > MOBILE_INITIAL_ITEMS;

  const columns = toColumns(isMobile ? mobileItems : filtered, isMobile ? 2 : 4);
  const activeLabel = filters.find(f => f.key === activeFilter)!;

  return (
    <section
      className="w-full px-5 md:px-12 py-20 md:py-28 font-dm relative overflow-hidden"
      style={{ background: "#0D0D0D" }}
    >
      {/* Dotted background pattern */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Subtle orange glow */}
      <div
        className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #f06800, transparent 70%)" }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-8 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeUp}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f06800]/10 border border-[#f06800]/20 text-[#f06800] text-xs font-semibold mb-5 uppercase tracking-[0.25em]">
                {t("creative.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight max-w-[600px]">
                {t("creative.title")}
              </h2>
              <p className="text-white/40 mt-4 text-base md:text-lg font-light max-w-[480px] leading-relaxed">
                {t("creative.subtitle")}
              </p>
            </div>

            {/* Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="w-[200px] px-5 py-3 rounded-xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.1] flex justify-between items-center text-white font-medium text-[14px] tracking-[-0.01em] hover:bg-white/[0.1] transition-colors duration-300"
              >
                <span>{t(activeLabel.labelKey)}</span>
                <ChevronDown
                  className={`w-4 h-4 text-white/50 transition-transform duration-300 ${filterOpen ? "rotate-180" : ""}`}
                />
              </button>
              {filterOpen && (
                <div className="absolute top-full right-0 mt-2 w-[200px] rounded-xl bg-[#1a1a1a]/90 backdrop-blur-md border border-white/[0.1] overflow-hidden z-50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                  {filters.map(f => (
                    <button
                      key={f.key}
                      onClick={() => { setActiveFilter(f.key); setFilterOpen(false); setShowAll(false); }}
                      className={`w-full px-5 py-3 text-left text-[13px] font-medium transition-colors duration-200 ${
                        activeFilter === f.key
                          ? "text-[#f06800] bg-[#f06800]/10"
                          : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      {t(f.labelKey)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Masonry Grid - 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 w-full auto-rows-auto">
          <AnimatePresence mode="popLayout">
            {columns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-2 sm:gap-2.5 min-w-0">
                {column.map((item, itemIndex) => (
                  <MediaItem key={`${activeFilter}-${colIndex}-${itemIndex}`} item={item} index={colIndex + itemIndex * 2} />
                ))}
              </div>
            ))}
          </AnimatePresence>
        </div>

        {/* "Ver mais" button - mobile only */}
        {isMobile && hasMore && !showAll && (
          <motion.div
            className="mt-6 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.1] text-white/70 text-sm font-medium hover:bg-white/[0.1] hover:text-white transition-all duration-300"
            >
              <Plus className="w-4 h-4" />
              {t("creative.showMore")}
            </button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeUp}
        >
          <CTAButton href="#contato">{t("creative.cta")}</CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeStudioSection;
