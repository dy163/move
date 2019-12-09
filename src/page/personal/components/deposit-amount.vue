<template>
  <div class="deposit-amount">
    <van-nav-bar title="入金" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
      <!-- <van-icon name="weapp-nav" slot="right" /> -->
    </van-nav-bar>
    <div class="deposit-amount-space">
      <img src="@/assets/img/gold.png" alt />
    </div>
    <div class="deposit-amount-bank">
      <div>
        <img src="@/assets/img/flag.png" style="vertical-align: middle" />
        <span>RMB</span>
      </div>
      <div>
        <van-cell-group>
          <van-field v-model="value" placeholder="输入入金金额" />
        </van-cell-group>
      </div>
    </div>
    <div class="deposit-amount-btn">
      <van-button round color="#8CE051">
        <img src="@/assets/img/wechat.png" style="vertical-align: middle" />
        微信支付
      </van-button>
    </div>
    <div class="deposit-amount-btn">
      <van-button round color="#2E97FC">
        <img src="@/assets/img/alipay.png" style="vertical-align: middle" />
        支付宝支付
      </van-button>
    </div>
    <div class="deposit-amount-note">
      <h5>温馨提示</h5>
      <div class="deposit-amount-note-conent">
        <p>*</p>
        <p>根据中国外管局相关法律法规规定，用户每年购汇额度最多为49999</p>
      </div>
      <div class="deposit-amount-note-conent">
        <p>*</p>
        <p>根据中国外管局相关法律法规规定，用户每年购汇额度最多为49999</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DepositAmount",
  data() {
    return {
      value: ""
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.deposit-amount {
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgb(255, 255, 255);
}
.van-icon {
  color: #333333;
}
.van-hairline--bottom::after {
  border-bottom: 0;
}
.van-nav-bar {
  background-color: #fff;
}
.van-nav-bar__title {
  font-size: 17px;
  font-family: PingFangSC;
  font-weight: 500;
  color: #333333;
}
.deposit-amount-space {
  height: 100px;
  img {
    width: 100%;
  }
}
.deposit-amount-bank {
  height: 57px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  margin: 50px 15px;
  display: flex;
  align-items: center;
  div {
    flex: 1;
    padding-left: 16px;
    span {
      display: inline-block;
      font-size: 16px;
      font-family: PingFangSC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      padding-left: 5px;
    }
    .van-cell {
      background-color: #fff;
      border-radius: 0;
    }
    .van-hairline--top-bottom {
      padding: 0;
    }
    /deep/.van-field__control {
      color: #000;
    }
  }
}
.deposit-amount-btn {
  padding: 0 37px;
  .van-button {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
  }
}
.deposit-amount-note {
  padding: 0 15px;
  padding-top: 70px;
  h5 {
    font-size: 14px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    padding-bottom: 11px;
  }
  .deposit-amount-note-conent {
    display: flex;
    p:nth-child(1) {
      color: #c97c8c;
      margin-right: 8px;
      padding-top: 5px;
    }
    p:nth-child(2) {
      font-size: 12px;
      font-family: PingFangSC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      // padding-bottom: 12px;
      margin-bottom: 9px;
      padding: 3px 0;
    }
  }
}
</style>
