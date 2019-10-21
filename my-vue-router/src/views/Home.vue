<template>
  <div class="home">
    <div>手榴弹扔了{{ $store.state.count }} 个</div>
    <button @click="add">扔一个</button>
    <button @click="asyncAdd">蓄力扔一个</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    add() {
      this.$store.commit("increment")
      // 即使action执行同步代码返回的结果依然是Promsie对象
      // this.$store.dispatch("add/increment").then(res => {
      //   if (!res) {
      //     alert("投掷失败! 没货了")
      //   }
      // })
    },
    asyncAdd() {
      this.$store.dispatch("asyncAdd")
      // this.$store.dispatch("asyncIncrement").then(res => {
      //   if (!res) {
      //     alert("投掷失败! 没货了")
      //   }
      // })
    }
  }
}
</script>
