<template>
    <div class="letter">
        <div class="letter-nav">
          <van-icon name="arrow-left" @click="$router.back()"/>
          <p class="myself">个人简介</p>
          <p class="letter-nav-spot" @click="$router.push('/myself')">
            <span></span>
            <span></span>
            <span></span>
          </p>
        </div>
        <div class="letter-content">
          <img :src="headerPortrait" />
          <p>{{ name }}</p>
        </div>
        <div class="letter-dynamic">
          <img src="@/assets//img/hollow.png" alt="">
          <p>暂无动态</p>
        </div>
    </div>
</template>

<script>
import Header from "@/assets/img/herder.png"; 
const http = "http://bourse.yidonghuayuan.com"

export default {
  name: 'Letter',
  data () {
    return {
      name: '',
      Header,
      headerPortrait: ''
    }
  },
  created() {
    const herderImg = window.localStorage.getItem('header_img')
    if(herderImg) {
      this.headerPortrait = http + herderImg
    } else {
      this.headerPortrait = this.Header
    }
    this.name = window.localStorage.getItem('username')
  },
}
</script>

<style lang='less' scoped>
.letter-nav {
  height: 46px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:rgba(255,255,255,1);
  border-bottom: 2px solid #14151C;
  .van-icon-arrow-left {
    width: 30px;
  }
  .myself {
    height:24px;
    font-size:17px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    line-height:24px;
  }
  .letter-nav-spot {
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    span {
      display: inline-block;
      width: 5px;
      height: 5px;
      background-color: #fff;
      border-radius: 50%;
    }
  }
}
.letter-content {
  height:156px;
  text-align: center;
  background:rgba(34,34,46,1);
  img {
    margin-top: 18px;
    width: 68px;
    height: 68px;
    border-radius: 50%;
  }
  p {
    height:20px;
    font-size:14px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:20px;
  }
}
.letter-dynamic {
  text-align: center;
  img {
    margin-top: 100px;
  }
  p {
    height:17px;
    font-size:12px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(83,84,92,1);
    line-height:17px;
  }
}
</style>
