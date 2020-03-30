<template>
  <div class="personal">
    <van-nav-bar title="我 的" @click-right="handleRouterRight">
      <van-icon name="setting-o" slot="right" color="#fff" size="18px" />
    </van-nav-bar>
    <!-- 个人简介 -->
    <div class="personal-name">
        <img :src="headerPortrait" @click="handleRouterImg"/>
      <div>
        <p>{{ userName }}</p>
        <p>{{ brief }}</p>
      </div>
      <van-icon 
      name="arrow" 
      color="#707177" 
      @click="handleRouterLetter" />
    </div>
    <!-- 盒子 -->
    <div class="personal-box">
      <!-- 资金账户 -->
      <div>
        <img src="@/assets/img/account.png"/>
        <p @click="handleRouterCapital">资金账户</p>
      </div>
      <!-- 成交查询 -->
      <div>
        <img src="@/assets/img/deal.png"/>
        <p @click="handleRouterInquire">成交查询</p>
      </div>
      <!-- 委托查询 -->
      <div>
        <img src="@/assets/img/entrust.png"/>
        <p @click="handleRouterEntrust">委托查询</p>
      </div>
      <!-- 交割单查询 -->
      <div>
        <img src="@/assets/img/delivery.png"/>
        <p @click="handleRouterDelivery">交割单查询</p>
      </div>
      <!-- 流水查询 -->
      <div>
        <img src="@/assets/img/flowing-water.png"/>
        <p @click="handleRouterFlowingWater">流水查询</p>
      </div>
    </div>
    <!-- 底部导航 -->
    <app-tabbar />
  </div>
</template>

<script>
import Header from "@/assets/img/herder.png"; 
const http = "http://bourse.yidonghuayuan.com"

export default {
  name: "PersonalIndex",
  data() {
    return {
      userName: '',
      headerPortrait: '',
      Header,
      brief: '暂无个人简介',
      lodingText: '未登录',
      sessionid: ''
    };
  },
  created() {
    this.handleDetails()
    this.sessionid = window.localStorage.getItem('sessionid')
  },
  methods: {
    // 用户信息的跟新
    handleDetails () {
      const herderImg = window.localStorage.getItem('header_img')
      const headerName = window.localStorage.getItem('username')
      const headerIntro = window.localStorage.getItem('intro')
      if(herderImg) {
        this.headerPortrait = http + herderImg
      } else {
        this.headerPortrait = this.Header
      }
      if(headerName) {
        this.userName = headerName
      } else {
        this.userName = this.lodingText
      }
      if(headerIntro) {
        this.brief = headerIntro
      } else {
        this.brief = '没有个人简介'
      }
    },
    // 图片的跳转登录页
    handleRouterImg () {
      if(this.sessionid) {
        return
      } else {
        this.$router.push('/login')
      }
    },
    // 点击图标跳转
    handleRouterLetter () {
      if(this.sessionid) {
        this.$router.push('/letter')
      } else {
        return
      }
    },
    // 点击设置跳转权限
    handleRouterRight () {
      if(this.sessionid) {
        this.$router.push('/install')
      } else {
        return
      }
    },
    // 资金
    handleRouterCapital () {
      if(this.sessionid) {
        this.$router.push('/capital')
      } else {
        this.$router.push('/login')
      }
    },
    // 成交
    handleRouterInquire () {
      if(this.sessionid) {
        this.$router.push('/inquire')
      } else {
        this.$router.push('/login')
      }
    },
    // 委托
    handleRouterEntrust () {
      if(this.sessionid) {
        this.$router.push('/entrust')
      } else {
        this.$router.push('/login')
      }
    },
    // 交割
    handleRouterDelivery () {
      if(this.sessionid) {
        this.$router.push('/delivery')
      } else {
        this.$router.push('/login')
      }
    },
    // 流水
    handleRouterFlowingWater () {
      if(this.sessionid) {
        this.$router.push('/flowing-water')
      } else {
        this.$router.push('/login')
      }
    }
  }
};
</script>

<style lang="less" scoped>
.personal-name {
  height: 124px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-family: PingFangSC;
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  /deep/.van-uploader__input {
    width: 64px;
    height: 64px;
    border: 0;
  }
  div:nth-child(2) {
    padding-left: 20px;
    p:nth-child(1) {
      height: 24px;
      font-size: 17px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 24px;
      margin-bottom: 2px;
    }
    p:nth-child(2) {
      flex-wrap: wrap;
      padding-top: 5px;
      height: 17px;
      font-size: 12px;
      font-weight: 400;
      color: rgba(116, 119, 143, 1);
      line-height: 17px;
    }
  }
  .van-icon-arrow {
    margin-left: auto;
    font-size: 16px;
    padding: 0;
  }
}
.personal-box {
  padding: 0 15px;
  div {
    border-top: 1px solid #14151c;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: PingFangSC;
    font-weight: 500;
    color: #fff;
    img {
      padding-right: 15px;
    }
    // a {
    //   color: #fff;
    // }
  }
}
.van-hairline--top-bottom {
  background-color: #20212a;
}
.van-tabbar-item__text {
  height: 14px;
  font-size: 10px;
  font-family: PingFangSC;
  font-weight: 500;
  line-height: 14px;
}
.van-tabbar-item__icon {
  width: 18px;
  height: 18px;
}
.van-icon-arrow {
  padding-top: 50px;
}
</style>
