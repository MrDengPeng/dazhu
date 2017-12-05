/**
 * Created by xqj on 17/11/20.
 */
import axios from 'axios';
import Qs from 'qs';

var instance = axios.create({
    baseURL: 'http://192.168.0.110:8080/weizhu.api/api/',

    headers: { 
    	'Content-Type': 'application/x-www-form-urlencoded',
    	'token': 'OTV8YndhNDc0ZXpmcnwxODkzODg4NjA1Mw==',
    	'devices': 'ios',
    	'version': '3.4'
    },
    timeout: 5000
});
const API_CODE = {
    SUCCESS: 200
}
const GET = 1;
const POST = 2;
// 非正常错误提示
var errorReject = {
    message: '服务器出小差了，请稍后再试'
}
export function http (Vue, options) {
    function generateResultObj(msg) {
        return {
            message: msg
        }
    }
    function handlerError(error, reject) {
        if (error.message.match("timeout")) {
            reject(generateResultObj('连接超时，请稍后再试'))
            return;
        }
        if (error.message.match("Network Error")) {
            reject(generateResultObj('服务器出小差了，请稍后再试'))
            return;
        }
    }
    function handlerSuccess(result, resolve, reject) {
        if (!result) {
            reject(errorReject)
            return;
        }
        // 请求成功
        if (result.status === API_CODE.SUCCESS) {
        	if(result.status == 500){
        		throw new Error('服务器出错');
        	}
            resolve(result);
            return;
        }
        reject(result);
        return;
    }
    /*function closeLoading() {
        Vue.prototype.$loading.close()
    }*/

    function request(methods, url, params, options = {}) {
        if (options.urlParams) {
            var arr = Object.keys(options.urlParams);
            for (let i = 0; i < arr.length; i++) {
                url = url.replace('{' + arr[i] + '}', options.urlParams[arr[i]]);
            }
        }

        switch (methods) {
            case GET:
                return get(url, params, options);
            case POST:
                return post(url, params, options);
        }
    }
    function get(url, params, options) {
        return new Promise((resolve, reject) => {
            options.params = params;
            instance.get(
                url,
                options.params,
                options.config
            ).then((result) => {
                handlerSuccess(result, resolve, reject)
            }).catch((e) => {
                handlerError(e, reject);
            })
        })
    }
    function submit(url, params, options = {}) {
        options.config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: [function (data) {
                // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
                data = Qs.stringify(data);
                return data;
            }]
        }
        return post(url, params, options)
    }
    function upload(url, params, options = {}) {
        options.config = {
            headers: { 
                'Content-Type': 'multipart/form-data'
            }
        }
        return request(POST, url, params, options)
    }
    function post(url, params, options = {}) {
        /*options.loading && Vue.prototype.$loading("加载中...")*/
       	params = Qs.stringify(params);
       	console.log(params);
        return new Promise((resolve, reject) => {
            instance.post(
                url,
                params,
                options.config).then((result) => {
                    handlerSuccess(result, resolve, reject);
                }).catch((e) => {
                    console.log(e)
                    handlerError(e, reject);
                });
        })
    }
    Vue.prototype.$get = function (url, urlParams, params, options = {}) {
        options.urlParams = urlParams;
        return request(GET, url, params, options);
    }
    /**
     *      options: 
     *      loading ： 是否显示loading
     *      config  : http请求的配置信息
     */
    Vue.prototype.$post = function (url, params, options = {}, urlParams = {}) {
        options.urlParams = urlParams;
        return request(POST, url, params, options);
    }
    // 目前只用于登录
    Vue.prototype.$submit = function (url, params, options = {}) {
        return submit(url, params, options);
    }
    //  文件上传
    Vue.prototype.$upload = function (url, params, options = {}) {
        return upload(url, params, options)
    }
}