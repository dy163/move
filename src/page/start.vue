<template>
  <div class="start">
    <van-button type="info" to="/">注册</van-button>
    <van-button type="info" to="/sign/login">登录</van-button>
  </div>
</template>

<script>

export default {
  name: 'Start',
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .start {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color:#D8D8D8;
    display: flex;
    justify-content: center;
    .van-button {
      margin-top: 200px;
      margin-right: 30px;
    }
  }
</style>
