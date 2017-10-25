import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store.js'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Stats from './pages/Stats.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/stats',
			component: Stats
		}
	]
});

new Vue({
	el: '#app',
	render: h => h(App),
	store,
	router
})
