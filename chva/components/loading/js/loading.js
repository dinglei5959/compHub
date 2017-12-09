import loadingTemp from '../vue/loading.vue'
import PopUp from '../../popup/popup.js'

class Loading extends PopUp {
  constructor (options) {
    super({
      container: 'loadingPortal',  // container
      template: loadingTemp,  // 模板
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
