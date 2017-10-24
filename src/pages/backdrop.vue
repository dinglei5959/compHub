<template>
  <Page>
    <Header>
      <NavBar>
        <NavBarTitle>backdrop</NavBarTitle>
      </NavBar>
    </Header>
    <Content>
      <article padding>
        <button @click="_instance.show()">点击</button>
      </article>
    </Content>
  </Page>
</template>

<script>
  import BackDrop from 'chva/components/backdrop'

  export default {
    name: 'backdrop',

    data () {
      return {
        _instance: null
      }
    },
    methods: {

    },
    created () {
      this._instance = new BackDrop()
    }
  }
</script>

<style lang="less" scoped>

</style>
