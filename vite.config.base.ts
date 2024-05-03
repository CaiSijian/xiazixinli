import { defineConfig } from 'vite'
export default defineConfig({
    base: './',
    css: {
        preprocessorOptions: {
            less: {
                math: 'always',
                additionalData: `@import "${process.cwd()}/src/assets/style/base.less";`,
            },
        }
    },
    build:{
        outDir:'./docs'
    }
})