import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // onde estão seus arquivos JS/CSS
  build: {
    outDir: '../dist', // pasta de saída final
    rollupOptions: {
      input: 'src/js/main.js', // ponto de entrada do JS
      output: {
        entryFileNames: 'main.js', // nome fixo do JS
        assetFileNames: '[name].[ext]' // nome fixo dos assets (CSS, etc.)
      }
    }
  }
});