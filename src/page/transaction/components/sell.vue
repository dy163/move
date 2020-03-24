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
              <van-stepper v-model="price" min="0.00" step="0.01" :decimal-length="2" />
            </div>
            <p class="purchase-show">最小价格变化0.01</p>
          </div>
          <div class="purchase-fluctuate">
            <div>
              <p>数量</p>
              <van-stepper v-model="amount" default-value='0' min="100" step="100" integer />
            </div>
            <p class="purchase-show">最少交易数量100</p>
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
              参考可卖
              <span>0</span>
            </p>
          </div>
          <!-- 涨停展示 -->
          <div class="purchase-up-down">
            <van-row>
              <van-col span="4">涨停</van-col>
              <van-col span="8">31</van-col>
              <van-col span="4">跌停</van-col>
              <van-col span="8">1231</van-col>
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
              <van-col span="7"><span>约¥</span><span>0.00</span></van-col>
              <van-col span="4">订单金额</van-col>
              <van-col span="6"><span>¥</span><span>0.00</span></van-col>
            </van-row>
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

    <!-- 确定卖出的遮罩层展示 -->
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
import { entrustSell } from "@/api/stock";

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
      num: '',
      radio: '2',   // 单选框定义
      shows: false,  // 确定卖出的遮罩层
      amount: 100,  // 数量
      price: 0,    // 价格
      recordSell: []  // 路由导航存放数据（id）
    }
  },
  methods: {
    handleClickCancel () {
      this.$emit('input', false)
      this.amount = 0
      this.price = 0
    },
    async handleClickOrder (q) {
      try {
        const recordSell = JSON.parse(this.$route.query.q)
        if(this.price > recordSell.current_price * 1.1) {
          this.$toast("委托价格超出范围，请重新输入价格")
        } else {
          const query =  Object.assign({
            stock_code: recordSell.stock_code,
            stock_name: recordSell.stock_name,
            entrust_quantity: this.amount,
            entrust_price: this.price
          },query)
          const res = await entrustSell(query)
          if(res.data.status) {
            this.$toast("委托卖出成功")
            this.$emit('input', false)
            this.amount = 0
            this.price = 0
          } else if(res.data.result === 401 ) {
            this.$toast("请重新登录")
          }
        }
        //   else {
        //   const data = this.amount * this.price
        //   if(data < 100) {        //  这个位置需要一个判断
        //     this.shows = true     // 控制弹窗的按钮
        //   }
        // }
      } catch (error) {
        this.$toast("委托卖出失败");
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
      padding: 0 15px;
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
