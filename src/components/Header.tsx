import { useState, useRef } from "react";
import { ChevronDown, ArrowRight, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import ContentDropdown from "./ContentDropdown";
import logoImage from "@/assets/logo_cortex_nova_preta.png";
import dividerIcon from "@/assets/nav-divider-icon.png";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Logo = () => (
  <img src={logoImage} alt="Cortex High Level" className="h-7" />
);

const LogoWhite = () => (
  <img src={logoImage} alt="Cortex High Level" className="h-7 brightness-0 invert" />
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
            <a href="#" className="nav-link tracking-wide">Início</a>
            
            <a href="#metodologia" className="nav-link tracking-wide">Método</a>
            
            <Popover>
              <PopoverTrigger asChild>
                <button className="nav-link flex items-center gap-1 cursor-pointer tracking-wide">
                  Serviços
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
            
            {/* Divider Icon */}
            <img 
              src={dividerIcon} 
              alt="" 
              className="h-6 w-auto object-contain mx-1"
            />
            
            <a href="#cases" className="nav-link tracking-wide">Cases</a>
            <a href="#equipe" className="nav-link tracking-wide">Equipe</a>
             <a href="#faq" className="nav-link tracking-wide">FAQ</a>
          </div>

          {/* Right Group */}
          <div className="flex items-center gap-2 ml-auto">
            <a href="#contato" className="btn-accent tracking-wider">
              Fale Conosco
              <ArrowRight className="w-2.5 h-2.5" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        {/* Mobile: Region Picker + Menu Button */}
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
                {/* Header do menu mobile */}
                <div className="flex items-center justify-between p-5">
                  <LogoWhite />
                  <DialogClose asChild>
                    <button className="p-2 border border-white/30 rounded-md hover:bg-white/10 transition-colors">
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </DialogClose>
                </div>
                
                {/* Links de navegação centralizados */}
                <nav className="flex flex-col items-center py-6 gap-5">
                  <a 
                    href="#" 
                    className="text-white/80 text-sm font-medium tracking-widest uppercase hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    INÍCIO
                  </a>
                  
                  <a 
                    href="#metodologia" 
                    className="text-white/80 text-sm font-medium tracking-widest uppercase hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    MÉTODO
                  </a>
                  
                  {/* Dropdown de Serviços */}
                  <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                    <CollapsibleTrigger className="flex items-center justify-center gap-2 px-16 py-3 border border-white/30 rounded-full text-white/80 text-sm font-medium tracking-widest uppercase hover:bg-white/10 transition-colors">
                      SERVIÇOS
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 flex flex-col items-center gap-3">
                      <a 
                        href="#servicos" 
                        className="text-white/60 text-sm hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        AI Intelligence
                      </a>
                      <a 
                        href="#servicos" 
                        className="text-white/60 text-sm hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Design
                      </a>
                      <a 
                        href="#servicos" 
                        className="text-white/60 text-sm hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Growth
                      </a>
                      <a 
                        href="#servicos" 
                        className="text-white/60 text-sm hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Infraestrutura
                      </a>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <a 
                    href="#cases" 
                    className="text-white/80 text-sm font-medium tracking-widest uppercase hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    CASES
                  </a>
                  <a 
                    href="#equipe" 
                    className="text-white/80 text-sm font-medium tracking-widest uppercase hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    EQUIPE
                  </a>
                  <a 
                    href="#faq" 
                    className="text-white/80 text-sm font-medium tracking-widest uppercase hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    FAQ
                  </a>
                </nav>
                
                {/* CTA Button */}
                <div className="px-6 pb-6 flex flex-col items-center gap-5">
                  <a 
                    href="#contato" 
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-[#f06600] text-white font-medium rounded-full hover:bg-[#d95b00] transition-colors text-sm tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    Fale Conosco
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  
                  {/* Language Selector */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-full">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img 
                        src="https://framerusercontent.com/images/80WuBBdsE94W3tmgnQr2bjV2a2E.png" 
                        alt="Brazil Flag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm text-white/80">BR</span>
                    <ChevronDown className="w-3 h-3 text-white/60" />
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <div className="region-pill">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img 
                src="https://framerusercontent.com/images/80WuBBdsE94W3tmgnQr2bjV2a2E.png" 
                alt="Brazil Flag"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-foreground">BR</span>
          </div>
        </div>

        {/* Desktop: Region Picker */}
        <div className="hidden md:block">
          <div className="region-pill">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img 
                src="https://framerusercontent.com/images/80WuBBdsE94W3tmgnQr2bjV2a2E.png" 
                alt="Brazil Flag"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-foreground">BR</span>
            </div>
          </div>
      </div>
    </header>
  );
};

export default Header;
