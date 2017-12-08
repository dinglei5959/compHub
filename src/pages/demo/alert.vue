<template>
    <Page>
    <Header>
      <NavBar>
        <NavBarTitle>Alert</NavBarTitle>
      </NavBar>
    </Header>
    <Content>
      <article padding>
        <Button shape='lub' @click="clickHandler" class="item">
           无标题Alert
        </Button>
        <Button shape='lub' @click="clickHandler2" class="item">
           有标题Alert
        </Button>
      </article>
    </Content>
  </Page>
</template>

<script>
  import Alert from 'chva/components/alert'
  import Button from 'chva/components/button'
  export default{
    name: 'Alert',
    methods: {
      clickHandler () {
        Alert.present({
          message: '哈哈哈',
          buttons: [
            {
              text: '关闭',
              handler () {
                Alert.dismiss()
              }
            },
            {
              text: 'kaishi'
            },
            {
              text: 'kaishi'
            }
          ]
        })
      },
      clickHandler2 () {
        Alert.present({
          title: '我是标题啦',
          message: '哈哈哈',
          buttons: [
            {
              text: '关闭',
              handler () {
                Alert.dismiss()
              }
            },
            {
              text: 'kaishi'
            },
            {
              text: 'kaishi'
            }
          ]
        })
      }
    },
    components: {Button}
  }
</script>
