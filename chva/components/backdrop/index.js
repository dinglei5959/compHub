import Backdrop from './backdrop.vue'
import Vue from 'Vue'

let scope
class BackDrop {
  constructor (options) {
    if (scope) {
      return scope
    }
    scope = this
    scope.instance = null
    scope.propsData = options
    scope.init()
  }

  init () {
    let dom = document.createElement('article')
    document.body.appendChild(dom)
    let BackUtils = Vue.extend(Backdrop)
    scope.instance = new BackUtils({
      el: dom,
      propsData: scope.propsData
    })
  }

  show (options) {
    scope.instance._present(options)
  }

  hide () {
    scope.instance._dismiss()
  }
}

export default BackDrop
