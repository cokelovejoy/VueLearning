<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "KForm",
    provide() {
        return { form: this } //将当前实例传递到子组件
    },
    props: {
        model: {
            type: Object,
            required: true
        },
        rules: {
            type: Object,
        }
    },
    methods: {
        validate(cb) {
            // 全局校验
            console.log('全局校验')
            // 得到Promise 数组 (只保留有validateType属性的组件)
            const tasks = this.$children
                .filter(item => item.validateType)
                .map(item => item.validate())
            console.log('tasks', tasks)
            // 判断所有的项 全部校验通过。
            Promise.all(tasks)
                .then(() => cb(true))
                .catch(() => cb(false))
        }
    }

}
</script>