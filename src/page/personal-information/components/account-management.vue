<template>
    <div class="account">
        <van-nav-bar
        title="账号管理"
        left-arrow
        @click-left="$router.back()"
        />
        <div class="account-jump">
            <div>
                <span></span>
                <p>手机号</p>
            </div>
            <div>
                <span>176****2000</span>
                <van-icon name="arrow" color="#7F819B" size="15px"/>
            </div>
        </div>
        <div class="account-foot">
            <div>
                <p><router-link to="/modify">修改登录密码</router-link></p>
            </div>
            <div>
                <van-icon name="arrow" color="#7F819B" size="15px"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AccountManagement',
  data () {
    return {

    }
  },
  methods: {

  }

}
</script>

<style lang="less" scoped>
.account-jump {
    padding: 0 15px;
    border-bottom: 1px solid #14151C;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    line-height: 50px;
    div:nth-child(1) {
        display: flex;
        align-items: center;
        span {
            display: inline-block;
            width:27px;
            height:27px;
            background:rgba(216,216,216,1);
            border-radius: 50%;
        }
        p {
            display: inline-block;
            width:45px;
            font-size:15px;
            font-family:PingFangSC-Medium,PingFangSC;
            font-weight:500;
            color:rgba(255,255,255,1);
            padding-left: 10px;
        }
    }
    div:nth-child(2) {
        display: flex;
        align-items: center;
        span {
            font-size:15px;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            color:rgba(147,152,177,1);
            vertical-align: middle;
            padding-right: 10px;
        }
    }
}
.account-foot {
    padding: 0 15px;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    a {
        color: #fff;
        width:90px;
        height:21px;
        font-size:15px;
        font-family:PingFangSC;
        font-weight:500;
        line-height:21px;
    }
}
</style>
