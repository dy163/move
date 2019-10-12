<template>
    <div class="bank-card">
        <van-nav-bar
        title="添加银行卡"
        left-arrow
        @click-left="$router.back()"
        />
        <div class="bank-card-content">
            <div class="bank-card-content-top">
                <p>填写您本人的收款银行卡信息</p>
                <p>为保资金准确到账，请务必认真填写。(仅支持储蓄卡)</p>
            </div>
            <form>
                <van-cell-group>
                    <van-field label="银行" v-model="bank" placeholder="请输入银行" right-icon="arrow-down"/>
                </van-cell-group>
                <van-cell-group>
                    <van-field label="银行卡号" v-model="card" placeholder="请输入银行卡号" />
                </van-cell-group>
                <van-cell-group>
                    <van-field label="预留手机号" v-model="phone" placeholder="请填写银行预留手机号" />
                </van-cell-group>
                <van-cell-group>
                    <van-field label="开户行" v-model="user" placeholder="请输入开户行名称" />
                </van-cell-group>
            </form>
            <div class="bank-card-content-tips">
                <h3>温馨提示：</h3>
                <p>1. 绑定银行账户开户人必须与注册的证券账号同名，不支持绑定他人的银行账户</p>
                <p>2. 由于账号信息错误导致的出金无法到账及其产生的手续费扣款将由用户自行承担。</p>
                <p>3. 节假日及休市期间银行不处理资金业务，可能影响支付资金的到账时间。以实际到账时间为准，某某证券拥有解释权。</p>
            </div>
        </div>
        <div >
            <van-button color="#2F98FF" @click="showes = true" class="bank-card-btn">确认</van-button>
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
                <van-radio name="1"> <span>同意</span> <router-link to="/payment-agreement">《服务协议》</router-link></van-radio>
            </van-radio-group>
            <div class="card-line">
            </div>
            <div class="bank-btn">
                <span></span>
                <van-button color="#363740" class="cancel" @click="showes = false">取消</van-button>
                <span class="crevice"></span>
                <van-button color="#2F98FF" class="cancel" @click="handeleClickConfirm">确认</van-button>
            </div>
        </van-dialog>
    </div>
</template>

<script>
export default {
  name: 'BankCardInformation',
  data () {
    return {
      bank: '',
      card: '',
      phone: '',
      user: '',
      showes: false,
      radio: '',
      leave: false
    }
  },
  methods: {
    handeleClickConfirm () {
      this.$router.push('/bank-card-add')
    }
  }
}
</script>

<style lang="less" scoped>
.bank-card {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #14151C;
}
.bank-card-content {
    padding: 0 15px;
    .bank-card-content-top {
        padding-top: 14px;
        p:nth-child(1) {
            height:20px;
            font-size:14px;
            font-family:PingFangSC;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:20px;
            padding-bottom: 5px;
        }
        p:nth-child(2) {
            height:17px;
            font-size:12px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(114,115,121,1);
            line-height:17px;
            padding-bottom: 15px;
        }
    }
    .van-cell-group {
        margin-bottom: 8px;
        padding: 4px 0;
        height:50px;
        background:rgba(54,55,64,1);
        border-radius:6px;
        box-sizing: border-box;
        .van-cell {
            color: #A3A3A7;
            background-color:#353641;
        }
    }
    .bank-card-content-tips {
        h3 {
            padding-top: 16px;
            height:17px;
            font-size:12px;
            font-family:PingFangSC;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:17px;
        }
        p {
            height:40px;
            font-size:12px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(114,115,121,1);
            line-height:20px;
        }
    }
}
.bank-card-btn {
    width: 100%;
    height:44px;
    position: fixed;
    bottom: 0;
    .van-button__text {
        font-size:16px;
        font-family:PingFangSC;
        font-weight:500;
        color:rgba(255,255,255,1);
    }
}
.bank-card-dialog {
    width: 300px;
    height: 241px;
    background:rgba(32,33,43,1);
    /deep/.van-dialog__header {
        font-size:14px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,77,77,1);
        padding-top: 20px;
    }
    p {
        font-size:14px;
        font-family:PingFangSC-Regular,PingFangSC;
        color:rgba(255,255,255,1);
        padding: 15px 15px 20px 15px;
    }
    .card-line {
        height: 2px;
        width: 270px;
        background-color: #14151C;
        margin-left: 15px;
        margin-bottom: 15px;
    }
    .van-radio-group {
            height: 50px;
            width: 241px;
            padding: 0 15px;
            box-sizing: border-box;
            font-size:12px;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            .van-radio {
                height: 20px;
                width: 241px;
            }
            span {
                color: rgba(148,148,152,1);
            }
            a {
                color: #2F98FF;
            }
    }
    .bank-btn {
        .crevice {
            display: inline-block;
            width: 4px;
        }
        .cancel {
            width:103px;
            height:38px;
            line-height: 38px;
            border-radius:3px;
            margin-left: 30px;
            .van-button__text {
                font-size:14px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(255,255,255,1);
            }
        }
    }
}
</style>
