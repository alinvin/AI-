import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/store'
import axios from 'axios';
import ElementUI from 'element-ui';
import http from '@/utils/http.js';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import "babel-polyfill";

Vue.use(ElementUI, {
    size: 'small'
});
Vue.prototype.$axios = axios;

axios.defaults.baseURL = 'http://192.168.3.146:8120/ai_voice/v1';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 20000; //响应时间

//添加请求拦截器
axios.interceptors.request.use(function (config) {
    //在发送请求之前做某事
    // console.log(config);
    return config;
}, function (error) {
    //请求错误时做些事
    return Promise.reject(error);
});

//添加响应拦截器
axios.interceptors.response.use(function (response) {
    //对响应数据做些事
    return response;
}, function (error) {
    //请求错误时做些事
    return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    } else {
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        } else {
            next();
        }
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
