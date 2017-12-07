<template>
  <article class="alert">
    <BackDrop :show="true"></BackDrop>
    <section class="alert-root">
      <transition name="scale">
        <section v-if="show" class="panel">
          <div v-if="title" class="title">{{title}}</div>
          <div class="message">
            {{message}}
          </div>
          <div class="buttons">
            <div v-for="(item,index) in buttons"  @click="clickHandler(item)" :key="'btn'+index">{{item.text}}</div>
          </div>
        </section>
      </transition>
    </section>
  </article>
</template>

<script>
  import BackDrop from '../../backdrop/backdrop.vue'
export default {
    name: 'Alert',
    data () {
      return {
        show: false
      }
    },
    props: {
      message: {type: String, default: 'loading..'},
      title: {type: String, required: false},
      buttons: {type: Array, default: []}
    },
    methods: {
      dismiss () {
        return new Promise((reslove, reject) => {
          this.show = false
          this.$nextTick(() => {
            reslove()
          })
        })
      },
      clickHandler (item) {
        item && item.handler && item.handler()
      }
    },
    mounted () {
      this.show = true
    },
    components: { BackDrop }
  }
</script>

<style lang="less" scoped>
@import '../less/transition.less';
  @button-border: 1px solid #c1b8a5;

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fullfill {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .alert {
    .alert-root {
      &:extend(.center);
      &:extend(.fullfill);
      background: transparent;
      .panel {
        transition: transform .2s ease;
        background: #fff;
        position: absolute;
        z-index: 61;
        // &:extend(.middle);
        width: 80%;
        border-radius: 5px;
        text-align: center;
        font-weight: bold;
        & > div {
          &.buttons {
            display: flex;
            justify-content: space-between;
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
