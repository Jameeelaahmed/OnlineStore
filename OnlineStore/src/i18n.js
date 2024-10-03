import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';
const resources = {
    en: {
        translation: translationEN
    },
    ar: {
        translation: translationAR
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    // .use(HttpApi)
    .init({
        supportedLngs: ['en', 'ar'],
        resources,
        lng: "ar", // This will default to Arabic
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['cookie', 'querystring', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['cookie']
        },
        react: {
            useSuspense: false,
        },
    }, (err, t) => {
        if (err) {
            console.error(err);
        }
        console.log('i18next initialized:', t('Main-page')); // Verify the output
    });


export default i18n;
