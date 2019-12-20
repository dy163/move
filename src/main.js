import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引vant
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/styles/index.css'

// 第三方包设置字体大小
import 'amfe-flexible'
// 底部组件
import AppTabbar from '@/components/app-tabbar'

// 解决 btn条转的的时候报错的问题
import VueRouter from 'vue-router'
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.component('app-tabbar', AppTabbar)

Vue.use(Vant)

// 封装一个全局的定时器----⬇
Vue.prototype.$sleep = time => {
  return new Promise((resolve, reject) => {
    window.setTimeout(resolve, time)
  })
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
