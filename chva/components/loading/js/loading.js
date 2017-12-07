import loadingTemp from '../vue/loading.vue'
import PopUp from '../../utils/popup.js'

class Loading extends PopUp {
  constructor (options) {
    super({
      container: 'loadingPortal',  // container
      template: loadingTemp,  // 模板
      propsData: [     // 参数类型
        {
          name: 'message',
          default: 'loading..'
        }
      ],
      postpresent: (options) => {
        if (options && options.timeout) {
          setTimeout(() => {
            this.dismiss()
          }, options.timeout)
        }
      }
    })
  }
}

export default Loading
