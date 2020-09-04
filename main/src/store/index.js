import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commonData: {
      // parent: 1
    },
    isShowApp: false
  },
  mutations: {
    setCommonData (state, val) {
      state.commonData = val;
    },
    setShowApp (state, status) {
      state.isShowApp = status
    }
  },
  actions: {
  },
  modules: {
  }
})
