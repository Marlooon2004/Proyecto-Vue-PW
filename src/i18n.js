import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    welcome: 'Welcome',
    language: 'Language',
  },
  es: {
    welcome: 'Bienvenido',
    language: 'Idioma',
  }
}

const i18n = createI18n({
  locale: 'en', // idioma por defecto
  fallbackLocale: 'en',
  messages,
})

export default i18n
