<template>
    <!-- 底部导航 -->
    <van-tabbar v-model="active" class="active_tab" active-color="#5794F0" inactive-color="#fff">
      <van-tabbar-item
        v-for="(item,index) in tabbars"
        :key="index"
        :to="(item.name)">
        <span>{{item.title}}</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? item.active : item.normal">
        </template>
      </van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
  name: 'AppTabbar',
  data () {
    return {
      active: '',
      tabbars: [
        {
          name: 'quotation',
          title: '行情',
          normal: require('./img/quotation.png'),
          active: require('./img/quotation-ac.png')
        },
        {
          name: 'information',
          title: '资讯',
          normal: require('./img/information.png'),
          active: require('./img/information-ac.png')
        },
        {
          name: 'oneself',
          title: '自选',
          normal: require('./img/optional.png'),
          active: require('./img/optional-ac.png')
        },
        {
          name: '/',
          title: '资产',
          normal: require('./img/assets.png'),
          active: require('./img/assets-ac.png')
        },
        {
          name: 'personal',
          title: '我的',
          normal: require('./img/mine.png'),
          active: require('./img/mine-ac.png')
        }
      ]
    }
  },
  created () {
    if (this.$route.name === 'quotation') {
      this.active = 0
    } else if (this.$route.name === 'information') {
      this.active = 1
    } else if (this.$route.name === 'oneself') {
      this.active = 2
    } else if (this.$route.name === 'capital') {
      this.active = 3
      return
    } else if (this.$route.name === 'personal') {
      this.active = 4
    }
  }
}
</script>

<style lang="less" scoped>
.van-tab__pane {
    color: #fff;
}
.van-hairline--top-bottom {
    background-color: #20212A;
    border-top: 1px solid #14151C;
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
