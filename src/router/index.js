
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
  let route = {
    path: '/' + e,
    name: e,
    component (resolve) {
      require(['@/pages/demo/' + e + '.vue'], resolve)
    }
  }
  routes.routes.push(route)
})

export default new Router(routes)
