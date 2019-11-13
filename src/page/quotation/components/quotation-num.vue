<template>
  <div class="quotation">
    <!-- 头部名称 -->
    <div class="quotation-header" @click="$router.back()">
      <van-icon name="arrow-left" />
      <div>
        <p>
          <span>HK</span> 恒生指数(HSI)
        </p>
        <p>交易中07-25 10:36:20</p>
      </div>
    </div>
    <!-- 股票指数展示 -->
    <div class="quotation-number">
      <div class="quotation-number-mark">
        <p>28,597.99</p>
      </div>
      <div class="quotation-number-gain">
        <p>+73.950</p>
        <p>+0.88</p>
      </div>
      <div class="quotation-img">
        <img src="@/assets/img/pointing.png" alt />
      </div>
    </div>
    <!-- 具体数据展示 -->
    <div class="quotation-list">
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
    <div class="quotation-date" v-if="show">
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
    <div class="quotation-crap">
      <div class="quotation-crap-trend">
        <van-tabs v-model="timer" background="#20212A" line-height="0" title-active-color="#2F98FF">
          <van-tab title="分时">分时</van-tab>
          <van-tab title="日K">日k</van-tab>
          <van-tab title="周K">周K</van-tab>
          <van-tab title="月K">月K</van-tab>
        </van-tabs>
      </div>
      <div class="quotation-news">
        <van-tabs
          v-model="tidings"
          background="#20212A"
          line-height="0"
          title-active-color="#2F98FF"
        >
          <van-tab title="新闻">
            <!-- <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
            >-->
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
                <p class="quotation-right">
                  <span>{{ item.timer }}</span>
                </p>
              </div>
            </van-list>
          </van-tab>
          <van-tab title="分析">
            <div slot="default">
              <p class="quotation-img-two">
                <img src="@/assets/img/hollow.png" />
              </p>
              <span class="quotation-test">暂无分析动态</span>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <!-- 底部导航 -->
    <app-tabbar />
  </div>
</template>

<script>
export default {
  name: "QuotationNum",
  data() {
    return {
      show: true,
      shows: false,
      timer: "0",
      tidings: 0,
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
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
  }
};
</script>

<style lang="less" scoped>
.quotation-header {
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
.quotation-number {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgba(53, 192, 137, 1);
  border-bottom: 2px solid #14151c;
  padding: 0 15px;
  padding-bottom: 8px;
  .quotation-number-mark {
    font-size: 40px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
    padding-left: 25px;
    margin-right: -30px;
  }
  .quotation-number-gain {
    width: 46px;
    font-size: 14px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
  }
  .quotation-img {
    margin-top: -20px;
    margin-right: -18px;
  }
}
.quotation-list {
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
.quotation-date {
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
.quotation-crap {
  padding: 0 15px;
  box-sizing: border-box;
  .van-tab__pane {
    height: 220px;
  }
  .quotation-news {
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
        .quotation-right {
          text-align: right;
        }
        .quotation-img-two {
          display: flex;
          justify-content: center;
          padding-top: 50px;
        }
        .quotation-test {
          display: flex;
          justify-content: center;
          padding-bottom: 80px;
          height: 17px;
          font-size: 12px;
          font-family: PingFangSC;
          font-weight: 400;
          color: rgba(83, 84, 92, 1);
          line-height: 17px;
        }
      }
    }
  }
}
</style>
