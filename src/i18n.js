import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './Locales/es/translation';
import en from './Locales/en/translation';

// Leer idioma guardado o usar español por defecto
const idiomaGuardado = localStorage.getItem("idioma") || "es";

i18n.use(initReactI18next).init({
  resources: {
    es,
    en
  },
  lng: idiomaGuardado,
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
