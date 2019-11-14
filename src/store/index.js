import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ID_card_number: window.localStorage.getItem('ID_card_number'),
    edu_bg: window.localStorage.getItem('edu_bg'),
    header_img: window.localStorage.getItem('header_img'),
    intro: window.localStorage.getItem('intro'),
    last_login_time: window.localStorage.getItem('last_login_time'),
    login_number: window.localStorage.getItem('login_number'),
    phone: window.localStorage.getItem('phone'),
    position: window.localStorage.getItem('position'),
    reg_time: window.localStorage.getItem('reg_time'),
    usercode: window.localStorage.getItem('usercode'),
    username: window.localStorage.getItem('username'),
  },
  mutations: {
    setClickCard(state,ID_card_number) {
      state.ID_card_number = ID_card_number
      window.localStorage.setItem('ID_card_number', state.ID_card_number)
    },
    setClickEdu(state,edu_bg) {
      state.edu_bg = edu_bg
      window.localStorage.setItem('edu_bg', state.edu_bg)
    },
    setClickImg(state,header_img) {
      state.header_img = header_img
      window.localStorage.setItem('header_img', state.header_img)
    },
    setClickIntro(state,intro) {
      state.intro = intro
      window.localStorage.setItem('intro', state.intro)
    },
    setClickTime(state,last_login_time) {
      state.last_login_time = last_login_time
      window.localStorage.setItem('last_login_time', state.last_login_time)
    },
    setClickNumber(state,login_number) {
      state.login_number = login_number
      window.localStorage.setItem('login_number', state.login_number)
    },
    setClickPhone(state,phone) {
      state.phone = phone
      window.localStorage.setItem('phone', state.phone)
    },
    setClickPosition(state,position) {
      state.position = position
      window.localStorage.setItem('position', state.position)
    },
    setClickReg(state,reg_time) {
      state.reg_time = reg_time
      window.localStorage.setItem('reg_time', state.reg_time)
    },
    setClickUsercode(state,usercode) {
      state.usercode = usercode
      window.localStorage.setItem('usercode', state.usercode)
    },
    setClickUsername(state,username) {
      state.username = username
      window.localStorage.setItem('username', state.username)
    }
  },
  actions: {
    
  }
})




















   // user: {
    //   ID_card_number:JSON.stringify(window.localStorage.getItem('ID_card_number')) ,
    //   edu_bg: JSON.stringify(window.localStorage.getItem('edu_bg')),
    //   header_img: JSON.stringify(window.localStorage.getItem('header_img')),
    //   intro: JSON.stringify(window.localStorage.getItem('intro')),
    //   last_login_time: JSON.stringify(window.localStorage.getItem('last_login_time')),
    //   login_number: JSON.stringify(window.localStorage.getItem('login_number')),
    //   phone: JSON.stringify(window.localStorage.getItem('phone')),
    //   position: JSON.stringify(window.localStorage.getItem('position')),
    //   reg_time: JSON.stringify(window.localStorage.getItem('reg_time')),
    //   usercode: JSON.stringify(window.localStorage.getItem('usercode')),
    //   username: JSON.stringify(window.localStorage.getItem('username'))
    // }
    // async change () {
    //   const res = await getUserInfo()
    //   return res.result
    // }