<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <slot></slot>
        <p v-if="errorMessage">{{errorMessage}}</p>
    </div>
</template>
<script>
import Schema from 'async-validator'
export default {
    name: 'ZFormItem',
    inject: ['form'], // 注入
    props: {
        label: { // 输入项标签
            type: String,
            default: ''
        },
        prop: { // 字段名
            type: String,
            default: ''
        }
    },
    data() {
        return {
            errorMessage: '' //校验错误
        }
    },
    mounted() {
        // 监听 validate事件
        this.$on('validate', () => {
            this.validate()
        })
    },
    methods: {
        validate() {
            // 获取对应FormItem 的校验规则
            const rule = this.form.rules[this.prop]
            // 获取校验值
            const msg = this.form.msg[this.prop]
            // 创建校验规则
            const descriptor = { [this.prop]: rule }
            // 创建校验器
            const schema = new Schema(descriptor)
            // 校验返回Promise对象,没有触发catch就说明验证通过
            return schema.validate({ [this.prop]: msg}, error => {
                if (error) {
                    // 将错误信息显示
                    this.errorMessage = error[0].message;
                } else {
                    // 校验通过
                    this.errorMessage = ''
                } 
            })
            
        }
    }

}
</script>