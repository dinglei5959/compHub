import {hasClass, addClass, removeClass, toggleClass} from '../utils'
import Backdrop from './backdrop.vue'
import Vue from 'Vue'

let scope
class BackDrop {
  constructor (options) {
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

  show () {
    scope.instance._present()
  }

  hide () {
    scope.instance._dismiss()
  }
}

export default BackDrop
