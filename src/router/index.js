import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../App.vue';
import page1 from '../page/page1.vue';	//路由和组件
import page2 from '../page/page2.vue';	//父组件向子组件传值
import page3 from '../page/page3.vue';	//父组件调用子组件方法
import page4 from '../page/page4.vue';	//子组件向父组件通信
import page5 from '../page/page5.vue';	//http调用与v-for

Vue.use(VueRouter);

const routes = [
	{ path: '/page1', name: 'page1', component: page1 },
	{ path: '/page2', name: 'page2', component: page2 },
	{ path: '/page3', name: 'page3', component: page3 },
	{ path: '/page4', name: 'page4', component: page4 },
	{ path: '/page5', name: 'page5', component: page5 },
]

const router = new VueRouter({
	mode:'history',
    routes:routes,
	linkActiveClass:'active',
	history:true
	});

export  default router
