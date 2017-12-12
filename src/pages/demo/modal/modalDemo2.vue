<template>
  <Page>
    <Header>
      <NavBar>
        <NavBarTitle>ModalTemplate</NavBarTitle>
      </NavBar>
    </Header>
    <Content>
      <article padding>
        我只是来测试一下   modal好不好使而已
        <section>
          接下来是传递的参数
        </section>
        <section>
          {{$attrs}}
          {{this.$options.propsData.data}}
          {{this.data}}
        </section>
      </article>
    </Content>
  </Page>
</template>

<script>
export default{
  name: 'ModalDemo',
  props: {
    data: {type: Object, default: {}}
  },
  created () {
    console.log(this)
  }
}
</script>

<style lang="less" scoped>
  *{
  }
</style>
