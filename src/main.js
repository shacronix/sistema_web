import { createApp } from 'vue'
//NAIVE UI
import naive from 'naive-ui'

//RUTAS DE NAVEGACIÓN - ROUTER
import App from './App.vue'
import router from './router'

//AXIOS

//import VueAxios from 'vue-axios'
import axios from 'axios'
//DEFINIR UNA URL GLOBAL PARA AXIOS
axios.defaults.baseURL ='http://192.168.1.201:8000/api'

const app = createApp(App)
app.use(naive)
app.use(router)

//app.use(VueAxios, axios)
app.config.globalProperties.$axios = axios

app.mount('#app')

