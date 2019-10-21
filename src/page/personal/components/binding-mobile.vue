<template>
    <div class="binding-mobile">
        <van-nav-bar
        title="修改手机号"
        left-arrow
        @click-left="$router.back()"
        />
        <p>绑定新手机号</p>
        <form>
            <van-cell-group>
                <van-field  v-model="code" placeholder="请输入您的新手机号号码">
                  <div slot="label">
                    <span>+86</span>
                    <span class="triangle"></span>
                  </div>
                </van-field>
            </van-cell-group>
            <div class="login-btn-box">
                <van-button
                class="login-btn"
                @click="handleClick"
                @click.prevent="handleClick"
                >获取验证码</van-button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'BindingMobile',
  data () {
    return {
      code: ''
    }
  },
  methods: {
    handleClick () {
      const phone = this.code
      const reg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (!phone) {
        this.$toast('请输入手机号')
      } else if (!reg.test(phone)) {
        this.$toast('手机号格式错误')
      } else {
        this.$router.push('/mobile-registered')
      }
    }
  }
}
</script>

<style lang="less" scoped>
p {
    height:29px;
    font-size:21px;
    font-family:PingFangSC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:29px;
    padding: 20px 15px;
}
form {
  padding: 0 15px;
  padding-top: 20px;
  .triangle {
    border-top: 4px solid #fff;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    display: inline-block;
    text-align: center;
    margin-left: 10px;
  }
  /deep/.van-field__label {
    width: 65px;
  }

}
.login-btn-box {
  padding-top: 30px;
}
.login-btn {
  width: 100%;
  background-color: #2F98FF;
  border: 0;
  border-radius: 3px;
  .van-button__text {
    font-size:16px;
    font-family:PingFangSC-Medium,PingFangSC;
    font-weight:500;
    color:rgba(255,255,255,1);
  }
}
</style>
