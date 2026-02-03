const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

interface CourseCardProps {
  tag: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonText: string;
  isComingSoon?: boolean;
}

const CourseCard = ({ tag, title, subtitle, imageUrl, buttonText, isComingSoon = false }: CourseCardProps) => (
  <div className="course-card group">
    <img 
      src={imageUrl} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="course-overlay absolute inset-0" />
    
    <div className="absolute inset-0 p-6 flex flex-col justify-between">
      {/* Tag */}
      <div className="flex">
        <div className="course-tag">
          <span className="dot" />
          {tag}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-white/80 text-sm mb-1">{subtitle}</p>
          <h3 className="text-white text-2xl md:text-3xl font-medium leading-tight">{title}</h3>
        </div>
        
        {isComingSoon ? (
          <span className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/20 text-white text-sm font-semibold uppercase w-fit">
            {buttonText}
          </span>
        ) : (
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground text-sm font-semibold uppercase w-fit hover:bg-white/90 transition-colors"
          >
            {buttonText}
            <ArrowIcon />
          </a>
        )}
      </div>
    </div>
  </div>
);

const FormatoSection = () => {
  const courses = [
    {
      tag: "PASS",
      title: "Cursos Online",
      subtitle: "Criação com IA",
      imageUrl: "https://framerusercontent.com/images/LLEdm7hWVMfprlCCIi2LHXlJKE.jpg",
      buttonText: "SABER MAIS",
      isComingSoon: false,
    },
    {
      tag: "EXPERIENCE",
      title: "Cursos Presenciais",
      subtitle: "Imersões e experiências ao vivo",
      imageUrl: "https://framerusercontent.com/images/oVMN8WwOgbNj16xxfJLPAo3jKI.jpg",
      buttonText: "EM BREVE",
      isComingSoon: true,
    },
    {
      tag: "COMPANY",
      title: "Treinamento Para Empresas",
      subtitle: "Líderes e equipes criativas",
      imageUrl: "https://framerusercontent.com/images/gDwvpLGglqXMdntEV9jyyjDmc.jpg",
      buttonText: "SABER MAIS",
      isComingSoon: false,
    },
  ];

  return (
    <section className="w-full px-5 md:px-12 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-10 md:mb-16 max-w-[600px]">
          Um jeito fácil de aprender, no formato que você precisa.
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormatoSection;
