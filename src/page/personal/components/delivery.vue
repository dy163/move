<template>
  <div class="delivery">
    <van-nav-bar title="交割单查询" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="delivery-content">
      <div class="delivery-content-header">
        <van-row>
          <van-col span="5">证劵名称</van-col>
          <van-col span="7" class="header-style">成交价</van-col>
          <van-col span="7" class="header-style">成交量</van-col>
          <van-col span="5" class="header-style">成交额</van-col>
        </van-row>
      </div>
      <van-list>
        <div class="delivery-content-include" v-for="item in list" :key="item.id">
          <div class="delivery-content-table">
            <div>
              <van-row>
                <van-col span="5">{{ item.title }}</van-col>
                <van-col span="2">
                  <img src="@/assets/bill.png? @/assets/bill.png:@/assets/sell.png" />
                </van-col>
                <van-col span="5" class="table-money">{{ item.money }}</van-col>
                <van-col span="7" class="delivery-content-big">{{ item.number }}</van-col>
              </van-row>
              <van-row>
                <van-col span="5">{{ item.identifier }}</van-col>
                <van-col span="9">{{ item.timer }}</van-col>
                <van-col span="5" class="delivery-content-small">{{ item.amount }}</van-col>
              </van-row>
            </div>
          </div>
          <p class="delivery-content-state">已成</p>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { deliveryOrderGetList } from "@/api/stock";

export default {
  name: "Delivery",
  data() {
    return {
      list: [
        {
          title: "贵州茅台",
          money: "30.21元",
          number: "1,600",
          identifier: "102931",
          timer: "2017-10-05 10:22",
          amount: "1,600"
        },
        {
          title: "茅台",
          money: "30.21元",
          number: "1,600",
          identifier: "102931",
          timer: "2017-10-05 10:22",
          amount: "1,600"
        }
      ]
    };
  },
  created() {
    // this.handleDelivery()
  },
  methods: {
    async handleDelivery() {
        try {
            const formData = new FormData();
            // formData.append("time_range", this.account);
            const res = await deliveryOrderGetList(formData)
            console.log(res)
        } catch (error) {
            this.$toast('失败了')
        }
    }
  }
};
</script>

<style lang='less' scoped>
.delivery-content {
  position: fixed;
  background: rgba(23, 24, 34, 1);
  height: 100%;
  width: 100%;
  .delivery-content-header {
    height: 50px;
    line-height: 50px;
    margin: 0 15px;
    font-size: 13px;
    color: rgba(124, 124, 130, 1);
    border-bottom: 1px solid #2e2e2e;
    .header-style {
      text-align: right;
    }
  }
  .delivery-content-include {
    font-size: 14px;
    margin: 0 15px;
    padding: 15px 0;
    border-bottom: 1px dotted #2e2e2e;
    color: rgba(255, 255, 255, 1);
    position: relative;
    .delivery-content-table {
      .van-row {
        img {
          width: 18px;
          display: flex;
          align-items: center;
          margin-right: 0;
        }
        .table-money,
        .delivery-content-small,
        .delivery-content-big,
        .van-col--4 {
          text-align: right;
        }
        .van-col--8 {
          text-align: center;
        }
      }
      .van-row:nth-child(2) {
        padding-top: 6px;
        font-size: 12px;
      }
    }
    .delivery-content-state {
      position: absolute;
      right: 0;
      top: 25px;
    }
  }
}
</style>