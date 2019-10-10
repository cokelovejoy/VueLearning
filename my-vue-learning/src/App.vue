<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld ref="hello" msg="Welcome to Your Vue.js App" foo="foo"/>
    <hello>
      <template v-slot:content="slotProps">
        <h2>我是一个具名插槽</h2>
        <h2>{{ slotProps.msg }}</h2>
      </template>
    </hello>
    <KInput v-model="model.username"/>
    <!-- v-model实际只是一个语法糖， 真正的原理是下面的value + input -->
    <!-- <KInput :value="model.username" @input="model.username=$event"></KInput> -->
    <!-- .sync 修饰符 也可以实现双向绑定v-model的效果 问和v-model的区别是什么：-->
    <KInput :value.sync="model.username"></KInput>
    <h3>{{ model.username }}</h3>

    
    <h2>KFORM TEST</h2>
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" validateType="username">
        <KInput v-model="model.username" placeholder="user name" type="text"></KInput>
      </KFormItem>
      <KFormItem label="密码" validateType="password">
        <KInput v-model="model.password" placeholder="password" type="password"></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="submit">Submit</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import hello from './components/hello.vue'
import KInput from './components/Kinput.vue'
import KFormItem from './components/KFormItem.vue'
import KForm from './components/KForm.vue'

export default {
  name: 'app',
  provide() {
    return {
      something: "something 隔代传参"
    }
  },
  components: {
    HelloWorld,
    hello,
    KInput,
    KFormItem,
    KForm
  },
  data() {
    return {
      model: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: "用户名必填" }],
        password: [{ required: true, message: "密码必填" }]
      }
    }
  },
  mounted() {
    this.$refs.hello.message = 'hello richard'
    this.$children[0].name = 'coke'
  },
  methods: {
    submit() {
      this.$refs.loginForm.validate(isValidated => {
        if(isValidated) {
          alert('loading')
        } else {
          alert('error, input again')
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
