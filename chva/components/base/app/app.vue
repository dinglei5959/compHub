<template>
  <article class="app">
     <section class="app-root">
       <slot></slot>
     </section>
  </article>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>


<style lang="less" scoped>
  @import './app.less';
</style>
