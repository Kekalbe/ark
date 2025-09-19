import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'src/js/main.js',
      output: {
        entryFileNames: '[name].[hash].js',
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) {
            return 'css/[name].[hash].[ext]'; // coloca o CSS no dist/css/
          }
          return '[name].[hash].[ext]';
        }
      }
    }
  },
  css: {
    devSourcemap: true,
  },
});
