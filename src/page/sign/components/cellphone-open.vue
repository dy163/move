<template>
    <div class="open-cellphone">
        <van-nav-bar
        title="输入手机号"
        left-arrow
        @click-left="$router.back()"
        />
        <p>手机验证开户</p>
        <form>
            <van-cell-group>
                <van-field  v-model="code" placeholder="请输入您的手机号号码">
                  <div slot="label">
                    <span>+86</span>
                    <span class="triangle"></span>
                  </div>
                </van-field>
            </van-cell-group>
            <div class="resetting-box">
                <van-cell-group class="resetting-model">
                    <van-field  label="验证码" v-model="pass" placeholder="请输入验证码" />
                </van-cell-group>
                <van-button
                  hairline
                  :disabled="!!codeTimer"
                  :loading="codeLoading"
                  @click="handleClickTimer"
                  >
                  {{ codeTimer ? `${codeTimeSeconds}s` : '获取验证码' }}
                  </van-button>
            </div>
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
  name: 'CellphoneOpen',
  props: {},
  data () {
    return {
      code: '',
      pass: '',
      codeLoading: false,
      codeTimer: null, // 倒计时定时器
      codeTimeSeconds: initCodeTimeSeconds // 定时器事件
    }
  },
  methods: {
    // 输入手机正则验证
    handleClick () {
      const phone = this.code
      const reg = /^1[3|4|5|8][0-9]\d{4,8}$/
      const yzreg = /^\d{6}$/
      if (!phone) {
        this.$toast('请输入手机号')
      } else if (!reg.test(phone)) {
        this.$toast('手机号格式错误')
      } else if (!yzreg.test(this.pass)) {
        this.$toast('请输入6位数字验证码')
      } else {
        this.$router.push({ name: 'sign', params: { type: 'detailed-people' } })
      }
    },
    // 定时器函数
    handleClickTimer () {
      this.codeTimer = window.setInterval(() => {
        this.codeTimeSeconds--
        if (this.codeTimeSeconds <= 0) {
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
p {
  padding-left: 16px;
  height:29px;
  font-size:21px;
  font-family:PingFangSC;
  font-weight:500;
  color:#fff;
  line-height:29px;
  margin-top: 20px;
}
form {
  padding: 0 15px;
  padding-top: 40px;
  .triangle {
    border-top: 4px solid #fff;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    display: inline-block;
    text-align: center;
    margin-left: 10px;
  }
}
.resetting-box {
    margin-top: 10px;
    display: flex;
    align-items: center;
    .resetting-model {
      width: 250px;
      margin-right: 10px;
    }
    .van-button {
      background-color: #353641;
      color: #7E829C;
      width: 85px;
      .van-button__text {
        margin: 0 -20px;
        font-size:14px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
      }
    }
}
.van-cell {
  color: #fff;
  background-color:#353641;
}
.login-btn-box {
  padding-top: 20px;
}
.login-btn {
  width: 100%;
  background-color: #2F98FF;
  color: #fff;
}
</style>
