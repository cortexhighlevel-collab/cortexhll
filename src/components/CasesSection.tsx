import { ArrowLeft, ArrowRight } from "lucide-react";

const CasesSection = () => {
  const testimonials = [
    {
      logo: "https://framerusercontent.com/images/4wtV8GFtM9cMCc7wLhXjMsg59o.png?width=1820&height=573",
      quote: "A Cortex transformou nossa presença digital. Em 3 meses passamos de invisíveis para top 3 nas respostas da IA. O ROI superou todas as expectativas.",
      author: "João Silva",
      role: "CEO @ TechStartup",
      metrics: [
        { value: "+340%", label: "leads" },
        { value: "Top 3", label: "AI" },
        { value: "2x", label: "velocidade" },
      ],
      image: "https://framerusercontent.com/images/wTyKIHPDLvKHIu74YHBt7Hm44A.jpeg?width=200&height=200",
    },
  ];

  const stats = [
    { value: "+500%", label: "ROI médio" },
    { value: "47", label: "empresas" },
    { value: "30", label: "dias" },
  ];

  return (
    <section id="cases" className="w-full bg-secondary py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
            PROVA SOCIAL
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Resultados que falam
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative w-full rounded-[32px] overflow-hidden bg-background border border-border p-8 md:p-12 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
              {/* Left - Content */}
              <div className="flex-1">
                {/* Logo */}
                <div className="w-32 opacity-60 mb-6">
                  <img src={testimonial.logo} alt="Client Logo" className="w-full h-auto object-contain" />
                </div>
                
                {/* Quote */}
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-foreground font-medium">{testimonial.author}</p>
                    <p className="text-foreground/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3">
                  {testimonial.metrics.map((metric, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium"
                    >
                      📈 {metric.value} {metric.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right - Navigation */}
              <div className="flex md:flex-col gap-3">
                <button className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition">
                  <ArrowLeft className="w-5 h-5 text-foreground" />
                </button>
                <button className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/90 transition">
                  <ArrowRight className="w-5 h-5 text-background" />
                </button>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2, 3, 4].map((i) => (
              <span 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-orange-500' : 'bg-foreground/20'}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center py-6 px-4 rounded-2xl bg-background border border-border"
            >
              <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-1">{stat.value}</p>
              <p className="text-foreground/60 text-sm uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
