import { useLanguage } from '@/contexts/LanguageContext';
import { ImageIcon } from 'lucide-react';

const GallerySection = () => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            {t('nav.gallery')}
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Placeholder for before/after photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-card rounded-lg overflow-hidden shadow-card border border-border">
              <div className="grid grid-cols-2">
                <div className="h-48 bg-muted flex flex-col items-center justify-center border-r border-border">
                  <ImageIcon className="w-8 h-8 text-muted-foreground/40 mb-2" />
                  <span className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-wider">
                    {t('gallery.before')}
                  </span>
                </div>
                <div className="h-48 bg-gold/5 flex flex-col items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-gold/40 mb-2" />
                  <span className="text-xs font-semibold text-gold/60 uppercase tracking-wider">
                    {t('gallery.after')}
                  </span>
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm text-muted-foreground italic">{t('gallery.placeholder')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
