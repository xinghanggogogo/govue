<template>
    <div>
        <p>子组件</p>
    </div>
</template>

<script>
    export default {
        name: "cmp5",
        methods: {
            handleParentClick(e) {
                console.info(e)
            }
        }
    }
</script>
