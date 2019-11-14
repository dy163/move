<template>
  <div class="management">
    <van-nav-bar title="账号管理" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="management-jump">
      <div>
        <span></span>
        <p>手机号</p>
      </div>
      <div>
        <span>{{ phone }}</span>
        <van-icon name="arrow" color="#7F819B" />
      </div>
    </div>
    <div class="management-foot">
      <div>
        <p>
          <router-link to="/sign/resetting">修改登录密码</router-link>
        </p>
      </div>
      <div>
        <van-icon name="arrow" color="#7F819B" />
      </div>
    </div>
    <div class="management-foot">
      <div>
        <p>
          <router-link to="/sign/resetting">重置交易密码</router-link>
        </p>
      </div>
      <div>
        <van-icon name="arrow" color="#7F819B" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Management",
  data() {
    return {
      phone: ""
    };
  },
  created() {
    const tel = window.localStorage.getItem('phone')
    const tell = "" + tel;
    this.phone = tel.replace(tell.substring(3, 7), "****")
  
  },

  methods: {
    
  }
};
</script>

<style lang="less" scoped>
.management {
  background:rgba(34,34,46,1);
  .van-icon-arrow {
    font-size: 15px;
    margin-right: -5px;
  }
}
.management-jump {
  padding: 0 15px;
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
      width: 27px;
      height: 27px;
      background: rgba(216, 216, 216, 1);
      border-radius: 50%;
    }
    p {
      display: inline-block;
      width: 45px;
      font-size: 15px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      padding-left: 10px;
    }
  }
  div:nth-child(2) {
    display: flex;
    align-items: center;
    span {
      font-size: 15px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(147, 152, 177, 1);
      vertical-align: middle;
      padding-right: 10px;
    }
  }
}
.management-foot {
  padding: 0 15px;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #14151c;
  a {
    color: #fff;
    width: 90px;
    height: 21px;
    font-size: 15px;
    font-family: PingFangSC;
    font-weight: 500;
    line-height: 21px;
  }
}
</style>
