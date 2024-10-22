import { createRouter, createWebHashHistory } from 'vue-router'
import xiazi from '~/xiazi/index.vue'
import resource from '~/resource/index.vue'
import feedback from '~/feedback/index.vue'
export const menu = {
    '心理测量': '/measurement',
    '心理资源': '/resource',
    '我要反馈': '/feedback',
}
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: xiazi },
        { path: `/${menu['心理测量']}`, component: resource },
        { path: `/${menu['心理资源']}`, component: resource },
        { path: `/${menu['我要反馈']}`, component: feedback },
    ]
})