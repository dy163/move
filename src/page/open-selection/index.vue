<template>
    <div class="open-selection">
        <van-nav-bar
        title="开 户"
        left-arrow
        @click-left="$router.back()"
        />
        <div class="blank-space"></div>
        <!-- 手机验证开户 -->
        <div class="open-selection-rapidly">
            <img src="@/assets/img/gsou.png">
            <div @click="gsouClick = true">
                <router-link to="/sign/cellphone-open">极速开户</router-link>
                <!-- <router-link to="">极速开户</router-link> -->
                <p>1分钟提交真实身份信息即可成功开户。</p>
            </div>
        </div>
        <!-- 隐私保护 -->
        <div class="open-selection-rapidly">
            <img src="@/assets/img/privacy.png">
            <div>
                <router-link to="/sign/treaty-particulars">隐私保护</router-link>
                <p>除非法律法规特别要求，绝不会将您的个人信息、非公开信息披露给第三方。</p>
            </div>
        </div>
        <!-- 投资保障 -->
        <div class="open-selection-rapidly">
            <img src="@/assets/img/invest.png">
            <div>
                <router-link to="/sign/treaty-particulars">投资保障</router-link>
                <p>股票交易清算托管与某某证券，客户资产由某某托管。</p>
            </div>
        </div>
        <div class="login-btn-box">
            <van-button
            class="login-btn"
            to="/sign/cellphone-open"
            hairline
            round
            >立即开户</van-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'OpenSelectionIndex',
  data () {
    return {
      show: false
    }
  },
  methods: {

  }

}
</script>

<style lang="less" scoped>
.blank-space {
    height:100px;
    background:rgba(54,55,64,1);
}
.open-selection-rapidly {
    padding: 0 35px;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 30px 0 45px;
    img {
        height: 45px;
    }
    p {
        color: #fff;
        height:15px;
        font-size:12px;
        font-family:PingFangSC;
        font-weight:400;
        line-height:15px;
        padding-top: 10px;
    }
    a {
        color: #2F98FF;
        width:68px;
        height:22px;
        font-size:16px;
        font-family:PingFangSC;
        font-weight:500;
        line-height:22px;
    }
    div {
        padding-left: 20px;
    }
}
.login-btn-box {
    padding: 0 63px;
    margin-top: 72px;
    .login-btn {
        width:250px;
        height:40px;
        background:rgba(47,152,255,1);
        border-radius:25px;
        color: #fff;
        font-size:16px;
        font-family:PingFangSC;
        font-weight:500;
    }
}
</style>
