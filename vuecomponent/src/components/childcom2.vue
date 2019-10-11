<template>
    <div>
        {{ foo }}
        <button @click="$emit('addnum', 5)">add num</button>
        {{ msg }}
        <h2>{{ text }}</h2>
    </div>
</template>
<script>
export default {
    name: 'childcom2',
    props: {
        text: String
    },
    data() {
        return {
            foo: 'foo',
            msg: '1'
        }
    },
    mounted() {
        this.$parent.$on('send', (bar) => {
            this.msg = bar
        })
    }
}
</script>