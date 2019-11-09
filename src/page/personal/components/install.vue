<template>
  <div class="install">
    <van-nav-bar title="设置" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="install-jump">
      <div>
        <p>
          <router-link to="/management">账号管理</router-link>
        </p>
        <p>
          <van-icon name="arrow" color="#7F819B" />
        </p>
      </div>
      <div>
        <p>
          <router-link to="/about-us">关于</router-link>
        </p>
        <p>
          <van-icon name="arrow" color="#7F819B" />
        </p>
      </div>
    </div>
    <div class="install-foot">
      <p @click="handleClickExit">退出登录</p>
    </div>
  </div>
</template>

<script>
import { exit } from "@/api/user";
export default {
  name: "Install",
  data() {
    return {};
  },
  created() {
    this.$toast.setDefaultOptions({ duration: 800 });
  },
  methods: {
    // 退出登录
    async handleClickExit() {
      try {
        const res = await exit();
        if (res.data.status) {
          window.localStorage.clear();
          window.sessionStorage.clear();
          this.$toast("退出成功");
          window.setInterval(() => {
            this.$router.push("/login");
          }, 1500);
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.install-jump {
  padding: 0 16px;
  div {
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    font-family: PingFangSC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    display: flex;
    p {
      flex: 1;
      .van-icon-arrow {
        padding-left: 160px;
      }
      a {
        color: #fff;
      }
    }
  }
  div:nth-child(1) {
    border-bottom: 1px solid #14151c;
  }
}
.install-foot {
  text-align: center;
  padding-top: 80px;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC;
  font-weight: 500;
  line-height: 22px;
  color: #5794f0;
}
.router-link-exact-active {
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC;
  font-weight: 500;
  line-height: 22px;
  color: #5794f0;
}
</style>
