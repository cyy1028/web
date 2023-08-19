import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/vueInit.js";
import store from "./store.js";
import effect from "../public/effect";
Vue.config.productionTip = false;

import scroll from 'vue-seamless-scroll';


//引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//使用element-ui
Vue.use(ElementUI);
// 使用表格滚动
Vue.use(scroll)
// axios
let { post, get, put, deletefn } = require("./axios.js");
// import axios from 'axios';
// Vue.prototype.$ajax = axios;
// 引入echarts
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;
// 引入动画组件
import animated from "animate.css";
Vue.use(animated);
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$put = put;
Vue.prototype.$deletefn = deletefn;
Vue.prototype.effect = effect;

//路由守卫
// router.beforeEach((to, from, next) => {
//   //如果进入到的路由是登录页，则正常展示
//   if (to.path == '/Login') {
//     next();
//   } else if (!localStorage.getItem('username') || !localStorage.getItem('psw')) {
//     next('/Login');
//     //转入login登录页面，登录成功后会将token存入localStorage
//   } else {
//     next();
//   }
// })
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
