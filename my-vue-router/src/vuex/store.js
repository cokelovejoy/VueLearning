import Vue from 'vue'
import Vuex from 'vuex'
import add from './modules/add.js'

Vue.use(Vuex)
// 以模块的方式 写入
export default new Vuex.Store({
 modules: {
   add: add
 }
})
