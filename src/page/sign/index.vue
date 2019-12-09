<template>
  <div>
    <!-- 手机验证开户 -->
    <Register v-if="this.$route.params.type === 'register'" />
    <!-- 两次输入验证密码 -->
    <ResetPassword v-if="this.$route.params.type === 'reset-password'" />
    <!-- 忘记登录密码输入手机号 -->
    <Resetting v-if="this.$route.params.type === 'resetting'" />
    <!-- 重置成功页面 -->
    <SuccessPass v-if="this.$route.params.type === 'success-pass'" />
    <!-- 个人得确认信息 -->
    <DetailedPeople v-if="this.$route.params.type === 'detailed-people'" />
    <!-- 上传证件 -->
    <Upload v-if="this.$route.params.type === 'upload'" />
    <!-- 风险披露声明 -->
    <TreatyParticulars v-if="this.$route.params.type === 'treaty-particulars'" />
    <!-- 协议认可 -->
    <Treaty v-if="this.$route.params.type === 'treaty'" />
    <!-- 开户审核成功界面显示 -->
    <OpenExamine v-if="this.$route.params.type === 'open-examine'" />
    <!-- 出金 -->
    <Yield v-if="this.$route.params.type === 'yield'" />
    <!-- 出金-card -->
    <YieldCard v-if="this.$route.params.type === 'yield-card'" />
    <!-- -添加银行卡 -->
    <BankCardInformation v-if="this.$route.params.type === 'bank-card-information'" />
    <!-- 增加卡号 -->
    <BankCardAdd v-if="this.$route.params.type === 'bank-card-add'" />
    <!-- 我的银行卡添加页面bank-card -->
    <BankCard v-if="this.$route.params.type === 'bank-card'" />
  </div>
</template>

<script>
import ResetPassword from "./components/reset-password";
import Resetting from "./components/resetting";
import SuccessPass from "./components/success-pass";
import Register from "./components/register";
import DetailedPeople from "./components/detailed-people";
import Upload from "./components/upload";
import TreatyParticulars from "./components/treaty-particulars";
import Treaty from "./components/treaty";
import OpenExamine from "./components/open-examine";
import Yield from "./components/yield";
import YieldCard from "./components/yield-card";
import BankCardInformation from "./components/bank-card-information";
import BankCardAdd from "./components/bank-card-add";
import BankCard from "./components/bank-card";

export default {
  name: "sign",
  components: {
    ResetPassword,
    Resetting,
    SuccessPass,
    Register,
    DetailedPeople,
    Upload,
    TreatyParticulars,
    Treaty,
    OpenExamine,
    Yield,
    YieldCard,
    BankCardInformation,
    BankCardAdd,
    BankCard
  }
};
</script>
<style lang='less' scoped>
</style>
