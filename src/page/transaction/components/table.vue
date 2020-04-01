<template>
  <div class="table" >
    <van-nav-bar left-arrow @click-left="$router.back()" :border="false" fixed>
      <template #title>
        <p>{{ list.stock_name }}</p>
        <p>交易中{{date}}</p>
      </template>
    </van-nav-bar>
    <div class="table-number">
      <div class="table-number-mark">
        <p>{{ stock.current_price }}</p>
        <!-- <p>{{ 123456789123 }}</p> -->
      </div>
      <div class="table-number-gain">
        <p>+73.950</p>
        <p>{{ stock.rise_or_fall_rate }}</p>
      </div>
    </div>
    <!-- 指数动态信息 -->
    <div class="table-list">
      <form>
        <van-row>
          <van-col span="4">今开</van-col>
          <van-col span="4">{{ stock.open }}</van-col>
          <van-col span="4">最高</van-col>
          <van-col span="4">{{ stock.high }}</van-col>
          <van-col span="4">换手</van-col>
          <van-col span="4">{{ stock.turnover_rate }}</van-col>
        </van-row>
        <van-row>
          <van-col span="4">昨收</van-col>
          <van-col span="4">{{ stock.pre_close }}</van-col>
          <van-col span="4">最低</van-col>
          <van-col span="4">{{ stock.low }}</van-col>
          <van-col span="4">振幅</van-col>
          <van-col span="4">{{ stock.amplitude }}</van-col>
        </van-row>
        <van-row v-show="show">
          <van-col span="4">涨停</van-col>
          <van-col span="4">{{ }}</van-col>
          <van-col span="4">量比</van-col>
          <van-col span="4">{{ }}</van-col>
          <van-col span="3">成交量</van-col>
          <van-col span="5">{{ stock.volumn }}</van-col>
        </van-row>
        <van-row v-show="show">
          <van-col span="4">跌停</van-col>
          <van-col span="4">{{ }}</van-col>
          <van-col span="4">均价</van-col>
          <van-col span="4">{{ }}</van-col>
          <van-col span="3">成交额</van-col>
          <van-col span="5">{{ stock.amount }}</van-col>
        </van-row>
        <van-row v-show="show">
          <van-col span="4">外盘</van-col>
          <van-col span="4">{{ }}</van-col>
          <van-col span="3">总股本</van-col>
          <van-col span="5">{{ stock.all_capital }}</van-col>
          <van-col span="3">总市值</van-col>
          <van-col span="5">{{ stock.all_value }}</van-col>
        </van-row>
        <van-row v-show="show">
          <van-col span="4">内盘</van-col>
          <van-col span="4">{{ }}</van-col>
          <van-col span="3">流通股</van-col>
          <van-col span="5">{{ stock.cir_capital }}</van-col>
          <van-col span="4">净资</van-col>
          <van-col span="4">{{ }}</van-col>
        </van-row>
        <van-row v-show="show">
          <van-col span="4">市净率</van-col>
          <van-col span="4">{{ }}</van-col>
          <van-col span="3">流通值</van-col>
          <van-col span="5">{{ stock.cir_value }}</van-col>
          <van-col span="4">市盈率</van-col>
          <van-col span="4">{{ }}</van-col>
        </van-row>
        <van-row v-show="show">
          <van-col span="4">收益(二)</van-col>
          <van-col span="4">{{ }}</van-col>
          <van-col span="4">委比</van-col>
          <van-col span="4">{{ }}</van-col>
          <van-col span="4">委差</van-col>
          <van-col span="4">{{ }}</van-col>
        </van-row>
      </form>
    </div>
    <!-- 交易软件当前时间显示 -->
    <div class="up-icon">
      <van-icon name="arrow-down" color="#7F819B" v-if="shows" @click="show=true,shows=false" />
      <van-icon name="arrow-up" color="#7F819B" @click="show=false,shows=true" v-if="show" />
    </div>
  </div>
</template>

<script>
import { getList } from "@/api/stock";

export default {
  name: "Table",
  props: {},
  data() {
    return {
      list: [],         // 行情
      stock:[],
      date: '',
      show: true,
      shows: false
    };
  },
  created() {
    this.timer = window.setInterval(() => {
        setTimeout(()=> {
          // this.handleGetShow();
          this.$nextTick(() => {
            this.handleGetShow();
          });
        }, 0)
    }, 1000)
  },
  beforeDestroy() {
    if(this.timer) { //如果定时器还在运行 或者直接关闭，不用判断
        clearInterval(this.timer); //关闭
    }
  },
  methods: {
    // 行情列表详情
    async handleGetShow(q) {
      this.list = JSON.parse(this.$route.query.q)
      try {
        const formData = new FormData()
        formData.append('stock_code', this.list.stock_code)
        const res = await getList(formData)
        this.stock = res.data.result[0]
      } catch (error) {
        this.$toast("获取股票列表失败")
      }
      this.date = this.list.date.slice(0,4) + '-' + this.list.date.slice(4,6) + '-' + this.list.date.slice(6,8)
    }
  }
};
</script>


<style lang='less' scoped>
.van-nav-bar {
  .van-nav-bar__title {
    height: 46px;
    p:nth-child(1) {
      height: 27px;
      line-height: 27px;
      font-size: 16px;
    }
    p:nth-child(2) {
      height: 16px;
      line-height: 16px;
      font-size: 12px;
    }
  }
}
.table-number {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(53, 192, 137, 1);
  border-bottom: 2px solid #14151c;
  padding: 0 15px;
  padding-bottom: 8px;
  margin-top: 46px;
  .table-number-mark {
    font-size: 40px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
    padding-left: 25px;
    margin-right: 10px;
  }
  .table-number-gain {
    width: 46px;
    font-size: 14px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
  }
}
.table-list {
  padding: 8px 15px;
  font-size: 12px;
  color: rgba(127, 129, 155, 1);
  font-family: PingFangSC-Regular, PingFang SC;
  .van-row {
    padding: 4px 0;
    .van-col:nth-child(even) {
      color: #fff;
      text-align: right;
      padding-right: 6px;
    }
    .van-col--4:nth-child(6) {
      padding-right: 0;
    }
    /deep/.van-col--5 {
      padding: 0;
    }
  }
}
.up-icon {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #14151c;
  box-sizing: border-box;
  padding-bottom: 3px;
  .van-icon {
    font-size: 12px;
  }
}
</style>