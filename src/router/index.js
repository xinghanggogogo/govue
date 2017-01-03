import Vue from 'vue';
import VueRouter from 'vue-router'; 

import App from '/home/xinghang/gogogo/src/App.vue';
import Test from '/home/xinghang/gogogo/src/page/Test.vue';
import Test2 from '/home/xinghang/gogogo/src/page/Test2.vue';

Vue.use(VueRouter); 

const routes = [
	{ path: '/', redirect: '/test'},
	{ path: '/test', name: 'test', component: Test },
	{ path: '/test2', name: 'test2', component: Test2 }
]

const router = new VueRouter({
	mode:'history', 
    	routes:routes,
    	linkActiveClass:'active',
    	history:true
	}); 

export  default router