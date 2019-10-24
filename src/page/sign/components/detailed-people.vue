<template>
    <div>
        <van-nav-bar
            title="确 认 信 息"
            left-arrow
            @click-left="$router.back()"
            />
        <p>请确认您的个人信息，请手动填写</p>
        <form>
            <van-cell-group>
                <van-field label="姓名" v-model="user.names"/>
            </van-cell-group>
            <van-cell-group>
                <van-field label="身份证号" v-model="user.cards"/>
            </van-cell-group>
            <van-cell-group>
                <van-field label="密码" v-model="user.pass" type="password"/>
            </van-cell-group>
            <van-cell-group>
                <van-field label="确认密码" v-model="user.entry" type="password"/>
            </van-cell-group>
            <!-- 下拉选择框 -->
            <div class="relative">
                <p>学历</p>
                <van-dropdown-menu>
                    <van-dropdown-item v-model="record" :options="option1" />
                </van-dropdown-menu>
                <van-icon name="arrow-down" class="relative-icon" size="16"/>
            </div>
            <div class="relative">
                <p class="relative-name">职业</p>
                <van-dropdown-menu>
                    <van-dropdown-item v-model="profession" :options="option2" />
                </van-dropdown-menu>
                <van-icon name="arrow-down" class="relative-icon" size="16"/>
            </div>
            <div class="login-btn-box">
                <van-button
                class="login-btn"
                @click.prevent="handleClick"
                >下一步</van-button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  name: 'DetailedPeople',
  props: {},
  data () {
    return {
      user: {
        names: '张x',
        cards: '12222222222000000',
        pass: '******',
        entry: '******'
      },
      record: 0,
      profession: 0,
      option1: [
        { text: '本科', value: 0 },
        { text: '硕士', value: 1 },
        { text: '研究生', value: 2 }
      ],
      option2: [
        { text: '运维工程师', value: 0 },
        { text: '前端工程师', value: 1 }
      ]
    }
  },
  methods: {
    handleClick () {
      if (this.user.names === '' || this.user.cards === '' || this.user.pass === '' || this.user.entry === '') {
        this.$toast('请认真填写内容')
      } else {
        this.$router.push({ name: 'sign', params: { type: 'upload-documents' } })
      }
    }
  }
}
</script>

<style lang="less" scoped>
p {
    color: #fff;
    padding: 15px;
    height:20px;
    font-size:14px;
    font-family:PingFangSC;
    font-weight:400;
    line-height:20px;
}
form {
    padding: 0 15px;
}
.login-btn {
    margin-top: 30px;
    width: 100%;
    height:44px;
    background:rgba(47,152,255,1);
    border-radius:3px;
    font-size:16px;
    font-family:PingFangSC;
    font-weight:500;
    color:rgba(255,255,255,1);
    border: 0;
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
    background:rgba(54,55,64,1);
    border-radius: 3px;
    margin-bottom: 8px;
    p {
        font-size:14px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(163,163,167,1);
        padding-left: 15px;
    }
}
/deep/.van-dropdown-menu__item {
    background:rgba(54,55,64,1);
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
    background-color:rgba(54,55,64,1);
}
.relative-icon {
    color:rgba(114,115,121,1);
    margin-right: 15px;
}
/deep/.van-dropdown-item__option {
    background-color: #14151C;
    position: relative;
    right: 30px;
}
/deep/.van-popup {
        background: #14151C;
    }
/deep/.van-cell--clickable {
    background-color:rgba(54,55,64,1);
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
