<template>
  <article>
    <transition name="fade">
      <BackDrop v-show="show" :show="true"></BackDrop>
    </transition>
    <article class="loading-root">
      <transition name="pop">
        <section v-show="show" class="loading">
          <Spinner :size="spinnerSize"></Spinner>
          <span class="loading-message">{{message}}</span>
        </section>
      </transition>
    </article>
  </article>
</template>

<script>
  import BackDrop from '../../backdrop/backdrop.vue'
import Spinner from '../../spinner/vue/spinner.vue'
export default {
    name: 'Loading',
    data () {
      return {
        show: false
      }
    },
    props: {
      spinnerSize: {
        type: Number,
        default: 25
      },
      message: {
        type: String,
        default: 'loading..'
      }
    },
    mounted () {
      this.show = true
    },
    components: { BackDrop, Spinner }
  }
</script>

<style lang="less" scoped>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading-root {
    &:extend(.center);
    .loading {
      width: auto;
      padding: 25px 40px;
      background: aliceblue;
      z-index: 61;
      position: absolute;
      top: 40%;
      border: 0;
      border-radius: 5px;
      font-size: 14px;
      font-weight: bold;
      &:extend(.center);
      max-width: 60%;
      transition: transform 0.2s ease;
      .loading-message {
        margin-left: 10px;
      }
    }
  }

  .pop-enter {
    transform: scale(1.1);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
