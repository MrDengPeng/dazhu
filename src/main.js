import Vue from 'vue'
import App from './App'
import router from './router'
import flexible from 'amfe-flexible'
import HeadTop from './components/HeadTop'


import FastClick from 'fastClick'
import store from './store'
import {http} from './assets/js/http'
import {callNative} from './assets/js/common'
http(Vue);

const token = 'OTV8YndhNDc0ZXpmcnwxODkzODg4NjA1Mw==' || localStorage.getItem('token');

Vue.prototype.$token = token;

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.prototype.$callNative = callNative;


Vue.config.productionTip = false;

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
};
/* eslint-disable no-new */
import('@/assets/js/mui.min').then(function(mui){
	Vue.prototype.$mui = mui;
	new Vue({
	  el: '#app',
	  store,
	  router,
	  template: '<App/>',
	  components: { App }
	})	
})