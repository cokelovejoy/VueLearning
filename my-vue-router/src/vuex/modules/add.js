const state = {
    count: 0,
    left: 10
}
const mutations = {
    increment(state) {
        state.count += 1
        state.left -= 1
    }
}
const getters = {
    getCount(state) {
        return state.count
    },
    left(state) {
        return state.left
    }
}
const actions = {
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
                resolve(dispatch("increment"))
            }, 1000)
        })
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}