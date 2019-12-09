<template>
  <div class="login">
    <!-- 头部 -->
    <van-nav-bar @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <form>
      <p class="login-header">登录</p>
      <!-- 输入登录手机号 -->
      <van-cell-group class="login-code">
        <van-field v-model="account" placeholder="请输入您的新手机号号码">
          <div slot="label">
            <span>+86</span>
            <span class="triangle"></span>
          </div>
        </van-field>
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
          placeholder="请输入密码"
        />
      </van-cell-group>
      <!-- 登录按钮 -->
      <div class="login-btn-box">
        <van-button class="login-btn" @click.prevent="handleClickPhone">登录</van-button>
      </div>
      <div class="register-password">
        <!-- 忘记密码 -->
        <router-link to="/sign/resetting" class="color-white">忘记密码</router-link>
      </div>
      <div class="register-fouter">
        <!-- <router-link to="/sign/register" class="color-sapphire">没有账号？立即注册</router-link> -->
        <router-link to="/" class="color-sapphire">没有账号？立即注册</router-link>
      </div>
    </form>
  </div>
</template>
<script>
import { login, getUserInfo } from "@/api/user";
export default {
  name: "LoginIndex",
  data() {
    return {
      userInfo:{},
      // account: "18636235298",
      account: "000000000001",
      password: "123456"
    };
  },
  created() {
    this.$toast.setDefaultOptions({ duration: 800 });
  },

  methods: {
    // 登录验证手机
    async handleClickPhone() {
      try {
        const phone = this.account;
        const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        const pass = this.password;
        const passReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,30}$/;
        const regNum = /^[0-9]{12}$/;
        if (!phone) {
          this.$toast("请输入手机号");
        } else if (!reg.test(phone) && !regNum.test(phone)) {
          this.$toast("手机号格式错误");
        } else if (!pass) {
          this.$toast("请输入密码");
        } 
        // else if (!passReg.test(pass)) {
        //   this.$toast("密码过于简单");
        // } 
        else {
          const formData = new FormData();
          formData.append("account", this.account);
          formData.append("password", this.password);
          const res = await login(formData);
          const token = res.data.result;
          // 返回得token值存储到本地
          window.localStorage.setItem("sessionid", token.sessionid);
          const data = await getUserInfo()
          this.$store.commit('setClickCard', data.data.result.ID_card_number)
          this.$store.commit('setClickEdu', data.data.result.edu_bg)
          this.$store.commit('setClickImg', data.data.result.header_img)
          this.$store.commit('setClickIntro', data.data.result.intro)
          this.$store.commit('setClickTime', data.data.result.last_login_time)
          this.$store.commit('setClickNumber', data.data.result.login_number)
          this.$store.commit('setClickPhone', data.data.result.phone)
          this.$store.commit('setClickPosition', data.data.result.position)
          this.$store.commit('setClickReg', data.data.result.reg_time)
          this.$store.commit('setClickUsercode', data.data.result.usercode)
          this.$store.commit('setClickUsername', data.data.result.username)
          if (!res.data.status) {
            this.$toast('登录失败')
          } else {
            this.$router.push("/personal");
          }
        }
      } catch (err) {
        this.$toast("登录失败");
      }
    },
    // 验证登录密码得显示和隐藏
    typeClickPassword() {
      const password = document.getElementById("password");
      if (password.type === "password") {
        password.type = "text";
      } else if (password.type === "text") {
        password.type = "password";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.login-header {
  color: #fff;
  height: 33px;
  font-size: 24px;
  font-family: PingFangSC;
  font-weight: 500;
  line-height: 33px;
  padding-top: 50px;
  padding-bottom: 20px;
}
.login-code {
  margin-bottom: 15px;
  border-radius: 15px;
  .triangle {
    border-top: 4px solid #fff;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    display: inline-block;
    text-align: center;
    margin-left: 10px;
  }
}

form {
  padding: 0 15px;
}
.login-btn-box {
  padding-top: 30px;
}
.login-btn {
  width: 100%;
  background-color: #2f98ff;
  .van-button__text {
    width: 32px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 22px;
  }
}
.register-password {
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
}
.color-white {
  color: #fff;
}
.register-fouter {
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC;
  font-weight: 400;
  line-height: 20px;
  padding-top: 213px;
  display: flex;
  justify-content: center;
  align-items: center;
  .color-sapphire {
    color: #2f98ff;
  }
}
</style>
