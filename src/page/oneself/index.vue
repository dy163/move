<template>
  <!-- <div class="oneself" :value="value" @input="$emit('input', $event)"> -->
  <div class="oneself">
    <van-nav-bar title="股票" left-text="持仓" fixed @click-left="onClickLeft">
      <div slot="right">
        <img src="@/assets/img/search.png" @click="$router.push('/search')" class="nav-img" />
      </div>
    </van-nav-bar>
    <div class="oneself-content">
      <div class="oneself-content-title">
        <p>
          全部
          <img src="@/assets/img/triangle.png" />
        </p>
        <p>
          价格
          <img src="@/assets/img/sort.png" />
        </p>
        <p>
          涨跌幅
          <img src="@/assets/img/sort.png" />
        </p>
      </div>
      <div class="nil"></div>
      <!-- 下拉刷新 -->
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list :finished="finished" finished-text="没有更多了">
          <!-- <van-swipe-cell v-for="(item, index) in stock" :key="index" :on-close="onClose"> -->
          <van-swipe-cell v-for="(item, index) in stock" :key="index">
            <div class="oneself-content-top" @click="handleTranscation(item)">
              <div>
                <p>{{ item.stock_name }}</p>
                <p>
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
            <template slot="right">
              <van-button square type="danger" text="删除" @click="handleDelete(item)" />
              <!-- <van-button square type="danger" text="删除"/> -->
            </template>
          </van-swipe-cell>
        </van-list>
      </van-pull-refresh>
    </div>
    <div class="oneself-content-foot" @click="$router.push('/quotation')">
      <img src="@/assets/img/plus-small.png" alt />
      <span>添加自选股</span>
    </div>
    <!-- 底部导航 -->
    <app-tabbar />
  </div>
</template>

<script>
import { mySelectStockGetList, mySelectStockDelete } from "@/api/stock";

export default {
  name: "OneselfIndex",
  data() {
    return {
      isLoading: false,
      finished: false,
      stock: []
    };
  },
  // 提前加载
  mounted() {
    this.loadStock();
  },

  methods: {
    /**
     * 下拉刷新
     */
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.loadStock();
      }, 500);
    },
    /**
     * 跳转到持仓页面
     */
    onClickLeft() {
      const token = window.localStorage.getItem("sessionid");
      if (!token) {
        this.$toast("请登录");
      } else {
        this.$router.push("/capital");
      }
    },
    /**
     * 展示详情
     */
    handleTranscation(q) {
      this.$router.push({ path: "/transaction", query: { q: q } });
    },
    /**
     * 删除自选股
     */
    async handleDelete(q) {
      this.$dialog
        .confirm({
          title: "确定删除吗？"
        })
        .then(async () => {
          try {
            // on confirm
            const formData = new FormData();
            formData.append("id", q.id);
            await mySelectStockDelete(formData);
            // 重新获取数据
            this.loadStock();
          } catch (error) {
            this.$toast("清空失败");
          }
        })
        .catch(() => {
          // on cancel
        });
    },
    /**
     * 加载股票数据
     */
    async loadStock() {
      try {
        const formData = new FormData();
        const res = await mySelectStockGetList(formData);
        this.stock = res.data.result;
        if (!res.data.status) {
          this.$toast("请登录获取自选数据");
        }
      } catch (error) {
        this.$toast("失败操作");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  .nav-img {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }
  .van-nav-bar__text {
    color: #fff;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFangSC;
    font-weight: 500;
    background-color: #20212a;
  }
}
.nil {
  height: 85px;
}
.oneself-content {
  padding: 0 15px;
  .oneself-content-title {
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
  .oneself-content-top {
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
        .oneself-color {
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
.oneself-content-foot {
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
