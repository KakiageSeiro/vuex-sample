import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apple: 150,
    total: 1,
    tax: 1.08
  },
  getters: {
    //税込み金額
    appleIncludesTax: state => {
      return state.apple * 1.08
    },
    totalApplesIncludesTax: state => {
      return Math.floor(state.apple * state.total * state.tax)
    }
  },
  mutations: {
    incrementApple: state => {
      state.total++
    }
  },
  actions: {

  }
})
