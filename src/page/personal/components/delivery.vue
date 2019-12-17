<template>
  <div class="delivery">
    <van-nav-bar
      title="交割单查询"
      right-text="历史查询"
      @click-left="$router.back()"
      @click-right="showes = true;"
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
      <van-popup v-model="showes" position="top">
        <p class="time-header">自定义时间：</p>
        <div>
          <van-row>
            <van-col span="8" @click="handleFreeMinClick">
              <van-field v-model="starttime" clearable placeholder="请输入开始时间" @focus="start" />
            </van-col>
            <van-col span="2">-</van-col>
            <van-col span="8" @click="handleFreeMaxClick">
              <van-field v-model="endtime" clearable placeholder="请输入结束时间" @focus="end" />
            </van-col>
            <van-col span="6">确定</van-col>
          </van-row>
          <van-cell title="一周之内" is-link @click="handleColse" />
          <van-cell title="一月之内" is-link @click="handleColse" />
          <van-cell title="三月之内" is-link @click="handleColse" />
          <van-cell title="半年之内" is-link @click="handleColse" />
          <van-cell title="一年之内" is-link @click="handleColse" />
        </div>
      </van-popup>
    </div>
    <!-- 自定义时间选择 -->
    <div>
      <!-- 开始时间控件 -->
      <van-popup v-model="show" position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="confirm"
          @cancel="cancel"
          :formatter="formatter"
        />
      </van-popup>
      <!-- 结束时间控件 -->
      <van-popup v-model="show1" position="bottom">
        <van-datetime-picker
          v-model="currentDate1"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="confirm1"
          @cancel="cancel1"
          :formatter="formatter"
        />
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
      showes: false,
      show: false, //开始时间弹窗
      show1: false, //结束时间弹窗
      // minHour: 10,
      // maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2020, 11, 31),
      currentDate: new Date(), //开始标准时间
      currentDate1: new Date(), //结束标准时间
      starttime: "", //开始时间
      starttime1: "", //开始时间时间戳
      endtime: "", //结束时间
      endtime1: "", //结束时间时间戳

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

  // created() {
  //   this.handleDelivery();****************************************
  // },

  methods: {
    /**
     * 数据加载
     */
    async handleDelivery() {
      try {
        const formData = new FormData();
        formData.append("time_range", 4);
        const res = await deliveryOrderGetList(formData);
      } catch (error) {
        this.$toast("失败了");
      }
    },
    /**
     * 关闭顶部遮罩层
     */
    handleColse() {
      this.show = false;
      this.showStart = false;
    },
    /**
     * 自定义时间选择器
     */
    handleFreeMinClick() {
      this.showStart = true;
    },
    handleFreeMaxClick() {
      this.showStart = true;
    },

    /**
     * 时间函数
     */
    // 选择开始时间
    start() {
      this.show = true;
    },
    // 选择结束时间
    end() {
      this.show1 = true;
    },
    // 点击确定
    confirm() {
      this.show = false;
      this.starttime =
        this.currentDate.getFullYear() +
        "-" +
        (Number(this.currentDate.getMonth()) + 1) +
        "-" +
        this.currentDate.getDate();
      this.starttime1 = new Date(this.currentDate).getTime() / 1000;
    },
    // 点击取消
    cancel() {
      this.show = false;
    },
    confirm1() {
      this.show1 = false;
      this.endtime =
        this.currentDate1.getFullYear() +
        "-" +
        (Number(this.currentDate1.getMonth()) + 1) +
        "-" +
        this.currentDate1.getDate();
      this.endtime1 = new Date(this.currentDate1).getTime() / 1000;
    },
    cancel1() {
      this.show1 = false;
    },
    // 处理控件显示的时间格式
    formatter(type, value) {
      // 格式化选择器日期
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      }
      return value;
    }
  }
};
</script>

<style lang='less' scoped>
.van-nav-bar__text {
  color: #fff;
  background-color: #20212a;
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
.van-popup--top {
  margin-top: 46px;
  .time-header {
    width: 84px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(32, 33, 42, 1);
    line-height: 20px;
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  /deep/.van-overlay {
    margin-top: 46px;
  }
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
  .van-col--6 {
    font-size: 13px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: rgba(34, 34, 46, 1);
    color: #fff;
    border-radius: 3px;
  }
  .van-col--2 {
    text-align: center;
  }
  /deep/.van-field__control {
    color: red;
  }
  .van-col--4 {
    text-align: center;
  }
  .van-col--8 {
    margin: 0;
  }
}
.van-row {
  padding: 0 15px;
  height: 30px;
  .van-cell {
    padding: 0 2px;
    border: 1px solid #000;
    width: 110px;
    height: 30px;
    /deep/.van-field__body {
      height: 30px;
      padding: 0;
    }
  }
}
</style>