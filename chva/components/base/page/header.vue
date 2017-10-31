<template>
  <header ref="header" class="base-header" :style="{padding:`${padding}${unit}`}">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    padding: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: 'px'
    }
  },
  mounted () {
   // console.log(this.$refs.header.scrollHeight)
    this.$eventbus.$emit('isHeaderExist', this.$refs.header.scrollHeight)
  }
}
</script>

<style lang="less" scoped>
  @import '../themes/index.less';
  .base-header{
    position: absolute;
    top:0;
    left:0;
    z-index: 100;
    background: @background-color;
    width: 100%;
    min-height: 44px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: @header-border-color;
  }
</style>
