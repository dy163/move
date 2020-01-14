<template>
  <div>
    <van-list>
      <div class="information-front-page-foot" v-for="(item,index) in focus" :key="index" @click="handleNewMore(item)">
        <div class="information-front-name">
          <div class="information-title">
            <p>{{ item.title }}</p>
          </div>
          <div class="information-box">
            <!-- <van-tag type="danger" size="medium" plain>标签</van-tag> -->
            <p class="information-information">
              <span>{{ item.resource }}</span>
              <span>{{ item.time }}</span>
            </p>
          </div>
        </div>
        <!-- <div class="img"> -->
          <!-- <img src="@/assets/img/blank-picture.png" alt /> -->
          <!-- <img :src="'http://192.168.3.79:8080' + item.img" /> -->
          <img :src="'http://bourse.yidonghuayuan.com' + item.img" />
        <!-- </div> -->
      </div>
    </van-list>
  </div>
</template>

<script>
import { newsGetHot } from "@/api/information";

export default {
  name: "Foot",
  props: {},
  data() {
    return {
      focus: []
    };
  },
  created() {
    this.handleGetHot()
  },
  methods: {
    /**
     * 获取热点事件列表
     */
    async handleGetHot() {
      try {
        const formData = new FormData();
        const res = await newsGetHot(formData);
        this.focus = res.data.result
      } catch (error) {
        this.$toast('要闻热点事件获取失败')
      }
    },
    /**
     * 要闻详情展示跳转
     */
    handleNewMore(q) {
      this.$router.push({ path: "/particulars", query: { q: q } });
    }
  },
};
</script>

<style lang='less' scoped>
.information-front-page-foot {
  height: 115px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px;
  border-bottom: 1px solid #14151c;
  img {
    width: 117px;
    height: 75px;
    border-radius: 5px;
  }
  .information-front-name {
    font-family: PingFangSC-Regular, PingFang SC;
    .information-title {
      height: 48px;
      font-size: 16px;
      font-weight: 500;
      width: 220px;
      // word-break:break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      letter-spacing: 1px;
      display:-webkit-box!important; 
      p {
        height: 24px;
        line-height: 24px;
      }
    }
    .information-box {
      display: flex;
      padding-top: 13px;
      .van-tag {
        padding: 2px 5px;
        font-size: 12px;
        transform: scale(0.7);
        background-color: #20212a;
      }
      .information-information {
        font-size: 12px;
        // transform: scale(0.9);
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
