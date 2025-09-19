import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: '../public', // copia tudo que estiver em public para dist
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    cssCodeSplit: true, // gera arquivo CSS separado
    rollupOptions: {
      input: {
        main: 'src/js/main.js',      // entrada JS
        style: 'src/css/main.css'    // entrada CSS
      },
      output: {
        entryFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]'
      }
    }
  }
});
