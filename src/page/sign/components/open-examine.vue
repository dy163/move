<template>
    <div class="open-examine">
        <!-- 头部 -->
        <van-nav-bar
        title="开 户 审 核"
        @click-left="$router.back()">
            <van-icon name="arrow-left" slot="left"/>
        </van-nav-bar>
        <!-- 审核状态提示 -->
        <div class="success-content" @click="$router.push('/login')">
            <img src="@/assets/img/success.png" alt="">
        </div>
        <div class="open-examine-test">
            <p>审核状态须(1-3)个工作日完成，请及时查看手机短信提示！</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'OpenExamine',
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
.success-content {
    padding-top: 100px;
    text-align: center;
}
.open-examine-test {
    text-align: center;
    padding: 20px 54px;
    width:268px;
    height:36px;
    font-size:13px;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:18px;
}
</style>
