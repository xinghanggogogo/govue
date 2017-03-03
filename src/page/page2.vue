<template>
	<div class="test">
	<p>父组件向子组件传值</p>
	<cmp3 v-bind:value1="item" value2="222222"></cmp3>
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
