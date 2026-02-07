import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['services', 'gallery', 'about', 'contact'];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <img src={logo} alt="YachtCare Logo" className="h-10 lg:h-12 w-auto" />
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-primary-foreground/80 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="ml-4 px-3 py-1.5 border border-gold/40 rounded text-gold text-sm font-semibold hover:bg-gold/10 transition-colors"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="px-2 py-1 border border-gold/40 rounded text-gold text-xs font-semibold"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary-foreground">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gold/10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left py-3 text-primary-foreground/80 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
