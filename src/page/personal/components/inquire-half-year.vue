<template>
  <div class="inquire-content">
    <van-list v-model="loading" :finished="upFinished" finished-text="没有更多了" @load="onLoad">
      <div v-for="(item,index) in list" :key="index">
        <p>
          {{ item.stock_name }}
          <span>{{ item.stock_code }}</span>
        </p>
        <div class="inquire-list">
          <van-row type="flex" justify="space-between">
            <van-col span="6">买卖方向</van-col>
            <van-col
              span="6"
              :style="{color:item.buy_or_sell === '买入'? 'green' : 'red'}"
            >{{ item.buy_or_sell }}</van-col>
            <van-col span="6">成交状态</van-col>
            <van-col span="6">已成</van-col>
          </van-row>
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
    <img src="@/assets/img/hollow.png" v-show="false" />
  </div>
</template>

<script>
import { bargainHistory } from "@/api/stock";

export default {
  data() {
    return {
      list: [],
      listNum: [],
      loading: false, // 列表加载
      upFinished: false, //上拉加载完毕
      pageNum: 1,
      pageSize: 8
    };
  },
  created () {
    this.$toast.setDefaultOptions({ duration: 800 });   // vant 消息提示展示时间
  },
  methods: {
    // 异步更新数据
    onLoad() {
      setTimeout(() => {
        this.loading = false;
        this.handleColseJune();
        this.loading = true;
      }, 1000);
    },
    /**
     * 半年点击
     */
    async handleColseJune() {
      try {
        const formData = new FormData();
        formData.append("time_range", 4);
        formData.append("pageNum", this.pageNum);
        formData.append("pageSize", this.pageSize);
        const res = await bargainHistory(formData);
        // 判断展示登录状态
        if(res.data.result === null) {
          this.$toast("半年成交历史为空");
          this.loading = false;
          this.upFinished = true;
        } else if(res.data.login === false)  {
          window.localStorage.removeItem('sessionid')
          this.$toast("用户未登录，请重新登录");
          this.loading = false;
          this.upFinished = true;
        } else {
          this.$toast("获取半年成交历史列表成功");
          this.listNum = res.data.result.list;
          this.loading = false;
          this.list = this.list.concat(this.listNum);
          formData.append("pageNum", this.pageNum++);
          if (this.listNum.length < this.pageSize) {
            this.upFinished = true;
          }
        }
      } catch (error) {
        this.$toast("获取半年成交历史列表失败");
      }
    }
  }
};
</script>

<style lang='less' scoped>
.inquire-content {
  text-align: center;
  font-family: PingFangSC-Regular, PingFang SC;
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
</style>