import Vue from 'vue'
import Router from 'vue-router'
import store from 'store2'
import BackDrop from '../../backdrop'
import loading from '../../loading'
import alert from '../../alert'

let backdrop = new BackDrop()
let scope
class History {
  constructor (router) {
    if (scope) {
      return scope
    }
    scope = this
    scope.router = router
    scope.depth = []
    scope.current = -1
    scope.isBack = false
    scope.init()
    scope.toGlobal()
  }

  init () {
    if (store.session('historylog')) { // 取之
      let historylog = store.session('historylog')
      this.depth = historylog.depth
      this.current = historylog.current
      this.isBack = historylog.isBack
    }
    window.onbeforeunload = () => {
      store.session('historylog', {
        depth: JSON.parse(JSON.stringify(this.depth)),
        current: this.current,
        isBack: this.isBack
      })
    }
    scope.router.beforeEach((to, from, next) => {  // 唯一可以截取所有页面动作的点
      if (backdrop.hide) {
        backdrop.hide()
      }
      if (alert && alert.dismiss) {
        alert.dismiss()
      }

      if (loading && loading.dismiss) {
        loading.dismiss()
      }

      if (scope.depth.length === 0) { // 初次进入
        scope.pushHistory(to)
      } else {
        if (scope.indexOfRecord(to) > -1 && scope.current > scope.indexOfRecord(to)) { // 已经有此记录 且currnt在to的前面
          scope.isBack = true
         // console.log(scope.indexOfRecord(to), scope.current, '后退')
          scope.popHistory(to)
        } else {   // 没有记录则一定是forward ， 或者有记录但是current 在to后面
          scope.isBack = false
        //  console.log(scope.indexOfRecord(to), scope.current, '前进')
          scope.pushHistory(to)
        }
      }

      next()
    })

     // replace重构
    let copyReplace = scope.router.replace
    copyReplace = copyReplace.bind(scope.router)
    scope.router.replace = function () {
      /** 自定义区域 */
      let args = Array.from(arguments)
      let to = scope.router.resolve(args[0]).resolved
      if (scope.isHeaded()) { // 非最前端的操作不太一样
        scope.depth.splice(scope.depth.length - 1, 1, {
          name: to.name,
          path: to.path
        })
      } else {  // 处于中间的操作
        scope.depth.splice(scope.current, scope.depth.length - scope.current, {
          name: to.name,
          path: to.path
        })
      }
      scope.current = scope.depth.length - 1
      /** 自定义区域 */
      copyReplace.apply(null, arguments)
    }

    //  // go重构
    // let copyGo = scope.router.go
    // copyGo = copyGo.bind(scope.router)
    // scope.router.go = function () {
    //   /** 自定义区域 */
    //   let args = Array.from(arguments)
    //   let n = args[0]
    //   if ((n > 0 && scope.current + n < scope.depth.length) || (n < 0 && scope.current + n >= 0)) {  // 没有溢出
    //     scope.current += n
    //   } else {  // 溢出
    //     console.error('out of history')
    //   }
    //   // scope.depth.slice(scope.depth.length - 1, 1, to)
    //   /** 自定义区域 */
    //   copyGo.apply(null, arguments)
    // }
  }

  pushHistory (to) {
    if (scope.isHeaded()) {
      scope.depth.push({
        name: to.name,
        path: to.path
      })
    } else {  // 当current处于非末端  则直接干掉后面所有的history
      scope.depth.splice(scope.current + 1, scope.depth.length - scope.current - 1, {
        name: to.name,
        path: to.path
      })
    }
    scope.current = scope.depth.length - 1
  }

  popHistory (to) {
    scope.current = scope.indexOfRecord(to)
  }

  indexOfRecord (to) {
    let res = -1
    scope.depth.forEach((e, i) => {
      if (to.name === e.name) {
        res = i
      }
    })
    return res
  }

  /**
   * current是否处于depth的最前端
   */
  isHeaded () {
    return scope.current === scope.depth.length - 1
  }
  /**
 * 全局化
 */
  toGlobal () {
    if (!window.Global) {
      window.Global = {}
    }
    window.Global.history = scope
  }
}

Vue.use(Router)

export default History
