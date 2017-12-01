// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
/*import http from 'src/assets/js/http'*/
import router from './router'

import flexible from 'amfe-flexible'
//import './assets/js/rem'

import HeadTop from './components/HeadTop'
//import {utils} from './assets/js/utils'
//utils(window)

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
	props: ['wrap'],
	template: '<div><div class="load-wrap" v-show="wrap"></div><div class="load"><img class="img-center" src="../static/images/load.gif"></div></div>'
});
Vue.component('header-top', {
	props: ['headTitle', 'bgWhite'],
	template: '\
		<HeadTop :head-title="headTitle" :bgWhite="bgWhite">\
			<slot name="use" slot="use"></slot>\
		</HeadTop>\
		',
	components: { HeadTop }
});
Vue.prototype.$callnative = function(funcName, args){
    args = args || [];
    if( /iPhone/.test(navigator.userAgent) ){
        var url = "ss:"+funcName;
        if(args){
            url += "/";
            url += JSON.stringify(args);
        }
        location.href = url;
    }else{
        window.native[funcName](JSON.stringify(args));

    }
}
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