import modalTemp from '../vue/modal.vue'
import PopUp from '../../popup/popup.js'

class Modal extends PopUp {
  constructor (options) {
    super({
      container: 'modalPortal',  // container
      template: modalTemp  // 模板
    })
  }
}

export default Modal
