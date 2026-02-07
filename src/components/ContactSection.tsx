import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Consulta de ${formData.name}`;
    const body = `Nombre: ${formData.name}\nTeléfono: ${formData.phone}\n\n${formData.message}`;
    window.location.href = `mailto:info@yachtcaremaintenance.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            {t('nav.contact')}
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">{t('contact.phone')}</h4>
                <p className="text-muted-foreground">+34 XXX XXX XXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">{t('contact.email')}</h4>
                <p className="text-muted-foreground">info@yachtcaremaintenance.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">Ubicación</h4>
                <p className="text-muted-foreground">Puerto Deportivo, España</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={t('contact.namePlaceholder')}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all"
                required
              />
              <input
                type="email"
                placeholder={t('contact.emailPlaceholder')}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all"
                required
              />
            </div>
            <input
              type="tel"
              placeholder={t('contact.phonePlaceholder')}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all"
            />
            <textarea
              placeholder={t('contact.messagePlaceholder')}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all resize-none"
              required
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gold hover:bg-gold-dark text-primary font-semibold rounded-lg transition-all hover:shadow-elevated tracking-wide"
            >
              {t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
