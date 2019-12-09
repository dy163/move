<template>
  <div class="notice">
    <van-list>
      <div v-for="(item, index) in Optional" :key="index" class="notice-content">
        <p class="notice-range">
          {{ item.name }}
          <span>{{ item.code }}</span>&nbsp;&nbsp;
          <span style="color: #35C089">{{ item.range }}</span>
        </p>
        <p class="notice-brief">{{ item.brief }}</p>
        <p class="notice-time">{{ item.time }}</p>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "Notice",
  data() {
    return {
      Optional: [
        {
          name: "贵州茅台",
          code: "（600519)",
          range: "-0.80%",
          brief: "茅台机场上半年运输指标位列贵州省支线机场第二",
          time: "2019-07-24 13:13"
        },
        {
          name: "贵州茅台",
          code: "（600519)",
          range: "-0.80%",
          brief: "养驴大业：阿胶大跌后全国260多万头驴怎么办",
          time: "2019-07-24 13:13"
        },
        {
          name: "贵州茅台",
          code: "（600519)",
          range: "-0.80%",
          brief:
            "申万宏源-食品饮料行业周报：板块持仓接近高点，景气和外资偏好将长期支持溢价",
          time: "2019-07-24 13:13"
        },
        {
          name: "贵州",
          code: "（600519)",
          range: "-0.80%",
          brief: "茅台机场上半年运输指标位列贵州省支线机",
          time: "2019-07-24 13:13"
        },
        {
          name: "贵州茅台",
          code: "（600519)",
          range: "-0.80%",
          brief: "茅台机场上半年运输指标位列贵州省支线机",
          time: "2019-07-24 13:13"
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang='less' scoped>
.notice {
  padding: 0 15px;
  font-family: PingFangSC-Medium, PingFang SC;
  .notice-content {
    border-bottom: 1px dashed #14151c;
  }
  .notice-range {
    font-size: 15px;
    padding-top: 20px;
  }
  .notice-brief {
    font-size: 16px;
    padding: 15px 0;
  }
  .notice-time {
    font-size: 11px;
    font-weight: bold;
    color: rgba(126, 130, 156, 1);
    padding-bottom: 20px;
  }
}
</style>