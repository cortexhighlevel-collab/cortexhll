import { MessageCircle, Instagram, Mail } from "lucide-react";
import logoImage from "@/assets/logo-cortex-branco.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/5511999999999" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/cortex" },
  { icon: Mail, label: "E-mail", href: "mailto:contacto@cortex.com" },
];

const Footer = () => {
  const { t } = useLanguage();

  const navigation = [
    { text: t("nav.home"), href: "#" },
    { text: t("nav.method"), href: "#metodologia" },
    { text: t("nav.services"), href: "#servicos" },
    { text: t("nav.cases"), href: "#cases" },
    { text: t("nav.team"), href: "#equipe" },
    { text: t("nav.faq"), href: "#faq" },
  ];

  const services = [
    { text: t("footer.service1"), href: "#servicos" },
    { text: t("footer.service2"), href: "#servicos" },
    { text: t("footer.service3"), href: "#servicos" },
    { text: t("footer.service4"), href: "#servicos" },
  ];

  return (
    <footer className="relative w-full bg-[#050505] text-white font-dm overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes footer-one { from { box-shadow: 0 0 250px 20px #FF0000; } to { box-shadow: 0 0 100px 15px #FF4500; } }
        @keyframes footer-two { from { box-shadow: 0 0 250px 20px #FF8C00; } to { box-shadow: 0 0 100px 15px #FFD700; } }
        @keyframes footer-three { from { box-shadow: 0 0 250px 20px #FFD700; } to { box-shadow: 0 0 100px 15px #FF4500; } }
        @keyframes footer-four { from { box-shadow: 0 0 250px 20px #B22222; } to { box-shadow: 0 0 100px 15px #FFA500; } }
        @keyframes footer-five { from { box-shadow: 0 0 250px 20px #FF4500; } to { box-shadow: 0 0 100px 15px #FFFF00; } }
      ` }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
        <div className="flex flex-col items-center text-center md:text-left md:items-start md:grid md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <img src={logoImage} alt="Cortex" className="h-8 md:h-10 mb-4 md:mb-6" />
            <p className="text-white/50 text-xs md:text-sm leading-relaxed font-light mb-6 max-w-[280px] md:max-w-[320px]">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group" aria-label={label}>
                  <Icon className="w-4 h-4 md:w-[18px] md:h-[18px] text-white/50 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-6 md:contents">
            <div className="md:col-span-3 text-left">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-orange-500" />
                <h4 className="text-white font-medium uppercase text-[10px] md:text-xs tracking-[0.2em]">{t("footer.navigation")}</h4>
              </div>
              <ul className="space-y-2.5 md:space-y-3.5">
                {navigation.map((item) => (
                  <li key={item.text}><a href={item.href} className="text-white/50 hover:text-white hover:translate-x-1 transition-all duration-200 text-xs md:text-sm font-light inline-block">{item.text}</a></li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-4 text-left">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-orange-500" />
                <h4 className="text-white font-medium uppercase text-[10px] md:text-xs tracking-[0.2em]">{t("footer.services")}</h4>
              </div>
              <ul className="space-y-2.5 md:space-y-3.5">
                {services.map((item) => (
                  <li key={item.text}><a href={item.href} className="text-white/50 hover:text-white hover:translate-x-1 transition-all duration-200 text-xs md:text-sm font-light inline-block">{item.text}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16 pt-5 md:pt-6 border-t border-white/10 flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-4">
          <p className="text-white/30 text-xs md:text-sm font-light">
            {t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-white/30 hover:text-white text-xs md:text-sm transition-colors font-light">{t("footer.privacy")}</a>
            <a href="#" className="text-white/30 hover:text-white text-xs md:text-sm transition-colors font-light">{t("footer.terms")}</a>
          </div>
        </div>
      </div>

      <div className="relative w-full pointer-events-none" style={{ marginBottom: '-10px' }}>
        <div className="rounded-[50%] h-5 w-full relative mx-auto" style={{ animation: "footer-one 5s ease-in-out infinite alternate" }}>
          <div className="rounded-[50%] h-5 w-[90%] relative mx-auto" style={{ animation: "footer-two 4s ease-in-out infinite alternate" }}>
            <div className="rounded-[50%] h-5 w-[80%] relative mx-auto" style={{ animation: "footer-three 3s ease-in-out infinite alternate" }}>
              <div className="rounded-[50%] h-5 w-[70%] relative mx-auto" style={{ animation: "footer-four 2s ease-in-out infinite alternate" }}>
                <div className="rounded-[50%] h-5 w-[60%] relative mx-auto" style={{ animation: "footer-five 1s ease-in-out infinite alternate" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
