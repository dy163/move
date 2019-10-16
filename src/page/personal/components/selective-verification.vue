<template>
    <div class="selective">
        <van-nav-bar
        title="修改手机号"
        left-arrow
        @click-left="$router.back()"
        />
        <div class="selective-content">
            <div>
                <span>为保证您的帐号安全，需选择一种方式进行验证您的身份</span>
            </div>
            <div @click="handleClick">
                <img src="@/assets/img/cut.png">
                <p>短信验证</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'SelectiveVerification',
  data () {
    return {

    }
  },
  methods: {
    handleClick () {
      this.$router.push('/binding-mobile')
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
    background-color: #20212A;
}
.van-nav-bar .van-icon {
    color: #fff;
}
.van-hairline--bottom::after {
    border-bottom: 2px solid #14151C;
}
.selective-content {
    padding: 0 15px;
    div:nth-child(1){
        padding-top: 20px;
        height:36px;
        font-size:14px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:18px;
    }
    div:nth-child(2) {
        height:101px;
        height: 101px;
        margin-top: 30px;
        background:linear-gradient(90deg,rgba(163,114,255,1) 0%,rgba(100,90,255,1) 100%);
        border-radius:3px;
        display: flex;
        align-items: center;
        p {
            width:66px;
            height:22px;
            font-size:16px;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:22px;
            padding-left: 77px;
        }
        img {
            padding-top: 24px;
            width: 62px;
            height: 75px;
        }

    }
}
</style>
