import loading from '../vue/loading.vue'
import Vue from 'vue'
let scope
class Loading {
  constructor (options) {
    scope = this
    scope.template
    scope.el
    scope.init()
  }
  init () {
    scope.template = Vue.extend(loading)
  }
  present (options) {
    if (options && options.el) {
      scope.el = options.el
    } else {
      if (!scope.el) {
        if (document.getElementById('loadingPortal')) {
          scope.el = document.getElementById('loadingPortal')
        } else {
          let el = document.createElement('aside')
          el.id = 'loadingPortal'
          document.body.appendChild(el)
          scope.el = el
        }
      }
    }

    let container = document.createElement('section')
    scope.el.appendChild(container)

    new scope.template({
      el: container,
      propsData: {
        message: options && options.message ? options.message : 'loading..'
      }
    })
  }
  dismiss () {
    scope.el.innerHTML = ''
  }
}

export default Loading
