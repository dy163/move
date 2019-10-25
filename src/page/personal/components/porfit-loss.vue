<template>
    <div class="porfit-loss">
        <van-nav-bar
        title="盈亏分析"
        @click-left="$router.back()">
            <van-icon name="arrow-left" slot="left"/>
        </van-nav-bar>
        <div class="porfit-loss-show" :style="porfit">
            <div>
                <p>持仓股票总资产(USD)</p>
                <p>1.94</p>
                <p></p>
            </div>
            <div>
                <p>浮动盈亏额</p>
                <p>浮动盈亏率</p>
                <p>累计盈亏额</p>
                <p>累计盈亏率</p>
            </div>
            <div>
                <p>+1.94</p>
                <p>0.00%</p>
                <p>0.00%</p>
                <p>0.00%</p>
            </div>
        </div>
        <div class="porfit-loss-name">
            <div>
                <p>股票名称</p>
                <p>市值</p>
                <p>浮动盈亏</p>
                <p>累计盈亏</p>
            </div>
            <div class="porfit-loss-name-show">
                <p>亿动华源</p>
                <p>+1.94</p>
                <p>+1.94 <span>0.00%</span></p>
                <p>+1.94 <span>0.00%</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PorfitLoss',
  data () {
    return {
      porfit: {
        backgroundImage: 'url(' + require('@/assets/img/rectangle.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
    background-color: #20212A;
}
.van-nav-bar .van-icon {
    color: #fff;
}
.van-hairline--bottom::after {
    border: 2px solid #14151C
}
.van-nav-bar__title {
    font-size:17px;
    font-family:PingFangSC;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.porfit-loss-show {
    height: 200px;
    padding: 0 28px;
    color:rgba(255,255,255,1);
    div:nth-child(1) {
        text-align: center;
        padding-top: 20px;
        p:nth-child(1) {
            height:20px;
            font-size:14px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:20px;
        }
        p:nth-child(2) {
            height:53px;
            font-size:38px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:53px;
        }
        p:nth-child(3) {
            border-bottom: 1px solid #fff;
            padding-top: 10px;
            margin: 0 20px;
        }
    }
    div:nth-child(2) {
        display: flex;
        text-align: center;
        padding-top: 23px;
        p {
            flex: 1;
            height:17px;
            font-size:12px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:17px;
        }
    }
    div:nth-child(3) {
        display: flex;
        text-align: center;
        p {
            flex: 1;
            height:17px;
            font-size:12px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:17px;
            padding-top: 3px;
        }
    }
}
.porfit-loss-name {
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: #171822;
    padding-top: 20px;
    div:nth-child(1) {
        display: flex;
        height:17px;
        font-size:12px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(102,103,109,1);
        line-height:17px;
        text-align: center;
        padding: 20px 0;
        p {
            flex: 1
        }
    }
    .porfit-loss-name-show:nth-child(2) {
        display: flex;
        height:20px;
        font-size:14px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:20px;
        text-align: center;
        p {
            flex: 1;
        }
        p:nth-child(3), p:nth-child(4) {
            color: #F54545;
        }
    }
}
</style>
