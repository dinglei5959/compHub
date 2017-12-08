<template>
  <Page>
    <Header>
      <NavBar>
        <NavBarTitle>Loading</NavBarTitle>
      </NavBar>
    </Header>
    <Content>
      <article padding>
        <section class="item">
          <Button shape='lub' @click="clickHandler" >
          <span>点击不会关闭</span>
        </Button>
        </section>
        <section class="item">
          <Button shape='lub' @click="timeout">
          <span>点击超时3s关闭</span>
        </Button>
        </section>
      </article>
    </Content>
  </Page>
</template>

<script>
import Loading from 'chva/components/loading'
import Button from 'chva/components/button'
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
  components: {Button}
}
</script>

<style lang="less" scoped>
  .item{
    padding: 10px 30px;
  }
</style>
