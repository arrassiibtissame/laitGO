import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      welcome: "Bienvenue sur LaitGO",
      email: "Email",
      password: "Mot de passe",
      login: "Se connecter"
    }
  },
  ar: {
    translation: {
      welcome: "مرحبا بك في LaitGO",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      login: "تسجيل الدخول"
    }
  },i
  // Ajoute ici Darija si tu veux
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // Change la langue ici
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 