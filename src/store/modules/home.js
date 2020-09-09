
const state = {
  data:{
    backPage:"",//上级返回路径
    upBackPage:""//最上级路径
  }
}

// getters
const getters = {
    getBackPage: () => {
        return this.backPage;
    },
    getUpBackPage: () => {
        return this.upBackPage;
    }
}

// actions
const actions = {
}

// mutations
const mutations = {
  setBackPage(state, data) {
    state.data.backPage = data;
  },
  setUpBackPage(state, data) {
    state.data.upBackPage = data;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
