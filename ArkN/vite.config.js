import { defineConfig } from 'vite';
import cssnano from 'cssnano';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: 'src/js/main.js',
      output: {
        entryFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]'
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        cssnano({
          preset: ['default', { discardImportant: false }]
        })
      ]
    }
  }
});