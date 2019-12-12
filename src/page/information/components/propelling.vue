<template>
  <div class="propelling">
    <van-list>
      <!-- 内容数据展示 -->
      <div
        class="propelling-content"
        v-for="(item, index) in pushList"
        :key="index"
        @click="handleClickMore(item)"
      >
        <div>
          <p class="propelling-title">{{ item.title }}</p>
          <p class="propelling-name">
            {{ item.resource }}
            <span>{{ item.time }}</span>
          </p>
        </div>
        <!-- 图片 -->
        <div class="img">
          <img :src="'http://192.168.3.79:8080' + item.img"/>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import { newsGetPush } from "@/api/information";

export default {
  name: "Propelling",
  props: {},
  data() {
    return {
      pushList: []
    };
  },
  created() {
    this.handlePush()     // 提前加载
  },
  methods: {
    /**
     * 加载数据
     */
    async handlePush () {
      try {
        const formData = new FormData();
        const res = await newsGetPush(formData);
        this.pushList = res.data.result
      } catch (error) {
        
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
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 500;
    line-height: 24px;
    margin-right: 10px;
  }
  .propelling-content {
    padding: 10px 0;
    border-bottom: 1px solid #000;
    display: flex;
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
  padding-top: 12px;
}
</style>