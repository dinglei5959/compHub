<template>
  <transition name="fade">
    <article v-if="containerShow" class="alert">
      <BackDrop  :show="true"></BackDrop>
      <section class="alert-root">
        <transition name="scale">
          <section v-if="panelShow" class="panel">
            <div v-if="title" class="title">{{title}}</div>
            <div class="message" :style="{fontWeight:fontWeight}">
              {{message}}
            </div>
            <div class="buttons">
              <div v-for="(item,index) in buttons" @click="clickHandler(item)" :key="'btn'+index">{{item.text}}</div>
            </div>
          </section>
        </transition>
      </section>
    </article>
  </transition>
</template>

<script>
import BackDrop from '../../backdrop/backdrop.vue'
export default {
  name: 'Alert',
  data () {
    return {
      containerShow: false,
      panelShow: false
    }
  },
  props: {
    message: { type: String, default: 'loading..' },
    fontWeight: { type: String, default: 'normal' },
    title: { type: String, required: false },
    buttons: { type: Array, default: [] }
  },
  methods: {
    dismiss () {
      return new Promise((resolve, reject) => {
        this.panelShow = false
        this.$nextTick(() => {
          this.containerShow = false
          this.$nextTick(() => {
            resolve()
          })
        })
      })
    },
    clickHandler (item) {
      item && item.handler && item.handler()
    }
  },
  mounted () {
    this.containerShow = true
    this.$nextTick(() => {
      this.panelShow = true
    })
  },
  components: { BackDrop }
}
</script>

<style lang="less" scoped>
  @import "../../popup/popupTransition.less";
  @import "../../base/themes/block.less";
  @import "../../base/themes/z-index.less";

  @button-border: 1px solid #c1b8a5;

  // 养成检查代码的好习惯
  .alert {
    transition:opacity .2s ease;
    .alert-root {
      background: transparent;
      &:extend(.flex-middle);
      &:extend(.fullfill);
      .panel {
        transition: transform 0.2s ease, opacity 0.2s ease;
        background: #fff;
        position: relative;
        z-index: @popupIndex;
        width: 80%;
        border-radius: 5px;
        text-align: center;
        font-weight: bold;
        & > div {
          &.buttons {
            &:extend(.flex-space);
            & > div {
              width: 100%;
              flex: 1 1;
              padding: 10px 0;
              border-top: @button-border;
              color: #59a4dc;
              font-size: 14px;
              & + div {
                border-left: @button-border;
              }
            }
          }
          &.message {
            padding: 15px;
            font-size: 15px;
          }
          &.title {
            padding: 10px;
            border-bottom: @button-border;
            color: #007afb;
            font-size: 18px;
          }
        }
      }
    }
  }
</style>
