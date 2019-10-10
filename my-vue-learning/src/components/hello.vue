<template>
    <div>
        <h1>{{ msg }}</h1>
        <h1>{{ something }}</h1>
        <slot name="content" msg="xixixi"></slot>
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
    }
}
</script>>

<style lang="stylus">

</style>