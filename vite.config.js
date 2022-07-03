import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: '../zrc-backend/services/public/landing/',
        emptyOutDir: true
    },
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
      styles: 'expose',
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
    extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.vue',
        '.html',
        '.css'
      ]
  },
  // remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
})
