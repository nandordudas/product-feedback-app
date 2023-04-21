import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
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
    UnoCSS(),
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
    environment: 'happy-dom',
    globals: true,
    reporters: 'verbose',
  },
})
