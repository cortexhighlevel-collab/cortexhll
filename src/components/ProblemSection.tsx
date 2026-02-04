import { Globe, TrendingDown, EyeOff } from "lucide-react";

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

const ProblemCard = ({ icon, title, subtitle, description }: ProblemCardProps) => (
  <div className="group relative rounded-3xl p-6 md:p-8 bg-background border border-border hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    {/* Icon */}
    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-6 text-red-500">
      {icon}
    </div>
    
    {/* Content */}
    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-foreground/60 mb-4">{subtitle}</p>
    <p className="text-foreground/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {description}
    </p>
  </div>
);

const ProblemSection = () => {
  const problems = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Site que não vende",
      subtitle: "Seu site é lindo mas...",
      description: "Você investiu em um site bonito, mas ele não converte visitantes em clientes. Falta estratégia de conversão e posicionamento.",
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Tráfego sem ROI",
      subtitle: "Gastou em ads mas...",
      description: "Você queima dinheiro em anúncios pagos sem ver retorno real. O problema não é o tráfego, é a estratégia por trás.",
    },
    {
      icon: <EyeOff className="w-6 h-6" />,
      title: "Invisível para IAs",
      subtitle: "ChatGPT não recomenda...",
      description: "Quando alguém pergunta ao ChatGPT, Claude ou Gemini sobre seu nicho, sua empresa não aparece. Você é invisível para a nova era.",
    },
  ];

  return (
    <section className="w-full px-5 md:px-12 py-16 md:py-24 bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-red-500/10 text-red-500 text-sm font-medium mb-4">
            VOCÊ SE IDENTIFICA?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Problemas que impedem<br />seu crescimento
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
