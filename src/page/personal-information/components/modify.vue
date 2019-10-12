<template>
    <div class="modify">
        <van-nav-bar
        title="修改手机号"
        left-arrow
        @click-left="$router.back()"
        />
        <div class="modify-content">
            <div class="modify-pass">
                <p>登录密码</p>
            </div>
            <div class="modify-enter">
                <van-cell-group>
                    <van-field v-model="value" type="password"/>
                </van-cell-group>
            </div>
            <div>
                <router-link to="/sign/resetting">忘记登录密码？</router-link>
            </div>
            <div class="login-btn-box">
                <van-button
                class="login-btn"
                hairline
                @click="handleClickNext"
                @click.prevent="handleClickNext"
                >下一步</van-button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Modify',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    handleClickNext () {
      if (this.value === '') {
        this.$toast('请输入登录密码')
      } else {
        this.$router.push('/selective-verification')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
    background-color: #20212A;
}
.van-nav-bar .van-icon {
    color: #fff;
}
.van-hairline--bottom::after {
    border-bottom: 2px solid #14151C;
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
    color: #fff;
}
.modify-content {
    padding: 0 15px;
    div:nth-child(3) {
        padding-top: 5px;
        display: flex;
        justify-content: flex-end;
        font-size:14px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        a {
            color: #FFFFFF;
        }
    }
}
.modify-pass {
    p {
        padding: 20px 0;
        height:29px;
        font-size:21px;
        font-family:PingFangSC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:29px;
    }
}
.modify-enter {
    padding-top: 20px;
}
</style>
