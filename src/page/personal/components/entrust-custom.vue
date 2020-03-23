<template>
  <div class="entrust-list">
    <van-list
      v-model="loading"
      :finished="upFinished"
      finished-text="没有更多了"
      @load="onLoad"
      :offset="10"
    >
      <van-row v-for="item in listDay" :key="item.id">
        <van-col span="4">
          <p>{{ item.stock_name }}</p>
          <p class="entrust-small">{{ item.stock_code }}</p>
        </van-col>
        <van-col span="10">
          <div>
            <img :src="item.buy_or_sell === '卖出'? Sell : Bill" />
            <p>{{ item.entrust_price }}</p>
          </div>
          <p class="entrust-small">{{ item.time }}</p>
        </van-col>
        <van-col span="7">
          <p>{{ item.entrust_quantity }}</p>
          <p class="entrust-small">{{ item.bargain_quantity }}</p>
        </van-col>
        <van-col span="3" class="van-row-right">{{ item.status }}</van-col>
      </van-row>
    </van-list>
  </div>
</template>

<script>
import { entrustHistory } from "@/api/stock";
import Sell from "@/assets/sell.png"; // 卖
import Bill from "@/assets/bill.png"; // 买

export default {
  name: "EntrustCustom",
  data() {
    return {
      Sell, // 卖图片
      Bill, // 买图片
      loading: false, //  一天列表加载
      upFinished: false, // 一天上拉加载完毕
      listDay: [], // 一天
      listNum: [], // 一天
      pageNum: 1,
      pageSize: 8
    };
  },
  created() {
    this.$toast.setDefaultOptions({ duration: 800 }); // 控制消息提示展示时间
  },
  methods: {
    // 列表懒加载
    onLoad() {
      // 加载状态结束
      setTimeout(() => {
        this.loading = false;
        this.handleConfirm();
        this.loading = true;
      }, 1000);
    },
    /**
     * 自定义时间确定按钮
     */
    async handleConfirm() {
      try {
        const starttime = window.localStorage.getItem('starttime')
        const endtime = window.localStorage.getItem('endtime')
        if (!starttime && !endtime) {
          this.$toast("请输入自定义时间");
        } else {
          this.showes = false; // 控制遮罩层展示
          const min = starttime.split("-").join("");
          const max = endtime.split("-").join("");
          const formData = new FormData();
          formData.append("time_range", 6);
          formData.append("min", min);
          formData.append("max", max);
          formData.append("pageNum", this.pageNum);
          formData.append("pageSize", this.pageSize);
          const res = await entrustHistory(formData);
          // 判断展示登录状态
          if (res.data.result === null) {
            this.$toast("自定义委托列表为空");
            this.loading = false;
            this.upFinished = true;
          } else if (res.data.login === false) {
            window.localStorage.removeItem("sessionid");
            this.$toast("用户未登录，请重新登录");
            this.loading = false;
            this.upFinished = true;
          } else {
            this.$toast("获取自定义列表成功");
            this.listNum = res.data.result.list;
            this.loading = false;
            this.listDay = this.listDay.concat(this.listNum);
            formData.append("pageNum", this.pageNum++);
            if (this.listNum.length < this.pageSize) {
              this.upFinished = true;
              window.localStorage.removeItem('starttime')
              window.localStorage.removeItem('endtime')
            }
          }
        }
      } catch (error) {
        this.$toast("获取自定义列表失败");
      }
    }
  }
};
</script>

<style lang='less' scoped>
.entrust-list {
  padding: 0 15px;
  color: rgba(255, 255, 255, 1);
  .van-row {
    font-size: 14px;
    height: 75px;
    border-bottom: 1px dashed #14151c;
    .entrust-small {
      font-size: 12px;
    }
    p {
      height: 37.5px;
      line-height: 37.5px;
    }
    .van-col--10 {
      div {
        display: flex;
        padding-left: 20px;
        align-items: center;
        justify-content: space-between;
        img {
          width: 22px;
          height: 22px;
        }
        p {
          padding-right: 27px;
        }
      }
      p {
        text-align: right;
        padding-right: 25px;
      }
    }
    .van-row-right {
      height: 75px;
      line-height: 75px;
      text-align: right;
    }
    .van-col--7 {
      text-align: right;
      padding-right: 20px;
    }
  }
}
</style>