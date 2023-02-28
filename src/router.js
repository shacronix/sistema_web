import { createRouter, createWebHistory } from "vue-router"

import ListCategory from "./pages/ListCategory.vue"
import ListType from "./pages/ListType.vue"
import InicioSesion from "./pages/InicioSesion/InicioSesion.vue"


const routes = [
    {
        name: 'list-category',
        path: '/sistema/Categorias',
        component: ListCategory
    },
    {
        name: 'list-type',
        path: '/sistema/Tipos',
        component: ListType
    },
    {
        name: 'inicio_sesion',
        path: '/InicioSesion',
        component: InicioSesion
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router