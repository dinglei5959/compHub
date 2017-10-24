<template>
  <article class="base-toobar">
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>

<style lang="less" scoped>
  .base-toobar{
    width: 100%;
  }
</style>
