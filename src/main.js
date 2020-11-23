require('~/main.css')
import DefaultLayout from '~/layouts/Default.vue'
import Vue from 'vue'

export default function (Vue, {
  router,
  head,
  isClient
}) {

  head.script.push({
    src: 'https://platform.twitter.com/widgets.js',
    body: false
  })
  
  head.meta.push({
    name: 'keywords',
    content: 'garpunkal, gareth, wright, gareth wright, garpunkal.uk, development manager, c# web developer, umbraco, umbraco certified developer, c# developer, developer, umbraco certified expert, andover, hampshire, csharp'
  })

  head.meta.push({
    name: 'description',
    content: 'Personal website for Gareth Wright. Development Manager. c# .net MVC Developer. Umbraco Certified Expert.'
  })

  head.meta.push({
    name: 'author',
    content: 'gareth wright'
  })

  head.meta.push({
    name: 'theme-color',
    content: '#077DA0'
  })

  head.bodyAttrs = {
    class: 'bg-brand'
  }

  Vue.component('Layout', DefaultLayout)
}