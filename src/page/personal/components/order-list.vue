<template>
  <div class="order-list">
    <van-nav-bar title="订单列表" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="order-list">
      <van-tabs
        v-model="active"
        color="#2F98FF"
        background="#20212B"
        title-active-color="#2F98FF"
        title-inactive-color="#fff"
        line-height="2"
      >
        <van-tab title="待成交">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="order-list-wait" v-for="(item, index) in wait" :key="index">
              <div class="order-list-wait-top">
                <div>
                  <p>{{ item.stock_name }}</p>
                  <p>{{ item.stock_code }}</p>
                </div>
                <div>
                  <p>委托时间：</p>
                  <p>{{ item.time }}</p>
                </div>
              </div>
              <div class="order-list-wait-content">
                <div>
                  <p>委托价</p>
                  <p>{{ item.entrust_price }}</p>
                </div>
                <div>
                  <p>委托数</p>
                  <p>{{ item.entrust_quantity }}</p>
                </div>
                <div>
                  <p>状态</p>
                  <p>{{ item.status }}</p>
                </div>
                <div>
                  <p>已成数</p>
                  <p>{{ item.bargain_quantity }}</p>
                </div>
                <div>
                  <p @click="handleCancel(item)">撤单</p>
                </div>
              </div>
            </div>
          </van-list>
          <div class="order-list-img" v-if="show">
                <img src="@/assets/img/record.png" alt="">
                <span>暂无记录</span>
          </div>
        </van-tab>
        <van-tab title="已成交">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="order-list-wait" v-for="(item, index) in bargain" :key="index">
              <div class="order-list-wait-top">
                <div>
                  <p>{{ item.stock_name }}</p>
                  <p>{{ item.stock_code }}</p>
                </div>
                <div>
                  <p>委托时间：</p>
                  <p>{{ item.time }}</p>
                </div>
              </div>
              <div class="order-list-wait-content">
                <div>
                  <p>委托价</p>
                  <p>{{ item.entrust_price }}</p>
                </div>
                <div>
                  <p>委托数</p>
                  <p>{{ item.entrust_quantity }}</p>
                </div>
                <div>
                  <p>状态</p>
                  <p>{{ item.status }}</p>
                </div>
                <div>
                  <p>已成数</p>
                  <p>{{ item.bargain_quantity }}</p>
                </div>
                <!-- <div>
                    <p>撤单</p>
                </div>-->
              </div>
            </div>
          </van-list>
        </van-tab>
        <van-tab title="已撤单">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="order-list-wait" v-for="(item, index) in cancel" :key="index">
              <div class="order-list-wait-top">
                <div>
                  <p>{{ item.stock_name }}</p>
                  <p>{{ item.stock_code }}</p>
                </div>
                <div>
                  <p>委托时间：</p>
                  <p>{{ item.time }}</p>
                </div>
              </div>
              <div class="order-list-wait-content">
                <div>
                  <p>委托价</p>
                  <p>{{ item.entrust_price }}</p>
                </div>
                <div>
                  <p>委托数</p>
                  <p>{{ item.entrust_quantity }}</p>
                </div>
                <div>
                  <p>状态</p>
                  <p>{{ item.status }}</p>
                </div>
                <div>
                  <p>已成数</p>
                  <p>{{ item.bargain_quantity }}</p>
                </div>
              </div>
            </div>
          </van-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { entrustTodayGetList, entrustRevoke } from "@/api/stock";
export default {
  name: "Orderlist",
  data() {
    return {
      show: false,
      loading: false,
      finished: false,
      active: 0,
      wait: [], // 等待
      bargain: [], // 成交
      cancel: [] // 撤销
    };
  },
  created() {
    //   this.handleEntrustTodayGetList()
  },
  methods: {
    //  数据懒加载
    onLoad() {
      this.handleEntrustTodayGetList();
      this.loading = false; // 加载状态结束
    },
    // 获取今日未成交委托数据
    async handleEntrustTodayGetList() {
      try {
        const formData = new FormData();
        const res = await entrustTodayGetList(formData);
        this.wait = res.data.result.filter(function(q) {
          return q.status === "部成";
        });
        const result1 = res.data.result.filter(function(q) {
          return q.status === "已报";
        });
        this.wait.push(...result1);
        // 成交数据
        this.bargain = res.data.result.filter(function(q) {
          return q.status === "已成";
        });
        // 撤销数据
        this.cancel = res.data.result.filter(function(q) {
          return q.status === "已撤";
        });
        this.finished = true; // 数据加载完毕结束的提示
      } catch (error) {
        this.$toast("获取未成交失败");
      }
    },
    // 撤单
    async handleCancel(q) {
      try {
        const formData = new FormData();
        formData.append("id", q.id);
        const res = await entrustRevoke(formData);
        if (!res.data.status) {
          return;
        } else {
          this.$toast("撤销成功");
          this.handleEntrustTodayGetList();
        }
      } catch (error) {
        this.$toast("撤销操作失败");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.order-list {
  .order-list-fixed {
    padding-top: 8px;
    display: flex;
    justify-content: space-around;
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(105, 106, 113, 1);
    line-height: 17px;
    .van-ellipsis {
      width: 44px;
      height: 20px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(47, 152, 255, 1);
      line-height: 20px;
    }
  }
  .order-list-wait {
    padding: 0 15px;
    margin-bottom: 10px;
    .order-list-wait-top {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #fff;
      border-top: 1px solid rgb(20, 20, 20);
      border-bottom: 1px solid rgb(20, 20, 20);
      box-sizing: border-box;
      div {
        display: flex;
        justify-content: space-between;
      }
      div:nth-child(1) {
        p:nth-child(1) {
          margin-right: 10px;
        }
      }
      div:nth-child(2) {
        color: rgba(105, 106, 113, 1);
      }
    }
    .order-list-wait-content {
      height: 60px;
      font-size: 16px;
      display: flex;
      align-items: center;
      div {
        flex: 1;
        p:nth-child(1) {
          color: rgba(105, 106, 113, 1);
        }
        p:nth-child(2) {
          padding-top: 5px;
          color: #fff;
        }
      }
      div:nth-child(5) {
        background: rgb(71, 132, 211);
        border-radius: 10px;
        p {
          font-size: 14px;
          height: 30px;
          line-height: 30px;
          border-radius: 10px;
          text-align: center;
          color: #fff;
        }
      }
    }
  }
  .order-list-img {
    padding-top: 30px;
    text-align: center;
    span {
      display: block;
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 17px;
    }
  }
  .order-list-deal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    padding-top: 20px;
    div:nth-child(1) {
      width: 64px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
      p:nth-child(2) {
        width: 26px;
        height: 17px;
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        display: flex;
        align-items: center;
        padding-top: 8px;
        span {
          background: rgba(68, 127, 255, 1);
          border-radius: 3px;
          font-size: 8px;
          font-weight: 400;
          height: 8px;
          line-height: 8px;
          padding: 2px 3px;
        }
      }
    }
    div:nth-child(2) {
      width: 58px;
      height: 21px;
      font-size: 18px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: rgba(236, 66, 69, 1);
      line-height: 21px;
    }
    div:nth-child(3) {
      height: 16px;
      font-size: 14px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 16px;
      p:nth-child(1) {
        text-align: right;
      }
      p:nth-child(2) {
        height: 16px;
        font-size: 14px;
        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        color: rgba(112, 113, 119, 1);
        line-height: 16px;
        padding-top: 8px;
      }
    }
  }
}
</style>
