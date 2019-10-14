<template>
    <div class="proving-register">
        <!-- 头部 -->
        <van-nav-bar
        left-arrow
        @click-left="$router.back()"
        />
        <p class="yzregister-header">注册账号</p>
        <p class="yzregister-number">已发送验证码到<span>17600110101</span></p>
        <!-- 表单验证 -->
        <form>
            <div class="resetting-box">
              <!-- 展示信息 -->
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
                <!-- 倒计时获取验证码 -->
                <div>
                  <van-button
                  hairline
                  :disabled="!!codeTimer"
                  :loading="codeLoading"
                  @click="handleClickTimer"
                  >
                  {{ codeTimer ? `${codeTimeSeconds}s` : '获取验证码' }}
                  </van-button>
                </div>
            </div>
            <!-- 提示下一步 -->
            <div class="login-btn-box">
                <van-button
                class="login-btn"
                hairline
                @click="handleClick"
                @click.prevent="handleClick"
                >下一步</van-button>
            </div>
        </form>
    </div>
</template>

<script>
const initCodeTimeSeconds = 60
export default {
  name: 'ProvingRegister',
  data () {
    return {
      verification: '',
      codeLoading: false,
      codeTimer: null, // 倒计时定时器
      codeTimeSeconds: initCodeTimeSeconds // 定时器事件
    }
  },
  methods: {
    handleClick () {
      const sms = this.verification
      const reg = /^\d{6}$/
      if (!sms) {
        this.$toast('请获取发送验证码')
      } else if (!reg.test(sms)) {
        this.$toast('验证码输入错误')
      } else {
        this.$router.push({ name: 'sign', params: { type: 'register' } })
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
.yzregister-header {
    padding-top: 50px;
    padding-left: 15px;
    margin-bottom: 5px;
    width:96px;
    height:33px;
    font-size:24px;
    font-family:PingFangSC-Medium,PingFangSC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:33px;
}
.yzregister-number {
    width:100%;
    height:20px;
    font-size:14px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:20px;
    padding-left: 15px;
    padding-bottom: 15px;
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
        box-sizing: border-box;
        .van-button__text {
          margin: 0 -20px;
        }
      }
    }
}
.van-cell {
  color: #fff;
  background-color:#353641;
}
.yzregister-box {
    display: flex;
}
.yzregister-time {
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
}
</style>
