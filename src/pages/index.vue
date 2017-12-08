<template>
  <Page>
    <Header>
      <NavBar>
        <NavBarTitle>首页</NavBarTitle>
      </NavBar>
    </Header>
    <Content style="background:#7f89b545;">
      <article class="list">
        <section v-for="(item,index) in list" :key="'list'+index" class="category-item">
          <section class="introduce">
            {{item.name}}
          </section>
          <section class="_content">
            <section v-for="(page,pi) in item.item" :key="item.name+pi" class="content-item">
              <router-link :to="{name:page.intro}">{{page.name}}</router-link>
            </section>
          </section>
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
  created () {}
}
</script>

<style lang="less" scoped>
  @import "../less/global.less";

  @border: 1px solid rgba(100, 100, 100, 0.5);
  .list {
    .category-item {
      ._content {
        border: @border;
        padding: 0 20px;
        background: #fff;
        .content-item {
          padding: 10px;
          &:not(:last-child) {
            border-bottom: @border;
          }
          & > a {
            text-decoration: none;
            color: @black;
          }
        }
      }
      .introduce {
        font-size: 12px;
        padding: 10px;
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
    & > div {
      padding: 0;
    }
  }
</style>
