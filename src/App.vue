<template>
	<div id="gogogo">
		<ul>
			<li><router-link to="/page1">page1</router-link></li>
			<li><router-link to="/page2">page2</router-link></li>
   		</ul>
			<router-view></router-view>
		<p>这是来自的主页的:</p>
		<cmp1></cmp1>
		<cmp2></cmp2>
	</div>
</template>

<script>
import cmp1 from './components/cmp1.vue';
import cmp2 from './components/cmp2.vue';
export default {
	name: 'app',
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

<style>
	body, div, dl, dt, dd, ul, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, blockquote {
		margin: 0;
		padding: 0;
	}
	ul {
		list-style: none;
	}
	div {
		border-width: 1px;
	}
</style>
