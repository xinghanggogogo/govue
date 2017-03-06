<template lang="html">
    <div class="page6">
        <p>scss样式</p>
        <div class="wrap">
            'scss编写.'
        </div>
    </div>
</template>

<script>
export default {
    name :'page6',
    data () {
        return {
        }
    },
}
</script>

<!-- 注意更改语言css->scss -->
<!-- Module not found: Error: Cannot resolve module 'sass-loader' #121 -->
<!-- npm install sass-loader --save-dev  -->
<style lang="scss">
.page6 {
    width: 950px;
    margin: 0 auto;
    .wrap {
        width: 300px;
        height: 100px;
        padding: 30px 0;
        font-size: 40px;
        line-height: 1;
        text-align: center;
        color: #aaa;
        background-color: #30A080;
    }
}
</style>
