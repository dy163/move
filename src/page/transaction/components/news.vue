<template>
  <div class="oneself-news">
    <van-tabs v-model="tidings" background="#20212A" line-height="0" title-active-color="#2F98FF">
      <van-tab title="新闻">
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
            <p class="oneself-right">
              <span>{{ item.timer }}</span>
            </p>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="分析">
        <div slot="default">
          <p class="oneself-img">
            <img src="@/assets/img/hollow.png" />
          </p>
          <span class="oneself-test">暂无分析动态</span>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {
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
      ]
    };
  }
};
</script>


<style lang='less' scoped>
.oneself-news {
  padding: 0 15px;
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
      .oneself-right {
        text-align: right;
      }
      .oneself-img {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 50px;
      }
      .oneself-test {
        display: flex;
        justify-content: center;
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(83, 84, 92, 1);
        line-height: 17px;
        text-align: center;
        padding-bottom: 50px;
      }
    }
  }
}
</style>