<template>
    <div class="mobile-registered">
        <van-nav-bar
        title="重置密码"
        @click-left="$router.back()">
          <van-icon name="arrow-left" slot="left"/>
        </van-nav-bar>
        <div class="resetting-name">
            <p>绑定新手机号</p>
            <p>已发送短信验证码到 <span>17600110101</span> </p>
        </div>
        <form>
            <div class="resetting-box">
                <!-- 验证码 -->
                <div>
                    <van-cell-group class="resetting-model">
                        <van-field
                        v-model="verification"
                        center
                        label="验证码"
                        placeholder="88888"
                        >
                        </van-field>
                    </van-cell-group>
                </div>
                <!-- 倒计时按钮 -->
                    <van-button
                    :disabled="!!codeTimer"
                    :loading="codeLoading"
                    @click.prevent="handleClickTimer">
                    {{ codeTimer ? `${codeTimeSeconds}s` : '获取验证码' }}
                    </van-button>
            </div>
            <div class="login-btn-box">
                <van-button
                class="login-btn"
                @click.prevent="handleRegistered"
                >修改手机号</van-button>
            </div>
        </form>
    </div>
</template>

<script>
const initCodeTimeSeconds = 60
export default {
  name: 'MobileRegistered',
  data () {
    return {
      verification: '',
      codeLoading: false,
      codeTimer: null, // 倒计时定时器
      codeTimeSeconds: initCodeTimeSeconds // 定时器事件
    }
  },
  methods: {
    handleRegistered () {
      const phone = this.verification
      const reg = /^\d{6}$/
      if (!phone) {
        this.$toast('请点击按钮获取验证码')
      } else if (!reg.test(phone)) {
        this.$toast('请正确输入6位验证码')
      } else {
        this.$router.push({ name: 'sign', params: { type: 'reset-password' } })
      }
    },
    // 定时器函数
    handleClickTimer () {
      this.codeTimer = window.setInterval(() => {
        this.codeTimeSeconds--
        if (this.codeTimeSeconds <= 0) {
          // 清除定时器
          window.clearInterval(this.codeTimer)
          // 定时器回到初始状态
          this.codeTimeSeconds = initCodeTimeSeconds
          // 回到初始重新为空
          this.codeTimer = null
        }
      }, 1000)
    }
  }

}
</script>

<style lang="less" scoped>
.resetting-name {
    padding: 15px 15px;
    p:nth-child(1) {
        height:29px;
        font-size:21px;
        font-family:PingFangSC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:29px;
        padding-bottom: 5px;
    }
    p:nth-child(2) {
        height:20px;
        font-size:14px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:20px;
        padding-bottom: 5px;
    }
}
form {
  padding: 0 15px;
  .resetting-box {
    display: flex;
    align-items: center;
    flex: 1;
    .van-button {
      background-color:#353641;
      width: 85px;
      margin-left: 8px;
      color: #7E829C;
      height: 50px;
      border-radius: 3px;
      .van-button__text {
        margin: 0 -20px;
        font-size: 14px
      }
    }
    .van-field__label {
        color: #EEEEEE;
    }
  }
}
.resetting-model {
  width: 100%;
  border-radius:3px;
    .van-button__text {
    height:22px;
    font-size:16px;
    font-family:PingFangSC;
    font-weight:500;
    color: #7E829C;
    line-height:22px;
  }
}
.resetting-time {
    margin-left: 10px;;
    width: 75px;
    border-radius:3px;
}
.login-btn-box {
  padding-top: 30px;
  .login-btn {
    width: 100%;
    background-color: #2F98FF;
    border: 0;
    color: #fff;
    font-size:16px;
    font-family:PingFangSC-Medium,PingFangSC;
    font-weight:500;
    border-radius: 3px;
  }
}

</style>
