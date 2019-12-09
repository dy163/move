<template>
    <div class="bank-card">
        <van-nav-bar title="我的银行卡" @click-left="$router.back()"  @click-right="onClickRight">
            <van-icon name="arrow-left" slot="left"/>
            <van-icon name="plus" slot="right" size="16px"/>
        </van-nav-bar>
        <div class="bank-card-content">
            <img src="@/assets/img/sign.png" alt="">
            <p>暂无银行卡</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'BankCard',
  data () {
    return {

    }
  },
  methods: {
    onClickRight () {
      this.$router.push({name:'sign',params: {type: 'bank-card-information'}});
    }
  }
}
</script>

<style lang="less" scoped>
.bank-card {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #14151C;
}
.bank-card-content {
    padding-top: 100px;
    text-align: center;
    img {
        display: inline-block;
        border: 2px dotted #20212A;
    }
    p {
        padding-top: 12px;
        height:17px;
        font-size:12px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:17px;
    }
}
</style>
