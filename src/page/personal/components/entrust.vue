<template>
  <div class="entrust">
    <van-nav-bar title="成交查询" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="entrust-content">
      <div class="entrust-content-header">
        <van-row>
          <van-col span="5">证劵名称</van-col>
          <van-col span="7" class="header-style">委托价格/时间</van-col>
          <van-col span="7" class="header-style">委托数量/成交</van-col>
          <van-col span="5" class="header-style">状态</van-col>
        </van-row>
      </div>
      <div class="entrust-content-include">
        <div class="entrust-content-table">
          <div>
            <van-row>
              <van-col span="5">贵州茅台</van-col>
              <van-col span="2">
                <img src="@/assets/bill.png" />
              </van-col>
              <van-col span="5" class="table-money">30.21元</van-col>
              <van-col span="7" class="entrust-content-big">1,600</van-col>
            </van-row>
            <van-row>
              <van-col span="5">102931</van-col>
              <van-col span="9">2017-10-05 10:22</van-col>
              <van-col span="5" class="entrust-content-small">1,600</van-col>
            </van-row>
          </div>
        </div>
        <p class="entrust-content-state">已成</p>
      </div>
      <div class="entrust-content-include">
        <div class="entrust-content-table">
          <div>
            <van-row>
              <van-col span="5">茅台</van-col>
              <van-col span="2">
                <img src="@/assets/sell.png" />
              </van-col>
              <van-col span="5" class="table-money">30.21元</van-col>
              <van-col span="7" class="entrust-content-big">1,600</van-col>
            </van-row>
            <van-row>
              <van-col span="5">102931</van-col>
              <van-col span="9">2017-10-05 10:22</van-col>
              <van-col span="5" class="entrust-content-small">1,600</van-col>
            </van-row>
          </div>
        </div>
        <p class="entrust-content-state">已成</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Entrust",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='less' scoped>
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
    border-bottom: 1px dotted rgba(124, 124, 130, 1);
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
</style>