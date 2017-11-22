import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://192.168.0.67:80/lottery';
axios.defaults.transformRequest = [data => qs.stringify(data)];
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function request(method, url, param, cb, errcb) {
    const config = {
        url: url,
        method: method,
        data: param
    }
    axios(config)
        .then((res) => {
            var data = res.response
            if (data.status == 200) {
                // 请求成功
                if (cb) {
                    cb()
                }
            } else {
                // 请求错误
                console.error(data)
                if (errcb) {
                    errcb(data.msg, data.model)
                } else {
                    alert(data.message)
                }
            }
        })
        .catch((error) => {
            console.error(error)
            alert('服务器出错，请稍候再试')
        })
}

export function post(...args) {
    request('post', ...args)
}

export function get(...args) {
    request('get', ...args)
}