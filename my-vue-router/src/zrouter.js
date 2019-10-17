import Vue from 'vue'
import ZVueRouter from './zvue-router.js'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(ZVueRouter)
// Vue.use() 应用插件, 里面会掉一个install 方法
// install 方法里面会
// 1. 挂载$router
// 2. 注册组件

// 实现router 类, 内部需要做什么?
// 1. 解析路由配置
// 2. 响应url 变化
// 3. 事件监听hashchange(当路由变化时触发事件, 然后要重新渲染对应的组件) 
// 4. 组件切换 
export default new ZVueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: "/about",
            name: 'about',
            component: About
        }
    ]
})