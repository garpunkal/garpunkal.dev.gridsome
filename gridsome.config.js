const tailwind = require('tailwindcss')

const postcssPlugins = [tailwind()]

module.exports = {
  siteName: 'garpunkal.uk',
  siteUrl: 'https://garpunkal.uk',
  favicon: './src/images/profile.jpg',
  plugins: [{
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-54WJV5',
        enabled: true,
        debug: false
      }
    }    
  ], 
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  } 
}