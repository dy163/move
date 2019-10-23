<template>
    <div class="purchase">
        <form>
            <van-popup
            :value="value"
            @input="$emit('input', $event)"
            position="bottom"
            :close-on-click-overlay="leave">
                <div class="purchase-popup">
                    <div class="purchase-add">
                        <img src="@/assets/img/close.png" @click="handleClickCancel">
                    </div>
                    <div class="purchase-fluctuate">
                        <div>
                            <p>限价</p>
                            <p>
                                <img src="@/assets/img/reduce.png"  @click="priceReduceClick">
                                <input type="text" v-model="price">
                                <img src="@/assets/img/plus.png" @click="pricePlusClick">
                            </p>
                        </div>
                        <p class="purchase-show">最小价格变化0.001</p>
                    </div>
                    <div class="purchase-fluctuate">
                        <div>
                            <p>数量</p>
                            <p>
                                <img src="@/assets/img/reduce.png" alt="" @click="amountReduceClick">
                                <input type="text" v-model="amount">
                                <img src="@/assets/img/plus.png" alt="" @click="amountPlusClick">
                            </p>
                        </div>
                        <p class="purchase-show">最少交易数量1</p>
                    </div>
                    <div class="purchase-book">
                        <p>1/4</p>
                        <p>1/3</p>
                        <p>1/2</p>
                        <p>全仓</p>
                    </div>
                    <div class="purchase-cash">
                        <p>现金可买<span>0</span></p>
                    </div>
                    <div class="purchase-rate">
                        <p>手续费</p>
                        <p><img src="@/assets/img/mark.png" alt=""></p>
                        <p>约¥0.00</p>
                        <p>订单金额</p>
                        <p>¥0.00</p>
                    </div>
                    <div class="purchase-check">
                        <p>盘前盘后交易</p>
                        <p><img src="@/assets/img/mark.png"></p>
                        <van-radio-group v-model="radio">
                            <van-radio name="1">允许</van-radio>
                        </van-radio-group>
                        <van-radio-group v-model="radio">
                            <van-radio name="2">不允许</van-radio>
                        </van-radio-group>
                    </div>
                </div>
                <div class="purchase-space"></div>
                <div class="purchase-define">
                    <p>实际金额 <span>¥0.00</span></p>
                    <van-button
                    @click="handleClickOrder"
                    @click.prevent="handleClickOrder">
                    确认买入</van-button>
                </div>
            </van-popup>
        </form>
        <!-- 确定买入的遮罩层展示 -->
        <div class="purchase-cue">
            <van-popup v-model="shows" :close-on-click-overlay="leave">
                <div>
                    <p>由于订单金额过小，无法支付手续费，请修改卖出股数重新提交订单</p>
                    <van-button round @click="shows = false">确 定</van-button>
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
      leave: false,
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
    background:rgba(0,0,0,0.6);
    .purchase-popup {
        height:325px;
        width: 375px;
        background:rgba(54,55,64,1);
        .purchase-add {
            border-bottom: 1px solid #000;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            img {
                padding-right: 16px;
            }
        }
        .purchase-fluctuate {
            padding: 0 16px;
            div {
                display: flex;
                justify-content: space-between;
                height: 50px;
                align-items: center;
                p:nth-child(1) {
                    width:30px;
                    height:20px;
                    font-size:14px;
                    font-family:PingFangSC-Regular,PingFangSC;
                    font-weight:400;
                    color:rgba(163,163,167,1);
                    line-height:20px;
                }
                p:nth-child(2) {
                    display: flex;
                    align-items: center;
                    height: 71px;
                    input {
                        height: 23px;
                        width: 163px;
                        border:0px;
                        text-align: center;
                        border-bottom: 1px solid #14151C;
                        background:none;
                        outline:none;
                        font-size:14px;
                        font-family:PingFangSC-Regular,PingFangSC;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        margin: 0 5px;
                    }
                }
            }
            .purchase-show {
                text-align: right;
                height:17px;
                font-size:12px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(114,115,121,1);
                line-height:17px;
                padding-right: 62px;
            }
        }
        .purchase-book {
            display: flex;
            justify-content: space-around;
            padding-top: 15px;
            p {
                width:75px;
                height:24px;
                line-height: 24px;
                border:1px solid rgba(22,24,34,1);
                font-size:14px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(163,163,167,1);
                text-align: center;
            }
        }
        .purchase-cash {
            height:17px;
            font-size:12px;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            color:rgba(114,115,121,1);
            line-height:17px;
            padding: 13px 15px;
            span {
                padding-left: 12px;
            }
        }
        .purchase-rate {
            display: flex;
            align-items: center;
            padding: 0 15px;
            p:nth-child(1) {
                // width:38px;
                font-size:12px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(114,115,121,1);
                padding-right: 4px;
            }
            p:nth-child(2) {
                img {
                    display: flex;
                    align-items: center;
                    padding-right: 5px;
                }
            }
            p:nth-child(3) {
                font-size:12px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(163,163,167,1);
                padding-right: 20px;
            }
            p:nth-child(4) {
                font-size:12px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(114,115,121,1);
                padding-right: 8px;
            }
            p:nth-child(5) {
                font-size:12px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(47,152,255,1);
            }
        }
        .purchase-check {
            display: flex;
            align-items: center;
            padding: 15px;
            p:nth-child(1) {
                height:20px;
                font-size:14px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(163,163,167,1);
                line-height:20px;
                padding-right: 4px;
            }
            img {
                display: flex;
                align-items: center;
                width: 16px;
                height: 16px;
                padding-right: 30px;
            }
            .van-radio {
                /deep/.van-radio__label  {
                    color: #fff;
                    font-size:12px;
                    font-family:PingFangSC-Regular,PingFangSC;
                    font-weight:400;
                    padding-right: 15px;
                }
            }
        }
    }
    .purchase-space {
        height: 27px;
        background:rgba(0,0,0,1);
    }
    .purchase-define {
        width:375px;
        background:rgba(54,55,64,1);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        p {
            height:20px;
            font-size:14px;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:20px;
            span {
                font-size:14px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(47,152,255,1);
                padding: 0 8px;
            }
        }
        .van-button--default {
            background:rgba(47,152,255,1);
            color: #fff;
        }
    }
    .purchase-cue {
        div {
            width:300px;
            height:164px;
            background:rgba(32,33,43,1);
            border-radius:3px;
            text-align: center;
            font-family:PingFangSC-Regular,PingFangSC;
            color:#fff;
            p {
                padding: 28px 21px;
                height:44px;
                font-size:14px;
                line-height:22px;
            }
            .van-button {
                width:227px;
                height:38px;
                line-height: 38px;
                background:rgba(47,152,255,1);
                color: #fff;
                font-size:16px;
            }
        }
    }
}
.van-button {
    border: 0;
}
</style>
