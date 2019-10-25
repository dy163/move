<template>
    <div class="order-list">
        <van-nav-bar title="订单列表" @click-left="$router.back()" @click-right="onClickRight">
            <van-icon name="arrow-left" slot="left"/>
            <!-- <van-icon name="plus" slot="right" /> -->
        </van-nav-bar>
        <div class="order-list">
            <van-tabs v-model="active" color="#2F98FF" background="#20212B" title-active-color="#2F98FF" title-inactive-color="#fff" line-height="2">
                <van-tab title="待成交">
                    <div class="order-list-fixed">
                        <p>名称/代码</p>
                        <p>方向</p>
                        <p>数量/价格</p>
                        <p>成交时间</p>
                    </div>
                    <div class="order-list-img">
                        <img src="@/assets/img/record.png" alt="">
                        <span>暂无记录</span>
                    </div>
                </van-tab>
                <van-tab title="已成交">
                    <div class="order-list-fixed">
                        <p>名称/代码</p>
                        <p>方向</p>
                        <p>数量/价格</p>
                        <p>成交时间</p>
                    </div>
                    <div class="order-list-deal">
                        <div>
                            <p>纳斯达克</p>
                            <p><span>us</span>.IXIC</p>
                        </div>
                        <div>
                            <p>20/5000</p>
                        </div>
                        <div>
                            <p>11:49</p>
                            <p>2019-07-30</p>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="已撤单">
                    <div class="order-list-fixed">
                        <p>名称/代码</p>
                        <p>方向</p>
                        <p>数量/价格</p>
                        <p>成交时间</p>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Orderlist',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onClickRight () {

    }
  }
}
</script>

<style lang="less" scoped>
.order-list {
    .order-list-fixed {
        display: flex;
        justify-content: space-around;
        height:17px;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(105,106,113,1);
        line-height:17px;
        .van-ellipsis {
            width:44px;
            height:20px;
            font-size:14px;
            font-weight:400;
            color:rgba(47,152,255,1);
            line-height:20px;
        }
    }
    .order-list-img {
        padding-top: 30px;
        text-align: center;
        span {
            display: block;
            height:17px;
            font-size:12px;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            color:rgba(153,153,153,1);
            line-height:17px;
        }
    }
    .order-list-deal {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        padding-top: 20px;
        div:nth-child(1) {
            width:64px;
            height:22px;
            font-size:16px;
            font-family:PingFangSC-Medium,PingFangSC;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:22px;
            p:nth-child(2) {
                width:26px;
                height:17px;
                font-size:12px;
                font-weight:500;
                line-height:17px;
                display: flex;
                align-items: center;
                padding-top: 8px;
                span {
                    background:rgba(68,127,255,1);
                    border-radius:3px;
                    font-size:8px;
                    font-weight:400;
                    height: 8px;
                    line-height: 8px;
                    padding: 2px 3px;
                }
            }
        }
        div:nth-child(2) {
            width:58px;
            height:21px;
            font-size:18px;
            font-family:DINAlternate-Bold,DINAlternate;
            font-weight:bold;
            color:rgba(236,66,69,1);
            line-height:21px;
        }
        div:nth-child(3) {
            height:16px;
            font-size:14px;
            font-family:DINAlternate-Bold,DINAlternate;
            font-weight:bold;
            color:rgba(255,255,255,1);
            line-height:16px;
            p:nth-child(1) {
                text-align: right;
            }
            p:nth-child(2) {
                height:16px;
                font-size:14px;
                font-family:DINAlternate-Bold,DINAlternate;
                font-weight:bold;
                color:rgba(112,113,119,1);
                line-height:16px;
                padding-top: 8px;
            }
        }
    }
}

</style>
