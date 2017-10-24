<template>
  <article class="base-navbar">
    <section class="navbar_left">
      <slot name="left"></slot>
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
  name: 'NavBar'
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
