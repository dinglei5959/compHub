export default{
  methods: {
    dismiss () {
      return new Promise((resolve) => {
        this.show = false
        this.$nextTick(() => {
          this.cb()
          resolve()
        })
      })
    }
  }
}
