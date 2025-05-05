import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './Locales/es/translation';
import en from './Locales/en/translation';

i18n.use(initReactI18next).init({
  resources: {
    es,
    en
  },
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  }
});
export default i18n;

