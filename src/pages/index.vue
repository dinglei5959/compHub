<template>
  <Page>
    <Header>
      <NavBar>
        <NavBarTitle>首页</NavBarTitle>
      </NavBar>
    </Header>
    <Content padding>
      <article class="list">
        <section v-for="(item,index) in list" :key="'list'+index" class="item">
          <router-link :to="{name:item}">{{item}}</router-link>
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
import pages from './pages.js'
export default {
  name: 'Index',
  data () {
    return {
      list: pages
    }
  },
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
