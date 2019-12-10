<template>
  <div class="free">
    <!-- <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
    >-->
    <van-list>
      <div class="free-title">
        <div class="free-title-name">
          <p class="free-title-name-title">
            贵州茅台
            <span>(600519)</span>
          </p>
          <p>查看更多</p>
        </div>
        <div class="free-title-content">
          <p class="free-stance">茅台机场上半年运输指标位列贵州省支线机场第二</p>
          <p class="free-timer">2019-07-24 13:13</p>
        </div>
        <div class="free-title-content">
          <p class="free-stance">养驴大业：阿胶大跌后全国260多万头驴怎么办</p>
          <p class="free-timer">2019-07-24 13:13</p>
        </div>
        <div class="free-title-content">
          <p class="free-stance">申万宏源-食品饮料行业周报：板块持仓接近高点，景气和外资偏好将长期支持溢价</p>
          <p class="free-timer">2019-07-24 13:13</p>
        </div>
      </div>
      <div class="free-title">
        <div class="free-title-name">
          <p class="free-title-name-title">
            仁和药业
            <span>(600519)</span>
          </p>
          <p>查看更多</p>
        </div>
        <div class="free-title-content">
          <p class="free-stance">茅台机场上半年运输指标位列贵州省支线机场第二</p>
          <p class="free-timer">2019-07-24 13:13</p>
        </div>
        <div class="free-title-content">
          <p class="free-stance">养驴大业：阿胶大跌后全国260多万头驴怎么办</p>
          <p class="free-timer">2019-07-24 13:13</p>
        </div>
        <div class="free-title-content">
          <p class="free-stance">申万宏源-食品饮料行业周报：板块持仓接近高点，景气和外资偏好将长期支持溢价</p>
          <p class="free-timer">2019-07-24 13:13</p>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import { noteGetMySelect } from "@/api/information";

export default {
  name: "Free",
  data() {
    return {
      pushList:[]
    };
  },
  created() {
    this.handleFree()
  },
  methods: {
    async handleFree() {
      try {
        const formData = new FormData();
        const res = await noteGetMySelect(formData);
        this.pushList = res.data.result
        console.log(this.pushList)
      } catch (error) {
        
      }
    }
  }
};
</script>

<style lang='less' scoped>
.free {
  padding: 0 15px;
  font-family: PingFangSC-Medium, PingFang SC;
  .free-title {
    font-size: 18px;
    .free-title-name {
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;
      .free-title-name-title {
        span {
          font-size: 14px;
        }
      }
      p:nth-child(2) {
        font-size: 12px;
      }
    }
  }
  .free-stance {
    padding-bottom: 10px;
    font-size: 16px
  }
  .free-timer {
    font-size: 11px;
    font-weight: bold;
    color: rgba(126, 130, 156, 1);
    padding-bottom: 20px;
  }
}
</style>