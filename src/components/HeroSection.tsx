import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-yacht.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Yacht maintenance" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
        <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in">
          Yacht Care Maintenance & Cleaning
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl text-primary-foreground font-bold leading-tight max-w-4xl mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.15s' }}>
          {t('hero.title')}
        </h1>
        <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.45s' }}>
          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-4 bg-gold hover:bg-gold-dark text-primary font-semibold rounded transition-all hover:shadow-elevated tracking-wide"
          >
            {t('hero.cta')}
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground hover:border-gold hover:text-gold font-semibold rounded transition-all tracking-wide"
          >
            {t('hero.services')}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
