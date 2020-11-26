const c1 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\git\\github.com\\garpunkal\\garpunkal.github.io\\src\\pages\\404.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\git\\github.com\\garpunkal\\garpunkal.github.io\\src\\pages\\Index.vue")

export default [
  {
    name: "404",
    path: "/404/",
    component: c1
  },
  {
    name: "home",
    path: "/",
    component: c2
  },
  {
    name: "*",
    path: "*",
    component: c1
  }
]
