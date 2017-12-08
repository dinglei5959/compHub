<template>
  <article v-if="showback" @dblclick="dblclickHandler" @click="clickHandler"  class="base-backdrop" 
    :style="{opacity:transparent}">
    
  </article>
</template>

<script>
export default {
  name: 'Backdrop',
  data () {
    return {
      showback: this.show,
      transparent: this.opacity,
      nowCancelStyle: void (0)
    }
  },
  computed: {
    type: {
      get () {
        switch (this.cancelStyle) {
          case 'click':
            return 1
          case 'dbclick':
            return 2
          default:
            return -1
        }
      },
      set () {}
    }
  },
  props: {
    show: {  // 展示
      type: Boolean,
      default: false
    },
    opacity: {  // 透明度
      type: Number,
      default: 0.5
    },
    cancelStyle: {  // 'click'  ,'dbclick'
      type: String,
      default: 'none'
    }
  },
  methods: {
    clickHandler () {
      if (this.type > 0) {
        this._dismiss()
      }
      if (this.nowCancelStyle === 'click') {  // 设定单击取消
        this._dismiss()
      }
    },

    dblclickHandler () {
      this._dismiss()
    },

    _present (options) {
      if (options && 'cancelStyle' in options) {  // 表示设定了取消方式
        this.nowCancelStyle = options.cancelStyle
      }
      this.showback = true
    },

    _dismiss () {
      this.showback = false
      this.nowCancelStyle = void (0)
    }
  }
}
</script>

<style scoped>
  .base-backdrop{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:#000;
    z-index: 60;
  }
</style>
