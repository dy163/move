<template>
  <div>
    <van-nav-bar title="确 认 信 息" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <p>请确认您的个人信息，请手动填写</p>
    <form>
      <van-cell-group>
        <van-field label="姓名" v-model="username" placeholder="请输入姓名"/>
      </van-cell-group>
      <van-cell-group>
        <van-field label="身份证号" v-model="cards" placeholder="请输入身份证号"/>
      </van-cell-group>
      <van-cell-group>
        <van-field label="密码" v-model="password" type="password" placeholder="请输入密码"/>
      </van-cell-group>
      <van-cell-group>
        <van-field label="确认密码" v-model="repassword" type="password" placeholder="请再次输入密码"/>
      </van-cell-group>
      <!-- ******学历 -->
      <div class="selectBox">
        <div class="selectBox_show" v-on:click.stop="isShowSelect = !isShowSelect">
          <van-cell-group>
            <van-field
              label="学历"
              v-model="unitModel"
              placeholder="请选择学历"
              disabled
              right-icon="arrow-down"
            />
          </van-cell-group>
        </div>
        <div class="selectBox_list" v-show="isShowSelect">
          <div
            class="selectBox_listLi"
            v-for="(item, index) in edu_bg"
            :key="item.id"
            @click.stop="select(item, index)"
          >{{item.value}}</div>
        </div>
      </div>
      <!-- *******职业 -->
      <div class="selectBox">
        <div class="selectBox_show" v-on:click.stop="isShowPosition = !isShowPosition">
          <!-- <input type="text" name="unit" v-model="unitModel"  placeholder="请选择" disabled/> -->
          <van-cell-group>
            <van-field
              label="职业"
              v-model="unitPosition"
              placeholder="请选择职业"
              disabled
              right-icon="arrow-down"
            />
          </van-cell-group>
        </div>
        <div class="selectBox_list" v-show="isShowPosition">
          <div
            class="selectBox_listLi"
            v-for="(item, index) in position"
            :key="item.id"
            @click.stop="selectPosition(item, index)"
          >{{item.value}}</div>
        </div>
      </div>
      <div class="login-btn-box">
        <van-button class="login-btn" @click.prevent="handleClick">下一步</van-button>
      </div>
    </form>
  </div>
</template>

<script>
import { register } from "@/api/user";
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
      unitModel: "",
      isShowSelect: false,
      edu_bg: [
        { key: 0, value: "本科" },
        { key: 1, value: "硕士" },
        { key: 2, value: "研究生" },
        { key: 3, value: "其他" }
      ],
      unitPosition: "",
      isShowPosition: false,
      position: [
        { key: 0, value: "运维工程师" },
        { key: 1, value: "前端工程师" },
        { key: 2, value: "大人" },
        { key: 3, value: "其他" }
      ],
    };
  },

  created() {
    this.$toast.setDefaultOptions({ duration: 800 });
  },

  methods: {
    // 选择学历方法
    select(item, index) {
      this.isShowSelect = false;
      this.unitModel = item.value;
      window.localStorage.setItem("edu_bg", this.unitModel);
    },
    // 选择职业方法
    selectPosition(item, index) {
      this.isShowPosition = false;
      this.unitPosition = item.value;
      window.localStorage.setItem("position", this.unitPosition);
    },
    handleClick() {
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
      } else if (!localStorage.getItem('edu_bg')) {
        this.$toast("请选择学历");
      } else if (!localStorage.getItem('position')) {
        this.$toast("请选择职业");
      } else {
        window.localStorage.setItem("username", this.username);
        window.localStorage.setItem("ID_card_number", this.cards);
        window.localStorage.setItem("password", this.password);
        window.localStorage.setItem("repassword", this.repassword);
        this.$router.push({
          name: "sign",
          params: { type: "upload" }
        });
      }
    },
  }
};
</script>

<style lang="less" scoped>
// 下拉框选择银行样式
.selectBox {
  position: relative;
  .selectBox_list {
    position: absolute;
    color: #fff;
    z-index: 99999;
    background: rgba(23, 24, 34, 1);
    width: 100%;
    font-size: 14px;
    .selectBox_listLi {
      padding-left: 105px;
      height: 50px;
      line-height: 50px;
    }
  }
  /deep/.van-field__control {
    color: #fff;
  }
  /deep/.van-icon-arrow-down {
    font-size: 14px;
  }
}
// 其他
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
    color: rgba(255, 255, 255, 1);
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
