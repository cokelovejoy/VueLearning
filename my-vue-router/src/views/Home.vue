<template>
  <div class="home">
    <!-- <div>手榴弹扔了{{ $store.state.count }} 个</div>
    <button @click="add">扔一个</button>
    <button @click="asyncAdd">蓄力扔一个</button> -->
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

    },
    asyncAdd() {

    }
  }
}
</script>
