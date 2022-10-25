import i18n from 'i18next'
import languageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-xhr-backend'

const translationLanguages = ['en', 'nl', 'nl_NL', 'fr', 'de']

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    lng: 'fr',
    fallbackLng: 'en',
    ns: ['messages', 'validators', 'security'],
    defaultNS: 'messages',
    nsSeparator: ';;',
    keySeparator: false,
    debug: false,
    react: { useSuspense: false, wait: true },
    interpolation: { escapeValue: false },
    backend: {
      loadPath: () =>
        `${process.env.REACT_APP_TRANSLATIONS_URL}/{{ns}}/locale/{{lng}}`,
      crossDomain: true,
      allowMultiLoading: true,
    },
    whitelist: translationLanguages,
  })

export default i18n
