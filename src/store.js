import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apple: 150
  },
  getters: {
    //税込み金額
    appleIncludesTax: state => {
      return state.apple * 1.08
    }
  },
  mutations: {

  },
  actions: {

  }
})
