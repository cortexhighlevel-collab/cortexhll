import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import ContentDropdown from "./ContentDropdown";
import logoImage from "@/assets/logo_cortex_nova_preta.png";
import dividerIcon from "@/assets/nav-divider-icon.png";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import CTAButton from "./CTAButton";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const Logo = () => (
  <img src={logoImage} alt="Cortex High Level" className="h-7" />
);

const LogoWhite = () => (
  <img src={logoImage} alt="Cortex High Level" className="h-7 brightness-0 invert" />
);

const flags: Record<Language, { src: string; label: string }> = {
  pt: {
    src: "https://framerusercontent.com/images/80WuBBdsE94W3tmgnQr2bjV2a2E.png",
    label: "BR",
  },
  en: {
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png",
    label: "EN",
  },
};

const LanguageSwitcher = ({ dark = false }: { dark?: boolean }) => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const current = flags[language];
  const other = language === "pt" ? "en" : "pt";
  const otherFlag = flags[other];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className={`region-pill cursor-pointer ${dark ? "bg-zinc-800 border-white/10" : ""}`}>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src={current.src} alt={current.label} className="w-full h-full object-cover" />
          </div>
          <span className={`text-sm font-medium ${dark ? "text-white/80" : "text-foreground"}`}>{current.label}</span>
          <ChevronDown className={`w-3 h-3 ${dark ? "text-white/60" : "text-foreground/60"}`} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2 rounded-xl" align="end" sideOffset={8}>
        <button
          onClick={() => { setLanguage(other); setOpen(false); }}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors w-full"
        >
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <img src={otherFlag.src} alt={otherFlag.label} className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-medium">{otherFlag.label}</span>
        </button>
      </PopoverContent>
    </Popover>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white z-50 rounded-b-3xl border-b-4 border-orange-500 shadow-lg">
      <div className="w-full max-w-[1800px] mx-auto px-5 md:px-12 py-3 flex justify-between items-center font-dm">
        {/* Logo */}
        <a href="#" className="block hover:opacity-70 transition-opacity" aria-label="Cortex High Level">
          <Logo />
        </a>

        {/* Navigation Pill */}
        <nav className="nav-pill rounded-full py-1.5 px-2 md:px-2 flex items-center gap-3 h-16 shadow-lg mx-8 flex-1 max-w-[716px] hidden md:flex">
          {/* Left Group */}
          <div className="flex items-center gap-1">
            <a href="#" className="nav-link tracking-wide">{t("nav.home")}</a>
            <a href="#metodologia" className="nav-link tracking-wide">{t("nav.method")}</a>
            
            <Popover>
              <PopoverTrigger asChild>
                <button className="nav-link flex items-center gap-1 cursor-pointer tracking-wide">
                  {t("nav.services")}
                  <ChevronDown className="w-2.5 h-2.5" />
                </button>
              </PopoverTrigger>
              <PopoverContent 
                className="w-auto p-0 border-0 bg-transparent shadow-none" 
                align="start"
                sideOffset={12}
              >
                <ContentDropdown />
              </PopoverContent>
            </Popover>
            
            <img src={dividerIcon} alt="" className="h-6 w-auto object-contain mx-1" />
            
            <a href="#cases" className="nav-link tracking-wide">{t("nav.cases")}</a>
            <a href="#equipe" className="nav-link tracking-wide">{t("nav.team")}</a>
            <a href="#faq" className="nav-link tracking-wide">{t("nav.faq")}</a>
          </div>

          {/* Right Group */}
          <div className="flex items-center gap-2 ml-auto">
            <CTAButton href="#contato" className="nav-cta">
              {t("nav.contact")}
            </CTAButton>
          </div>
        </nav>

        {/* Mobile Menu Button + Region */}
        <div className="md:hidden flex items-center gap-2">
          <button className="p-3" onClick={() => setIsOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="w-[90%] max-w-[340px] bg-zinc-900 p-0 border-none rounded-2xl top-[35%] translate-y-[-35%]">
              <div className="flex flex-col text-white">
                <div className="flex items-center justify-between p-5">
                  <LogoWhite />
                  <DialogClose asChild>
                    <button className="p-2 border border-white/30 rounded-md hover:bg-white/10 transition-colors">
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </DialogClose>
                </div>
                
                <nav className="flex flex-col items-center py-6 gap-5">
                  <a href="#" className="text-white/80 text-sm font-medium tracking-widest uppercase hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                    {t("nav.home")}
                  </a>
                  <a href="#metodologia" className="text-white/80 text-sm font-medium tracking-widest uppercase hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                    {t("nav.method")}
                  </a>
                  
                  <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                    <CollapsibleTrigger className="flex items-center justify-center gap-2 px-16 py-3 border border-white/30 rounded-full text-white/80 text-sm font-medium tracking-widest uppercase hover:bg-white/10 transition-colors">
                      {t("nav.services")}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 flex flex-col items-center gap-3">
                      {["mobile.ai", "mobile.design", "mobile.growth", "mobile.infra"].map((key) => (
                        <a
                          key={key}
                          href="#servicos"
                          className="text-white/60 text-sm hover:text-white transition-colors"
                          onClick={() => {
                            setIsOpen(false);
                            setTimeout(() => {
                              document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          }}
                        >
                          {t(key)}
                        </a>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <a href="#cases" className="text-white/80 text-sm font-medium tracking-widest uppercase hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                    {t("nav.cases")}
                  </a>
                  <a href="#equipe" className="text-white/80 text-sm font-medium tracking-widest uppercase hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                    {t("nav.team")}
                  </a>
                  <a href="#faq" className="text-white/80 text-sm font-medium tracking-widest uppercase hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                    {t("nav.faq")}
                  </a>
                </nav>
                
                <div className="px-6 pb-6 flex flex-col items-center gap-5">
                  <div onClick={() => setIsOpen(false)}>
                    <CTAButton href="#contato" className="nav-cta">
                      {t("nav.contact")}
                    </CTAButton>
                  </div>
                  
                  <LanguageSwitcher dark />
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <LanguageSwitcher />
        </div>

        {/* Desktop: Region Picker */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
