<template>
  <transition name="fill">
    <article v-if="show" class="modal-root">
      <component :is="template__name" :data="data"></component>
    </article>
  </transition>
</template>

<script>
const NAME = 'modaltemplate'
export default {
  name: 'Modal',
  data () {
    return {
      template__name: NAME,  // 属性名  为了给popup来读取的模板名
      show: false
    }
  },
  props: {
    template: { type: Object },
    data: { type: Object }
  },
  methods: {
    dismiss () {
      this.show = false
    }
  },
  mounted () {
    this.show = true
  }
}
</script>

<style lang="less" scoped>
  @import "../../popup/popupTransition.less";
  @import "../../base/themes/block.less";
  @import "../../base/themes/z-index.less";
  .modal-root {
    &:extend(.fullfill);
    &:extend(.flex-middle);
    z-index: @modalIndex;
    background: #fff;
    transition: all ease .5s;
  }
</style>
