import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import store from './store'
import { createI18n } from 'vue-i18n'

import App from './App.vue';

//internalization
const i18n = createI18n({

})

//application
const app = createApp(App)

app
  .use(i18n)
  .use(vuetify)
  .mount('#app')
