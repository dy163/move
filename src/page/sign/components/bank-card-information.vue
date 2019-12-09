<template>
  <div class="bank-card">
    <van-nav-bar title="添加银行卡" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="bank-card-content">
      <div class="bank-card-content-top">
        <p>填写您本人的收款银行卡信息</p>
        <p>为保资金准确到账，请务必认真填写。(仅支持储蓄卡)</p>
      </div>
      <form>
        <!-- 选择银行下拉框 -->
        <div class="selectBox">
          <div class="selectBox_show" v-on:click.stop="isShowSelect = !isShowSelect">
            <!-- <input type="text" name="unit" v-model="unitModel"  placeholder="请选择" disabled/> -->
            <van-cell-group>
              <van-field
                label="账户"
                v-model="unitModel"
                placeholder="请选择银行"
                disabled
                right-icon="arrow-down"
              />
            </van-cell-group>
          </div>
          <div class="selectBox_list" v-show="isShowSelect">
            <div
              class="selectBox_listLi"
              v-for="(item, index) in dataList"
              :key="item.id"
              @click.stop="select(item, index)"
            >{{item.value}}</div>
          </div>
        </div>
        <!-- 其他得项目输入框 -->
        <van-cell-group>
          <van-field label="银行卡号" v-model="user.card" placeholder="请输入银行卡号" />
        </van-cell-group>
        <van-cell-group>
          <van-field label="预留手机号" v-model="user.phone" placeholder="请填写银行预留手机号" />
        </van-cell-group>
        <van-cell-group>
          <van-field label="开户行" v-model="user.name" placeholder="请输入开户行名称" />
        </van-cell-group>
      </form>
      <!-- 温馨提示 -->
      <div class="bank-card-content-tips">
        <h3>温馨提示：</h3>
        <p>1. 绑定银行账户开户人必须与注册的证券账号同名，不支持绑定他人的银行账户</p>
        <p>2. 由于账号信息错误导致的出金无法到账及其产生的手续费扣款将由用户自行承担。</p>
        <p>3. 节假日及休市期间银行不处理资金业务，可能影响支付资金的到账时间。以实际到账时间为准，某某证券拥有解释权。</p>
      </div>
    </div>
    <div>
      <van-button color="#2F98FF" @click.prevent="handeleClickQuestion" class="bank-card-btn">确认</van-button>
    </div>
    <!-- 提示弹窗 -->
    <van-dialog
      use-slot
      title="请确认信息无误！"
      v-model="showes"
      :showConfirmButton="false"
      class="bank-card-dialog"
    >
      <p>由于账号信息错误导致出金金额无法到账及其产生的手续费扣款将由用户自行承担。</p>
      <van-radio-group v-model="radio">
        <van-radio name="1">
          <span>同意</span>
          <router-link to="/payment-agreement">《服务协议》</router-link>
        </van-radio>
      </van-radio-group>
      <div class="card-line"></div>
      <div class="bank-btn">
        <span></span>
        <van-button color="#363740" class="cancel" @click.prevent="showes = false">取消</van-button>
        <span class="crevice"></span>
        <van-button color="#2F98FF" class="cancel" @click.prevent="handeleClickConfirm">确认</van-button>
      </div>
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: "BankCardInformation",
  data() {
    return {
      unitModel: "",
      isShowSelect: false,
      dataList: [
        { key: 0, value: "中国建设银行" },
        { key: 1, value: "中国农业银行" },
        { key: 2, value: "中国工商银行" }
      ],
      user: {
        bank: "",
        card: "",
        phone: "",
        name: ""
      },
      showes: false,
      radio: ""
    };
  },
  created() {
    this.$toast.setDefaultOptions({ duration: 1000 });
  },
  methods: {
    // 确认按钮
    handeleClickQuestion() {
      const card = this.user.card;
      const phone = this.user.phone;
      const name = this.user.name;
      const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
      const cardReg = /^([1-9]{1})(\d{14}|\d{18})$/;
      if (!card) {
        this.$toast("请正确填写银行卡号");
      } else if (!cardReg.test(card)) {
        this.$toast("卡号错误");
      } else if (!phone) {
        this.$toast("请填写手机号");
      } else if (!phoneReg.test(phone)) {
        this.$toast("手机号错误，请输入正确得手机号");
      } else if (!name) {
        this.$toast("请填写开户行名称");
      } else {
        this.showes = true;
      }
    },
    // 弹框展示按钮
    handeleClickConfirm() {
      this.$router.push({name:'sign',params: {type: 'bank-card-add'}});
      // this.$router.push("/bank-card-add");
    },
    // 选择银行方法
    select(item, index) {
      this.isShowSelect = false;
      this.unitModel = item.value;
    }
  }
};
</script>

<style lang="less" scoped>
// 下拉框选择银行样式
.selectBox {
  position: relative;
  .selectBox_list {
    position: absolute;
    color: #fff;
    z-index: 99999;
    background: rgba(23, 24, 34, 1);
    width: 100%;
    font-size: 14px;
    .selectBox_listLi {
      padding-left: 105px;
      height: 50px;
      line-height: 50px;
    }
  }
  /deep/.van-field__control {
    color: #fff;
  }
  /deep/.van-icon-arrow-down {
    font-size: 14px;
  }
}
// 其他样式
.bank-card {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #14151c;
}
.bank-card-content {
  padding: 0 15px;
  .bank-card-content-top {
    padding-top: 14px;
    p:nth-child(1) {
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 20px;
      padding-bottom: 5px;
    }
    p:nth-child(2) {
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC;
      font-weight: 400;
      color: rgba(114, 115, 121, 1);
      line-height: 17px;
      padding-bottom: 15px;
    }
  }
  .van-cell-group {
    margin-bottom: 8px;
    height: 50px;
    background: rgba(54, 55, 64, 1);
    box-sizing: border-box;
    border-radius: 5px;
    .van-cell {
      color: #a3a3a7;
    }
  }
  .bank-card-content-tips {
    h3 {
      padding-top: 16px;
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 17px;
      padding-bottom: 2px;
    }
    p {
      height: 40px;
      font-size: 12px;
      font-family: PingFangSC;
      font-weight: 400;
      color: rgba(114, 115, 121, 1);
      line-height: 20px;
    }
  }
}
.bank-card-btn {
  width: 100%;
  height: 44px;
  position: fixed;
  bottom: 0;
  .van-button__text {
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
}
.bank-card-dialog {
  width: 300px;
  height: 241px;
  background: rgba(32, 33, 43, 1);
  /deep/.van-dialog__header {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(255, 77, 77, 1);
    padding-top: 20px;
  }
  p {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFangSC;
    color: rgba(255, 255, 255, 1);
    padding: 15px 15px 20px 15px;
  }
  .card-line {
    height: 2px;
    width: 270px;
    background-color: #14151c;
    margin-left: 15px;
    margin-bottom: 15px;
  }
  .van-radio-group {
    height: 50px;
    width: 241px;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    .van-radio {
      height: 20px;
      width: 241px;
    }
    span {
      color: rgba(148, 148, 152, 1);
    }
    a {
      color: #2f98ff;
    }
  }
  .bank-btn {
    .crevice {
      display: inline-block;
      width: 4px;
    }
    .cancel {
      width: 103px;
      height: 38px;
      line-height: 38px;
      border-radius: 3px;
      margin-left: 30px;
      .van-button__text {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
/deep/.van-popup {
  background: #000;
}
/deep/.van-cell--clickable {
  background-color: rgba(54, 55, 64, 1);
  color: #fff;
  padding-left: 135px;
  border-bottom: 0;
}
/deep/.van-cell:not(:last-child)::after {
  border-bottom: 1px solid #000;
}
/deep/.van-popup--top {
  left: 15px;
}
</style>
