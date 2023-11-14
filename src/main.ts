import { createApp } from 'vue'
import App from './App.vue'
import { Quasar, Dialog } from 'quasar'
import quasarLang from 'quasar/lang/sv'
import quasarIconSet from 'quasar/icon-set/svg-material-icons'
import i18next from 'i18next'
import { z } from 'zod'
import { zodI18nMap } from 'zod-i18n-map'
import translation from 'zod-i18n-map/locales/sv/zod.json'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v7/mdi-v7.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

i18next.init({
  lng: 'es',
  resources: {
    es: { zod: translation },
  },
})
z.setErrorMap(zodI18nMap)

const app = createApp(App)

app.use(Quasar, {
  plugins: { Dialog }, // import Quasar plugins and add here
  lang: quasarLang,
  iconSet: quasarIconSet,
})

app.mount('#app')
