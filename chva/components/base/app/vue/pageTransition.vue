
<template>
    <transition :name="`${transitionType}-${transitionName}`">
      <slot class="page"></slot>
    </transition>
</template>

<script>
  export default {
    name: 'PageTransition',
    data () {
      return {
        transitionName: 'forward'
      }
    },
    props: {
      transitionType: {
        type: String,
        default: 'slide'
      }
    },
    watch: {
      '$route' (to, from) {
        if (this.$history.isBack) {
          this.transitionName = 'backward'
        } else {
          this.transitionName = 'forward'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../less/transition.less';
  @animationFunction:linear;
    .page {
      transition: all .5s cubic-bezier(.55, 0, .1, 1);
      animation-timing-function: @animationFunction;
    }
</style>
