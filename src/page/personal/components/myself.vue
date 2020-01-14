<template>
  <div class="myself">
    <div class="myself-nav">
      <van-icon name="arrow-left" @click="$router.back()"/>
      <p class="myself">个人简介</p>
      <p class="myself-nav-spot" @click="$router.push('/myself')">完成</p>
    </div>
    <div class="myself-content">
      <p>头像</p>
      <div class="myself-content-value">
        <van-uploader
          capture="camera"
          :after-read="headerClick"
          accept="image/png, image/jpeg, image/gif"
          result-type="text"
        >
        <img :src="headerPortrait" />
        <!-- <img src="@/assets/img/portrait.png" alt=""> -->
        <!-- <img src="@/assets/小哥.jpg" alt /> -->
        </van-uploader>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="myself-content">
      <p>姓名</p>
      <div class="myself-content-value">
        <p class="myself-content-name">{{ name }}</p>
      </div>
    </div>
    <div class="myself-content">
      <p>简介</p>
      <div class="myself-content-value" @click="show = true">
        <p class="myself-content-brief">{{ brief }}</p>
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 编辑个人简介弹出层 -->
    <van-popup 
      v-model="show" 
      position="top" 
      class="myself-popup" 
      :close-on-click-overlay="false"
    >
      <div class="myself-header">
        <van-icon name="arrow-left" @click="show = false"/>
        <p class="myself-letter">编辑简介</p>
        <p class="myself-fulfil" @click="handleIntro">完成</p>
      </div>
      <!-- 监视 -->
      <div class="popup-content">
        <textarea 
          id="user1"
          placeholder="请输入你想说的话" 
          maxlength="50" 
          @input="descInput" 
          v-model="desc" 
        />
        <p>{{txtVal}}/50</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { uploadImg, updateHeaderImg, updateIntro } from "@/api/user";
// const http = "http://192.168.3.79:8080"
const http = "http://bourse.yidonghuayuan.com"

export default {
  name: "Myself",
  data() {
    return {
      show: false,
      name:'',
      headerPortrait: '',
      txtVal: 0,
      desc:"",
      brief: ''
    };
  },
  // 提前加载
  created() {
    this.name = window.localStorage.getItem('username')
    const portrait = window.localStorage.getItem('header_img')
    this.headerPortrait = http + portrait;
    this.brief = localStorage.getItem('intro')
  },

  methods: {
    // 上传图片
    async headerClick(file) {
      try {
        //先走上传图片路径
        const res = await uploadImg(file);
        const headerPortrait = res.data.result
        this.$store.commit('setClickImg', headerPortrait)
        const formData = new FormData();         
        formData.append("header_img", headerPortrait);
        await updateHeaderImg(formData)
        this.headerPortrait = http + headerPortrait
      } catch (error) {
        this.$toast('头像上传失败')
        console.log(error)
      }
    },
    // 监视文本输入改变
    descInput(){
      this.txtVal = this.desc.length;
    },
    // 更新简介
    async handleIntro() {
      try {
        if(!this.desc) {
          this.$toast('请输入你想说得话')
        } else {
          const formData = new FormData();         
          formData.append("intro", this.desc);
          const res = await updateIntro (formData)
          this.$store.commit('setClickIntro', this.desc)
          if(res.data.status) {
            this.show = false
            document.getElementById("user1").value="";
            this.brief = localStorage.getItem('intro')
          }
        }
      } catch (error) {
        this.$toast('操作失败')
      }
    }
  }
};
</script>

<style lang='less' scoped>
.myself-nav {
  height: 46px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:rgba(255,255,255,1);
  border-bottom: 2px solid #14151C;
  .van-icon-arrow-left {
    width: 30px;
  }
  .myself {
    font-size:17px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
  }
  .myself-nav-spot {
    font-size: 13px;
    width: 30px;
  }
}
.myself-content {
  padding: 0 15px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #14151c;
  p {
    width: 31px;
    height: 21px;
    font-size: 15px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 21px;
  }
  .myself-content-value {
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
    .van-icon-arrow {
      font-size: 16px;
      padding-left: 4px;
      margin-right: -5px;
      color: #7f819b;
    }
    .myself-content-name {
      width: 100%;
    }
    .myself-content-brief {
      width: 100%;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(105, 105, 117, 1);
      line-height: 20px;
    }
  }
}
.myself-popup {
  height: 100%;
  background: rgba(32, 33, 42, 1);
  color: #fff;
  font-family: PingFangSC-Medium, PingFang SC;
  .myself-header {
    padding: 0 15px;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #14151c;
    .myself-letter {
      font-size: 17px;
      font-weight: 500;
    }
    .myself-fulfil {
      font-size: 13px;
    }
  }
  .popup-content {
    height: 200px;
    background: rgba(34, 34, 46, 1);
    color: #fff;
    padding: 0 15px;
    font-size: 14px;
    textarea {
      width: 100%;
      height: 170px;
      background: rgba(34, 34, 46, 1);
      border: 0;
    }
    p {
      text-align: right;
    }
  }
}
</style>
