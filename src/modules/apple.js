
export const apple = {
  namespaced: true,
  state: {
    apple: 150,
    total: 1,
    tax: 1.08,
    stock: true
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
    },
    changeStock: state => {
      state.stock = false
    }
  },
  actions: {
    checkStock: ({ commit }) => {
      setTimeout(() => {
        commit('changeStock')
      }, 10000)
    }
  }
}
