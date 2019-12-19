<template>
  <div class="free">
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
      >-->
      <van-list>
        <div class="free-title" v-for="item in pushList" :key="item.id">
          <div class="free-title-name">
            <p class="free-title-name-title">
              {{item.stock_name}}
              <span>（{{ item.stock_code }}）</span>
            </p>
            <!-- <p @click="$router.push('/freemore')">查看更多</p> -->
            <p @click="handleFreeMore(item)">查看更多</p>
          </div>
          <div class="free-title-content" v-for="items in item.data" :key="items.id" @click="handleMore(items)">
            <p class="free-stance" >{{ items.title }}</p>
            <p class="free-timer">{{ items.time }}</p>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { noteGetMySelect } from "@/api/information";

export default {
  name: "Free",
  data() {
    return {
      isLoading: false,
      pushList:[]
    };
  },
  created() {
    this.handleFree()
  },
  methods: {
    /**
     * 下拉刷新
     */
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.handleFree()
      }, 500);
    },
    /**
     * 获取自选列表
     */
    async handleFree() {
      try {
        const formData = new FormData();
        const res = await noteGetMySelect(formData);
        this.pushList = res.data.result
      } catch (error) {
        this.$toast('加载自选列表失败')
      }
    },
    /**
     * 自选详情跳转
     */
    handleMore(q) {
      this.$router.push({path: '/details',query: {q: q}});
    },
    /**
     * 自选更多列表跳转
     */
    handleFreeMore (q) {
      this.$router.push({path: '/freemore',query: {q: q}});
    }
  }
};
</script>

<style lang='less' scoped>
.free {
  padding: 0 15px;
  font-family: PingFangSC-Medium, PingFang SC;
  .free-title {
    .free-title-name {
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      .free-title-name-title {
        font-size: 18px;
        font-weight: bold;
        span {
          font-size: 12px;
        }
      }
      p:nth-child(2) {
        font-size: 12px;
      }
    }
  }
  .free-stance {
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 16px;
    // border-top: 1px dashed #14151c; ///////********* 
    box-sizing: border-box;
  }
  .free-timer {
    font-size: 11px;
    color: rgba(126, 130, 156, 1);
    border-bottom: 1px dashed #14151c;
    padding-bottom: 20px;
  }
}
</style>