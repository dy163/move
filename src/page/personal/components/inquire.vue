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
          <div v-show="show">
            <span @click="handleShow">历史查询</span>
            <van-icon name="arrow" />
          </div>
          <div v-show="showes">
            <span @click="handleShowes">历史查询</span>
            <van-icon name="arrow-down" />
          </div>
        </van-col>
      </van-row>
      <!-- 展示时间遮罩 -->
      <van-popup 
        v-model="showes" 
        position="right" 
        :close-on-click-overlay='false'
        >
        <div style="color:#20212A">
          <van-cell title="一周之内" is-link @click="handleColse"/>
          <van-cell title="一月之内" is-link @click="handleColse"/>
          <van-cell title="三月之内" is-link @click="handleColse"/>
          <van-cell title="半年之内" is-link @click="handleColse"/>
          <van-cell title="一年之内" is-link @click="handleColse"/>
        </div>
      </van-popup>
    </div>
    <!-- 内容 -->
    <div class="inquire-content">
      <van-list>
        <div v-for="item in list" :key="item.id">
          <p>
            {{ item.title }}
            <span>{{ item.identifier }}</span>
          </p>
          <div class="inquire-list">
            <van-row type="flex" justify="space-between">
              <van-col span="6">委托方向</van-col>
              <van-col span="6">{{ item.sell? item.sell:item.buy }}</van-col>
              <van-col span="6">成交状态</van-col>
              <van-col span="6">已成</van-col>
            </van-row>
            <van-row>
              <van-col span="6">委托价格</van-col>
              <van-col span="6">{{ item.entrust }}</van-col>
              <van-col span="6">委托数量</van-col>
              <van-col span="6">{{ item.entrustAmount }}</van-col>
            </van-row>
            <van-row>
              <van-col span="6">成交金额</van-col>
              <van-col span="6">{{ item.money }}</van-col>
              <van-col span="6">成交价格</van-col>
              <van-col span="6">{{ item.clinch }}</van-col>
            </van-row>
            <van-row>
              <van-col span="6">成交数量</van-col>
              <van-col span="6">{{ item.clinchAmount }}</van-col>
              <van-col span="6">委托时间</van-col>
              <van-col span="6">{{ item.time }}</van-col>
            </van-row>
          </div>
        </div>
      </van-list>
      <!-- 默认得图片 -->
      <img src="@/assets/img/hollow.png" v-show="false" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Inquire",
  data() {
    return {
      show: true,
      showes:false,
      list: [
        {
          title: "贵州茅台",
          identifier: "102931",
          sell: "证券卖出",
          entrust: "16.23",
          entrustAmount: "100",
          money: "510",
          clinch: "16.23",
          clinchAmount: "100",
          time: "09:47:48"
        },
        {
          title: "贵州茅台",
          identifier: "102931",
          sell: "证券卖出",
          entrust: "16.23",
          entrustAmount: "100",
          money: "510",
          clinch: "16.23",
          clinchAmount: "100",
          time: "09:47:48"
        },
        {
          title: "贵州茅台",
          identifier: "102931",
          buy: "证券卖入",
          entrust: "16.23",
          entrustAmount: "100",
          money: "510",
          clinch: "16.23",
          clinchAmount: "100",
          time: "09:47:48"
        }
      ]
    };
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
    /**
     * 显示箭头朝向按钮
     */
    handleShow () {
      this.show = false
      this.showes = true
    },
    handleShowes() {
      this.showes = false
      this.show = true
    },
    /**
     * 时间遮罩关闭
     */
    handleColse() {
      this.showes = false
      this.show = true
    },
    /**
     * 今天查询关闭
     */
    handleToday() {
      this.showes = false
      this.show = true
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
      padding-bottom: 8px;
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
      .van-col:nth-child(3) {
        padding-left: 8px;
      }
    }
    .van-row:nth-child(4) {
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
      font-size: 16px;
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
</style>