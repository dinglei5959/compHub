<template>
  <Page>
    <Header>
      <NavBar>
        <NavBarTitle>Toast</NavBarTitle>
      </NavBar>
    </Header>
    <Content>
      <article padding>
        <section>
          参数：message、timeout、direct
        </section>
        <section class="item">
          <div class="intro">默认是2s钟，且从下方开始浮动上来</div>
          <Button shape='lub' @click="clickHandler" >
            <span>默认2000ms关闭</span>
          </Button>
        </section>
        <section class="item">
          <Button shape='lub' @click="timeout">
            <span>自定义5s中结束关闭</span>
          </Button>
        </section>
        <section class="item">
          <Button shape='lub' @click="fromtop">
            <span>自上而下</span>
          </Button>
        </section>
        <section class="item">
          <Button shape='lub' @click="fromleftintop">
            <span>置顶的左滑</span>
          </Button>
          <Button shape='lub' @click="fromrightintop">
            <span>置顶的右滑</span>
          </Button>
        </section>
        <section class="item">
          <Button shape='lub' @click="fromleftinmiddle">
            <span>于中的左滑</span>
          </Button>
          <Button shape='lub' @click="fromrightinmiddle">
            <span>于中的右滑</span>
          </Button>
        </section>
        <section class="item">
          <Button shape='lub' @click="fromleftinbottom">
            <span>在底的左滑</span>
          </Button>
          <Button shape='lub' @click="fromrightinbottom">
            <span>在底的右滑</span>
          </Button>
        </section>
        <section class="item">
          <Button shape='lub' @click="fade">
            <span>中间fade出来</span>
          </Button>
        </section>
         <section class="item">
          <Button shape='lub' @click="rect">
            <span>正方形</span>
          </Button>
        </section>
      </article>
    </Content>
  </Page>
</template>

<script>
import Toast from 'chva/components/toast'
import Button from 'chva/components/button'
export default {
  name: 'Toast',
  methods: {
    clickHandler () {
      Toast.present({message: '请稍候..'})
    },
    timeout () {
      Toast.present({message: 'close after 5s..', timeout: 5000})
    },
    fade () {
      Toast.present({message: 'fade..', direct: 'fade'})
    },
    rect () {
      Toast.present({message: 'fade..', direct: 'fade', shape: 'rect'})
    },
    fromtop () {
      Toast.present({message: 'from top..', direct: 'top'})
    },
    fromleftintop () {
      Toast.present({message: 'from top in top ..', direct: 'left_in_top'})
    },
    fromrightintop () {
      Toast.present({message: 'from top in top ..', direct: 'right_in_top'})
    },
    fromleftinmiddle () {
      Toast.present({message: 'from top in middle ..', direct: 'left_in_middle'})
    },
    fromrightinmiddle () {
      Toast.present({message: 'from top in middle ..', direct: 'right_in_middle'})
    },
    fromleftinbottom () {
      Toast.present({message: 'from top in bottom ..', direct: 'left_in_bottom'})
    },
    fromrightinbottom () {
      Toast.present({message: 'from top in bottom ..', direct: 'right_in_bottom'})
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
