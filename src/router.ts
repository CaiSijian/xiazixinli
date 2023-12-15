import { createRouter, createWebHashHistory } from 'vue-router'
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: () => import('~/xiazi/content.vue') },
        { path: '/test', component: () => import('~/components/test2.vue') },
    ]
})