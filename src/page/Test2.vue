<template>
	<div class="test">
	<p>Test2</p>
	<test v-bind:test_value="item"></test>
	<test test_value2="直接绑定字符串"></test>
	<li><router-link to="/test">test3</router-link></li>
	</div>
</template>

<script>
import Test from '/home/xinghang/gogogo/src/components/test.vue' 
export default {
	name: 'Test2',
	data () {
		return {
			'item':'test_vale'
		}
	},
	components: {
		Test
	}
}
</script>