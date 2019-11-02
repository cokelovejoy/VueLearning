const state = {
    storeValue: null,
    storeObj: {a:1, b:2}
}
const mutations = {
    setStoreValue(state, val) {
        state.storeValue = val
    } 
}
export default {
    namespaced: true,
    state,
    mutations
}