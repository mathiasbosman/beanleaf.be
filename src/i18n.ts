import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import localeEN from "@locales/en.json";
import localeNL from "@locales/nl.json";

export const languages = ["nl", "en"];
export const defaultLang = "nl";

const resources = {
  en: {
    translation: localeEN,
  },
  nl: {
    translation: localeNL,
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  fallbackLng: defaultLang,
});
