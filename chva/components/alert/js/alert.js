import alertTemp from '../vue/alert.vue'
import PopUp from '../../utils/popup.js'

class Alert extends PopUp {
  constructor (options) {
    super({
      container: 'alertPortal',  // container
      template: alertTemp,  // 模板
      propsData: [     // 参数类型
        {
          name: 'message',
          default: 'loading..'
        },
        {
          name: 'title',
          default: null
        },
        {
          name: 'buttons',
          default: []
        }
      ]
    })
  }
}

export default Alert
