// 自定义vuex
// vuex 内最重要的是实现两个方法commit 方法和 dispatch方法
// 1. 插件
let Vue
function install(_Vue) {
    Vue = _Vue
    // 混入 store, 混入的作用: 让它至少会执行一次
    // store 执行的时候就有Vue,不用import
    // 这也是为什么Vue.use必须在新建store之前
    Vue.mixin({
        beforeCreate() {
            // 这样才能获取到传递进来的store
            // 只有root元素才有store, 所以判断一下
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store
            }
        }
    })
}
// 2. 实现Store
class Store {
    constructor(options = {}) {
        this.state = new Vue({
            data: options.state
        })
        this.mutations = options.mutations || {}
        this.actions = options.actions || {}
    }
    // func 是mutations中的函数名
    // 注意这里用箭头函数形式, 后面actions实现时会有作用
    commit = (func, arg) => {
        this.mutations[func](this.state, arg)
    }

    dispatch(func, arg) {
        this.actions[func]({
            commit: this.commit,
            state: this.state,
        }, arg)
    }
}
export default { Store, install }