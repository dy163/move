<template>
    <div>
        <van-list>
            <div class="information-front-page-foot"
            v-for="(item,index) in focus"
            :key="index">
                <div class="information-front-name">
                    <p class="information-title">{{ item.title }}</p>
                    <div class="information-box">
                        <!-- <p>
                            <span class="information-roof">{{ item.roof }}</span>
                        </p> -->
                        <van-tag type="danger" size="medium" plain>标签</van-tag>
                        <p class="information-information">
                            <span>{{ item.trusts }}</span>
                            <span>{{ item.timer }}</span>
                        </p>
                    </div>
                </div>
                <div class="img">
                    <img src="@/assets/Rectangle.png" alt="">
                </div>
            </div>
        </van-list>
    </div>
</template>

<script>
export default {
  name: 'Foot',
  props: {},
  data () {
    return {
      focus: [
        { title: '长江证券：美股大幅反弹，与美国经济“背离”？', roof: '置顶', trusts: '长江证券研究', timer: '今天 12:35' },
        { title: '长江证券：美股大幅反弹，与美国经济“背离”？', roof: '置顶', trusts: '长江证券研究', timer: '今天 12:35' },
        { title: '长江证券：美股大幅反弹，与美国经济“背离”？', roof: '置顶', trusts: '长江证券研究', timer: '今天 12:35' },
        { title: '长江证券：美股大幅反弹，与美国经济“背离”？', roof: '置顶', trusts: '长江证券研究', timer: '今天 12:35' },
        { title: '长江证券：美股大幅反弹，与美国经济“背离”？', roof: '置顶', trusts: '长江证券研究', timer: '今天 12:35' },
        { title: '长江证券：美股大幅反弹，与美国经济“背离”？', roof: '置顶', trusts: '长江证券研究', timer: '今天 12:35' }
      ]
    }
  }
}

</script>
<style lang='less' scoped>
.information-front-page-foot {
    height: 115px;
    display: flex;
    align-items: center;
    margin: 0 15px;
    border-bottom: 1px solid #14151C;
    .information-front-name {
        font-family:PingFangSC-Regular,PingFang SC;
        .information-title {
            font-size:16px;
            font-family:PingFangSC;
            font-weight:500;
            line-height:24px;
        }
        .information-box {
            display: flex;
            padding-top: 15px;
            .van-tag {
                padding: 2px  5px;
                font-size: 12px;
                transform: scale(0.7);
                background-color: #20212A;
            }
            // p:nth-child(1) {
            //     border:1px solid #FF3750;
            //     color:#FF3750;
            //     height: 16px;
            //     line-height: 16px;
            //     font-size: 12px;
            //     transform: scale(0.7);
            //     padding: 2px 5px;
            //     border-radius: 3px;
            //     margin-top: 3px;

                // height: 0.68em;
                // line-height: 0.68em;
                // font-size: 0.2em;
                // padding: 0.2em 0.3em;
                // border-radius: 3px;
                // margin-right: 5px;
            // }
            .information-information {
                font-size: 12px;
                font-weight:400;
                height: 16px;
                color:rgba(126,130,156,1);
                span {
                    margin-right: 5px;
                }
            }
        }
    }
}
</style>
