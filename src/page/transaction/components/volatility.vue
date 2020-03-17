<template>
  <div>
    <p class="volatility-header">最新价格</p>
    <div class="volatility-content">
      <van-row>
        <van-col span="4">卖5</van-col>
        <van-col span="4">{{ sellFive.price }}</van-col>
        <van-col span="4">{{ sellFive.quantity }}</van-col>
        <van-col span="4">买5</van-col>
        <van-col span="4">{{ bailFive.price }}</van-col>
        <van-col span="4">{{ bailFive.quantity }}</van-col>
      </van-row>
      <van-row>
        <van-col span="4">卖4</van-col>
        <van-col span="4">{{ sellFour.price }}</van-col>
        <!-- <van-col span="4">{{  }}</van-col> -->
        <van-col span="4">{{ sellFour.quantity }}</van-col>
        <!-- <van-col span="4">{{  }}</van-col> -->
        <van-col span="4">买4</van-col>
        <van-col span="4">{{ bailFour.price }}</van-col>
        <van-col span="4">{{ bailFour.quantity }}</van-col>
      </van-row>
      <van-row>
        <van-col span="4">卖3</van-col>
        <van-col span="4">{{ sellThree.price }}</van-col>
        <van-col span="4">{{ sellThree.quantity }}</van-col>
        <van-col span="4">买3</van-col>
        <van-col span="4">{{ bailThree.price }}</van-col>
        <van-col span="4">{{ bailThree.quantity }}</van-col>
      </van-row>
      <van-row>
        <van-col span="4">卖2</van-col>
        <van-col span="4">{{ sellTwo.price }}</van-col>
        <van-col span="4">{{ sellTwo.quantity }}</van-col>
        <van-col span="4">买2</van-col>
        <van-col span="4">{{ bailTwo.price }}</van-col>
        <van-col span="4">{{ bailTwo.quantity }}</van-col>
      </van-row>
      <van-row>
        <van-col span="4">卖1</van-col>
        <van-col span="4">{{ sellOne.price }}</van-col>
        <van-col span="4">{{ sellOne.quantity }}</van-col>
        <van-col span="4">买1</van-col>
        <van-col span="4">{{ bailOne.price }}</van-col>
        <van-col span="4">{{ bailOne.quantity }}</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { getPriceList } from "@/api/stock";
export default {
  name: "Volatility",
  data() {
    return {
      list: [],
      priceList: [],    // 暂时没有用
      sellFive: [],
      sellFour: [],
      sellThree: [],
      sellTwo: [],
      sellOne: [],
      bailFive: [],
      bailFour: [],
      bailThree: [],
      bailTwo: [],
      bailOne: []
    }
  },
  created() {
    this.handlegetPriceList()
  },
  methods: {
    async handlegetPriceList (q) {
      try {
        this.list = this.$route.query.q
        const formData = new FormData();
        formData.append("stock_code", this.list.stock_code);
        const res = await getPriceList(formData)
        // res.data.result.forEach((element, value) => {
        //   console.log(element)
        //   console.log(value)
        // });
        // this.priceList = res.data.result
        this.sellFive = res.data.result[0]
        this.sellFour = res.data.result[1]
        this.sellThree = res.data.result[2]
        this.sellTwo = res.data.result[3]
        this.sellOne = res.data.result[4]
        this.bailFive = res.data.result[9]
        this.bailFour = res.data.result[8]
        this.bailThree = res.data.result[7]
        this.bailTwo = res.data.result[6]
        this.bailOne = res.data.result[5]
  
      } catch (error) {
        this.$toast("获取委托价格列表失败");
      }
    }
  }
};
</script>

<style lang='less' scoped>
.volatility-header {
  color: #fff;
  font-size: 14px;
  padding: 0 15px;
}
.volatility-content {
  font-size: 12px;
  padding: 8px 15px 2px;
  color: #fff;
  .van-row {
    padding: 0;
    padding-bottom: 8px;
    .van-col--4 {
      padding: 0;
    }
    .van-col--4:nth-child(2) {
      color: #d14e4e;
    }
    .van-col--4:nth-child(4) {
      text-align: center;
    }
    .van-col--4:nth-child(5) {
      text-align: center;
      color: #23b47b;
    }
    .van-col--4:nth-child(6) {
      text-align: right;
    }
  }
}
</style>