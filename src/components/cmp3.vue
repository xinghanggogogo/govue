<template>
	<div>
	这是一个传值子组件.
	<div>
		<span>这个值来自父组件变量{{ value1 }}</span>
		<span>这个值来自父组件直接定义的字符串{{ value2 }}</span>
		<span>这个值来自组件本身的变量{{ value3 }}</span>
	</div>
	<button v-on:click="func">点击改变本身data</button>
	</div>
</template>

<script>
	export default {
		name:'cmp3',
		props: ['value1', 'value2'],
		data () {
			return{
				'value3': '333333'
			}
		},
		methods: {
			func () {
				this.$data.value3 = 'test'
			}
		}
	}
</script>
