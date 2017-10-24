<template>
  <App>
    <router-view></router-view>
  </App>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import './less/global.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
