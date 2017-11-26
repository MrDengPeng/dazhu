// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
/*import http from 'src/assets/js/http'*/
import router from './router'

import flexible from 'amfe-flexible'
//import './assets/js/rem'

import FastClick from 'fastClick'
import store from './store'
import {http} from './assets/js/http'
http(Vue);

//'http://192.168.0.13:8085/weizhu.api/api/'
//'http://192.168.0.110:8088/weizhu.api/api/'
//const instance = Axios.create({
//	baseURL: 'http://192.168.0.110:8088/weizhu.api/api/',
//	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//	timeout: 10000
//})
//Vue.prototype.$axios = instance;
const token = localStorage.getItem('token');
Vue.prototype.$token = token;
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
Vue.config.productionTip = false
Vue.component('load-statu', {
	template: '<div class="load-wrap"><div class="load"><img src="static/images/load.gif"></div></div>'
});
/* eslint-disable no-new */
import('@/assets/js/mui.min').then(mui => {
	Vue.prototype.$mui = mui;
	new Vue({
	  el: '#app',
	  store,
	  router,
	  template: '<App/>',
	  components: { App }
	})
});
//new Vue({
//el: '#app',
//store,
//router,
//template: '<App/>',
//components: { App }
//})