import { createRouter, createWebHashHistory } from 'vue-router'
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: () => import('~/xiazi/index.vue') },
        { path: '/socialSupport', component: () => import('~/socialSupport/index.vue') },
    ]
})