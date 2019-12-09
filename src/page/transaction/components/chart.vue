<template>
  <div class="chart">
    <van-tabs v-model="timer" background="#20212A" line-height="0" title-active-color="#2F98FF">
      <van-tab title="分时">分时</van-tab>
      <van-tab title="日K">日K</van-tab>
      <van-tab title="周K">周K</van-tab>
      <van-tab title="月K">月K</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "Chart",
  props: {},
  data() {
    return {
      timer: 0
    };
  },
  methods: {}
};
</script>
<style lang='less' scoped>
.chart {
  padding: 0 15px;
  .van-tab__pane {
    height: 220px;
  }
}
</style>