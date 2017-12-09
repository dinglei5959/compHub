import indicatorTemp from '../vue/indicator.vue'
import PopUp from '../../popup/popup.js'

class Indicator extends PopUp {
  constructor (options) {
    super({
      container: 'indicatorPortal',  // container
      template: indicatorTemp  // 模板
    })
  }
}

export default Indicator
