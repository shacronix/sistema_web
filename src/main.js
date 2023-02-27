import { createApp } from 'vue'
//NAIVE UI
import naive from 'naive-ui'

//AXIOS
import axios from "axios"

//RUTAS DE NAGEVACIÓN - ROUTER
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$axios = axios
Window.axios = axios
app.use(router)
app.use(naive)
app.mount('#app')
