import axios from 'axios';

// 超时将定义为失败
axios.defaults.timeout = 15000;
axios.defaults.withCredentials = true;
// 定义一个请求拦截器
axios.interceptors.request.use(
    config => {
        // console.log(config.url)
        if (config.url !='/user/auth/login') {
            const token = localStorage.getItem('token');
            config.headers['Content-Type'] = 'application/json;charset=utf-8';
            config.headers['token'] =   token
        } 
        config.url = `http://test-api.zijingshuke.com/baixiang${config.url}`

        return config;
    },
    error => {
        return Promise.reject(error)
    }
);

// 响应拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)

// 封装请求
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
                // console.log(response.data)
                if(response.data.code==8 || response.data.code==9){
                    this.$router.push('/Login')
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url,data)
            .then(response => {
                resolve(response.data);
                if(response.data.code==8 || response.data.code==9){
                    this.$router.push('/login')
                }
                // console.log(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
                if(response.data.code==8 || response.data.code==9){
                    this.$router.push('/login')
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}
export function deletefn(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.delete(url,data)
            .then(response => {
                resolve(response.data);
                if(response.data.code==8 || response.data.code==9){
                    this.$router.push('/login')
                    this.$message.error(response.data.msg)
                }
                // console.log(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
