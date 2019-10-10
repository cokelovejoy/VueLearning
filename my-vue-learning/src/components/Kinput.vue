<template>
    <div>
        <!-- v-bind="$attrs" 可以将外部传递进来的 属性作为自己的属性，前提是没有props注册-->
        <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>
<script>
export default {
    name: "Kinput",
    inheritAttrs: false, //不会将attrs 继承到上一层的元素。
    props: {
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        }
    },
    methods: {
        onInput(e) {
            // 使用父组件的方法
            this.$emit('input', e.target.value)
            // this.$emit('update:value', e.target.value)
            //通知校验
            console.log('input', this.$parent)
            this.$parent.$emit('validate')
        }
    }
}
</script>