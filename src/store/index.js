import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   user: JSON.parse(window.localStorage.getItem('token'))
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      // 持久化本地信息
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {

  }
})
