<template>
  <div class="inquire">
    <van-nav-bar title="成交查询" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <!-- 展示时间遮罩 -->
    <div class="entrust-header">
      <van-row>
        <van-col span="12" @click="handleToday">今日查询</van-col>
        <van-col span="12">
          <div v-show="show2" @click="handleShow2">
            <span>历史查询</span>
            <van-icon name="arrow" />
          </div>
          <div v-show="show3" @click="handleShow3">
            <span >历史查询</span>
            <van-icon name="arrow-down" />
          </div>
        </van-col>
      </van-row>      
    </div>
    <!-- 内容 -->
    <div class="inquire-content">
      <van-list>
        <div v-for="item in list" :key="item.id">
          <p>
            {{ item.stock_name }}
            <span>{{ item.stock_code }}</span>
          </p>
          <div class="inquire-list">
            <van-row type="flex" justify="space-between">
              <van-col span="6">买卖方向</van-col>
              <van-col span="6">{{ item.buy_or_sell }}</van-col>
              <van-col span="6">成交状态</van-col>
              <van-col span="6">已成</van-col>
            </van-row>
            <!-- <van-row>
              <van-col span="6">买卖价格</van-col>
              <van-col span="6">{{ item.entrust }}</van-col>
              <van-col span="6">委托数量</van-col>
              <van-col span="6">{{ item.entrustAmount }}</van-col>
            </van-row> -->
            <van-row>
              <van-col span="6">成交金额</van-col>
              <van-col span="6">{{ item.amount }}</van-col>
              <van-col span="6">成交价格</van-col>
              <van-col span="6">{{ item.price }}</van-col>
            </van-row>
            <van-row>
              <van-col span="6">成交数量</van-col>
              <van-col span="6">{{ item.quantity }}</van-col>
              <van-col span="4">成交时间</van-col>
              <van-col span="8">{{ item.time }}</van-col>
            </van-row>
          </div>
        </div>
      </van-list>
      <!-- 默认得图片 -->
      <img src="@/assets/img/hollow.png" v-show="false" />
    </div>
    <!-- 展示历史查询遮罩 -->
    <div>
      <van-popup v-model="showes" position="top" @click-overlay='close' @click='close'>
        <p class="time-header">自定义时间：</p>
        <div>
          <van-row>
            <van-col span="8">
              <van-field v-model="starttime" clearable placeholder="请输入开始时间" @focus="start" />
            </van-col>
            <van-col span="2">-</van-col>
            <van-col span="8">
              <van-field v-model="endtime" clearable placeholder="请输入结束时间" @focus="end" />
            </van-col>
            <van-col span="6" @click="handleConfirm">确定</van-col>
          </van-row>
          <van-cell title="一周之内" is-link @click="handleColseWeek" />
          <van-cell title="一月之内" is-link @click="handleColseJanuary" />
          <van-cell title="三月之内" is-link @click="handleColseMarch" />
          <van-cell title="半年之内" is-link @click="handleColseJune" />
          <van-cell title="一年之内" is-link @click="handleColseYear" />
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
import { bargainHistory, bargainToday } from "@/api/stock";

export default {
  name: "Inquire",
  data() {
    return {
      show2:true,
      show3:false,
      showes: false,
      show: false, //开始时间弹窗
      show1: false, //结束时间弹窗
      minDate: new Date(2018, 11, 11),
      maxDate: new Date(2020, 11, 31),
      currentDate: new Date(2018, 11, 11), //开始标准时间
      currentDate1: new Date(), //结束标准时间
      starttime: "", //开始时间
      starttime1: "", //开始时间时间戳
      endtime: "", //结束时间
      endtime1: "", //结束时间时间戳
      list: []
    };
  },
  created(){
    this.$toast.setDefaultOptions({ duration: 800 });   // vant 消息提示展示时间
    this.handleToday()
  },
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
    close() {
      this.show3 = false
      this.showes = false
      this.show2 = true
    },
    /**
     * 历史查询点击事件
     */
    handleShow2() {
      this.show2 = false
      this.showes = true
      this.show3 = true
    },
    handleShow3() {
      this.show3 = false
      this.showes = false
      this.show2 = true
    },
    /**
     * 自定义时间选择器
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
    },

    /**
     * 自定义时间确定按钮
     */
    async handleConfirm() {
      try {
        if (!this.starttime && !this.endtime) {
          this.$toast("请输入自定义时间");
        } else {
          this.showes = false; // 控制遮罩层展示
          const min = this.starttime.split("-").join("");
          const max = this.endtime.split("-").join("");
          const formData = new FormData();
          formData.append("time_range", 6);
          formData.append("min", min);
          formData.append("max", max);
          const res = await bargainHistory(formData);
          this.list = res.data.result;
          // 判断展示登录状态
          if(!res.data.status) {
            this.$toast("请登录后查看");
          } else {
            this.$toast("获取自定义列表成功");
          }
        }
      } catch (error) {
        this.$toast("获取失败");
      }
    },
    /**
     * 今日成交列表查询
     */
    async handleToday() {
      this.show3 = false
      this.showes = false
      this.show2 = true
      try {
        const formData = new FormData();
        const res = await bargainToday(formData);
        this.list = res.data.result;
        // 判断展示登录状态
        if(!res.data.status) {
          this.$toast("请登录后查看");
        } else {
          this.$toast("获取今日成交列表成功");
        }
      } catch (error) {
        
      }
    },
    /**
     * 一周点击
     */
    async handleColseWeek() {
      this.showes = false;
      try {
        const formData = new FormData();
        formData.append("time_range", 1);
        const res = await bargainHistory(formData);
        this.list = res.data.result;
        // 判断展示登录状态
        if(!res.data.status) {
          this.$toast("请登录后查看");
        } else {
          this.$toast("获取周列表成功");
        }
      } catch (error) {
        this.$toast("获取失败");
      }
    },
    /**
     * 一月点击
     */
    async handleColseJanuary() {
      this.showes = false;
      try {
        const formData = new FormData();
        formData.append("time_range", 2);
        const res = await bargainHistory(formData);
        this.list = res.data.result;
        // 判断展示登录状态
        if(!res.data.status) {
          this.$toast("请登录后查看");
        } else {
          this.$toast("获取一月列表成功");
        }
      } catch (error) {
        this.$toast("获取失败");
      }
    },
    /**
     * 三月点击
     */
    async handleColseMarch() {
      this.showes = false;
      try {
        const formData = new FormData();
        formData.append("time_range", 3);
        const res = await bargainHistory(formData);
        this.list = res.data.result;
        // 判断展示登录状态
        if(!res.data.status) {
          this.$toast("请登录后查看");
        } else {
          this.$toast("获取三月列表成功");
        }
      } catch (error) {
        this.$toast("获取失败");
      }
    },
    /**
     * 半年点击
     */
    async handleColseJune() {
      this.showes = false;
      try {
        const formData = new FormData();
        formData.append("time_range", 4);
        const res = await bargainHistory(formData);
        this.list = res.data.result;
        // 判断展示登录状态
        if(!res.data.status) {
          this.$toast("请登录后查看");
        } else {
          this.$toast("获取半年列表成功");
        }
      } catch (error) {
        this.$toast("获取失败");
      }
    },
    /**
     * 一年点击
     */
    async handleColseYear() {
      this.showes = false;
      try {
        const formData = new FormData();
        formData.append("time_range", 5);
        const res = await bargainHistory(formData);
        this.list = res.data.result;
        // 判断展示登录状态
        if(!res.data.status) {
          this.$toast("请登录后查看");
        } else {
          this.$toast("获取一年列表成功");
        }
      } catch (error) {
        this.$toast("获取失败");
      }
    }
  }
};
</script>

<style lang='less' scoped>
.inquire-content {
  text-align: center;
  font-family: PingFangSC-Regular, PingFang SC;
  position: fixed;
  background: rgba(23, 24, 34, 1);
  width: 100%;
  height: 100%;
  img {
    margin-top: 100px;
  }
  p {
    height: 45px;
    line-height: 45px;
    text-align: left;
    font-size: 15px;
    color: rgba(255, 255, 255, 1);
    padding: 0 15px;
  }
  .inquire-list {
    padding: 8px 15px;
    background: rgba(32, 33, 43, 1);
    .van-row {
      font-size: 13px;
      color: rgba(124, 124, 130, 1);
      padding-bottom: 10px;
      .van-col {
        text-align: left;
      }
      .van-col:nth-child(even) {
        color: #fff;
        text-align: right;
      }
      .van-col:nth-child(2) {
        padding-right: 8px;
      }
      .van-col:nth-child(4) {
        font-size: 12px;
        white-space: nowrap;
      }
    }
    .van-row:nth-child(3) {
      padding-bottom: 0;
    }
  }
}
.entrust-header {
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  .van-col--12 {
    text-align: center;
  }
  .van-col--12:nth-child(1) {
    border-right: 1px solid rgba(23, 24, 34, 1);;
  }
  .van-col--12:nth-child(2) {
    .van-icon {
      margin-left: 5px;
      font-size: 12px;
      position: absolute;
      height: 50px;
      line-height: 50px;
    }
  }
}
/deep/.van-overlay {
  margin-top: 96px;
}
.van-popup--right {
  width: 188px;
  position: absolute;
  top: 196px;
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
}
// 点击历史查询遮罩样式
/deep/.van-overlay{
  margin-top: 100px;
}
.van-popup--top {
  margin-top: 100px;
  .time-header {
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
  /deep/.van-field__control {
    text-align: center;
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
}

</style>