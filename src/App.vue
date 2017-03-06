<template>
	<div id="gogogo">
		<ul>
			<li><router-link to="/page1">路由.</router-link></li>
			<li><router-link to="/page2">父组件向子组件传值.</router-link></li>
			<li><router-link to="/page3">父组件调用子组件方法.</router-link></li>
			<li><router-link to="/page4">子组件向父组件通信.</router-link></li>
			<li><router-link to="/page5">http调用与v-for.</router-link></li>
			<li><router-link to="/page6">webpack加载scss.</router-link></li>
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
	@import './assets/css/reset.css';
</style>
