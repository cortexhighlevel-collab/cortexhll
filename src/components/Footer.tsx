import { Linkedin, Instagram, Twitter } from "lucide-react";
import logoImage from "@/assets/logo_cortex_nova_preta.png";

const Footer = () => {
  const navigationLinks = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#equipe" },
    { label: "Blog", href: "#" },
    { label: "Cases", href: "#cases" },
  ];

  const serviceLinks = [
    { label: "AI Referral Engine™", href: "#metodologia" },
    { label: "Landing Pages", href: "#" },
    { label: "SEO & Growth", href: "#" },
    { label: "Automação", href: "#" },
  ];

  const contactLinks = [
    { label: "WhatsApp", href: "https://wa.me/5511999999999" },
    { label: "Email", href: "mailto:contato@cortexhl.com" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#0A0B0E] text-white py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <img 
              src={logoImage} 
              alt="Cortex High Level" 
              className="h-8 mb-4 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              "Inteligência Digital que Gera Crescimento"
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">Navegação</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">Serviços</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">Contato</h4>
            <ul className="space-y-3">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Cortex High Level. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Políticas de Privacidade
            </a>
            <a href="#" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
