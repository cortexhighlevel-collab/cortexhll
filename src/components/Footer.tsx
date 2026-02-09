import { Linkedin, Instagram, Twitter, ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import logoImage from "@/assets/logo_cortex_nova_preta.png";
import starIcon from "@/assets/logo_estrela.webp";
const Footer = () => {
  const navigationLinks = [{
    label: "Início",
    href: "#"
  }, {
    label: "Método",
    href: "#metodologia"
  }, {
    label: "Serviços",
    href: "#servicos"
  }, {
    label: "Cases",
    href: "#cases"
  }, {
    label: "Equipe",
    href: "#equipe"
  }, {
    label: "FAQ",
    href: "#faq"
  }];
  const serviceLinks = [{
    label: "Inteligência com IA",
    href: "#servicos"
  }, {
    label: "CRM & Leads",
    href: "#servicos"
  }, {
    label: "AI Referral Genie™",
    href: "#servicos"
  }, {
    label: "Design & Performance",
    href: "#servicos"
  }];
  const contactLinks = [{
    label: "contato@cortexhl.com",
    href: "mailto:contato@cortexhl.com",
    icon: Mail
  }];
  return <footer className="w-full bg-[#0A0B0E] text-white font-dm relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Top CTA Section */}
      

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <img src={logoImage} alt="Cortex High Level" className="h-10 mb-6 invert" />
            <p className="text-white/60 text-base leading-relaxed font-light mb-6 max-w-[280px]">
              Inteligência Digital que Gera Crescimento. Transformamos marcas em referências através de IA e estratégia.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-medium mb-6 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Navegação
            </h4>
            <ul className="space-y-4">
              {navigationLinks.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm font-light inline-block">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-medium mb-6 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Serviços
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm font-light inline-block">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact Card */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-medium mb-6 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Contato
            </h4>
            <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-6">
              <p className="text-white/80 text-sm mb-4 font-light">
                Pronto para transformar sua marca?
              </p>
              <a href="#contato" className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-full bg-orange-500 text-white text-sm font-medium uppercase tracking-wider hover:bg-orange-600 transition-colors group">
                Fale Conosco
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="mt-4 pt-4 border-t border-white/10">
                {contactLinks.map((link, index) => <a key={index} href={link.href} className="flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors">
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-white/40 text-sm font-light">
              <span>© 2026 Cortex High Level.</span>
              <span className="hidden md:inline">•</span>
              <span>Todos os direitos reservados.</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors font-light">
                Privacidade
              </a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors font-light">
                Termos
              </a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors font-light">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;