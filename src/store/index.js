import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
import memory from "./modules/memory"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    memory
  },
  state: {},
  mutations: {},
  actions: {},
  plugins: [createPersistedState()]
})
