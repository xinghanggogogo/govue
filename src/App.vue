<template>
	<div id="gogogo">
		<ul>
			<li><router-link to="/page1">路由.</router-link></li>
			<li><router-link to="/page2">父组件向子组件传值.</router-link></li>
			<li><router-link to="/page3">父组件调用子组件方法.</router-link></li>
			<li><router-link to="/page4">子组件向父组件通信.</router-link></li>
   		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
		}
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
