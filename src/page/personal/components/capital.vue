<template>
  <div class="capital">
    <!-- 头部 -->
    <van-nav-bar
      title="资产"
      @click-left="$router.back()"
      @click-right="$router.push('/sign/bank-card')"
    >
      <van-icon name="arrow-left" slot="left" />
      <van-icon name="idcard" slot="right" size="20px" />
    </van-nav-bar>
    <!-- 资产总得展示 -->
    <div class="capital-reveal">
      <div class="capital-reveal-top">
        <p>账户总资产(RMB)</p>
        <p>{{ account.total_assets }}</p>
      </div>
      <div class="capital-reveal-triangle">
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="capital-reveal-foot">
        <div>
          <router-link to="/deposit">
            <img src="@/assets/img/deposit.png" alt style="vertical-align:middle" />
            <span>入 金</span>
          </router-link>
        </div>
        <div>
          <router-link to="/sign/yield">
            <img src="@/assets/img/yield.png" alt style="vertical-align:middle" />
            <span>出 金</span>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 持仓的金额展示 -->
    <div class="capital-details">
      <div class="capital-details-header">
        <div class="capital-details-border" @click="handleClickhHave">
          <p>
            <router-link to>持仓股票</router-link>
          </p>
          <p>{{ account.stock_assets }}</p>
        </div>
        <div class="capital-details-border" @click="handleClickShow">
          <p>
            <router-link to>现金余额</router-link>
          </p>
          <p>{{ account.removable_assets }}</p>
        </div>
      </div>
      <div class="capital-details-middle" v-show="show">
        <div>
          <p>
            <router-link to>持仓总盈亏</router-link>
          </p>
          <p>1.74</p>
        </div>
        <div>
          <p>
            <router-link to>当日盈亏</router-link>
          </p>
          <p>+1.74</p>
        </div>
      </div>
      <div class="capital-details-foot" v-show="show">
        <div>
          <p>
            <router-link to="/order-list">
              <img src="@/assets/img/order.png" alt style="vertical-align:middle" />
              <span>订单</span>
            </router-link>
          </p>
        </div>
        <div>
          <p>
            <router-link to="/porfit-loss">
              <img src="@/assets/img/risk.png" alt style="vertical-align:middle" />
              <span>分析</span>
            </router-link>
          </p>
        </div>
      </div>
    </div>
    <!-- 现金余额 -->
    <div class="capital-cash" v-show="play">
      <div class="capital-cash-detailed">
        <div>
          <p>可用余额</p>
          <p>{{ account.immovable_assets+account.removable_assets }}</p>
        </div>
        <div>
          <p>可取余额</p>
          <p>{{ account.removable_assets }}</p>
        </div>
        <div>
          <p>资金冻结</p>
          <p>{{ account.frozen_assets }}</p>
        </div>
      </div>
      <div class="capital-cash-foot">
        <p>
          <router-link to>
            <van-icon name="idcard" style="vertical-align:middle" />交易记录
          </router-link>
        </p>
      </div>
    </div>
    <!-- 持仓信息的展示 -->
    <div class="capital-list" v-show="show">
      <van-row>
        <van-col span="6">名称/代码</van-col>
        <van-col span="6">持仓/市值</van-col>
        <van-col span="6">现价/成本</van-col>
        <van-col span="6">浮动盈亏</van-col>
      </van-row>
      <!-- <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      > -->
      <van-list>
        <van-row class="shares-list" v-for="item in shares" :key="item.id">
          <van-col span="6">
            <div>
              <p>{{ item.stock_name}}</p>
              <p>{{ item.stock_code }}</p>
            </div>
          </van-col>
          <van-col span="6">
            <div>
              <p>{{ item.usable_quantity }}/{{ item.unusable_quantity+item.usable_quantity }}</p>
              <p>{{ item.market_value }}</p>
            </div>
          </van-col>
          <van-col span="6">
            <div>
              <p>{{ item.market_price }}</p>
              <p>{{ item.cost_price }}</p>
            </div>
          </van-col>
          <van-col span="6">
            <div>
              <p>{{ item.gain_or_loss }}</p>
              <p>{{ item.gain_or_loss_rate }}</p>
            </div>
          </van-col>
        </van-row>
      </van-list>
    </div>
    <!-- 底部导航 -->
    <app-tabbar />
  </div>
</template>

<script>
import { accountGetAccount, myBuyStockGetList } from "@/api/stock";

export default {
  name: "Capital",
  data() {
    return {
      shares:[],      //  持仓股票数据存放中心
      account: [],
      marker: "",
      play: false,
      show: true,
      loading: false,
      finished: false
    };
  },
  created() {
    this.handleGetAccount();
    this.handleShares()
  },
  methods: {
    /**
     * 跟新数据
     */
    onLoad() {
      this.loading = false;
      this.finished = true;
    },
    handleClickShow() {
      this.show = false;
      this.play = true;
    },
    handleClickhHave() {
      this.play = false;
      this.show = true;
    },
    /**
     * 获取账号信息
     */
    async handleGetAccount() {
      try {
        const formData = new FormData()
        const res = await accountGetAccount(formData);
        if(!res.data.status) {
          this.$toast("没有登录请登录");
        } else {
          this.account = res.data.result
        }
      } catch (error) {
        this.$toast("获取账户信息失败");
      }
    },
    /**
     * 获取持仓数据
     */
    async handleShares () {
      try {
        const formData = new FormData()
        const res = await myBuyStockGetList(formData)
        this.shares = res.data.result
      } catch (error) {
        this.$toast("获取持仓数据失败");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.capital {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(23, 24, 34, 1);
}
.capital-reveal {
  height: 170px;
  background: linear-gradient(
    90deg,
    rgba(59, 113, 255, 1) 0%,
    rgba(68, 162, 255, 1) 100%
  );
  color: #fff;
  .capital-reveal-triangle {
    p:nth-child(1) {
      position: fixed;
      top: 90px;
      width: 0;
      height: 0;
      border-left: 63.5px solid transparent;
      border-right: 63.5px solid transparent;
      border-bottom: 127px solid rgba(255, 255, 255, 0.03);
    }
    p:nth-child(2) {
      position: fixed;
      top: 132px;
      left: 215px;
      width: 0;
      height: 0;
      border-left: 41px solid transparent;
      border-right: 41px solid transparent;
      border-bottom: 83px solid rgba(255, 255, 255, 0.03);
    }
    p:nth-child(3) {
      position: fixed;
      top: 100px;
      right: 11px;
      width: 0;
      height: 0;
      border-left: 58px solid transparent;
      border-right: 58px solid transparent;
      border-bottom: 116px solid rgba(255, 255, 255, 0.03);
    }
  }
  .capital-reveal-top {
    text-align: center;
    padding-top: 30px;
    p:nth-child(1) {
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC;
      font-weight: 400;
      line-height: 17px;
      margin-bottom: 3px;
    }
    p:nth-child(2) {
      height: 47px;
      font-size: 40px;
      font-family: DINAlternate;
      font-weight: bold;
      line-height: 47px;
    }
  }
  .capital-reveal-foot {
    position: fixed;
    width: 100%;
    height: 43px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    z-index: 2000;
    div:nth-child(1) {
      a {
        border-right: 1px solid #fff;
      }
    }
    div {
      flex: 1;
      text-align: center;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        img {
          width: 23px;
        }
        span {
          padding-left: 5px;
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFangSC;
          font-weight: 500;
        }
      }
    }
  }
}
.capital-details {
  margin: 9px 0;
  background: rgba(32, 33, 43, 1);
}
.capital-details-header {
  display: flex;
  text-align: center;
  height: 61px;
  line-height: 61px;
  border-bottom: #14151c 1px solid;
  div {
    flex: 1;
    padding: 11px 0;
    box-sizing: border-box;
    p {
      color: #fff;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC;
      font-weight: 400;
      line-height: 20px;
      a {
        color: #fff;
      }
    }
    p:nth-child(2) {
      height: 15px;
      font-size: 13px;
      font-family: DINAlternate;
      font-weight: bold;
      line-height: 15px;
    }
  }
  div:nth-child(2) {
    background: rgba(36, 37, 47, 1);
    p {
      color: #7c7c82;
      a {
        color: #7c7c82;
      }
    }
  }
  .capital-details-border {
    border-top: 2px solid transparent;
  }
  .capital-details-border:hover {
    border-top: 2px solid #44a2ff;
  }
}
.capital-details-middle {
  height: 100px;
  display: flex;
  text-align: center;
  align-items: center;
  div {
    flex: 1;
    p:nth-child(1) {
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC;
      font-weight: 400;
      line-height: 17px;
      a {
        color: #717278;
      }
    }
    p:nth-child(2) {
      height: 19px;
      font-size: 16px;
      font-family: DINAlternate;
      font-weight: bold;
      color: #fff;
      line-height: 19px;
      margin-top: 2px;
    }
  }
  div:nth-child(2) {
    p:nth-child(2) {
      color: #f34445;
    }
  }
}
.capital-details-foot {
  display: flex;
  align-items: center;
  text-align: center;
  div:nth-child(1) {
    border-right: 1px solid #171822;
  }
  div {
    flex: 1;
    border-top: 1px solid #171822;
    height: 50px;
    line-height: 50px;
    align-items: center;
    p {
      font-size: 14px;
      font-family: PingFangSC;
      font-weight: 500;
      span {
        padding-left: 5px;
      }
      a {
        display: inline-block;
        color: #fff;
        .van-icon {
          padding-right: 6px;
        }
      }
    }
  }
}
.capital-list {
  background: rgba(32, 33, 43, 1);
  font-size: 12px;
  font-family: PingFangSC;
  .van-row {
    color:rgba(114,115,121,1);
    height: 38px;
    line-height: 38px;
    .van-col--6 {
      text-align: center
    }
  }
  .shares-list {
    height: 56px;
    line-height: 56px;
    color:rgba(255,255,255,1);
    border-bottom: 1px solid #14151C;
    box-sizing: border-box;
    div {
      padding: 5.5px 0;
      p {
        height: 17px;
        line-height: 17px;
      }
    }
  }
}
.capital-cash {
  height: 151px;
  .capital-cash-detailed {
    height: 101px;
    display: flex;
    text-align: center;
    align-items: center;
    div {
      flex: 1;
      p:nth-child(1) {
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(113, 114, 120, 1);
        line-height: 17px;
      }
      p:nth-child(2) {
        margin-top: 11px;
        height: 19px;
        font-size: 16px;
        font-family: DINAlternate;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 19px;
      }
    }
  }
}
.capital-cash-foot {
  text-align: center;
  a {
    width: 57px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFangSC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
  }
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
</style>
