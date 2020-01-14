<template>
  <!-- 轮播图片 -->
  <div class="frontPageStory">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="frontPageStory-front-page-top">
        <van-swipe :autoplay="4000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <p class="image-lunbo">{{ image.title }}</p>
            <!-- <img :src="'http://192.168.3.79:8080' + image.img" /> -->
            <img :src="'http://bourse.yidonghuayuan.com' + image.img" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 快讯轮播 -->
      <div class="among">
        <div class="img">
          <img src="@/assets/img/involved.png" />
        </div>
        <div>
          <van-swipe :autoplay="3000" indicator-color="white" style="height: 64px;" vertical>
            <van-swipe-item v-for="item in flash" :key="item.id">{{ item }}</van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <!-- 置顶数据列表加载 -->
      <div>
        <!-- <van-list 
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >-->
        <van-list>
          <div
            class="information-front-page-foot"
            v-for="(item,index) in focus"
            :key="index"
            @click="handleNewMore(item)"
          >
            <div class="information-front-name">
              <div class="information-title">
                <p>{{ item.title }}</p>
              </div>
              <div class="information-box">
                <van-tag type="danger" size="medium" plain>置顶</van-tag>
                <p class="information-information">
                  <span>{{ item.resource }}</span>
                  <span>{{ item.time }}</span>
                </p>
              </div>
            </div>
            <!-- <div class="img"> -->
              <!-- <img :src="'http://192.168.3.79:8080' + item.img" /> -->
              <img :src="'http://bourse.yidonghuayuan.com' + item.img" />
            <!-- </div> -->
          </div>
        </van-list>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { newsGetTop, newsGetFlash, newsGetLunbo } from "@/api/information";

export default {
  name: "FrontPageStory",
  data() {
    return {
      isLoading: false,
      show: true,
      loading: false,
      finished: false,
      page: "", // 页数
      number: "", // 每页条数
      images: [],
      focus: [],
      flash: []
    };
  },
  created() {
    this.handleGetTop(); // 置顶列表
    this.handleGetFlash(); // 要闻快讯
    this.handleGetLunbo(); // 轮播列表
  },
  methods: {
    /**
     * 下拉刷新
     */
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.handleGetTop(); // 下拉刷新置顶列表
        this.handleGetFlash(); // 下拉刷新要闻快讯
        this.handleGetLunbo(); // 下拉刷新轮播列表
      }, 500);
    },
    /**
     * 异步更新数据
     */
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 1; i++) {
          this.focus.push(this.focus.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.focus.length >= 2) {
          this.finished = true;
        }
      }, 500);
    },
    /**
     * 获取资讯要闻置顶列表
     */
    async handleGetTop() {
      try {
        const formData = new FormData();
        const res = await newsGetTop(formData);
        this.focus = res.data.result;
      } catch (error) {
        this.$toast("获取资讯要闻置顶列表失败");
      }
    },
    /**
     * 要闻快讯标题列表
     */
    async handleGetFlash() {
      try {
        const formData = new FormData();
        const res = await newsGetFlash(formData);
        this.flash = res.data.result;
      } catch (error) {
        this.$toast("要闻快讯标题列表失败");
      }
    },
    /**
     * 资讯要闻轮播列表
     */
    async handleGetLunbo() {
      try {
        const formData = new FormData();
        const res = await newsGetLunbo(formData);
        this.images = res.data.result;
      } catch (error) {
        this.$toast("资讯要闻轮播列表失败");
      }
    },
    /**
     * 要闻详情展示跳转
     */
    handleNewMore(q) {
      this.$router.push({ path: "/particulars", query: { q: q } });
    }
  }
};
</script>

<style lang='less' scoped>
.frontPageStory-front-page-top {
  height: 180px;
  margin-bottom: 40px;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFangSC;
  color: rgba(255, 255, 255, 1);
  img {
    height: 180px;
    // width: 100%;
    width: 375px;
  }
  .image-lunbo {
    width: 345px;
    height: 30px;
    line-height: 30px;
    position: absolute;
    left: 50%;
    top: 60%;
    margin-left: -172.5px;
    text-align: center;
    border-radius: 5px;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
/deep/.van-swipe__indicators {
  width: 0;
}
/deep/.van-swipe__indicator {
  width: 0;
}
.among {
  height: 65px;
  line-height: 65px;
  background: rgba(38, 39, 50, 1);
  margin-top: -60px;
  font-size: 13px;
  width: 345px;
  margin-left: 15px;
  border-radius: 8px;
  position: absolute;
  .van-swipe {
    margin-left: 70px;
  }
  /deep/.van-swipe-item {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .img {
    position: absolute;
    margin-top: 12.5px;
    margin-left: 15px;
  }
  img {
    width: 45px;
    height: 40px;
  }
}
.information-front-page-foot {
  height: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      width: 220px;
      overflow: hidden;
      text-overflow: ellipsis;
      display:-webkit-box!important;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:2;
      word-break:break-all;
      letter-spacing: 1px;
      p {
        height: 24px;
        line-height: 24px;
      }
    }
    .information-box {
      display: flex;
      padding-top: 13px;
      width: 220px;
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
        span:nth-child(1) {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>