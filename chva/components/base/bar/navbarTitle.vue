<template>
  <article class="base-title">
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: 'NavBarTitle'
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
