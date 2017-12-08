<template>
    <Page>
    <Header>
      <NavBar>
        <NavBarTitle>Buttons</NavBarTitle>
      </NavBar>
    </Header>
    <Content>
      <article padding>
        <section class="title">
          基础用法
        </section>
        <section  class="item">
           <Button type="primary">primary</Button>
        </section>
        <section  class="item">
           <Button type="danger">danger</Button>
        </section>
        <section  class="item">
           <Button type="dark">dark</Button>
        </section>
        <section  class="item">
           <Button shape="round">round</Button>
        </section>
        <section  class="item">
           <Button shape="lub">lub</Button>
        </section>
        <section  class="item">
           <Button disabled shape="lub">disabled</Button>
        </section>
         <section class="title">
          组合用法
        </section>
        <section  class="item">
           <Button shape="lub" style="padding:10px 20px;">
             <span style="padding-right:10px;">loading</span>
             <Spinner :size="20"></Spinner>
           </Button>
        </section>
      </article>
    </Content>
  </Page>
</template>

<script>
import Button from 'chva/components/button'
import { Spinner } from 'chva/components/spinner'
export default {
  name: 'buttondemo',
  components: {Button, Spinner}
}
</script>

<style lang="less" scoped>

  .title{
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .item{
    margin-bottom: 10px;
  }
</style>
