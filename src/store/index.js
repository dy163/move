import Vue from 'vue'
import Vuex from 'vuex'
import { getUserInfo } from '@/api/user.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // user: JSON.parse(window.localStorage.getItem('sessionid')) 
    ID_card_number:'',
    edu_bg: '',
    header_img: '',
    intro: '',
    last_login_time: '',
    login_number: '',
    phone: '',
    position: '',
    reg_time: '',
    usercode: '',
    username: ''
  },
  mutations: {
    async getUserInfo() {
      const res = await getUserInfo()
      JSON.parse(window.localStorage.setItem(''))
      console.log(res)
    }
  },
  actions: {

  }
})
