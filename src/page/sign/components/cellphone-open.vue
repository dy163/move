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
                <van-field  label="+86" v-model="code" placeholder="请输入您的手机号号码" />
            </van-cell-group>
            <div class="resetting-box">
                <van-cell-group class="resetting-model">
                    <van-field  label="验证码" v-model="pass" placeholder="请输入验证码" />
                </van-cell-group>
                <van-button
                hairline
                @click="handleClickVerify"
                @click.prevent="handleClickVerify"
                >{{ message }}</van-button>
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
export default {
  name: 'CellphoneOpen',
  props: {},
  data () {
    return {
      code: '',
      pass: '',
      content: '',
      totalTime: 60,
      message: '获取验证码'
    }
  },
  methods: {
    handleClick () {
      if (this.code || this.pass !== '') {
        this.$router.push({ name: 'sign', params: { type: 'detailed-people' } })
      } else {
        this.$toast('请输入手机号和验证码')
      }
    },
    handleClickVerify () {
      window.setInterval(() => {
        this.totalTime--
        this.content = this.totalTime + 's'
        this.message = this.totalTime
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
    background-color: #20212A;
    font-family:PingFangSC;
}
.van-nav-bar .van-icon {
    color: #fff;
    height:24px;
    font-size:17px;
    font-weight:500;
    line-height:24px;
}
.van-hairline--bottom::after {
    height:2px;
    background-color: #14151C;
}
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
