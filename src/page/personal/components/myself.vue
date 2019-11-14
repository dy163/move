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
        <p class="myself-content-brief">用一段话介绍自己</p>
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
        <p class="myself-fulfil" @click="show = false">完成</p>
      </div>
      <div class="popup-content">
        <textarea 
          v-model="items.text" 
          ref="count" 
          placeholder="请输入你想说的话"
        ></textarea>
        <p v-html="number"></p>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { uploadImg, updateHeaderImg } from "@/api/user";
const http = "http://192.168.3.79:8080"

export default {
  name: "Myself",
  data() {
    return {
      show: false,
      name:'',
      headerPortrait: '',
      number: 50,
      items: {
        text: ""
      }
    };
  },
  async created() {
    this.name = window.localStorage.getItem('username')
    const portrait = window.localStorage.getItem('header_img')
    this.headerPortrait = http + portrait;
  },
  watch: {
    items: {
      handler: function() {
        var _this = this;
        var _sum = 50; //字体限制为50个
        _this.$refs.count.setAttribute("maxlength", _sum);
        _this.number = _sum - _this.$refs.count.value.length;
      },
      deep: true
    }
  },

  methods: {
    onClickRight() {},
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
