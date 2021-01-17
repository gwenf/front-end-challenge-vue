import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'

import App from './App.vue'
import router from './router'
import store from './store'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(PrimeVue)

app.component('Menubar', Menubar)

app.mount('#app')
