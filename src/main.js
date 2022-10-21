import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

import '@fortawesome/fontawesome-free/css/all.css'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(FloatingVue)

app.mount('#app')
