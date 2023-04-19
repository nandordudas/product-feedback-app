import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '~': root,
    },
  },
  plugins: [vue()],
})
