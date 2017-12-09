import indicatorTemp from '../vue/indicator.vue'
import PopUp from '../../popup/popup.js'

class Indicator extends PopUp {
  constructor (options) {
    super({
      container: 'indicatorPortal',  // container
      template: indicatorTemp,  // 模板
      propsData: [
        {
          name: 'timeout',
          default: 10000
        }
      ]     // 参数类型
    })
  }
}

export default Indicator
