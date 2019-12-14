<template>
  <div class="delivery">
    <van-nav-bar 
    title="交割单查询" 
    right-text="历史查询" 
    @click-left="$router.back()"
    @click-right="show = true;"
    >
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
    <!-- 展示历史查询遮罩 -->
    <div>
      <van-popup 
      v-model="show"
      position="top">
      <div>
        <!-- <div class="popup-time" :item-height='20'>
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            :min-date="minDate"
          />
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            :min-date="minDate"
          />
        </div> -->
        
        <van-row>
        <van-col span="10">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            :min-date="minDate"
          />
        </van-col>
        <van-col span="2">--</van-col>
        <van-col span="10">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            :min-date="minDate"
          />
        </van-col>
        <van-col span="2" style="color: red">确定</van-col>
      </van-row>


        <van-cell title="一周之内" is-link @click="handleColse"/>
        <van-cell title="一月之内" is-link @click="handleColse"/>
        <van-cell title="三月之内" is-link @click="handleColse"/>
        <van-cell title="半年之内" is-link @click="handleColse"/>
        <van-cell title="一年之内" is-link @click="handleColse"/>
      </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
import { deliveryOrderGetList } from "@/api/stock";

export default {
  name: "Delivery",
  data() {
    return {
      show: false,
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
      ],
      currentDate: new Date(),
      minDate: new Date(),
    };
  },
  created() {
    this.handleDelivery()
  },
  methods: {
    async handleDelivery() {
        try {
          const formData = new FormData();
          formData.append("time_range", 4);
          const res = await deliveryOrderGetList(formData)
          console.log(res)
        } catch (error) {
            this.$toast('失败了')
        }
    },
    handleColse() {
      this.show = false
      console.log(132131)
    }
  },

};
</script>

<style lang='less' scoped>
.van-nav-bar__text {
  color: #fff;
  background-color: #20212A;
}
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
/deep/.van-overlay {
  margin-top: 46px;
}
.van-popup--top {
  margin-top: 46px;
  .van-cell {
    background-color: #fff;
    color: #000;
    height: 40px;
    line-height: 40px;
    .van-cell__right-icon {
      height: 40px;
      line-height: 40px;
    }
  }
  .van-cell:not(:last-child)::after {
    border: 0;
  }
  // .popup-time {
  //   display: flex;
  //   justify-content: space-between;
  //   /deep/.van-hairline--top-bottom, /deep/.van-picker__toolbar {
  //     position: absolute;
  //     height: 0;
  //     width: 0;
  //     .van-picker__cancel, .van-picker__confirm {
  //       color: #fff;
  //       padding: 0;
  //     }
  //   }
  //   /deep/.van-picker-column {
  //     width: 50px;
  //   }
  //   // /deep/.van-picker-column__wrapper {
  //   //   border: 1px solid #000
  //   // }
  //   /deep/.van-picker__columns {
  //     border: 1px solid #000;
  //     height: 20px;
  //   }
  // }
  .van-col--2{
    font-size: 14px;
  }
}
</style>