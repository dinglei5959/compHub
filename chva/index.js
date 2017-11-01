import {App, PageTransition, History} from './components/base/app'
import {Page, Footer, Header} from './components/base/page'
import {Content} from './components/base/content'
import {NavBar, NavBarTitle, ToolBar} from './components/base/bar'
import BackDrop from './components/backdrop'

export default {
  install (Vue, options) {
    let bus = new Vue()
    Vue.component(App.name, App)
    Vue.component(PageTransition.name, PageTransition)
    Vue.component(Page.name, Page)
    Vue.component(Header.name, Header)
    Vue.component(Footer.name, Footer)
    Vue.component(Content.name, Content)
    Vue.component(NavBar.name, NavBar)
    Vue.component(NavBarTitle.name, NavBarTitle)
    Vue.component(ToolBar.name, ToolBar)

    if (options.router) {
      Vue.prototype.$history = new History(options.router)
    }

    Vue.prototype.$backdrop = new BackDrop()
    Vue.prototype.$eventbus = bus
  }
}
