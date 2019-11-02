<template>
  <div id="app">
    <div id="nav">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view/>
    <hr>
    <input type="text" v-model="formModel['test']" @input="printVal">
    <button @click="changeStoreValue">chang storeValue</button>
    <h3 @click="getVal='hello'">{{getVal}}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formModel: {
        'test': ''
      },
      val: '11',
      storeVal: ''
    }
  },
  computed: {
    getVal: {
      get(){
        return this.val
      },
      set(newVal) {
        this.val = newVal
        console.log(this.val)
        console.log('1111')
      }
    }
  },
  methods: {
    changeStoreValue() {
      this.formModel['test'] = 'hello'
      console.log(this.formModel['test'])
      console.log(this.$store.state.test.storeValue)
    },
    printVal() {
      // 这种写法 改变this.formModel 也会引发 Vuex warning : Don't mutate vuex store state outside mutation handler
      // 实际上就是: arry变量 使用了 this.formModel 的引用 ,当arry 成为state后, this.formModel的值改变,arry也会跟着改变
      // 因此会引发上述的vuex warning,这种比较难发现,因此要注意.
      let arry = [this.formModel]
      // let arry = this.formModel.test
      this.$store.commit('test/setStoreValue', arry)
      console.log(this.formModel['test'])
      console.log(this.$store.state.test.storeValue)
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
