<template>
    <div>
        <h3>ZForm表单</h3>
        <hr>
        <z-form :msg="msg" :rules="rules" ref="loginForm">
            <z-form-item label="用户名" prop="username">
                <z-input v-model="msg.username"></z-input>
            </z-form-item>
            <z-form-item label="密码" prop="password">
                <z-input type="password" v-model="msg.password"></z-input>
            </z-form-item>
            <z-form-item>
                <button @click="submitForm">Submit</button>
            </z-form-item>
        </z-form>
        <h3>{{ msg }}</h3>
    </div>
</template>
<script>
import ZForm from '../ZForm'
import ZFormItem from '../ZFormItem'
import ZInput from '../Zinput'
import create from '@/utils/create.js'
import Notice from '@/components/form/Notice'
export default {
    components: {
        ZForm,
        ZFormItem,
        ZInput
    },
    data() {
        return {
            rules: {
                username: [{ required: true, message: "请输入用户名" }],
                password: [{ required: true, message: "请输入密码" }]
            },
            msg: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        submitForm() {
            this.$refs.loginForm.validate(valid => {
                const notice = create(Notice, {
                    title: "Notice",
                    message: valid ? "请求登录!" : "校验失败!",
                    duration: 3000
                })
                notice.show()
            })
        }
    }
}
</script>