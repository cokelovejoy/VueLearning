<template>
    <div>
        <li>
            <div @click="toggle">
                {{model.title}}
                <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
            </div>
            <ul v-show="open" v-if="isFolder">
                <t-item class="item" v-for="m in model.children" :model="m" :key="m.title"></t-item>
            </ul>
        </li>
    </div>
</template>
<script>
export default {
    name: "TItem",
    props: {
        model: Object
    },
    data() {
        return {
            open: false
        }
    },
    computed: {
        isFolder() {
            return this.model.children && this.model.children.length
        }
    },
    methods: {
        toggle() {
            if (this.isFolder) {
                this.open = !this.open
            }
        }
    }
}
</script>