import { ExternalLink, BookOpen, Instagram, FileText, Youtube, Beaker, Briefcase, Mail } from "lucide-react";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  link: string;
}

const FeatureCard = ({ title, subtitle, icon, link }: FeatureCardProps) => (
  <a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 rounded-2xl bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.08)] transition-all duration-200 group"
  >
    <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-white/70 group-hover:text-white transition-colors">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-white font-medium text-sm">{title}</span>
      <span className="text-white/50 text-xs">{subtitle}</span>
    </div>
  </a>
);

export const ContentDropdown = () => {
  const features = [
    {
      title: "Nossos Cases",
      subtitle: "Descubra nossos cases de sucesso",
      link: "https://the-human.ai/",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "Nosso blog",
      subtitle: "Acesse nosso conteúdo gratuito",
      link: "./blog",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "Perfil no instagram",
      subtitle: "Acompanhe nosso conteúdo no instagram",
      link: "https://www.instagram.com/human___academy/",
      icon: <Instagram className="w-5 h-5" />
    },
    {
      title: "Ebook gratuito",
      subtitle: "Tudo sobre IA e suas melhores ferramentas",
      link: "./acesso-ebook",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Canal no youtube",
      subtitle: "Acompanhe nosso conteúdo no youtube",
      link: "https://www.youtube.com/@HumanAcademy_AI",
      icon: <Youtube className="w-5 h-5" />
    },
    {
      title: "Labs",
      subtitle: "Um espaço inovador exclusivo para alunos",
      link: "https://labs.humanacademy.ai",
      icon: <Beaker className="w-5 h-5" />
    }
  ];

  return (
    <div className="w-[800px] bg-[rgb(20,20,20)] rounded-3xl p-6 shadow-2xl border border-white/5">
      <div className="flex gap-6">
        {/* Features Grid */}
        <div className="flex-1">
          <div className="mb-4">
            <span className="text-white/40 text-xs font-medium uppercase tracking-wider">
              Features
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>

        {/* Podcast Section */}
        <div className="w-[280px] flex flex-col gap-4">
          <div>
            <span className="text-white/40 text-xs font-medium uppercase tracking-wider">
              Podcast
            </span>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[200px]">
            {/* Background Image */}
            <img 
              src="https://framerusercontent.com/images/O24lTVHYWqpxgLkB4LgM4pLJJE.jpg"
              alt="Podcast background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            {/* Content Overlay */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <div className="space-y-2">
                <h3 className="text-white font-semibold text-sm leading-tight">
                  Criatividade, Surrealismo e uma pitada de Acidez
                </h3>
                <p className="text-white/60 text-xs">
                  com Bruno Zampoli
                </p>
                {/* Custom Button */}
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-xs font-medium hover:opacity-90 transition-opacity mt-2"
                >
                  Assistir agora
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 my-5" />

      {/* Newsletter Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <Mail className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-white text-sm font-medium">
              Quer receber atualizações da nossa newsletter?
            </p>
            <p className="text-white/50 text-xs">
              Inscreva-se para não perder nada.
            </p>
          </div>
        </div>
        <input 
          type="email"
          placeholder="Seu e-mail"
          className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder:text-white/30 w-[200px] focus:outline-none focus:border-accent/50 transition-colors"
        />
      </div>
    </div>
  );
};

export default ContentDropdown;
