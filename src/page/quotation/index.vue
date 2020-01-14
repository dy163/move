<template>
  <div class="quotation">
    <van-nav-bar title="股票" fixed>
      <div slot="right">
        <img src="@/assets/img/search.png" class="nav-img" @click="$router.push('/search')" />
      </div>
    </van-nav-bar>
    <div class="quotation-content">
      <p>全部<span></span></p>
      <p>
        价格
        <!-- <div>
          <p></p>
          <p></p>
        </div> -->
        <img src="@/assets/img/sort.png" alt />
      </p>
      <p>
        涨跌幅
        <img src="@/assets/img/sort.png" alt />
      </p>
    </div>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">    
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
      </van-pull-refresh>

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
      isLoading: false,
      loading: false,
      finished: false,
      stock: []
    };
  },
  /**
   * 提前加载
   */
  // 
  mounted() {
    // window.setInterval(() => {
    //     setTimeout(()=> {
          this.loadStock();
    //     }, 0)
    // }, 3000)
  },
  /**
   * 方法
   */
  methods: {
    /**
     * 下拉刷新
     */
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.loadStock();
      }, 500);
    },
    /**
     * 异步更新数据
     */
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.list.push(this.list.length + 1);
        }
        /**
         * 加载状态结束
         */
        this.loading = false;
        /**
         * 数据全部加载完成
         */
        if (this.list.length >= 5) {
          this.finished = true;
        }
      }, 500);
    },
    /**
     * 加载股票数据
     */
    async loadStock() {
      try {
        const formData = new FormData();
        const res = await getList(formData);
        this.stock = res.data.result;
      } catch (error) {
        this.$toast("失败操作");
      }
    },
    /**
     * 列表点击展示详情
     */
    handleTranscation(q) {
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
.quotation-content {
  padding: 0 15px;
  position: static;
  height: 48px;
  display: flex;
  align-items: center;
  margin-top: 46px;
  font-size: 14px;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
    p {
      flex: 1;
    }
    p:nth-child(1) {
      span {
        display: inline-block;
        margin-left: 3px;
        margin-bottom: 2px;
        width: 0;  
        height: 0;  
        border-top: 3px solid transparent;  
        border-left: 6px solid rgba(255, 255, 255, 1);  
        border-bottom: 3px solid transparent; 
      }
    }
    p:nth-child(2) {
      text-align: center;
      // div {
      //   p:nth-child(1) {
      //     width: 0;
      //     height: 0;
      //     border: 4px solid transparent;
      //     border-bottom-color: rgba(255, 255, 255, 1);
      //     cursor: pointer;
      //   }
      //   p:nth-child(2) {
      //     width: 0;
      //     height: 0;
      //     border: 4px solid transparent;
      //     border-top-color: rgba(255, 255, 255, 1);
      //     margin-top: 2px;
      //     cursor: pointer;
      //   }
      // }
    }
    p:nth-child(3) {
      text-align: right;
    }
  
}
.quotation-content-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
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
