<template>
  <div class="notice">
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list>
        <div v-for="(item, index) in Optiona" :key="index" class="notice-content" @click="handleNotice(item)">
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
      isLoading: false,
      page:'',        // 页数
      number: '',     // 每页条数
      Optiona: []
    };
  },
  created() {
    this.handleNote()
  },
  methods: {
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
        formData.append("page", this.page);
        formData.append("number", this.number);
        const res = await noteGetList(formData);
        this.Optiona = res.data.result
      } catch (error) {
        
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