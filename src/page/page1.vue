<template>
	<div class="page1">
		<p>page1</p>
		<p>这是来自page1的: <cmp1></cmp1></p>
		<p>这是来自page1的: <cmp2></cmp2></p>
	</div>
</template>

<script>
import cmp1 from '../components/cmp1.vue'
import cmp2 from '../components/cmp2.vue'
export default {
	name: 'page1',
	data () {
		return {
		}
	},
	components: {
		cmp1: cmp1,
		cmp2: cmp2
	}
}
</script>
