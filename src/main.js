
require('~/main.css')
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component

  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css2?family=Roboto'
  // })

  // head.script.push({
  //   src: 'https://cdn.polyfill.io/v2/polyfill.min.js'
  // })

  // head.meta.push({
  //   name: 'keywords',
  //   content: 'HTML,CSS,XML,JavaScript'
  // })

  //  head.htmlAttrs = { class: 'doc' }
  //  head.bodyAttrs = { class: 'doc' }
  
  Vue.component('Layout', DefaultLayout)
}