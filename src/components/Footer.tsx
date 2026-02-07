import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary py-12 border-t border-gold/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="YachtCare Logo" className="h-8 w-auto" />
            <span className="text-primary-foreground/40 text-sm">
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
