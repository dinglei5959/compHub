import alertTemp from '../vue/alert.vue'
import PopUp from '../../popup/popup.js'

class Alert extends PopUp {
  constructor (options) {
    super({
      container: 'alertPortal',  // container
      template: alertTemp  // 模板
    })
  }
}

export default Alert
