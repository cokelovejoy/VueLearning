<template>
    <div>
        <slot></slot>
        <slot name="message"></slot>
        <p>{{ $attrs.msg }}</p>
        <p>{{ $attrs }}</p>    
        <childcom v-bind="$attrs" foo="foo" ref="child" @showMsg="showMsg">
            <template v-slot:default="slotProps">
                <div>
                    作用域插槽{{slotProps.user}}
                </div>
            </template>
        </childcom>
        <childcom2 @addnum="addnum" :text="msg"></childcom2>
        <p>NUM: {{ num }}</p>
    </div>
</template>
<script>
import childcom from './childcom'
import childcom2 from './childcom2'
export default {
    name: 'helloworld',
    components: {
        childcom,
        childcom2
    },
    mounted() {
        this.$refs.child.bar = 'xxx'
        this.$children[1].foo = 'haha'
    },
    data() {
        return {
            num: 1,
            msg: ''
        }
    },
    methods: {
        addnum(num) {
            this.num = this.num + num
        },
        showMsg(msg) {
            this.msg = msg
        }
    }
}
</script>