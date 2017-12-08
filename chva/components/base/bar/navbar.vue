<template>
  <article class="base-navbar">
    <section  class="navbar_left">
      <div v-if="showback" @click="$history.router.go(-1)" >
        <i class="backIcon"></i>
        返回
      </div>
    </section>
    <section class="navbar_center">
      <slot></slot>
    </section>
    <section class="navbar_right">
      <slot name="right"></slot>
    </section>
  </article>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      showback: false
    }
  },
  created () {
    if (this.$history.depth.length > 1) {
      this.showback = true
    }
  }
}
</script>

<style lang="less" scoped>
  .base-navbar{
    width:100%;
    min-height: 44px;
    &>section{
      float: left;
      min-height: 44px;
    }
    .navbar_left{
      width: 20%;
      text-align: center;
      line-height: 44px;
      &>div{
        width: 100%;
        height: 100%;
      }
      .backIcon{
        display: inline-block;
        width: 10px;
        height: 10px;
        border:1px solid #000;
        border-top: 0;
        border-right: 0;
        transform: rotateZ(45deg);
      }
    }
    .navbar_center{
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .navbar_right{
      width: 20%;
    }
  }
</style>
