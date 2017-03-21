import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import moduleA from './moduleA'
import moduleB from './moduleB'

export default new Vuex.Store({
  modules: {
    moduleA,
    moduleB
  }
})
