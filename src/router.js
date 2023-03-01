//PARA USAR LAS RUTAS
import { createRouter, createWebHistory } from "vue-router"

//MIS COMPONENETES
import InicioSesion from "./pages/InicioSesion/InicioSesion.vue"
import LayoutPrincipal from "./pages/LayoutPrincipal/LayoutPrincipal.vue"
import ListCategory from "./pages/ListCategory.vue"
import ListType from "./pages/ListType.vue"


const routes = [
    {
        path: '/',
        component: InicioSesion,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: LayoutPrincipal,
      children: [
        {
          name: 'list-category',
          path: '/Categorias',
          component: ListCategory,
        },
        {
          path: '/Tipos',
          name: 'list-type',
          component: ListType,
        },
      ]
    },
    
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})


export default router