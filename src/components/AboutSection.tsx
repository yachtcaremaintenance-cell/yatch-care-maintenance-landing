import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Users, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, value: '10+', label: t('about.experience') },
    { icon: Users, value: '500+', label: t('about.clients') },
    { icon: CheckCircle, value: '2000+', label: t('about.projects') },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
              {t('nav.about')}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              {t('about.title')}
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
              {t('about.text1')}
            </p>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              {t('about.text2')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center p-6 border border-primary-foreground/10 rounded-lg">
                <Icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="font-display text-3xl font-bold text-gold mb-1">{value}</div>
                <div className="text-primary-foreground/60 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
