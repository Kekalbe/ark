export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true, // limpa a pasta antes de cada build
    rollupOptions: {
      input: 'src/js/main.js',
      output: {
        entryFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]'
      }
    }
  }
});
