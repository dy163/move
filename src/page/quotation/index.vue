<template>
  <div class="quotation">
    <van-nav-bar title="股票" fixed>
      <div slot="right">
        <img src="@/assets/img/search.png" class="nav-img" @click="$router.push('/search')" />
      </div>
    </van-nav-bar>
    <div class="quotation-content">
      <van-row>
        <van-col span="6" @click="handleAllSort">全部</van-col>
        <van-col span="6" @click="handlePriceSort">
          价格
          <img src="@/assets/img/sort.png" alt />
        </van-col>
        <van-col span="6" @click="handleUpDownSort">
          涨跌价
          <img src="@/assets/img/sort.png" alt />
        </van-col>
        <van-col span="6" @click="handleUpDownRangeSort">
          涨跌幅
          <img src="@/assets/img/sort.png" alt />
        </van-col>
      </van-row>
    </div>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">    
        <van-list>
          <div
            class="quotation-content-top"
            v-for="(item, index) in stock"
            :key="index"
            @click="handleTranscation(item)"
          >
            <van-row>
              <van-col span="6">
                <p>{{ item.stock_name }}</p>
                <p>{{ item.stock_code }}</p>
              </van-col>
              <van-col span="6" :style="{color: item.open === item.current_price? 'white': (item.open < item.current_price ? 'red' : 'green')}">
                {{ item.current_price }}
              </van-col>
              <van-col span="6" :style="{color: item.open === item.current_price? 'white': (item.open < item.current_price ? 'red' : 'green')}">
                {{ item.rise_or_fall }}
              </van-col>
              <van-col span="6" :style="{color: item.open === item.current_price? 'white': (item.open < item.current_price ? 'red' : 'green')}">
                {{ item.rise_or_fall_rate }}
              </van-col>
            </van-row>
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
      stock: [],
      riseRate:''
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
    // 点击全部进行排序
    async handleAllSort () {
      try {
        const formData = new FormData()
        formData.append('orderCondition', 'stock_code')
        formData.append("orderStatus", 'desc')
        const res = await getList(formData)
        this.stock = res.data.result
      } catch (error) {
        this.$toast("排序操作失败")
      }
    },
    // 点击价格排序
    async handlePriceSort () {
      try {
        const formData = new FormData()
        formData.append('orderCondition', 'current_price')
        formData.append("orderStatus", 'desc')
        const res = await getList(formData)
        this.stock = res.data.result
      } catch (error) {
        this.$toast("排序操作失败")
      }
    },
    // 点击涨跌排序
    async handleUpDownSort () {
      try {
        const formData = new FormData()
        formData.append('orderCondition', 'rise_or_fall')
        formData.append("orderStatus", 'desc')
        const res = await getList(formData)
        this.stock = res.data.result
      } catch (error) {
        this.$toast("排序操作失败")
      }
    },
    // 点击涨跌幅排序
    async handleUpDownRangeSort () {
      try {
        const formData = new FormData()
        formData.append('orderCondition', 'rise_or_fall_rate')
        formData.append("orderStatus", 'desc')
        const res = await getList(formData)
        this.stock = res.data.result
      } catch (error) {
        this.$toast("排序操作失败")
      }
    },
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
        this.loading = false;
        this.finished = true;
        
      }, 500);
    },
    /**
     * 加载股票数据
     */
    async loadStock() {
      try {
        const formData = new FormData()
        const res = await getList(formData)
        this.stock = res.data.result
      } catch (error) {
        this.$toast("获取股票列表失败")
      }
    },
    /**
     * 列表点击展示详情
     */
    handleTranscation(q) {
      this.$router.push({path: '/transaction',query: {q: JSON.stringify(q)}});
        // this.$router.push({name: 'transaction', params: {q: JSON.stringify(q)}})
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
  line-height: 48px;
  margin-top: 46px;
  font-size: 14px;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(126, 130, 156, 1);
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
.quotation-content-top {
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  padding: 0 15px;
  height: 55px;
  line-height: 55px;
  border-top: 1px solid #14151C;
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
