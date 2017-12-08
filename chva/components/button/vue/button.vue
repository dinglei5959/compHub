<template>
  <article @click="$emit('click')" :style="{backgroundColor:bgcolor,borderRadius:bdradius}" class="button-root">
    <span class="slot">
      <slot></slot>
    </span>
  </article>
</template>

<script>
  export default{
    name: 'Button',
    computed: {
      bgcolor () {
        switch (this.type) {
          case 'danger':
            return '#f53d3d'
          case 'dark':
            return '#000'
          default:
            return '#488aff'
        }
      },
      bdradius () {
        switch (this.shape) {
          case 'round':
            return '10000px'
          case 'lub':
            return '5px'
          default:
            return '0'
        }
      }
    },
    props: {
      type: {type: String, default: 'primary'},
      shape: {type: String, default: 'block'}
    }
  }
</script>

<style lang="less" scoped>
 @import "../../base/themes/block.less";
 @import "../../base/themes/z-index.less";

  .button-root{
    padding: 12px 30px;
    display: inline-block;
    text-align: center;
    color:#fff;
    vertical-align: middle;
    &>span{
      &.slot{
        &:extend(.flex-middle);
      }
    }
    &[disabled]{
      pointer-events: none;
      opacity: 0.6;
    }
    &:hover:not([disabled]){
      opacity:0.9;
    }
  }
</style>
