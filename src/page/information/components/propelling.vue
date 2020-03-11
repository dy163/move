<template>
  <div class="propelling">
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list>
        <!-- 内容数据展示 -->
        <div
          class="propelling-content"
          v-for="(item, index) in pushList"
          :key="index"
          @click="handleClickMore(item)"
        >
          <div>
            <div class="propelling-title">
              <p>{{ item.title }}</p>
            </div>
            <p class="propelling-name">
              {{ item.resource }}
              <span>{{ item.time }}</span>
            </p>
          </div>
          <!-- 图片 -->
          <!-- <div class="img"> -->
            <!-- <img :src="'http://192.168.3.79:8080' + item.img"/> -->
            <img :src="'http://bourse.yidonghuayuan.com' + item.img" />
          <!-- </div> -->
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { newsGetPush } from "@/api/information";

export default {
  name: "Propelling",
  props: {},
  data() {
    return {
      isLoading: false,
      pushList: []
    };
  },
  created() {
    this.handlePush()     // 提前加载
  },
  methods: {
    /**
     * 下拉刷新
     */
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.handlePush()     // 下拉刷新加载
      }, 500);
    },
    /**
     * 加载数据
     */
    async handlePush () {
      try {
        const formData = new FormData();
        const res = await newsGetPush(formData);
        this.pushList = res.data.result
      } catch (error) {
        this.$toast('加载推送数据失败')
      }
    },
    /**
     * 跳转详情页
     */
    handleClickMore(q) {
      this.$router.push({path: '/particulars',query: {q: q}});
    }
  }
};
</script>

<style lang='less' scoped>
.propelling {
  padding: 0 15px;
  .propelling-title {
    height: 48px;
    font-size: 16px;
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
  .propelling-content {
    height: 115px;
    border-bottom: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    width: 111px;
    height: 75px;
    border-radius: 5px;
  }
}
.propelling-name {
  height: 16px;
  font-size: 11px;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(106, 109, 131, 1);
  line-height: 16px;
  padding-top: 13px;
}
</style>