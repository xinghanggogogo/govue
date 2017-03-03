<template>
	<div class="page5">
		<p>http调用与v-for</p>
        <p>这里写出了普通的ajax请求和jsonp的跨域,注意特殊的params的写法</p>
        <p>想要使用$http,需要安装特定的依赖.具体参考:http://blog.csdn.net/qq_24122593/article/details/52954726</p>
        <p>另: 采用$http方法进行http请求是, 返回的data并不是是数据, 而是整个报文, data.data</p>
		<button v-on:click="func1">点击</button>
        <div class="items" v-for="item in items">
            <p>{{ item.anchor }}</p>
            <p>{{ item.title }}</p>
        </div>
	</div>
</template>

<script>
export default {
	name: "parent",
    data () {
        return {
            items: []
        }
    },
	methods: {
        func () {
            this.$http.get('/api/test', {params: {key1: 'value1', key2:' value2'}}).then(function (data) {
                this.$data.something = data.something
            })
        },
        func0 () {
            this.$http.post('/api/test', {params: {key1: 'value1', key2: 'value2'}}).then(function (data) {
                this.$data.something = data.something
            })
        },
        func1 () {
            this.$http.jsonp('http://101.254.157.124:8010/test', {params: {key1: 'value1', key2:'value2'}, jsonp: "jsonp"}).then(function (data) {
                console.log(data.data)
                this.$data.items = data.data.shows
            })
        }
    }
}
</script>
