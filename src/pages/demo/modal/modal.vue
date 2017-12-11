<template>
  <Page>
    <Header>
      <NavBar>
        <NavBarTitle>Modal</NavBarTitle>
      </NavBar>
    </Header>
    <Content>
      <article padding>
        <Button @click="clickHandler" shape='lub'  class="item">
           使用attr接受值
        </Button>
        <Button @click="clickHandler2" shape='lub'  class="item">
           使用props接受值
        </Button>
      </article>
    </Content>
  </Page>
</template>

<script>
import Button from 'chva/components/button'
import Modal from 'chva/components/modal'
import template from './modalDemo.vue'
import template2 from './modalDemo2.vue'
export default{
  name: 'ModalDemo',
  methods: {
    clickHandler () {
      Modal.present({
        template: template,
        data: {
          name: 'dinglei'
        }
      })
    },
    clickHandler2 () {
      Modal.present({
        template: template2,
        data: {
          name: 'dinglei'
        }
      })
    }
  },
  components: {Button}
}
</script>

<style lang="less" scoped>
  .item{
    margin: 10px 30px;
  }
</style>
