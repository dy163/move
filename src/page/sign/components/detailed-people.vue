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
            <div class="select">
                <p>学历</p>
                <select name="" id="">
                    <option>本科</option>
                </select>
                <van-icon name="arrow-down" class="icon"/>
            </div>
            <div class="select">
                <p>职业</p>
                <select>
                    <option>运维工程师</option>
                </select>
                <van-icon name="arrow-down" class="icon"/>
            </div>

            <div class="login-btn-box">
                <van-button
                class="login-btn"
                @click="handleClick"
                @click.prevent="handleClick"
                hairline
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
      record: '本科',
      profession: '运维工程师'
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
.select {
    display: flex;
    align-items: center;
    height: 44px;
    font-size:16px;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:400;
    background-color: #363740;
    margin-bottom: 8px;
    .icon {
        margin-right: 16px;
        color: #A3A3A7;
    }
    p {
        width: 100px;
        color:rgba(163,163,167,1);
    }
    select {
        outline: none;
        background-color:#20212A;
        border: 0;
        color: #fff;
        width: 100%;
        font-size:16px;
        font-family:PingFangSC-Regular,PingFangSC;
        background-color: #363740;
        padding-left: 11px;
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;
    }

}
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
}
.van-hairline--top-bottom {
    height:50px;
    background:rgba(54,55,64,1);
    border-radius:6px;
}

.van-cell-group {
    height:50px;
    border-radius:3px;
    margin-bottom: 8px;
}
.van-cell {
    color: #A3A3A7;
    background-color:#353641;
    font-size: 16px;
}
</style>
