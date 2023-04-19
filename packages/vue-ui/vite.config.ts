import vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros'
import Inspect from 'vite-plugin-inspect'
import { defineConfig } from 'vitest/config'

import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: `${root}/index.ts`,
      name: 'vue-ui',
    },
    rollupOptions: {
      external: [
        'vue',
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    VueMacros.vite({
      plugins: {
        vue: vue(),
      },
    }),
    Inspect({
      build: true,
    }),
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
  },
})
