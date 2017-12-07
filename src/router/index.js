
import Index from '@/pages/index.vue'
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

let routes = {
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/spinner',
      name: 'spinner',
      component (resolve) {
        require(['@/pages/spinner.vue'], resolve)
      }
    },
    {
      path: '/loading',
      name: 'loading',
      component (resolve) {
        require(['@/pages/loading.vue'], resolve)
      }
    },
    {
      path: '/alert',
      name: 'alert',
      component (resolve) {
        require(['@/pages/alert.vue'], resolve)
      }
    },
    {
      path: '/backdrop',
      name: 'backdrop',
      component (resolve) {
        require(['@/pages/backdrop.vue'], resolve)
      }
    }
  ]
}

export default new Router(routes)
