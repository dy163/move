import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/start',
      name: 'start',
      component: () => import('@/page/start.vue')
    },
    // 登录
    {
      name: 'sign',
      path: '/sign/:type',
      component: () => import('@/page/sign')
    },

    // 开户选择(默认首页展示)
    {
      path: '/',
      name: 'open-selection',
      component: () => import('@/page/open-selection')
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
      name: 'personal-information',
      path: '/personal-information',
      component: () => import('@/page/personal-information')
    },
    // 设置
    {
      name: 'install',
      path: '/install',
      component: () => import('@/page/personal-information/components/install')
    },
    // 账号管理
    {
      name: 'account-management',
      path: '/account-management',
      component: () => import('@/page/personal-information/components/account-management')
    },
    // 修改手机号modify
    {
      name: 'modify',
      path: '/modify',
      component: () => import('@/page/personal-information/components/modify')
    },
    // 选择验证方式(短信)selective-verification
    {
      name: 'selective-verification',
      path: '/selective-verification',
      component: () => import('@/page/personal-information/components/selective-verification')
    },
    // 绑定新手机binding-mobile
    {
      name: 'binding-mobile',
      path: '/binding-mobile',
      component: () => import('@/page/personal-information/components/binding-mobile')
    },
    // 验证手机号新的已注册mobile-registered
    {
      name: 'mobile-registered',
      path: '/mobile-registered',
      component: () => import('@/page/personal-information/components/mobile-registered')
    },

    // 关于我们（版本号）
    {
      name: 'about-us',
      path: '/about-us',
      component: () => import('@/page/personal-information/components/about-us')
    },
    // 资产
    {
      name: 'capital',
      path: '/capital',
      component: () => import('@/page/personal-information/components/capital')
    },
    // 入金
    {
      name: 'deposit',
      path: '/deposit',
      component: () => import('@/page/personal-information/components/deposit')
    },
    // 支付金额微信和支付宝
    {
      name: 'deposit-amount',
      path: '/deposit-amount',
      component: () => import('@/page/personal-information/components/deposit-amount')
    },
    // 我的银行卡添加页面bank-card
    {
      name: 'bank-card',
      path: '/bank-card',
      component: () => import('@/page/personal-information/components/bank-card')
    },
    // 添加银行卡bank-card-information
    {
      name: 'bank-card-information',
      path: '/bank-card-information',
      component: () => import('@/page/personal-information/components/bank-card-information')
    },
    // 各种银行卡展示
    {
      name: 'bank-card-add',
      path: '/bank-card-add',
      component: () => import('@/page/personal-information/components/bank-card-add')
    },
    // 支付协议payment-agreement
    {
      name: 'payment-agreement',
      path: '/payment-agreement',
      component: () => import('@/page/personal-information/components/payment-agreement')
    },
    // 订单列表order-list
    {
      name: 'order-list',
      path: '/order-list',
      component: () => import('@/page/personal-information/components/order-list')
    },
    // 盈亏分析porfit-loss
    {
      name: 'porfit-loss',
      path: '/porfit-loss',
      component: () => import('@/page/personal-information/components/porfit-loss')
    },
    // 个人简介
    {
      name: 'letter',
      path: '/letter',
      component: () => import('@/page/personal-information/components/letter')
    },

    // 自选股票 optional
    {
      name: 'optional',
      path: '/optional',
      component: () => import('@/page/optional')
    },
    // 交易界面（买入和卖出）
    {
      name: 'transaction',
      path: '/transaction',
      component: () => import('@/page/optional/components/transaction')
    },

    // 行情（optional-home）
    {
      name: 'optional-home',
      path: '/optional-home',
      component: () => import('@/page/optional-home')
    },
    // 行情详细展示
    {
      name: 'optional-number',
      path: '/optional-number',
      component: () => import('@/page/optional-home/components/optional-number')
    }
  ]
})
