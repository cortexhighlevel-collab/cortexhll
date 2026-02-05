import { ExternalLink, Mail, Brain, Palette, TrendingUp, Server } from "lucide-react";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  link?: string;
}

const FeatureCard = ({ title, subtitle, icon }: FeatureCardProps) => (
  <div 
    className="flex items-center gap-4 p-4 rounded-2xl bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.08)] transition-all duration-200 group"
  >
    <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-white/70 group-hover:text-white transition-colors">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-white font-medium text-sm">{title}</span>
      <span className="text-white/50 text-xs">{subtitle}</span>
    </div>
  </div>
);

export const ContentDropdown = () => {
  const services = [
    {
      title: "AI Intelligence & CRM",
      subtitle: "Automação e inteligência artificial",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Design & Performance",
      subtitle: "Identidade visual e conversão",
      icon: <Palette className="w-5 h-5" />
    },
    {
      title: "Growth & Traffic",
      subtitle: "Estratégias de crescimento",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Infraestrutura",
      subtitle: "Soluções técnicas robustas",
      icon: <Server className="w-5 h-5" />
    }
  ];

  return (
    <div className="w-[600px] bg-[rgb(20,20,20)] rounded-3xl p-6 shadow-2xl border border-white/5 font-dm">
      <div className="flex gap-6">
        {/* Services Grid */}
        <div className="flex-1">
          <div className="mb-4">
            <span className="text-orange-500 text-xs font-medium uppercase tracking-wider">
              Serviços
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {services.map((service, idx) => (
              <FeatureCard key={idx} {...service} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-[180px] flex flex-col justify-center">
          <div className="bg-orange-500 rounded-2xl p-4 text-center">
            <p className="text-white text-sm font-medium mb-3">
              Pronto para escalar?
            </p>
            <a 
              href="#contato"
              className="inline-flex items-center gap-2 bg-white text-orange-500 px-4 py-2 rounded-full text-xs font-medium hover:bg-white/90 transition-opacity"
            >
              Fale Conosco
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDropdown;
