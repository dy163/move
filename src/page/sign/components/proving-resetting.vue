<template>
    <div class="resetting">
      <!-- 头部 -->
        <van-nav-bar
        title="重置密码"
        left-arrow
        @click-left="$router.back()"
        />
        <!-- 发送手机号 -->
        <p class="resetting-name">身份验证</p>
        <p class="resetting-te">已发送短信验证码到17600110101</p>
        <form>
            <div class="resetting-box">
              <!-- 验证码 -->
                <div>
                  <van-cell-group class="resetting-model">
                    <van-field
                      v-model="verification"
                      center
                      label="验证码"
                      placeholder="请输入短信验证码"
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
            <!-- 下步操作 -->
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
const initCodeTimeSeconds = 60
export default {
  name: 'ProvingResetting',
  data () {
    return {
      verification: '',
      codeLoading: false,
      codeTimer: null, // 倒计时定时器
      codeTimeSeconds: initCodeTimeSeconds // 定时器事件
    }
  },
  methods: {
    // 下一步操作
    handleClickNextStep () {
      const sms = this.verification
      const reg = /^\d{6}$/
      if (!sms) {
        this.$toast('请获取发送验证码')
      } else if (!reg.test(sms)) {
        this.$toast('验证码输入错误')
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
.resetting {
  color: #fff;
  font-family:PingFangSC;
  .resetting-name {
    height:29px;
    font-size:21px;
    font-weight:500;
    line-height:29px;
    padding-left: 15px;
    padding-top: 20px;
  }
  .resetting-te {
    width:300px;
    height:20px;
    font-size:14px;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:20px;
    padding-top: 5px;
    padding-left: 15px;
    padding-bottom: 15px;
  }
}
form {
  padding: 0 15px;
  .resetting-box {
    display: flex;
    align-items: center;
    height: 50px;
    .van-button {
      background-color:#353641;
      width: 85px;
      margin-left: 8px;
      height: 50px;
      border-radius: 3px;
      color: #7E829C;
      .van-button__text {
        margin: 0 -20px;
      }
    }
  }
  .resetting-time {
    margin-left: 10px;;
    width: 75px;
  }
  .login-btn-box {
    padding-top: 30px;
  }
  .login-btn {
    width: 100%;
    background-color: #2F98FF;
    color: #fff;
    border-radius: 3px;
  }
}

</style>
