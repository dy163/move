<template>
    <div class="information">
        <van-nav-bar title="资 讯" fixed>
            <div slot="right">
                <img src="@/assets/img/search.png" alt="" style="vertical-align:middle" class="nav-img">
                <img src="@/assets/img/refresh.png" alt="" style="vertical-align:middle">
            </div>
        </van-nav-bar>
        <div>
            <van-tabs class="information-tabs" v-model="active" background="#20212A" title-inactive-color="#fff" title-active-color="#5794F0" line-height="0">
                <!-- 要闻 -->
                <van-tab title="要闻" class="information-front-page">
                    <div class="information-front-page-top" :style="porfit">
                        <img src="@/assets/img/diagram.png" alt="">
                        <div class="information-front-page-among">
                            <p><img src="@/assets/img/involved.png" alt=""></p>
                            <p>【科创板成交额突破200亿元】财联社7月23日讯，科创板25家公司今日成交额突破20…</p>
                        </div>
                    </div>
                    <van-list>
                        <div class="information-front-page-foot"
                        v-for="(item,index) in focus"
                        :key="index">
                            <div>
                                <p class="information-title">{{ item.title }}</p>
                                <p class="information-front-page-foot-name"><span>{{ item.roof }}</span>&nbsp;&nbsp;<span>{{ item.trusts }}</span>&nbsp;&nbsp;<span>{{ item.timer }}</span></p>
                            </div>
                            <div class="img">
                                <img src="@/assets/Rectangle.png" alt="">
                            </div>
                        </div>
                    </van-list>
                    <!-- hot事件 -->
                    <div class="information-hot">
                        <p>热点事件</p>
                        <p>查看更多</p>
                    </div>
                    <!-- 轮播热点信息 -->
                    <div class="information-hot-news">
                        <van-swipe :autoplay="3000" indicator-color="white">
                            <!-- <van-list>
                                <van-swipe-item
                                v-for="(item,index) in hot"
                                :key="index">
                                    <div class="information-hot-news-all">
                                        <div class="information-hot-news-img"></div>
                                        <div class="information-hot-news-title">
                                            <p>{{ item.title }}</p>
                                            <p>{{ item.content }}</p>
                                        </div>
                                    </div>
                                </van-swipe-item>
                            </van-list> -->

                            <van-swipe-item>
                                <van-list>
                                    <div class="information-hot-news-all"
                                    v-for="(item,index) in hot"
                                    :key="index">
                                        <div class="information-hot-news-img"></div>
                                        <div class="information-hot-news-title">
                                            <p>{{ item.title }}</p>
                                            <p>{{ item.content }}</p>
                                        </div>
                                    </div>
                                </van-list>
                            </van-swipe-item>
                            <van-swipe-item>
                                <div class="information-hot-news-all">
                                    <div class="information-hot-news-img"></div>
                                    <div class="information-hot-news-title">
                                        <p>科创板来了！</p>
                                        <p>科创板开板！中国资本市场迎来历史性时刻。</p>
                                    </div>
                                </div>
                            </van-swipe-item>
                            <van-swipe-item>
                                <div class="information-hot-news-all">
                                    <div class="information-hot-news-img"></div>
                                    <div class="information-hot-news-title">
                                        <p>科创板来了！</p>
                                        <p>科创板开板！中国资本市场迎来历史性时刻。</p>
                                    </div>
                                </div>
                            </van-swipe-item>
                        </van-swipe>
                    </div>
                    <van-list>
                        <div class="information-front-page-foot"
                        v-for="(item,index) in focus"
                        :key="index">
                            <div>
                                <p class="information-title">{{ item.title }}</p>
                                <p class="information-front-page-foot-name"><span>{{ item.roof }}</span>&nbsp;&nbsp;<span>{{ item.trusts }}</span>&nbsp;&nbsp;<span>{{ item.timer }}</span></p>
                            </div>
                            <div class="img">
                                <img src="@/assets/Rectangle.png" alt="">
                            </div>
                        </div>
                    </van-list>
                    <!-- <div class="information-front-page-foot">
                        <div>
                            <p class="information-title">长江证券：美股大幅反弹，与美国经济“背离”？</p>
                            <p class="information-front-page-foot-name"> <span>置顶</span> 长江证券研究 今天 <span>12:35</span></p>
                        </div>
                        <div class="img"></div>
                    </div> -->
                </van-tab>
                <!-- 公告 -->
                <van-tab title="公告" class="information-Optional">
                    <van-list>
                        <div
                        v-for="(item, index) in Optional"
                        :key="index">
                            <p>{{ item.name }}&nbsp;&nbsp;<span>{{ item.range }}</span></p>
                            <p>{{ item.brief }}</p>
                            <p>{{ item.time }}</p>
                        </div>
                    </van-list>
                    <!-- <div>
                        <p>贵州茅台（600519）<span>-0.80%</span></p>
                        <p>茅台机场上半年运输指标位列贵州省支线机赞阿萨的吧就卡不</p>
                        <p>2019-07-24 13:13 </p>
                    </div>
                    <div>
                        <p>贵州茅台（600519）<span>-0.80%</span></p>
                        <p>茅台机场上半年运输指标位列贵州省支线机</p>
                        <p>2019-07-24 13:13 </p>
                    </div><div>
                        <p>贵州茅台（600519）<span>-0.80%</span></p>
                        <p>茅台机场上半年运输指标位列贵州省支线机</p>
                        <p>2019-07-24 13:13 </p>
                    </div><div>
                        <p>贵州茅台（600519）<span>-0.80%</span></p>
                        <p>茅台机场上半年运输指标位列贵州省支线机</p>
                        <p>2019-07-24 13:13 </p>
                    </div> -->
                </van-tab>
                <!-- 自选 -->
                <van-tab title="自选" class="information-Optional">

                    <!-- <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    > -->
                    <van-list>
                        <h3>今日</h3>
                        <div
                        v-for="(item, index) in Optional"
                        :key="index">
                            <p>{{ item.name }}&nbsp;&nbsp;<span>{{ item.range }}</span></p>
                            <p>{{ item.brief }}</p>
                            <p>{{ item.time }}</p>
                        </div>
                    </van-list>
                </van-tab>
                <!-- 推送 -->
                <van-tab title="推送" name="propelling" class="information-push">
                    <van-list>
                    <div class="information-content"
                    v-for="(item, index) in newsList"
                    :key="index"
                    @click="clickPush">
                        <div>
                            <p class="information-title">{{ item.title }}</p>
                            <p class="information-name">{{ item.source }}<span>{{ item.date }}</span></p>
                        </div>
                        <div class="img">
                            <img src="@/assets/Rectangle.png" alt="">
                        </div>
                    </div>
                    </van-list>
                </van-tab>
            </van-tabs>
        </div>
        <!-- 底部导航 -->
        <app-tabbar/>
    </div>
</template>
<script>
export default {
  name: 'InformationIndex',
  data () {
    return {
      active: 'propelling',
      porfit: {
        backgroundImage: 'url(' + require('@/assets/img/diagram.png') + ')',
        backgroundRepeat: 'no-repeat'
      },
      loading: false,
      finished: false,
      hot: [
        { title: '科创板来了！', content: '科创板开板！中国资本市场迎来历史性时刻。' }
      ],
      newsList: [
        { title: '港股独角兽周年记：折翼的小米集团能在成资本宠儿么', source: '腾讯深网 今天', date: '11:26' },
        { title: '港股独角兽周年记：折翼的小米集团能在成资本宠儿么', source: '腾讯深网 今天', date: '11:26' },
        { title: '港股独角兽周年记：折翼的小米集团能在成资本宠儿么', source: '腾讯深网 今天', date: '11:26' },
        { title: '港股独角兽周年记：折翼的小米集团能在成资本宠儿么', source: '腾讯深网 今天', date: '11:26' },
        { title: '港股独角兽周年记：折翼的小米集团能在成资本宠儿么', source: '腾讯深网 今天', date: '11:26' },
        { title: '港股独角兽周年记：折翼的小米集团能在成资本宠儿么', source: '腾讯深网 今天', date: '11:26' },
        { title: '港股独角兽周年记：折翼的小米集团能在成资本宠儿么', source: '腾讯深网 今天', date: '11:26' },
        { title: '港股独角兽周年记：折翼的小米集团能在成资本宠儿么', source: '腾讯深网 今天', date: '11:26' }
      ],
      Optional: [
        { name: '贵州茅台（600519)', range: '-0.80%', brief: '茅台机场上半年运输指标位列贵州省支线机', time: '2019-07-24 13:13' },
        { name: '贵州茅台（600519)', range: '-0.80%', brief: '茅台机场上半年运输指标位列贵州省支线机', time: '2019-07-24 13:13' },
        { name: '贵州茅台（600519)', range: '-0.80%', brief: '茅台机场上半年运输指标位列贵州省支线机', time: '2019-07-24 13:13' },
        { name: '贵州茅台（600519)', range: '-0.80%', brief: '茅台机场上半年运输指标位列贵州省支线机', time: '2019-07-24 13:13' },
        { name: '贵州茅台（600519)', range: '-0.80%', brief: '茅台机场上半年运输指标位列贵州省支线机', time: '2019-07-24 13:13' },
        { name: '贵州茅台（600519)', range: '-0.80%', brief: '茅台机场上半年运输指标位列贵州省支线机', time: '2019-07-24 13:13' },
        { name: '贵州茅台（600519)', range: '-0.80%', brief: '茅台机场上半年运输指标位列贵州省支线机', time: '2019-07-24 13:13' },
        { name: '贵州茅台（600519)', range: '-0.80%', brief: '茅台机场上半年运输指标位列贵州省支线机', time: '2019-07-24 13:13' },
        { name: '贵州茅台（600519)', range: '-0.80%', brief: '茅台机场上半年运输指标位列贵州省支线机', time: '2019-07-24 13:13' }
      ],
      focus: [
        { title: '长江证券：美股大幅反弹，与美国经济“背离”？', roof: '置顶', trusts: '长江证券研究', timer: '今天 12:35' },
        { title: '长江证券：美股大幅反弹，与美国经济“背离”？', roof: '置顶', trusts: '长江证券研究', timer: '今天 12:35' },
        { title: '长江证券：美股大幅反弹，与美国经济“背离”？', roof: '置顶', trusts: '长江证券研究', timer: '今天 12:35' },
        { title: '长江证券：美股大幅反弹，与美国经济“背离”？', roof: '置顶', trusts: '长江证券研究', timer: '今天 12:35' },
        { title: '长江证券：美股大幅反弹，与美国经济“背离”？', roof: '置顶', trusts: '长江证券研究', timer: '今天 12:35' },
        { title: '长江证券：美股大幅反弹，与美国经济“背离”？', roof: '置顶', trusts: '长江证券研究', timer: '今天 12:35' }
      ]
    }
  },
  methods: {
    clickPush () {
      this.$router.push('/particulars')
    },
    // 加载数据
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
.van-nav-bar {
    background-color: #20212A;
    .nav-img {
        margin-right: 22px;
    }
}
.van-tab__pane {
    color: #fff;
}
.van-hairline--top-bottom {
    background-color: #20212A;
}
.information-tabs {
    padding-bottom: 50px;
    /deep/.van-ellipsis {
        font-size:15px;
        font-family:PingFangSC-Medium,PingFangSC;
        font-weight:500;
    }
    /deep/ .van-tabs__wrap {
        position: fixed;
        top: 46px;
        width: 100%;
        background-color: #20212A;
    }
    /deep/ .van-tabs__content {
        margin-top: 90px;
    }
    /deep/.van-tabs__nav {
        margin-right: 130px;
    }
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
.information-content {
    padding-top: 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid #000;
    display: flex;
    .img {
        margin-left: 13px;
    }
}
.information-title {
    width:221px;
    height:48px;
    font-size:17px;
    font-family:PingFangSC;
    font-weight:500;
    line-height:24px;
}
.information-name {
    height:16px;
    font-size:11px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(106,109,131,1);
    line-height:16px;
    padding-top: 12px;
}
.information-push {
    padding: 0 15px;
}
.information-Optional {
    padding: 0 15px;
    h3 {
        width:36px;
        height:25px;
        font-size:18px;
        font-family:PingFangSC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:25px;
        padding-top: 15px;
    }
    div {
        border-bottom: 1px solid #000;
        // height: 111px;
        p {
            padding-bottom: 10px;
        }
        p:nth-child(1) {
            // height:18px;
            font-size:13px;
            font-family:PingFangSC;
            font-weight:500;
            color:rgba(255,255,255,1);
            // line-height:18px;
            padding-top: 18px;
            span {
                color: #35C089;
            }
        }
        p:nth-child(2) {
            width:336px;
            font-size:16px;
            font-family:PingFangSC;
            font-weight:500;
            color:rgba(255,255,255,1);
        }
        p:nth-child(3) {
            height:12px;
            font-size:11px;
            font-family:DINAlternate;
            font-weight:bold;
            color:rgba(126,130,156,1);
            line-height:12px;
            padding-bottom: 20px;
        }
    }
}
.information-front-page-top {
    height: 180px;
    position: relative;
    margin-bottom: 60px;
    img {
        width: 100%;
    }
    .information-front-page-among {
        position: absolute;
        top: 167px;
        margin: 0 15px;
        height: 64px;
        display: flex;
        align-items: center;
        background:rgba(38,39,50,1);
        border-radius:8px;
        img {
            width: 45px;
            height: 40px;
            padding-right: 13px;
        }
        p:nth-child(2) {
            height:40px;
            font-size:13px;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:20px;
        }
    }
}
.information-front-page-foot {
    border-bottom: 1px solid #000;
    display: flex;
    // padding: 0px 15px 20px 15px;
    padding: 20px 15px;
    .img {
        flex: 1;
        margin-left: 13px;
    }
    .information-front-page-foot-name {
        height:16px;
        font-size:12px;
        // -webkit-transform: scale(0.75);
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(106,109,131,1);
        line-height:16px;
        padding-top: 12px;
        span:nth-child(1) {
            display: inline-block;
            width:24px;
            height:12px;
            border-radius:1px;
            border:1px solid rgba(255,55,80,1);
            line-height: 12px;
            color: rgba(255,55,80,1);
            font-size:12px;
            -webkit-transform: scale(0.6);
            padding: 5px;
            font-family:PingFangSC-Regular,PingFangSC;
        }
    }
}
.information-hot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
    p:nth-child(1) {
        width:72px;
        height:24px;
        font-size:17px;
        font-family:PingFangSC-Medium,PingFangSC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:24px;
    }
    p:nth-child(2) {
        width:48px;
        height:17px;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:17px;
    }
}
.information-hot-news {
    padding: 0 15px;
    padding-bottom: 10px;
    .information-hot-news-all {
        width:298px;
        height:90px;
        background:rgba(38,39,50,1);
        border-radius:6px;
        display: flex;
        align-items: center;
        .information-hot-news-img {
            width:53px;
            height:53px;
            background:rgba(216,216,216,1);
            border-radius:4px;
            margin-left: 15px;
        }
        .information-hot-news-title {
            padding-left: 12px;
            p:nth-child(1) {
                width:96px;
                height:22px;
                font-size:16px;
                font-family:PingFangSC-Medium,PingFangSC;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:22px;
                padding-bottom: 5px;
            }
            p:nth-child(2) {
                width:195px;
                height:36px;
                font-size:13px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:18px;
            }
        }
    }
}
</style>
