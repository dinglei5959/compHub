
import Index from '@/pages/index.vue'

export default {
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
}
