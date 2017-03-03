import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../App.vue';
import page1 from '../page/page1.vue';
import page2 from '../page/page2.vue';
import page3 from '../page/page3.vue';
import page4 from '../page/page4.vue';

Vue.use(VueRouter);

const routes = [
	{ path: '/page1', name: 'page1', component: page1 },
	{ path: '/page2', name: 'page2', component: page2 },
	{ path: '/page3', name: 'page3', component: page3 },
	{ path: '/page4', name: 'page4', component: page4 },
]

const router = new VueRouter({
	mode:'history',
    routes:routes,
	linkActiveClass:'active',
	history:true
	});

export  default router
