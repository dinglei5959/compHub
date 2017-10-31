import Vue from 'vue'
import Router from 'vue-router'
let scope
class History {
  constructor (routes) {
    scope = this
    Vue.prototype.$history = scope
    scope.routes = routes
    scope.router = null
    scope.depth = []
    scope.current = -1
    scope.isBack = false
    scope.init()
  }

  init () {
    scope.router = new Router(scope.routes)
    scope.router.beforeEach((to, from, next) => {  // 唯一可以截取所有页面动作的点
      if (scope.depth.length === 0) {
        scope.depth.push(to)
        scope.current = scope.depth.length - 1
      } else {
        if (scope.indexOfRecord(to) > -1 && scope.current > scope.indexOfRecord(to)) { // 已经有此记录 且currnt在to的前面
          scope.isBack = true
          scope.popHistory(to)
        } else {   // 没有记录则一定是forward ， 或者有记录但是current 在to后面
          scope.isBack = false
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
      if (scope.isHeaded()) {
        scope.depth.splice(scope.depth.length - 1, 1, to)
      } else {
        scope.depth.splice(scope.current, scope.depth.length - scope.current, to)
      }
      scope.current = scope.depth.length - 1
      /** 自定义区域 */
      copyReplace.apply(null, arguments)
    }

     // go重构
    let copyGo = scope.router.go
    copyGo = copyGo.bind(scope.router)
    scope.router.go = function () {
      /** 自定义区域 */
      let args = Array.from(arguments)
      let n = args[0]
      if ((n > 0 && scope.current + n < scope.depth.length) || (n < 0 && scope.current + n >= 0)) {  // 没有溢出
        scope.current += n
      } else {  // 溢出
        console.error('out of history')
      }
      // scope.depth.slice(scope.depth.length - 1, 1, to)
      /** 自定义区域 */
      copyGo.apply(null, arguments)
    }
  }

  pushHistory (to) {
    if (scope.isHeaded()) {
      scope.depth.push(to)
    } else {
      scope.depth.splice(scope.current + 1, scope.depth.length - scope.current - 1, to)
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
}

Vue.use(Router)

export default History
