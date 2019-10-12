<template>
  <div class="login">
    <!-- 头部 -->
      <van-nav-bar
        left-arrow
        @click-left="$router.back()"/>
      <form>
        <p class="login-header">登录</p>
        <!-- 输入登录手机号 -->
        <van-cell-group class="login-code">
          <van-field
          v-model="code"
          label="+86"
          right-icon="close"
          @click-right-icon="code = ''"
          placeholder="请输入手机号或者编号" />
        </van-cell-group>
        <!-- 输入密码 -->
        <van-cell-group>
          <van-field
          id="password"
          v-model="password"
          label="密码"
          type="password"
          right-icon="closed-eye"
          @click-right-icon="typeClickPassword"
          placeholder="请输入密码" />
        </van-cell-group>
        <!-- 登录按钮 -->
        <div class="login-btn-box">
          <van-button
            class="login-btn"
            hairline
            @click="handleClick"
            @click.prevent="handleClick"
          >登录</van-button>
        </div>
        <div class="register-password" >
          <!-- 忘记密码 -->
            <router-link
            to="/sign/resetting"
            class="color-white "
            >忘记密码</router-link>
        </div>
        <div class="register-fouter">
          <router-link
          to="/sign/register"
          class="color-sapphire"
          >没有账号？立即注册</router-link>
        </div>
      </form>
  </div>
</template>
<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      code: '',
      password: ''
    }
  },

  methods: {
    handleClick () {
      const phone = this.code
      const reg = /^1[3|4|5|8][0-9]\d{4,8}$/
      if (!phone) {
        this.$toast('请输入手机号')
      } else if (!reg.test(phone)) {
        this.$toast('手机号格式错误')
      } else {
        this.$router.push('/personal-information')
      }
    },
    typeClickPassword () {
      const password = document.getElementById('password')
      if (password.type === 'password') {
        password.type = 'text'
      } else if (password.type === 'text') {
        password.type = 'password'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-header {
  color: #fff;
  height:33px;
  font-size:24px;
  font-family:PingFangSC;
  font-weight:500;
  line-height:33px;
  padding-top: 50px;
  padding-bottom: 20px;
}
.login-code {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  background-color:#353641;
}

form {
  padding: 0 15px;
}
.van-cell {
  /* padding: 5px 0; */

  color: #fff;
  background-color:#353641;
}
.login-btn-box {
  padding-top: 30px;
}
.login-btn {
  width: 100%;
  background-color: #2F98FF;
  /* color: #fff; */
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

.register-password {
  height:20px;
  font-size:14px;
  font-family:PingFangSC;
  font-weight:400;
  line-height:20px;
  display: flex;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
}
.color-white {
  color: #fff;
}
.register-fouter {
  height:20px;
  font-size:14px;
  font-family:PingFangSC;
  font-weight:400;
  line-height:20px;
  padding-top: 213px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.color-sapphire {
  color: #2F98FF;
}

</style>
