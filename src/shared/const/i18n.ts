import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from '../translations/en.json';
import ru from '../translations/ru.json';

const resources = {
    en: {
        translation: en
    },
    ru: {
        translation: ru
    }
}

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    
    .init({
        resources,
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        lng: 'ru'
    })

    export default i18n