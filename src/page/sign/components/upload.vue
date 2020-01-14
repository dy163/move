<template>
  <div class="upload">
    <van-nav-bar title="上传证件" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <form>
      <p class="upload-header">请拍摄您的身份证原件</p>
      <div class="upload-content">
        <!-- 正面身份证 -->
        <div>
          <van-uploader
            capture="camera"
            :after-read="face"
            accept="image/png, image/jpeg, image/gif"
            result-type="text"
          >
            <img :src="faceImg" />
          </van-uploader>
          <p class="upload-apell">上传身份证正面</p>
          <div class="active" v-show="show">
            <p></p>
            <p>已上传，解析成功</p>
          </div>
        </div>
        <!-- 背面身份证 -->
        <div>
          <van-uploader
            capture="camera"
            :after-read="backlighting"
            accept="image/png, image/jpeg, image/gif"
            result-type="text"
          >
            <img :src="backlightingImg" />
          </van-uploader>
          <p class="upload-apell">上传身份证背面</p>
          <div class="active" v-show="side">
            <p></p>
            <p>已上传，解析成功</p>
          </div>
        </div>
      </div>
      <!-- 手持身份证 -->
      <div class="upload-hold">
        <div class="upload-hold-shift">
          <van-uploader
            capture="camera"
            :after-read="hold"
            accept="image/png, image/jpeg, image/gif"
            result-type="text"
          >
            <img :src="holdImg" />
          </van-uploader>
          <p class="upload-apell">上传手持身份证件照</p>
          <div class="active" v-show="self">
            <p></p>
            <p>已上传，解析成功</p>
          </div>
        </div>
      </div>
    </form>
    <div class="upload-can">
      <p>照片要求</p>
      <img src="@/assets/img/prompt.png" />
    </div>
    <div class="upload-fouter">
      <p>1.身份证为大陆公民持有的本人二代身份证；</p>
      <p>2.请确保身份证边框完整，字体清晰，证件号码清晰可见；</p>
      <p>3.按样本拍摄本人手持证件(正面)照片，保持信息清晰。</p>
    </div>
    <div class="upload-none" v-show="false">
      <p>拍照</p>
      <p>手机相册选择</p>
      <p class="upload-cancel">取消</p>
    </div>
  </div>
</template>

<script>
import { uploadImg, register } from "@/api/user";
// const http = "http://192.168.3.79:8080"
const http = "http://bourse.yidonghuayuan.com"
export default {
  name: "Upload",
  props: {},
  data() {
    return {
      show: false,
      side: false,
      self: false,
      faceImg: require("@/assets/img/full-face.png"),
      backlightingImg: require("@/assets/img/backlighting.png"),
      holdImg: require("@/assets/img/hold.png")
    };
  },
  // created() {
  //   
  // },

  methods: {
    // 获取正面照片
    async face(file) {
      try {
        const res = await uploadImg(file);
        this.faceImg = http + res.data.result;
        this.show = true;
        window.localStorage.setItem("ID_card_front", res.data.result);
      } catch (error) {
        this.$toast("操作失败");
        console.log(error);
      }
    },

    // 获取背面照片
    async backlighting(file) {
      try {
        const res = await uploadImg(file);
        this.backlightingImg = http + res.data.result;
        this.side = true;
        window.localStorage.setItem("ID_card_reverse", res.data.result);
      } catch (error) {
        this.$toast("操作失败");
        console.log(error);
      }
    },

    // 获取手持照片
    async hold(file) {
      try {
        const res = await uploadImg(file);
        this.holdImg = http + res.data.result;
        this.self = true;
        window.localStorage.setItem("ID_card_and_myself", res.data.result);
        if (this.show !== true) {
          this.$toast("请上传身份证正面");
        } else if (this.side !== true) {
          this.$toast("请上传身份证背面");
        } else {
          window.setInterval(() => {
            this.$router.push({
              name: "sign",
              params: { type: "treaty" }
            });
          }, 2000);
        }
      } catch (error) {
        this.$toast("操作失败");
        console.log(error);
      }
    }
  }
};
</script>

<style lang="less" scoped>
form {
  padding: 0 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  .upload-header {
    text-align: center;
    color: #fff;
    padding: 28px 0;
    font-size: 16px;
  }
  /deep/.van-uploader__input {
    height: 100px;
  }
  /deep/.van-uploader__input-wrapper {
    height: 100px;
  }
  img {
    width: 158px;
    height: 100px;
  }
  .upload-content {
    display: flex;
    justify-content: space-between;
    div {
      width: 158px;
      position: relative;
      .upload-apell {
        font-size: 12px;
        text-align: center;
        color: rgba(127, 129, 155, 1);
        padding: 10px;
      }
      .active {
        height: 17px;
        line-height: 17px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 0px 0px 6px 6px;
        color: #fff;
        position: absolute;
        top: 83px;
        display: flex;
        justify-content: center;
        align-items: center;
        p:nth-child(1) {
          width: 13px;
          height: 13px;
          background: #56ffbd;
          border-radius: 50%;
          margin-right: -25px;
          margin-left: 35px;
        }
        p:nth-child(2) {
          font-size: 16px;
          -webkit-transform: scale(0.5);
          font-family: PingFangSC;
          font-weight: 400;
        }
      }
    }
  }
  .upload-hold {
    display: flex;
    justify-content: center;
    .upload-hold-shift {
      position: relative;
      .upload-apell {
        font-size: 12px;
        color: rgba(127, 129, 155, 1);
        text-align: center;
        padding-top: 10px;
      }
      .active {
        width: 158px;
        height: 17px;
        line-height: 17px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 0px 0px 6px 6px;
        color: #fff;
        position: absolute;
        top: 83px;
        display: flex;
        justify-content: center;
        align-items: center;
        p:nth-child(1) {
          width: 13px;
          height: 13px;
          background: #56ffbd;
          border-radius: 50%;
          margin-right: -25px;
          margin-left: 35px;
        }
        p:nth-child(2) {
          font-size: 16px;
          -webkit-transform: scale(0.5);
          font-family: PingFangSC;
          font-weight: 400;
        }
      }
    }
  }
}
.upload-can {
  padding: 0 15px;
  padding-top: 30px;
  p {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 22px;
  }
  img {
    width: 100%;
  }
}
.upload-fouter {
  padding: 0 15px;
  font-size: 14px;
  font-family: PingFangSC;
  color: #7f819b;
  p {
    padding: 2px;
  }
}
.upload-none {
  color: #fff;
  text-align: center;
  p {
    height: 46px;
    line-height: 46px;
    background-color: #363740;
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 400;
  }
  p:nth-child(1) {
    border-bottom: 1px solid #000;
  }
  .upload-cancel {
    color: #3095fa;
    margin-top: 8px;
  }
}
</style>
