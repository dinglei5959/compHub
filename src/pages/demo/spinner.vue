<template>
  <Page>
    <Header>
      <NavBar>
        <NavBarTitle>spinner</NavBarTitle>
      </NavBar>
    </Header>
    <Content padding>
      <section>
        <div>
          五种type设置后的不同结果
        </div>
        <div>
          <Spinner></Spinner>
          <Spinner type="pearl1"></Spinner>
          <Spinner type="pearl2"></Spinner>
          <Spinner type="pearl3"></Spinner>
          <Spinner type="ring"></Spinner>
          <Spinner type="line"></Spinner>
        </div>
      </section>
      <section>
        <div>
          大小可以通过size来 进行设置
        </div>
        <div>
          <Spinner :size="10"></Spinner>
          <Spinner :size="20"></Spinner>
          <Spinner :size="30"></Spinner>
          <Spinner :size="50" type="pearl3"></Spinner>
          <Spinner :size="50" type="ring"></Spinner>
          <Spinner type="line" :size="50"></Spinner>
        </div>
      </section>
      <section>
        <div>
          转速可以通过interval来设置,默认是1000ms
        </div>
        <div>
          <Spinner></Spinner>
          <Spinner :interval="2000" type="pearl1"></Spinner>
          <Spinner :interval="3000" type="pearl2"></Spinner>
          <Spinner :interval="4000" type="pearl3"></Spinner>
          <Spinner :interval="5000" type="ring"></Spinner>
          <Spinner :interval="6000" type="line"></Spinner>
        </div>
      </section>
      <section>
        <div>
          你可以通过color属性无所顾虑的去设置颜色，但要保证是‘#666’或‘#666666’的格式,'red'也可以的
        </div>
        <div>
          <Spinner color="#a37"></Spinner>
          <Spinner color="#978541" type="pearl1"></Spinner>
          <Spinner color="green" type="pearl2"></Spinner>
          <Spinner color="blue" type="pearl3"></Spinner>
          <Spinner color="brown" type="ring"></Spinner>
          <Spinner color="purple" type="line"></Spinner>
        </div>
      </section>
      <section>
        <div>
          如果你的业务需要暂停这种操作，那么久请 使用:pause="true"来达到目的
        </div>
        <div>
          <Spinner :pause="true" color="#a37"></Spinner>
          <Spinner :pause="true" color="#978541" type="pearl1"></Spinner>
          <Spinner :pause="true" color="green" type="pearl2"></Spinner>
          <Spinner :pause="true" color="blue" type="pearl3"></Spinner>
          <Spinner :pause="true" color="brown" type="ring"></Spinner>
          <Spinner :pause="true" type="line"></Spinner>
        </div>
      </section>
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
  import { Spinner } from 'chva/components/spinner'
  export default {
    name: 'Spinner2',
    data () {
      return {

      }
    },
    components: {
      Spinner
    },
    created () {
    }
  }
</script>

<style lang="less" scoped>
  .details {
    padding: 5px;
    color: #666;
    .vue {
      background: url(../../assets/logo.png);
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
