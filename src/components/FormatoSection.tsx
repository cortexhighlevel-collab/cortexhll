const ArrowIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>;
interface ServiceCardProps {
  tag: string;
  title: string;
  subtitle: string;
  items: string[];
  imageUrl: string;
}
const ServiceCard = ({
  tag,
  title,
  subtitle,
  items,
  imageUrl
}: ServiceCardProps) => <div className="course-card group">
    <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
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
          <h3 className="text-white text-2xl md:text-3xl font-medium leading-tight mb-3">{title}</h3>
          <ul className="space-y-1">
            {items.map((item, index) => <li key={index} className="text-white/70 text-sm flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-orange-500"></span>
                {item}
              </li>)}
          </ul>
        </div>
        
        <a href="#contato" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground text-sm font-semibold uppercase w-fit hover:bg-white/90 transition-colors">
          Saiba Mais
          <ArrowIcon />
        </a>
      </div>
    </div>
  </div>;
const FormatoSection = () => {
  const services = [{
    tag: "AI INTELLIGENCE",
    title: "AI Intelligence & CRM",
    subtitle: "Automação inteligente",
    items: ["Funis de Venda", "Bots de IA", "Email Automation", "Predictions"],
    imageUrl: "https://framerusercontent.com/images/LLEdm7hWVMfprlCCIi2LHXlJKE.jpg"
  }, {
    tag: "DESIGN",
    title: "Design & Performance",
    subtitle: "Experiências premium",
    items: ["Landing Pages", "Sites Premium", "Branding Digital", "Motion Design"],
    imageUrl: "https://framerusercontent.com/images/oVMN8WwOgbNj16xxfJLPAo3jKI.jpg"
  }, {
    tag: "GROWTH",
    title: "Growth & Traffic",
    subtitle: "Crescimento acelerado",
    items: ["SEO Avançado", "Tráfego Pago", "Growth Hacking", "AI Referral Engine™"],
    imageUrl: "https://framerusercontent.com/images/gDwvpLGglqXMdntEV9jyyjDmc.jpg"
  }];
  return <section className="w-full px-5 md:px-12 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-10 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight max-w-[600px]">
            Uma gama completa de soluções para seu crescimento.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => <ServiceCard key={index} {...service} />)}
        </div>
      </div>
    </section>;
};
export default FormatoSection;