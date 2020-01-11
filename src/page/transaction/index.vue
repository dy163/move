<template>
  <div>
    <!-- 表头列表详情展示 -->
    <Table/>
    <!-- 图表分析展示 -->
      <Chart/>
    <!-- 价格波动图表 -->
    <Volatility />
    <!-- 新闻资讯类***** -->
      <News/>
    <!-- 买入卖出底部展示 -->
    <Business/>
  </div>
</template>

<script>
import News from './components/news'
import Business from './components/business'
import Chart from './components/chart'
import Table from './components/table'
import Volatility from './components/volatility'

export default {
  name: 'Transaction',
  components: {
    News,
    Business,
    Chart,
    Table,
    Volatility
  },
  data () {
    return {
    }
  },
  created () {

  },

  methods: {

  }
}
</script>

<style lang="less" scoped>
.van-ellipsis {
  width: 24px;
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC;
  font-weight: 500;
  color: rgba(127, 129, 155, 1);
  line-height: 20px;
}
</style>
