<template>
    <div class="about-us">
        <van-nav-bar
        title="关于我们"
        @click-left="$router.back()">
            <van-icon name="arrow-left" slot="left"/>
        </van-nav-bar>
        <div class="about-icon">
            <p></p>
        </div>
        <div class="about-pack">
            <p>亿动华源</p>
            <p>版本信息：v1.1.0</p>
            <p>Copyright@2018</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'aboutUs',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.about-icon {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    p {
        width:80px;
        height:80px;
        background:rgba(216,216,216,1);
        border-radius:10px;
    }
}
.about-pack {
    text-align: center;
    p:nth-child(1) {
        padding-top: 20px;
        height:22px;
        font-size:16px;
        font-family:PingFangSC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:22px;
    }
    p:nth-child(2) {
        padding-top: 10px;
        height:18px;
        font-size:13px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(105,106,128,1);
        line-height:18px;
    }
    p:nth-child(3) {
        padding-top: 280px;
        height:18px;
        font-size:13px;
        font-family:PingFangSC;
        font-weight:500;
        color:rgba(105,106,128,1);
        line-height:18px;
    }
}
</style>
