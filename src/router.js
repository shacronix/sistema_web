import { createRouter, createWebHistory } from "vue-router"

import ListCategory from "./pages/ListCategory.vue"
import HelloWorld from "./components/HelloWorld.vue"

const routes = [
    {
        name: 'list',
        path: '/',
        component: ListCategory
    },
    {
        name: 'hello-world',
        path: '/hello-world',
        component: HelloWorld
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router