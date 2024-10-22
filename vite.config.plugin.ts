import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteAliases } from 'vite-aliases'
import cdn from 'vite-plugin-cdn-import'

export default defineConfig({
    plugins: [
        vue(),
        cdn({
            generateScriptTag(_name, _scriptUrl) {
                return {
                    attrs: { defer: '' }
                }
            },
            modules: [
                {
                    name: 'vue',
                    var: 'Vue',
                    path: 'dist/vue.global.prod.js',
                },
                {
                    name: 'element-plus',
                    var: 'ElementPlus',
                    path: 'dist/index.full.min.js',
                    css: 'dist/index.css',
                },
                {
                    name: 'vue-router',
                    var: 'VueRouter',
                    path: 'dist/vue-router.global.prod.js',
                },
                {
                    name: 'marked',
                    var: 'marked',
                    path: 'marked.min.js',
                },
            ],
            prodUrl: 'https://unpkg.com/{name}@{version}/{path}',
        }),
        ViteAliases(),
    ],
})