<template>
  <div class="yieid">
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
      <p class="yieid-goild">可出金总金额(USD)</p>
      <p class="yieid-money">0.00</p>
      <div class="yieid-reminder">
        <p>温馨提示：若您的账户使用了融资融券功能，可出金金额为在未触及账户平仓风险时的最大可出金资金。</p>
      </div>
    </div>
    <div class="yieid-direction" @click="handleClickFast">
      <img src="@/assets/img/fast.png" />
      <div>
        <p class="goild">快速出金</p>
        <p class="third-party">由第三方汇款公司提供服务，快速到账</p>
      </div>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Yieid",
  props: {},
  data() {
    return {
      backdrop: {
        backgroundImage: "url(" + require("@/assets/img/backdrop.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      }
    };
  },
  created() {},
  methods: {
    handleClickFast() {
      this.$router.push({ name: "sign", params: { type: "yield-card" } });
    }
  }
};
</script>
<style lang='less' scoped>
.yieid {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
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
  .yieid-count {
    height: 249px;
    color: rgba(255, 255, 255, 1);
    font-family: PingFangSC-Regular, PingFang SC;
    .yieid-goild {
      height: 20px;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      text-align: center;
      padding-top: 50px;
    }
    .yieid-money {
      height: 32px;
      font-size: 28px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      line-height: 32px;
      text-align: center;
      padding: 20px 0;
    }
    .yieid-reminder {
      margin: 0 15px;
      height: 68px;
      background: rgba(255, 255, 255, 0.22);
      box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.04);
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        padding: 0 22px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
    }
  }
  .yieid-direction {
    height: 103px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 3px;
    margin: 0 15px;
    margin-top: -28px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    font-family: PingFangSC-Regular, PingFang SC;
    img {
      width: 40px;
      margin: 0 20px;
    }
    div {
      .goild {
        height: 22px;
        font-size: 16px;
        color: rgba(51, 51, 51, 1);
      }
      .third-party {
        font-size: 12px;
        color: rgba(163, 163, 167, 1);
      }
    }
    .van-icon-arrow {
      font-size: 16px;
      color: #707177;
      margin-left: auto;
    }
  }
}
</style>