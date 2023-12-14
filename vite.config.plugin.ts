import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { ViteAliases } from 'vite-aliases'

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue'],
            resolvers: [ElementPlusResolver()],
            dts: 'auto-imports.d.ts',
            eslintrc: {
                enabled: false,
                // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
            }
        }),
        Components({ resolvers: [ElementPlusResolver()], }),
        ViteAliases(),
    ],
})