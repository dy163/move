<template>
  <div class="oneself">
    <van-nav-bar title="股票" left-text="持仓" fixed @click-left="onClickLeft">
      <div slot="right">
        <img src="@/assets/img/search.png" @click="$router.push('/search')" class="nav-img" />
      </div>
    </van-nav-bar>
    <div class="oneself-content">
      <van-row>
        <van-col span="6">全部</van-col>
        <van-col span="6">
          价格
          <img src="@/assets/img/sort.png" alt />
        </van-col>
        <van-col span="6">
          涨跌价
          <img src="@/assets/img/sort.png" alt />
        </van-col>
        <van-col span="6">
          涨跌幅
          <img src="@/assets/img/sort.png" alt />
        </van-col>
      </van-row>
    </div>
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list :finished="finished" finished-text="没有更多了">
        <van-swipe-cell v-for="(item, index) in stock" :key="index">
          <div class="oneself-content-top" @click="handleTranscation(item)">
            <van-row>
              <van-col span="6">
                <p>{{ item.stock_name }}</p>
                <p>{{ item.stock_code }}</p>
              </van-col>
              <van-col
                span="6"
                :style="{color: item.open === item.current_price? 'white': (item.open > item.current_price ? 'red' : 'green')}"
              >{{ item.current_price }}</van-col>
              <van-col
                span="6"
                :style="{color: item.open === item.current_price? 'white': (item.open > item.current_price ? 'red' : 'green')}"
              >{{ item.rise_or_fall }}</van-col>
              <van-col
                span="6"
                :style="{color: item.open === item.current_price? 'white': (item.open > item.current_price ? 'red' : 'green')}"
              >{{ item.rise_or_fall_rate }}</van-col>
            </van-row>
          </div>
          <template slot="right">
            <van-button square type="danger" text="删除" @click="handleDelete(item)" />
          </template>
        </van-swipe-cell>
      </van-list>
    </van-pull-refresh>
    <div class="oneself-content-foot">
      <img src="@/assets/img/plus-small.png" alt />
      <span @click="$router.push('/quotation')">添加自选股</span>
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
  created() {
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
      this.$router.push({
        path: "/transaction",
        query: { q: JSON.stringify(q) }
      });
    },
    /**
     * 删除自选股
     */
    handleDelete(q) {
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
            this.$toast("删除失败");
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
        if (res.data.result === 401) {
          this.$toast("请登录获取自选数据");
        } else {
          this.stock = res.data.result;
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
.oneself-content {
  padding: 0 15px;
  position: static;
  height: 48px;
  line-height: 48px;
  margin-top: 46px;
  font-size: 14px;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  .van-row {
    .van-col:nth-child(2) {
      text-align: center;
    }
    .van-col:nth-child(3) {
      text-align: center;
    }
    .van-col:nth-child(4) {
      text-align: right;
    }
  }
}
.oneself-content-top {
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  padding: 0 15px;
  height: 55px;
  line-height: 55px;
  border-top: 1px solid #14151c;
  .van-row {
    .van-col:nth-child(1) {
      p:nth-child(1) {
        height: 30px;
        line-height: 30px;
      }
      p:nth-child(2) {
        height: 17px;
        line-height: 18px;
        font-size: 12px;
      }
    }
    .van-col:nth-child(2) {
      text-align: center;
    }
    .van-col:nth-child(3) {
      text-align: center;
    }
    .van-col:nth-child(4) {
      text-align: right;
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
