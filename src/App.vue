<template>
  <App>
    <!--slide  scale rotate  test1 bounce-->
    <PageTransition transitionType="bounce">  
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
