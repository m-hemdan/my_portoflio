import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import 'animate.css';
import '@mdi/font/css/materialdesignicons.css'
import VueAnimateOnScroll from 'vue3-animate-onscroll';
import './assets/global.css'

const vuetify = createVuetify({ components, directives })


createApp(App).use(store).use(router).use(vuetify).use(VueAnimateOnScroll).mount('#app')
