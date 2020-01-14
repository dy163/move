<template>
  <div class="hotspot">
    <van-nav-bar title="资 讯" fixed @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="hotspot-conent">
      <p>热点事件</p>
    </div>
    <div class="hotspot-list">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list 
          v-model="loading" 
          :finished="finished" 
          finished-text="没有更多了" 
          @load="onLoad" :offset="100"
        >
          <div
            class="hotspot-foot"
            v-for="(item,index) in focus"
            :key="index"
            @click="handleNewMore(item)"
          >
            <div class="hotspot-name">
              <div class="hotspot-title">
                <p>{{ item.title }}</p>
              </div>
              <div class="hotspot-box">
                <p class="hotspot-information">
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
      </van-pull-refresh>
    </div>

    <!-- 底部导航 -->
    <app-tabbar />
  </div>
</template>

<script>
import { newsGetList } from "@/api/information";

export default {
  name: "Hotspot",
  props: {},
  data() {
    return {
      finished: false, // 列表加载
      loading: false, // 列表加载
      isLoading: false, // 下拉刷新控制
      pageNum: 1, // 页数
      pageSize: 10, // 每页条数
      focus: []
    };
  },
  created() {
    // this.handleGetList();   // 去掉
  },
  methods: {
    /**
     * 列表懒加载
     */
    onLoad() {
      console.log('onload')
      // this.$sleep(800)s
      setTimeout(() => {
        for (let i = 0; i.length < 5; i++) {
          this.focus.push(this.focus.length + 1);
        }
        this.handleGetList()
        // 加载状态结束
        this.loading = false;
        console.log(this.focus.length)
        // 数据全部加载完成
        if (this.focus.length <= 10) {
          this.finished = true;
        }
      }, 500);
    },
    /**
     * 下拉刷新
     */
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.handleGetList();
      }, 500);
    },
    /**
     * 数据列表加载接口函数
     */
    async handleGetList() {
      try {
        const formData = new FormData();
        formData.append("page", this.pageNum);
        formData.append("number", this.pageSize);
        const res = await newsGetList(formData);
        this.focus = res.data.result;
      } catch (error) {
        this.$toast("获取跟多热点列表失败");
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
  img {
    width: 117px;
    height: 75px;
    border-radius: 5px;
  }
  .hotspot-foot {
    color: rgba(255, 255, 255, 1);
    height: 115px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    border-bottom: 1px solid #14151c;
    .hotspot-name {
      font-family: PingFangSC-Regular, PingFang SC;
      .hotspot-title {
        height: 48px;
        font-size: 16px;
        width: 220px;
        // word-break:break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        letter-spacing: 1px;
        display: -webkit-box !important;
        p {
          height: 24px;
          line-height: 24px;
        }
      }
      .hotspot-box {
        display: flex;
        padding-top: 14px;
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