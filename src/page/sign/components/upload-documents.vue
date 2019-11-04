<template>
  <div class="upload-documents">
    <van-nav-bar title="上传证件" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <form>
      <p class="upload-documents-header">请拍摄您的身份证原件</p>
      <div class="upload-documents-content">
        <!-- <div class="upload-documents-img" @click="show = true"> -->
        <div class="upload-documents-img">
          <van-uploader capture="camera" :after-read="face">
            <img src="@/assets/img/full-face.png" ref="face" />
          </van-uploader>
          <p class="upload-documents-apell">上传身份证正面</p>
          <div class="active" v-show="show">
            <p></p>
            <p>已上传，解析成功</p>
          </div>
        </div>
        <!-- <div class="upload-documents-img" @click="side = true"> -->
        <div class="upload-documents-img">
          <van-uploader capture="camera" :after-read="backlighting">
            <img src="@/assets/img/backlighting.png" ref="backlighting" />
          </van-uploader>
          <p class="upload-documents-apell">上传身份证正面</p>
          <div class="active" v-show="side">
            <p></p>
            <p>已上传，解析成功</p>
          </div>
        </div>
      </div>
      <div class="upload-documents-img-fouter">
        <van-uploader capture="camera" :after-read="hold">
          <img src="@/assets/img/hold.png" ref="hold" />
        </van-uploader>
        <p class="upload-documents-apell">上传手持身份证件照</p>
        <div class="active" v-show="self">
          <p></p>
          <p>已上传，解析成功</p>
        </div>
      </div>
    </form>
    <div class="upload-documents-can">
      <p>照片要求</p>
      <img src="@/assets/img/prompt.png" />
    </div>
    <div class="upload-documents-fouter">
      <p>1.身份证为大陆公民持有的本人二代身份证；</p>
      <p>2.请确保身份证边框完整，字体清晰，证件号码清晰可见；</p>
      <p>3.按样本拍摄本人手持证件(正面)照片，保持信息清晰。</p>
    </div>
    <!-- <div class="upload-documents-none" v-show="false">
                <p>拍照</p>
                <p>手机相册选择</p>
                <p class="upload-documents-cancel">取消</p>
    </div>-->
  </div>
</template>

<script>
import { register } from '@/api/user'
export default {
  name: "UploadDocuments",
  props: {},
  data() {
    return {
      show: false,
      side: false,
      self: false
    };
  },
  methods: {
    // 获取正面照片
    async face(file) {
        try {
            //   console.log(file);
            this.$refs.face.src = file.content;
            // console.log(this.$refs.face.src)
            const reader = new FileReader () 
            // reader.addEventListener("load", function () {
            //   preview.src = reader.result;
            //   console.log(preview.src)
            // }, false);

            this.show = true;
            // const phone = window.localStorage.getItem('phone')
            // const username = window.localStorage.getItem('username')
            // const password = window.localStorage.getItem('password')
            // const repassword = window.localStorage.getItem('repassword')
            // const record = window.localStorage.getItem('record')
            // const profession = window.localStorage.getItem('profession')
            // const ID_card_reverse = this.$refs.face.src
            // const res = await register( 
            //     phone,
            //     username,
            //     password,
            //     repassword,
            //     record,
            //     profession,
            //     ID_card_reverse)
            // console.log(res)
        } catch (error) {
            console.log(error)
        }
    

    },
    // 获取背面照片
    backlighting(file) {
      this.$refs.backlighting.src = file.content;
      this.side = true;
    },
    // 获取手持照片
    async hold(file) {
        try {
            this.$refs.hold.src = file.content;
            this.self = true;
            if (!this.show) {
                this.$toast("请上传身份证正面");
            } else if (!this.side){
                this.$toast("请上传身份证背面");
            } else {
                // const phone = window.localStorage.getItem('phone')
                // const username = window.localStorage.getItem('username')
                // const password = window.localStorage.getItem('password')
                // const repassword = window.localStorage.getItem('repassword')
                // const record = window.localStorage.getItem('record')
                // const profession = window.localStorage.getItem('profession')
                // const ID_card_reverse = this.$refs.face.src
                // const ID_card_front = this.$refs.backlighting.src
                // const ID_card_and_myself = this.$refs.hold.src
                // const res = await register (
                //     phone,
                //     username,
                //     password,
                //     repassword,
                //     ID_card_reverse,
                //     ID_card_front,
                //     ID_card_and_myself,
                //     record,
                //     profession)
                // this.$router.push({ name: "sign", params: { type: "treaty" } });
            }
        } catch (error) {
            this.error('错误了')
            console.log(error)
        }
    }
  }
};
</script>

<style lang="less" scoped>
img {
  width: 100%;
}
.upload-documents-header {
  text-align: center;
  color: #fff;
  padding: 28px 0;
  font-size: 16px;
}
.upload-documents-content {
  color: #7f819b;
  display: flex;
  text-align: center;
  img {
    width: 157px;
    height: 100px;
  }
  .upload-documents-img {
    padding: 0 15px;
    position: relative;
    .upload-documents-apell {
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC;
      font-weight: 400;
      line-height: 17px;
      display: inline-block;
      padding-bottom: 8px;
    }
    .active {
      width: 157px;
      height: 17px;
      line-height: 17px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 0px 0px 6px 6px;
      color: #fff;
      position: absolute;
      top: 82px;
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
.upload-documents-img-fouter {
  text-align: center;
  position: relative;
  padding-top: 8px;
  padding-bottom: 20px;
  img {
    width: 157px;
    height: 100px;
  }
  .upload-documents-apell {
    font-size: 12px;
    font-family: PingFangSC;
    padding: 10px 0;
    color: #7f819b;
  }
  .active {
    width: 157px;
    height: 17px;
    line-height: 17px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 0px 0px 6px 6px;
    color: #fff;
    position: absolute;
    top: 82px;
    left: 109px;
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
.upload-documents-can {
  p {
    width: 64px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 22px;
    padding: 0 15px;
  }
}
.upload-documents-fouter {
  padding: 0 15px;
  font-size: 14px;
  font-family: PingFangSC;
  font-weight: 400;
  color: #7f819b;
}
.upload-documents-none {
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
  .upload-documents-cancel {
    color: #3095fa;
    margin-top: 8px;
  }
}
</style>
