<template>
  <Page>
    <Header>
      <NavBar>
        <NavBarTitle>backdrop</NavBarTitle>
      </NavBar>
    </Header>
    <Content>
      <article padding>
        <section class="item">
          <span class="bold">默认点击不可去除,这里三秒后自动去除</span>
          <div>
            <div @click="defaultshow" class="btn">点击</div>
          </div>
        </section>
        <section class="item">
          <span class="bold">canselStyle来设置取消的方式，有click和dbclick</span>
          <div>
            <div @click="clickDismissshow" class="btn">click取消</div>
          </div>
          <span class="bold">注意手机端没有dbclick</span>
          <div>
            <div @click="dbclickDismissshow" class="btn">dbclick取消</div>
          </div>
        </section>
      </article>
    </Content>
  </Page>
</template>

<script>
  import BackDrop from 'chva/components/backdrop'

  export default {
    name: 'backdrop',

    data () {
      return {
        _instance: null
      }
    },
    methods: {
      defaultshow () {
        this._instance.show()
        setTimeout(() => {
          this._instance.hide()
        }, 3000)
      },
      clickDismissshow () {
        this._instance.show({cancelStyle: 'click'})
      },
      dbclickDismissshow () {
        this._instance.show({cancelStyle: 'dbclick'})
      }
    },
    created () {
      this._instance = new BackDrop()
    }
  }
</script>

<style lang="less" scoped>
  .btn{
    display: inline-block;
    padding: 10px 20px;
    background: #196ca9;
    color:aliceblue;
    border-radius: 5px;
  }
</style>
