<template>
    <div>
        <van-list>
            <div class="information-front-page-foot"
            v-for="(item,index) in focus"
            :key="index">
                <div class="information-front-name">
                    <p class="information-title">{{ item.title }}</p>
                    <div class="information-box">
                        <p>
                            <span class="information-roof">{{ item.roof }}</span>
                        </p>
                        <p>
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
// .information-front-page-foot {
//     display: flex;
//     padding: 20px 0;
//     margin: 0 15px;
//     box-sizing: border-box;
//     border-bottom: 1px solid #000;
//     .information-title {
//         font-size:16px;
//         font-family:PingFangSC;
//         font-weight:500;
//         line-height:24px;
//     }
//     .information-front-name {
//         font-family:PingFangSC-Regular,PingFang SC;
//         .information-box {
//             display: flex;
//             align-items: center;
//             padding-top: 15px;
//             p:nth-child(1) {
//                 border:1px solid #FF3750;
//                 height: 0.68em;
//                 line-height: 0.68em;
//                 font-size: 0.2em;
//                 color:#FF3750;
//                 padding: 0.2em 0.17em;
//                 border-radius: 3px;
//                 margin-right: 5px;
//                 margin-top: 5px;
//             }
//             p:nth-child(2) {
//                 font-size:12px;
//                 font-weight:400;
//                 height: 16px;
//                 color:rgba(126,130,156,1);
//                 span {
//                     margin-right: 5px;
//                 }
//             }
//         }
//     }
// }

.information-front-page-foot {
    height: 115px;
    display: flex;
    padding: 0 15px;
    .information-front-name {
        font-family:PingFangSC-Regular,PingFang SC;
        .information-title {
            font-size:16px;
            font-family:PingFangSC;
            font-weight:500;
            line-height:24px;
        }
        .information-box {
            height: 16px;
            line-height: 16px;
            margin-top: 15px;
            display: flex;
            p:nth-child(1) {
                border:1px solid #FF3750;
                color:#FF3750;
                height: 16px;
                line-height: 16px;
                font-size: 12px;
                transform: scale(0.7);
                padding: 2px 5px;
                border-radius: 3px;
                // height: 0.68em;
                // line-height: 0.68em;
                // font-size: 0.2em;
                // padding: 0.2em 0.3em;
                // border-radius: 3px;
                // margin-right: 5px;
            }
            p:nth-child(2) {
                font-size: 12px;
                span {
                    margin-right: 5px;
                }
            }
        }
    }
}
</style>
