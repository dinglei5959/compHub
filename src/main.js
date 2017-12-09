// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Chva from 'chva'
import AttachFastClick from 'fastclick'

Vue.use(Chva, {router})

Vue.config.productionTip = false
new AttachFastClick(document.body)

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
