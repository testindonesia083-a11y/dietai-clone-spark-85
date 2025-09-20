import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import cameraIcon from "@/assets/camera.webp";
import creditCardIcon from "@/assets/credit-card.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Funcionalidades", href: "#benefits", icon: cameraIcon },
    { label: "Planos", href: "#pricing", icon: creditCardIcon },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center lg:justify-between">
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold gradient-text">LifeApp</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2 text-sm font-bold text-black hover:text-primary transition-colors"
                >
                  <img src={item.icon} alt={item.label} className="w-[18px] h-[18px]" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Assinar agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4 border-t pt-4">
            {navItems.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2 text-sm font-bold text-black hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img src={item.icon} alt={item.label} className="w-[18px] h-[18px]" />
                  <span>{item.label}</span>
                </a>
              );
            })}
            <div className="pt-4">
              <Button 
                variant="hero" 
                size="lg"
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Assinar agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;