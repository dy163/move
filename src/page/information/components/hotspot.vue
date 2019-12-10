<template>
  <div class="hotspot">
    <van-nav-bar title="资 讯" fixed @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left"/>
    </van-nav-bar>
    <div class="hotspot-conent">
      <p>热点事件</p>
    </div>
    <div class="hotspot-list">
      <van-list>
        <div class="hotspot-foot" v-for="(item,index) in focus" :key="index">
          <div class="hotspot-name">
            <p class="hotspot-title">{{ item.title }}</p>
            <div class="hotspot-box">
              <van-tag type="danger" size="medium" plain>{{ item.roof }}</van-tag>
              <p class="hotspot-information">
                <span>{{ item.trusts }}</span>
                <span>{{ item.timer }}</span>
              </p>
            </div>
          </div>
          <div class="img">
            <img src="@/assets/img/blank-picture.png" alt />
          </div>
        </div>
      </van-list>
    </div>

    <!-- 底部导航 -->
    <app-tabbar />
  </div>
</template>

<script>
export default {
  name: "Hotspot",
  props: {},
  data() {
    return {
      focus: [
        {
          title: "长江证券：美股大幅反弹，与美国经济“背离”？",
          roof: "置顶",
          trusts: "长江证券研究",
          timer: "今天 12:35"
        },
        {
          title: "长江证券：美股大幅反弹，与美国经济“背离”？",
          roof: "置顶",
          trusts: "长江证券研究",
          timer: "今天 12:35"
        },
        {
          title: "Facebook谷歌夺走传统电视广告，康卡斯特要如何自救？",
          roof: "置顶",
          trusts: "长江证券研究",
          timer: "今天 12:35"
        },
        {
          title: "中国移动互联网2019半年大报告：“红利”即将见顶",
          roof: "置顶",
          trusts: "长江证券研究",
          timer: "今天 12:35"
        },
        {
          title: "中国移动互联网2019半年大报告：“红利”即将见顶",
          roof: "置顶",
          trusts: "长江证券研究",
          timer: "今天 12:35"
        },
        {
          title: "中国移动互联网2019半年大报告：“红利”即将见顶",
          roof: "置顶",
          trusts: "长江证券研究",
          timer: "今天 12:35"
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang='less' scoped>
.hotspot-conent {
  color: rgba(255, 255, 255, 1);
  font-family: PingFangSC-Medium, PingFang SC;
  margin-top: 46px;
  padding: 0 15px;
  padding-top: 15px;
  font-size: 18px;
}
.hotspot-list {
  margin-bottom: 50px;
  .hotspot-foot {
    color: rgba(255, 255, 255, 1);
    height: 115px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    border-bottom: 1px solid #14151c;
    .hotspot-title {
      font-size: 16px;
      font-family: PingFangSC;
      font-weight: 500;
      line-height: 24px;
    }
    .hotspot-name {
      font-family: PingFangSC-Regular, PingFang SC;
      .hotspot-box {
        display: flex;
        padding-top: 15px;
        .van-tag {
          padding: 2px 5px;
          font-size: 12px;
          transform: scale(0.7);
          background-color: #20212a;
        }
        .hotspot-information {
          font-size: 12px;
          font-weight: 400;
          height: 16px;
          color: rgba(126, 130, 156, 1);
          span {
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>