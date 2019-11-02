<template>
    <div>
        <h1>{{ msg }}</h1>
        <h1>{{ something }}</h1>
        <slot name="content" msg="xixixi"></slot>
        <input type="text" v-model="hangleMessage">
    </div>
</template>>
<script>
export default {
    name: "hello",
    inject: ['something'],
    data() {
        return {
            msg: "hahaha"
        }
    },
    computed: {
        hangleMessage: {
            get() {
                return this.msg
            },
            set(newVal) {
                this.msg = newVal
            }
        }
    }
}
</script>>

<style lang="stylus">

</style>