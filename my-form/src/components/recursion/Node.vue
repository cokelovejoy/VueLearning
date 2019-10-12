<template>
    <div>
        <h3>{{ data.title }}</h3>
        <!-- 递归组件必须要有结束的条件 -->
        <node v-for="d in data.children" :key="d.id" :data="d"></node>
    </div>
</template>
<script>
export default {
    name: 'Node', // name 对递归组件是必要的.
    props: {
        data: {
            type: Object,
            required: true
        }
    }

}
</script>