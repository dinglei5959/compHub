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
          <span>点击不会关闭</span>
        </section>
        <section @click="timeout" class="item">
          <span>点击超时3s关闭</span>
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
      },
      timeout () {
        Loading.present({message: 'close after 3s..', timeout: 3000})
      }
    },
    created () {}
  }
</script>

<style lang="less" scoped>
  .item{
    padding: 10px 30px;
  }
</style>
