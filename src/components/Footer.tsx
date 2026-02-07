import { useLanguage } from '@/contexts/LanguageContext';
import { Anchor } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary py-12 border-t border-gold/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Anchor className="w-5 h-5 text-gold" />
            <span className="font-display text-lg text-primary-foreground font-semibold">
              YachtCare
            </span>
            <span className="text-primary-foreground/40 text-sm ml-2">
              {t('footer.tagline')}
            </span>
          </div>
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Yacht Care Maintenance & Cleaning. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
