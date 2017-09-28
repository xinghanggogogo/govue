import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource );

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

import App from './App.vue';
import router from './router/index.js'
import store from './store/index.js'

new Vue({
	el: '#app',
	render: h => h(App),
	router,
	store
})
