<template>
  <article ref="title" class="base-title">
    <slot ></slot>
  </article>
</template>

<script>
export default {
  name: 'NavBarTitle',
  mounted () {
    document.title = this.$refs.title.innerHTML
  }
}
</script>

<style lang="less" scoped>
@import '../themes/index';
  .base-title{
    text-align: center;
    font-size:@font-size-title;
    font-weight: bold;
  }
</style>
