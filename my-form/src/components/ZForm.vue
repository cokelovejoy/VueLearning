<template>
    <div>
        <slot></slot>    
    </div>
</template>
<script>
export default {
    provide() {
        return {
            form: this // 将当前组件实例作为提供者, 子代组件可以更加方便的获得
        }
    },
    props: {
        msg: {
            type: Object,
            required: true
        },
        rules: {
            type: Object
        }
    },
    methods: {
        // 表单全局验证, 为Form 提供validate方法.
        validate(callback) {
            console.log("全局校验")
            // 1. 先筛选出含有prop属性的子组件,然后调用它们的validate方法并得到Promise数组
            const tasks = this.$children
                .filter(item => item.prop)
                .map(item => item.validate())
            // 2. 所有任务必须全部成功才算校验通过
            Promise.all(tasks)
                .then(() => callback(true))
                .catch(() => callback(false))
        }
    }
}
</script>