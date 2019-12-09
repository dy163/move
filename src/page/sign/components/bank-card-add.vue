<template>
    <div class="bank-card-add">
        <van-nav-bar title="我的银行卡" @click-left="$router.back()" @click-right="onClickRight">
            <van-icon name="arrow-left" slot="left"/>
            <van-icon name="plus" slot="right" size="16px"/>
        </van-nav-bar>
        <div class="bank-card-content">
            <div class="bank-card-content-card"
            v-for="(item,index) in labellist"
            :key="index"
            @touchstart="showDeleteButton(index)"
            @touchend="emptyTime">
                <div>
                    <img src="@/assets/img/debit.png" alt="">
                </div>
                <div>
                    <p>{{ item.bank }}</p>
                    <p>{{ item.nature }}</p>
                    <p>{{ item.card }}</p>
                </div>
            </div>
            <span class="long-press">长按即可删除银行卡</span>
        </div>
        <!-- 是否长按删除银行卡 -->
        <van-dialog
            use-slot
            title="是否删除此银行卡？"
            v-model="show"
            :showConfirmButton="false"
            class="bank-card-dialog"
            >
            <div class="bank-btn" >
                <span></span>
                <van-button color="#363740" class="cancel" @click.prevent="show = false">取消</van-button>
                <span class="crevice"></span>
                <van-button color="#2F98FF" class="cancel" @click.prevent="handeleClickConfirm()">确认</van-button>
            </div>
        </van-dialog>
    </div>
</template>

<script>
export default {
  name: 'BankCardAdd',
  data () {
    return {
      willDeleteIndex: -1,
      loop: null,
      show: false,
      labellist: [
        {
          bank: '中国建设银行',
          nature: '储蓄卡',
          card: '**** **** **** 7100'
        },
        {
          bank: '中国农业银行',
          nature: '储蓄卡',
          card: '**** **** **** 7100'
        },
        {
          bank: '中国招商银行',
          nature: '储蓄卡',
          card: '**** **** **** 7100'
        }
      ]
    }
  },
  created() {
    this.$toast.setDefaultOptions({ duration: 800 });
  },

  methods: {
    onClickRight () {
      // this.$router.push('/bank-card-information')
      this.$router.push({name:'sign',params: {type: 'bank-card-information'}});

    },
    // 确认按钮
    handeleClickConfirm () {
      this.show = false
      JSON.stringify(this.labellist.splice(this.willDeleteIndex, 1))
      
      this.$toast('已删除')
    },
    // 长按按钮展示弹框
    showDeleteButton: function (index) {
      clearTimeout(this.loop) // 再次清空定时器，防止重复注册定时器
      this.loop = setTimeout(() => {
        this.willDeleteIndex = index
        this.show = true
      }, 1000)
    },
    // 清空
    emptyTime: function () {
      clearTimeout(this.loop) // 清空定时器，防止重复注册定时器
    }
  }
}
</script>

<style lang="less" scoped>
.bank-card-content {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #14151C;
    .long-press {
        display: flex;
        justify-content: center;
        height:20px;
        font-size:16px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(53,53,63,1);
        line-height:20px;
    }
    .bank-card-content-card {
        margin: 15px 15px;
        height:134px;
        background:rgba(64,72,95,1);
        border-radius:3px;
        display: flex;
        img {
            padding-top: 28px;
            padding-left: 20px;
        }
        div:nth-child(2) {
            padding-top: 25px;
            p {
                padding-left: 20px;
            }
            p:nth-child(1) {
                font-size:18px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(255,255,255,1);
            }
            p:nth-child(2) {
                font-size:14px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(185,189,200,1);
                padding-bottom: 15px;
            }
            p:nth-child(3) {
                font-size:23px;
                font-family:PingFangSC;
                font-weight:500;
                color:rgba(255,255,255,1);
            }
        }
    }
}
.bank-card-dialog {
    width: 300px;
    background:rgba(32,33,43,1);
    /deep/.van-dialog__header {
        height:20px;
        font-size:14px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:20px;
        padding-top: 20px;
        padding-bottom: 37px;
    }
    .bank-btn {
        padding-bottom: 26px;
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
