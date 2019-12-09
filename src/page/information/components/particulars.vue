<template>
    <div class="particulars">
        <van-nav-bar title="资 讯 详 情" fixed>
            <div slot="right">
                <img src="@/assets/img/search.png" alt="" style="vertical-align:middle" class="nav-img">
            </div>
        </van-nav-bar>
        <p class="particulars-title">【美股收盘】科技行业摆脱新的监管威胁纳指和标普500双双创下历史新高</p>
        <p class="particulars-name">启程无忧<span>2019-07-25</span>&nbsp;<span>05:03</span></p>
        <div class="particulars-content">
            <p>科创板于7月22日正式开闸，当天迎来开门红。首批25家上市企业的股价均大幅上涨，其中涨幅最高的安集科技(<span>184.060, 1.06, 0.58%</span>）</p>
            <p>( <span>688019</span> )上涨达400.15%，而涨幅最小的一家也上涨达到了84.22%。</p>
            <p>在这些企业中，已有19家披露了2019年中期业绩。通过计算可得，这些企业的平均营收为3.47亿，平均营收增速51.91%。在剔除异常值的影响后，平均归母净利润约为0.74亿，平均增速47.80%。</p>
            <p>对比A股中报业绩预告披露情况来看，科创板个股的营收、利润增速明显更快。根据此前的统计数据：截至2019年7月15日有1675家上市公司披露业绩预告，上半年净利润同比增长4%。其中，主板业绩最好，利润增速达17.1%。中小板和创业板都是负增长，分别为-6.1%、-1.7%，但相比一季度降幅有所收窄。</p>
            <p>下面来看这些科创板上市企业的具体业绩表现。</p>
            <p>平均营收增速51.91%、归母净利润增速47.80%</p>
            <p>在已披露2019年中期业绩的科创板上市企业中，营收增速全部为正。其中，增速最快的航天宏图(51.940, 2.54, 5.14%)（688066.SH）同比增长281.96%，增速最慢的福光股份(74.990, -6.41, -7.87%)则只增长了0.48%。</p>
            <p>有两家企业的归母净利润录得亏损，分别为航天宏图、铂力特(70.210, 2.22, 3.27%)（688333.SH）。比较奇怪的是，航天宏图既是营收增速第一，也是中期业绩亏损最多的公司。仔细分析可以发现，这与公司的经营特点密切相关。在最新的招股书中，公司表示由于客户多为政府部门、大型国企，这些客户通常在上半年进行预算立项、审批和采购招标，下半年进行签约、项目验收和付款，因此造成公司收入和利润主要来自于下半年，尤其是第四季度。铂力特的情况与之类似。</p>
        </div>
        <!-- 底部导航 -->
        <app-tabbar/>
    </div>
</template>

<script>
export default {
  name: 'Particulars',
  data () {
    return {
      marker: ''
    }
  }
}
</script>

<style lang="less" scoped>
.nav-img {
    margin-left: 18px;
    width: 16px;
    vertical-align: middle;
}
.particulars-title {
    margin-top: 46px;
    height:52px;
    font-size:20px;
    font-family:PingFangSC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:26px;
    padding: 9px 20px 20px 15px;
}
.particulars-name {
    height:17px;
    font-size:12px;
    font-family:PingFangSC;
    font-weight:500;
    color:rgba(147,152,177,1);
    line-height:17px;
    padding-left: 15px;
    padding-bottom: 17px;
}
.particulars-content {
    padding: 0 15px;
    padding-bottom: 70px;
    font-size:16px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(147,152,177,1);
    line-height:28px;
    p {
        padding: 20px 0;
        span {
            color: #276FE6;
        }
    }
}
.van-hairline--top-bottom {
    background-color: #20212A;
}
</style>
