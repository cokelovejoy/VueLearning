import Vue from 'vue'
import Vuex from 'vuex'
import add from './modules/add.js'
import test from './modules/test.js'

Vue.use(Vuex)
// 以模块的方式 写入
export default new Vuex.Store({
  strict: true,
  modules: {
    add: add,
    test: test
  }
})
