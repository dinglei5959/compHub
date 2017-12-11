<template>
  <App id="app">
    <!--slide  scale rotate  test1 bounce-->
    <PageTransition transitionType="slide">  
        <router-view></router-view>
    </PageTransition>
  </App>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import './less/global.less';
@import './less/components.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
