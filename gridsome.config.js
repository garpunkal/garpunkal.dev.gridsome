//const path = require('path')
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

// function addStyleResource(rule) {
//   rule.use('style-resource')
//     .loader('style-resources-loader')
//     .options({
//       patterns: [
//         path.resolve(__dirname, './src/assets/sass/_globals.scss'),
//         path.resolve(__dirname, './src/assets/sass/*.scss'),
//       ],
//     })
// }

module.exports = {
  siteName: 'garpunkal.uk',
  siteUrl: 'https://garpunkal.uk',
  favicon: './src/favicon.png',  
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
    // chainWebpack(config) {
    //   const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    //   types.forEach(type => {
    //     addStyleResource(config.module.rule('sass').oneOf(type))
    //   })
    //   types.forEach(type => {
    //     addStyleResource(config.module.rule('scss').oneOf(type))
    //   })
    // }
  }
}