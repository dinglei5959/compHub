import Vue from 'vue'

class PopUp {
  constructor (options) {
    // 参数
    this.options = options
    // 容器
    this.container = options && options.container ? options.container : 'popupPortal'
    // 模板
    this.template = options && options.template ? options.template : {}
    // 需要使用的参数
    this.propsData = options && options.propsData ? options.propsData : [
      {
        name: 'message',
        default: 'loading...'
      }
    ]
    // 钩子函数 present函数之前处理
    this.prepresent = options && options.prepresent ? options.prepresent : null
    // 钩子函数 present函数之后处理
    this.postpresent = options && options.postpresent ? options.postpresent : null
    // 模板func
    this.templateFunc = void (0)
    // el
    this.el = void (0)
    // vue实例
    this.instance = void (0)
    // 初始化
    this.init()
  }
  /**
   * 组件初始化
   */
  init () {
    this.templateFunc = Vue.extend(this.template)
  }
  /**
   *
   * @param {Object} options  -- 传入的参数
   */
  present (options) {
    this.prepresent && this.prepresent(options)
    if (options && options.el) {
      this.el = options.el
    } else {
      if (!this.el) {
        if (document.getElementById(this.container)) {
          this.el = document.getElementById(this.container)
        } else {
          let el = document.createElement('aside')
          el.id = this.container
          document.body.appendChild(el)
          this.el = el
        }
      }
    }

    let propsData = {}

    this.propsData.forEach((e, i) => {
      if (options && (e.name in options)) {
        propsData[e.name] = options[e.name]
      } else {
        propsData[e.name] = e.default
      }
    })

    let container = document.createElement('section')
    this.el.appendChild(container)
    this.instance = new this.templateFunc({
      el: container,
      propsData: propsData
    })
    this.postpresent && this.postpresent(options)
  }
  /**
   * 关闭
   */
  dismiss () {
    this.instance && this.instance.dismiss()
  }
}

export default PopUp
