import { createApp } from 'vue'

//AXIOS
import axios from "axios"

//RUTAS DE NAGEVACIÓN
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$axios = axios
Window.axios = axios
app.use(router)
app.mount('#app')
