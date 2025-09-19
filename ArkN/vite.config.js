import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: 'src', // pasta raiz do projeto
  publicDir: '../public', // garante que tudo em public vá para dist
  build: {
    outDir: '../dist', // pasta final de build
    emptyOutDir: true,
    cssCodeSplit: true, // CSS vai para arquivo separado
    rollupOptions: {
      input: resolve(__dirname, 'src/js/main.js'), // arquivo de entrada absoluto
      output: {
        entryFileNames: '[name].[hash].js', // nome dos JS
        assetFileNames: '[name].[hash].[ext]' // nome dos assets (CSS, imagens)
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: '../public/*', // tudo da pasta public
          dest: '.' // copiar direto para dist
        }
      ]
    })
  ]
});
