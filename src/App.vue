<template>
	<div id="gogogo">
		<ul>
			<li><router-link to="/page1">1.路由.</router-link></li>
			<li><router-link to="/page2">2.父组件向子组件传值.</router-link></li>
			<li><router-link to="/page3">3.父组件调用子组件方法.</router-link></li>
			<li><router-link to="/page4">4.子组件向父组件通信.</router-link></li>
			<li><router-link to="/page5">5.http调用与v-for.</router-link></li>
			<li><router-link to="/page6">6.webpack加载scss.</router-link></li>
			<li><router-link to="/page7/1">7.路由传值.</router-link></li>
			<li><router-link to="/page8">8.vuex与promise异步</router-link></li>
		</ul>
		<br>
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
