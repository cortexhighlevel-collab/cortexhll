import { ArrowLeft, ArrowRight } from "lucide-react";

const TeamMemberSection = () => {
  return (
    <section className="w-full bg-[#0D0D0D] text-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[500px]">
          
          {/* --- Left Column: Text Content --- */}
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
                Estrategista criativa com 7 anos de experiência nas áreas de Social Media, Design e Conteúdo.
              </p>
              
              {/* Attribution */}
              <div className="flex flex-col gap-1">
                <span className="text-white font-medium text-lg">Mariana Toy</span>
                <span className="text-white/60 text-sm">Head de Conteúdo e Estratégia Criativa</span>
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

          {/* --- Right Column: Image & Overlay --- */}
          <div className="relative h-[450px] lg:h-auto rounded-3xl overflow-hidden">
            {/* Background Image */}
            <img 
              src="https://framerusercontent.com/images/q5btAOUDm33kJ3iWd8LZiVkqSd4.jpg?width=1024&height=1024" 
              alt="Mariana Toy" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Gradient Overlay for better text readability at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Floating Glass Card */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
              <div className="flex flex-col gap-3">
                {/* Name in Card */}
                <h3 className="text-white font-semibold text-lg tracking-wide">
                  Mariana Toy
                </h3>
                
                {/* Description in Card */}
                <p className="text-white/80 text-sm leading-relaxed">
                  Atualmente, está a frente da equipe de criação de conteúdo e mídias da Human e integra o time de professores da Human Academy.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamMemberSection;
