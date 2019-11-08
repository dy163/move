<template>
    <div class="personal">
        <van-nav-bar title="我 的" @click-right="$router.push('/install')">
            <van-icon name="setting-o" slot="right" color="#fff" size="18px"/>
        </van-nav-bar>
        <!-- 个人简介 -->
        <div class="personal-name" @click="$router.push('/letter')">
            <div>
                <img src="@/assets/img/portrait.png" alt="">
            </div>
            <div>
                <p>Xy_</p>
                <p>暂无个人简介</p>
            </div>
            <van-icon name="arrow" color="#707177" @click="$router.push('/letter')"/>
        </div>
        <!-- 盒子 -->
        <div class="personal-box">
            <!-- 资金账户 -->
            <div>
                <img src="@/assets/img/account.png" alt="">
                <router-link to="/capital">资金账户</router-link>
            </div>
            <!-- 成交查询 -->
            <div>
                <img src="@/assets/img/deal.png" alt="">
                <router-link to="/order-list">成交查询</router-link>
            </div>
            <!-- 委托查询 -->
            <div>
                <img src="@/assets/img/entrust.png" alt="">
                <router-link to="/order-list">委托查询</router-link>
            </div>
            <!-- 交割单查询 -->
            <div>
                <img src="@/assets/img/delivery.png" alt="">
                <router-link to="/porfit-loss">交割单查询</router-link>
            </div>
        </div>
        <!-- 底部导航 -->
        <app-tabbar/>
    </div>
</template>

<script>
export default {
  name: 'PersonalIndex',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.personal-name {
    height: 124px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-family:PingFangSC;
    div:nth-child(1) {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        img {
            width: 100%;
        }
    }
    div:nth-child(2) {
        padding-left: 20px;
        p:nth-child(1) {
            height:24px;
            font-size:17px;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:24px;
            margin-bottom: 2px;
        }
        p:nth-child(2) {
            flex-wrap: wrap;
            padding-top: 5px;
            height:17px;
            font-size:12px;
            font-weight:400;
            color:rgba(116,119,143,1);
            line-height:17px;
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
        border-top: 1px solid #14151C;
        height: 50px;
        display: flex;
        align-items: center;
        font-size:14px;
        font-family:PingFangSC;
        font-weight:500;
        img {
            padding-right: 15px;
        }
        a {
            color: #fff;
        }
    }
}
.van-hairline--top-bottom {
    background-color: #20212A;
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
.van-icon-arrow {
    padding-top: 50px;
}
</style>
