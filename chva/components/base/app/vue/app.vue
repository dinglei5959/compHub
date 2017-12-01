<template>
  <article class="app">
     <section class="app-root">
       <slot></slot>
     </section>
     <aside id="loadingPortal"></aside>
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
  @import '../less/app';
  @import '../less/global';
  @import '../../themes/default.less';
  .app-root{
    transform-style: preserve-3d;
    perspective: 50px;
  }
</style>
