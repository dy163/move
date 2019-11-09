<template>
    <div class="reset-password">
        <van-nav-bar
          title="重 置 密 码"
          @click-left="$router.back()">
          <van-icon name="arrow-left" slot="left"/> 
        </van-nav-bar>
        <form>
          <!-- 请输入旧密码 -->
          <van-cell-group>
            <van-field
            v-model="oldPassword"
            type="password"
            placeholder="请输入旧密码"/>
          </van-cell-group>
          <!-- 第一次密码输入 -->
          <van-cell-group>
            <van-field
            v-model="newPassword"
            type="password"
            placeholder="请输入新密码"/>
          </van-cell-group>
          <!-- 第二次密码输入 -->
          <van-cell-group>
            <van-field
            v-model="rePassword"
            type="password"
            placeholder="请再次输入新密码"/>
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
import { resetPassword } from '@/api/user'
export default {
  name: 'ResetPassword',
  data () {
    return {
      oldPassword: '',
      newPassword: '',
      rePassword: ''
    }
  },

  created() {
    this.$toast.setDefaultOptions({ duration: 800 });
  },

  methods: {
    // 下一步操作
    async handleClickNextStep () {
      try {
        const phone = this.oldPassword
        const password = this.newPassword
        const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,30}$/
        if (!phone) {
          this.$toast('请输入旧密码')
        } else if (!reg.test(password)) {
          this.$toast('密码不能少于8位需要包含，数字字母')
        } else if (password !== this.rePassword) {
          this.$toast('两次密码不一致')
        } else {
          const formData = new FormData()
          formData.append('oldPassword', this.oldPassword)
          formData.append('newPassword', this.newPassword)
          formData.append('rePassword', this.rePassword)
          const res = await resetPassword(formData)
          if (res.data.status) {
            this.$router.push({ name: 'sign', params: { type: 'success-pass' } })
          } else {
            this.$toast('修改失败')
          }
        }
      } catch (error) {
        console.log(error)
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
