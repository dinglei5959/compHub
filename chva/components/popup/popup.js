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
    // 默认状态为关闭
    this.status = false
    // 初始化
    this.init()
  }
  /**
   * 组件初始化
   */
  init () {
    this.template.methods.cb = () => {  // 为了让实例中，拥有改变这边状态的能力
      this.status = false
    }
    this.templateFunc = Vue.extend(this.template)
  }
  /**
   *
   * @param {Object} options  -- 传入的参数
   */
  present (options) {
    if (this.status) {
      return false
    }
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

    this.template && this.template.props && Object.keys(this.template.props).forEach((e, i) => {
      if (options && (e in options)) {
        propsData[e] = options[e]
      } else {
        propsData[e] = this.template.props[e].default
      }
    })

    let container = document.createElement('section')
    this.el.appendChild(container)
    let params = { // 传递的参数
      el: container,
      propsData: propsData,
      components: {}
    }
    if (this.template.data && 'template__name' in this.template.data()) {  // 模板的属性暂时约定为template__name
      // if (options.template.propsData) {
      //   options.template.propsData.data = {type: Object}
      // } else {
      //   options.template.propsData = {
      //     data: { type: Object }
      //   }
      // }

     // options.template.data = {name: 'dddkjdkj'}

      params.components[this.template.data().template__name] = options.template  // components
    }
    this.instance = new this.templateFunc(params)
    this.postpresent && this.postpresent(options)
    this.status = true  // 改变状态参数
  }
  /**
   * 关闭
   */
  dismiss () {
    this.instance && this.instance.dismiss()
    this.status = false  // 改变状态
  }
}

export default PopUp
