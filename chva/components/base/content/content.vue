<template>
  <article class="content">
      <section :style="{marginTop:headHeight,marginBottom:footerHeight}">
        <slot></slot>
      </section>
  </article>
</template>

<script>
  export default {
    name: 'Content',
    data () {
      return {
        headHeight: '0px',
        footerHeight: '0px'
      }
    },
    methods: {
      /**
       * 初始化
       */
      initialize () {
        this.$eventbus.$on('isHeaderExist', (params) => {
          this.headHeight = params + 'px'
        })
        this.$eventbus.$on('isFooterExist', (params) => {
          this.footerHeight = params + 'px'
        })
      }
    },
    created () {
      this.initialize()
    }
  }
</script>

<style lang="less" scoped>
  .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;

    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    will-change: scroll-position;
    contain: size style layout;
  }
</style>
