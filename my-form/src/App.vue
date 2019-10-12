<template>
  <div id="app">
    <!-- <z-input v-model="msg.account"></z-input> -->
    <!-- v-model实际只是一个语法糖， 真正的原理是下面的value + input -->
    <z-input :value="msg.account" @input="msg.account=$event"></z-input>
    <p>{{ msg.account }}</p>
    <hr>
    <h3>自定义Form表单组件的实现</h3>
    <m-form></m-form>
    <hr>
    <h3>递归组件实现</h3>
    <r-node></r-node>
    <hr>
    <h3>递归实现Tree组件</h3>
    <tree></tree>
  </div>
</template>

<script>
import ZInput from './components/Zinput.vue'
import MForm from './components/form/index.vue'
import RNode from './components/recursion/index.vue'
import tree from './components/tree/index.vue'
export default {
  name: 'app',
  components: {
    ZInput,
    MForm,
    RNode,
    tree
  },
  data() {
    return {
      msg: {
        account: '',
        password: ''
      }
    }
  }
}
</script>

<style>
</style>
