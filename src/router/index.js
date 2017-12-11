
import Index from '@/pages/index.vue'
import Router from 'vue-router'
import Vue from 'vue'
import routeArr from '@/pages/pages.js'
Vue.use(Router)

let routes = {
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
}

routeArr.forEach((e, i) => {
  e.item.forEach((e, i) => {
    let route = {
      path: '/' + e.intro,
      name: e.intro,
      component (resolve) {
        require(['@/pages/demo/' + (e.cata ? e.cata : '') + e.intro + '.vue'], resolve)
      }
    }
    routes.routes.push(route)
  })
})

export default new Router(routes)
