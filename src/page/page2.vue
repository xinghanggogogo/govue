<template>
	<div class="test">
	<p>父组件向子组件传值</p>
	<cmp3 v-bind:value1="item"></cmp3>
	<cmp3 value2="2222222"></cmp3>
	<p><router-link to="/page1">page1</router-link></p>
	</div>
</template>

<script>
import cmp3 from '../components/cmp3.vue'
export default {
	name: 'page2',
	data () {
		return {
			'item':'111111'
		}
	},
	components: {
		cmp3
	}
}
</script>
