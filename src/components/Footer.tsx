import { MessageCircle, Instagram, Mail } from "lucide-react";
import logoImage from "@/assets/logo-cortex-branco.webp";

const data = {
  whatsappLink: "https://wa.me/5511999999999",
  instaLink: "https://instagram.com/cortex",
  emailContact: "mailto:contacto@cortex.com",
  company: {
    name: "Cortex",
    description:
      "Construindo experiências web inteligentes com tecnologias de vanguarda. Elevamos a sua presença digital com inovação e design.",
  },
  navigation: [
    { text: "Início", href: "#" },
    { text: "Método", href: "#metodologia" },
    { text: "Serviços", href: "#servicos" },
    { text: "Cases", href: "#cases" },
    { text: "Equipe", href: "#equipe" },
    { text: "FAQ", href: "#faq" },
  ],
  services: [
    { text: "Inteligência com IA", href: "#servicos" },
    { text: "CRM & Leads", href: "#servicos" },
    { text: "AI Referral Genie™", href: "#servicos" },
    { text: "Design & Performance", href: "#servicos" },
  ],
};

const socialLinks = [
  { icon: MessageCircle, label: "WhatsApp", href: data.whatsappLink },
  { icon: Instagram, label: "Instagram", href: data.instaLink },
  { icon: Mail, label: "E-mail", href: data.emailContact },
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#050505] text-white font-dm overflow-hidden">
      {/* Keyframe animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes one-anim { 
          from { box-shadow: 0 0 250px 20px #FF0000; } 
          to { box-shadow: 0 0 100px 15px #FF4500; } 
        }
        @keyframes two-anim { 
          from { box-shadow: 0 0 250px 20px #FF8C00; } 
          to { box-shadow: 0 0 100px 15px #FFD700; } 
        }
        @keyframes three-anim { 
          from { box-shadow: 0 0 250px 20px #FFD700; } 
          to { box-shadow: 0 0 100px 15px #FF4500; } 
        }
        @keyframes four-anim { 
          from { box-shadow: 0 0 250px 20px #B22222; } 
          to { box-shadow: 0 0 100px 15px #FFA500; } 
        }
        @keyframes five-anim { 
          from { box-shadow: 0 0 250px 20px #FF4500; } 
          to { box-shadow: 0 0 100px 15px #FFFF00; } 
        }
      ` }} />

      {/* Lighting effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute top-[-60%] w-full flex justify-center gap-8">
            <div className="relative">
              <div
                className="w-1 h-1 rounded-full absolute"
                style={{ animation: "one-anim 3s ease-in-out infinite alternate", left: "-100px" }}
              />
              <div
                className="w-1 h-1 rounded-full absolute"
                style={{ animation: "two-anim 4s ease-in-out infinite alternate", left: "-50px" }}
              />
              <div
                className="w-1 h-1 rounded-full absolute"
                style={{ animation: "three-anim 3.5s ease-in-out infinite alternate", left: "0px" }}
              />
              <div
                className="w-1 h-1 rounded-full absolute"
                style={{ animation: "four-anim 2.5s ease-in-out infinite alternate", left: "50px" }}
              />
              <div
                className="w-1 h-1 rounded-full absolute"
                style={{ animation: "five-anim 4.5s ease-in-out infinite alternate", left: "100px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-12 py-16">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-5">
            <img src={logoImage} alt="Cortex" className="h-10 mb-6" />
            <p className="text-white/50 text-sm leading-relaxed font-light mb-8 max-w-[320px]">
              {data.company.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-[18px] h-[18px] text-white/50 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <h4 className="text-white font-medium uppercase text-xs tracking-[0.2em]">
                Navegação
              </h4>
            </div>
            <ul className="space-y-3.5">
              {data.navigation.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm font-light inline-block"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <h4 className="text-white font-medium uppercase text-xs tracking-[0.2em]">
                Serviços
              </h4>
            </div>
            <ul className="space-y-3.5">
              {data.services.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm font-light inline-block"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm font-light">
            © {new Date().getFullYear()} Cortex Digital. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 hover:text-white text-sm transition-colors font-light">
              Privacidade
            </a>
            <a href="#" className="text-white/30 hover:text-white text-sm transition-colors font-light">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
