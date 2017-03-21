<template>
	<div class="page1">
		<!-- 组件 -->
		<p>路由和组件</p>
		<p>这是来自page1的: <cmp1 v-if="ok"> <span>test</span> </cmp1></p>
		<p>这是来自page1的: <cmp2></cmp2></p>

		<!-- 循环渲染的单位是div, 而不是仅仅是p -->
		<div class="test-vuefor" v-for="item in items">
			<p>{{item.value}}</p>
			<p>{{item}}</p>
			<h6>注意p标签和div标签的数量.</h6>
		</div>

		<!-- 测试监听传值 -->
		<button @click="func(ok)">事件监听0</button>
		<button @click="func('ok')">事件监听1</button>

		<!-- 测试v-model+v-for -->
		<select name="s_name" v-model="your_option">
			<option v-for="item in items" :value="item.value">
				{{item.value}}
			</option>
		</select>
		<span>your_option: {{your_option}}</span>

	</div>
</template>

<script>
import cmp1 from '../components/cmp1.vue'
import cmp2 from '../components/cmp2.vue'
export default {
	name: 'page1',
	data () {
		return {
			ok : true,
			your_option: '3',
			items: [
				{value: 1},
				{value: 2}
			]
		}
	},
	methods: {
		func: (param) => {
			console.log(param)
		},
	},
	components: {
		cmp1: cmp1,
		cmp2: cmp2
	}
}
</script>
