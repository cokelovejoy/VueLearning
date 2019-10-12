<template>
    <div>
        <node :data="data"></node>
    </div>
</template>
<script>
import Node from "./Node.vue"
export default {
    components: {
        Node
    },
    data() {
        return {
            data: {
                id: '1',
                title: '递归组件使用手册',
                children: [
                    { id: '1-1', title: '使用方法'},
                    { id: '1-2', title: '注意事项'}
                ]
            }
        }
    }
}
</script>