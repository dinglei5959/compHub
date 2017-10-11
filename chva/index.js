import {App} from './components/base/app'

export default {
  install (Vue, options) {
    Vue.component(App.name, App)
  }
}
