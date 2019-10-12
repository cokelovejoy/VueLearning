import Vue from 'vue'

// create函数 接收要创建的组件 和传入的值 作为参数
function create(Component, props) {
    // 1. 创建Component实例
    const vm = new Vue({
        // render函数将传入组件配置对象转换为虚拟dom
        render(h) {
            // 渲染函数 使用
            // h == createElement
            // h(Component) => vdom
            return h(Component, { props })
        }
    }).$mount() // 执行挂载函数,但未制定挂载目标,表示只执行初始化工作(先渲染不挂载)

    // 方式2：Vue.extend() 返回组件构造函数
    // const Ctor = Vue.extend(Component)
    // const comp = new Ctor({propsData: props})    
    // document.body.appendChild(comp.$el)
    // 将生成的dom元素 追加至 body

    // 获取dom
    document.body.appendChild(vm.$el)
    // 2. 挂载 
    const comp = vm.$children[0]
    // 3. 销毁
    comp.remove = () => {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    return comp
}
export default create