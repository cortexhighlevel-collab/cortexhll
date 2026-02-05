import { useState } from "react";
import { ChevronDown, ArrowRight, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import ContentDropdown from "./ContentDropdown";
import logoImage from "@/assets/logo_cortex_nova_preta.png";
import dividerIcon from "@/assets/nav-divider-icon.png";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const Logo = () => (
  <img src={logoImage} alt="Cortex High Level" className="h-7" />
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            
            <a href="#metodologia" className="nav-link tracking-wide">Método</a>
            
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
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white p-0">
              <div className="flex flex-col h-full">
                {/* Header do menu mobile */}
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <img src={logoImage} alt="Cortex High Level" className="h-6" />
                  <SheetClose asChild>
                    <button className="p-2">
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </SheetClose>
                </div>
                
                {/* Links de navegação */}
                <nav className="flex flex-col p-5 gap-1">
                  <a 
                    href="#" 
                    className="py-3 px-4 text-gray-800 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Início
                  </a>
                  <a 
                    href="#metodologia" 
                    className="py-3 px-4 text-gray-800 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Método
                  </a>
                  <a 
                    href="#cases" 
                    className="py-3 px-4 text-gray-800 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Cases
                  </a>
                  <a 
                    href="#equipe" 
                    className="py-3 px-4 text-gray-800 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Equipe
                  </a>
                  <a 
                    href="#faq" 
                    className="py-3 px-4 text-gray-800 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    FAQ
                  </a>
                </nav>
                
                {/* CTA Button */}
                <div className="mt-auto p-5 border-t border-gray-100">
                  <a 
                    href="#contato" 
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#f06600] text-white font-medium rounded-full hover:bg-[#d95b00] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Fale Conosco
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
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
