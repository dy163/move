<template>
    <div class="account">
      <div v-if="showes" class="accout-start">
        <div class="account-img">
          <img src="@/assets/start/logo.png" alt="">
        </div>
        <p>美港股，上汇智</p>
        <span>BY HUIZHI</span>
      </div>
      <div v-if="show">
        <!-- 轮播头部 -->
        <div class="account-header">
          <van-swipe class="my-swipe" :autoplay="1500" style="height: 165px;" :show-indicators='false'>
            <van-swipe-item>
              <div>
                <p>一个账户买遍全球</p>
                <p>美股、港股、英股、A股、（沪深港通）</p>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div>
                <p>信息安全值得信赖</p>
                <p>知名美股券商，亿动华源投资</p>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div>
                <p>三大市场实时行情免费看</p>
                <p>把握全球最优股价走势，财经动态24小时播报</p>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div>
                <p>日内交易无限制实时到账看</p>
                <p>无限T+0，交易流动性更强，更快捷</p>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div>
                <p>开户入金俩分钟</p>
                <p>告别繁琐，0门槛极速开户入金</p>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
        <!-- 快速注册 -->
        <div class="account-registration">
          <van-button type="default" hairline round to="/sign/account">快速注册</van-button>
        </div>
        <!-- 轮播展示更新图片 -->
        <div class="swipe-img">
          <van-swipe :autoplay="1500" style="height: 300px;" indicator-color="rgba(216,216,216,1)">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <!-- 确定要去的方向 -->
        <div class="account-direction">
          <van-row>
            <van-col span="12">
              <van-button type="default" hairline round to="login">登录</van-button>
            </van-col>
            <van-col span="12">
              <van-button type="default" hairline round to="/sign/account">注册</van-button>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      showes: true,
      images: [
        require('@/assets/start/startover-one.png'),
        require('@/assets/start/startover-two.png'),
        require('@/assets/start/startover-three.png'),
        require('@/assets/start/startover-four.png'),
        require('@/assets/start/startover-five.png'),
      ]
    }
  },
  created() {
    this.timer = window.setTimeout(() => {
      this.showes = false
      this.show = true
    }, 1000)
    this.time = window.setTimeout(()=> {
      this.$router.push('/quotation')
    }, 7500)
  },
  methods: {

  },
}

</script>

<style lang='less' scoped>
.account {
  position: fixed;
  background: #ffffff;
  width: 100%;
  height: 100%;
}
.accout-start {
  text-align: center;
  font-family:PingFangSC-Regular,PingFang SC;
  color:rgba(51,51,51,1);
  .account-img {
    width: 65px;
    height: 65px;
    margin: 0 auto;
    margin-top: 195px;
    margin-bottom: 20px;
    img {
      width: 100%;
    }
  }
  p {
    height:315px;
    font-size:16px;
    letter-spacing:7px;
  }
  span {
    height: 17px;
    font-size:12px;
  }
}
.account-header {
  font-family:PingFangSC-Regular,PingFang SC;
  .van-swipe-item {
    text-align: center;
    div {
      p:nth-child(1) {
        font-size: 18px;
        padding-top: 80px;
      }
      p:nth-child(2) {
        padding-top: 20px;
        font-size: 14px;
      }
    }
  }
}
.account-registration {
  text-align: center;
  margin-bottom: 15px;
  height: 30px;
  .van-button {
    padding: 0;
    box-sizing: border-box;
    height: 30px;
    line-height: 30px;
    width: 92px;
  }
}
.swipe-img {
  img {
    width: 100%;
    height: 280px;
  }
  /deep/.van-swipe__indicators {
    bottom: 0;
    .van-swipe__indicator {
      border-radius: 0;
      width: 6px;
      height: 2px;
    }
  }
}
.account-direction {
  height: 35px;
  margin-top: 50px;
  .van-row {
    .van-col {
      text-align: center;
    }
    .van-button {
      padding: 0;
      box-sizing: border-box;
      height: 35px;
      line-height: 35px;
      width: 92px;
    }
  }
}
</style>