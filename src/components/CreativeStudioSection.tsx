import { useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import CTAButton from "@/components/CTAButton";
import { useIsMobile } from "@/hooks/use-mobile";

import studioCortex01 from "@/assets/studio-cortex-01.jpeg";
import studioCortex02 from "@/assets/studio-cortex-02.jpeg";
import studioCortex03 from "@/assets/studio-cortex-03.jpeg";
import studioCortex04 from "@/assets/studio-cortex-04.jpg";
import studioCortex05 from "@/assets/studio-cortex-05.jpg";
import studioCortex06 from "@/assets/studio-cortex-06.jpg";
import studio01 from "@/assets/studio-01.webp";
import studio02 from "@/assets/studio-02.webp";
import studio03 from "@/assets/studio-03.webp";
import studio04 from "@/assets/studio-04.webp";
import studio05 from "@/assets/studio-05.webp";
import studio06 from "@/assets/studio-06.webp";
import studio07 from "@/assets/studio-07.webp";
import studio08 from "@/assets/studio-08.webp";
import studio09 from "@/assets/studio-09.webp";
import studio10 from "@/assets/studio-10.webp";
import studio11 from "@/assets/studio-11.webp";
import studio12 from "@/assets/studio-12.webp";
import studio13 from "@/assets/studio-13.webp";
import studio14 from "@/assets/studio-14.webp";

import studioVideo01 from "@/assets/studio-video-01.webm";
import studioVideo02 from "@/assets/studio-video-02.webm";
import studioVideo03 from "@/assets/studio-video-03.webm";
import studioVideo04 from "@/assets/studio-video-04.webm";
import studioVideo05 from "@/assets/studio-video-05.webm";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.69, ease: "easeOut" } },
};

type Category = "all" | "uiux" | "motion";

interface MediaItemData {
  type: "image" | "video";
  src: string;
  category: Category;
  span?: 2; // videos can span 2 columns
}

// Flat grid items — videos span 2 columns for visual impact
const gridItems: MediaItemData[] = [
  // Row 1: 4 images
  { type: "image", src: studioCortex01, category: "uiux" },
  { type: "image", src: studioCortex05, category: "uiux" },
  { type: "image", src: studioCortex03, category: "uiux" },
  { type: "image", src: studio11, category: "uiux" },
  // Row 2: 4 images
  { type: "image", src: studioCortex04, category: "uiux" },
  { type: "image", src: studioCortex02, category: "uiux" },
  { type: "image", src: studioCortex06, category: "uiux" },
  { type: "image", src: studio08, category: "uiux" },
  // Row 3: 2 videos spanning 2 cols each
  { type: "video", src: studioVideo01, category: "motion", span: 2 },
  { type: "video", src: studioVideo02, category: "motion", span: 2 },
  // Row 4: 4 images (blue)
  { type: "image", src: studio01, category: "uiux" },
  { type: "image", src: studio03, category: "uiux" },
  { type: "image", src: studio05, category: "uiux" },
  { type: "image", src: studio13, category: "uiux" },
  // Row 5: 2 videos spanning 2 cols each
  { type: "video", src: studioVideo03, category: "motion", span: 2 },
  { type: "video", src: studioVideo04, category: "motion", span: 2 },
  // Row 6: 4 images
  { type: "image", src: studio02, category: "uiux" },
  { type: "image", src: studio04, category: "uiux" },
  { type: "image", src: studio06, category: "uiux" },
  { type: "image", src: studio09, category: "motion" },
  // Row 7: 1 video span 2 + 2 images
  { type: "video", src: studioVideo05, category: "motion", span: 2 },
  { type: "image", src: studio07, category: "uiux" },
  { type: "image", src: studio10, category: "uiux" },
  // Row 8: remaining
  { type: "image", src: studio14, category: "uiux" },
  { type: "image", src: studio12, category: "uiux" },
  { type: "video", src: "https://framerusercontent.com/assets/PLBLmxyZt7f4zxfhneunbFq13AQ.mp4", category: "motion", span: 2 },
];

const MOBILE_INITIAL_ITEMS = 4;

const MediaItem = ({ item, index }: { item: MediaItemData; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.92 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: false, amount: 0.15 }}
    exit={{ opacity: 0, scale: 0.92 }}
    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={`group relative w-full overflow-hidden rounded-lg sm:rounded-2xl cursor-pointer transform-gpu ${item.type === "video" ? "aspect-video" : ""}`}
  >
    {item.type === "video" ? (
      <video
        src={item.src}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover block transform transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 will-change-transform"
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

  const filtered = activeFilter === "all" ? gridItems : gridItems.filter(m => m.category === activeFilter);

  // On mobile: flat grid with limited items, show more on click
  const mobileItems = showAll ? filtered : filtered.slice(0, MOBILE_INITIAL_ITEMS);
  const hasMore = filtered.length > MOBILE_INITIAL_ITEMS;

  const displayItems = isMobile ? mobileItems : filtered;
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

        {/* Grid - 2 cols mobile, 4 cols desktop; videos span 2 cols */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full auto-rows-auto">
          <AnimatePresence mode="popLayout">
            {displayItems.map((item, index) => (
              <div key={`${activeFilter}-${index}`} className={item.span === 2 ? "col-span-2" : ""}>
                <MediaItem item={item} index={index} />
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
