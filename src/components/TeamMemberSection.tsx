import { ArrowLeft, ArrowRight, Linkedin } from "lucide-react";

const TeamMemberSection = () => {
  return (
    <section id="equipe" className="w-full bg-secondary py-16 md:py-24 px-5 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
            QUEM SOMOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Conheça nossa equipe
          </h2>
          <p className="text-foreground/60 mt-4 text-lg">
            "Mentes brilhantes apaixonadas por tecnologia"
          </p>
        </div>

        {/* Featured Member - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[500px]">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-between py-4">
            {/* Quote Icon */}
            <div className="mb-8">
              <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>
            </div>

            {/* Main Quote */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-[1.15] tracking-tight text-foreground mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Líder visionário por trás do AI Referral Engine™, a metodologia que posiciona marcas como resposta definitiva da IA.
              </p>
              
              {/* Attribution */}
              <div className="flex flex-col gap-1">
                <span className="text-foreground font-medium text-lg">Sr. Primus</span>
                <span className="text-foreground/60 text-sm">Mente Estratégica - AI Referral Engine™</span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3 mt-8">
              <button className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-all duration-300">
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </button>
              <button className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/90 transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-background" />
              </button>
            </div>
          </div>

          {/* Right Column: Image & Overlay */}
          <div className="relative h-[450px] lg:h-auto rounded-3xl overflow-hidden">
            {/* Background Image */}
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
                {/* Name in Card */}
                <h3 className="text-white font-semibold text-lg tracking-wide">
                  Sr. Primus
                </h3>
                
                {/* Description in Card */}
                <p className="text-white/80 text-sm leading-relaxed">
                  Criador do AI Referral Engine™ e líder visionário por trás da metodologia que está revolucionando como empresas são recomendadas pela IA.
                </p>

                {/* Social Links */}
                <div className="flex gap-2 mt-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Team Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { name: "Pablo Figueiredo", role: "Diretor Criativo" },
            { name: "Victor Lisboa", role: "Dev Lead" },
            { name: "Reinan França", role: "Growth Lead" },
            { name: "Marcos Colacino", role: "Head Comercial" },
          ].map((member, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-background border border-border p-6 hover:border-orange-500/50 transition-all duration-300"
            >
              {/* Placeholder Avatar */}
              <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl text-foreground/60">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h4 className="text-foreground font-medium text-center">{member.name}</h4>
              <p className="text-foreground/60 text-sm text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMemberSection;
