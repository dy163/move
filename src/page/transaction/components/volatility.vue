<template>
  <div>
    <p class="volatility-header">最新价格</p>
    <div class="volatility-content">
      <van-row>
        <van-col span="4">卖5</van-col>
        <van-col span="4">14.27</van-col>
        <van-col span="4">1850000</van-col>
        <van-col span="4">买5</van-col>
        <van-col span="4">14.27</van-col>
        <van-col span="4">1085000</van-col>
      </van-row>
      <van-row>
        <van-col span="4">卖4</van-col>
        <van-col span="4">14.27</van-col>
        <van-col span="4">18500</van-col>
        <van-col span="4">买4</van-col>
        <van-col span="4">14.27</van-col>
        <van-col span="4">10850</van-col>
      </van-row>
      <van-row>
        <van-col span="4">卖3</van-col>
        <van-col span="4">14.27</van-col>
        <van-col span="4">18500</van-col>
        <van-col span="4">买3</van-col>
        <van-col span="4">14.27</van-col>
        <van-col span="4">10850</van-col>
      </van-row>
      <van-row>
        <van-col span="4">卖2</van-col>
        <van-col span="4">14.27</van-col>
        <van-col span="4">18500</van-col>
        <van-col span="4">买2</van-col>
        <van-col span="4">14.27</van-col>
        <van-col span="4">10850</van-col>
      </van-row>
      <van-row>
        <van-col span="4">卖1</van-col>
        <van-col span="4">14.27</van-col>
        <van-col span="4">18500</van-col>
        <van-col span="4">买1</van-col>
        <van-col span="4">14.27</van-col>
        <van-col span="4">10850</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Volatility",
  data() {
    return {

    };
  },
  created() {

  },
  methods: {

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