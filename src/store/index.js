import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import memory from './modules/memory'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    memory
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  plugins: [createPersistedState()],
})
