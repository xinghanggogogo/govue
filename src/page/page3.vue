<template>
	<div class="page3">
		<p>父组件调用子组件方法</p>
		<button v-on:click="clickParent">点击</button>
		<childcmp ref="child"></childcmp>
	</div>
</template>

<script>
import childcmp from '../components/cmp4.vue'
export default {
	name: "parent",
	components: {
		childcmp
	},
	methods: {
		clickParent() {
			this.$refs.child.handleParentClick("父组件调用子组件方法.");
		}
	}
}
</script>
