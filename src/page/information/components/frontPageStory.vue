<template>
  <div class="frontPageStory">
    <div class="information-front-page-top">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <!-- <img v-lazy="image" /> -->
          <img :src="image.normal" />
        </van-swipe-item>
      </van-swipe>
      <div class="information-front-page-among">
        <img src="@/assets/img/involved.png" />
        <p>【科创板成交额突破200亿元】财联社7月23日讯，科创板25家公司今日成交额突破20…</p>
      </div>
    </div>
    <van-list>
      <div class="information-front-page-foot" v-for="(item,index) in focus" :key="index">
        <div class="information-front-name">
          <p class="information-title">{{ item.title }}</p>
          <div class="information-box">
            <van-tag type="danger" size="medium" plain>{{ item.roof }}</van-tag>
            <p class="information-information">
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
</template>

<script>
export default {
  name: "FrontPageStory",
  props: {},
  data() {
    return {
      images: [
        { normal: require("@/assets/img/diagram.png") },
        { normal: require("@/assets/img/diagram.png") },
        { normal: require("@/assets/img/diagram.png") }
      ],
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
          title: "长江证券：美股大幅反弹，与美国经济“背离”？",
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
.information-front-page-top {
  height: 180px;
  position: relative;
  margin-bottom: 60px;
  img {
    width: 100%;
  }
  .information-front-page-among {
    position: absolute;
    top: 167px;
    margin: 0 15px;
    height: 64px;
    display: flex;
    align-items: center;
    background: rgba(38, 39, 50, 1);
    border-radius: 8px;
    img {
      width: 45px;
      height: 40px;
      margin: 0 15px;
    }
    p {
      height: 40px;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 20px;
      padding-right: 15px;
    }
  }
}
.information-front-page-foot {
  height: 115px;
  display: flex;
  align-items: center;
  margin: 0 15px;
  border-bottom: 1px solid #14151c;
  .information-title {
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 500;
    line-height: 24px;
  }
  .information-front-name {
    font-family: PingFangSC-Regular, PingFang SC;
    .information-box {
      display: flex;
      padding-top: 15px;
      .van-tag {
        padding: 2px 5px;
        font-size: 12px;
        transform: scale(0.7);
        background-color: #20212a;
      }
      .information-information {
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
</style>