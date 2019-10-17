<template>
    <div class="quotation">
        <!-- 头部名称 -->
        <div class="quotation-header" @click="$router.back()">
                <van-icon name="arrow-left" size="16"/>
            <div>
                <p> <span>HK</span> 恒生指数(HSI)</p>
                <p>交易中07-25 10:36:20</p>
            </div>
        </div>
        <!-- 股票指数展示 -->
        <div class="quotation-number">
            <div class="quotation-number-mark">
                <p >28,597.99</p>
            </div>
            <div class="quotation-number-gain">
                <p>+73.950</p>
                <p>+0.88</p>
            </div>
            <div class="quotation-img">
                <img src="@/assets/img/pointing.png" alt="">
            </div>
        </div>
        <!-- 具体数据展示 -->
        <div class="quotation-list" style="overflow-x:auto">
            <table>
                <tr>
                    <td>今&nbsp;&nbsp;&nbsp;开</td>
                    <td>0.950</td>
                    <td>最&nbsp;&nbsp;&nbsp;高</td>
                    <td>0.980</td>
                    <td>成交量</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>昨&nbsp;&nbsp;&nbsp;收</td>
                    <td>0.970</td>
                    <td>最&nbsp;&nbsp;&nbsp;低</td>
                    <td>0.950</td>
                    <td>成交额</td>
                    <td>- -</td>
                </tr>
                <tr>
                    <td>总股本</td>
                    <td>1.84亿</td>
                    <td>流通值</td>
                    <td>4462.00万</td>
                    <td>52周最低</td>
                    <td>0.840</td>
                </tr>
                <tr>
                    <td>总市值</td>
                    <td>1.78亿</td>
                    <td>流通股</td>
                    <td>4600.00万</td>
                    <td>52周最高</td>
                    <td>2.840</td>
                </tr>
                <tr>
                    <td>市盈率(动）</td>
                    <td>- -</td>
                    <td>换手率</td>
                    <td>0.00%</td>
                    <td>每股收益</td>
                    <td>0.07</td>
                </tr>
                <tr>
                    <td>市盈率(静)</td>
                    <td>14.06</td>
                    <td>振&nbsp;&nbsp;&nbsp;幅</td>
                    <td>0.00%</td>
                    <td>股息率</td>
                    <td>0.00%</td>
                </tr>
                <tr>
                    <td>每&nbsp;&nbsp;&nbsp;手</td>
                    <td>2000</td>
                    <td>Beta值</td>
                    <td>- -</td>
                    <td>股&nbsp;&nbsp;&nbsp;息</td>
                    <td>- -</td>
                </tr>
            </table>
        </div>
        <!-- 交易软件当前时间显示 -->
        <div class="quotation-date">
            <p>财政年结日 <span>2018-06-30</span></p>
            <p class="up-icon"><van-icon name="arrow-up" color="#7F819B" size="16"/></p>

        </div>
        <!-- 图表分析展示 -->
        <div class="quotation-crap">
            <div class="quotation-crap-trend">
                <van-tabs v-model="timer" background='#20212A' line-height='0' title-active-color='#2F98FF'>
                    <van-tab title="分时">分时</van-tab>
                    <van-tab title="日K">日k</van-tab>
                    <van-tab title="周K">周K</van-tab>
                    <van-tab title="月K">月K</van-tab>
                </van-tabs>
            </div>
            <div class="quotation-news">
                <van-tabs v-model="tidings" background='#20212A' line-height='0' title-active-color='#2F98FF'>
                    <van-tab title="新闻">
                        <div slot="default">
                            <p>07月25日主力资金抢筹最积极的前10股（附名单）</p>
                            <p><span>今天 15:10</span></p>
                        </div>
                        <div slot="default">
                            <p>07月25日主力资金抢筹最积极的前10股（附名单）</p>
                            <p><span>今天 15:10</span></p>
                        </div>
                        <div slot="default">
                            <p>食品饮料行业Q2基金持仓分析：食品饮料持仓创历史新高处上升期</p>
                            <p><span>今天 15:10</span></p>
                        </div>
                    </van-tab>
                    <van-tab title="公告">
                        <div slot="default">
                            <p>贵州茅台关于会计政策变更的公告</p>
                            <p>2019-07-17</p>
                        </div>
                        <div slot="default">
                            <p>贵州茅台第二届监事会2019年度第三次会议决议的…</p>
                            <p>2019-07-17</p>
                        </div>
                        <div slot="default">
                            <p>贵州茅台关于会计政策变更的公告</p>
                            <p>2019-07-17</p>
                        </div>
                    </van-tab>
                    <van-tab title="分析">
                        <div slot="default">
                            <p class="quotation-img">
                                <img src="@/assets/img/hollow.png">
                            </p>
                            <span class="quotation-test">暂无分析动态</span>
                        </div>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <!-- 底部导航 -->
        <app-tabbar/>
    </div>
</template>

<script>

export default {
  name: 'QuotationNum',
  data () {
    return {
      timer: '0',
      tidings: 0
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.quotation {
    padding: 0 15px;
}
.quotation-header {
    height: 44px;
    line-height: 44px;
    display: flex;
    align-items: center;
    .van-icon {
        color: #fff;
    }
    div:nth-child(2) {
        p:nth-child(1) {
            height:22px;
            font-size:16px;
            font-family:PingFangSC-Medium,PingFangSC;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:22px;
            padding-left: 92px;
            span {
                display: inline-block;
                background:rgba(141,77,233,1);
                border-radius:1px;
                width:16px;
                height:11px;
                font-size:16px;
                -webkit-transform: scale(0.5);
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:11px;
                padding: 5px;
                text-align: left;
            }
        }
        p:nth-child(2) {
            height:17px;
            font-size:12px;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            color:rgba(127,129,155,1);
            line-height:17px;
            padding-left: 102px;
            padding-top: 2px;
        }
    }
}
.quotation-number {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color:rgba(53,192,137,1);
    border-bottom: 2px solid #14151C;
    padding-bottom: 8px;
    .quotation-number-mark {
        font-size:40px;
        font-family:DINAlternate-Bold,DINAlternate;
        font-weight:bold;
        padding-left: 25px;
        margin-right: -30px;
    }
    .quotation-number-gain {
        width:46px;
        font-size:14px;
        font-family:DINAlternate-Bold,DINAlternate;
        font-weight:bold;
    }
    .quotation-img {
        margin-top: -20px;
        margin-right: -18px;
    }
}

.quotation-list {
    // padding: 0 15px;
    table {
        width: 100%;
        padding: 10px 0;
        font-size:12px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(127,129,155,1);
        td {
            white-space: nowrap;
        }
    }
    tr {
        height:22px;
        padding: 10px 0;
        td:nth-child(even) {
            color:#fff;
            text-align: right;
            padding-right: 5px;
        }
    }
    tr:nth-child(1) {
        td:nth-child(2) {
            color: #35C089;
        }
        td:nth-child(4) {
            color: #FD5957;
        }
    }
    tr:nth-child(2) {
        td:nth-child(4) {
            color: #35C089;
        }
    }
}
.quotation-date {
    // padding: 0 15px;
    border-top: 1px solid #14151C;
    border-bottom: 2px solid #14151C;
    box-sizing: border-box;
    height: 48px;
    p:nth-child(1) {
        padding-top: 8px;
        font-size:12px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(127,129,155,1);
        span {
            color: #fff;
        }
    }
    .up-icon {
        text-align: center;
        height: 0;
        margin-top: -10px;
    }
}
.van-ellipsis {
    width:24px;
    height:20px;
    font-size:14px;
    font-family:PingFangSC;
    font-weight:500;
    color:rgba(127,129,155,1);
    line-height:20px;
}
.quotation-crap-trend {
    .van-tab__pane {
        height: 220px;
        // padding: 0 15px;
    }
}
.quotation-news {
    border-top: 2px solid #14151C;
    .van-tab__pane {
        // padding: 0 15px;
        padding-bottom: 60px;
        div {
            border-bottom: 1px solid #14151C;
            padding: 10px 0;
            p:nth-child(1) {
                font-size:14px;
                font-family:PingFangSC;
                font-weight:500;
                color:rgba(255,255,255,1);

            }
            p:nth-child(2) {
                height:16px;
                font-size:11px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(109,112,135,1);
                line-height:16px;
                padding-top: 8px;
            }
            .quotation-img {
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 50px;
            }
            .quotation-test {
                display: flex;
                justify-content: center;
                    height:17px;
                    font-size:12px;
                    font-family:PingFangSC;
                    font-weight:400;
                    color:rgba(83,84,92,1);
                    line-height:17px;
                    text-align: center;
                    padding-bottom: 50px;
            }
        }
    }
}
.quotation-buy {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    height:49px;
    background:rgba(32,33,42,1);
    div:nth-child(1) {
        width:117px;
        background:rgba(245,69,69,1);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 49px;
        img {
            width:20px;
            height:19px;
            padding-right: 5px;
        }
        p {
            font-size:16px;
            font-family:PingFangSC-Medium,PingFangSC;
            font-weight:500;
            color:rgba(255,255,255,1);
        }

    }
    div:nth-child(2) {
        width:117px;
        background:rgba(51,192,137,1);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 49px;
        img {
            width:20px;
            height:19px;
            padding-right: 5px;
        }
        p {
            font-size:16px;
            font-family:PingFangSC-Medium,PingFangSC;
            font-weight:500;
            color:rgba(255,255,255,1);
        }
    }
    .quotation-buy-follow {
        // padding: 0 22px;
        width: 71px;
        text-align: center;
        padding-bottom: 5px;
        box-sizing: border-box;
        p {
            font-size:12px;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
        }
    }
}
</style>
