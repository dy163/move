<template>
  <div class="quotation">
    <!-- 头部名称 -->
    <div class="quotation-header" @click="$router.back()">
      <van-icon name="arrow-left" />
      <div>
        <p>
          <span>HK</span> 恒生指数(HSI)
        </p>
        <p>交易中07-25 10:36:20</p>
      </div>
    </div>
    <!-- 股票指数展示 -->
    <div class="quotation-number">
      <div class="quotation-number-mark">
        <p>28,597.99</p>
      </div>
      <div class="quotation-number-gain">
        <p>+73.950</p>
        <p>+0.88</p>
      </div>
      <div class="quotation-img">
        <img src="@/assets/img/pointing.png" alt />
      </div>
    </div>
    <!-- 具体数据展示 -->
    <div class="quotation-list">
      <van-row>
        <van-col span="4">今开</van-col>
        <van-col span="4">5.05</van-col>
        <van-col span="4">最高</van-col>
        <van-col span="4">5.08</van-col>
        <van-col span="4">换手</van-col>
        <van-col span="4">5.51%</van-col>
      </van-row>
      <van-row>
        <van-col span="4">昨收</van-col>
        <van-col span="4">5.13</van-col>
        <van-col span="4">最低</van-col>
        <van-col span="4">4.88</van-col>
        <van-col span="4">振幅</van-col>
        <van-col span="4">3.90%</van-col>
      </van-row>
      <van-row v-if="show">
        <van-col span="4">涨停</van-col>
        <van-col span="4">5.64</van-col>
        <van-col span="4">量比</van-col>
        <van-col span="4">0.98</van-col>
        <van-col span="4">成交量</van-col>
        <van-col span="4">583844</van-col>
      </van-row>
      <van-row v-if="show">
        <van-col span="4">跌停</van-col>
        <van-col span="4">5.64</van-col>
        <van-col span="4">量比</van-col>
        <van-col span="4">0.98</van-col>
        <van-col span="4">成交额</van-col>
        <van-col span="4">2.90亿</van-col>
      </van-row>
      <van-row v-if="show">
        <van-col span="4">2.90亿</van-col>
        <van-col span="4">236480</van-col>
        <van-col span="4">总股本</van-col>
        <van-col span="4">14.9亿</van-col>
        <van-col span="4">流通值</van-col>
        <van-col span="4">52.1亿</van-col>
      </van-row>
      <van-row v-if="show">
        <van-col span="4">内盘</van-col>
        <van-col span="4">347363</van-col>
        <van-col span="4">流通股</van-col>
        <van-col span="4">10.6亿</van-col>
        <van-col span="4">净资</van-col>
        <van-col span="4">9.74</van-col>
      </van-row>
      <van-row v-if="show">
        <van-col span="4">市净率</van-col>
        <van-col span="4">0.50</van-col>
        <van-col span="4">总市值</van-col>
        <van-col span="4">73.0亿</van-col>
        <van-col span="4">市盈率</van-col>
        <van-col span="4">39.38</van-col>
      </van-row>
      <van-row v-if="show">
        <van-col span="4">收益(二)</van-col>
        <van-col span="4">0.06</van-col>
        <van-col span="4">委比</van-col>
        <van-col span="4">9.35%</van-col>
        <van-col span="4">委差</van-col>
        <van-col span="4">1666</van-col>
      </van-row>
    </div>
    <!-- 交易软件当前时间显示 -->
    <div class="quotation-date" v-if="show">
      <p>
        财政年结日
        <span>2018-06-30</span>
      </p>
    </div>
    <div class="up-icon">
      <van-icon name="arrow-down" color="#7F819B" v-if="shows" @click="show=true,shows=false" />
      <van-icon name="arrow-up" color="#7F819B" @click="show=false,shows=true" v-if="show" />
    </div>
    <!-- 图表分析展示 -->
    <div class="quotation-crap">
      <div class="quotation-crap-trend">
        <van-tabs v-model="timer" background="#20212A" line-height="0" title-active-color="#2F98FF">
          <van-tab title="分时" id="myChart" >
            <div slot="default" >
              <div>12315432165431654</div>
            </div>
          </van-tab>
          <van-tab title="日K">日k</van-tab>
          <van-tab title="周K">周K</van-tab>
          <van-tab title="月K">月K</van-tab>
        </van-tabs>
      </div>
      <div class="quotation-news">
        <van-tabs
          v-model="tidings"
          background="#20212A"
          line-height="0"
          title-active-color="#2F98FF"
        >
          <van-tab title="新闻">
            <!-- <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
            >-->
            <van-list>
              <div slot="default" v-for="(item,index) in list" :key="index">
                <p>{{ item.title }}</p>
                <p>
                  <span>{{ item.timer }}</span>
                </p>
              </div>
            </van-list>
          </van-tab>
          <van-tab title="公告">
            <van-list>
              <div slot="default" v-for="(item,index) in notice" :key="index">
                <p>{{ item.title }}</p>
                <p class="quotation-right">
                  <span>{{ item.timer }}</span>
                </p>
              </div>
            </van-list>
          </van-tab>
          <van-tab title="分析">
            <div slot="default">
              <p class="quotation-img-two">
                <img src="@/assets/img/hollow.png" />
              </p>
              <span class="quotation-test">暂无分析动态</span>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <!-- 底部导航 -->
    <app-tabbar />
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "QuotationNum",
  data() {
    return {
      show: true,
      shows: false,
      timer: "0",
      tidings: 0,
      list: [
        {
          title: "07月25日主力资金抢筹最积极的前10股（附名单）",
          timer: "今天 15:10"
        },
        {
          title: "07月25日主力资金抢筹最积极的前10股（附名单）",
          timer: "今天 15:10"
        },
        {
          title: "07月25日主力资金抢筹最积极的前10股（附名单）",
          timer: "今天 15:10"
        },
        {
          title: "食品饮料行业Q2基金持仓分析：食品饮料持仓创历史新高处上升期",
          timer: "今天 15:10"
        }
      ],
      notice: [
        { title: "贵州茅台关于会计政策变更的公告", timer: "2019-07-17" },
        {
          title: "贵州茅台第二届监事会2019年度第三次会议决议的…",
          timer: "2019-07-17"
        },
        { title: "贵州茅台关于会计政策变更的公告", timer: "2019-07-17" },
        { title: "贵州茅台关于会计政策变更的公告", timer: "2019-07-17" },
        { title: "贵州茅台关于会计政策变更的公告", timer: "2019-07-17" }
      ],
      

      resData: "",
      echartsOption: {
        title: {
          text: "上证指数",
          left: 0
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        legend: {
          data: ["日K", "MA5", "MA10", "MA20", "MA30"]
        },
        grid: {
          left: "10%",
          right: "10%",
          bottom: "15%"
        },
        xAxis: {
          type: "category",
          data: [],
          scale: true,
          boundaryGap: false,
          axisLine: { onZero: false },
          splitLine: { show: false },
          splitNumber: 20,
          min: "dataMin",
          max: "dataMax"
        },
        yAxis: {
          scale: true,
          splitArea: {
            show: true
          }
        },
        dataZoom: [
          {
            type: "inside",
            start: 30,
            end: 70
          },
          {
            show: true,
            type: "slider",
            y: "90%",
            start: 0,
            end: 75
          }
        ],
        series: [
          {
            name: "日K",
            type: "k",
            data: [],
            itemStyle: {
              normal: {
                color: "#ec0000",
                color0: "#00da3c",
                borderColor: "#8A0000",
                borderColor0: "#008F28"
              }
            },
            markPoint: {
              label: {
                normal: {
                  formatter: function(param) {
                    return param != null ? Math.round(param.value) : "";
                  }
                }
              },
              data: [
                {
                  name: "highest value",
                  type: "max",
                  valueDim: "highest"
                },
                {
                  name: "lowest value",
                  type: "min",
                  valueDim: "lowest"
                },
                {
                  name: "average value on close",
                  type: "average",
                  valueDim: "close"
                }
              ],
              tooltip: {
                formatter: function(param) {
                  return param.name + "<br>" + (param.data.coord || "");
                }
              }
            },
            markLine: {
              symbol: ["none", "none"],
              data: [
                [
                  {
                    name: "from lowest to highest",
                    type: "min",
                    valueDim: "lowest",
                    symbol: "circle",
                    symbolSize: 10,
                    label: {
                      normal: { show: false },
                      emphasis: { show: false }
                    }
                  },
                  {
                    type: "max",
                    valueDim: "highest",
                    symbol: "circle",
                    symbolSize: 10,
                    label: {
                      normal: { show: false },
                      emphasis: { show: false }
                    }
                  }
                ]
              ]
            }
          }
        ]
      }



    };
  },
mounted() {
    this.setEchartOption();
    this.myChart = echarts.init(document.getElementById("myChart"));
    this.myChart.setOption(this.echartsOption);
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },


        setEchartOption() {
      // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
      this.resData = splitData([
        ["2013/1/24", 2320.26, 2320.26, 2287.3, 2362.94],
        ["2013/1/25", 2300, 2291.3, 2288.26, 2308.38],
        ["2013/1/28", 2295.35, 2346.5, 2295.35, 2346.92],
        ["2013/1/29", 2347.22, 2358.98, 2337.35, 2363.8],
        ["2013/1/30", 2360.75, 2382.48, 2347.89, 2383.76],
        ["2013/1/31", 2383.43, 2385.42, 2371.23, 2391.82],
        ["2013/2/1", 2377.41, 2419.02, 2369.57, 2421.15],
        ["2013/2/4", 2425.92, 2428.15, 2417.58, 2440.38],
        ["2013/2/5", 2411, 2433.13, 2403.3, 2437.42],
        ["2013/2/6", 2432.68, 2434.48, 2427.7, 2441.73],
        ["2013/2/7", 2430.69, 2418.53, 2394.22, 2433.89],
        ["2013/2/8", 2416.62, 2432.4, 2414.4, 2443.03],
        ["2013/2/18", 2441.91, 2421.56, 2415.43, 2444.8],
        ["2013/2/19", 2420.26, 2382.91, 2373.53, 2427.07],
        ["2013/2/20", 2383.49, 2397.18, 2370.61, 2397.94],
        ["2013/2/21", 2378.82, 2325.95, 2309.17, 2378.82],
        ["2013/2/22", 2322.94, 2314.16, 2308.76, 2330.88],
        ["2013/2/25", 2320.62, 2325.82, 2315.01, 2338.78],
        ["2013/2/26", 2313.74, 2293.34, 2289.89, 2340.71],
        ["2013/2/27", 2297.77, 2313.22, 2292.03, 2324.63],
        ["2013/2/28", 2322.32, 2365.59, 2308.92, 2366.16],
        ["2013/3/1", 2364.54, 2359.51, 2330.86, 2369.65],
        ["2013/3/4", 2332.08, 2273.4, 2259.25, 2333.54],
        ["2013/3/5", 2274.81, 2326.31, 2270.1, 2328.14],
        ["2013/3/6", 2333.61, 2347.18, 2321.6, 2351.44],
        ["2013/3/7", 2340.44, 2324.29, 2304.27, 2352.02],
        ["2013/3/8", 2326.42, 2318.61, 2314.59, 2333.67],
        ["2013/3/11", 2314.68, 2310.59, 2296.58, 2320.96],
        ["2013/3/12", 2309.16, 2286.6, 2264.83, 2333.29],
        ["2013/3/13", 2282.17, 2263.97, 2253.25, 2286.33],
        ["2013/3/14", 2255.77, 2270.28, 2253.31, 2276.22],
        ["2013/3/15", 2269.31, 2278.4, 2250, 2312.08],
        ["2013/3/18", 2267.29, 2240.02, 2239.21, 2276.05],
        ["2013/3/19", 2244.26, 2257.43, 2232.02, 2261.31],
        ["2013/3/20", 2257.74, 2317.37, 2257.42, 2317.86],
        ["2013/3/21", 2318.21, 2324.24, 2311.6, 2330.81],
        ["2013/3/22", 2321.4, 2328.28, 2314.97, 2332],
        ["2013/3/25", 2334.74, 2326.72, 2319.91, 2344.89],
        ["2013/3/26", 2318.58, 2297.67, 2281.12, 2319.99],
        ["2013/3/27", 2299.38, 2301.26, 2289, 2323.48],
        ["2013/3/28", 2273.55, 2236.3, 2232.91, 2273.55],
        ["2013/3/29", 2238.49, 2236.62, 2228.81, 2246.87],
        ["2013/4/1", 2229.46, 2234.4, 2227.31, 2243.95],
        ["2013/4/2", 2234.9, 2227.74, 2220.44, 2253.42],
        ["2013/4/3", 2232.69, 2225.29, 2217.25, 2241.34],
        ["2013/4/8", 2196.24, 2211.59, 2180.67, 2212.59],
        ["2013/4/9", 2215.47, 2225.77, 2215.47, 2234.73],
        ["2013/4/10", 2224.93, 2226.13, 2212.56, 2233.04],
        ["2013/4/11", 2236.98, 2219.55, 2217.26, 2242.48],
        ["2013/4/12", 2218.09, 2206.78, 2204.44, 2226.26],
        ["2013/4/15", 2199.91, 2181.94, 2177.39, 2204.99],
        ["2013/4/16", 2169.63, 2194.85, 2165.78, 2196.43],
        ["2013/4/17", 2195.03, 2193.8, 2178.47, 2197.51],
        ["2013/4/18", 2181.82, 2197.6, 2175.44, 2206.03],
        ["2013/4/19", 2201.12, 2244.64, 2200.58, 2250.11],
        ["2013/4/22", 2236.4, 2242.17, 2232.26, 2245.12],
        ["2013/4/23", 2242.62, 2184.54, 2182.81, 2242.62],
        ["2013/4/24", 2187.35, 2218.32, 2184.11, 2226.12],
        ["2013/4/25", 2213.19, 2199.31, 2191.85, 2224.63],
        ["2013/4/26", 2203.89, 2177.91, 2173.86, 2210.58],
        ["2013/5/2", 2170.78, 2174.12, 2161.14, 2179.65],
        ["2013/5/3", 2179.05, 2205.5, 2179.05, 2222.81],
        ["2013/5/6", 2212.5, 2231.17, 2212.5, 2236.07],
        ["2013/5/7", 2227.86, 2235.57, 2219.44, 2240.26],
        ["2013/5/8", 2242.39, 2246.3, 2235.42, 2255.21],
        ["2013/5/9", 2246.96, 2232.97, 2221.38, 2247.86],
        ["2013/5/10", 2228.82, 2246.83, 2225.81, 2247.67],
        ["2013/5/13", 2247.68, 2241.92, 2231.36, 2250.85],
        ["2013/5/14", 2238.9, 2217.01, 2205.87, 2239.93],
        ["2013/5/15", 2217.09, 2224.8, 2213.58, 2225.19],
        ["2013/5/16", 2221.34, 2251.81, 2210.77, 2252.87],
        ["2013/5/17", 2249.81, 2282.87, 2248.41, 2288.09],
        ["2013/5/20", 2286.33, 2299.99, 2281.9, 2309.39],
        ["2013/5/21", 2297.11, 2305.11, 2290.12, 2305.3],
        ["2013/5/22", 2303.75, 2302.4, 2292.43, 2314.18],
        ["2013/5/23", 2293.81, 2275.67, 2274.1, 2304.95],
        ["2013/5/24", 2281.45, 2288.53, 2270.25, 2292.59],
        ["2013/5/27", 2286.66, 2293.08, 2283.94, 2301.7],
        ["2013/5/28", 2293.4, 2321.32, 2281.47, 2322.1],
        ["2013/5/29", 2323.54, 2324.02, 2321.17, 2334.33],
        ["2013/5/30", 2316.25, 2317.75, 2310.49, 2325.72],
        ["2013/5/31", 2320.74, 2300.59, 2299.37, 2325.53],
        ["2013/6/3", 2300.21, 2299.25, 2294.11, 2313.43],
        ["2013/6/4", 2297.1, 2272.42, 2264.76, 2297.1],
        ["2013/6/5", 2270.71, 2270.93, 2260.87, 2276.86],
        ["2013/6/6", 2264.43, 2242.11, 2240.07, 2266.69],
        ["2013/6/7", 2242.26, 2210.9, 2205.07, 2250.63],
        ["2013/6/13", 2190.1, 2148.35, 2126.22, 2190.1]
      ]);
      this.echartsOption.xAxis.data = this.resData.categoryData;
      this.echartsOption.series[0].data = this.resData.values;
      console.log(this.echartsOption.xAxis.data);
      console.log(this.echartsOption.series[0].data);

      function splitData(rawData) {
        var categoryData = [];
        var values = [];
        for (var i = 0; i < rawData.length; i++) {
          categoryData.push(rawData[i].splice(0, 1)[0]);
          values.push(rawData[i]);
          console.log(categoryData);
          console.log(values);
        }
        return {
          categoryData: categoryData,
          values: values
        };
      }
    }



  }
};
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
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
      padding-left: 92px;
      span {
        display: inline-block;
        background: rgba(141, 77, 233, 1);
        border-radius: 1px;
        width: 16px;
        height: 11px;
        font-size: 16px;
        -webkit-transform: scale(0.5);
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 11px;
        padding: 5px;
        text-align: left;
      }
    }
    p:nth-child(2) {
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(127, 129, 155, 1);
      line-height: 17px;
      padding-left: 102px;
      padding-top: 2px;
    }
  }
}
.quotation-number {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgba(53, 192, 137, 1);
  border-bottom: 2px solid #14151c;
  padding: 0 15px;
  padding-bottom: 8px;
  .quotation-number-mark {
    font-size: 40px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
    padding-left: 25px;
    margin-right: -30px;
  }
  .quotation-number-gain {
    width: 46px;
    font-size: 14px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
  }
  .quotation-img {
    margin-top: -20px;
    margin-right: -18px;
  }
}
.quotation-list {
  padding: 8px 15px;
  font-size: 12px;
  color: rgba(127, 129, 155, 1);
  font-family: PingFangSC-Regular, PingFang SC;
  .van-row {
    padding: 4px 0;
    .van-col--4:nth-child(even) {
      color: #fff;
      text-align: right;
      padding-right: 6px;
    }
    .van-col--4:nth-child(6) {
      padding-right: 0;
    }
  }
}
.quotation-date {
  padding: 0 10px;
  border-top: 1px solid #14151c;
  box-sizing: border-box;
  p:nth-child(1) {
    padding-top: 8px;
    font-size: 12px;
    font-family: PingFangSC;
    font-weight: 400;
    color: rgba(127, 129, 155, 1);
    span {
      color: #fff;
    }
  }
}
.up-icon {
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #14151c;
  padding-bottom: 5px;
  .van-icon {
    font-size: 16px;
  }
}
.quotation-crap {
  padding: 0 15px;
  box-sizing: border-box;
  .van-tab__pane {
    height: 220px;
  }
  .quotation-news {
    border-top: 2px solid #14151c;
    /deep/.van-ellipsis {
      font-size: 16px;
    }
    .van-list {
      margin-bottom: 40px;
    }
    .van-tab__pane {
      div {
        border-bottom: 1px solid #14151c;
        padding: 10px 0;
        box-sizing: border-box;
        p:nth-child(1) {
          font-size: 14px;
          font-family: PingFangSC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }
        p:nth-child(2) {
          height: 16px;
          font-size: 11px;
          font-family: PingFangSC;
          font-weight: 400;
          color: rgba(109, 112, 135, 1);
          line-height: 16px;
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
          height: 17px;
          font-size: 12px;
          font-family: PingFangSC;
          font-weight: 400;
          color: rgba(83, 84, 92, 1);
          line-height: 17px;
        }
      }
    }
  }
}
</style>
