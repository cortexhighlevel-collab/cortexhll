import { ChevronDown, ArrowRight } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import ContentDropdown from "./ContentDropdown";
import logoImage from "@/assets/logo_cortex_nova_preta.png";

import navDividerIcon from "@/assets/nav-divider-icon.png";

const Logo = () => (
  <img src={logoImage} alt="Cortex Logo" className="h-7" />
);

const NavDivider = () => (
  <img src={navDividerIcon} alt="" className="h-6 w-auto mx-1 object-contain" />
);

export const Header = () => {
  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 w-full max-w-[1800px] px-5 md:px-12 flex justify-between items-center z-50">
      {/* Logo */}
      <a href="#" className="block hover:opacity-70 transition-opacity" aria-label="Human Academy Home">
        <Logo />
      </a>

      {/* Navigation Pill */}
      <nav className="nav-pill rounded-full py-1.5 px-2 md:px-2 flex items-center gap-3 h-16 shadow-lg mx-8 flex-1 max-w-[716px] hidden md:flex">
        {/* Left Group */}
        <div className="flex items-center gap-1">
          <a href="#" className="nav-link">Sobre</a>
          
          <Popover>
            <PopoverTrigger asChild>
              <button className="nav-link flex items-center gap-1 cursor-pointer">
                Conteúdos
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
          
          <a href="#" className="nav-link">Contato</a>
        </div>

        <NavDivider />

        {/* Right Group */}
        <div className="flex items-center gap-2 ml-auto">
          <a href="#" className="nav-link hidden lg:block">Para Empresas</a>
          <a href="#" className="btn-accent">
            Academy Pass
            <ArrowRight className="w-2.5 h-2.5" />
          </a>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden nav-pill rounded-full p-3">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Region Picker */}
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
    </header>
  );
};

export default Header;
