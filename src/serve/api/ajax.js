import axios from 'axios'

export default function ajax(url = '', params = {}, type = 'GET') {
    // 1. 变量
    let promise;
    // 2. 返回一个promise对象
    return new Promise((resolve, reject) => {
        // 2.1 判断请求的类型
        if (type === 'GET') { 
            promise = axios.get(url);
        } else if (type === 'POST') { // post请求
            // 2.7 发起post请求
            promise = axios.post(url, params);
        }
        // 2.8 处理结果并返回
        promise.then((response) => {
            resolve(response.data);
        }).catch(error => {
            reject(error);
        })
    });
}