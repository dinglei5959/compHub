<template>
  <article>
    <transition name="fade">
      <BackDrop v-show="show" :show="true"></BackDrop>
    </transition>
    <article class="loading-root">
      <transition name="scale">
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
  methods: {
    dismiss () {
      return new Promise((reslove, reject) => {
        this.show = false
        this.$nextTick(() => {
          reslove()
        })
      })
    }
  },
  mounted () {
    this.show = true
  },
  components: { BackDrop, Spinner }
}
</script>

<style lang="less" scoped>
@import "../../popup/popupTransition.less";
@import "../../base/themes/block.less";
@import "../../base/themes/z-index.less";

  .loading-root {
    &:extend(.flex-middle);
    .loading {
      width: auto;
      padding: 25px 40px;
      background: aliceblue;
      z-index: @popupIndex;
      position: absolute;
      top: 40%;
      border: 0;
      border-radius: 5px;
      font-size: 14px;
      font-weight: bold;
      &:extend(.flex-middle);
      max-width: 80%;
      transition: transform 0.2s ease;
      .loading-message {
        margin-left: 10px;
      }
    }
  }

  
</style>
