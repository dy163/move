<template>
  <div>
    <van-nav-bar title="确 认 信 息" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <p>请确认您的个人信息，请手动填写</p>
    <form>
      <van-cell-group>
        <van-field label="姓名" v-model="username" />
      </van-cell-group>
      <van-cell-group>
        <van-field label="身份证号" v-model="cards" />
      </van-cell-group>
      <van-cell-group>
        <van-field label="密码" v-model="password" type="password" />
      </van-cell-group>
      <van-cell-group>
        <van-field label="确认密码" v-model="repassword" type="password" />
      </van-cell-group>
      <!-- 下拉选择框 -->
      <div class="relative">
        <p>学历</p>
        <van-dropdown-menu>
          <van-dropdown-item v-model="record" :options="edu_bg" />
        </van-dropdown-menu>
        <van-icon name="arrow-down" class="relative-icon" size="16" />
      </div>
      <div class="relative">
        <p class="relative-name">职业</p>
        <van-dropdown-menu>
          <van-dropdown-item v-model="profession" :options="position" />
        </van-dropdown-menu>
        <van-icon name="arrow-down" class="relative-icon" size="16" />
      </div>
      <div class="login-btn-box">
        <van-button class="login-btn" @click.prevent="handleClick">下一步</van-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "DetailedPeople",
  props: {},
  data() {
    return {
      username: "",
      cards: "",
      password: "",
      repassword: "",
      record: "",
      profession: "",
      edu_bg: [
        { text: "本科", value: 0 },
        { text: "硕士", value: 1 },
        { text: "研究生", value: 2 },
        { text: "其他", value: 3 }
      ],
      position: [
        { text: "运维工程师", value: 0 },
        { text: "前端工程师", value: 1 },
        { text: "其他", value: 2 }
      ]
    };
  },

  methods: {
    async handleClick() {
      // 正则验证
      const regCards = /^[0-9]{6,20}$/;
      const regPassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,30}$/;
      if (!this.username) {
        this.$toast("请输入姓名");
      } else if (!regCards.test(this.cards)) {
        this.$toast("身份证号码错误");
      } else if (!regPassword.test(this.password)) {
        this.$toast("密码太过简单");
      } else if (this.password !== this.repassword) {
        this.$toast("两次输入密码不一样");
      } else if (this.edu_bg === "") {
        this.$toast("请选择学历");
      } else if (this.position === "") {
        this.$toast("请选择职业");
      } else {
        window.localStorage.setItem("username", this.username);
        window.localStorage.setItem("cards", this.cards);
        window.localStorage.setItem("password", this.password);
        window.localStorage.setItem("repassword", this.repassword);
        window.localStorage.setItem("record", this.record);
        window.localStorage.setItem("profession", this.profession);
        this.$router.push({
          name: "sign",
          params: { type: "upload-documents" }
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
p {
  color: #fff;
  padding: 15px;
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC;
  font-weight: 400;
  line-height: 20px;
}
form {
  padding: 0 15px;
}
.login-btn {
  margin-top: 30px;
  width: 100%;
  height: 44px;
  background: rgba(47, 152, 255, 1);
  border-radius: 3px;
  font-size: 16px;
  font-family: PingFangSC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.van-cell-group {
  margin-bottom: 8px;
}
.van-cell {
  font-size: 16px;
}
.relative {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(54, 55, 64, 1);
  border-radius: 3px;
  margin-bottom: 8px;
  p {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(163, 163, 167, 1);
    padding-left: 15px;
  }
}
/deep/.van-dropdown-menu__item {
  background: rgba(54, 55, 64, 1);
  width: 250px;
  .van-ellipsis {
    color: #fff;
    margin-left: -82px;
  }
  .van-dropdown-menu__title::after {
    border: 0;
  }
}
/deep/.van-dropdown-menu {
  background-color: rgba(54, 55, 64, 1);
}
.relative-icon {
  color: rgba(114, 115, 121, 1);
  margin-right: 15px;
}
/deep/.van-dropdown-item__option {
  background-color: #14151c;
  position: relative;
  right: 30px;
}
/deep/.van-popup {
  background: #14151c;
}
/deep/.van-cell--clickable {
  background-color: rgba(54, 55, 64, 1);
  color: #fff;
  padding-left: 135px;
  border-bottom: 0;
}
/deep/.van-cell:not(:last-child)::after {
  border-bottom: 1px solid #000;
}
/deep/.van-popup--top {
  left: 15px;
}
</style>
