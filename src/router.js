import { createRouter, createWebHistory } from "vue-router"

import InicioSesion from "./pages/InicioSesion/InicioSesion.vue"


import ListCategory from "./pages/ListCategory.vue"
import ListType from "./pages/ListType.vue"

const routes = [
    {
        name: 'list-category',
        path: '/Categorias',
        component: ListCategory
    },
    {
        name: 'list-type',
        path: '/Tipos',
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