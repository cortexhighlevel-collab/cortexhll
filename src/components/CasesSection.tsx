import { Globe, FileText, Terminal } from "lucide-react";

// --- Icons ---
const ArrowNavLeft = () => (
  <svg viewBox="0 0 14 13" className="w-3.5 h-3.5 stroke-white">
    <path d="M 12.25 6.5 L 1.75 6.5 M 1.75 6.5 L 7 11.75 M 1.75 6.5 L 7 1.25" fill="transparent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const ArrowNavRight = () => (
  <svg viewBox="0 0 14 13" className="w-3.5 h-3.5 stroke-black">
    <path d="M 1.75 6.5 L 12.25 6.5 M 12.25 6.5 L 7 11.75 M 12.25 6.5 L 7 1.25" fill="transparent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const DecorativeArrowIcon = () => (
  <svg viewBox="0 0 68 59" className="w-full h-full" preserveAspectRatio="none">
    <path d="M 0 0 L 52 0 C 60.837 0 68 7.163 68 16 L 68 59 L 16 59 C 7.163 59 0 51.837 0 43 Z" fill="transparent"></path>
    <path d="M 3 33.218 L 9.714 30.691 L 9.714 31.76 L 3 34.277 Z" fill="#C6C6C6"></path>
    <path d="M 43.286 23.927 L 50 26.444 L 50 27.512 L 43.286 24.987 Z" fill="#C6C6C6"></path>
    <path d="M 12.675 44.409 L 9.135 40.894 C 9.09 40.849 9.017 40.849 8.973 40.894 L 7.071 42.783 L 6.216 41.935 L 10.949 37.234 L 11.804 38.083 L 9.874 39.999 C 9.829 40.044 9.829 40.115 9.874 40.16 L 13.414 43.675 Z" fill="#C6C6C6"></path>
    <path d="M 40.315 13.813 L 43.854 17.328 C 43.899 17.373 43.971 17.373 44.016 17.328 L 45.946 15.412 L 46.8 16.26 L 42.067 20.961 L 41.212 20.112 L 43.115 18.223 C 43.16 18.178 43.16 18.105 43.115 18.06 L 39.576 14.545 L 40.315 13.811 Z" fill="#C6C6C6"></path>
    <path d="M 5.827 30.218 L 5.827 25.246 C 5.827 25.183 5.776 25.132 5.712 25.132 L 3.022 25.132 L 3.022 23.931 L 9.716 23.931 L 9.716 25.132 L 6.988 25.132 C 6.924 25.132 6.874 25.183 6.874 25.244 L 6.874 30.216 L 5.829 30.216 Z" fill="#C6C6C6"></path>
    <path d="M 41.9 42.823 L 38.36 46.338 L 40.29 48.416 L 39.435 49.264 L 34.702 44.563 L 35.556 43.715 L 37.459 45.605 L 41.162 42.089 L 41.901 42.823 Z" fill="#C6C6C6"></path>
  </svg>
);

const CasesSection = () => {
  const testimonial = {
    logo: "https://framerusercontent.com/images/4wtV8GFtM9cMCc7wLhXjMsg59o.png?width=1820&height=573",
    quote: "A Cortex transformou nossa presença digital. Em 3 meses passamos de invisíveis para top 3 nas respostas da IA. O ROI superou todas as expectativas.",
    author: "João Silva",
    role: "CEO @ TechStartup",
    image: "https://framerusercontent.com/images/wTyKIHPDLvKHIu74YHBt7Hm44A.jpeg?width=200&height=200",
  };

  const stats = [
    { value: "+500%", label: "ROI médio", icon: Globe },
    { value: "47", label: "empresas", icon: FileText },
    { value: "30", label: "dias", icon: Terminal },
  ];

  const avatars = [
    "https://framerusercontent.com/images/DHRdJy9IiR2aQoCcMbaxWS1Sbfs.png?width=381&height=301",
    "https://framerusercontent.com/images/Ph8T3MKJ0xH6YyaKa6fvuc2hye4.png?width=512&height=669",
    "https://framerusercontent.com/images/21s66P6Ugns3B0SREgloFdwT84A.png?width=128&height=128",
  ];

  return (
    <section id="cases" className="w-full bg-[#0D0D0D] text-white py-16 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-32">
        
        {/* TOP SECTION: Two columns - Left: Title & CTA, Right: Description & Stats */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* LEFT COLUMN: Title & CTA Button */}
          <div className="flex flex-col gap-8 max-w-xl">
            <h2 className="text-5xl md:text-7xl font-normal leading-[1.0] tracking-tight text-[#F2F2F2]">
              Resultados que falam
            </h2>
            
            {/* CTA Button - Below title */}
            <a 
              href="#contato" 
              className="group flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300 w-fit"
            >
              <span className="text-sm font-bold tracking-wide text-[#F2F2F2]">Ver Cases</span>
              <span className="bg-white text-black p-1 rounded-full group-hover:translate-x-1 transition-transform duration-300">
                <svg viewBox="0 0 20 20" className="w-3 h-3 fill-current">
                  <path d="M12.25 6.5L1.75 6.5M1.75 6.5L7 11.75M1.75 6.5L7 1.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>

          {/* RIGHT COLUMN: Description, Avatars & Decorative */}
          <div className="flex flex-col gap-6 items-end w-full md:w-auto">
            {/* Description Text */}
            <p className="text-xl md:text-2xl text-[#C9C9C9] text-right max-w-md leading-relaxed">
              Empresas que confiaram na Cortex para dominar as respostas da IA.
            </p>

            {/* Avatars & Counter */}
            <div className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              {/* Counter */}
              <span className="text-xs font-normal tracking-[0.2em] text-[#C9C9C9]">
                +47 EMPRESAS ATENDIDAS
              </span>

              {/* Avatar Stack */}
              <div className="flex items-center -space-x-3">
                {avatars.map((avatar, index) => (
                  <div key={index} className="w-9 h-9 rounded-full border border-[#F1F1F1] overflow-hidden bg-gray-800">
                    <img src={avatar} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Link/Tagline */}
            <div className="flex items-center gap-4 mt-4">
              <div className="w-16 h-14 opacity-60">
                <DecorativeArrowIcon />
              </div>
              <p className="text-right text-lg text-[#C9C9C9] max-w-[150px] leading-tight">
                Resultados comprovados em 30 dias.
              </p>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL SECTION (Large Card) */}
        <div className="relative w-full h-[550px] md:h-[480px] rounded-[40px] overflow-hidden group">
          {/* Background Image */}
          <img 
            src="https://framerusercontent.com/images/X4R8XtE9BCbg5qcsJWyzE4SQDg.png?width=5376&height=3072" 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          {/* Glass Card Content */}
          <div className="absolute left-0 top-0 bottom-0 w-full md:w-[480px] bg-black/20 backdrop-blur-xl border-r border-white/10 p-8 md:p-12 flex flex-col justify-between">
            {/* Header: Logo & Nav */}
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="w-24 opacity-90">
                <img src={testimonial.logo} alt="Client Logo" className="w-full h-auto object-contain" />
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
                  <ArrowNavLeft />
                </button>
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition">
                  <ArrowNavRight />
                </button>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="mt-8 mb-8">
              <p className="text-lg md:text-[18px] leading-relaxed text-white/90 font-light">
                "{testimonial.quote}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium text-sm leading-tight">{testimonial.author}</span>
                <span className="text-white/60 text-xs leading-tight">{testimonial.role}</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex items-center justify-center gap-3 p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                <div className="text-white/90">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold text-orange-500">{stat.value}</span>
                  <span className="text-[#C9C9C9] text-sm tracking-wide uppercase">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CasesSection;
