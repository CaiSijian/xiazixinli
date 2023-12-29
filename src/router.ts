import { createRouter, createWebHashHistory } from 'vue-router'
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: () => import('~/xiazi/index.vue') },
        { path: '/resource ', component: () => import('~/resource/index.vue') },
        { path: '/feedback', component: () => import('~/feedback/index.vue') },
    ]
})