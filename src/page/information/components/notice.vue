<template>
  <div class="notice">
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list 
      v-model="loading"
      :finished="upFinished"
      finished-text="没有更多了"
      @load="onLoad"
      :offset="offset"
      >
        <div v-for="(item, index) in newOptiona" :key="index" class="notice-content" @click="handleNotice(item)">
          <p class="notice-range">
            {{ item.stock_name }}
            <span>{{ item.stock_code }}</span>&nbsp;&nbsp;
          </p>
          <p class="notice-brief">{{ item.title }}</p>
          <p class="notice-time">{{ item.time }}</p>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { noteGetList } from "@/api/information";

export default {
  name: "Notice",
  data() {
    return {
      loading: false, // 列表加载
      isLoading: false, // 下拉刷新控制
      offset: 10, //滚动条与底部距离小于 offset 时触发load事件
      upFinished:false,//上拉加载完毕
      pageNum: 1, // 页数
      pageSize:  8, // 每页条数
      optiona: [],
      newOptiona: []
    }
  },
  created() {
    // this.handleNote()
  },
  methods: {
    // 列表懒加载
    onLoad() {
      // 加载状态结束
      setTimeout(() => {
      this.loading = false
      this.handleNote()
      this.loading = true
      }, 1000)
    },
    /**
     * 下拉刷新
     */
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.handleNote()
      }, 500);
    },
    async handleNote() {
      try {
        const formData = new FormData();
        formData.append("pageNum", this.pageNum);
        formData.append("pageSize", this.pageSize);
        const res = await noteGetList(formData);
        this.optiona = res.data.result.list
        this.loading = false;
        this.newOptiona = this.newOptiona.concat(this.optiona)
        formData.append("pageNum", this.pageNum++) 
        if (this.optiona.length < this.pageSize) {
          this.upFinished = true;
        }
      } catch (error) {
        this.$toast("获取公告列表失败")
      }
    },
    handleNotice(q) {
      this.$router.push({path: '/details',query: {q: q}});
    }
  }
};
</script>

<style lang='less' scoped>
.notice {
  padding: 0 15px;
  font-family: PingFangSC-Medium, PingFang SC;
  .notice-content {
    border-bottom: 1px dashed #14151c;
  }
  .notice-range {
    font-size: 15px;
    padding-top: 10px;
    font-weight: bold;
  }
  .notice-brief {
    font-size: 16px;
    padding: 15px 0;
  }
  .notice-time {
    font-size: 11px;
    color: rgba(126, 130, 156, 1);
    padding-bottom: 20px;
  }
}
</style>