<template>
    <div>
      <!-- 登录页 -->
      <Login v-if="this.$route.params.type === 'login'"/>
      <!-- <Login v-bind:is="Login"/> -->
      <!-- 注册账号验证码 -->
      <ProvingRegister v-if="this.$route.params.type === 'proving-register'"/>
      <!-- 重置密码 发送验证码 -->
      <ProvingResetting v-if="this.$route.params.type === 'proving-resetting'"/>
      <!-- 手机号注册 -->
      <Register v-if="this.$route.params.type === 'register'"/>
      <!-- 两次输入验证密码 -->
      <ResetPassword v-if="this.$route.params.type === 'reset-password'"/>
      <!-- 忘记登录密码输入手机号 -->
      <Resetting v-if="this.$route.params.type === 'resetting'"/>
      <!-- 重置成功页面 -->
      <SuccessPass v-if="this.$route.params.type === 'success-pass'"/>
      <!-- 手机验证开户 -->
      <CellphoneOpen v-if="this.$route.params.type === 'cellphone-open'"/>
      <!-- 个人得确认信息 -->
      <DetailedPeople v-if="this.$route.params.type === 'detailed-people'"/>
      <!-- 上传证件 -->
      <UploadDocuments v-if="this.$route.params.type === 'upload-documents'"/>
      <!-- 风险披露声明 -->
      <TreatyParticulars v-if="this.$route.params.type === 'treaty-particulars'"/>
      <!-- 协议认可 -->
      <Treaty v-if="this.$route.params.type === 'treaty'"/>
      <!-- 开户审核成功界面显示 -->
      <OpenExamine v-if="this.$route.params.type === 'open-examine'"/>
    </div>
</template>

<script>
import Login from './components/login.vue'
import ProvingRegister from './components/proving-register.vue'
import ProvingResetting from './components/proving-resetting.vue'
import Register from './components/register.vue'
import ResetPassword from './components/reset-password.vue'
import Resetting from './components/resetting.vue'
import SuccessPass from './components/success-pass.vue'
import CellphoneOpen from './components/cellphone-open.vue'
import DetailedPeople from './components/detailed-people.vue'
import UploadDocuments from './components/upload-documents.vue'
import TreatyParticulars from './components/treaty-particulars.vue'
import Treaty from './components/treaty.vue'
import OpenExamine from './components/open-examine'

export default {
  name: 'login',
  components: {
    Login,
    ProvingRegister,
    ProvingResetting,
    Register,
    ResetPassword,
    Resetting,
    SuccessPass,
    CellphoneOpen,
    DetailedPeople,
    UploadDocuments,
    TreatyParticulars,
    Treaty,
    OpenExamine
  }

}

</script>
<style lang='less' scoped>
</style>
