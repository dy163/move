<template>
  <div class="deposit">
    <van-nav-bar title="入金" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="deposit-content-top"></div>
    <div class="deposit-content">
      <!-- 极速入金 -->
      <div class="deposit-content-many" @click="clickMany">
        <div>
          <img src="@/assets/img/renminbi.png" />
        </div>
        <div>
          <p>
            极速入金
            <span>推荐</span>
          </p>
          <p>由第三方提供服务，实时到账</p>
        </div>
        <div>
          <van-icon name="arrow" color="#707177" size="18" />
        </div>
      </div>
      <!-- 银行卡入金 -->
      <div class="deposit-content-many" @click="handleClickCard">
        <div>
          <img src="@/assets/img/transfer.png" />
        </div>
        <div>
          <p>银行卡电汇</p>
          <p>2～3个工作日到账，适合大额入金</p>
        </div>
        <div>
          <van-icon name="arrow" color="#707177" size="18" />
        </div>
      </div>
    </div>
    <app-tabbar></app-tabbar>
  </div>
</template>

<script>
export default {
  name: "Deposit",
  data() {
    return {
      marker: ""
    };
  },
  methods: {
    clickMany() {
      this.$router.push("/deposit-amount");
    },
    handleClickCard() {
      //   this.$router.push('/bank-card')
      this.$router.push({ name: "sign", params: { type: "bank-card" } });
    }
  }
};
</script>

<style lang="less" scoped>
.deposit-content-top {
  height: 20px;
  background-color: #171822;
}
.deposit-content {
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #171822;
  .deposit-content-many {
    height: 99px;
    display: flex;
    align-items: center;
    margin: 0 15px;
    background: rgba(32, 33, 43, 1);
    border-radius: 3px;
    margin-bottom: 20px;
    img {
      width: 40px;
      height: 40px;
      padding-left: 20px;
      padding-right: 15px;
    }
    div:nth-child(2) {
      p:nth-child(1) {
        height: 24px;
        font-size: 17px;
        font-family: PingFangSC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 24px;
        margin-bottom: 10px;
        span {
          width: 37px;
          height: 17px;
          background: rgba(255, 77, 77, 1);
          border-radius: 2px;
          padding: 0 5px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 17px;
          margin-left: 5px;
        }
      }
      p:nth-child(2) {
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(116, 119, 143, 1);
        line-height: 17px;
      }
    }
    div:nth-child(3) {
      position: fixed;
      right: 15px;
      .van-icon,
      .van-icon::before {
        display: inline;
      }
    }
  }
  // div {
  //     background-color: #20212B;
  //     border-radius:3px;
  //     margin: 0 15px;
  //     margin-bottom: 15px;
  //     img {
  //         padding: 30px 0;
  //         // padding-left: 10px;
  //     }
  //     .deposit-content-main {
  //         padding: 25px 0;
  //         padding-left: 5px;
  //         p:nth-child(1) {
  //             height:22px;
  //             font-size:16px;
  //             font-family:PingFangSC;
  //             font-weight:400;
  //             color:rgba(255,255,255,1);
  //             line-height:22px;
  //             margin-bottom: 10px;
  //         }
  //         p:nth-child(2) {
  //             height:17px;
  //             font-size:12px;
  //             font-family:PingFangSC;
  //             font-weight:400;
  //             color:rgba(112,113,119,1);
  //             line-height:17px;
  //         }
  //         span {
  //             display: inline-block;
  //             height:17px;
  //             background:rgba(255,77,77,1);
  //             border-radius:2px;
  //             font-size:12px;
  //             font-family:PingFangSC;
  //             font-weight:400;
  //             color:rgba(255,255,255,1);
  //             line-height:17px;
  //             padding: 2px 6px;
  //         }
  //     }
  //     .deposit-content-right {
  //         justify-content: flex-end;
  //     }
  // }
}
.van-hairline--top-bottom {
  background-color: #20212a;
}
.van-tabbar-item__text {
  height: 14px;
  font-size: 10px;
  font-family: PingFangSC;
  font-weight: 500;
  line-height: 14px;
}
.van-tabbar-item__icon {
  width: 18px;
  height: 18px;
}
.van-icon-arrow {
  padding-top: 50px;
}
</style>
