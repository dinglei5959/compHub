<template>
  <article v-if="showback" @click="_dismiss()" class="base-backdrop">
    
  </article>
</template>

<script>
export default {
  name: 'Backdrop',
  data () {
    return {
      showback: this.show
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    _present () {
      this.showback = true
    },
    _dismiss () {
      this.showback = false
    }
  }
}
</script>

<style scoped>
  .base-backdrop{
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color:rgba(0, 0, 0, .3);
    z-index: 60;
  }
</style>
