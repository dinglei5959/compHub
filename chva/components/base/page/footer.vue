<template>
  <article ref="footer" class="base-footer">
    <slot></slot>
  </article>
</template>
<script>
export default {
  name: 'Footer',
  mounted () {
    console.log(this.$refs.footer.scrollHeight)
    this.$eventbus.$emit('isFooterExist', this.$refs.footer.scrollHeight)
  }
}
</script>

<style lang="less" scoped>
  @import '../themes/index.less';
  .base-footer{
    position: absolute;
    bottom:0;
    left:0;
    z-index: 100;
    background: @background-color;
    width: 100%;
    min-height: 44px;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: @footer-border-color;
  }
</style>
