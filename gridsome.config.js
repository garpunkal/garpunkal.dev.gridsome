const tailwind = require('tailwindcss')

const postcssPlugins = [tailwind()]

module.exports = {
  siteName: 'garpunkal.uk',
  siteUrl: 'https://garpunkal.uk',
  favicon: './src/favicon.png',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
}