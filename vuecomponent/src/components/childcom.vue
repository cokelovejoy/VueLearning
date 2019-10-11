<template>
    <div>
        <h1 @click="sendMsg">click show data then send to bro component</h1>
        <p>{{ $attrs }}</p>
        <p>{{ bar }}</p>
        <h4>{{ author }}</h4>
        <slot :user="user"></slot>
    </div>
</template>
<script>
export default {
    name: 'childcom',
    inject: ['author'],
    data() {
        return {
            bar: 'bar',
            user: 'coke'
        }
    },
    methods: {
        sendMsg() {
            this.$parent.$emit('send', this.bar)
            this.$emit('showMsg', 'good bro')
        }
    }
}
</script>