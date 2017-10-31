<template>
  <Page>
    <Header>
      <NavBar>
        <NavBarTitle>首页</NavBarTitle>
      </NavBar>
    </Header>
    <Content padding>
      <article class="list">
        <section class="item">
          <router-link :to="{name:'spinner'}">spinner</router-link>
        </section>
        <section class="item">
          <router-link :to="{name:'backdrop'}">backdrop</router-link>
        </section>
      </article>
    </Content>
    <Footer class="flexMiddle">
      <section class="details">
        inspiredby
        <div>
          <i class="vue"></i>
          <span style="line-height:30px;">vue.js</span>
        </div>
      </section>
    </Footer>
  </Page>
</template>
<script>
export default {
  name: 'Index',
  created () {
  }
}
</script>

<style lang="less" scoped>
@import '../less/global.less';
  .list{
    .item{
      padding: 10px;
      border-bottom:1px solid rgba(100, 100, 100,.5);
      &>a{
        text-decoration: none;
        color: @black;
      }
    }
  }




  .details {
    padding: 5px;
    color: #666;
    .vue {
      background: url(../assets/logo.png);
      display: inline-block;
      width: 30px;
      height: 30px;
      background-size: contain;
    }
    &>div{
      padding: 0;
    }
  }
</style>
