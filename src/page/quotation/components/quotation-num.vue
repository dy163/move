<template>
    <div class="quotation">
        <!-- 头部名称 -->
        <div class="quotation-header" @click="$router.back()">
                <van-icon name="arrow-left"/>
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
        <div class="quotation-list">
            <table>
                <tr>
                    <td>今&nbsp;&nbsp;&nbsp;开</td>
                    <td>0.950</td>
                    <td>最&nbsp;&nbsp;&nbsp;高</td>
                    <td>0.980</td>
                    <td>换手</td>
                    <td>5.51%</td>
                </tr>
                <tr>
                    <td>昨&nbsp;&nbsp;&nbsp;收</td>
                    <td>5.51%</td>
                    <td>最&nbsp;&nbsp;&nbsp;低</td>
                    <td>4.88</td>
                    <td>振幅</td>
                    <td>3.90%</td>
                </tr>
            <!-- </table>
        </div>
        <div 
        class="a"
        style="overflow-x:auto" 
        v-if="true">
                <table> -->
                <tr>
                    <td>涨停</td>
                    <td>4.62</td>
                    <td>量比</td>
                    <td>0.98</td>
                    <td>成交量</td>
                    <td>583844</td>
                </tr>
                <tr>
                    <td>跌停</td>
                    <td>4.62</td>
                    <td>均价</td>
                    <td>4.97</td>
                    <td>成交额</td>
                    <td>2.90亿</td>
                </tr>
                <tr>
                    <td>外盘</td>
                    <td>236480</td>
                    <td>总股本</td>
                    <td>14.9亿</td>
                    <td>流通值</td>
                    <td>52.1亿</td>
                </tr>
                <tr>
                    <td>内盘</td>
                    <td>347363</td>
                    <td>流通股</td>
                    <td>10.6亿</td>
                    <td>净资</td>
                    <td>0.00%</td>
                </tr>
                <tr>
                    <td>市净率</td>
                    <td>0.50</td>
                    <td>总市值</td>
                    <td>73.0亿</td>
                    <td>市盈率</td>
                    <td>39.38</td>
                </tr>
                <tr>
                    <td>收益(二)</td>
                    <td>0.06</td>
                    <td>委比</td>
                    <td>9.35%</td>
                    <td>委差</td>
                    <td>1666</td>
                </tr>
                <!-- <van-collapse v-model="activeNames">
                    <van-collapse-item  name="1">
                        <table>
                            <tr>
                                <td>涨停</td>
                                <td>4.62</td>
                                <td>量比</td>
                                <td>0.98</td>
                                <td>成交量</td>
                                <td>583844</td>
                            </tr>
                            <tr>
                                <td>跌停</td>
                                <td>4.62</td>
                                <td>均价</td>
                                <td>4.97</td>
                                <td>成交额</td>
                                <td>2.90亿</td>
                            </tr>
                            <tr>
                                <td>外盘</td>
                                <td>236480</td>
                                <td>总股本</td>
                                <td>14.9亿</td>
                                <td>流通值</td>
                                <td>52.1亿</td>
                            </tr>
                            <tr>
                                <td>内盘</td>
                                <td>347363</td>
                                <td>流通股</td>
                                <td>10.6亿</td>
                                <td>净资</td>
                                <td>0.00%</td>
                            </tr>
                            <tr>
                                <td>市净率</td>
                                <td>0.50</td>
                                <td>总市值</td>
                                <td>73.0亿</td>
                                <td>市盈率</td>
                                <td>39.38</td>
                            </tr>
                            <tr>
                                <td>收益(二)</td>
                                <td>0.06</td>
                                <td>委比</td>
                                <td>9.35%</td>
                                <td>委差</td>
                                <td>1666</td>
                            </tr>
                        </table>
                    </van-collapse-item>
                </van-collapse> -->
            </table>
            </div>
        <!-- 交易软件当前时间显示 -->
        
        <div class="quotation-date">
            <p>财政年结日 <span>2018-06-30</span></p>
            <p class="up-icon">
                <van-icon name="arrow-up" color="#7F819B" size="16" v-if="false"/>
            </p>
            <p class="up-icon">
                <van-icon name="arrow-down" color="#7F819B" size="16"/>
            </p>
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
                        <!-- <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                        > -->
                        <van-list>
                            <div slot="default"
                            v-for="(item,index) in list"
                            :key="index">
                                <p>{{ item.title }}</p>
                                <p><span>{{ item.timer }}</span></p>
                            </div>
                        </van-list>
                    </van-tab>
                    <van-tab title="公告">
                        <van-list>
                            <div slot="default"
                            v-for="(item,index) in notice"
                            :key="index">
                                <p>{{ item.title }}</p>
                                <p class="quotation-right"><span>{{ item.timer }}</span></p>
                            </div>
                        </van-list>
                    </van-tab>
                    <van-tab title="分析">
                        <div slot="default" >
                            <p class="quotation-img-two">
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
      tidings: 0,
      activeNames: [],
      list: [
        { title: '07月25日主力资金抢筹最积极的前10股（附名单）', timer: '今天 15:10' },
        { title: '07月25日主力资金抢筹最积极的前10股（附名单）', timer: '今天 15:10' },
        { title: '07月25日主力资金抢筹最积极的前10股（附名单）', timer: '今天 15:10' },
        { title: '食品饮料行业Q2基金持仓分析：食品饮料持仓创历史新高处上升期', timer: '今天 15:10' }
      ],
      notice: [
        { title: '贵州茅台关于会计政策变更的公告', timer: '2019-07-17' },
        { title: '贵州茅台第二届监事会2019年度第三次会议决议的…', timer: '2019-07-17' },
        { title: '贵州茅台关于会计政策变更的公告', timer: '2019-07-17' },
        { title: '贵州茅台关于会计政策变更的公告', timer: '2019-07-17' },
        { title: '贵州茅台关于会计政策变更的公告', timer: '2019-07-17' }

      ]
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
.quotation-header {
    height: 44px;
    line-height: 44px;
    display: flex;
    align-items: center;
    padding: 3px 15px;
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
    padding: 0 15px;
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
    padding: 10px 8px;
    table {
        width: 100%;
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
    padding: 0 10px;
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
        display: flex;
        justify-content: center;
    }
}
.quotation-crap {
    padding: 0 15px;
    box-sizing: border-box;
    .van-tab__pane {
        height: 220px;
    }
    .quotation-news {
        border-top: 2px solid #14151C;
        /deep/.van-ellipsis {
            font-size: 16px
        }
        .van-list {
            margin-bottom: 40px;
        }
        .van-tab__pane {
            div {
                border-bottom: 1px solid #14151C;
                padding: 10px 0;
                box-sizing: border-box;
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
                .quotation-right {
                    text-align: right;
                }
                .quotation-img-two {
                    display: flex;
                    justify-content: center;
                    padding-top: 50px;
                }
                .quotation-test {
                    display: flex;
                    justify-content: center;
                    padding-bottom: 80px;
                    height:17px;
                    font-size:12px;
                    font-family:PingFangSC;
                    font-weight:400;
                    color:rgba(83,84,92,1);
                    line-height:17px;
                }
            }
        }
    }
}
</style>
