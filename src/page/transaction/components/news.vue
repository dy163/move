<template>
  <div class="news">
    <van-tabs v-model="tidings" background="#20212A" line-height="0" title-active-color="#2F98FF" >
      <van-tab title="资金" >
        <div class="news-flow">
          <div>
            <p>资金流向</p>
          </div>
          <div class="news-explicit">
            <p><span class="news-inflow"></span>资金流入</p>
            <p><span class="news-outflow"></span>资金流出</p>
          </div>
        </div>
        <!-- 资金图表展示 -->
        <div id="chart" ref="bar_v"></div>
        <!-- 资金图表展示 -->
        <div class="news-row">
          <van-row>
            <van-col span="6"></van-col>
            <van-col span="6">流入</van-col>
            <van-col span="6">流出</van-col>
            <van-col span="6">净流入</van-col>
          </van-row>
          <van-row>
            <van-col span="6">超大单</van-col>
            <van-col span="6">span</van-col>
            <van-col span="6">span</van-col>
            <van-col span="6">span</van-col>
          </van-row>
          <van-row>
            <van-col span="6">大单</van-col>
            <van-col span="6">span</van-col>
            <van-col span="6">span</van-col>
            <van-col span="6">span</van-col>
          </van-row>
          <van-row>
            <van-col span="6">中单</van-col>
            <van-col span="6">span</van-col>
            <van-col span="6">span</van-col>
            <van-col span="6">span</van-col>
          </van-row>
          <van-row>
            <van-col span="6">小单</van-col>
            <van-col span="6">span</van-col>
            <van-col span="6">span</van-col>
            <van-col span="6">span</van-col>
          </van-row>
        </div>
      </van-tab>
      <van-tab title="公告">
        <van-list>
          <div class="news-content" slot="default" v-for="(item,index) in notice" :key="index">
            <p class="news-top">{{ item.title }}</p>
            <p class="news-right">
              <span>{{ item.timer }}</span>
            </p>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'news',
  data () {
    return {
      tidings: 0,
      notice: [
        { title: '贵州茅台关于会计政策变更的公告', timer: '2019-07-17' },
        { title: '贵州茅台第二届监事会2019年度第三次会议决议的…',timer: '2019-07-17' },
        { title: '贵州茅台关于会计政策变更的公告', timer: '2019-07-17' },
        { title: '贵州茅台关于会计政策变更的公告', timer: '2019-07-17' },
        { title: '贵州茅台关于会计政策变更的公告', timer: '2019-07-17' }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.handleclick();
    });
  },
  methods: {
    handleclick () {
      var bar_dv = this.$refs.bar_v;
      let myChart = echarts.init(bar_dv)

      var option = {
        tooltip: {
          trigger: 'item',
        },
        title: {
            text: '资金分布',
            subtext: "2020-01-08",
            top: '40%',
            left: 'center',
            textStyle:{
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'PingFangSC',
                fontSize: 14,
            }
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '65%'],
            center: ['50%', '50%'],
            legendHoverLink: false,     // 是否启用图例 hover 时的联动高亮。
            hoverAnimation: false ,     // 是否开启 hover 在扇区上的放大动画效果
            label: {
              // show: false,
              formatter: '{per|{b}}{d}%',
              // color: "#c9c9c9" ,
              rich: {   // {a}：系列名  {b}：数据名   {c}：数据值   {d}：百分比
                b: {
                  fontSize: 16,
                  lineHeight: 33,
                  align: 'right'
                },
                per: {
                  color: '#c9c9c9',
                  padding: [0, 4]
                }
              }
            },
            labelLine: {
              lineStyle: {
                color: '#c9c9c9'
              },
            },
            data: [
              {value: 335, name: '超大单',itemStyle:{color:'#19694A'}},
              {value: 310, name: '大单',itemStyle:{color:'#20855E'}},
              {value: 234, name: '中单',itemStyle:{color:'#28A171'}},
              {value: 135, name: '小单',itemStyle:{color:'#33C089'}},
              {value: 448, name: '小单',itemStyle:{color:'#F54545'}},
              {value: 251, name: '中单',itemStyle:{color:'#CE3838'}},
              {value: 147, name: '大单',itemStyle:{color:'#B02D2D'}},
              {value: 302, name: '超大单',itemStyle:{color:'#912323'}}
            ]
          }
        ]
      };
      myChart.setOption(option)
    }
  },
}
</script>

<style lang='less' scoped>
.news {
  margin-bottom: 50px;
  /deep/.van-hairline--top-bottom {
    border-bottom: 0.8px solid #141c18;
  }
  /deep/.van-ellipsis {
    font-size: 16px;
  }
  .van-tab__pane {
    font-family: PingFangSC;
    // padding: 0 15px;
    .news-content {
      padding: 0 15px;
      border-bottom: 0.8px solid #14151c;
      .news-top {
        font-size: 14px;
        font-weight: 500;
        padding-top: 10px;
        color: rgba(255, 255, 255, 1);
      }
      .news-right {
        text-align: right;
        height: 16px;
        font-size: 11px;
        font-weight: 400;
        color: #6d7087;
        line-height: 16px;
        padding: 8px 0;
      }
    }
    .news-flow {
      height: 50px;
      font-size: 16px;
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      .news-explicit {
        font-size: 14px;
        display: flex;
        color: #e2e1e1;
        span {
          display: inline-block;
          margin-right: 5px;
        }
        .news-inflow {
          border: 4px solid #ff0000;
        }
        .news-outflow {
          border: 4px solid #23b47b;
        }
        p:nth-child(1) {
          margin-right: 5px;
        }
      }
    }
    .news-row {
      color: #e2e1e1;
      font-size: 15px;
      padding: 0 15px;
      .van-row {
        height: 36px;
        line-height: 36px;
        .van-col--6:nth-child(4) {
          text-align: right;
        }
      }
      .van-row:nth-child(2), 
      .van-row:nth-child(3), 
      .van-row:nth-child(4), 
      .van-row:nth-child(5) {
        .van-col--6:nth-child(2) {
          color: #ce3838;
        }
      }
      .van-row:nth-child(2), 
      .van-row:nth-child(3), 
      .van-row:nth-child(4), 
      .van-row:nth-child(5) {
        .van-col--6:nth-child(3) {
          color: #28a171;
        }
      }
      .van-row:nth-child(2), 
      .van-row:nth-child(4) {
        background-color: #171822;
      }
    }
  }
  #chart {
    height: 200px;
    width: 375px;
  }
}
</style>
