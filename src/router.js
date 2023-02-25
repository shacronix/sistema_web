import { createRouter, createWebHistory } from "vue-router"

import ListCategory from "./pages/ListCategory.vue"
import ListType from "./pages/ListType.vue"

const routes = [
    {
        name: 'list-category',
        path: '/',
        component: ListCategory
    },
    {
        name: 'list-type',
        path: '/type',
        component: ListType
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router