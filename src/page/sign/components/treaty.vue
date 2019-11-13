<template>
  <div class="treaty">
    <van-nav-bar title="协 议 认 可" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="success-content">
      <img src="@/assets/img/recognition.png" alt />
      <p>我已阅读并同意全部开户文件，了解相关风险并自愿在某某证券开户。</p>
    </div>
    <div class="declare">
      <router-link to="/sign/treaty-particulars">风险披露声明</router-link>
    </div>
    <div class="login-btn-box">
      <van-button class="login-btn" @click="handleRegisterClick">完成</van-button>
    </div>
  </div>
</template>

<script>
import { register } from "@/api/user";
export default {
  name: "Treaty",
  props: {},
  data() {
    return {};
  },

  created() {
    this.$toast.setDefaultOptions({ duration: 800 });
  },

  methods: {
    async handleRegisterClick() {
      try {
        const phone = window.localStorage.getItem("phone");
        const username = window.localStorage.getItem("username");
        const ID_card_number = window.localStorage.getItem("ID_card_number");
        const password = window.localStorage.getItem("password");
        const repassword = window.localStorage.getItem("repassword");
        const edu_bg = window.localStorage.getItem("edu_bg");
        const position = window.localStorage.getItem("position");
        const ID_card_front = window.localStorage.getItem("ID_card_front");
        const ID_card_reverse = window.localStorage.getItem("ID_card_reverse");
        const ID_card_and_myself = window.localStorage.getItem(
          "ID_card_and_myself"
        );
        // 构造一个请求体
        const formData = new FormData();
        formData.append("phone", phone);
        formData.append("username", username);
        formData.append("ID_card_number", ID_card_number);
        formData.append("password", password);
        formData.append("repassword", repassword);
        formData.append("ID_card_front", ID_card_front);
        formData.append("ID_card_reverse", ID_card_reverse);
        formData.append("ID_card_and_myself", ID_card_and_myself);
        formData.append("edu_bg", edu_bg);
        formData.append("position", position);
        const data = await register(formData);
        if (!data.data.status) {
          this.$router.push({
            name: "sign",
            params: { type: "open-examine" }
          });
        } else {
          this.$toast("注册信息填写错误");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="less" scoped>
p {
  width: 224px;
  height: 40px;
  font-size: 14px;
  font-family: PingFangSC;
  font-weight: 500;
  color: #fff;
  line-height: 20px;
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
  height: 17px;
  font-size: 12px;
  font-family: PingFangSC;
  font-weight: 400;
  line-height: 17px;
  a {
    color: #2f98ff;
  }
}
.login-btn-box {
  padding: 0 15px;
}
.login-btn {
  width: 100%;
  height: 44px;
  background: #2f98ff;
  border-radius: 3px;
  .van-button__text {
    width: 32px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 22px;
  }
}
</style>
