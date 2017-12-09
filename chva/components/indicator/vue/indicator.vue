<template>
  <article v-if="show" class="indicator-root">
    <section class="indicator">
      <Spinner color="#fff"></Spinner>
    </section>
  </article>
</template>

<script>
import {Spinner} from '../../spinner'
export default {
  name: 'Indicator',
  data () {
    return {
      show: true
    }
  },
  props: {
    timeout: {type: Number, default: 10000}  // 超时自动关闭的时间
  },
  methods: {
    dismiss () {
      this.show = false
    }
  },
  mounted () {
    setTimeout(() => {
      this.dismiss()
    }, this.timeout)
  },
  components: {Spinner}
}
</script>

<style lang="less" scoped>
@import "../../popup/popupTransition.less";
@import "../../base/themes/block.less";
@import "../../base/themes/z-index.less";



.indicator-root{
  &:extend(.flex-middle);
  &:extend(.fullfill);
  z-index:  @popupIndex;
  .indicator{
    .square(70px);
    &:extend(.flex-middle);
    border-radius: 5px;
    background: rgba(0, 0, 0, .8);
  }
}
</style>
