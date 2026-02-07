import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'es' | 'en';

interface Translations {
  [key: string]: { es: string; en: string };
}

const translations: Translations = {
  // Nav
  'nav.services': { es: 'Servicios', en: 'Services' },
  'nav.gallery': { es: 'Galería', en: 'Gallery' },
  'nav.about': { es: 'Nosotros', en: 'About Us' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },

  // Hero
  'hero.title': { es: 'Cuidado y Mantenimiento Profesional de Embarcaciones', en: 'Professional Yacht Care & Maintenance' },
  'hero.subtitle': { es: 'Años de experiencia en el sector marítimo. Empresa seria y responsable dedicada al mantenimiento integral de su embarcación.', en: 'Years of experience in the maritime sector. A serious and responsible company dedicated to the comprehensive maintenance of your vessel.' },
  'hero.cta': { es: 'Solicitar Presupuesto', en: 'Request a Quote' },
  'hero.services': { es: 'Ver Servicios', en: 'View Services' },

  // Services
  'services.title': { es: 'Nuestros Servicios', en: 'Our Services' },
  'services.subtitle': { es: 'Ofrecemos una amplia gama de servicios de mantenimiento y limpieza para todo tipo de embarcaciones', en: 'We offer a wide range of maintenance and cleaning services for all types of vessels' },

  'service.polishing': { es: 'Pulido de Barcos', en: 'Boat Polishing' },
  'service.polishing.desc': { es: 'Devolvemos el brillo original a su embarcación con técnicas profesionales de pulido', en: 'We restore the original shine to your vessel with professional polishing techniques' },
  'service.metals': { es: 'Pulido de Metales', en: 'Metal Polishing' },
  'service.metals.desc': { es: 'Pulido y restauración de todo tipo de metales marinos', en: 'Polishing and restoration of all types of marine metals' },
  'service.hull': { es: 'Reparaciones de Casco', en: 'Hull Repairs' },
  'service.hull.desc': { es: 'Reparaciones profesionales de casco y gel coat', en: 'Professional hull and gel coat repairs' },
  'service.teak': { es: 'Reparaciones de Teca', en: 'Teak Repairs' },
  'service.teak.desc': { es: 'Restauración y reparación de cubiertas y elementos de teca', en: 'Restoration and repair of teak decks and elements' },
  'service.awnings': { es: 'Toldos y Pasarelas', en: 'Awnings & Gangways' },
  'service.awnings.desc': { es: 'Instalación y reparación de toldos y pasarelas', en: 'Installation and repair of awnings and gangways' },
  'service.hydraulics': { es: 'Sistemas Hidráulicos', en: 'Hydraulic Systems' },
  'service.hydraulics.desc': { es: 'Mantenimiento y reparación de sistemas hidráulicos marinos', en: 'Maintenance and repair of marine hydraulic systems' },
  'service.electrical': { es: 'Electricidad y Electromecánica', en: 'Electrical & Electromechanical' },
  'service.electrical.desc': { es: 'Instalaciones eléctricas y reparaciones electromecánicas', en: 'Electrical installations and electromechanical repairs' },
  'service.carpentry': { es: 'Carpintería y Tapicería', en: 'Carpentry & Upholstery' },
  'service.carpentry.desc': { es: 'Trabajos de carpintería marina y tapicería náutica', en: 'Marine carpentry and nautical upholstery work' },
  'service.guard': { es: 'Guardianaje', en: 'Boat Guarding' },
  'service.guard.desc': { es: 'Servicio de vigilancia y cuidado de su embarcación', en: 'Surveillance and care service for your vessel' },
  'service.engine': { es: 'Mantenimiento de Motores', en: 'Engine Maintenance' },
  'service.engine.desc': { es: 'Mantenimiento preventivo y correctivo de motores marinos', en: 'Preventive and corrective maintenance of marine engines' },
  'service.cleaning': { es: 'Limpieza Interior y Exterior', en: 'Interior & Exterior Cleaning' },
  'service.cleaning.desc': { es: 'Limpieza profesional completa de su embarcación', en: 'Complete professional cleaning of your vessel' },
  'service.drydock': { es: 'Trabajos en Varadero', en: 'Dry Dock Services' },
  'service.drydock.desc': { es: 'Servicios completos en varadero incluyendo pintado de sentina', en: 'Complete dry dock services including bilge painting' },
  'service.caulking': { es: 'Calafateo', en: 'Caulking' },
  'service.caulking.desc': { es: 'Calafateo profesional de ventanas y maderas', en: 'Professional caulking of windows and wood' },
  'service.refrigeration': { es: 'Neveras', en: 'Refrigeration' },
  'service.refrigeration.desc': { es: 'Mantenimiento y reparación de sistemas de refrigeración', en: 'Maintenance and repair of refrigeration systems' },

  // Gallery
  'gallery.title': { es: 'Nuestros Trabajos', en: 'Our Work' },
  'gallery.subtitle': { es: 'Vea la transformación: antes y después de nuestros trabajos', en: 'See the transformation: before and after our work' },
  'gallery.before': { es: 'Antes', en: 'Before' },
  'gallery.after': { es: 'Después', en: 'After' },
  'gallery.placeholder': { es: 'Próximamente añadiremos fotos de nuestros trabajos', en: 'We will soon add photos of our work' },

  // About
  'about.title': { es: 'Sobre Nosotros', en: 'About Us' },
  'about.text1': { es: 'Somos una empresa seria y responsable con años de experiencia en el sector marítimo. Nos dedicamos al mantenimiento integral de embarcaciones, ofreciendo un servicio de calidad y profesionalismo.', en: 'We are a serious and responsible company with years of experience in the maritime sector. We are dedicated to the comprehensive maintenance of vessels, offering quality service and professionalism.' },
  'about.text2': { es: 'Nuestro equipo de profesionales cualificados trabaja con las mejores técnicas y materiales para garantizar resultados excepcionales en cada proyecto.', en: 'Our team of qualified professionals works with the best techniques and materials to guarantee exceptional results in every project.' },
  'about.experience': { es: 'Años de Experiencia', en: 'Years of Experience' },
  'about.clients': { es: 'Clientes Satisfechos', en: 'Satisfied Clients' },
  'about.projects': { es: 'Proyectos Completados', en: 'Completed Projects' },

  // Contact
  'contact.title': { es: 'Contacto', en: 'Contact' },
  'contact.subtitle': { es: 'Estamos a su disposición para cualquier tipo de consulta o presupuesto', en: 'We are at your disposal for any type of inquiry or quote' },
  'contact.name': { es: 'Nombre', en: 'Name' },
  'contact.email': { es: 'Correo Electrónico', en: 'Email' },
  'contact.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.message': { es: 'Mensaje', en: 'Message' },
  'contact.send': { es: 'Enviar Mensaje', en: 'Send Message' },
  'contact.namePlaceholder': { es: 'Su nombre', en: 'Your name' },
  'contact.emailPlaceholder': { es: 'su@email.com', en: 'your@email.com' },
  'contact.phonePlaceholder': { es: 'Su teléfono', en: 'Your phone' },
  'contact.messagePlaceholder': { es: 'Describa su consulta o solicite un presupuesto...', en: 'Describe your inquiry or request a quote...' },

  // Footer
  'footer.rights': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
  'footer.tagline': { es: 'Mantenimiento profesional de embarcaciones', en: 'Professional yacht maintenance' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = useCallback((key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language];
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
