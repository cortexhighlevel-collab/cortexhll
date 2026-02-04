import { ArrowLeft, ArrowRight, Linkedin } from "lucide-react";

const TeamMemberSection = () => {
  const teamMembers = [
    {
      name: "Sr. Primus",
      role: "Mente Estratégica",
      subtitle: "AI Referral Engine™",
      bio: "Criador do AI Referral Engine™ e líder visionário por trás da metodologia Cortex.",
      image: "https://framerusercontent.com/images/q5btAOUDm33kJ3iWd8LZiVkqSd4.jpg?width=1024&height=1024",
      featured: true,
    },
  ];

  const otherMembers = [
    { name: "Pablo Figueiredo", role: "Diretor Criativo" },
    { name: "Victor Lisboa", role: "Dev Lead" },
    { name: "Reinan França", role: "Growth Lead" },
    { name: "Marcos Colacino", role: "Head Comercial" },
  ];

  return (
    <section id="equipe" className="w-full bg-[#0D0D0D] text-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-28">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
            QUEM SOMOS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
            Conheça nossa equipe
          </h2>
          <p className="text-white/60 mt-4 text-lg">
            "Mentes brilhantes apaixonadas por tecnologia"
          </p>
        </div>

        {/* Featured Member */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[500px] mb-16">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-between py-4">
            {/* Quote Icon */}
            <div className="mb-8">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>
            </div>

            {/* Main Quote */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight text-[#F2F2F2] mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Líder visionário por trás do AI Referral Engine™, a metodologia que posiciona marcas como resposta definitiva da IA.
              </p>
              
              {/* Attribution */}
              <div className="flex flex-col gap-1">
                <span className="text-white font-medium text-lg">Sr. Primus</span>
                <span className="text-white/60 text-sm">Mente Estratégica - AI Referral Engine™</span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3 mt-8">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>

          {/* Right Column: Image & Overlay */}
          <div className="relative h-[450px] lg:h-auto rounded-3xl overflow-hidden">
            <img 
              src="https://framerusercontent.com/images/q5btAOUDm33kJ3iWd8LZiVkqSd4.jpg?width=1024&height=1024" 
              alt="Sr. Primus" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Floating Glass Card */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-semibold text-lg tracking-wide">
                  Sr. Primus
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Criador do AI Referral Engine™ e líder visionário por trás da metodologia que está revolucionando como empresas são recomendadas pela IA.
                </p>
                <div className="flex gap-2 mt-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Team Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {otherMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
            >
              {/* Placeholder Avatar */}
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl text-white/60">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h4 className="text-white font-medium text-center">{member.name}</h4>
              <p className="text-white/60 text-sm text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMemberSection;
