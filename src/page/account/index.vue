<template>
  <div class="account">
    <van-nav-bar title="开 户" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="blank-space">
      <img src="@/assets/img/xin.png" alt="">
    </div>
    <!-- 手机验证开户 -->
    <div class="account-rapidly">
      <img src="@/assets/img/gsou.png" />
      <div @click="gsouClick = true">
        <router-link to="/sign/register">极速开户</router-link>
        <p>1分钟提交真实身份信息即可成功开户。</p>
      </div>
    </div>
    <!-- 隐私保护 -->
    <div class="account-rapidly">
      <img src="@/assets/img/privacy.png" />
      <div>
        <router-link to="/sign/treaty-particulars">隐私保护</router-link>
        <p>除非法律法规特别要求，绝不会将您的个人信息、非公开信息披露给第三方。</p>
      </div>
    </div>
    <!-- 投资保障 -->
    <div class="account-rapidly">
      <img src="@/assets/img/invest.png" />
      <div>
        <router-link to="/sign/treaty-particulars">投资保障</router-link>
        <p>股票交易清算托管与某某证券，客户资产由某某托管。</p>
      </div>
    </div>
    <div class="login-btn-box">
      <van-button class="login-btn" to="/sign/register" round>立即开户</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountIndex",
  data() {
    return {
      show: false
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.blank-space {
  height: 100px;
  img {
    width: 100%;
  }
}
.account-rapidly {
  display: flex;
  margin: 35px 35px;
  font-family: PingFangSC-Regular, PingFang SC;
  img {
    height: 45px;
  }
  div {
    padding-left: 20px;
    a {
      display: flex;
      padding-bottom: 10px;
      color: #2f98ff;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      color: #fff;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 1px;
    }
  }
}
.login-btn-box {
  padding: 0 63px;
  padding-top: 40px;
  .login-btn {
    width: 250px;
    height: 40px;
    background: rgba(47, 152, 255, 1);
    border-radius: 25px;
    color: #fff;
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 500;
    border: 0;
  }
}
</style>
