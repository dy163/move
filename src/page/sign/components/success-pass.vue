<template>
    <div class="success-pass">
        <!-- 头部 -->
        <van-nav-bar
        title="重 置 密 码"
        @click-left="$router.back()">
            <van-icon name="arrow-left" slot="left"/>
        </van-nav-bar>
        <!-- 提示成功图片 -->
        <div class="success-center">
            <van-icon name="success" size="54px"/>
        </div>
        <p>您 的 密 码 已 重 置，去 登 录</p>
        <!-- 提示成功按钮 -->
        <div class="login-btn-box">
          <van-button
            class="login-btn"
            to="/login"
          >登录</van-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SuccessPass',
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.success-center {
    padding-top: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.van-icon-success{
    color: #fff;
    background-color: #2F98FF;
    border-radius: 50%;
    border: 0;
}
p {
    color: #fff;
    width: 100%;
    height:20px;
    font-size:14px;
    font-family:PingFangSC;
    font-weight:400;
    line-height:20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 30px 0;
}
.login-btn-box {
    padding: 0 15px;
}
.login-btn {
    width: 100%;
    height:44px;
    background: #2F98FF;
    border-radius:3px;
    .van-button__text {
        width:32px;
        height:22px;
        font-size:16px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:22px;
    }
}
</style>
