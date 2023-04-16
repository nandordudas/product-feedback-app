import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: true,
  entry: [
    './src/index.ts',
    './src/prisma.ts',
  ],
  format: 'esm',
  minify: true,
  sourcemap: true,
  splitting: false,
})
