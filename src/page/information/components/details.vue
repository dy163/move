<template>
  <div class="particulars">
    <van-nav-bar title="公告详情" fixed @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <p class="particulars-title">{{ detail.title }}</p>
    <p class="particulars-name">
      {{ detail.stock_name}}
      <span>{{ detail.time }}</span>
    </p>
    <div class="particulars-content">
      <p>{{ detail.content }}</p>
    </div>
    <!-- 底部导航 -->
    <app-tabbar />
  </div>
</template>

<script>
import { noteGetDetail } from "@/api/information";

export default {
  name: "Details",
  data() {
    return {
      marker: "",
      list: [],
      detail: []
    };
  },
  created() {
    this.handlenote();
  },
  methods: {
    async handlenote(q) {
      try {
        this.list = this.$route.query.q;
        const formData = new FormData();
        formData.append("id", this.list.id);
        const res = await noteGetDetail(formData);
        this.detail = res.data.result;
      } catch (error) {
        this.$toast("获取详情失败");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.particulars-title {
  margin-top: 46px;
  height: 52px;
  font-size: 20px;
  font-family: PingFangSC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 26px;
  padding: 9px 20px 20px 15px;
}
.particulars-name {
  height: 17px;
  font-size: 12px;
  font-family: PingFangSC;
  font-weight: 500;
  color: rgba(147, 152, 177, 1);
  line-height: 17px;
  padding-left: 15px;
  padding-bottom: 17px;
}
.particulars-content {
  padding: 0 15px;
  padding-bottom: 70px;
  font-size: 16px;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(147, 152, 177, 1);
  line-height: 28px;
  p {
    padding: 20px 0;
    span {
      color: #276fe6;
    }
  }
}
.van-hairline--top-bottom {
  background-color: #20212a;
}
</style>