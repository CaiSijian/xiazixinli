import { createRouter, createWebHashHistory } from 'vue-router'
import xiazi from '~/xiazi/index.vue'
import resource from '~/resource/index.vue'
import feedback from '~/feedback/index.vue'
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: xiazi },
        { path: '/resource', component: resource },
        { path: '/feedback', component: feedback },
    ]
})