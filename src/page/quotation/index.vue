<template>
  <div class="quotation">
    <van-nav-bar title="股票" fixed>
      <div slot="right">
        <img src="@/assets/img/search.png" class="nav-img" @click="$router.push('/search')" />
      </div>
    </van-nav-bar>
    <div class="quotation-content">
      <div class="quotation-content-title">
        <p>
          全部
          <img src="@/assets/img/triangle.png" alt />
        </p>
        <p>
          价格
          <img src="@/assets/img/sort.png" alt />
        </p>
        <p>
          涨跌幅
          <img src="@/assets/img/sort.png" alt />
        </p>
      </div>
      <div class="nil"></div>
      <van-list>
        <div
          class="quotation-content-top"
          v-for="(item, index) in stock"
          :key="index"
          @click="handleTranscation(item)"
        >
          <div>
            <p>{{ item.stock_name }}</p>
            <p>
              <!-- <span class="quotation-color">{{ item.marker }}</span> -->
              <span>{{ item.stock_code }}</span>
            </p>
          </div>
          <div>
            <p>{{ item.current_price }}</p>
          </div>
          <div>
            <p>{{ item.rise_or_fall_rate }}</p>
          </div>
        </div>
      </van-list>
    </div>
    <!-- 底部导航 -->
    <app-tabbar />
  </div>
</template>

<script>
import { getList } from "@/api/stock";
export default {
  name: "QuotationIndex",
  data() {
    return {
      loading: false,
      finished: false,
      stock: []
    };
  },
  // 提前加载
  mounted() {
    this.loadStock();
  },
  // 方法
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 5) {
          this.finished = true;
        }
      }, 500);
    },
    // 加载股票数据
    async loadStock() {
      try {
        const formData = new FormData();
        // formData.append("id", this.searchText);
        // formData.append("fullname", this.searchText);       // 全称
        // formData.append("shortname", this.searchText);      // 简称
        // formData.append("stock_code", this.searchText);     // 数字股票代码
        // formData.append("symbol", this.searchText);         // 英文标识
        // formData.append("initial_name", this.searchText);   // 首拼
        const res = await getList(formData);
        this.stock = res.data.result;
      } catch (error) {
        this.$toast("失败操作");
      }
    },
    handleTranscation(q) {
      // this.$router.push({name: "transaction",params: { q }});
      this.$router.push({path: '/transaction',query: {q: q}});
    }
  }
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #20212a;
  .nav-img {
    width: 18px;
    height: 18px;
    vertical-align: middle;
  }
}
.nil {
  height: 85px;
}
.quotation-content {
  padding: 0 15px;
  .quotation-content-title {
    position: fixed;
    width: 350px;
    left: 12px;
    background-color: #20212a;
    z-index: 1000;
    display: flex;
    margin-top: 46px;
    justify-content: space-between;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
    padding: 13px 0;
    line-height: 20px;
    padding-top: 13px;
    p:nth-child(2) {
      margin-left: 18px;
    }
  }
  .quotation-content-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    div:nth-child(1) {
      p:nth-child(1) {
        width: 64px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
      }
      p:nth-child(2) {
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 17px;
        display: flex;
        align-items: center;
        padding-top: 4px;
        .quotation-color {
          background: rgba(251, 77, 79, 1);
          border-radius: 2px;
          font-size: 12px;
          -webkit-transform: scale(0.6);
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-left: -7px;
          display: inline-block;
          width: 20px;
          text-align: center;
        }
      }
    }
    div:nth-child(2) {
      height: 21px;
      font-size: 18px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 21px;
      margin-left: -16px;
    }
    div:nth-child(3) {
      height: 25px;
      font-size: 14px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: rgba(53, 192, 137, 1);
      line-height: 16px;
    }
  }
}
.quotation-content-foot {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
  padding-top: 10px;
  margin-bottom: 60px;
  img {
    vertical-align: middle;
    margin-right: 8px;
  }
}
.van-tab__pane {
  color: #fff;
}
.van-hairline--top-bottom {
  background-color: #20212a;
}
.van-tabbar-item__text {
  height: 14px;
  font-size: 10px;
  font-family: PingFangSC;
  font-weight: 500;
  line-height: 14px;
}
.van-tabbar-item__icon {
  width: 18px;
  height: 18px;
}
</style>
