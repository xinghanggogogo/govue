<template>
    <div>
        <p>父组件</p>
        <button v-on:click="clickParent">点击</button>
        <cmp5 ref="child"></cmp5>
    </div>
</template>

<script>
    import cmp5 from './cmp5.vue';
    export default {
        name: "parent",
        components: {
            cmp5
        },
        methods: {
            clickParent() {
                this.$refs.child.handleParentClick("父组件调用子组件方法.");
            }
        }
    }
</script>
