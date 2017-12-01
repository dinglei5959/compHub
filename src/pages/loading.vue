<template>
  <Page>
    <Header>
      <NavBar>
        <NavBarTitle>Loading</NavBarTitle>
      </NavBar>
    </Header>
    <Content>
      <article padding>
        <section @click="clickHandler" class="item">
          <span>点击</span>
        </section>
      </article>
    </Content>
  </Page>
</template>

<script>
  import Loading from 'chva/components/loading'
export default {
    name: 'Loading',
    methods: {
      clickHandler () {
        Loading.present({message: '请稍候..'})
        setTimeout(() => {
          Loading.dismiss()
        }, 2000)
      }
    },
    created () {}
  }
</script>

<style lang="less" scoped>

</style>
