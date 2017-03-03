import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource );

import App from './App.vue';
import router from './router/index.js'

new Vue({
	el: '#app',
	render: h => h(App),
	router
	})
