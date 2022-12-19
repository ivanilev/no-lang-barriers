import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from './languages/en.json';
import translationBG from './languages/bg.json';

const resources = {
    en: {
        translation: translationEN
    },
    bg: {
        translation: translationBG
    }
}

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "bg", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;