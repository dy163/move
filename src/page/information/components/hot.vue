<template>
    <div class="hot">
        <!-- hot事件 -->
        <div class="information-hot">
            <p>热点事件</p>
            <p @click="$router.push('/hotspot')">查看更多</p>
        </div>
        <!-- 轮播热点信息 -->
        <div class="information-hot-news">
            <!-- :autoplay="3000" -->
            <van-swipe
            indicator-color="white"
            :width="298"
            :show-indicators="false">
                <van-swipe-item
                v-for="(item,index) in hot"
                :key="index">
                    <div class="information-hot-news-all">
                        <div class="information-hot-news-img">
                        <!-- <img :src="'http://192.168.3.79:8080' + item.img" /> -->
                        <img :src="'http://bourse.yidonghuayuan.com' + item.img" />
                        </div>
                        <div class="information-hot-news-title">
                            <p>{{ item.title }}</p>
                        </div>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
import { newsGetRoll } from "@/api/information";

export default {
  name: 'Hot',
  props: {},
  data () {
    return {
      hot: []
    }
  },
  created() {
    this.handleGetRoll()
  },
  methods: {
    /**
     * 热点事件滑动列表加载
     */
    async handleGetRoll() {
      try {
        const formData = new FormData();
        const res = await newsGetRoll(formData);
        this.hot = res.data.result
      } catch (error) {
        this.$toast('热点滑动事件获取失败')
      }
    }    
  }
}

</script>

<style lang='less' scoped>
.information-hot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
    p:nth-child(1) {
        height:24px;
        font-size:17px;
        font-family:PingFangSC-Medium,PingFangSC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:24px;
    }
    p:nth-child(2) {
        height:17px;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:17px;
    }
}
.information-hot-news {
    padding:0 15px;
    padding-bottom: 10px;
    box-sizing: border-box;
    .information-hot-news-all {
        padding: 0 15px;
        margin-right: 15px;
        height:90px;
        background:rgba(38,39,50,1);
        border-radius:6px;
        display: flex;
        align-items: center;
        .information-hot-news-img {
            position: fixed;
            width:54px;
            height:54px;
            // background:rgba(216,216,216,1);
            border-radius:4px;
            img {
                width:54px;
                height:54px;
                border-radius:4px;
            }
        }
        .information-hot-news-title {
            margin-left: 63px;
            width: 200px;
            text-overflow: ellipsis;
            overflow: hidden;
            p {
                font-size:13px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(255,255,255,1);
            }
        }
    }
}
</style>
