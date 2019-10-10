<template>
    <div>
        <label v-if="label">{{ label }}</label>     
        <slot></slot>
        <p v-if="error">{{ error }}</p>
    </div>
</template>
<script>
import Schema from 'async-validator'
export default {
    name: "KFormItem",
    inject: ['form'],
    props: {
        label: {
            type: String,
            default: ''
        },
        validateType: {
            type: String
        }
    },
    data() {
        return {
            error: ''
        }
    },
    mounted() {
        //监听 validate事件
        this.$on('validate', () => {
            this.validate()
        });
    },
    methods: {
        validate() {
            // 校验
            console.log('22222222222222222')
            const value = this.form.model[this.validateType]
            const rule = this.form.rules[this.validateType]
            // 校验规则
            console.log('value', value)
            console.log('rule', rule)
            const schema = new Schema({[this.validateType]: rule})
            // 校验返回Promise
            return schema.validate({[this.validateType]: value}, error => {
                if(error) {
                    this.error = error[0].message;
                } else {
                    this.error = ''
                }
            })
        }
    }
}
</script>