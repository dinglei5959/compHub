<template>
  <transition  :name="`from-${direct}-grow`">
    <article v-if="show" class="toast-root" 
    :class="{
      strip:shape==='strip',
      rect:shape==='rect',
      top:direct==='top',
      bottom:direct==='bottom',
      left_in_top:direct==='left_in_top',
      left_in_middle:direct==='left_in_middle',
      left_in_bottom:direct==='left_in_bottom',
      right_in_top:direct==='right_in_top',
      right_in_middle:direct==='right_in_middle',
      right_in_bottom:direct==='right_in_bottom',
      fade:direct==='fade'
    }">
      <section class="toast">
          &ensp;{{message}}
      </section>
    </article>
  </transition>
</template>

<script>
// import mixin from '../../popup/popupmixin.js'
export default {
  name: 'Toast',
 // mixins: [mixin],
  data () {
    return {
      show: false
    }
  },
  props: {
    shape: {type: String, default: 'strip'},
    message: {type: String, required: true, default: ''},
    direct: {type: String, default: 'bottom'},
    timeout: {type: Number, default: 2000}
  },
  methods: {
    cb () { },
    dismiss () {
      return new Promise((resolve) => {
        this.show = false
        this.$nextTick(() => {
          this.cb()
          resolve()
        })
      })
    }
  },
  mounted () {
    this.show = true
    setTimeout(() => {
      this.dismiss()
    }, this.timeout)
  }
}
</script>

<style lang="less" scoped>
@import "../../popup/popupTransition.less";
@import "../../base/themes/block.less";
@import "../../base/themes/z-index.less";
@import "../less/toast.less";
  .toast-root{
    transition: all .5s ease;
    position: absolute;
    width: 100%;
    line-height: @height;
    z-index: @popupIndex;
    &.bottom{&:extend(.bottom);}
    &.top{&:extend(.top);}
    &>.toast{
      width: 90%;
      background: transparent;
      margin: 0 auto;
      background: rgba(0,0,0,.8);
      border-radius: 5px;
      color:#fff;
      padding:10px;
      font-size:14px;
    }
    &.rect{
      &>.toast{
        width: 40%;
      }
    }
  }
</style>
