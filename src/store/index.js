import Vue from 'vue'
import Vuex from 'vuex'
import loginStore from './module/loginStore'
import regStore from './module/regStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login: loginStore,
    reg: regStore
  }
})

export default store;