import toastTemp from '../vue/toast.vue'
import PopUp from '../../popup/popup.js'

class Toast extends PopUp {
  constructor (options) {
    super({
      container: 'toastPortal',  // container
      template: toastTemp  // 模板
    })
  }
}

export default Toast
