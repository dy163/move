import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // phone: JSON.parse(window.localStorage.getItem('phone'))
  },
  mutations: {
    // setUser (state, phone) {
    //   state.phone = phone
    //   // 持久化本地信息
    //   window.localStorage.setItem('phone', JSON.stringify(state.phone))
    // }
  },
  actions: {

  }
})
