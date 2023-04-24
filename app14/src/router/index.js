import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditNavBar from '../navbars/EditNavBar.vue'
import HomeNavBar from '../navbars/HomeNavBar.vue'
import Edit from '../components/Edit.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/edit',
            name: 'edit',
            component: Edit
        }
    ]
})

export default router