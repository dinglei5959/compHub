<template>
  <article class="base-toolbar">
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>

<style lang="less" scoped>
  .base-toolbar{
    width: 100%;
  }
</style>
