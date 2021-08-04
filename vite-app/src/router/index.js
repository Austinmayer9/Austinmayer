import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home/Home.vue'
import About from '/src/components/About/About.vue'
import Videography from '/src/components/Videography/Videography.vue'

const routes = [
    {
        path: '/',

        name: 'Home',

        component: Home,
    },

    {
        path: '/about',

        name: 'About',

        component: About,
    },

    {
        path: '/videography',

        name: 'Videography',

        component: Videography,
    },

]

const router = createRouter({
    history: createWebHistory(),

    routes,

})

export default router