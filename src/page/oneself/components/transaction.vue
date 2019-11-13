<template>
  <div class="oneself" :value="value" @input="$emit('input', $event)">
    <div class="oneself-contant">
      <div class="oneself-header" @click="$router.back()">
        <van-icon name="arrow-left" size="16" />
        <div>
          <p>
            <span>HK</span> 恒生指数(HSI)
          </p>
          <p>交易中07-25 10:36:20</p>
        </div>
      </div>
      <div class="oneself-number">
        <div class="oneself-number-mark">
          <p>28,597.99</p>
        </div>
        <div class="oneself-number-gain">
          <p>+73.950</p>
          <p>+0.88</p>
        </div>
        <div class="oneself-img">
          <img src="@/assets/img/pointing.png" alt />
        </div>
      </div>
      <!-- 指数动态信息 -->
      <div class="oneself-list">
        <van-row>
          <van-col span="4">今开</van-col>
          <van-col span="4">5.05</van-col>
          <van-col span="4">最高</van-col>
          <van-col span="4">5.08</van-col>
          <van-col span="4">换手</van-col>
          <van-col span="4">5.51%</van-col>
        </van-row>
        <van-row>
          <van-col span="4">昨收</van-col>
          <van-col span="4">5.13</van-col>
          <van-col span="4">最低</van-col>
          <van-col span="4">4.88</van-col>
          <van-col span="4">振幅</van-col>
          <van-col span="4">3.90%</van-col>
        </van-row>
        <van-row v-if="show">
          <van-col span="4">涨停</van-col>
          <van-col span="4">5.64</van-col>
          <van-col span="4">量比</van-col>
          <van-col span="4">0.98</van-col>
          <van-col span="4">成交量</van-col>
          <van-col span="4">583844</van-col>
        </van-row>
        <van-row v-if="show">
          <van-col span="4">跌停</van-col>
          <van-col span="4">5.64</van-col>
          <van-col span="4">量比</van-col>
          <van-col span="4">0.98</van-col>
          <van-col span="4">成交额</van-col>
          <van-col span="4">2.90亿</van-col>
        </van-row>
        <van-row v-if="show">
          <van-col span="4">2.90亿</van-col>
          <van-col span="4">236480</van-col>
          <van-col span="4">总股本</van-col>
          <van-col span="4">14.9亿</van-col>
          <van-col span="4">流通值</van-col>
          <van-col span="4">52.1亿</van-col>
        </van-row>
        <van-row v-if="show">
          <van-col span="4">内盘</van-col>
          <van-col span="4">347363</van-col>
          <van-col span="4">流通股</van-col>
          <van-col span="4">10.6亿</van-col>
          <van-col span="4">净资</van-col>
          <van-col span="4">9.74</van-col>
        </van-row>
        <van-row v-if="show">
          <van-col span="4">市净率</van-col>
          <van-col span="4">0.50</van-col>
          <van-col span="4">总市值</van-col>
          <van-col span="4">73.0亿</van-col>
          <van-col span="4">市盈率</van-col>
          <van-col span="4">39.38</van-col>
        </van-row>
        <van-row v-if="show">
          <van-col span="4">收益(二)</van-col>
          <van-col span="4">0.06</van-col>
          <van-col span="4">委比</van-col>
          <van-col span="4">9.35%</van-col>
          <van-col span="4">委差</van-col>
          <van-col span="4">1666</van-col>
        </van-row>
      </div>
      <!-- 交易软件当前时间显示 -->
      <div class="oneself-date" v-if="show">
        <p>
          财政年结日
          <span>2018-06-30</span>
        </p>
      </div>
      <div class="up-icon">
        <van-icon name="arrow-down" color="#7F819B" v-if="shows" @click="show=true,shows=false" />
        <van-icon name="arrow-up" color="#7F819B" @click="show=false,shows=true" v-if="show" />
      </div>
      <!-- 图表分析展示 -->
      <div class="oneself-crap">
        <div>
          <van-tabs
            v-model="timer"
            background="#20212A"
            line-height="0"
            title-active-color="#2F98FF"
          >
            <van-tab title="分时">分时</van-tab>
            <van-tab title="日K">日K</van-tab>
            <van-tab title="周K">周K</van-tab>
            <van-tab title="月K">月K</van-tab>
          </van-tabs>
        </div>
        <div class="oneself-news">
          <van-tabs
            v-model="tidings"
            background="#20212A"
            line-height="0"
            title-active-color="#2F98FF"
          >
            <van-tab title="新闻">
              <van-list>
                <div slot="default" v-for="(item,index) in list" :key="index">
                  <p>{{ item.title }}</p>
                  <p>
                    <span>{{ item.timer }}</span>
                  </p>
                </div>
              </van-list>
            </van-tab>
            <van-tab title="公告">
              <van-list>
                <div slot="default" v-for="(item,index) in notice" :key="index">
                  <p>{{ item.title }}</p>
                  <p class="oneself-right">
                    <span>{{ item.timer }}</span>
                  </p>
                </div>
              </van-list>
            </van-tab>
            <van-tab title="分析">
              <div slot="default">
                <p class="oneself-img">
                  <img src="@/assets/img/hollow.png" />
                </p>
                <span class="oneself-test">暂无分析动态</span>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <!-- 买入卖出底部展示 -->
    <div class="oneself-buy" v-show="side">
      <div @click="isPurchase = true">
        <img src="@/assets/img/purchase.png" alt />
        <p>买入</p>
      </div>
      <div @click="isShow = true">
        <img src="@/assets/img/selling-price.png" alt />
        <p>卖出</p>
      </div>
      <div class="oneself-buy-follow">
        <img src="@/assets/img/cancel.png" @click="$router.push('/order-list')" />
        <p>撤单</p>
      </div>
      <div class="oneself-buy-follow">
        <img src="@/assets/img/concern.png" @click="$router.push('/oneself')" />
        <p>自选</p>
      </div>
    </div>
    <!-- 卖出子组件 -->
    <home-sell v-model="isShow" />
    <!-- 买入子组件 -->
    <home-purchase v-model="isPurchase" />
  </div>
</template>

<script>
import HomeSell from "./sell";
import HomePurchase from "./purchase";
export default {
  name: "Transaction",
  components: {
    HomeSell,
    HomePurchase
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: true,
      shows: false,
      timer: 0,
      tidings: 0,
      radio: "",
      isShow: false,
      isPurchase: false,
      side: true,
      list: [
        {
          title: "07月25日主力资金抢筹最积极的前10股（附名单）",
          timer: "今天 15:10"
        },
        {
          title: "07月25日主力资金抢筹最积极的前10股（附名单）",
          timer: "今天 15:10"
        },
        {
          title: "07月25日主力资金抢筹最积极的前10股（附名单）",
          timer: "今天 15:10"
        },
        {
          title: "食品饮料行业Q2基金持仓分析：食品饮料持仓创历史新高处上升期",
          timer: "今天 15:10"
        }
      ],
      notice: [
        { title: "贵州茅台关于会计政策变更的公告", timer: "2019-07-17" },
        {
          title: "贵州茅台第二届监事会2019年度第三次会议决议的…",
          timer: "2019-07-17"
        },
        { title: "贵州茅台关于会计政策变更的公告", timer: "2019-07-17" },
        { title: "贵州茅台关于会计政策变更的公告", timer: "2019-07-17" },
        { title: "贵州茅台关于会计政策变更的公告", timer: "2019-07-17" }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.oneself-header {
  height: 44px;
  line-height: 44px;
  display: flex;
  align-items: center;
  padding: 3px 15px;
  .van-icon {
    color: #fff;
  }
  div:nth-child(2) {
    p:nth-child(1) {
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
      padding-left: 92px;
      span {
        display: inline-block;
        background: rgba(141, 77, 233, 1);
        border-radius: 1px;
        width: 16px;
        height: 11px;
        font-size: 16px;
        -webkit-transform: scale(0.5);
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 11px;
        padding: 5px;
        text-align: left;
      }
    }
    p:nth-child(2) {
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(127, 129, 155, 1);
      line-height: 17px;
      padding-left: 102px;
      padding-top: 2px;
    }
  }
}
.oneself-number {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgba(53, 192, 137, 1);
  border-bottom: 2px solid #14151c;
  padding: 0 15px;
  padding-bottom: 8px;

  .oneself-number-mark {
    font-size: 40px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
    padding-left: 25px;
    margin-right: -30px;
  }
  .oneself-number-gain {
    width: 46px;
    font-size: 14px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
  }
  .oneself-img {
    margin-top: -20px;
    margin-right: -18px;
  }
}
.oneself-list {
  padding: 8px 15px;
  font-size: 12px;
  color: rgba(127, 129, 155, 1);
  font-family: PingFangSC-Regular, PingFang SC;
  .van-row {
    padding: 4px 0;
    .van-col--4:nth-child(even) {
      color: #fff;
      text-align: right;
      padding-right: 6px;
    }
    .van-col--4:nth-child(6) {
      padding-right: 0;
    }
  }
}
.oneself-date {
  padding: 0 10px;
  border-top: 1px solid #14151c;
  box-sizing: border-box;
  p:nth-child(1) {
    padding-top: 8px;
    font-size: 12px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(127, 129, 155, 1);
    span {
      color: #fff;
    }
  }
}
.up-icon {
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #14151c;
  padding-bottom: 5px;
  .van-icon {
    font-size: 16px;
  }
}
.van-ellipsis {
  width: 24px;
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC;
  font-weight: 500;
  color: rgba(127, 129, 155, 1);
  line-height: 20px;
}
.oneself-crap {
  padding: 0 15px;
  .van-tab__pane {
    height: 220px;
  }
}
.oneself-news {
  border-top: 2px solid #14151c;
  /deep/.van-ellipsis {
    font-size: 16px;
  }
  .van-list {
    margin-bottom: 40px;
  }
  .van-tab__pane {
    div {
      border-bottom: 1px solid #14151c;
      padding: 10px 0;
      box-sizing: border-box;
      p:nth-child(1) {
        font-size: 14px;
        font-family: PingFangSC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }
      p:nth-child(2) {
        height: 16px;
        font-size: 11px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(109, 112, 135, 1);
        line-height: 16px;
        padding-top: 8px;
      }
      .oneself-right {
        text-align: right;
      }
      .oneself-img {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 50px;
      }
      .oneself-test {
        display: flex;
        justify-content: center;
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(83, 84, 92, 1);
        line-height: 17px;
        text-align: center;
        padding-bottom: 50px;
      }
    }
  }
}
.oneself-buy {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 50px;
  background: rgba(32, 33, 42, 1);
  div:nth-child(1) {
    width: 117px;
    background: rgba(245, 69, 69, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    img {
      width: 20px;
      height: 19px;
      padding-right: 5px;
    }
    p {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
  div:nth-child(2) {
    width: 117px;
    background: rgba(51, 192, 137, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    img {
      width: 20px;
      height: 19px;
      padding-right: 5px;
    }
    p {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
  .oneself-buy-follow {
    width: 71px;
    text-align: center;
    padding-bottom: 5px;
    box-sizing: border-box;
    p {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
