<template>
    <div class="upload-documents">
        <van-nav-bar
        title="上传证件"
        @click-left="$router.back()">
            <van-icon name="arrow-left" slot="left"/>
        </van-nav-bar>
        <form>
            <p class="upload-documents-header">请拍摄您的身份证原件</p>
            <div class="upload-documents-content">
                <div class="upload-documents-img" @click="show = true">
                    <img src="@/assets/img/full-face.png">
                    <p class="upload-documents-apell">上传身份证正面</p>
                    <div class="active" v-show="show">
                        <p></p>
                        <p>已上传，解析成功</p>
                    </div>
                </div>
                <div class="upload-documents-img" @click="side = true">
                    <img src="@/assets/img/backlighting.png">
                    <p class="upload-documents-apell">上传身份证背面</p>
                    <div class="active" v-show="side">
                        <p></p>
                        <p>已上传，解析成功</p>
                    </div>
                </div>
            </div>
            <div class="upload-documents-img-fouter" >
                <img src="@/assets/img/hold.png" @click="handleClickSelf">
                <p class="upload-documents-apell">上传手持身份证件照</p>
                <div class="active" v-show="self">
                    <p></p>
                    <p>已上传，解析成功</p>
                </div>
            </div>
        </form>
        <div class="upload-documents-can">
            <p>照片要求</p>
            <img src="@/assets/img/prompt.png">
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
        </div> -->
    </div>
</template>

<script>
export default {
  name: 'UploadDocuments',
  props: {},
  data () {
    return {
      show: false,
      side: false,
      self: false
    }
  },
  methods: {
    handleClickSelf () {
      if (this.show && this.side === true) {
        this.$router.push({ name: 'sign', params: { type: 'treaty' } })
      } else {
        this.$toast('请先上传身份证正面和背面')
      }
    }
  }
}
</script>

<style lang="less" scoped>
img {
    width: 100%;
    }
.upload-documents-header {
    text-align: center;
    color: #fff;
    padding: 28px 0;
    font-size: 16px
}
.upload-documents-content {
    color: #7F819B;
    display: flex;
    text-align: center;
    img {
        width: 157px;
        height: 97px;
    }
    .upload-documents-img {
        padding: 0 15px;
        position: relative;
        .upload-documents-apell {
            height:17px;
            font-size:12px;
            font-family:PingFangSC;
            font-weight:400;
            line-height:17px;
            display: inline-block;
            padding-bottom: 8px;
            margin-top: 20px;
        }
        .active {
            width: 157px;
            height: 17px;
            line-height: 17px;
            background:rgba(0,0,0,0.3);
            border-radius:0px 0px 6px 6px;
            color: #fff;
            position: absolute;
            top: 82px;
            display: flex;
            justify-content: center;
            align-items: center;
            p:nth-child(1) {
                width: 13px;
                height: 13px;
                background: #56FFBD;
                border-radius: 50%;
                margin-right: -25px;
                margin-left: 35px;
            }
            p:nth-child(2) {
                font-size:16px;
                -webkit-transform: scale(0.5);
                font-family:PingFangSC;
                font-weight:400;
            }
        }
    }
}
.upload-documents-img-fouter {
    text-align: center;
    position: relative;
    img {
        width: 157px;
        height: 97px;
    }
    .upload-documents-apell {
        height:17px;
        font-size:12px;
        font-family:PingFangSC;
        font-weight:400;
        line-height:17px;
        padding: 13px 0;
        color: #7F819B;
    }
    .active {
            width: 157px;
            height: 17px;
            line-height: 17px;
            background:rgba(0,0,0,0.3);
            border-radius:0px 0px 6px 6px;
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
                background: #56FFBD;
                border-radius: 50%;
                margin-right: -25px;
                margin-left: 35px;
            }
            p:nth-child(2) {
                font-size:16px;
                -webkit-transform: scale(0.5);
                font-family:PingFangSC;
                font-weight:400;
            }
        }
}
.upload-documents-can {
    p {
        width:64px;
        height:22px;
        font-size:16px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:22px;
        padding: 0 15px;
    }
}
.upload-documents-fouter {
    padding: 0 15px;
    height:88px;
    font-size:14px;
    font-family:PingFangSC;
    font-weight:400;
    color: #7F819B;
    line-height:22px;
}
.upload-documents-none {
    color: #fff;
    text-align: center;
    p {
        height: 46px;
        line-height: 46px;
        background-color: #363740;
        font-size:16px;
        font-family:PingFangSC;
        font-weight:400;
    }
    p:nth-child(1){
        border-bottom: 1px solid #000;
    }
    .upload-documents-cancel {
        color: #3095FA;
        margin-top: 8px;

    }
}
</style>
