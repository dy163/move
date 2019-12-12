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
        <div class="hotspot-foot" v-for="(item,index) in focus" :key="index" @click="handleNewMore(item)">
          <div class="hotspot-name">
            <p class="hotspot-title">{{ item.title }}</p>
            <div class="hotspot-box">
              <!-- <van-tag type="danger" size="medium" plain>{{ item.roof }}</van-tag> -->
              <p class="hotspot-information">
                <span>{{ item.resource }}</span>
                <span>{{ item.time }}</span>
              </p>
            </div>
          </div>
          <div class="img">
            <!-- <img src="@/assets/img/blank-picture.png" alt /> -->
            <img :src="'http://192.168.3.79:8080' + item.img"/>
          </div>
        </div>
      </van-list>
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
      page: "", // 页数
      number: "", // 每页条数
      focus: []
    };
  },
  created() {
    this.handleGetList();
  },
  methods: {
    /**
     * 数据列表加载接口函数
     */
    async handleGetList() {
      try {
        const formData = new FormData();
        formData.append("page", this.page);
        formData.append("number", this.number);
        const res = await newsGetList(formData);
        this.focus = res.data.result;
      } catch (error) {
        this.$toast("获取要闻列表失败");
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
  img{
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
    .hotspot-title {
      font-size: 16px;
      font-family: PingFangSC;
      font-weight: 500;
      line-height: 24px;
      margin-right: 8px;
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