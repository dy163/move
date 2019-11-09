<template>
  <div class="modify">
    <van-nav-bar title="修改手机号" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <!-- 内容表单 -->
    <form>
      <van-cell-group>
        <van-field v-model="phone" placeholder="请输入新手机号号码">
          <div slot="label">
            <span>+86</span>
            <span class="triangle"></span>
          </div>
        </van-field>
      </van-cell-group>
      <div class="resetting-box">
        <van-cell-group class="resetting-model">
          <van-field label="验证码" v-model="code" placeholder="请输入验证码" />
        </van-cell-group>
        <van-button
          :disabled="!!codeTimer"
          :loading="codeLoading"
          @click.prevent="handleClickTimer"
        >{{ codeTimer ? `${codeTimeSeconds}s` : '获取验证码' }}</van-button>
      </div>
      <div class="login-btn-box">
        <van-button class="login-btn" @click.prevent="handleClick">修改手机号</van-button>
      </div>
    </form>
  </div>
</template>

<script>
import { getUpdatePhoneCode, updatePhone } from "@/api/user";
const initCodeTimeSeconds = 120;
export default {
  name: "Modify",
  data() {
    return {
      phone: "",
      code: "",
      codeLoading: false,
      codeTimer: null, // 倒计时定时器
      codeTimeSeconds: initCodeTimeSeconds // 定时器事件
    };
  },
  created() {
    this.$toast.setDefaultOptions({ duration: 800 });
  },
  methods: {
    // 验证码请求
    async handleClickTimer() {
      try {
        const formData = new FormData();
        formData.append("phone", this.phone);
        const res = await getUpdatePhoneCode(formData);
        this.codeTimer = window.setInterval(() => {
          this.codeTimeSeconds--;
          if (this.codeTimeSeconds <= 0) {
            window.clearInterval(this.codeTimer);
            // 定时器回到初始状态
            this.codeTimeSeconds = initCodeTimeSeconds;
            // 回到初始重新为空
            this.codeTimer = null;
          }
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    },

    // 手机号正则验证 验证码后台验证
    async handleClick() {
      try {
        const code = this.code;
        const phone = this.phone;
        const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!phone) {
          this.$toast("请输入手机号");
        } else if (!reg.test(phone)) {
          this.$toast("手机号格式错误");
        } else if (!code) {
          this.$toast("请输入6位数字验证码");
        } else {
          const formData = new FormData();
          formData.append("phone", this.phone);
          formData.append("code", this.code);
          const res = await updatePhone(formData);
          if (res.data.status) {
            this.$toast("修改成功");
            window.setInterval(() => {
              this.$router.push("/login");
            }, 2000);
          } else {
            this.$toast("修改失败");
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="less" scoped>
form {
  padding: 0 15px;
  padding-top: 40px;
  .triangle {
    border-top: 4px solid #fff;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    display: inline-block;
    text-align: center;
    margin-left: 10px;
  }
}
.resetting-box {
  margin-top: 10px;
  display: flex;
  align-items: center;
  .resetting-model {
    width: 250px;
    margin-right: 10px;
  }
  .van-button {
    background-color: #353641;
    color: #7e829c;
    width: 85px;
    height: 50px;
    border-radius: 3px;
    .van-button__text {
      margin: 0 -20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
    }
  }
}
.login-btn-box {
  padding-top: 20px;
}
.login-btn {
  width: 100%;
  background-color: #2f98ff;
  color: #fff;
  border-radius: 3px;
}
</style>
