import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    prisma: './src/prisma.ts',
  },
  minify: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: 'esm',
})
