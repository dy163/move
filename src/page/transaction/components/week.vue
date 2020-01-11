<template>
  <div>
    <div id="week" class="text" ref="week"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import { klineWeek } from "@/api/stocktime";

export default {
  name: "ches",
  data() {
    return {
      showList: [],
      weeklydata: [] //  周k数据
    };
  },
  mounted() {
    // this.handleKlineWeek();
    this.$nextTick(() => {
      this.handleKlineWeek();
    });
  },
  methods: {
    async handleKlineWeek(q) {
      try {
        this.showList = this.$route.query.q; // 获取动态参数
        const formData = new FormData();
        formData.append("stock_code", this.showList.stock_code);
        const res = await klineWeek(formData);
        const time = []; // 遍历时间
        const open = []; // 遍历开盘数据
        const close = []; // 遍历闭盘数据
        const lowest = []; // 遍历最低数据
        const highest = []; // 遍历最高数据
        const volumes = []; // 遍历成交量数据
        /**
         * 遍历拿到数据
         */
        res.data.result.forEach((item, index) => {
          time.unshift(item.date);
          open.unshift(item.open);
          close.unshift(item.close);
          lowest.unshift(item.low);
          highest.unshift(item.high);
          volumes.unshift(item.volumn);
        });
        time.forEach((item, index) => {
          this.weeklydata[index] = [
            time[index],
            open[index],
            close[index],
            lowest[index],
            highest[index],
            volumes[index]
          ];
        });
        /**
         * 加载K线图
         */
        const week = this.$refs.week;
        const myChart = echarts.init(week)
        // const myChart = echarts.init(document.getElementById("week"));
        var upColor = "#ec0000";
        var downColor = "#00da3c";
        // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
        var data0 = splitData(this.weeklydata);
        function splitData(rawData) {
          var categoryData = [];
          var values = [];
          var volumes = [];
          for (var i = 0; i < rawData.length; i++) {
            categoryData.push(rawData[i].splice(0, 1)[0]);
            values.push(rawData[i]);
            volumes.push([
              i,
              rawData[i][4],
              rawData[i][0] > rawData[i][1] ? 1 : -1
            ]);
          }
          return {
            categoryData: categoryData,
            values: values,
            volumes: volumes
          };
        }
        function calculateMA(dayCount) {
          var result = [];
          for (var i = 0, len = data0.values.length; i < len; i++) {
            if (i < dayCount) {
              result.push("-");
              continue;
            }
            var sum = 0;
            for (var j = 0; j < dayCount; j++) {
              sum += data0.values[i - j][1];
            }
            result.push(sum / dayCount);
          }
          return result;
        }
        var option = {
          animation: false,
          legend: {
            left: "center",
            data: ["周k", "MA5", "MA10", "MA20", "MA30"],
            textStyle: {
              color: "#fff"
            }
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross"
            },
            backgroundColor: "rgba(245, 245, 245, 0.8)",
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            textStyle: {
              color: "#000"
            },
            position: function(pos, params, el, elRect, size) {
              var obj = { top: 10 };
              obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
              return obj;
            }
          },
          axisPointer: {
            link: { xAxisIndex: "all" },
            label: {
              backgroundColor: "#777"
            }
          },
          visualMap: {
            show: false,
            seriesIndex: 5,
            dimension: 2,
            pieces: [
              {
                value: 1,
                color: downColor
              },
              {
                value: -1,
                color: upColor
              }
            ]
          },
          grid: [
            {
              left: 15,
              right: 15,
              top: 30,
              height: 120
            },
            {
              left: 15,
              right: 15,
              height: 40,
              top: 170
            }
          ],
          xAxis: [
            {
              type: "category",
              data: data0.categoryData,
              scale: true,
              boundaryGap: false,
              axisLine: { onZero: false },
              splitLine: { show: false },
              splitNumber: 20,
              min: "dataMin",
              max: "dataMax",
              axisLine: {
                lineStyle: {
                  color: "#9398B1"
                }
              },
              axisPointer: {
                z: 100
              }
            },
            {
              type: "category",
              gridIndex: 1,
              data: data0.categoryData,
              scale: true,
              boundaryGap: false,
              axisLine: { onZero: false },
              axisTick: { show: false },
              splitLine: { show: false },
              axisLabel: { show: false },
              textStyle: {
                color: "#fff"
              },
              splitNumber: 2,
              min: "dataMin",
              max: "dataMax"
            }
          ],
          yAxis: [
            {
              show: false,
              scale: true,
              splitLine: { show: false },
              axisTick: { show: false },
              axisLabel: {
                show: false,
                inside: true,
                formatter: "{value}\n"
              },
              splitArea: {
                show: true
              }
            },
            {
              scale: true,
              gridIndex: 1,
              splitNumber: 2,
              axisLabel: { show: false },
              axisLine: { show: false },
              axisTick: { show: false },
              splitLine: { show: false }
            }
          ],
          dataZoom: [
            {
              type: "inside",
              xAxisIndex: [0, 1],
              start: 0,
              end: 80
            },
            {
              show: false,
              xAxisIndex: [0, 1],
              type: "slider",
              top: "85%",
              start: 20,
              end: 80
            }
          ],
          series: [
            {
              name: "周k",
              type: "candlestick",
              data: data0.values,
              itemStyle: {
                normal: {
                  color: upColor,
                  color0: downColor,
                  borderColor: null,
                  borderColor0: null
                }
              },
              tooltip: {
                formatter: function(param) {
                  param = param[0];
                  return [
                    "Date: " + param.name + '<hr size=1 style="margin: 3px 0">',
                    "Open: " + param.data[0] + "<br/>",
                    "Close: " + param.data[1] + "<br/>",
                    "Lowest: " + param.data[2] + "<br/>",
                    "Highest: " + param.data[3] + "<br/>"
                  ].join("");
                }
              }
            },
            {
              name: "MA5",
              type: "line",
              data: calculateMA(5),
              smooth: true,
              showSymbol: false,
              lineStyle: {
                normal: { opacity: 0.5 }
              }
            },
            {
              name: "MA10",
              type: "line",
              data: calculateMA(10),
              smooth: true,
              showSymbol: false,
              lineStyle: {
                normal: { opacity: 0.5 }
              }
            },
            {
              name: "MA20",
              type: "line",
              data: calculateMA(20),
              smooth: true,
              showSymbol: false,
              lineStyle: {
                normal: { opacity: 0.5 }
              }
            },
            {
              name: "MA30",
              type: "line",
              data: calculateMA(30),
              smooth: true,
              showSymbol: false,
              lineStyle: {
                normal: { opacity: 0.5 }
              }
            },
            {
              name: "Volume",
              type: "bar",
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: data0.volumes
            }
          ]
        };
        myChart.setOption(option);
      } catch (error) {}
    }
  }
};
</script>

<style lang='less' scoped>
.text {
  width: 375px;
  height: 220px;
  margin: 0 auto;
  font-size: 12px;
  background-color: #fff;
  background-color: #20212a;
}
</style>