import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

const root = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '~': root,
    },
  },
  test: {
    globals: true,
    reporters: 'verbose',
    setupFiles: './src/tests/helpers/setup.ts',
    singleThread: true,
    include: [
      './src/tests/**/*.spec.ts',
    ],
  },
})
