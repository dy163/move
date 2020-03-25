<template>
  <div class="purchase">
    <van-popup
      :value="value"
      @input="$emit('input', $event)"
      position="bottom"
      :close-on-click-overlay="false"
    >
      <div class="purchase-content">
        <div class="purchase-latest">
          <img src="@/assets/img/close.png" @click="handleClickCancel" />
        </div>
        <form>
          <!-- 自定义输入 -->
          <div class="purchase-fluctuate">
            <div>
              <p>限价</p>
              <van-stepper v-model="price" min="0.00" step="0.01" :decimal-length="2" @change="onChangePrice"/>
            </div>
            <p class="purchase-show">最小价格变化0.01</p>
          </div>
          <div class="purchase-fluctuate">
            <div>
              <p>数量</p>
              <van-stepper v-model="amount" default-value='0' min="100" step="100" integer @change="onChangeAmount" />
            </div>
            <p class="purchase-show">最少交易数量1</p>
          </div>
          <!-- 简单操作 -->
          <div class="purchase-book">
            <van-button @click.prevent="handleOneQuarter">1/4</van-button>
            <van-button @click.prevent="handleOneThird">1/3</van-button>
            <van-button @click.prevent="handleClickAHalf">1/2</van-button>
            <van-button @click.prevent="handleAll">全部</van-button>
          </div>
          <!-- 现金可买 -->
          <div class="purchase-cash">
            <p>
              参考可买
              <span>{{ buyInfo.buyQuantity }}</span>
            </p>
          </div>
          <div class="purchase-up-down">
            <van-row>
              <van-col span="4">涨停</van-col>
              <van-col span="8">{{ limitUp }}</van-col>
              <van-col span="4">跌停</van-col>
              <van-col span="8">{{ limitDown }}</van-col>
            </van-row>
          </div>
          <!-- 费率展示 -->
          <div class="purchase-rate">
            <van-row>
              <van-col span="3">手续费</van-col>
              <van-col span="2">
                <div>
                  <img src="@/assets/img/mark.png" alt />
                </div>
              </van-col>
              <van-col span="7"><span>约¥</span><span>{{ serviceFee }}</span></van-col>
              <van-col span="4">订单金额</van-col>
              <van-col span="6"><span>¥</span><span>{{ orderAmount }}</span></van-col>
            </van-row>
          </div>
        </form>
      </div>
      <div class="purchase-space"></div>
      <div class="purchase-define">
        <van-row>
          <van-col span="12">实际金额</van-col>
          <van-col span="4"><span>¥{{ actualAmount }}</span></van-col>
          <van-col span="8"><van-button @click.prevent="handleClickOrder">确认买入</van-button></van-col>
        </van-row>
      </div>
    </van-popup>
    <!-- 确定买入的遮罩层展示 -->
    <!-- <div class="purchase-cue">
      <van-popup v-model="shows" :close-on-click-overlay="false">
        <div>
          <p>由于订单金额过小，无法支付手续费，请修改卖出股数重新提交订单</p>
          <van-button round @click.prevent="shows = false">确 定</van-button>
        </div>
      </van-popup>
    </div> -->
  </div>
</template>

<script>
import { entrustBail, entrustGetBuyInfo } from "@/api/stock";

export default {
  name: 'Purchase',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      radio: '2',  // 盘前盘后交易控制单选框
      shows: false,   // 确定买入遮罩层的展示
      amount: 0,  // 数量
      price: 0,   // 价格
      // record: []
      buyInfo:[],   // 存放参数
      limitUp: '',
      limitDown: '',
      serviceFee: '',   // 手续费
      orderAmount: '',    // 订单金额
      actualAmount: '',    // 实际金额
      // orderMonay: ''
    }
  },
  created() {
    this.handleUpDown()
    this.handleGetBuyInfo()
  },
  methods: {
    handleClickCancel () {
      this.$emit('input', false)
      this.amount = 0
      this.price = 0
    },
    // 四分之一
    handleOneQuarter () {
      this.amount = this.buyInfo.buyQuantity / 4
    },
    // 三分之一
    handleOneThird () {
      this.amount = this.buyInfo.buyQuantity / 3
    },
    // 二分之一
    handleClickAHalf () {
      this.amount = this.buyInfo.buyQuantity / 2
    },
    // 全部
    handleAll () {
      this.amount = this.buyInfo.buyQuantity
    },
    // 涨跌展示
    handleUpDown (q) {
      const up = JSON.parse(this.$route.query.q).open * 1.1
      this.limitUp = up.toFixed(2)
      const down = JSON.parse(this.$route.query.q).open * 0.9
      this.limitDown = down.toFixed(2)
    },
    // 数量步进器
    onChangeAmount (value) {
      this.amount = value;
      const data = (this.price * this.amount * this.buyInfo.rate).toFixed(2)
      this.serviceFee = data <= 5? '5' : data
      this.orderAmount = (this.price * this.amount).toFixed(2)
      // const actual = this.orderAmount + this.serviceFee
      // this.actualAmount = actual <= 0? '0' : actual
      if(data <= 5) {
        this.actualAmount =Number(this.orderAmount)  + 5
      } else {
        this.actualAmount =Number(this.orderAmount) + Number(this.serviceFee) 
      }
    },
    // 价格步进
    onChangePrice (value) {
      this.price = value;
      const data = (this.price * this.amount * this.buyInfo.rate).toFixed(2)
      this.serviceFee = data <= 5? '5' : data
      this.orderAmount = (this.price * this.amount).toFixed(2)
      if(data <= 5) {
        this.actualAmount =Number(this.orderAmount)  + 5
      } else {
        this.actualAmount =Number(this.orderAmount) + Number(this.serviceFee) 
      }
    },
    // 买入信息展示
    async handleGetBuyInfo (q) {
      try {
        const formData = new FormData()
        formData.append('stock_code', JSON.parse(this.$route.query.q).stock_code)
        const res = await entrustGetBuyInfo(formData)
        this.buyInfo = res.data.result
      } catch (error) {
        this.$toast("获取买入信息失败")
      }
    },
    // 点击委托买入
    async handleClickOrder (q) {
      try {
        const record = JSON.parse(this.$route.query.q)
        if(this.price > record.current_price * 1.1) {
          this.$toast("委托价格超出范围，请重新输入价格")
        } else if(this.price < record.current_price * 0.9) {
          this.$toast("委托价格超出范围，请重新输入价格")
        } else {
          const query =  Object.assign({
            stock_code: record.stock_code,
            stock_name: record.stock_name,
            entrust_quantity: this.amount,
            entrust_price: this.price
          },query)
          const res = await entrustBail(query)
          if(res.data.status) {
            this.$toast("委托买入成功")
            this.$emit('input', false)
            this.amount = 0
            this.price = 0
          } 
        } 

      } catch (error) {
        this.$toast("委托买入失败");
      }
    }
  }
}
</script>

<style lang='less' scoped>
.purchase {
  background: rgba(0, 0, 0, 1);
  font-family: PingFangSC-Regular, PingFang SC;
  color: rgba(163, 163, 167, 1);
  .purchase-content {
    height: 320px;
    background: rgba(54, 55, 64, 1);
    .purchase-latest {
      height: 36px;
      padding: 0 15px;
      text-align: right;
      img {
        width: 18px;
        height: 16px;
      }
    }
    form {
      padding: 0 16px;
      border-top: 1px solid #000;
      box-sizing: border-box;
      .purchase-fluctuate {
        font-size: 14px;
        padding-top: 15px;
        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          /deep/.van-stepper {
            .van-stepper__minus {
              color: rgba(47, 152, 255, 1);
              background: rgba(54, 55, 64, 1);
              border: 1px solid rgba(47, 152, 255, 1);
            }
            .van-stepper__plus {
              color: rgba(47, 152, 255, 1);
              background: rgba(54, 55, 64, 1);
              border: 1px solid rgba(47, 152, 255, 1);
            }
            .van-stepper__input { 
              margin: 0 8px;
              width: 163px;
              border-radius: 2px;
              color: #fff;
              background: rgba(54, 55, 64, 1);
              border-bottom: 1px solid rgb(12, 11, 11);
            }
          }
        }
        .purchase-show {
          text-align: right;
          font-size: 12px;
          color: rgba(114, 115, 121, 1);
          padding-right: 62px;
          padding-top: 6px;
        }
      }
      .purchase-book {
        display: flex;
        justify-content: space-around;
        padding-top: 15px;
        .van-button {
          border: 1px solid #000;
          width: 75px;
          height: 24px;
          line-height: 24px;
          background: rgba(54, 55, 64, 1);
          color: rgba(163, 163, 167, 1);
        }
        /deep/.van-button--normal {
          padding: 0;
        }
      }
      .purchase-cash {
        font-size: 12px;
        padding-top: 15px;
        span {
          padding-left: 12px;
        }
      }
      .purchase-up-down {
        font-size: 12px;
        padding-top: 15px;
        .van-row {
          .van-col:nth-child(2) {
            color: rgba(245, 69, 69, 1);
          }
          .van-col:nth-child(4) {
            color: rgba(51, 192, 137, 1);
          }
        }
      }
      .purchase-rate {
        padding-top: 15px;
        font-size: 12px;
        /deep/.van-row {
          .van-col--2 {
            text-align: center;
            div{
              height: 12px;
              line-height: 12px;
              img {
                width: 12px;
                height: 12px;
                vertical-align: middle;
              }
            }
          } 
        }
      }
    }
  }
  .purchase-space {
    height: 27px;
    background: rgba(0, 0, 0, 1);
  }
  .purchase-define {
    font-size: 14px;
    background: rgba(54, 55, 64, 1);
    .van-row {
      display: flex;
      align-items: center;
      .van-col:nth-child(1) {
        text-align: right;
      }
      .van-col:nth-child(2) {
        color: rgba(47, 152, 255, 1);
        span {
          margin-left: 8px;
        }
      }
      .van-col:nth-child(3) {
        text-align: right;
      }
    }
    .van-button--default {
      background: rgb(248, 25, 25);
      color: #fff;
    }
  }
  .purchase-cue {
    div {
      width: 300px;
      height: 164px;
      background: rgba(32, 33, 43, 1);
      border-radius: 3px;
      text-align: center;
      font-family: PingFangSC-Regular, PingFangSC;
      color: #fff;
      p {
        padding: 28px 21px;
        height: 44px;
        font-size: 14px;
        line-height: 22px;
      }
      .van-button {
        width: 227px;
        height: 38px;
        line-height: 38px;
        background: rgba(47, 152, 255, 1);
        color: #fff;
        font-size: 16px;
      }
    }
  }
}
</style>
