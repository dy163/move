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
              <p>
                <img src="@/assets/img/reduce.png" @click="priceReduceClick" />
                <input type="text" v-model="price" />
                <img src="@/assets/img/plus.png" @click="pricePlusClick" />
              </p>
            </div>
            <p class="purchase-show">最小价格变化0.001</p>
          </div>
          <div class="purchase-fluctuate">
            <div>
              <p>数量</p>
              <p>
                <img src="@/assets/img/reduce.png" alt @click="amountReduceClick" />
                <input type="text" v-model="amount" />
                <img src="@/assets/img/plus.png" alt @click="amountPlusClick" />
              </p>
            </div>
            <p class="purchase-show">最少交易数量1</p>
          </div>
          <!-- 简单操作 -->
          <div class="purchase-book">
            <van-button>1/4</van-button>
            <van-button>1/3</van-button>
            <van-button>1/2</van-button>
            <van-button>全部</van-button>
          </div>
          <!-- 现金可买 -->
          <div class="purchase-cash">
            <p>
              现金可买
              <span>0</span>
            </p>
          </div>
          <!-- 费率展示 -->
          <div class="purchase-rate">
            <p>手续费</p>
            <p>
              <img src="@/assets/img/mark.png" alt />
            </p>
            <p>约¥0.00</p>
            <p>订单金额</p>
            <p>¥0.00</p>
          </div>
          <!-- 控制交易 -->
          <div class="purchase-check">
            <p>盘前盘后交易</p>
            <p>
              <img src="@/assets/img/mark.png" />
            </p>
            <van-radio-group v-model="radio">
              <van-radio name="1">允许</van-radio>
            </van-radio-group>
            <van-radio-group v-model="radio">
              <van-radio name="2">不允许</van-radio>
            </van-radio-group>
          </div>
        </form>
      </div>
      <div class="purchase-space"></div>
      <div class="purchase-define">
        <p>
          实际金额
          <span>¥0.00</span>
        </p>
        <van-button @click.prevent="handleClickOrder">确认卖出</van-button>
      </div>
    </van-popup>

    <!-- 确定买入的遮罩层展示 -->
    <div class="purchase-cue">
      <van-popup v-model="shows" :close-on-click-overlay="false">
        <div>
          <p>由于订单金额过小，无法支付手续费，请修改卖出股数重新提交订单</p>
          <van-button round @click.prevent="shows = false">确 定</van-button>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
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
      radio: '',
      shows: false,
      showes: false,
      amount: 0,
      price: 0.015
    }
  },
  methods: {
    handleClickCancel () {
      this.$emit('input', false)
    },
    // 价格的加减
    priceReduceClick () {
      if (this.price === 0) {
      } else {
        let temp = this.price * 1000
        temp--
        let price = temp / 1000
        this.price = price
      }
    },
    pricePlusClick () {
      let temp = this.price * 1000
      temp++
      let price = temp / 1000
      this.price = price
    },
    // 数量的加减
    amountReduceClick () {
      if (this.amount === 0) {
      } else {
        this.amount--
      }
    },
    amountPlusClick () {
      this.amount++
    },
    handleClickOrder () {
      //   this.$toast('请填写正确得卖出数量')
      this.shows = true
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
      .purchase-fluctuate {
        font-size: 14px;
        padding: 15px 0;
        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          p:nth-child(2) {
            display: flex;
            align-items: center;
            input {
              height: 25px;
              width: 163px;
              border: 0px;
              text-align: center;
              border-bottom: 1px solid #14151c;
              background: none;
              outline: none;
              color: rgba(255, 255, 255, 1);
              margin: 0 5px;
            }
          }
        }
        .purchase-show {
          text-align: right;
          font-size: 12px;
          color: rgba(114, 115, 121, 1);
          padding-right: 62px;
          padding-top: 5px;
        }
      }
      .purchase-book {
        display: flex;
        justify-content: space-around;
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
        color: rgba(114, 115, 121, 1);
        padding-top: 15px;
        span {
          padding-left: 12px;
        }
      }
      .purchase-rate {
        display: flex;
        align-items: center;
        padding-top: 10px;
        font-size: 12px;
        color: rgba(114, 115, 121, 1);
        p:nth-child(1) {
          padding-right: 4px;
        }
        img {
          width: 12px;
          height: 12px;
          display: flex;
          align-items: center;
          padding-right: 5px;
        }
        p:nth-child(3) {
          color: rgba(163, 163, 167, 1);
          padding-right: 20px;
        }
        p:nth-child(4) {
          padding-right: 8px;
        }
        p:nth-child(5) {
          color: rgba(47, 152, 255, 1);
        }
      }
      .purchase-check {
        display: flex;
        align-items: center;
        font-family: PingFangSC-Regular, PingFangSC;
        color: rgba(163, 163, 167, 1);
        font-size: 14px;
        padding-top: 10px;
        p:nth-child(1) {
          padding-right: 4px;
        }
        img {
          display: flex;
          align-items: center;
          width: 14px;
          height: 14px;
          padding-right: 30px;
        }
        .van-radio {
          /deep/.van-radio__icon {
            font-size: 12px;
          }
          /deep/.van-radio__label {
            color: #fff;
            font-size: 12px;
            padding-right: 15px;
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
    width: 375px;
    background: rgba(54, 55, 64, 1);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p {
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 20px;
      span {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(47, 152, 255, 1);
        padding: 0 8px;
      }
    }
    .van-button--default {
      background: rgba(47, 152, 255, 1);
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
