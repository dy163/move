<template>
  <div class="frontPageStory">
    <div class="frontPageStory-front-page-top">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <!-- <img v-lazy="image" /> -->
          <img :src="image.normal" />
        </van-swipe-item>
      </van-swipe>
      <div class="frontPageStory-front-page-among">
        <img src="@/assets/img/involved.png" />
        <p>【科创板成交额突破200亿元】财联社7月23日讯，科创板25家公司今日成交额突破20…</p>
      </div>
    </div>
    <van-list>
      <div class="frontPageStory-front-page-foot" v-for="(item,index) in focus" :key="index" @click="handleNewMore(item)">
        <div class="frontPageStory-front-name">
          <p class="frontPageStory-title">{{ item.title }}</p>
          <div class="frontPageStory-box">
            <!-- <van-tag type="danger" size="medium" plain v-show="item.show">{{  item.is_top === 1? '置顶':'item.show' }}</van-tag> -->
            <span class="frontPageStory-tag">{{  item.is_top === 1? '置顶':'' }}</span>
            <p class="frontPageStory-information">
              <span>{{ item.resource }}</span>
              <span>{{ item.time }}</span>
            </p>
          </div>
        </div>
        <div class="img">
          <img :src="'http://192.168.3.79:8080' + item.img"/>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import { newsGetList } from "@/api/information";

export default {
  name: "FrontPageStory",
  props: {},
  data() {
    return {
      show: true,
      page:'',        // 页数
      number: '',     // 每页条数
      images: [
        { normal: require("@/assets/img/diagram.png") },
        { normal: require("@/assets/img/diagram.png") },
        { normal: require("@/assets/img/diagram.png") }
      ],
      focus: []
    };
  },
  created() {
    this.handleGetList()
  },
  methods: {
    async handleGetList() {
      try {
        const formData = new FormData();
        formData.append("page", this.page);
        formData.append("number", this.number);
        const res = await newsGetList(formData)
        this.focus  = res.data.result
      } catch (error) {
        this.$toast('获取要闻列表失败')
      }
    },
    handleNewMore (q) {
      this.$router.push({path: '/particulars',query: {q: q}});
    }
  }
};
</script>

<style lang='less' scoped>
.frontPageStory-front-page-top {
  height: 180px;
  position: relative;
  margin-bottom: 60px;
  img {
    width: 100%;
  }
  .frontPageStory-front-page-among {
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
.frontPageStory-front-page-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #14151c;
  img{
    width: 117px;
    height: 75px;
    border-radius: 5px;
  }
  .frontPageStory-title {
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 500;
    line-height: 24px;
    margin-right: 8px;
  }
  .frontPageStory-front-name {
    font-family: PingFangSC-Regular, PingFang SC;
    .frontPageStory-box {
      display: flex;
      padding-top: 10px;
      .frontPageStory-tag {
        // .van-tag {
        // border: 1px solid red;
        color: red;
        padding: 2px 5px;
        font-size: 12px;
        transform: scale(0.7);
        background-color: #20212a;
      }
      .frontPageStory-information {
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