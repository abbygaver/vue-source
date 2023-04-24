import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Items from '../views/Items.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/items/',
            name: 'Items',
            component: Items
        },
        {
            path: '/items/:id',
            name: 'An Item',
            component: Items
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'File not Found',
            component: NotFound
        }
    ]
})

export default router