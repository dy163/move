<template>
  <div class="information">
    <van-nav-bar title="资 讯" fixed />
    <div>
      <van-tabs
        class="information-tabs"
        v-model="active"
        background="#20212A"
        title-inactive-color="#fff"
        title-active-color="#5794F0"
        line-height="0"
        sticky
      >
        <!-- 要闻 -->
        <!-- <van-tab title="要闻" name="propelling"> -->
        <van-tab title="要闻" name="propelling">
          <FrontPageStory />
          <!-- hot事件 -->
          <Hot />
          <!-- 下面热点列表 -->
          <Foot />
        </van-tab>
        <!-- 公告 -->
        <van-tab title="公告">
          <Notice />
        </van-tab>
        <!-- 自选 -->
        <van-tab title="自选">
          <Free />
        </van-tab>
        <!-- 推送 -->
        <van-tab title="推送" >
          <Propelling />
        </van-tab>
      </van-tabs>
    </div>
    <!-- 底部导航 -->
    <app-tabbar />
  </div>
</template>

<script>
import FrontPageStory from "./components/frontPageStory.vue"; // 要闻
import Hot from "./components/hot.vue"; // 要闻热点
import Foot from "./components/foot.vue"; // 要闻推送
import Free from "./components/free.vue"; // 自选
import Notice from "./components/notice.vue"; // 公告
import Propelling from "./components/propelling.vue"; // 推送

export default {
  name: "InformationIndex",
  components: {
    Hot,
    Foot,
    Free,
    Notice,
    FrontPageStory,
    Propelling
  },
  data() {
    return {
      active: "propelling"
      // active: ""
    };
  },
  methods: {
    
  }
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #20212a;
  .nav-img {
    margin-left: 18px;
    width: 18px;
    vertical-align: middle;
  }
}
.van-tab__pane {
  color: #fff;
}
.information-tabs {
  margin-bottom: 50px;
  /deep/.van-ellipsis {
    font-size: 15px;
    font-family: PingFangSC-Medium, PingFangSC;
    font-weight: 500;
  }
  /deep/.van-tabs__wrap {
    top: 46px;
    background-color: #20212a;
  }
  /deep/ .van-tabs__content {
    margin-top: 46px;
  }
  /deep/.van-tabs__nav {
    margin-right: 130px;
  }
}
.van-tabbar-item__text {
  height: 14px;
  font-size: 10px;
  font-family: PingFangSC;
  font-weight: 500;
  line-height: 14px;
}
.van-tabbar-item__icon {
  width: 18px;
  height: 18px;
}
</style>
