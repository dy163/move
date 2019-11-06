import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // user: JSON.parse(window.localStorage.getItem('sessionid')) 
  },
  mutations: {
    // setUser (state, user) {
    //   state.user = user
    //   // 持久化本地信息
    //   window.localStorage.setItem('sessionid', JSON.stringify(state.sessionid))
    // }
  },
  actions: {

  }
})
