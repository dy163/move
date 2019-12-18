<template>
  <div class="flowing">
    <van-nav-bar
      title="流水查询"
      right-text="历史查询"
      @click-left="$router.back()"
      @click-right="showes = true"
    >
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="flowing-content">
      <div class="flowing-content-header">
        <P>发生日期</P>
        <P>操作</P>
        <P>发生金额</P>
        <P>剩余金额</P>
      </div>
      <van-list>
        <van-row v-for="item in list" :key="item.id">
          <van-col span="6">{{ item.date }}</van-col>
          <van-col span="6">{{ item.service_type }}</van-col>
          <van-col span="6">{{ item.flow_money }}</van-col>
          <van-col span="6">{{ item.usable_assets }}</van-col>
        </van-row>
      </van-list>
    </div>
    <!-- 展示历史查询遮罩 -->
    <div>
      <van-popup v-model="showes" position="top">
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
      <van-popup v-model="show" position="bottom" :overlay="false">
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
      <van-popup v-model="show1" position="bottom" :overlay="false">
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
import { fundFlowGetList } from "@/api/stock";

export default {
  name: "Flowing",
  data() {
    return {
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
  /**
   * 计算属性
   */
  computed: {},

  created() {
    this.handleFundFlow(); // 默认加载今天数据
  },

  methods: {
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
     * 加载今天数据
     */
    async handleFundFlow() {
      try {
        const formData = new FormData();
        const res = await fundFlowGetList(formData);
        this.list = res.data.result;
      } catch (error) {
        this.$toast("获取今天数据失败");
      }
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
          const res = await fundFlowGetList(formData);
          this.list = res.data.result;
          this.$toast("获取自定义列表成功");
        }
      } catch (error) {
        this.$toast("获取失败");
      }
    },
    /**
     * 周点击
     */
    async handleColseWeek() {
      this.showes = false;
      try {
        const formData = new FormData();
        formData.append("time_range", 1);
        const res = await fundFlowGetList(formData);
        this.list = res.data.result;
        this.$toast("获取周列表成功");
      } catch (error) {
        this.$toast("获取失败");
      }
    },
    /**
     * 月点击
     */
    async handleColseJanuary() {
      this.showes = false;
      try {
        const formData = new FormData();
        formData.append("time_range", 2);
        const res = await fundFlowGetList(formData);
        this.list = res.data.result;
        this.$toast("获取一月列表成功");
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
        const res = await fundFlowGetList(formData);
        this.list = res.data.result;
        this.$toast("获取三月列表成功");
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
        const res = await fundFlowGetList(formData);
        this.list = res.data.result;
        this.$toast("获取半年列表成功");
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
        const res = await fundFlowGetList(formData);
        this.list = res.data.result;
        this.$toast("获取一年列表成功");
      } catch (error) {
        this.$toast("获取失败");
      }
    }
  }
};
</script>

<style lang='less' scoped>
.van-nav-bar__text {
  color: #fff;
  background-color: #20212a;
}
.flowing-content {
  padding: 0 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  height: 100%;
  .flowing-content-header {
    height: 47px;
    font-size: 13px;
    color: rgba(124, 124, 130, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border-bottom: 0.5px solid #14151C;
    p {
      flex: 1;
    }
    p:nth-child(2),
    p:nth-child(3) {
      text-align: center;
    }
    p:nth-child(4) {
      text-align: right;
    }
  }
  .van-row {
    height: 50px;
    line-height: 50px;
    padding: 0;
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
    border-top: 0.5px solid #14151c;
    .van-col--6:nth-child(2),
    .van-col--6:nth-child(3) {
      text-align: center;
    }
    .van-col--6:nth-child(4) {
      text-align: right;
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