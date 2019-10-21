<template>
    <div class="register">
        <van-nav-bar
        left-arrow
        @click-left="$router.back()"/>
        <p class="register-header">手机号注册</p>
        <form>
          <!-- 注册手机号 -->
            <van-cell-group>
              <van-field
              v-model="code"
              placeholder="手机号码"
              right-icon="close"
              @click-right-icon="code = ''">
                <div slot="label">
                  <span>+86</span>
                  <span class="triangle"></span>
                </div>
              </van-field>
            </van-cell-group>
            <!-- 密码输入 -->
            <van-cell-group>
              <van-field
              v-model="pass"
              label="密码"
              id="password"
              type="password"
              right-icon="closed-eye"
              @click-right-icon="typeClickPassword"
              placeholder="8-24位数字英文或字符" />
            </van-cell-group>
            <!-- 再次输入密码 -->
            <van-cell-group>
              <van-field
              v-model="againpass"
              label="密码"
              type="password"
              placeholder="请再次输入密码" />
            </van-cell-group>
            <!-- 注册 -->
            <div class="login-btn-box">
              <van-button
              class="login-btn"
              @click="handleClick"
              @click.prevent="handleClick"
              >确认注册</van-button>
            </div>
            <!-- 了解更多知识 -->
            <div class="annotation">
              <p>
                点击“确认注册”，即表示您同意
                <router-link to="/sign/treaty-particulars">产品许可协议</router-link>及
                <router-link to="/sign/treaty-particulars">隐私政策</router-link>
              </p>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      code: '',
      pass: '',
      againpass: ''
    }
  },
  methods: {
    // 验证手机号
    handleClick () {
      const phone = this.code
      const pass = this.pass
      const againpass = this.againpass
      const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,30}$/
      if (!phone) {
        this.$toast('手机不能为空')
      } else if (!reg.test(pass)) {
        this.$toast('密码不能少于8位需要包含，数字字母')
      } else if (pass !== againpass) {
        this.$toast('两次密码不一致')
      } else {
        this.$router.push({ name: 'sign', params: { type: 'proving-register' } })
      }
    },
    // 控制密码得隐藏与显示
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
.register-header {
  width:120px;
  height:33px;
  font-size:24px;
  font-weight:500;
  color:rgba(255,255,255,1);
  padding-left: 15px;
  padding-bottom: 20px;
  line-height:33px;
  font-family:PingFangSC-Medium,PingFangSC;
  padding-top: 50px;
}
form {
  padding: 0 15px;
  .triangle {
    border-top: 4px solid #fff;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    display: inline-block;
    text-align: center;
    margin-left: 10px;
  }
}
.van-cell-group {
  width: 100%;
  margin-bottom: 15px;
}
.login-btn-box {
  padding-top: 15px;
}
.login-btn {
  width: 100%;
  font-size:16px;
  background-color: #2F98FF;
  color: #fff;
  border: 0;
  border-radius: 3px;
}
.annotation {
  height:17px;
  font-size:12px;
  font-family:PingFangSC;
  font-weight:400;
  color:rgba(147,152,177,1);
  line-height:17px;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  a {
    color: #2F98FF;
  }
}
</style>
