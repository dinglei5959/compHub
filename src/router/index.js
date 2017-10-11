import Vue from 'vue'
import Router from 'vue-router'
import Spinner from '@/pages/spinner.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'spinner',
      component: Spinner
    }
  ]
})
