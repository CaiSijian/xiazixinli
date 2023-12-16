import { createRouter, createWebHashHistory } from 'vue-router'
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: () => import('~/xiazi/index.vue') },
        { path: '/social_support', component: () => import('~/social_support/index.vue') },
    ]
})