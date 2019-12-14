<template>
  <div class="entrust">
    <van-nav-bar title="委托查询" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="entrust-header">
      <van-row>
        <van-col span="12" @click="handleToday">今日查询</van-col>
        <van-col span="12">
          <div v-show="show">
            <!-- <span @click="handleShow">历史查询</span> -->
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
    <!-- 标题指示 -->
    <div class="entrust-content">
      <div class="entrust-content-header">
        <van-row>
          <van-col span="5">证劵名称</van-col>
          <van-col span="7" class="header-style">委托价格/时间</van-col>
          <van-col span="7" class="header-style">委托数量/成交</van-col>
          <van-col span="5" class="header-style">状态</van-col>
        </van-row>
      </div>
      <van-list>
        <div class="entrust-content-include" v-for="item in list" :key="item.id">
          <div class="entrust-content-table">
            <div>
              <van-row>
                <van-col span="5">{{ item.title }}</van-col>
                <van-col span="2">
                  <img src="@/assets/bill.png? @/assets/bill.png:@/assets/sell.png" />
                </van-col>
                <van-col span="5" class="table-money">{{ item.money }}</van-col>
                <van-col span="7" class="entrust-content-big">{{ item.number }}</van-col>
              </van-row>
              <van-row>
                <van-col span="5">{{ item.identifier }}</van-col>
                <van-col span="9">{{ item.timer }}</van-col>
                <van-col span="5" class="entrust-content-small">{{ item.amount }}</van-col>
              </van-row>
            </div>
          </div>
          <p class="entrust-content-state">已成</p>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "Entrust",
  data() {
    return {
      show: true,
      showes:false,
      // showes:true,
      list: [
        { title:'贵州茅台',money: '30.21元',number: '1,600',identifier: '102931',timer: '2017-10-05 10:22', amount: '1,600' },
        { title:'茅台',money: '30.21元',number: '1,600',identifier: '102931',timer: '2017-10-05 10:22', amount: '1,600' }
      ]
    };
  },
  created() {

  },
  methods: {
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
.entrust-content {
  position: fixed;
  background: rgba(23, 24, 34, 1);
  height: 100%;
  width: 100%;
  .entrust-content-header {
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
  .entrust-content-include {
    font-size: 14px;
    margin: 0 15px;
    padding: 15px 0;
    border-bottom: 1px dotted #2E2E2E;
    color: rgba(255, 255, 255, 1);
    position: relative;
    .entrust-content-table {
      .van-row {
        img {
          width: 18px;
          display: flex;
          align-items: center;
          margin-right: 0;
        }
        .table-money,
        .entrust-content-small,
        .entrust-content-big,
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
    .entrust-content-state {
      position: absolute;
      right: 0;
      top: 25px;
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