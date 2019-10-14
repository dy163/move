<template>
    <div class="resetting">
        <van-nav-bar
        title="重置密码"
        left-arrow
        @click-left="$router.back()"
        />
        <p>登录密码重置</p>
        <form>
          <!-- 输入手机号 -->
          <van-cell-group>
                <van-field  v-model="code" placeholder="请输入您的手机号码">
                  <div slot="label">
                    <span>+86</span>
                    <span class="triangle"></span>
                  </div>
                </van-field>
            </van-cell-group>
          <!-- 下一步操作 -->
          <div class="login-btn-box">
            <van-button
            class="login-btn"
            hairline
            @click="handleClickNextStep"
            @click.prevent="handleClickNextStep"
            >下一步</van-button>
          </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Resetting',
  data () {
    return {
      code: ''
    }
  },
  methods: {
    // 下一步操作
    handleClickNextStep () {
      const phone = this.code
      const reg = /^1[3|4|5|8][0-9]\d{4,8}$/
      if (!phone) {
        this.$toast('请输入手机号')
      } else if (!reg.test(phone)) {
        this.$toast('手机号格式错误')
      } else {
        this.$router.push({ name: 'sign', params: { type: 'proving-resetting' } })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.resetting {
    color: #fff;
}
p {
    height:29px;
    font-size:21px;
    font-family:PingFangSC;
    font-weight:500;
    line-height:29px;
    padding: 40px 0;
    padding-left: 16px;
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
.van-cell {
    color: #fff;
    background-color:#353641;
}
.login-btn-box {
  padding-top: 30px;
}
.login-btn {
  width: 100%;
  background-color: #2F98FF;
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
</style>
