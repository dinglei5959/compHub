import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'

Vue.use(Router)

export default new Router({
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
      path: '/backdrop',
      name: 'backdrop',
      component (resolve) {
        require(['@/pages/backdrop.vue'], resolve)
      }
    }
  ]
})
