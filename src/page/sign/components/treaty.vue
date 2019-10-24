<template>
    <div class="treaty">
        <van-nav-bar
        title="协 议 认 可"
        left-arrow
        @click-left="$router.back()"/>
        <div class="success-content">
            <img src="@/assets/img/recognition.png" alt="">
            <p>我已阅读并同意全部开户文件，了解相关风险并自愿在某某证券开户。</p>
        </div>
        <div class="declare">
            <router-link to="/sign/treaty-particulars">风险披露声明</router-link>
        </div>
        <div class="login-btn-box">
            <van-button
            class="login-btn"
            to="/sign/open-examine"
            >完成</van-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Treaty',
  props: {},
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
p {
    width:224px;
    height:40px;
    font-size:14px;
    font-family:PingFangSC;
    font-weight:500;
    color:#fff;
    line-height:20px;
}
.success-content {
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        margin-top: -20px;
        margin-right: 8px;
    }
}
.declare {
    text-align: center;
    padding: 10px 0 50px;
    height:17px;
    font-size:12px;
    font-family:PingFangSC;
    font-weight:400;
    line-height:17px;
    a {
        color: #2F98FF;
    }
}
.login-btn-box {
    padding: 0 15px;
}
.login-btn {
    width: 100%;
    height:44px;
    background: #2F98FF;
    border-radius:3px;
    .van-button__text {
        width:32px;
        height:22px;
        font-size:16px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:22px;
  }
}
</style>
