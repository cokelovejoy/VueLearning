// 使用自定义的vuex
// 这个文件 其实就是一个 配置文件的东西, 将一个对象作为参数传入Vuex的Store类中,创建一个Store实例.
import Vue from 'vue'
import Zvuex from './zvuex.js'

Vue.use(Zvuex)

export default new Zvuex.Store({
    state: {
        count: 0,
        left: 10
    },
    mutations: {
        increment(state) {
            state.count += 1
            state.left -= 1
        }
    },
    getters: {
        getCount(state) {
            return state.count
        },
        left(state) {
            return state.left
        }
    },
    actions: {
        asyncAdd({commit}){
            commit("increment");
        },
        increment({getters, commit}) {
            // 添加业务逻辑
            if (getters.left > 0) {
                commit("increment")
                return true
            }
            return false
        },
        asyncIncrement({ dispatch }) {
            // 异步逻辑返回Promise
            return new Promise(resolve => {
                setTimeout(() => {
                    // 使用其他的 action
                    resolve(dispatch("increment"))
                }, 1000)
            })
        }
    }
})
