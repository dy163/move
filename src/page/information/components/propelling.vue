<template>
  <div class="propelling">
    <van-list>
      <div
        class="propelling-content"
        v-for="(item, index) in newsList"
        :key="index"
        @click="clickPush"
      >
        <div>
          <p class="propelling-title">{{ item.title }}</p>
          <p class="propelling-name">
            {{ item.source }}
            <span>{{ item.date }}</span>
          </p>
        </div>
        <div class="img">
          <img src="@/assets/img/blank-picture.png" alt />
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "Propelling",
  props: {},
  data() {
    return {
      newsList: [
        {
          title: "港股独角兽周年记：折翼的小米集团能在成资本宠儿么",
          source: "腾讯深网 今天",
          date: "11:26"
        },
        {
          title: "港股独角兽周年记：折翼的小米集团能在成资本宠儿么",
          source: "腾讯深网 今天",
          date: "11:26"
        },
        {
          title: "港股独角兽周年记：折翼的小米集团能在成资本宠儿么",
          source: "腾讯深网 今天",
          date: "11:26"
        },
        {
          title: "港股独角兽周年记：折翼的小米集团能在成资本宠儿么",
          source: "腾讯深网 今天",
          date: "11:26"
        },
        {
          title: "港股独角兽周年记：折翼的小米集团能在成资本宠儿么",
          source: "腾讯深网 今天",
          date: "11:26"
        },
        {
          title: "港股独角兽周年记：折翼的小米集团能在成资本宠儿么",
          source: "腾讯深网 今天",
          date: "11:26"
        },
        {
          title: "港股独角兽周年记：折翼的小米集团能在成资本宠儿么",
          source: "腾讯深网 今天",
          date: "11:26"
        },
        {
          title: "港股独角兽周年记：折翼的小米集团能在成资本宠儿么",
          source: "腾讯深网 今天",
          date: "11:26"
        }
      ]
    };
  },
  created() {},
  methods: {
    clickPush() {
      this.$router.push("/particulars");
    }
  }
};
</script>

<style lang='less' scoped>
.propelling {
  padding: 0 15px;
  .propelling-title {
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 500;
    line-height: 24px;
    margin-right: 10px;
  }
  .propelling-content {
    padding: 10px 0;
    border-bottom: 1px solid #000;
    display: flex;
  }
}
.propelling-name {
  height: 16px;
  font-size: 11px;
  font-family: PingFangSC;
  font-weight: 400;
  color: rgba(106, 109, 131, 1);
  line-height: 16px;
  padding-top: 12px;
}
</style>