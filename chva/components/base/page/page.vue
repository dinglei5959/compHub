<template>
  <article class="page">
      <slot></slot>
  </article>
</template>

<script>
export default {
  name: 'Page'
}
</script>

<style lang="less" scoped>
    @import '../themes/index';
    .page {
        position: absolute;
        top: 0;
        left: 0;
        display: block;

        width: 100%;
        height: 100%;

        // do not show, but still render so we can get dimensions
        opacity: 1;
        z-index: @z-index-page-container;
    }
</style>
