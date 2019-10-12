<template>
  <div>
    <input :type="type" :value="value" @input="onInput($event)">
  </div>
</template>

<script>
export default {
  name: 'ZInput',
  data() {
    return {
      a: 'a'
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods:{
    onInput(e) {
      // 触发父组件给当前组件绑定的input事件. 并将子组件里写入input的值作为参数传入.
      this.$emit('input', e.target.value)
      // 通知父组件form-item 做内容校验
      this.$parent.$emit('validate')
    }
  }
}
</script>