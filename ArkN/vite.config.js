import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: '../public', // garante que Vite copie da pasta certa
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    cssCodeSplit: true, // separa CSS em arquivo próprio
    rollupOptions: {
      input: 'src/js/main.js',
      output: {
        entryFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]'
      }
    }
  }
});