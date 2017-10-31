// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './routes'
import Chva from 'chva'
import History from '../chva/components/base/app/history'

Vue.use(Chva)

let his = new History(routes)
let router = his.router
window._h = his

Vue.config.productionTip = false

Vue.mixin({
  created: function () {
    // console.log(this.$options._componentTag + ':' + this.$options.myOption)
    var myOption = this.$options.myOption
    if (myOption) {
    }
  }
})

// => "hello!"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  myOption: 'dinglei',
  router,
  template: '<App/>',
  components: { App }
})
