import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
// import packageData from './package.json'

export default defineConfig({
  build: {
    outDir: 'dist/',
    // outDir: `dist/${packageData.name}/`,
  },
  // base: `/${packageData.name}/`,
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),

    Pages(),

    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
      dirs: [
        './src/composables',
        './src/store',
        './src/common',
      ],
      vueTemplate: true,
    }),

    Components({
      dts: true,
    }),

    Unocss(),

    viteStaticCopy({
      targets: [
        {
          src: 'static',
          dest: '',
        },
      ],
    }),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
