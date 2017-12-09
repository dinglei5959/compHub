<template>
   <Page>
    <Header>
      <NavBar>
        <NavBarTitle>Indicator</NavBarTitle>
      </NavBar>
    </Header>
    <Content>
      <article padding>
        <section class="item">
          <Button shape='lub' @click="clickHandler" >
          <span>点击最多10s超时</span>
        </Button>
        </section>
        <section class="item">
          <Button @click="timeout" shape='lub'>
            <span>点击超时3s关闭</span>
          </Button>
        </section>
      </article>
    </Content>
  </Page>
</template>

<script>
import Indicator from 'chva/components/indicator'
import Button from 'chva/components/button'
export default {
  name: 'IndicatorDemo',
  methods: {
    clickHandler () {
      Indicator.present()
    },
    timeout () {
      Indicator.present({timeout: 3000})
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
