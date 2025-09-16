export default {
  plugins: [
    require('cssnano')({
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: true
      }]
    })
  ]
};