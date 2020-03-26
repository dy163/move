import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
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
    // 热点更多展示页面（hotMore）**********************
    {
      name: 'hotspot',
      path: '/hotspot',
      component: () => import('@/page/information/components/hotspot')
    },
    // 公告详情（details）**********************
    {
      name: 'details',
      path: '/details',
      component: () => import('@/page/information/components/details')
    },
    // 公告详情（freemore）**********************
    {
      name: 'freemore',
      path: '/freemore',
      component: () => import('@/page/information/components/freemore')
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
    // 编辑个人信息
    {
      name: 'myself',
      path: '/myself',
      component: () => import('@/page/personal/components/myself')
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
    // 成交查询
    {
      name: 'inquire',
      path: '/inquire',
      component: () => import('@/page/personal/components/inquire')
    },
    // 委托查询
    {
      name: 'entrust',
      path: '/entrust',
      component: () => import('@/page/personal/components/entrust')
    },
    // 交割单查询
    {
      name: 'delivery',
      path: '/delivery',
      component: () => import('@/page/personal/components/delivery')
    },
    // 流水查询
    {
      name: 'flowing-water',
      path: '/flowing-water',
      component: () => import('@/page/personal/components/flowing-water')
    },
    // 搜索股票 search
    {
      name: 'search',
      path: '/search',
      component: () => import('@/page/search')
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
      // path: '/transaction/:q',
      path: '/transaction',
      component: () => import('@/page/transaction')
    },

    // 行情（quotation）
    {
      name: 'quotation',
      path: '/quotation',
      component: () => import('@/page/quotation')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.name === 'account') {
    if (window.localStorage.getItem('sessionid')) {
      router.replace('/capital')
    }
  }
  next()
})

export default router

