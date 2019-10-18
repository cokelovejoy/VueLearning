// 实现 自己的VueRouter类
// 需要实现的 功能
// 1.解析路由配置
// 2.响应url变化
// 3.事件监听hashchange
// 4.组件切换

let Vue
// 声明Router类
export default class ZVueRouter {
    // 1.解析route配置,生成routeMap对象(指定路由映射指定的组件)
    constructor(options) {
        this.$options = options
        // 路由映射表对象 用来保存 路由 和 路由指定的组件
        this.routeMap = {}

        // url响应化处理: 只要url变化, 用到url 的组件就会重新渲染
        // vue-router 跟vue强耦合 ,因此这个插件只能用于vue
        this.app = new Vue({
            data: {
                current: '/'
            }
        })
    }
    // 声明初始化函数
    init() {
        // 1. 事件监听
        this.bindEvents()
        // 2. 路由映射操作
        this.createRouteMap()
        // 3. 组件声明和注册
        this.initComponent()
    }
    // 监听hashchange事件, 当hash值改变时,就会触发事件,然后执行回调函数,将改变当前我们保存的路由的hash值.
    bindEvents() {
        window.addEventListener('hashchange', this.onHashChange.bind(this))
        window.addEventListener('load', this.onHashChange.bind(this))
    }
    onHashChange() {
        // #/index
        this.app.current = window.location.hash.slice(1) || '/'
    }
    // 做路由映射
    createRouteMap() {
        this.$options.routes.forEach(item => {
            this.routeMap[item.path] = item
        })
    }
    // 初始化组件    
    initComponent() {
        // 声明 组件 <router-link>
        // <router-link to="/">abc</router-link>
        Vue.component('router-link', {
            props: {
                to: String
            },
            // render选项
            // h(tag, data, children)
            render(h) {
                // 此处的this 是当前组件的实例
                return h('a', {attrs: {href: '#' + this.to}}, [this.$slots.default])
            }
        })
        // <router-view>
        // 路由出口, 将来组件会插在此处
        Vue.component('router-view', {
            render: (h) => {
                // 拿出要渲染的组件
                // this 希望是ZVueRouter实例
                const component = this.routeMap[this.app.current].component
                return h(component)
            }
        })
    }
}

// 实现插件
// 插件接受Vue构造函数
ZVueRouter.install = function (_Vue) {
    // 保存Vue构造函数,就可以方便使用了.
    Vue = _Vue
    // 混入: 执行挂载操作
    Vue.mixin({
        beforeCreate() {
            // 只有根组件执行一次
            if (this.$options.router) {
                // 这里的this 是vue实例
                Vue.prototype.$router = this.$options.router
                // 执行初始化
                this.$options.router.init()
            }
        }
    })
}