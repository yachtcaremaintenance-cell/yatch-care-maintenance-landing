import { useLanguage } from '@/contexts/LanguageContext';
import {
  Sparkles, Wrench, Shield, TreePine, Umbrella, Droplets,
  Zap, Hammer, Eye, Settings, SprayCan, Ship, PaintBucket, Thermometer
} from 'lucide-react';
import servicePolishing from '@/assets/service-polishing.jpg';
import serviceTeak from '@/assets/service-teak.jpg';
import serviceEngine from '@/assets/service-engine.jpg';

const services = [
  { key: 'polishing', icon: Sparkles },
  { key: 'metals', icon: PaintBucket },
  { key: 'hull', icon: Shield },
  { key: 'teak', icon: TreePine },
  { key: 'awnings', icon: Umbrella },
  { key: 'hydraulics', icon: Droplets },
  { key: 'electrical', icon: Zap },
  { key: 'carpentry', icon: Hammer },
  { key: 'guard', icon: Eye },
  { key: 'engine', icon: Settings },
  { key: 'cleaning', icon: SprayCan },
  { key: 'drydock', icon: Ship },
  { key: 'caulking', icon: Wrench },
  { key: 'refrigeration', icon: Thermometer },
];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            {t('nav.services')}
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Featured images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { img: servicePolishing, label: t('service.polishing') },
            { img: serviceTeak, label: t('service.teak') },
            { img: serviceEngine, label: t('service.engine') },
          ].map((item, i) => (
            <div key={i} className="relative group overflow-hidden rounded-lg shadow-card">
              <img src={item.img} alt={item.label} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/30 transition-colors" />
              <div className="absolute bottom-4 left-4">
                <span className="text-primary-foreground font-display text-xl font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="group p-6 bg-card rounded-lg border border-border hover:border-gold/40 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {t(`service.${key}`)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(`service.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
