<template>
  <div id="app">
  <helloworld msg="hello world">
    <template v-slot:default>
      <h1>hello</h1>
    </template>
    <template v-slot:message>
     <h1>world</h1>
    </template>
  </helloworld>
  </div>
</template>

<script>
import helloworld from './components/helloworld'
export default {
  name: 'app',
  provide() {
    return {
      author: 'richard'
    }
  },
  components: {
    helloworld
  }
}
</script>

<style>
</style>
