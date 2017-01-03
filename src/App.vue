<template>
	<div id="gogogo">
		<ul>
            <li><router-link to="/test">test</router-link></li>
            <li><router-link to="/test2">test2</router-link></li>
			<li><router-link to="/test2">test3</router-link></li>
   		</ul>
			<router-view></router-view>
		<Header></Header>
		<Footer></Footer>
	</div>
</template>

<script>

import Header from '/home/xinghang/gogogo/src/components/header.vue';
import Footer from '/home/xinghang/gogogo/src/components/footer.vue';

export default {
	name: 'app',
	data () {
		return {
		}
	},
	methods(){

	}
	components: {
		Header: Header,
		Footer: Footer

	}
}
</script>

<style>
	ul {
		list-style: none;
	}

</style>
