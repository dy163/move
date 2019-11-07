import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    // 登录
    {
      name: 'login',
      path: '/login',
      component: () => import('@/page/login')
    },
    // 动态渲染的sing下的页面
    {
      name: 'sign',
      path: '/sign/:type',
      component: () => import('@/page/sign')
    },

    // 开户选择(默认首页展示)
    {
      path: '/',
      name: 'account',
      component: () => import('@/page/account')
    },

    // 详情资讯
    // 界面
    {
      name: 'information',
      path: '/information',
      component: () => import('@/page/information')
    },
    // 资讯信息的详细展示
    {
      name: 'particulars',
      path: '/particulars',
      component: () => import('@/page/information/components/particulars')
    },

    // 个人信息展示
    {
      name: 'personal',
      path: '/personal',
      component: () => import('@/page/personal')
    },
    // 设置
    {
      name: 'install',
      path: '/install',
      component: () => import('@/page/personal/components/install')
    },
    // 账号管理
    {
      name: 'management',
      path: '/management',
      component: () => import('@/page/personal/components/management')
    },
    // 修改手机号modify
    {
      name: 'modify',
      path: '/modify',
      component: () => import('@/page/personal/components/modify')
    },

    // 关于我们（版本号）
    {
      name: 'about-us',
      path: '/about-us',
      component: () => import('@/page/personal/components/about-us')
    },
    // 资产
    {
      name: 'capital',
      path: '/capital',
      component: () => import('@/page/personal/components/capital')
    },
    // 入金
    {
      name: 'deposit',
      path: '/deposit',
      component: () => import('@/page/personal/components/deposit')
    },
    // 支付金额微信和支付宝
    {
      name: 'deposit-amount',
      path: '/deposit-amount',
      component: () => import('@/page/personal/components/deposit-amount')
    },
    // 我的银行卡添加页面bank-card
    {
      name: 'bank-card',
      path: '/bank-card',
      component: () => import('@/page/personal/components/bank-card')
    },
    // 添加银行卡bank-card-information
    {
      name: 'bank-card-information',
      path: '/bank-card-information',
      component: () => import('@/page/personal/components/bank-card-information')
    },
    // 各种银行卡展示
    {
      name: 'bank-card-add',
      path: '/bank-card-add',
      component: () => import('@/page/personal/components/bank-card-add')
    },
    // 支付协议payment-agreement
    {
      name: 'payment-agreement',
      path: '/payment-agreement',
      component: () => import('@/page/personal/components/payment-agreement')
    },
    // 订单列表order-list
    {
      name: 'order-list',
      path: '/order-list',
      component: () => import('@/page/personal/components/order-list')
    },
    // 盈亏分析porfit-loss
    {
      name: 'porfit-loss',
      path: '/porfit-loss',
      component: () => import('@/page/personal/components/porfit-loss')
    },
    // 个人简介
    {
      name: 'letter',
      path: '/letter',
      component: () => import('@/page/personal/components/letter')
    },

    // 自选股票 oneself
    {
      name: 'oneself',
      path: '/oneself',
      component: () => import('@/page/oneself')
    },
    // 交易界面（买入和卖出）
    {
      name: 'transaction',
      path: '/transaction',
      component: () => import('@/page/oneself/components/transaction')
    },

    // 行情（quotation）
    {
      name: 'quotation',
      path: '/quotation',
      component: () => import('@/page/quotation')
    },
    // 行情详细展示
    {
      name: 'quotation-num',
      path: '/quotation-num',
      component: () => import('@/page/quotation/components/quotation-num')
    }
  ]
})
