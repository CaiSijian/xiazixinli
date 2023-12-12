import { defineConfig } from 'vite'
import base from './vite.config.base'
import plugin from './vite.config.plugin'
export default defineConfig({
  ...base,
  ...plugin,
})