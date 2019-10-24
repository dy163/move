<template>
    <div class="reset-password">
        <van-nav-bar
            title="重 置 密 码"
            left-arrow
            @click-left="$router.back()"
            />
        <form>
          <!-- 第一次密码输入 -->
          <van-cell-group>
            <van-field v-model="firstPassword" type="password" placeholder="请输入新密码"/>
          </van-cell-group>
          <!-- 第二次密码输入 -->
          <van-cell-group>
            <van-field v-model="secondPassword" type="password" placeholder="请再次输入新密码"/>
          </van-cell-group>
          <div class="login-btn-box">
            <van-button
            class="login-btn"
            @click.prevent="handleClickNextStep"
            >下一步</van-button>
          </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'ResetPassword',
  data () {
    return {
      firstPassword: '',
      secondPassword: ''
    }
  },
  methods: {
    // 下一步操作
    handleClickNextStep () {
      const phone = this.firstPassword
      const password = this.secondPassword
      const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,30}$/
      if (!phone) {
        this.$toast('密码不能为空')
      } else if (!reg.test(phone)) {
        this.$toast('密码不能少于8位需要包含，数字字母')
      } else if (phone !== password) {
        this.$toast('两次密码不一致')
      } else {
        this.$router.push({ name: 'sign', params: { type: 'success-pass' } })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.reset-password {
  color: #fff;
}
form {
  padding: 0 15px;
  padding-top: 24px;
}
.van-cell-group {
  margin-bottom: 20px;
}
.login-btn {
  border: 0;
  border-radius: 3px;
  margin-top: 30px;
  width: 100%;
  background:rgba(47,152,255,1);
  font-size:16px;
  font-family:PingFangSC;
  font-weight:500;
  color:rgba(255,255,255,1);
}
</style>
