<template>
  <article class="app">
     <section class="app-root">
       <slot></slot>
     </section>
     <aside class="">

     </aside>
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

<style lang="less">
  @import './app';
  @import './global';
  @import '../themes/default.less';
</style>
