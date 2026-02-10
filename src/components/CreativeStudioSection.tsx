import { useLanguage } from "@/contexts/LanguageContext";

const columnsData = [
  [
    { type: 'image' as const, src: 'https://framerusercontent.com/images/MYA3NSlJ1OHKHWRfG7JD8KZQqM.jpg?width=1200&height=1200' },
    { type: 'video' as const, src: 'https://framerusercontent.com/assets/DzVq1DOIhaPOvrEffNwhytOlZo.mp4' },
    { type: 'video' as const, src: 'https://framerusercontent.com/assets/PLBLmxyZt7f4zxfhneunbFq13AQ.mp4' },
    { type: 'image' as const, src: 'https://framerusercontent.com/images/wFWbCdGaeADzLFVqtkI4OruEZwY.jpg?width=736&height=976' },
  ],
  [
    { type: 'image' as const, src: 'https://framerusercontent.com/images/SOn8NLbtWMVUYycYwmdHWaspbo.jpg?width=736&height=981' },
    { type: 'video' as const, src: 'https://framerusercontent.com/assets/ULUP3WoAdRgBzSNR8jCf8sZL0Lk.mp4' },
    { type: 'image' as const, src: 'https://framerusercontent.com/images/644Vl1YBiMs9zHomUwKPTJH4w.jpg?width=736&height=894' },
    { type: 'image' as const, src: 'https://framerusercontent.com/images/Q3N0rdGxebbQfpELTbYO9qVbzA.jpg?width=1080&height=1350' },
  ],
  [
    { type: 'image' as const, src: 'https://framerusercontent.com/images/RiP7wUAIv97LXPq9l3AtDnzI.jpg?width=1200&height=1799' },
    { type: 'image' as const, src: 'https://framerusercontent.com/images/yMVImAhtIOTHkwoL94xH1sCbskE.jpg?width=709&height=829' },
    { type: 'image' as const, src: 'https://framerusercontent.com/images/FJAZ9aQdGTJrYSypOQJTCCc3eA.jpg?width=593&height=758' },
  ],
  [
    { type: 'image' as const, src: 'https://framerusercontent.com/images/wwrQeEg2zOC7BRjcGKCLmwIATww.jpg?width=960&height=1200' },
    { type: 'image' as const, src: 'https://framerusercontent.com/images/D4jLtTlQV72gcoOmmPs4GNuOZo.jpg?width=736&height=1104' },
    { type: 'image' as const, src: 'https://framerusercontent.com/images/Zaw0BeVZq8vPmwMG4ds4HKU3xYM.jpg?width=1000&height=1333' },
  ],
];

interface MediaItemData {
  type: 'image' | 'video';
  src: string;
}

const MediaItem = ({ item }: { item: MediaItemData }) => (
  <div className="group relative w-full overflow-hidden rounded-2xl cursor-pointer transform-gpu translate-z-0">
    {item.type === 'video' ? (
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
  </div>
);

const FilterButton = ({ label }: { label: string }) => (
  <div className="relative z-[1000] self-end mb-6">
    <div className="w-[200px] rounded-[10px] bg-[#1a1a1a]/65 backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
      <button className="w-full px-4 py-3 bg-transparent border-none rounded-lg cursor-pointer flex justify-between items-center text-white font-medium text-[15px] tracking-[-0.01em]">
        <span>{label}</span>
        <div className="relative w-4 h-4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transform rotate-0 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
          >
            <circle cx="8" cy="8" r="7" stroke="white" strokeWidth="1.5" opacity="0.3" />
            <path d="M5 7L8 10L11 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
    </div>
  </div>
);

const CreativeStudioSection = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-white p-5 flex flex-col font-sans">
      <div className="max-w-[1160px] mx-auto w-full flex flex-col">
        <FilterButton label={t("creative.filter.all")} />

        {/* Masonry Grid */}
        <div className="flex flex-col sm:flex-row gap-2 w-full">
          {columnsData.map((column, colIndex) => (
            <div key={colIndex} className="flex-1 flex flex-col gap-2 min-w-0">
              {column.map((item, itemIndex) => (
                <MediaItem key={`${colIndex}-${itemIndex}`} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeStudioSection;
