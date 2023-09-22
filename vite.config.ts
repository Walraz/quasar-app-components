import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { resolve } from 'node:path'
import typescript2 from 'rollup-plugin-typescript2'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),

    quasar({
      sassVariables: 'src/quasar-variables.sass',
    }),

    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ['src/components'],
      tsconfigOverride: {
        compilerOptions: {
          outDir: 'dist',
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ['vite.config.ts'],
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'AppForm',
      fileName: 'AppForm',
    },
    rollupOptions: {
      external: ['vue', 'lodash.get', 'lodash.set', 'quasar', 'zod'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
