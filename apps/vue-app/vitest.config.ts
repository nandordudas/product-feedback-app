import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'

const root = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    jsx(),
  ],
  resolve: {
    alias: {
      '~': root,
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    reporters: 'verbose',
    setupFiles: './src/test/setup.ts',
  },
})
