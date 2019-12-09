<template>
  <div class="yieid">
    <!-- <van-nav-bar title="出金">
      <van-icon name="arrow-left" slot="left" />
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>-->
    <div class="yieid-nav">
      <van-icon name="arrow-left" @click="$router.back()" />
      <p class="myself">出金</p>
      <p class="yieid-nav-spot">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </div>
    <div class="yieid-count" :style="backdrop">
      <!-- <div class="yieid-count">
      <img src="@/assets/picture.png"/>-->
      <van-row>
        <van-col span="8">选择银行卡01</van-col>
        <van-col span="8">输入金额02</van-col>
        <van-col span="8">到账通知03</van-col>
      </van-row>
      <div class="circle">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
    <div class="card-add">
      <router-link to="/sign/bank-card-information">没有可以使用的银行卡？去添加银行卡</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Yieid",
  props: {},
  data() {
    return {
      active: 1,
      backdrop: {
        backgroundImage: "url(" + require("@/assets/picture.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      }
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang='less' scoped>
.yieid {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  font-family: PingFangSC-Medium, PingFang SC;
  .yieid-nav {
    height: 46px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(51, 51, 51, 1);
    border-bottom: 1px solid #14151c;
    .van-icon-arrow-left {
      width: 30px;
    }
    .myself {
      height: 24px;
      font-size: 17px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      line-height: 24px;
    }
    .yieid-nav-spot {
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      span {
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: rgba(51, 51, 51, 1);
        border-radius: 50%;
      }
    }
  }
  .van-nav-bar {
    background: rgba(255, 255, 255, 1);
    .van-nav-bar__title {
      color: rgba(51, 51, 51, 1);
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
    }
    .van-icon-arrow-left {
      color: rgba(51, 51, 51, 1);
    }
    .van-icon-ellipsis {
      color: rgba(51, 51, 51, 1);
      font-size: 20px;
    }
  }
  .yieid-count {
    height: 110px;
    padding: 0 30px;
    color: #fff;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    .van-row:nth-child(1) {
      padding-top: 37px;
      .van-col--8:nth-child(2) {
        text-align: center;
      }
      .van-col--8:nth-child(3) {
        text-align: right;
      }
    }
    .circle {
      padding-top: 6px;
      display: flex;
      justify-content: space-between;
      p:nth-child(1),
      p:nth-child(3),
      p:nth-child(5) {
        width: 14px;
        height: 14px;
        background: #fff;
        border-radius: 50%;
      }
      p:nth-child(2),
      p:nth-child(4) {
        height: 1px;
        width: 136.5px;
        background-color: #fff;
        margin-top: 7px;
      }
    }
  }
  .card-add {
    padding-top: 139px;
    font-size: 13px;
    text-align: center;
    a {
      color: rgba(66, 151, 255, 1);
    }
  }
}
</style>