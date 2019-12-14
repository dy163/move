<template>
  <div class="freemore">
    <van-nav-bar title="资 讯" fixed @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="freemore-content">
      <van-list>
        <div class="freemore-name">
            <p>{{ list.stock_name }} <span>{{ (list.stock_code) }}</span></p>
        </div>
        <div v-for="(item, index) in freemore" :key="index">
            <div class="freemore-title">
                <div class="freemore-range">
                    <p>{{ item.title }}</p>
                </div>
                <p class="freemore-time">{{ item.time }}</p>
            </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { noteGetMore } from "@/api/information";

export default {
  name: "FreeMore",
  data() {
    return {
        list: [],
        freemore:[]
    };
  },
  created() {
      this.handleFreeMore()
  },
  methods: {
    /**
     * 获取资讯自选更多列表
     */
    async handleFreeMore() {
        try {
            this.list = this.$route.query.q;
            const formData = new FormData();
            formData.append("stock_code", this.list.stock_code);
            const res = await noteGetMore(formData);
            this.freemore = res.data.result
        } catch (error) {
            this.$toast('加载自选更多列表失败')
        }
    }
  }
};
</script>


<style lang='less' scoped>
.freemore-content {
    margin-top: 46px;
    color:rgba(255,255,255,1);
    font-family:PingFangSC-Medium,PingFang SC;
    padding: 0 15px;
    .freemore-name {
        font-size:18px;
        padding-top: 20px;
        span {
            font-size:12px
        }
    }
    .freemore-title {
        padding: 20px 0;
        border-bottom: 1px dashed #14151c;
        .freemore-range {
            // font-size:16px;
            // height: 44px;
            height: 48px;
            font-size: 16px;
            font-family: PingFangSC;
            font-weight: 500;
            margin-right: 8px;
            width: 345px;
            // word-break:break-all;
            overflow: hidden;
            text-overflow: ellipsis;
            letter-spacing: 1px;
            display:-webkit-box!important; 
            p {
                height: 24px;
                line-height: 24px;
            }
        }
        .freemore-time {
            font-size:11px;
            color:rgba(126,130,156,1);
            padding-top: 10px;
        }
    }
}
</style>