<template>
    <div class="optional">
        <van-nav-bar title="股票" left-text="持仓">
            <div slot="right">
                <img src="@/assets/img/search.png" alt="" style="vertical-align:middle" class="nav-img">
                <img src="@/assets/img/refresh.png" alt="" style="vertical-align:middle">
            </div>
        </van-nav-bar>
        <div class="optional-content">
            <div class="optional-content-title">
                <p>
                    全部
                    <img src="@/assets/img/triangle.png" alt="">
                </p>
                <p>
                    价格
                    <img src="@/assets/img/sort.png" alt="">
                </p>
                <p>
                    涨跌幅
                    <img src="@/assets/img/sort.png" alt="">
                </p>
            </div>
            <div class="optional-content-top" @click="handleClickBuy">
                <div>
                    <p>贵州茅台</p>
                    <p>
                        <span>SH</span>
                        102931
                    </p>
                </div>
                <div>
                    <p>955.87</p>
                </div>
                <div>
                    <p>0.88%</p>
                </div>
            </div>
            <div class="optional-content-top">
                <div>
                    <p>贵州茅台</p>
                    <p>
                        <span>SH</span>
                        102931
                    </p>
                </div>
                <div>
                    <p>955.87</p>
                </div>
                <div>
                    <p>0.88%</p>
                </div>
            </div>
            <div class="optional-content-top">
                <div>
                    <p>贵州茅台</p>
                    <p>
                        <span>SH</span>
                        102931
                    </p>
                </div>
                <div>
                    <p>955.87</p>
                </div>
                <div>
                    <p>0.88%</p>
                </div>
            </div>
            <div class="optional-content-top">
                <div>
                    <p>贵州茅台</p>
                    <p>
                        <span>SH</span>
                        102931
                    </p>
                </div>
                <div>
                    <p>955.87</p>
                </div>
                <div>
                    <p>0.88%</p>
                </div>
            </div>
            <div class="optional-content-top">
                <div>
                    <p>贵州茅台</p>
                    <p>
                        <span>SH</span>
                        102931
                    </p>
                </div>
                <div>
                    <p>955.87</p>
                </div>
                <div>
                    <p>0.88%</p>
                </div>
            </div>
        </div>
        <div class="optional-content-foot">
            <img src="@/assets/img/plus-small.png" alt="">
            <span>添加自选股</span>
        </div>
        <!-- 底部导航 -->
        <app-tabbar/>
        <!-- 子组件出口 -->
        <Transaction v-show="show" />
    </div>
</template>

<script>
import Transaction from './components/transaction'
export default {
  name: 'OptionalIndex',
  components: {
    Transaction
  },
  data () {
    return {
      marker: '',
      show: false
    }
  },
  methods: {
    handleClickBuy () {
      this.$router.push('/transaction')
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
    .nav-img {
        margin-right: 22px;
    }
    .van-nav-bar__text {
        color: #fff;
        font-size:14px;
        font-family:PingFangSC-Medium,PingFangSC;
        font-weight:500;
        background-color: #20212A;
    }
}
.optional-content {
    padding: 0 15px;
    .optional-content-title {
        display: flex;
        justify-content: space-between;
        height:20px;
        font-size:14px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:20px;
        padding: 13px 0;
        p:nth-child(2) {
            margin-left: 18px;
        }
    }
    .optional-content-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        div:nth-child(1) {
            p:nth-child(1) {
                width:64px;
                height:22px;
                font-size:16px;
                font-family:PingFangSC-Medium,PingFangSC;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:22px;
            }
            p:nth-child(2) {
                // width:39px;
                height:17px;
                font-size:12px;
                font-family:PingFangSC-Medium,PingFangSC;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:17px;
                display: flex;
                align-items: center;
                padding-top: 4px;
                span {
                    background:rgba(251,77,79,1);
                    border-radius:2px;
                    font-size:12px;
                    -webkit-transform: scale(0.6);
                    font-family:PingFangSC-Regular,PingFangSC;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    padding: 1px 4px;
                    margin-left: -7px;
                    margin-right: -3px;
                }
            }
        }
        div:nth-child(2) {
            height:21px;
            font-size:18px;
            font-family:DINAlternate-Bold,DINAlternate;
            font-weight:bold;
            color:rgba(255,255,255,1);
            line-height:21px;
            margin-left: -16px;
        }
        div:nth-child(3) {
            height:25px;
            font-size:14px;
            font-family:DINAlternate-Bold,DINAlternate;
            font-weight:bold;
            color:rgba(53,192,137,1);
            line-height:16px;
        }
    }
}
.optional-content-foot {
    display: flex;
    align-items: center;
    justify-content: center;
    height:22px;
    font-size:16px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:22px;
    padding-top: 10px;
    img {
        vertical-align: middle;
        padding-right: 3px;
    }

}
.van-tab__pane {
    color: #fff;
}
.van-hairline--top-bottom {
    background-color: #20212A;
}
.van-tabbar-item__text {
    height:14px;
    font-size:10px;
    font-family:PingFangSC;
    font-weight:500;
    line-height:14px;
}
.van-tabbar-item__icon {
    width:18px;
    height:18px;
}
</style>
