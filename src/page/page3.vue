<template>
	<div class="page3">
		<p>父组件调用子组件方法</p>
        <cmp4></cmp4>
	</div>
</template>

<script>
import cmp4 from '../components/cmp4.vue'
export default {
	name: 'page3',
	data () {
		return {
		}
	},
	components: {
		cmp4
	}
}
</script>
