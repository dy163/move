<template>
    <div class="capital">
        <!-- 头部 -->
        <van-nav-bar
        title="资产"
        left-arrow
        @click-left="$router.back()"
        @click-right="$router.push('/bank-card')">
          <van-icon name="idcard" slot="right" size="20px"/>
        </van-nav-bar>
        <!-- 资产总得展示 -->
        <div class="capital-reveal">
            <div class="capital-reveal-top">
                <p>账户总资产(RMB)</p>
                <p>1.74</p>
            </div>
            <div class="capital-reveal-triangle">
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div class="capital-reveal-foot">
                <div>
                    <router-link to="/deposit">
                        <img src="@/assets/img/deposit.png" alt="" style="vertical-align:middle">
                        <span>入 金</span>
                    </router-link>
                </div>
                <div>
                    <router-link to="">
                        <img src="@/assets/img/yield.png" alt="" style="vertical-align:middle">
                        <span>出 金</span>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- 持仓的金额展示 -->
        <div class="capital-details">
            <div class="capital-details-header">
                <div class="capital-details-border" @click="handleClickhHave">
                    <p>
                        <router-link to="">持仓股票</router-link>
                    </p>
                    <p>0.00</p>
                </div>
                <div class="capital-details-border" @click="handleClickShow">
                    <p>
                        <router-link to="">现金余额</router-link>
                    </p>
                    <p>0.00</p>
                </div>
            </div>
            <div class="capital-details-middle" v-show="show">
                <div>
                    <p>
                        <router-link to="">持仓市值(RMB)</router-link>
                    </p>
                    <p>1.74</p>
                </div>
                <div>
                    <p>
                        <router-link to="">持仓盈亏</router-link>
                    </p>
                    <p>+1.74</p>
                </div>
            </div>
            <div class="capital-details-foot" v-show="show">
                <div>
                    <p>
                        <router-link to="/order-list">
                            <img src="@/assets/img/order.png" alt="" style="vertical-align:middle">
                            <span>订单</span>
                        </router-link>
                    </p>
                </div>
                <div>
                    <p>
                        <router-link to="/porfit-loss">
                            <img src="@/assets/img/risk.png" alt="" style="vertical-align:middle">
                            <span>分析</span>
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
        <!-- 现金余额 -->
        <div class="capital-cash" v-show="play">
            <div class="capital-cash-detailed">
                <div>
                    <p>可用余额</p>
                    <p>1.74</p>
                </div>
                <div>
                    <p>可取余额</p>
                    <p>1.74</p>
                </div>
                <div>
                    <p>资金冻结</p>
                    <p>1.74</p>
                </div>
            </div>
            <div class="capital-cash-foot" >
                <p>
                    <router-link to="">
                        <van-icon name="idcard" style="vertical-align:middle"/>
                        交易记录
                    </router-link>
                </p>
            </div>
        </div>
        <!-- 持仓信息的展示 -->
        <div class="capital-list" v-show="show">
            <table width="100%">
                <tr>
                    <th>名称/代码</th>
                    <th>持仓/市值</th>
                    <th>现价/成本</th>
                    <th>浮动盈亏</th>
                </tr>
                <tr>
                    <td>四季教育</td>
                    <td>1</td>
                    <td>1.74</td>
                    <td>+1.74</td>
                </tr>
                <tr>
                    <td>FEDU</td>
                    <td>1.74</td>
                    <td>0</td>
                    <td>0.00%</td>
                </tr>
            </table>
        </div>
        <!-- 底部导航 -->
        <app-tabbar/>
    </div>
</template>

<script>
export default {
  name: 'Capital',
  data () {
    return {
      marker: '',
      play: false,
      show: true
    }
  },
  methods: {
    handleClickShow () {
      this.show = false
      this.play = true
    },
    handleClickhHave () {
      this.play = false
      this.show = true
    }
  }
}
</script>

<style lang="less" scoped>
.capital {
    position: fixed;
    width: 100%;
    height: 100%;
    background:rgba(23,24,34,1);
}
.capital-reveal {
    height:170px;
    background:linear-gradient(90deg,rgba(59,113,255,1) 0%,rgba(68,162,255,1) 100%);
    color: #fff;
    .capital-reveal-triangle {
        p:nth-child(1) {
            position: fixed;
            top: 90px;
            width: 0;
            height: 0;
            border-left: 63.5px solid transparent;
            border-right: 63.5px solid transparent;
            border-bottom: 127px solid rgba(255,255,255,0.03);
        }
        p:nth-child(2) {
            position: fixed;
            top: 132px;
            left: 215px;
            width: 0;
            height: 0;
            border-left: 41px solid transparent;
            border-right: 41px solid transparent;
            border-bottom: 83px solid rgba(255,255,255,0.03);
        }
        p:nth-child(3) {
            position: fixed;
            top: 100px;
            right: 11px;
            width: 0;
            height: 0;
            border-left: 58px solid transparent;
            border-right: 58px solid transparent;
            border-bottom: 116px solid rgba(255,255,255,0.03);
        }
    }
    .capital-reveal-top {
        text-align: center;
        padding-top: 30px;
        p:nth-child(1) {
            height:17px;
            font-size:12px;
            font-family:PingFangSC;
            font-weight:400;
            line-height:17px;
            margin-bottom: 3px;
        }
        p:nth-child(2) {
            height:47px;
            font-size:40px;
            font-family:DINAlternate;
            font-weight:bold;
            line-height:47px;
        }
    }
    .capital-reveal-foot {
        position: fixed;
        width: 100%;
        height:43px;
        margin-top: 30px;
        display: flex;
        align-items: center;
        background:rgba(255,255,255,0.1);
        z-index: 2000;
        div:nth-child(1) {
            a {
                border-right: 1px solid #fff;
            }
        }
        div {
            flex: 1;
            text-align: center;
            a {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                img {
                    width: 23px;
                }
                span {
                    padding-left: 5px;
                    font-size:14px;
                    font-family:PingFangSC-Medium,PingFangSC;
                    font-weight:500;
                }
            }
        }
    }
}
.capital-details {
    margin: 9px 0;
    background:rgba(32,33,43,1)
}
.capital-details-header {
    display: flex;
    text-align: center;
    height:61px;
    line-height: 61px;
    border-bottom: #14151C 1px solid;
    div {
        flex: 1;
        padding: 11px 0;
        box-sizing: border-box;
        p {
            color: #fff;
            height:20px;
            font-size:14px;
            font-family:PingFangSC;
            font-weight:400;
            line-height:20px;
            a {
                color: #fff;
            }
        }
        p:nth-child(2) {
            height:15px;
            font-size:13px;
            font-family:DINAlternate;
            font-weight:bold;
            line-height:15px;
        }
    };
    div:nth-child(2) {
        background:rgba(36,37,47,1);
        p {
            color: #7C7C82;
            a {
                color: #7C7C82;
            }
        }

    }
    .capital-details-border {
        border-top: 2px solid transparent;
    }
    .capital-details-border:hover {
        border-top: 2px solid #44A2FF;

    }
}
.capital-details-middle {
    height: 100px;
    display: flex;
    text-align: center;
    align-items: center;
    div {
        flex: 1;
        p:nth-child(1) {
            height:17px;
            font-size:12px;
            font-family:PingFangSC;
            font-weight:400;
            line-height:17px;
            a {
                color: #717278;
            }
        }
        p:nth-child(2) {
            height:19px;
            font-size:16px;
            font-family:DINAlternate;
            font-weight:bold;
            color:#fff;
            line-height:19px;
            margin-top: 2px;
        }
    }
    div:nth-child(2) {
        p:nth-child(2) {
            color: #F34445;
        }
    }
}
.capital-details-foot {
    display: flex;
    align-items: center;
    text-align: center;
    div:nth-child(1) {
        border-right: 1px solid #171822;
    }
    div {
        flex: 1;
        border-top: 1px solid #171822;
        height: 50px;
        line-height: 50px;
        align-items: center;
        p {
            font-size:14px;
            font-family:PingFangSC;
            font-weight:500;
            span {
                padding-left: 5px;
            }
            a {
                display: inline-block;
                color: #fff;
                .van-icon {
                    padding-right: 6px;
                }
            }
        }
    }
}
.capital-list {
    height: 115px;
    background:rgba(32,33,43,1);
    tr {
        text-align: center;
        td {
            font-size:12px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
        }
    }
    th {
        height:37px;
        font-size:12px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(114,115,121,1);
        line-height:37px;
    }

}
.capital-cash {
    height: 151px;
    .capital-cash-detailed {
        height: 101px;
        display: flex;
        text-align: center;
        align-items: center;
        div {
            flex: 1;
            p:nth-child(1) {
                height:17px;
                font-size:12px;
                font-family:PingFangSC;
                font-weight:400;
                color:rgba(113,114,120,1);
                line-height:17px;
            };
            p:nth-child(2) {
                margin-top: 11px;
                height:19px;
                font-size:16px;
                font-family:DINAlternate;
                font-weight:bold;
                color:rgba(255,255,255,1);
                line-height:19px;
            }
        }
    }
}
.capital-cash-foot {
    text-align: center;
    a {
        width:57px;
        height:20px;
        font-size:14px;
        font-family:PingFangSC-Medium,PingFangSC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:20px;
    }
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
